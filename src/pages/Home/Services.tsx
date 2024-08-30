import TourguideIcon from "../../assets/tourguide.svg?react";
import WeatherIcon from "../../assets/weather.svg?react";
import BookingIcon from "../../assets/booking.svg?react";

import Card from "../../components/Card";

function Services() {
  const serviceList = [
    {
      title: "Best Tour Guide",
      desc: "What looked like a small patch of purple grass, above five feet.",
      icon: <TourguideIcon />,
    },
    {
      title: "Easy Booking",
      desc: "Square, was moving across the sand in their direction.",
      icon: <BookingIcon />,
    },
    {
      title: "Weather Forecast",
      desc: " What looked like a small patch of purple grass, above five feet.",
      icon: <WeatherIcon />,
    },
  ];
  return (
    <section className="flex lg:flex-row flex-col width-full justify-between items-center gap-3 sm:px-28 px-4 py-0 relative overflow-hidden">
      <div className="hidden sm:block absolute -top-20 -right-40 bg-yellow-200 h-60 w-60 rounded-full z-0 blur-3xl " />

      <div className="flex flex-col max-w-md min-w-80  justify-center items-center lg:items-start  gap-4">
        <h1 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
          SERVICES
        </h1>
        <h2 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none lg:text-left text-center">
          Our top value categories for you
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 overflow-hidden sm:p-8 p-0 z-10">
        {serviceList.map((service) => (
          <Card
            key={service.title}
            className="flex flex-col items-center justify-evenly p-8 text-center border-colorGrey border-2 h-72 w-full sm:w-1/3 sm:h-96"
          >
            {service.icon}
            <h3 className="text-textTitle font-bold">{service.title}</h3>
            <p>{service.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services;
