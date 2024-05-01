import { useId } from "react";

export default function Pass(props) {
  const pId = props.id;
  const pDesc = props.description;
  const pHelp = props.help;
  const pHelpUrl = props.helpUrl;

  console.log(props);

  return (
    <div key={props.key} className="border border-gray-200 p-3 mb-3 shadow-lg">
      <h4 className="bg-green-500 rounded-lg text-white px-2 py-1 inline-block">
        {pId}
      </h4>
      <p className="my-1">
        <strong>Beskrivelse:</strong> {pDesc}
      </p>
      <p className="my-1">
        <strong>Hjælp:</strong> {pHelp}
      </p>
      <p className="text-gray-500">
        <strong>Læs mere:</strong> <a href={pHelpUrl}>{pId}</a>
      </p>
    </div>
  );
}
