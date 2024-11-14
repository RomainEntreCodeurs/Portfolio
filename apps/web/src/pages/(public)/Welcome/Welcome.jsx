import { useEffect } from "react";
import "./styles/styles.css";
import Modal from "./components/Modal";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();
  useEffect(() => {
    const particlesWrapper = document.createElement("div");
    particlesWrapper.classList.add("particles-wrapper", "overflow-hidden");

    const particlesContainer = document.createElement("div");
    particlesContainer.classList.add("particles-container");
    particlesContainer.style.zIndex = "-1";

    const colors = ["#BEE9E7", "#62B9CB", "#1B4B65", "#CAEBFF", "#5FACD3"];
    const numBalls = 20;

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.transform = `translate(${i * 20}px, 0)`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      ball.style.borderRadius = "10px";

      particlesContainer.append(ball);
    }

    particlesWrapper.appendChild(particlesContainer);

    document.body.appendChild(particlesWrapper);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-3xl py-20 sm:pb-40 particles-line z-1">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
            {t("home.welcome")}
          </h2>
          <h1 className="text-5xl font-bold tracking-tight text-sky-950 sm:text-7xl">
            {t("home.title")}
          </h1>
          <p className="mt-6 font-extralight text-3xl text-gray-400">
            {t("home.message")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Modal textButton={t("home.textButton")} />
          </div>
        </div>
      </div>
    </>
  );
}
