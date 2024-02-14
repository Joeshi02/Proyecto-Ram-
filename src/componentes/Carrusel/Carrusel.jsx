import { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carrusel = () => {
  const images = [
    {
      img: "/imagenes/opiniones1.png"
    },
    {
      img: "/imagenes/opiniones2.png"
    },
    {
      img: "/imagenes/opiniones3.png"
    },
    {
      img: "/imagenes/opiniones4.png"
    },
  ];

  const [opinion, setOpinion] = useState(0);

  const prevOpinion = () => {
    const firstOpinion = opinion === 0;
    const newOpinion = firstOpinion ? images.length - 1 : opinion - 1;
    setOpinion(newOpinion);
  };

  const nextOpinion = () => {
    const lastOpinion = opinion === images.length - 1;
    const newOpinion = lastOpinion ? 0 : opinion + 1;
    setOpinion(newOpinion);
  };

  const goToImage = (slideIndex) => {
    setOpinion(slideIndex);
  };

  return (
    <>
      <div className="max-w-[500px] h-[290px] w-full sm:w-2/3 m-auto py-10 px-4 relative group">
        <div
          style={{
            backgroundImage: `url(${images[opinion].img})`,
            width: '100%',
            height: '90%', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
          className="w-full h-full rounded-tr-3xl rounded-bl-3xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevOpinion} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextOpinion} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {images.map((image, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToImage(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carrusel;
