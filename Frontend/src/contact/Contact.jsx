import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_SECTIONS = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 982375 7163", "+91 907590 9896"],
  },
  {
    icon: Mail,
    title: "Write Us",
    details: ["azimsayyad90@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: [
      "Hydrabad Road, Vishnupuri",
      "Regional Passport Office",
      "Nanded, Maharashtra 431606",
    ],
  },
];

function Contact() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-20">
      <div className="text-center">
        <h1 className="text-3xl font-semibold md:text-5xl">
          Stay <span className="text-pink-500">connected</span> with us
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Reach out any time—we are here to guide you through every defensive
          strategy and alert.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {CONTACT_SECTIONS.map(({ icon: Icon, title, details }) => (
          <article
            key={title}
            className="rounded-2xl bg-white/70 p-8 text-center shadow-lg dark:bg-slate-800/80"
          >
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-blue-50 p-4 dark:bg-slate-700">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <h3 className="mb-4 text-lg font-medium">{title}</h3>
            {details.map((detail) => (
              <p key={detail} className="text-slate-600 dark:text-slate-200">
                {detail}
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Contact;
