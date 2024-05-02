import Link from "next/link";

export default function Pass(props: any) {
  const iId = props.id;
  const iDesc = props.description;
  const iHelp = props.help;
  const iHelpUrl = props.helpUrl;

  //console.log(props);

  return (
    <div key={props.key} className="border border-gray-200 p-3 mb-5 shadow-lg">
      <h4 className="bg-gray-500 rounded-lg text-white px-2 py-1 inline-block">
      <Link target="_blank" href={"/rules/" + iId}>{iId}</Link>
      </h4>
      <p className="my-1">
        <strong>Beskrivelse:</strong> {iDesc}
      </p>
      <p className="my-1">
        <strong>Hjælp:</strong> {iHelp}
      </p>
      <p className="text-gray-500">
        <strong>Læs mere:</strong> <Link target="_blank" href={"/rules/" + iId}>{iId}</Link>
      </p>
    </div>
  );
}
