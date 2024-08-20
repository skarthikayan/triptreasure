import TourguideIcon from "../../assets/tourguide.svg?react";
import WeatherIcon from "../../assets/weather.svg?react";
import BookingIcon from "../../assets/booking.svg?react";

import Card from "../../components/Card";

function Services() {
  return (
    <section className="flex sm:flex-row flex-col width-full justify-between items-center  gap-3 sm:px-28 px-4 py-0 relative overflow-hidden">
      <div className="hidden sm:block absolute -top-20 -right-40 bg-yellow-200 h-60 w-60 rounded-full z-0 blur-3xl " />

      <div className="flex flex-col max-w-md min-w-80  justify-center items-start gap-4">
        <h1 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
          SERVICES
        </h1>
        <h2 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
          Our top value categories for you
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 w-full overflow-hidden sm:p-8 p-0 z-10">
        <Card className="flex flex-col items-center justify-evenly p-8 text-center border-[colorGrey] border-2 h-72 w-full sm:w-96 sm:h-96">
          <TourguideIcon />
          <h3 className="text-textTitle font-bold">Best Tour Guide</h3>
          <p>
            What looked like a small patch of purple grass, above five feet.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-evenly p-8 text-center border-[colorGrey] border-2 h-72 w-full sm:w-96 sm:h-96">
          <BookingIcon />
          <h3 className="text-textTitle font-bold">Easy Booking</h3>
          <p>Square, was moving across the sand in their direction.</p>
        </Card>
        <Card className="flex flex-col items-center justify-evenly p-8 text-center border-[colorGrey] border-2 h-72 w-full sm:w-96 sm:h-96">
          <WeatherIcon />
          <h3 className="text-textTitle font-bold">Weather Forecast</h3>
          <p>
            What looked like a small patch of purple grass, above five feet.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Services;