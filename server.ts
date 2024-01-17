import { interactions, message } from "https://deno.land/x/discordinteractions/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const client = interactions({
    publicKey: "be69bf661e9b42dd285feafc560ed95bcfb2d37a089ddc5f4e375c49680c549c",
})
    .slash("crea_squadra", async (i) => {
        // Implementa la logica del comando crea_squadra
        // ...

        return message({ content: "Squadra creata con successo!" });
    })
    .slash("torneo", async (i) => {
        // Implementa la logica del comando torneo
        // ...

        return message({ content: "Il torneo è iniziato!" });
    })
    .slash("classifica", async (i) => {
        // Implementa la logica del comando classifica
        // ...

        return message({ content: "Ecco la classifica attuale:" });
    })
    .slash("punteggio", async (i) => {
        // Implementa la logica del comando punteggio
        // ...

        return message({ content: "Punteggio registrato con successo!" });
    })
    .slash("inserisci_punteggio", async (i) => {
        // Implementa la logica del comando inserisci_punteggio
        // ...

        return message({ content: "Punteggio inserito manualmente!" });
    });

serve(client.handle);
