import Link from "next/link";

export default function Pass(props: any) {
  const pId = props.id;
  const pDesc = props.description;
  const pHelp = props.help;
  const pHelpUrl = props.helpUrl;

  //console.log(props);

  return (
    <div key={props.key} className="border border-gray-200 p-3 mb-5 shadow-lg">
      <h4 className="bg-green-500 rounded-lg text-white px-2 py-1 inline-block">
        <Link target="_blank" href={"/rules/" + pId}>{pId}</Link>
      </h4>
      <p className="my-1">
        <strong>Beskrivelse:</strong> {pDesc}
      </p>
      <p className="my-1">
        <strong>Hjælp:</strong> {pHelp}
      </p>
      <p className="text-gray-500">
        <strong>Læs mere:</strong> <Link target="_blank" href={"/rules/" + pId}>{pId}</Link>
      </p>
    </div>
  );
}
