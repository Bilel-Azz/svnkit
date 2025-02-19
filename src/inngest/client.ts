import { Inngest } from "inngest";

// Création d'un client Inngest pour envoyer et recevoir des événements.
// L'identifiant "my-app" doit être remplacé par l'identifiant de votre application Inngest.
export const inngest = new Inngest({ id: "my-app" });
