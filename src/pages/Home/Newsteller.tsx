import Bg from "../../assets/newsteller-bg.svg?react";
import Mail from "../../assets/mail.svg?react";
import Button from "../../components/Button";

function NewsTeller() {
  return (
    <section
      className={`bg-colorYellow  flex flex-col justify-between items-center  gap-10  mx-4 px-4 py-8 lg:mx-32 lg:mt-40 lg:py-32 lg:px-16  overflow-visible rounded relative`}
    >
      <Bg className="hidden lg:block absolute -top-10 -left-10 z-0 " />

      <h1 className="text-sectionTitle lg:text-xl text-base font-bold tracking-wider">
        SUBSCRIBE TO OUR NEWTELLER
      </h1>
      <h2 className="text-textTitle lg:text-4xl text-3xl font-bold leading-none text-center lg:w-1/2">
        Prepare yourself & let's explore the beauty of the world
      </h2>
      <div className="flex  flex-col items-center gap-4 lg:w-1/2 w-full ">
        <div className="bg-white p-3 rouded flex flex-row itemes-center justify-start w-full">
          <Mail />
          <input placeholder="Your Email" className="bg-white mx-4" />
        </div>
        <Button className="text-sectionTitle text-white bg-buttonBg lg:w-1/2 w-full">
          Subscribe
        </Button>
      </div>
    </section>
  );
}

export default NewsTeller;
