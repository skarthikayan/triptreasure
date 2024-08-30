import gettingStartedImage from "../../assets/getting-started.webp";
import Bg from "../../assets/getting-started-bg.svg?react";
import Explore from "../../assets/explore.svg?react";
import Play from "../../assets/play.svg?react";

import Button from "../../components/Button";

function GettingStarted() {
  return (
    <section className="flex lg:flex-row flex-col-reverse width-full justify-between items-center  lg:gap-32 gap:4 lg:px-28 px-4 py-8 relative overflow-hidden">
      <div className="hidden lg:block absolute -bottom-20 -right-40 bg-yellow-200 h-60 w-60 rounded-full z-0 blur-3xl " />
      <Bg className="hidden lg:block absolute -bottom-10 left-5 z-0 " />
      <div className="flex flex-col max-w-md min-h-96 lg:justify-between lg:items-start justify-center items-center lg:gap-24 gap-8 lg:mt-20">
        <Button className="text-sectionTitle">
          Explore the world! <Explore />
        </Button>
        <h1 className="text-textTitle lg:text-6xl text-3xl font-bold leading-tight text-center lg:text-left">
          Travel <span className="text-sectionTitle ">top destinations</span> of
          the world
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible{" "}
        </p>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <Button className="text-sectionTitle text-white bg-buttonBg lg:w-full">
            Get Started
          </Button>
          <Button className="text-black border-black  w-full">
            Watch Demo <Play />
          </Button>
        </div>
      </div>
      <img
        src={gettingStartedImage}
        alt="getting started image"
        className="w-full h-full "
        height={575}
        width={374}
      />
    </section>
  );
}

export default GettingStarted;
