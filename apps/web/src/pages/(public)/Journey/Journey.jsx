import React from "react";
import { useTranslation } from "react-i18next";
import juliedaubie from "../../../assets/images/juliedaubie.svg";
import robertschuman from "../../../assets/images/robertschuman.svg";
import mns from "../../../assets/images/logo-mns.svg";

export default function Journey() {
  const { t } = useTranslation();

  const education = [
    {
      label: t("journey.education.0.label"),
      duration: t("journey.education.0.duration"),
      link: "#",
      image: juliedaubie,
    },
    {
      label: t("journey.education.1.label"),
      duration: t("journey.education.1.duration"),
      link: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers",
      image: robertschuman,
    },
    {
      label: t("journey.education.2.label"),
      duration: t("journey.education.2.duration"),
      link: "https://www.metz-numeric-school.fr/fr/formations/developpement-informatique/developpeur-full-stack-en-alternance",
      image: mns,
    },
  ];

  return (
    <div className="py-12 bg-gray-50" id="parcours">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
          {t("journey.title")}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          {t("journey.subTitle")}
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          {education.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src={item.image} alt={item.label} className="w-28 h-28" />
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <span className="text-2xl tracking-tight text-gray-900">
                  {item.label}
                </span>
                <dd className="text-gray-600">{item.duration}</dd>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
