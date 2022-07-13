-- AlterTable
ALTER TABLE "food" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "image" TEXT,
ADD COLUMN     "number_of_people" INTEGER;
