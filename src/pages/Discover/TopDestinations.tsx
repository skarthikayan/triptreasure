import uaeImage from "../../assets/uae.png";
import maldivesImage from "../../assets/maldives.png";
import romeImage from "../../assets/rome.png";

import Card from "../../components/Card";

function TopDestinations() {
  const destinationsList = [
    {
      title: "Paradise Beach, Bantayan Island",
      image: romeImage,
      price: "$699",
      location: "Rome, Italy",
      rating: "4.3 ⭐",
    },
    {
      title: "Ocean with full of Colors",
      image: maldivesImage,
      price: "$399",
      location: "Maldives",
      rating: "4.5 ⭐",
    },
    {
      title: "Mountain View, Above the cloud",
      image: uaeImage,
      price: "$999",
      location: "United Arab Emeries",
      rating: "4.8 ⭐",
    },
  ];
  return (
    <div className="flex flex-col  width-full justify-between items-center lg:items-start  gap-3 lg:px-28 px-4 py-8 relative overflow-hidden">
      <div className="flex flex-col justify-center lg:items-start items-center gap-4">
        <h1 className="text-sectionTitle lg:text-xl text-base font-bold tracking-wider">
          TOP DESTINATIONS
        </h1>
        <h2 className="text-textTitle lg:text-4xl text-3xl font-bold leading-none text-center lg:text-left">
          Explore top destinations
        </h2>
      </div>

      <div className="flex lg:flex-row flex-col justify-start items-center lg:gap-28 gap-8 w-full  py-8 z-10">
        {destinationsList.map((destination) => (
          <Card
            key={destination.title}
            className="flex flex-col items-start justify-center text-center max-w-xs"
          >
            <img
              alt={destination.title}
              src={destination.image}
              className="w-full h-full m-0 p-0"
              height={575}
              width={374}
            />
            <div className="flex flex-row justify-between items-start w-full p-6">
              <div className="flex flex-col items-start justify-center gap-3 w-2/3">
                <h3 className="text-textTitle font-bold text-left">
                  {destination.title}
                </h3>
                <p className="text-left">{destination.location}</p>
                <p>{destination.rating}</p>
              </div>
              <p className="text-sectionTitle font-bold">{destination.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;
