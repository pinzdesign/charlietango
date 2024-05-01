import { useId } from "react";

export default function Violation(props) {
  const vId = props.id;
  const vImpact = props.impact;
  const vDesc = props.description;
  const vHelp = props.help;
  const vHelpUrl = props.helpUrl;

  console.log(props);

  return (
    <div key={props.key} className="border border-gray-200 p-3 mb-3 shadow-lg">
      <h4 className="bg-red-500 rounded-lg text-white px-2 py-1 inline-block">
        {vId}
      </h4>
      <p className="my-1">
        <strong>Niveau:</strong> <span className="impact-label">{vImpact}</span>
      </p>
      <p className="my-1">
        <strong>Beskrivelse:</strong> {vDesc}
      </p>
      <p className="my-1">
        <strong>Hjælp:</strong> {vHelp}
      </p>
      <p className="text-gray-500">
        <strong>Læs mere:</strong> <a href={vHelpUrl}>{vId}</a>
      </p>
    </div>
  );
}
