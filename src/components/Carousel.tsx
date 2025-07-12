"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarrosselImagensProps = {
  imagens: { src: string; alt: string }[];
};

export default function CarrosselImagens({ imagens }: CarrosselImagensProps) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <>
      <style jsx global>{`
        /* Container que envolve os slides */
        .slick-list {
          height: 300px !important;
          overflow: hidden;
        }

        /* Cada slide */
        .slick-slide {
          height: 250px !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        /* Container interno que react-slick cria dentro do slide */
        .slick-slide > div {
          height: 100% !important;
          width: 100% !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <div
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          height: "250px",
        }}
      >
        <Slider {...settings}>
          {imagens.map(({ src, alt }, index) => (
            <div key={index}>
              <img
                src={src}
                alt={alt}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px",
                  userSelect: "none",
                }}
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
