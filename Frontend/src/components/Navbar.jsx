import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { LOGIN_MODAL_ID } from "./Login";
import usePersistedTheme from "../hooks/usePersistedTheme";
import { NAVIGATION_LINKS, ROUTE_PATHS } from "../constants/routes";

const NAV_MENU_ID = "primary-navigation";

function Navbar() {
  const [authUser] = useAuth();
  const location = useLocation();
  const { theme, toggleTheme } = usePersistedTheme();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleOpenLoginModal = () => {
    if (typeof document === "undefined") return;
    document.getElementById(LOGIN_MODAL_ID)?.showModal();
  };

  const getNavLinkClassName = ({ isActive }) =>
    `font-medium transition-colors hover:text-pink-500 ${
      isActive ? "text-pink-500" : ""
    }`;

  const renderNavItems = (onNavigate) =>
    NAVIGATION_LINKS.map(({ label, to }) => (
      <li key={to}>
        <NavLink
          to={to}
          end={to === ROUTE_PATHS.HOME}
          className={getNavLinkClassName}
          onClick={onNavigate}
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 bg-transparent transition-all ${
        isSticky
          ? "shadow-md backdrop-blur dark:bg-slate-800/80 bg-white/80"
          : "dark:bg-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-10">
        <div className="navbar-start flex items-center gap-4">
          <div className="dropdown relative">
            <button
              type="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls={NAV_MENU_ID}
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul
                id={NAV_MENU_ID}
                className="menu dropdown-content absolute left-0 z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                {renderNavItems(closeMobileMenu)}
              </ul>
            )}
          </div>
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <img
              src="/img/logo.png"
              width={48}
              height={48}
              alt="Defensive DEAMS"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {renderNavItems()}
            </ul>
          </div>
          <button
            type="button"
            aria-label="Toggle theme"
            className="swap swap-rotate"
            onClick={toggleTheme}
          >
            <svg
              className={`h-7 w-7 ${
                theme === "dark" ? "hidden" : "block"
              } fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
            </svg>
            <svg
              className={`h-7 w-7 ${
                theme === "dark" ? "block" : "hidden"
              } fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </button>

          {authUser ? (
            <Logout />
          ) : (
            <button
              type="button"
              className="rounded-md bg-black px-4 py-2 text-white duration-300 hover:bg-slate-800"
              onClick={handleOpenLoginModal}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
