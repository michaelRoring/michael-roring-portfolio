import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { CertificationList } from "../../lib/definition";
import LineBreak from "./LineBreak";

interface Props {
  content: CertificationList[];
}

const CertsComponent: React.FC<Props> = ({ content }) => {
  return (
    <div className=" text-white bg-black">
      <h1 className="text-green-500 ">certification list</h1>
      <LineBreak />
      {content.map((item) => (
        <div key={item.index} className="group mb-4">
          <div className="flex items-start space-x-2">
            <ChevronRight
              className="opacity-0 group-hover:opacity-100 transition-opacity mt-1"
              size={16}
            />
            <div className="space-y-1 w-full">
              <a
                href={item.url}
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <span className="mr-2">- {item.name}</span>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <div className="text-gray-400">
                {item.platformIssuer}, issued {item.year}
              </div>
              {item.description && (
                <div className="text-gray-500">{item.description}</div>
              )}
            </div>
          </div>
          <LineBreak />
        </div>
      ))}
    </div>
  );
};

export default CertsComponent;
