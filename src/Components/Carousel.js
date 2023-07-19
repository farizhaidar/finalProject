import React, { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PX1 from "../picture/slide1.jpg";
import PX2 from "../picture/PNJ.jpg";
import PX3 from "../picture/Himatik1.jpg";
import PX4 from "../picture/himatik4.jpg";
import PX5 from "../picture/anjaytiwaibi.jpg";
import Slider from "react-slick";
import 'slick-carousel';
import "../style/style.css";

// Data array untuk gambar carousel
const Paps = [
  { source: PX1, caption: "Teknik Informatika dan Komputer" },
  { source: PX3, caption: "Kegiatan Mahasiswa" },
  { source: PX4, caption: "Kegiatan Mahasiswa" },
  { source: PX5, caption: "Kegiatan Mahasiswa" },
];

// Komponen Carousel
export const Carousel = () => {
  // State untuk menyimpan indeks slide saat ini
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pengaturan konfigurasi carousel
  const carouselSettings = {
    dots: true,                 // Menampilkan navigasi titik (dots) untuk indikator slide
    infinite: true,             // Mengizinkan melintasi slide secara tak terbatas
    speed: 5000,                // Kecepatan perpindahan slide dalam milidetik
    slidesToShow: 1,            // Jumlah slide yang ditampilkan pada satu waktu
    slidesToScroll: 1,          // Jumlah slide yang digeser pada setiap perpindahan
    autoplay: true,             // Memutar slide secara otomatis
    autoplaySpeed: 30,          // Kecepatan autoplay dalam detik
    width: 500,                 // Lebar slide dalam piksel
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Fungsi untuk menyimpan indeks slide saat ini saat terjadi perpindahan slide
  };

  return (
    // Component Slider yang berfungsi sebagai carousel dengan menggunakan konfigurasi carouselSettings
    <Slider {...carouselSettings} className="w-screen max-h-screen overflow-hidden">
      {/* Membuat setiap slide dengan mengiterasi data pada array Paps */}
      {Paps.map((item, index) => (
        <div key={item.source}>
          <div className="relative">
            {/* Menampilkan gambar slide */}
            <img
              className="object-cover min-h-screen mx-auto"
              src={item.source}
              alt={`Slide ${index + 1}`}
            />
            {/* Menampilkan teks caption di atas gambar */}
            <div className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center">
              <h1 className="text-6xl font-bold ">{item.caption}</h1>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
