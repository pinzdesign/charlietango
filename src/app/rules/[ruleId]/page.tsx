import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export default function Page({ params } : { params: any }) {

    let impact = "Ikke oversat";
    let translatedDesc = "Denne regel er ikke oversat til dansk. Det er disse regler som er oversat: color-contrast, color-contrast-enhanced, link-name, landmark-one-main, meta-viewport";
    let helpUrl = "https://dequeuniversity.com/rules/axe/4.9/" + params.ruleId + "?application=axe-puppeteer&lang=da"
    let solution = "-"

    if(params.ruleId == "color-contrast") {
        impact = "Alvorlig";
        translatedDesc = "Elementer skal have tilstrækkelig farvekontrast. Vær sikkert på at kontrasten mellem forgrund og baggrund svarer til WCAG 2 AA minimale krav om kontrast grænser";
        solution = "Sørg for en farvekontrast på mindst 7:1 for lille tekst eller 4,5:1 for stor tekst, også selvom tekst er en del af et billede. Stor tekst er i kravene defineret som 18pt (24 CSS pixels) eller 14pt fed (19 CSS pixels). Bemærk: Elementer, der har et forhold på 1:1, betragtes som 'ufuldstændige' og kræver en manuel gennemgang."
    }

    if(params.ruleId == "color-contrast-enhanced") {
        impact = "Alvorlig";
        translatedDesc = "Elementer skal have tilstrækkelig farvekontrast. Vær sikkert på at kontrasten mellem forgrund og baggrund svarer til WCAG 2 AA minimale krav om kontrast grænser";
        solution = "Sørg for en farvekontrast på mindst 7:1 for lille tekst eller 4,5:1 for stor tekst, også selvom tekst er en del af et billede. Stor tekst er i kravene defineret som 18pt (24 CSS pixels) eller 14pt fed (19 CSS pixels). Bemærk: Elementer, der har et forhold på 1:1, betragtes som 'ufuldstændige' og kræver en manuel gennemgang."
    }

    if(params.ruleId == "link-name") {
        impact = "Alvorlig";
        translatedDesc = "Links skal have forståelig (detekterbar) tekst.";
        solution = "Sørg for, at alle linknavne er tilgængelige. Det kan være muligt, at den indre linktekst ikke er synlig for en skærmlæser, at der er duplikerede linketiketter, eller at linket ikke kan fokuseres. Sørg for, at alle links kan modtage programmatisk fokus; undgå for eksempel enhedsspecifikke hændelser (for eksempel onmouseover). For at sikre, at al linktekst er synlig for skærmlæsere, kan link tekst ikke skjules (f.eks. med display: none)"
    }

    if(params.ruleId == "landmark-one-main") {
        impact = "Moderat";
        translatedDesc = "Dokumentet skal have ét 'main'-landmark. Vær sikkert på at siden har en main landmark.";
        solution = "Sørg for, at der er et navigationspunkt til det primære indhold på siden. Hvis siden indeholder iframe-elementer, skal hver iframe indeholde enten ingen hovedvartegn eller kun ét.Sørg for, at alt indhold er indeholdt i en skelsættende region, udpeget med HTML5-vartegnselementer og/eller ARIA-vartegnsområder.Det er en bedste praksis at bruge både HTML 5- og ARIA-vartegn for at sikre, at alt indhold er indeholdt i et navigationsområde. I HTML5 skal du bruge elementer som sidehoved, nav, hoved og sidefod."
    }

    if(params.ruleId == "meta-viewport") {
        impact = "Kritisk";
        translatedDesc = "Zoom og skalering må ikke være slået fra. Vær sikkert på at <meta name='viewport'> ikke begrænser zoom og skalering";
        solution = "Fjern parameteren user-scalable='no' fra indholdsattributten for <meta name='viewport'>-elementet for at tillade zoom og sikre, at maksimum skala parameteren ikke er mindre end 2. Et meta viewport-element fortæller browseren, hvordan man kontrollerer sidens dimensioner og skalerer, men muligheden for at zoome kan deaktiveres som følge af dens brug.";
    }

    return (
        <>
        <SiteHeader></SiteHeader>
        <main className="mx-auto max-w-screen-xl">
            <h1><strong>Regel:</strong> {params.ruleId}</h1>
            <p><strong>Niveau:</strong> <span className="inline-block bg-red-500 rounded-md px-2 py-1 text-white">{impact}</span></p>
            <p className="mt-8"><strong>Beskrivelse:</strong> {translatedDesc}</p>
            <p><strong>Løsning:</strong> {solution}</p>
            <p className="mt-8"><strong>Læs mere hos Deque University:</strong> <a target="_blank" href={helpUrl}>{params.ruleId}</a></p>
        </main>
        <SiteFooter></SiteFooter>
        </>
    )
}