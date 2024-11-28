import { ExperienceList } from "../../lib/definition";

interface Props {
  content: ExperienceList[];
}

const ExperienceTable: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h1>experience</h1>
      <br />
      <table style={{ border: "1px dashed white" }}>
        <thead style={{ border: "1px dashed white" }}>
          <tr>
            <th className="text-left pr-56">company name</th>
            <th className="text-left pr-64">role</th>
            <th className="text-left pr-64">duration</th>
            <th className="text-left pr-64">place</th>
          </tr>
        </thead>
        <tbody>
          {content?.map((item) => (
            <tr key={item.index}>
              <td>{item.companyName}</td>
              <td>{item.role}</td>
              <td>{item.duration}</td>
              <td>{item.information}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExperienceTable;
