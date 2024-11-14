import React from "react";
import EmailIcon from "../../../components/icons/email";
import LocationIcon from "../../../components/icons/location";
import WebsiteIcon from "../../../components/icons/website";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <EmailIcon />,
      label: t("contact.email.label"),
      text: t("contact.email.text"),
      action: `mailto:${t("contact.email.text")}`,
    },
    {
      icon: <WebsiteIcon />,
      label: t("contact.website.label"),
      text: t("contact.website.text"),
      action: "http://www.romain-gilot.fr",
    },
    {
      icon: <LocationIcon />,
      label: t("contact.location.label"),
      text: t("contact.location.text"),
      action: "#",
    },
  ];

  return (
    <div className="py-24 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
          {t("contact.title")}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          {t("contact.subTitle")}
        </p>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="flex items-center ms:mx-auto">
              {value.icon}
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <a
                  href={value.action}
                  className="text-2xl tracking-tight text-gray-900"
                >
                  {value.text}
                </a>
                <dd className="order-first text-gray-600">{value.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
