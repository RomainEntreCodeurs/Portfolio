import React from "react";
import { useTranslation } from "react-i18next";
import moi from "../../../assets/images/moi.jpg";
import { LINKEDIN } from "../../../utils/constants";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="a-propos-de-moi" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src={moi}
                alt="RomainGilot"
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
                {t("navbar.aboutMe")}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("aboutMe.sectionTitle")}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">{t("aboutMe.description")}</p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href={LINKEDIN}
                className="text-base font-semibold leading-7 text-[#5FACD3]"
              >
                {t("aboutMe.linkedinText")}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
