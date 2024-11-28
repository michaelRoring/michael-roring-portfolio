import { EducationList } from "../../lib/definition";

interface Props {
  content: EducationList[];
}
const EducationTable: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h1> education </h1>
      <br />
      <table style={{ border: "1px dashed white" }}>
        <thead style={{ border: "1px dashed white" }}>
          <tr>
            <th className="text-left pr-56">institution</th>
            <th className="text-left pr-80">major</th>
            <th className="text-left pr-56">final score</th>
            <th className="text-left pr-56">duration</th>
          </tr>
        </thead>
        {content?.map((item) => {
          return (
            <>
              <tr key={item.index}>
                <td>
                  <a href={item?.websiteUrl} className="hover:underline">
                    {item?.institution}
                  </a>
                </td>
                <td>{item?.major}</td>
                {item?.certificationUrl ? (
                  <td>
                    <a
                      href={item?.certificationUrl}
                      className="hover:underline"
                    >
                      {item?.finalScore}
                    </a>
                  </td>
                ) : (
                  <td>{item?.finalScore}</td>
                )}
                <td>{item?.duration}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default EducationTable;
