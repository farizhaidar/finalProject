import "../style/style.css";
import p1 from "../picture/fariz.jpg";
import p2 from "../picture/rani.jpg";

const Members = () => {
  return (
    <div className="background1 h-screen pt-0 border">
      <h1 className="text-3xl font-semibold mt-9 text-center">Our Members</h1>
      {/* Bagian fariz */}
      <div className="text-lg flex mx-32 my-10">
        <img src={p1} alt="" className="w-60 rounded-full" />
        <div className="ml-4">
          <h3 className="font-bold text-xl">Fariz Haidar Zhaffran</h3>
          <p className="text-justify pt-4">
            "Agus lapar, Buk" ~ Agus
          </p>
        </div>
      </div>

      {/* Bagian rani */}
      <div className="text-lg flex mx-32 my-14">
        <div className="mr-auto">
          <h3 className="text-right font-bold text-xl">Chairania Jasmine B</h3>
          <p className="mt-4 text-justify">
            <i>"Semua manusia di muka bumi ini bingung, nanti g bingung kalau udah di surga"</i> ~ Lord Adi Taher
          </p>
        </div>
        <img src={p2} alt="" className="w-60 rounded-full" />
      </div>
    </div>
  );
};

export default Members;
