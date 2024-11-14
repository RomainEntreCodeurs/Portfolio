import { useTranslation } from "react-i18next";
import { PORTFOLIO } from "../../utils/constants";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer class="bg-slate-50 m-0 p-10">
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {t("footer.year")}
            <a href={PORTFOLIO} class="hover:underline mx-3">
              {t("footer.person")}
            </a>
            {t("footer.text")}
          </span>
        </div>
      </footer>
    </>
  );
}
