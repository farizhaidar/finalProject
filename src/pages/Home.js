import p1 from '../picture/gambar1.jpg';
import p2 from '../picture/info1.jpg';
import p3 from '../picture/info2.jpg';
import p5 from '../picture/info3.jpg';
import p4 from '../picture/gambar3.jpg'
import "../style/style.css" ;
import like from '../picture/thumbs-up.svg'

const Home = () => {
    return(
      <div className="h-screen">
      
        <div className="background1 container mx-auto p-4 h-full border">
          <div className="h-screen flex items-center">
            <div className="flex-1 ">
              <h1 className="text-stone-800 text-8xl font-bold mb-4 text-center ml-auto">TIK</h1>
              <h2 className='text-center pr-8 pl-8'>Start Contributing</h2>
            </div>
            <div className="flex-1/2 ">
              <img src={p4} alt="TIK" className="myImg mr-14 mb-6 rounded-md" />
            </div>
          </div>
        </div>
        <div className="h-screen bg-black border">
          <section className="my-4">
            <h1 className="text-white text-4xl font-bold mb-2 text-center pt-8">Latest News & Info</h1>
            <h2 className="text-white text-center pt-2">Whats going on</h2>
            <div className="pl-16 pr-16 pt-16" >
            <div className="flex space-x-4">
              <div className="flex-1 bg-white rounded-md p-0 text-center">
                <img src={p2} alt="Info 1" className="w-full mx-fill mb-4 rounded-md" />
                <h3 className="text-gray-800">TIK EXPO 2023</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
              <div className="flex-1 bg-white rounded-md p-0 text-center ">
                <img src={p3} alt="Info 2" className="w-full rounded-md mx-auto mb-4" />
                <h3 className="text-gray-800">TIK FEST 2023</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
              <div className="flex-1 bg-white rounded-md p-0 text-center">
              <img src={p5} alt="Info 3" className="w-full mx-fill mb-4 rounded-md" />
                <h3 className="text-gray-800">FINAL EXAM</h3>
                <p className="text-gray-800">JULI, 2023</p>
              </div>
            </div>
            </div>
          </section>
        </div>
        <div className=" ">
          <div className="h-auto background1 border ">
            <section className="my-4">
              <h2 className="text-black text-4xl font-bold mb-2 text-center">Upcoming Event</h2>
              <div className="pl-16 pr-16 pt-8">
                <table className="min-w-full">
                  <thead>
                    
                    <tr className="border-b border-black">
                       <th className="text-left text-black text-2xl pt-4 pb-4">Date</th>
                       <th className="text-left text-black text-2xl pt-4 pb-4" >Event </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="text-black pt-4 pb-4"><span className='text-3xl'>11</span> July</td>
                      <td className="text-black-white pt-4 pb-4">TIKEXPO</td>
                    </tr>
                    <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>17</span> July</td>
                      <td className="text-black pt-4 pb-4">FINAL EXAM</td>
                    </tr>
                    <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>20</span> July</td>
                      <td className="text-black pt-4 pb-4">TIK FEST</td>
                    </tr>

                    <tr className="border-b border-black">
                    <td className="text-black pt-4 pb-4"><span className='text-3xl'>12</span> SEPT</td>
                      <td className="text-black pt-4 pb-4">NEW SEMESTER</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='flex justify-between mt-10 mb-10'>
                <div className='mx-10 border border-black p-10'>
                  <h1 className='font-semibold mb-5'>tempat favorit</h1>
                  <p>
                  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className='mt-5'>
                    
                      <img src={like} className='cursor-pointer hover:w-10'/>
                    
                  </div>
                </div>

                <div className='mx-10 border border-black p-10'>
                  <h1 className='font-semibold mb-5'>tempat favorit</h1>
                  <p>
                  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <img src={like} className='cursor-pointer hover:w-10 pt-4'/>
                </div>
              </div>
              <div className='bg-gray-300 h-30'>
                <div className='flex pl-8 pt-2'>
                  <h1 className='text-white font-bold text-4xl'>TIK</h1>
                  <h1 className='text-sky-700 font-bold pt-4'>REX</h1>
                </div>

                
                <h1 className='text-center pb-4 pt-4'>Copyright @2023</h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
}

export default Home 