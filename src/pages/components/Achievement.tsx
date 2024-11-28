import { ExperienceList } from "../../lib/definition";

interface Props {
  content: ExperienceList[];
}

const Achievement: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h1>selected highlights</h1>
      <br />
      {content?.map((job) => {
        return (
          <>
            <div key={job.index}>
              <p> {job.companyName}</p>
              {job?.performance &&
                job?.performance.map((item) => {
                  return (
                    <>
                      <p> - {item}</p>
                    </>
                  );
                })}
              <br />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Achievement;
