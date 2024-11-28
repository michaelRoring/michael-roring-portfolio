import { TableProps, TableConfig } from "../../lib/definition";
import { ExperienceList, EducationList } from "../../lib/definition";

const tableConfigs: Record<"experience" | "education", TableConfig> = {
  experience: {
    headers: ["company name", "role", "duration", "place"],
    keys: ["companyName", "role", "duration", "information"],
  },
  education: {
    headers: ["institution", "major", "final score", "duration"],
    keys: ["institution", "major", "finalScore", "duration"],
  },
};

const Table = ({ content, type, title }: TableProps) => {
  const config = tableConfigs[type];

  const isExperienceList = (item: any): item is ExperienceList => {
    return "companyName" in item;
  };

  const getCellContent = (
    item: ExperienceList | EducationList,
    key: string
  ): string => {
    if (isExperienceList(item)) {
      return item[key as keyof ExperienceList];
    } else {
      return item[key as keyof EducationList];
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <table className="w-full" style={{ border: "1px dashed white" }}>
        <thead style={{ border: "1px dashed white" }}>
          <tr>
            {config.headers.map((header, index) => (
              <th key={index} className="text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {config.keys.map((key, colIndex) => (
                <td key={colIndex} className="text-left pr-12">
                  {getCellContent(item, key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
