import { ProjectList } from "../../lib/definition";

interface Props {
  content: ProjectList[];
}

const ProjectTable: React.FC<Props> = ({ content }) => {
  return (
    <div className="w-full overflow-x-auto">
      {" "}
      <table className="min-w-full border border-dashed border-white">
        <thead className="border-b border-dashed border-white">
          <tr>
            <th className="text-left pr-48  whitespace-nowrap">title</th>
            <th className="text-left p-4 whitespace-nowrap">tech stacks</th>
            <th className="text-left p-4 whitespace-nowrap">role</th>
            <th className="text-left p-4 whitespace-nowrap">github</th>
          </tr>
        </thead>
        <tbody>
          {content?.map((item) => (
            <tr
              key={item?.index}
              className="border-b border-dashed border-white"
            >
              <td className="">
                <a href={item?.link} className="hover:underline ">
                  {item?.title}
                </a>
              </td>
              <td className="p-4 whitespace-nowrap">
                {item?.techStacks.join(", ")}
              </td>
              <td className="p-4 whitespace-nowrap">{item?.role}</td>
              {/* <td className="p-4 whitespace-nowrap">{item?.github}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
