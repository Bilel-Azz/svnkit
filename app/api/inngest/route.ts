import { serve } from "inngest/next";
import { inngest } from "../../../src/inngest/client";
import { automationTask } from "../../../src/inngest/automations";

// Création de l'API Inngest qui va servir nos fonctions planifiées.
// Ajoutez ici toutes les fonctions Inngest (comme la tâche schedulée) que vous souhaitez utiliser.
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [automationTask],
});
