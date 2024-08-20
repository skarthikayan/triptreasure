import GettingStarted from "./GettingStarted";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Services from "./Services";
import NewsTeller from "./Newsteller";

function Home() {
  return (
    <main>
      <GettingStarted />
      <Services />
      <Features />
      <Testimonial />
      <NewsTeller />
    </main>
  );
}

export default Home;
