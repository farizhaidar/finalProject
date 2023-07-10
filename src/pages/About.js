import React from 'react';
import p1 from '../picture/PNJ.jpg'
import p2 from "../picture/bu anita 3.jpg"

const About = () => {
  return (
    <div className="mx-auto py-4 h-auto w-screen background1">
      <div>
        <section>
          
        </section>
            <h1 className="text-4xl font-bold mb-4 p-4">About TIK</h1>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pl-8 pr-8" >
            <img
              src={p1}
              alt="About"
              className="w-100 h-auto mb-4 rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 pl-4 ">
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="mb-4 mr-8 text-justify">
            Jurusan Teknik Informatika dan Komputer (TIK) diresmikan pada 2 Juni 2014 yang bertujuan untuk menghasilkan lulusan sarjana sains terapan yang berpengalaman dan mampu memecahkan masalah dalam bidang Teknik Informatika dan Komputer dengan menganalisis, merancang dan membangun sistem.
 
            Saat ini Jurusan Teknik Informatika dan Komputer memiliki empat program studi yaitu Teknik Informatika, Teknik Multimedia dan Jaringan, Teknik  Multimedia Digital dan Teknik Komputer dan Jaringan.
            </p>
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className='mr-8 text-justify'>
            Menyelenggarakan pendidikan vokasi yang berbasis ilmu pengetahuan dan teknologi Teknologi Informasi dan Komputer yang berkarakter dan bertaqwa kepada Tuhan Yang Maha Esa
            Mengembangkan penelitian dan peningkatan penerapan ilmu pengetahuan dan teknologi serta produk inovasi berkualitas di bidang Teknologi Informasi dan Komputer.
            Mengembangkan institusi yang efisien, efektif dan akuntabel berbasis ICT (Information Communication Technology)
            </p>
          </div>
        </div>
        <div className='bg-gray-900 h-auto w-screen px-0'>
          <div className='flex-col items-center justify-center h-auto'>
            <div className='w-50 m-16 mb-0 '>
              <img src={p2} alt='' className='rounded-full w-1/6 mx-auto pt-8' />
              <p className='font-bold font-serif text-xl text-center text-white pt-4'>Dr. Anita Hidayati, S.Kom., M.Kom.</p>
              <p className='font font-serif text-xl text-center text-white'>Ketua Jurusan TIK</p>
            </div>

          </div>
          <div className='m-16 mr-60 ml-60 text-center text-white pb-8'>
            <p className='mb-7'>Beliau merupakan seorang yang memiliki prestasi gemilang di bidang pendidikan dan teknologi. Sebagai Ketua Jurusan TIK di Politeknik Negeri Jakarta, beliau memiliki pengalaman dan pengetahuan yang luas dalam memimpin dan mengembangkan program studi tersebut.</p>
            <p>Beliau memulai perjalanan pendidikan di SMA Negeri 1 Sooko Mojokerto pada tahun 1994-1997, di mana beliau telah menunjukkan dedikasi dan keunggulan akademik sejak saat itu. Setelah lulus dari SMA, beliau melanjutkan pendidikan tinggi di Institut Teknologi Sepuluh November (ITS), di mana beliau berhasil menyelesaikan gelar S1 dan S2. Beliau tidak berhenti di tingkat S2 dan memutuskan untuk melanjutkan pendidikan doktoral di Universitas Indonesia (UI).</p>     
          </div>
        </div>

      </div>

    </div>

  );
};

export default About;