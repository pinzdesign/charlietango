import Link from "next/link";
import GradeCounter from "../components/GradeCounter";
import TagList from "../components/TagList";
import Violation from "../components/Violation";
import Image from "next/image";
import Pass from "../components/Pass";
import Incomplete from "../components/Incomplete";
import Inapplicable from "../components/Inapplicable";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default async function Page({ searchParams }) {

  const params = new URLSearchParams({
    url: searchParams.url,
    lang: "da",
  });

  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );

  const data = await response.json();
  //console.log(data)

  if(data.error) {
    return (
      <>
      <SiteHeader></SiteHeader>
      <main className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl mb-5">Oops...der skete en fejl!</h1>

          <Image className="w-full h-full object-cover" width={559} height={501} src="/img/error.webp" alt="error image"/>

          <p><strong>Fejl:</strong> {data.error}</p>
          <p><strong>Beskrivelse:</strong> {data.message}</p>
          <p><strong>Hjælp:</strong> Tjek om webadressen er stavet korrekt og prøv igen</p>
          <Link className="mt-2 border border-gray-500 px-4 py-2 rounded-lg text-black hover:bg-gray-500 hover:text-white mt-4 inline-block" href={"/"}>Tilbage</Link>
        </div>
      </main>
      <SiteFooter></SiteFooter>
      </>
    )
  }
  else 
  return (
    <>
    <SiteHeader></SiteHeader>
    <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
      <div className="grid_2_1">
        <div>
        <h1 className="text-2xl mb-5">Resultater for: {data.url}</h1>
        <h3>
          Regel sæt:{" "}
          {data.tags.map((tag) => (
            <TagList tag={tag} />
          ))}
        </h3>
        <GradeCounter passes={data.passes} violations={data.violations} />
        </div>

        <Image
          width={data.screenshot.width / 2}
          height={data.screenshot.height / 2}
          src={data.screenshot.url}
          alt="Screenshot of webpage"
        />
      </div>

      <div className="p-4 mb-4 border border-gray-200">
        <h2 className="text-xl mb-3">Fejl</h2>
        <p className="text-gray-500">
          Her er en liste af fejl som blev fandt under test, du bør tage
          stilling til dem lige så snart det er muligt.
        </p>
        <p>Fejl: {data.violations.length}</p>
        {data.violations.length >= 1 ? (
          data.violations.map((v) => (
            <Violation
              key={v.id}
              id={v.id}
              impact={v.impact}
              description={v.description}
              help={v.help}
              helpUrl={v.helpUrl}
            />
          ))
        ) : (
          <p>Ingen af regler er brudt!</p>
        )}
      </div>

      <div className="p-4 mb-4 border border-gray-200">
        <h2 className="text-xl mb-3">Bestået</h2>
        <p className="text-gray-500">
          Her er en liste af alle regler som blev tjekket positiv på siden.
        </p>
        <p>Bestået: {data.passes.length}</p>
        {data.passes.length >= 1 ? (
          data.passes.map((p) => ( <Pass key={p.id} id={p.id} description={p.description} help={p.help} helpUrl={p.helpUrl} /> ))
        ) : (
          <p>Ingen af regler er bestået, det er trist...</p>
        )}
      </div>

      <div className="p-4 mb-4 border border-gray-200">
        <h2 className="text-xl mb-3">Gennemført Ikke</h2>
        <p className="text-gray-500">
          Denne liste indeholder regler som blev ikke gennemført af Diversa, så
          det er noget på vores side. Denne tal påvirker ikke page grade.
        </p>
        <p>Gennemført ikke: {data.incomplete.length}</p>
        {data.incomplete.length >= 1 ? (
          data.incomplete.map((i) => ( <Incomplete key={i.id} id={i.id} description={i.description} help={i.help} helpUrl={i.helpUrl} /> ))
        ) : (
          <p>Alle tjek gennemført</p>
        )}
      </div>

      <div className="p-4 mb-4 border border-gray-200">
        <h2 className="text-xl mb-3">Irrelevant</h2>
        <p className="text-gray-500">
          Denne liste indeholder regler som er ikke relevante til websiden.
        </p>
        <p className="text-gray-500">
          F.eks hvis der er ingen video på siden, så bliver siden ikke valideret
          imod regler som omfatter video. Denne tal påvirker ikke page grade.
        </p>
        <p>Irrelevante: {data.inapplicable.length}</p>
        {data.inapplicable.length >= 1 ? (
          data.inapplicable.map((i) => ( <Inapplicable key={i.id} id={i.id} description={i.description} help={i.help} helpUrl={i.helpUrl} /> ))
        ) : (
          <p>Ingen Irrelevante</p>
        )}
      </div>
    </main>
    <SiteFooter></SiteFooter>
    </>
  );
}
