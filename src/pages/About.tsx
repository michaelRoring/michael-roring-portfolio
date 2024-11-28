import AnimatePulse from "./components/AnimatePulse";
import LineBreak from "./components/LineBreak";
import SecondaryButton from "./components/SecondaryButton";

const About = () => {
  return (
    <>
      <div className="bg-black text-white h-auto ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p>about</p>
          <LineBreak />
          <p>
            hey there! 👋 i'm a fullstack developer based in tangerang,
            indonesia, where i spend my days turning coffee into code and dreams
            into websites. after a decade of crushing it in e-commerce and
            digital marketing (trust me, i've seen enough marketing buzzwords to
            last a lifetime), i decided to plot-twist my career and dive
            headfirst into development.
          </p>
          <LineBreak />
          <p>
            why the switch? well, imagine being really good at selling cakes,
            but suddenly realizing you want to be the master baker instead.
            that's me! armed with a computer science degree and fresh out of
            hacktiv8's fullstack javascript bootcamp (with a sweet 87.6 score -
            not that i'm counting 😉), i'm now crafting digital experiences that
            make both users and developers smile.
          </p>
          <LineBreak />
          <p>
            you know how artists can stare at a blank canvas for hours? that's
            me with my code editor. to me, development is where art meets logic
            - it's like painting, but with semicolons and fewer paint stains on
            my clothes. whether it's crafting pixel-perfect frontends or
            architecting robust backend solutions, i'm all in.
          </p>
          <LineBreak />
          <p>
            fun fact: i'm actually falling in love with coding for the second
            time. the first time was during my computer science days, but this
            time it's different - it's like reconnecting with an old flame who
            got way cooler over the years. these days, you'll find me coding
            until sunrise, not because i have to, but because i literally forget
            to check the time when i'm in the zone.
          </p>
          <LineBreak />
          <p>
            coming from a background in e-commerce, branding, and digital
            marketing, i bring a unique perspective to development. i don't just
            build features - i build experiences that convert, engage, and
            delight users. think of it as combining the best of both worlds: the
            precision of a developer with the user-focused mindset of a
            marketer.
          </p>
          <LineBreak />
          <p>
            currently, i'm channeling my passion into frontend engineering,
            where i can merge my eye for design with my love for clean,
            efficient code. the web development community has become my new
            home, and i couldn't be happier about it.
          </p>
          <LineBreak />
          <p>
            looking for a developer who speaks both code and business? let's
            connect and build something awesome together!{" "}
          </p>
          <LineBreak />
          <p>
            P.S. I promise to keep the marketing puns to a minimum in our
            collaboration... mostly 😄
          </p>
          <LineBreak />
          <SecondaryButton link="/">back</SecondaryButton>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default About;
