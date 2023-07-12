import React, { useState } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PX1 from "../picture/slide1.jpg"
import PX2 from "../picture/PNJ.jpg"
import PX3 from "../picture/Himatik1.jpg"
import PX4 from "../picture/himatik3.jpg"
import PX5 from "../picture/anjaytiwaibi.jpg"
import Slider from "react-slick"
import 'slick-carousel'
import "../style/style.css" ;

const Paps = [
  { source: PX1, caption: "Teknik Informatika dan Komputer" },
  { source: PX4, caption: "Kegiatan Mahasiswa" },
  { source: PX3, caption: "Kegiatan Mahasiswa" },
  { source: PX5, caption: "Kegiatan Mahasiswa" },
  

]

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 30,
      width: 500,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };
  
    return (
      <Slider {...carouselSettings} className="w-screen max-h-screen overflow-hidden">
      {Paps.map((item, index) => (
        <div key={item.source}>
          <div className="relative">
            <img
              className="object-cover min-h-screen mx-auto"
              src={item.source}
              alt={`Slide ${index + 1}`}
            />
            <div className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-4xl font-bold text-with-black-outline">{item.caption}</h1>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    )
}

export default Carousel