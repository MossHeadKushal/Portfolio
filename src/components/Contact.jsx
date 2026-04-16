import React from "react";
import { CONTACT } from "../constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pb-24 bg-stone-950/90 px-4 sm:px-6 md:px-8"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-stone-800 bg-stone-950/80 p-8 shadow-xl shadow-black/20">
        <h2 className="mb-8 text-center text-4xl">Contact</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6 text-center">
            <FaMapMarkerAlt className="mx-auto mb-4 text-4xl text-stone-300" />
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
              Location
            </p>
            <p className="mt-2 text-base text-stone-300">{CONTACT.address}</p>
          </div>
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6 text-center">
            <FaPhoneAlt className="mx-auto mb-4 text-4xl text-stone-300" />
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
              Phone
            </p>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="mt-2 block text-base text-stone-300 hover:text-white"
            >
              {CONTACT.phoneNo}
            </a>
          </div>
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6 text-center">
            <FaEnvelope className="mx-auto mb-4 text-4xl text-stone-300" />
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
              Email
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block text-base text-stone-300 hover:text-white"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
