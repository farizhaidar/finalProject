import p1 from '../picture/gambar1.jpg';
import p2 from '../picture/info1.jpg';
import p3 from '../picture/info2.jpg';

const Home = () => {
    return(
        <div className="h-screen">
      
      <div className="container mx-auto p-4 h-full bg-neutral-200 border">
        <div className="h-screen flex items-center">
          <div className="flex-1 ">
            <h1 className="text-zinc-600 text-8xl font-bold mb-4 text-center ml-auto">Welcome to TIKREX</h1>
          </div>
          <div className="flex-1/2 ">
            <img src={p1} alt="TIK" className="" />
          </div>
        </div>
      </div>
      <div className="h-screen bg-black border">
        <section className="my-4">
          <h1 className="text-white text-4xl font-bold mb-2 text-center pt-8">Latest News & Info</h1>
          <h2 className="text-white text-center pt-2">Whats going on</h2>
          <div className="pl-16 pr-16 pt-16" >
          <div className="flex space-x-4">
            <div className="flex-1 bg-white rounded p-0 text-center">
              <img src={p2} alt="Info 1" className="w-full mx-fill mb-4" />
              <h3 className="text-gray-800">TIK FEST</h3>
              <p className="text-gray-800">JULI, 2023</p>
            </div>
            <div className="flex-1 bg-white rounded p-0 text-center ">
              <img src={p3} alt="Info 2" className="w-full rounded mx-auto mb-4" />
              <h3 className="text-gray-800">TIK EXFO 2023</h3>
              <p className="text-gray-800">JULI, 2023</p>
            </div>
            <div className="flex-1 bg-white rounded p-4 text-center">
              <img src="picture/info3.jpg" alt="Info 3" className="w-1/2 rounded mx-auto mb-4" />
              <h3 className="text-gray-800">FINAL EXAM</h3>
              <p className="text-gray-800">JULI, 2023</p>
            </div>
          </div>
          </div>
        </section>
      </div>
      <div className=" ">
        <div className="h-screen bg-neutral-200 border ">
          <section className="my-4">
            <h2 className="text-black text-4xl font-bold mb-2 text-center">Upcoming Event</h2>
            <div className="pl-16 pr-16 pt-8">
              <table className="min-w-full">
                <thead>
                  
                  <tr className="border-b border-black">
                    <th className="text-left text-black text-2xl pt-4 pb-4" >Event </th>
                    <th className="text-left text-black text-2xl pt-4 pb-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="text-black-white pt-4 pb-4">Event Name 1</td>
                    <td className="text-black pt-4 pb-4">June 30, 2023</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="text-black">Event Name 2</td>
                    <td className="text-black">July 5, 2023</td>
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

export default Home 
