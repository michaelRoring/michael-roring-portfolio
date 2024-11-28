import AnimatePulse from "./components/AnimatePulse";
import SecondaryButton from "./components/SecondaryButton";
import ProjectTable from "./components/ProjectTable";

const Projects = () => {
  const projects = [
    {
      index: 1,
      title: `singapore worker's party website`,
      link: "https://twp-dev.webflow.io/",
      techStacks: ["webflow"],
      role: "project manager",
    },
  ];
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1>projects</h1>
          <br />
          <ProjectTable content={projects} />
          <br />

          <div className="mt-12"></div>
          <SecondaryButton link="/">back</SecondaryButton>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default Projects;
