import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import itservices from "../assets/itservices-min.jpg";
import cloud from "../assets/cloud-min.jpg";
import cyber from "../assets/cyber-min.jpg";
import networking from "../assets/networking-min.png";
import consulting from "../assets/consulting-min.png";
import databackup from "../assets/databackup-min.jpg";

const slides = [
  {
    title: "Managed IT Services",
    text: "24/7 monitoring, maintenance, and support to keep your operations running.",
    button: "Know More",
    img: itservices,
  },
  {
    title: "Cloud Solutions",
    text: "Migration, hosting, and optimization for scalable cloud infrastructure.",
    button: "Know More",
    img: cloud,
  },
  {
    title: "Cybersecurity",
    text: "Protect against threats with proactive defense and continuous monitoring.",
    button: "Know More",
    img: cyber,
  },
  {
    title: "Networking & Infrastructure",
    text: "Reliable network setup, upgrades, and managed infrastructure services.",
    button: "Know More",
    img: networking,
  },
  {
    title: "IT Consulting",
    text: "Strategic guidance to align IT initiatives with your business goals.",
    button: "Know More",
    img: consulting,
  },
  {
    title: "Data Backup & Recovery",
    text: "Secure backup and recovery solutions to ensure business continuity.",
    button: "Know More",
    img: databackup,
  },
];

const Carousel: React.FC = () => {
  const settings: unknown = {
    dots: true,
    infinite: true,
    speed: 1800,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: true, // optional: keeps smooth fade between slides
    responsive: [
      {
        breakpoint: 768,
        settings: { dots: true, arrows: false },
      },
    ],
  };

  return (
    <section className="pt-20">
       {/* @ts-expect-error: s */}
      <Slider {...settings}>
        {slides.map((s, i) => (
          <div key={i}>
            {/* Background image container */}
            <div
              className="relative w-full flex items-center justify-center text-center px-6 h-[60vh] md:h-[80vh]"
              style={{
                backgroundImage: `url(${s.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* dark overlay for readability */}
              <div className="absolute inset-0 bg-black/55" />

              {/* content box (no up animation) */}
              <div className="relative z-10 px-4 sm:px-6 max-w-full sm:max-w-2xl mx-auto flex flex-col items-center">
  <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white leading-tight">
    {s.title}
  </h1>

  <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg">
    {s.text}
  </p>

  <div className="mt-6">
    <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">
      {s.button}
    </button>
  </div>
</div>

              {/* small mobile gradient to help readability near bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
