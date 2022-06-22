-- DropForeignKey
ALTER TABLE "recipes_instructions_food" DROP CONSTRAINT "recipes_instructions_food_food_id_fkey";

-- DropForeignKey
ALTER TABLE "recipes_instructions_food" DROP CONSTRAINT "recipes_instructions_food_recipe_instruction_id_fkey";

-- DropTable
DROP TABLE "recipes_instructions_food";

-- CreateTable
CREATE TABLE "recipes_food" (
    "id" VARCHAR(30) NOT NULL,
    "recipe_id" VARCHAR(30) NOT NULL,
    "food_id" VARCHAR(30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "quantity_unit" VARCHAR(30) NOT NULL,

    CONSTRAINT "recipes_food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipes_food" ADD CONSTRAINT "recipes_food_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes_food" ADD CONSTRAINT "recipes_food_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
