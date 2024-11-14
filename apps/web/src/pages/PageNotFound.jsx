import React from "react";
import Footer from "../components/common/Footer";
import { useTranslation } from "react-i18next";

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto py-20 sm:py-40 particles-line z-10 text-center">
        <h2 className="text-base font-semibold bg-[#fceaea] rounded p-1 text-[#d35f5f] inline-block mb-10">{t("error.title")}</h2>
        <h1 className="text-5xl font-bold tracking-tight text-sky-950 sm:text-7xl mb-20">{t("error.message")}</h1>
        <a href="/" className="rounded-md bg-[#d35f5f] hover:bg-[#ae4c4c] px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300">
          {t("error.button")}
        </a>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
