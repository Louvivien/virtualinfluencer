import React from "react";
import Girl from "../../Assets/landingpage/leftPortion/girl.png";
import live from "../../Assets/landingpage/leftPortion/Live.png";
import InstaStat from "../../Assets/landingpage/leftPortion/instaStat.png";
import Testimonial from "../../Assets/landingpage/rightPortion/Testimonial.png";
import HairGirl from "../../Assets/landingpage/rightPortion/hairGirl.png";
import LikePhotos from "../../Assets/landingpage/rightPortion/LikePhotos.png";
import Boy1 from "../../Assets/landingpage/rightPortion/boy1.png";
import GlassesGirl from "../../Assets/landingpage/rightPortion/glassesGirl.png";
import Testimonial2 from "../../Assets/landingpage/rightPortion/Testimonial.png";
import DashingBoy from "../../Assets/landingpage/rightPortion/dashingBoy.png";
import LikesFrame from "../../Assets/landingpage/rightPortion/LikesFrame.png";
import Portfolio from "../../Assets/landingpage/rightPortion/Portfolio06 2.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div id="landingPage" className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 leftPortion">
          <div className="row">
            <div className="col d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center girlSection">
              <img src={InstaStat} className="InstaStat" alt="" />
              <img src={Girl} className="girlImg py-5 pe-5" alt="" />
              <img src={live} className="live" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 col-md-0"></div>
            <div className="col-lg-11 col-md-12">
              <h1 className="">Being an Influencer has never been so easy!</h1>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <button className="btn btn-primary my-3 my-2">
                  Start for Free
                </button>
                <Link to={"/login"} className="btn btn-primary mt-3 mb-5 pt-3">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 rightPortion">
          <div className="row">
            {/* <div className="col-1"></div> */}
            <div className="col-6 mt-5 pt-5 d-flex justify-content-center align-items-center flex-column">
              <img
                src={Testimonial}
                alt=""
                className="mb-3 mt-5 testimonial1"
              />
              <img src={HairGirl} alt="" className="my-3 hairGirl" />
              <img src={LikePhotos} alt="" className="my-3 likes" />
              <img src={Boy1} alt="" className="my-3 boy" />
            </div>
            <div className="col-5  d-flex justify-content-center align-items-center flex-column">
              <img src={GlassesGirl} alt="" className=" glassesGirl" /> <br />
              <img src={Testimonial2} alt="" className=" Testimonial2" />
              <br />
              <img src={DashingBoy} alt="" className=" dashingBoy" />
              <br />
              <img src={LikesFrame} alt="" className=" likeFrame" /> <br />
              <img src={Portfolio} alt="" className=" portfolio" />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
