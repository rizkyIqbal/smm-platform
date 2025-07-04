import Navbar from "../Component/NavbarLogged";
import backgroundTop from "../assets/img/background/order/top.png";
import backgroundBottom from "../assets/img/background/order/bottom.png";
import sectionOrder from "../assets/img/sectionorder.png";
import sectionInfluencer from "../assets/img/sectioninfluencer.png";
import firstCircle from "../assets/img/orderSMM/firstCircle.png";
import secondCircle from "../assets/img/orderSMM/secondCircle.png";
import thirdCircle from "../assets/img/orderSMM/thirdCircle.png";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

function InfluencerOrder() {
  return (
    <>
      <section className="body-font font-poppins w-screen sm:overflow-x-hidden text-black">
        <Navbar />
        <div className="flex">
          <div className="absolute -z-20 right-0">
            <img src={backgroundTop} className="w-[550px] h-auto" alt="" />
          </div>
          <div className="absolute -z-20 top-[420px]">
            <img src={backgroundBottom} className="w-[850px] h-auto" alt="" />
          </div>
        </div>
        <div className="px-32 py-24">
          <p className="text-2xl font-medium mb-12">Influencer</p>
          <div className="flex items-center justify-between ">
            <div className="mr-96">
              <p className="text-3xl font-medium">Increase Followers</p>
              <p className="text-xl mt-2">Your Business Is Instantly Famous</p>
              <Link to="/seller">
                <button className="btn w-44 mt-4 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:text-white">
                  Start Now
                </button>
              </Link>
            </div>
            <img src={sectionInfluencer} className="w-[620px] h-auto" alt="" />
          </div>
          <div className="flex items-center mt-24">
            <img src={sectionOrder} className="w-[620px] h-auto" alt="" />
            <div className="ml-12">
              <p className="text-3xl font-medium">Increase Trust</p>
              <p className="text-xl mt-2">Reviewed By Famous Influencer</p>
              <Link to="/seller">
                <button className="btn w-44 mt-4 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:border-[3px] hover:border-white hover:text-white">
                  Start Now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between mt-24">
            <div className="mr-96">
              <p className="text-3xl font-medium">100% Money Back Guarantees</p>
              <p className="text-xl mt-2">No impact?</p>
              <p className="text-xl mt-2">
                We refund our service free, no strings attached
              </p>
              <Link to="/seller">
                <button className="btn w-44 mt-4 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:text-white">
                  Start Now
                </button>
              </Link>
            </div>
            <img src={sectionInfluencer} className="w-[620px] h-auto" alt="" />
          </div>

          <div className="mt-32">
            <p className="text-center text-3xl mb-12 font-medium">
              Why Hire Influencer ?
            </p>
            <div className="flex justify-center">
              <div className="mx-4">
                <img src={firstCircle} className="w-[350px] h-auto" alt="" />
                <div className="w-full flex justify-center">
                  <div className="w-56 pt-4">
                    <p className="text-center text-lg">
                      Can Handpick The Influencer You Like
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <img src={secondCircle} className="w-[350px] h-auto" alt="" />
                <div className="w-full flex justify-center">
                  <div className="w-56 pt-4">
                    <p className="text-center text-lg">Custom Made Brief</p>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <img src={thirdCircle} className="w-[350px] h-auto" alt="" />
                <div className="w-full flex justify-center">
                  <div className="w-56 pt-4">
                    <p className="text-center text-lg">
                      Feel The Impact Of Proper Social Media Marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default InfluencerOrder;
