import GradeCounter from "../components/GradeCounter";
import TagList from "../components/TagList";
import Violation from "../components/Violation";
import Image from "next/image";

export default async function Page({searchParams}) {

  const params = new URLSearchParams(searchParams);

  const response = await fetch(
      `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );

  const data = await response.json();

  return(
  <>
  <h2>Resultater for: {data.url}</h2>
  <h3>Regel sæt: {data.tags.map((tag) => <TagList tag={tag} />)}</h3>

  <GradeCounter passes={data.passes.length} violations={data.violations.length} />

  <Image 
  width={data.screenshot.width/2}
  height={data.screenshot.height/2}
  src={data.screenshot.url}
  alt="Screenshot of webpage"
  />

  <div className="violations">
      {
          data.violations.length >= 1 ?
          (data.violations.map((v) => <Violation id={v.id} />)) : 
          (<p>Ingen af regler er brudt!</p>)
      }
  </div>

  <div className="passes">
      {
          data.passes.length >= 1 ?
          (<p>Bestået: {data.passes.length}</p>) :
          (<p>Ingen af regler er bestået, det er trist...</p>)
      }
  </div>

  <div className="incomplete">
      {
          data.incomplete.length >= 1 ?
          (<p>Gennemført ikke: {data.incomplete.length}</p>) :
          (<p>Alle tjek gennemført</p>)
      }
  </div>

  <div className="inapplicable">
      {
          data.inapplicable.length >= 1 ?
          (<p>Irrelevante: {data.inapplicable.length}</p>) :
          (<p>Ingen Irrelevante</p>)
      }
  </div>
  </>
  )
}