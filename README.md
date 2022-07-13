
# Données utilisateur
npm run ts-node ./bin/init/populateNewDatabase.ts

# Données de recettes
npm run ts-node ./bin/init/scrap.ts

# Générations des périodes, liste de courses
# Lancé en CRON (gmd22-backend/src/bin/crons.ts)