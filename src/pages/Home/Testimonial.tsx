import Bg from "../../assets/testimonial-bg.svg?react";
import Client from "../../assets/client.svg?react";

function Testimonial() {
  return (
    <section
      className={`  flex flex-col  w-full justify-between items-center  gap-10  px-4 py-8  overflow-visible relative`}
    >
      <Bg className="hidden sm:block absolute -top-80 w-full z-0" />
      <h1 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
        TESTIMONIALS
      </h1>
      <h2 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
        Trust our Clients
      </h2>
      <Client />
      <p className="text-xl font-bold">
        <span className="text-sectionTitle ">Mark Smith</span>{" "}
        <span>/ Travel Enthusiast</span>
      </p>
      <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
    </section>
  );
}

export default Testimonial;
