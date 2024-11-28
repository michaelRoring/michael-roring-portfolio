import AnimatePulse from "./components/AnimatePulse";
import LineBreak from "./components/LineBreak";
import SecondaryButton from "./components/SecondaryButton";

const personalLinks = [
  {
    index: 1,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/michaelroring/",
  },
  {
    index: 2,
    platform: "whatsapp",
    link: "https://wa.me/6285771027289",
  },
  {
    index: 3,
    platform: "email",
    link: "mailto:roringmichael.dev@gmail.com",
  },
];

const Contact = () => {
  return (
    <>
      <div className="bg-black text-white h-screen ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1>contact</h1>
          <br />
          <h1>you can contact me through this channels:</h1>
          <div className="mt-12 ">
            {personalLinks.map((link) => (
              <div key={link?.index}>
                <a
                  key={link?.platform}
                  href={link?.link}
                  className="hover:underline"
                >
                  {link?.platform}
                </a>
                <LineBreak length={4} />
              </div>
            ))}
          </div>
          <div className="mt-12"></div>
          <SecondaryButton link="/">back</SecondaryButton>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default Contact;
