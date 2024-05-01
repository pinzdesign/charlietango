import { useId } from "react";

export default function Pass(props) {
  const iId = props.id;
  const iDesc = props.description;
  const iHelp = props.help;
  const iHelpUrl = props.helpUrl;

  console.log(props);

  return (
    <div key={props.key} className="border border-gray-200 p-3 mb-3 shadow-lg">
      <h4 className="bg-gray-500 rounded-lg text-white px-2 py-1 inline-block">
        {iId}
      </h4>
      <p className="my-1">
        <strong>Beskrivelse:</strong> {iDesc}
      </p>
      <p className="my-1">
        <strong>Hjælp:</strong> {iHelp}
      </p>
      <p className="text-gray-500">
        <strong>Læs mere:</strong> <a href={iHelpUrl}>{iId}</a>
      </p>
    </div>
  );
}
