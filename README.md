# Accessibility Checker Tool


Den grundlæggende core af sitet er færdig: man kan indtaste webadressen og få en resultat side med rapport som indeholder webadressen, screenshot, regel sæt tags og en liste over fejl, passes, inapplicable og incomplete. Det er muligt at se detaljer om fejl som navn, beskrivelse, hjælpe tekst, og en link til regler-websiden

Der findes også en grade beregner, som viser sidens tilgænglighed i percent, baseret på udførte(passes) og fejl(error) og bagefter viser en Page Grade som bogstaven (A-E).

Det er muligt at tjekke ind de regel sæt som der bliver valideret imod med hjælp af checkboxes.

Løsningen er deployed hos Vercel:
https://charlietango-seven.vercel.app/


## To Do
- Separat side for hver fejl
- En overordnet 404 side (ikke rapporten)
- Styling med Tailwind
- Loading side som vises imens rapporten hentes
- Meta tags
