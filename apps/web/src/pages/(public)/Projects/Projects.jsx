import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import imgPortfolio from "../../../assets/images/portfolio.jpg";
import badge from "../../../assets/images/badge.jpg";
import sdis57 from "../../../assets/images/sdis57.jpg";
import Box from "./components/Box";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.portfolio.title"),
      img: imgPortfolio,
      message: t("projects.portfolio.message"),
      projectName: "portfolio",
    },
    {
      title: t("projects.gdept.title"),
      img: sdis57,
      message: t("projects.gdept.message"),
      projectName: "gdept",
    },
    {
      title: t("projects.access.title"),
      img: badge,
      message: t("projects.access.message"),
      projectName: "access",
    },
  ];

  const slidesToShow = Math.min(projects.length, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(projects.length, 2),
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 pt-10" id="mes-projets">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">{t("projects.title")}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">{t("projects.subtitle")}</p>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <Box
              key={index}
              title={project.title}
              img={project.img}
              message={project.message}
              projectName={project.projectName}
              textButton={t("projects.textButton")}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
