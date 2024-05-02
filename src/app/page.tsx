"use client";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function Page() {
  return (
    <>
    <SiteHeader></SiteHeader>
    <main className="mx-auto text-center max-w-screen-xl searchWrap">
      <form action="/result">
        
        <input className="border border-orange-500 rounded-md px-4 py-2" type="url" name="url" required />
        <button className="rounded-md bg-orange-500 text-white ml-4 px-4 py-2" type="submit">Kør Testen</button>

        <div className="text-left mt-5 rulesetCheckWrap">
          <p><input type="checkbox" name="rulesetTag" value="wcag2a" checked /> WCAG 2a</p>
          <p><input type="checkbox" name="rulesetTag" value="wcag2aa" /> WCAG 2aa</p>
          <p><input type="checkbox" name="rulesetTag" value="wcag2aaa" /> WCAG 2aaa</p>
          <p><input type="checkbox" name="rulesetTag" value="wcag21a" /> WCAG 21a</p>
          <p><input type="checkbox" name="rulesetTag" value="wcag21aa" /> WCAG 21aa</p>
          <p><input type="checkbox" name="rulesetTag" value="wcag22aa" /> WCAG 22aa</p>
          <p><input type="checkbox" name="rulesetTag" value="best-practice" /> Best Practice</p>
          <p><input type="checkbox" name="rulesetTag" value="ACT" /> ACT</p>
        </div>

      </form>
      <p className="text-gray-500 mt-8">Med denne redskab kan du teste websidens tilgængelighed. Indtast en web adresse i feltet ovenfor og vent på rapporten genereres, det tager cirka 5-15 sekunder. Du får en detaljeret overblik over de regler som der er blevet testet for, samt en "Page Grade" som en udtryk for hvor tilgængelig websiden er.</p>
    </main>
    <SiteFooter></SiteFooter>
    </>
  );
}
