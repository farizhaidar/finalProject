import "../style/style.css";
import p1 from "../picture/gambar1.jpg";

const Members = () => {
    return(
    <div className="background1 h-screen pt-0 border">
      <h1 className="text-3xl font-semibold mt-9 text-center">Our Members</h1>
      <div className="text-lg flex mx-32 my-10">
        <img src="https://aniyuki.com/wp-content/uploads/2022/06/aniyuki-anime-profile-picture-21.jpg" alt="" className="w-60 rounded-full" />

        <p className="ml-16 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable.
        </p>
      </div>

      <div className="text-lg flex mx-32 my-14">
        <p className="mr-16 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable.
        </p>
        <img src="https://wallpapers.com/images/hd/anime-profile-picture-kbt0y2tr4lx7zmwu.jpg" alt="" className="w-60 rounded-full" />
      </div>
    </div>
    )
}

export default Members