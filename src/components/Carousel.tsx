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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // tablets e abaixo
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <>
      <style jsx global>{`
        /* Container que envolve os slides */
        .slick-list {
          
          overflow: hidden;
        }

        /* Cada slide */
        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        /* Container interno que react-slick cria dentro do slide */
        .slick-slide > div {
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
        }}
      >
        <Slider {...settings}>
          {imagens.map(({ src, alt }, index) => (
            <div key={index}>
              <img
                src={src}
                alt={alt}
                className="w-full max-h-[220px] object-cover block rounded-lg select-none"
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
