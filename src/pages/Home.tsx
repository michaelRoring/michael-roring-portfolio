import AnimatePulse from "./components/AnimatePulse";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white h-screen ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-xl font-bold">
            &lt;
            <span className="underline  md:no-underline md:hover:underline decoration-orange-500 md:hover:decoration-orange-500">
              Michael
            </span>
            Portfolio /&gt;
          </h1>
          <span className="mt-4 block">
            <h1 className="">
              fullstack wizard: turning coffee into code since 2022
            </h1>
          </span>
          <span className="mt-4 block">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              height={200}
              width={200}
            ></img>
          </span>
          <div className="mt-4 ">
            <SecondaryButton link="/projects">view projects</SecondaryButton>
            <br />
            <SecondaryButton link="/skill-experience">
              skill & experience
            </SecondaryButton>
            <br />
            <SecondaryButton link="/about">about me</SecondaryButton>
            <br />
            <PrimaryButton link="/contact">contact me</PrimaryButton>
            <br />
            <AnimatePulse />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
