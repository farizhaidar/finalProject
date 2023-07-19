import p1 from '../picture/gambar1.jpg';
import p2 from '../picture/info1.jpg';
import p3 from '../picture/info2.jpg';
import p5 from '../picture/info3.jpg';
import p4 from '../picture/gambar3.jpg'
import "../style/style.css" ;
import like from '../picture/thumbs-up.svg'
import Carousel from '../Components/Carousel';

const Home = () => {
  return (
    <div className="">
      {/* Carousel Section */}
      <div className='bg-current'>
        {/* Carousel component */}
        <Carousel/>
      </div>

      {/* Bagian Latest News & Info */}
      <div className="h-screen bg-black border-w-4 border-blue-300">
        <section className="my-4">
          {/* Heading untuk Latest News & Info */}
          <h1 className="text-white text-4xl font-bold mb-2 text-center pt-8">Latest News & Info</h1>
          <h2 className="text-white text-center pt-2">Whats going on</h2>
          <div className="pl-16 pr-16 pt-16" >
            <div className="flex space-x-4">
              {/* Info 1 */}
              <div className="flex-1 bg-white rounded-md p-0 text-center">
                <img src={p2} alt="Info 1" className="w-full mx-fill mb-4 rounded-md" />
                <h3 className="text-gray-800">TIK EXPO 2023</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
              {/* Info 2 */}
              <div className="flex-1 bg-white rounded-md p-0 text-center ">
                <img src={p3} alt="Info 2" className="w-full rounded-md mx-auto mb-4" />
                <h3 className="text-gray-800">TIK FEST 2023</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
              {/* Info 3 */}
              <div className="flex-1 bg-white rounded-md p-0 text-center">
                <img src={p5} alt="Info 3" className="w-full mx-fill mb-4 rounded-md" />
                <h3 className="text-gray-800">FINAL EXAM</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bagian Upcoming Event */}
      <div className=" ">
        <div className="h-auto background1 border ">
          <section className="my-4">
            {/* Heading untuk Upcoming Event */}
            <h2 className="text-black text-4xl font-bold mb-2 text-center">Upcoming Event</h2>
            <div className="pl-16 pr-16 pt-8">
              {/* Tabel buat list Upcoming Events */}
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-black">
                    <th className="text-left text-black text-2xl pt-4 pb-4">Date</th>
                    <th className="text-left text-black text-2xl pt-4 pb-4" >Event </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Upcoming Event 1 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>11</span> July</td>
                    <td className="text-black-white pt-4 pb-4">TIKEXPO</td>
                  </tr>
                  {/* Upcoming Event 2 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>17</span> July</td>
                    <td className="text-black pt-4 pb-4">FINAL EXAM</td>
                  </tr>
                  {/* Upcoming Event 3 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>20</span> July</td>
                    <td className="text-black pt-4 pb-4">TIK FEST</td>
                  </tr>
                  {/* Upcoming Event 4 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>12</span> SEPT</td>
                    <td className="text-black pt-4 pb-4">FINAL EXAM</td>
                  </tr>
                  {/* Upcoming Event 5 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>25</span> July</td>
                    <td className="text-black-white pt-4 pb-4">UJIAN PERBAIKAN</td>
                  </tr>
                  {/* Upcoming Event 6 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>1-4</span> AUGUST</td>
                    <td className="text-black-white pt-4 pb-4">EVALUASI NILAI SEMESTER</td>
                  </tr>
                  {/* Upcoming Event 7 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>10</span> AUGUST</td>
                    <td className="text-black-white pt-4 pb-4">LIBURAN SEMESTER GENAP</td>
                  </tr>
                  {/* Upcoming Event 8 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>14-25</span> AUGUST</td>
                    <td className="text-black-white pt-4 pb-4">DAFTAR ULANG SEMESTER GANJIL</td>
                  </tr>
                  {/* Upcoming Event 9 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>17</span> AUGUST</td>
                    <td className="text-black-white pt-4 pb-4">PENDAFTARAN PKKP</td>
                  </tr>
                  {/* Upcoming Event 10 */}
                  <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>11</span> SEPT</td>
                    <td className="text-black-white pt-4 pb-4">AWAL PERKULIAHAN SEMESTER GANJIL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home;
