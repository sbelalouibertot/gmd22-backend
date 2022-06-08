-- AlterTable
ALTER TABLE "recipes_events" ALTER COLUMN "finished_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "shopping_lists_events" ALTER COLUMN "finished_at" DROP NOT NULL;
