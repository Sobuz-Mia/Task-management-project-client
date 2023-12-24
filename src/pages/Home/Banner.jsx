import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
// import logo from '../../assets/banner-removebg-preview.png'
const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto flex pt-5">
      <div className="w-full flex lg:flex-col items-center justify-center">
        <h2 className="text-3xl text-white  w-4/5">
          Task management made simple and collaborative.
          <br /> Enhance your workflow, achieve more together.
        </h2>
       <Link to={'Dashboard'}> <button className="btn mt-5 btn-ghost text-white bg-[#B827AF] text-xl">Let’s Explore</button></Link>
      </div>
      <img
        className="bg-gradient-to-r from-[#38065D] to-[#56077E] rounded-lg h-[500px] w-full"
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default Banner;
