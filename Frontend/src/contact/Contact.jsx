import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="md:py-20 pt-28 items-center justify-center text-center">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone div */}
        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-50 p-4">
              <Phone className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-lg font-medium  mb-4">Call Us To</h3>
          <p className="">+91 982375 7163</p>
          <p className="">+91 907590 9896</p>
        </div>

        {/* Email div */}
        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-50 p-4">
              <Mail className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-lg font-medium  mb-4">Write Us</h3>
          <p className="">azimsayyad90@gmail.com</p>
        </div>

        {/* Address div */}
        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-50 p-4">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-4">Head Office</h3>
          <p className="">
            Hydrabad Road, Vishnupuri,<br />
            Regional Passport Office,<br />
            Nanded, Maharashtra 431606
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;
