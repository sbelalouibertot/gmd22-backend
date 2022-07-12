import { EventType } from 'generated/prisma-client'

export const EVENTS_MESSAGE_DESCRIPTION: Record<EventType, string> = {
  PERIOD_START: `La période commence aujourd'hui. Dans les starting-blocks, chef 🚀`,
  PERIOD_END: `La période prend fin aujourd'hui. Rendez-vous demain pour un nouveau cycle 🚀`,
  PREPARATION: "Aujourd'hui, c'est en cuisine que ça se passe 👨‍🍳",
  SHOPPING: "Aujourd'hui, direction sur le supermarché 🛒",
}

export const EVENTS_LABELS: Record<EventType, string> = {
  PERIOD_START: `Début de période`,
  PERIOD_END: `Fin de période`,
  PREPARATION: 'Préparer des recettes',
  SHOPPING: 'Faire les courses',
}
