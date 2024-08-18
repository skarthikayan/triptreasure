import GettingStartedImage from "../../assets/getting-started.svg?react";
import Explore from "../../assets/explore.svg?react";
import Play from "../../assets/play.svg?react";

import Button from "../../components/Button";

function GettingStarted() {
  return (
    <div className="flex flex-row width-full justify-between items-center gap-3 px-28">
      <div className="flex flex-col max-w-md min-h-96 justify-between item-start gap-9">
        <Button className="text-sectionTitle">
          Explore the world! <Explore />
        </Button>
        <h1 className="text-textTitle text-6xl font-bold     leading-tight">
          Travel <span className="text-sectionTitle ">top destinations</span> of
          the world
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible{" "}
        </p>
        <div className="flex flex-row gap-4">
          <Button className="text-sectionTitle text-white bg-buttonBg">
            Get Started
          </Button>
          <Button className="text-black border-black">
            Watch Demo <Play />
          </Button>
        </div>
      </div>
      <GettingStartedImage />
    </div>
  );
}

export default GettingStarted;
