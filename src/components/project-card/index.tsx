import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard(props: {
  title: string;
  description: string;
  tech: string[];
  status: "Active" | "Completed" | "On Hold" | "Archived";
  liveLink?: string;
  repoLink?: string;
  startDate?: string;
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-400";
      case "Completed":
        return "text-blue-400";
      case "On Hold":
        return "text-yellow-400";
      case "Archived":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="p-4 max-w-lg w-full">
      <div className="card rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out h-full">
        <div className="border-t-2 border-foxOrange px-6 py-4 h-full flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="font-bold text-xl text-foxOrange">
              {props.title}
            </div>
            <span
              className={`text-sm font-medium ${getStatusColor(props.status)}`}
            >
              {props.status}
            </span>
          </div>

          <p className="text-foamWhite text-base mb-4 flex-grow">
            {props.description}
          </p>

          {props.tech.length > 0 && (
            <div className="mb-4">
              <div className="text-sm text-foxOrange font-medium mb-2">
                Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {props.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-foxOrange text-darkRoast px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {props.startDate && (
            <div className="text-sm text-gray-300 mb-4">
              Started: {props.startDate}
            </div>
          )}

          <div className="flex gap-3 mt-auto">
            {props.liveLink && (
              <a
                href={props.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foxOrange hover:text-orange-300 transition-colors link-indicator"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                <span className="text-sm font-medium">Live Site</span>
              </a>
            )}
            {props.repoLink && (
              <a
                href={props.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foxOrange hover:text-orange-300 transition-colors link-indicator"
              >
                <FontAwesomeIcon icon={faCode} className="w-4 h-4" />
                <span className="text-sm font-medium">Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
