import ExperienceTable from "./components/ExperienceTable";
import { ExperienceList, EducationList } from "../lib/definition";
import SecondaryButton from "./components/SecondaryButton";
import AnimatePulse from "./components/AnimatePulse";
import Achievement from "./components/Achievement";
import EducationTable from "./components/EducationTable";

const experienceList: ExperienceList[] = [
  {
    index: 1,
    companyName: "devhaus pte. ltd.",
    role: "software engineer",
    duration: "aug 2023 - now",
    information: "singapore, remote",
    performance: [
      `led and kickstarted "leader's hangar", the first new product in the company`,
      `built automation workflows for key account managers to spot potential leads and opportunities`,
    ],
  },
  {
    index: 2,
    companyName: "graha prima sukses utama",
    role: "digital marketing consultant",
    duration: "feb 2020 - dec 2022",
    information: "jakarta, remote",
    performance: [
      "led, planned and taking initiatives to drive more traffic to the company's website's social media channels",
    ],
  },
  {
    index: 3,
    companyName: "entrepreneurship - clairmont",
    role: "self-employed",
    duration: "feb 2017 - jan 2020",
    information: "jakarta, on site",
    performance: [
      `got one of the top seller on Lazada marketplace`,
      `reached almost 500 million rupiah revenue in single day at 12.12.18`,
    ],
  },
  {
    index: 4,
    companyName: "pt. noboru tirta lestari",
    role: "head of marketing",
    duration: "oct 2014 - jan 2017",
    information: "jakarta, on site",
    performance: [
      `built relationships with key account manager of e-commerce companies `,
      `planned the strategies for the digital marketing campaigns`,
    ],
  },
];

const formalEducationList: EducationList[] = [
  {
    index: 1,
    institution: "hacktiv8",
    major: "immersive fullstack javascript bootcamp",
    finalScore: "87.6 / 100",
    duration: "jan 2022 - apr 2022",
    websiteUrl: "https://hacktiv8.com",
    certificationUrl:
      "https://drive.google.com/file/d/1GzV2Tu3T2mRbfuIHOnbB1ZduhDZOIbnk/view?usp=sharing",
  },
  {
    index: 2,
    institution: "bunda mulia university",
    major: "information technology",
    finalScore: "3.34 / 4.00",
    duration: "jul 2010 - jun 2014",
    websiteUrl: "https://www.ubm.ac.id/",
  },
];

const SkillExperience = () => {
  return (
    <>
      <div className="bg-black text-white h-auto w-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <ExperienceTable content={experienceList} />
          <div className="mt-12"></div>
          <Achievement content={experienceList} />
          <div className="mt-12"></div>
          <EducationTable content={formalEducationList} />
          <div className="mt-12"></div>
          <SecondaryButton link="/">back</SecondaryButton>
          <AnimatePulse></AnimatePulse>
        </div>
      </div>
    </>
  );
};

export default SkillExperience;