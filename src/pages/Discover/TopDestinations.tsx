import UaeImage from "../../assets/uae.svg?react";
import MaldivesImage from "../../assets/maldives.svg?react";
import RomeImage from "../../assets/rome.svg?react";

import Card from "../../components/Card";

function TopDestinations() {
  return (
    <div className="flex flex-col  width-full justify-between items-center  gap-3 sm:px-28 px-4 py-8 relative overflow-hidden">
      <div className="flex flex-row  justify-between items-center w-full">
        <div className="flex flex-col  min-w-80  justify-center items-start gap-4">
          <h2 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
            TOP DESTINATIONS
          </h2>
          <h1 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
            Explore top destinations
          </h1>
        </div>
        <div />
      </div>

      <div className="flex sm:flex-row flex-col justify-start items-center gap-28 w-full  py-8 z-10">
        <Card className="flex flex-col items-start justify-center  text-center ">
          <RomeImage className="w-full h-full m-0 p-0" />
          <div className="flex flex-row gap-3 px-4 py-2">
            <h3 className="text-textTitle font-bold">
              Paradise Beach, Bantayan Island
            </h3>
            <p className="text-sectionTitle">$550.20</p>
          </div>

          <p className="px-4  py-2">Rome, Italy</p>
          <p className="px-4  py-2">4.5 ⭐</p>
        </Card>
        <Card className="flex flex-col items-start justify-center  text-center ">
          <MaldivesImage className="w-full h-full m-0 p-0" />
          <div className="flex flex-row gap-3 px-4 py-2">
            <h3 className="text-textTitle font-bold">
              Ocean with full of Colors
            </h3>
            <p className="text-sectionTitle">$550.20</p>
          </div>

          <p className="px-4  py-2">Maldives</p>
          <p className="px-4  py-2">4.5 ⭐</p>
        </Card>
        <Card className="flex flex-col items-start justify-center  text-center ">
          <UaeImage className="w-full h-full m-0 p-0" />
          <div className="flex flex-row gap-3 px-4 py-2">
            <h3 className="text-textTitle font-bold">
              Mountain View, Above the cloud
            </h3>
            <p className="text-sectionTitle">$550.20</p>
          </div>
          <p className="px-4  py-2">United Arab Emeries</p>
          <p className="px-4  py-2">4.5 ⭐</p>
        </Card>
      </div>
    </div>
  );
}

export default TopDestinations;
