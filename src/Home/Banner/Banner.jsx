import slide1 from "../../assets/images/banner/1.jpg";
import slide2 from "../../assets/images/banner/2.jpg";
import slide3 from "../../assets/images/banner/3.jpg";
import slide4 from "../../assets/images/banner/4.jpg";
import slide5 from "../../assets/images/banner/5.jpg";
import slide6 from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide6"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slide5} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={slide6} className="w-full" />
          <div className="absolute top-0 left-0 justify-center flex-col text-white flex  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="pl-4 space-y-7 w-1/2 ">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn btn-lg bg-[#FF3811] mr-5">
                  Discover More
                </button>
                <button className="btn btn-lg btn-error btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a
              href="#slide5"
              className="btn btn-circle mr-5 text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle text-white bg-[#FF3811] border-red-600 hover:bg-red-600 hover:border-red-500"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
