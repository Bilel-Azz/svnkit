import { inngest } from "./client";
import { PrismaClient } from "@prisma/client";

/**
 * Simule la récupération des commits depuis un dépôt SVN.
 * Chaque commit est représenté par un objet contenant un id et une liste de chemins modifiés.
 * @returns Une promesse résolvant un tableau de commits.
 */
const fetchSVNCommits = async () => {
  return [
    { id: 1, changedPaths: ["/moduleA/file1.txt", "/moduleB/file2.txt"] },
    { id: 2, changedPaths: ["/moduleC/file3.txt"] },
  ];
};

const prisma = new PrismaClient()


async function isAutomationDue() {
  const now = new Date();
  // Assumes that a global Prisma client instance "prisma" is available
  // Récupère toutes les automatisations depuis la base de données
  const automations = await prisma.automatisation.findMany();

  // On récupère les composants de la date actuelle
  const year = now.getFullYear();
  const month = now.getMonth(); // les mois sont indexés à partir de 0
  const day = now.getDate();

  // Pour chaque automatisation, on considère que l'heure programmée est aujourd'hui à automation.hour:00:00.
  // On vérifie si l'heure actuelle se situe dans la fenêtre des 15 minutes suivant cette heure.
  // On collecte les id des automatisations à exécuter.
  const dueAutomationIds = [];

  for (const automation of automations) {
    const scheduledTime = new Date(year, month, day, automation.hour, 0, 0);
    const windowEnd = new Date(scheduledTime.getTime() + 15 * 60 * 1000); // 15 minutes après l'heure programmée

    if (now >= scheduledTime && now < windowEnd) {
      dueAutomationIds.push(automation.id);
    }
  }

  return dueAutomationIds;
}



/**
 * Simule le déclenchement d'un job Jenkins via l'API REST.
 */
const triggerJenkinsJob = async () => {
  console.log("Déclenchement du job Jenkins via l'API REST...");
};

/**
 * Définition de la fonction planifiée Inngest.
 * La fonction s'exécute toutes les 15 minutes pour vérifier les commits et déclencher un job Jenkins si nécessaire.
 */
export const automationTask = inngest.createFunction({
  id: "Every 15 minutes SVN Poll"}, // Nom de la tâche
  [{ cron: "*/15 * * * *" }], // Déclenchement toutes les 15 minutes
  async ({ step, event }) => {
    // Étape 1 : Récupération des commits
    const commits = await fetchSVNCommits();
    console.log("Commits récupérés :", commits);

    // Étape 2 : Vérification des modifications dans /moduleA
    const hasModuleAChanges = commits.some((commit) =>
      commit.changedPaths.some((path) => path.startsWith("/moduleA"))
    );

    // Étape 3 : Déclenchement du job Jenkins si nécessaire
    if (hasModuleAChanges) {
      console.log("Modifications détectées dans /moduleA. Déclenchement du job Jenkins...");
      await triggerJenkinsJob();
    } else {
      console.log("Aucune modification détectée dans /moduleA.");
    }
  },
);