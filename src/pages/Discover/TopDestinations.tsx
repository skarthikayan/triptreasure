import uaeImage from "../../assets/uae.png";
import maldivesImage from "../../assets/maldives.png";
import romeImage from "../../assets/rome.png";

import Card from "../../components/Card";

function TopDestinations() {
  return (
    <div className="flex flex-col  width-full justify-between items-center lg:items-start  gap-3 lg:px-28 px-4 py-8 relative overflow-hidden">
      <div className="flex flex-col min-w-80  justify-center lg:items-start items-center gap-4">
        <h2 className="text-sectionTitle lg:text-xl text-base font-bold tracking-wider">
          TOP DESTINATIONS
        </h2>
        <h1 className="text-textTitle lg:text-4xl text-3xl font-bold leading-none">
          Explore top destinations
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col justify-start items-center lg:gap-28 gap-8 w-full  py-8 z-10">
        <Card className="flex flex-col items-start justify-center  text-center ">
          <img
            src={romeImage}
            className="w-full h-full m-0 p-0"
            height={575}
            width={374}
          />
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
          <img
            src={maldivesImage}
            className="w-full h-full m-0 p-0"
            height={575}
            width={374}
          />
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
          <img
            src={uaeImage}
            alt="uae image"
            className="w-full h-full m-0 p-0"
            height={575}
            width={374}
          />
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
