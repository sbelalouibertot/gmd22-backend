-- CreateEnum
CREATE TYPE "UserPreferenceType" AS ENUM ('MAX_RECIPES_PER_WEEK', 'SHOPPING_WEEKS_INTERVAL');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('SHOPPING', 'PREPARATION');

-- CreateEnum
CREATE TYPE "FoodType" AS ENUM ('CEREALS_AND_DERIVED', 'FRUIT', 'INGREDIENT', 'VEGETABLE', 'LEGUME', 'FATS', 'OILS', 'NUTS_AND_SEEDS', 'FISH', 'POTATOES', 'AGRICULTURAL_PRODUCTS', 'DAIRY_PRODUCTS', 'SAUCES', 'DRESSING', 'SODAS', 'DRINKS', 'JUICES', 'MEATS');

-- CreateEnum
CREATE TYPE "StandardUnitType" AS ENUM ('g', 'mg', 'kg', 'L', 'mL');

-- CreateTable
CREATE TABLE "recipes" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "preparation_duration" INTEGER NOT NULL,
    "cooking_duration" INTEGER NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes_instructions_food" (
    "id" VARCHAR(30) NOT NULL,
    "recipe_instruction_id" VARCHAR(30) NOT NULL,
    "food_id" VARCHAR(30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "quantity_unit" VARCHAR(30) NOT NULL,

    CONSTRAINT "recipes_instructions_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes_events" (
    "id" VARCHAR(30) NOT NULL,
    "recipe_id" VARCHAR(30) NOT NULL,
    "event_id" VARCHAR(30) NOT NULL,
    "finished_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipes_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes_instructions" (
    "id" VARCHAR(30) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "recipe_id" VARCHAR(30) NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "recipes_instructions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_lists" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shopping_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_lists_events" (
    "id" VARCHAR(30) NOT NULL,
    "shopping_list_id" VARCHAR(30) NOT NULL,
    "event_id" VARCHAR(30) NOT NULL,
    "finished_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shopping_lists_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_lists_food" (
    "id" VARCHAR(30) NOT NULL,
    "shopping_list_id" VARCHAR(30) NOT NULL,
    "food_id" VARCHAR(30) NOT NULL,
    "is_checked" BOOLEAN NOT NULL,

    CONSTRAINT "shopping_lists_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "type" "FoodType" NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quantity_units" (
    "type" VARCHAR(30) NOT NULL,
    "standard_unit" "StandardUnitType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "quantity_units_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "events" (
    "id" VARCHAR(30) NOT NULL,
    "type" "EventType" NOT NULL,
    "user_id" VARCHAR(30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_preferences" (
    "id" VARCHAR(30) NOT NULL,
    "user_id" VARCHAR(30) NOT NULL,
    "type" "UserPreferenceType" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "users_preferences_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipes_instructions_food" ADD CONSTRAINT "recipes_instructions_food_recipe_instruction_id_fkey" FOREIGN KEY ("recipe_instruction_id") REFERENCES "recipes_instructions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes_instructions_food" ADD CONSTRAINT "recipes_instructions_food_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes_events" ADD CONSTRAINT "recipes_events_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes_events" ADD CONSTRAINT "recipes_events_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes_instructions" ADD CONSTRAINT "recipes_instructions_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_lists_events" ADD CONSTRAINT "shopping_lists_events_shopping_list_id_fkey" FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_lists_events" ADD CONSTRAINT "shopping_lists_events_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_lists_food" ADD CONSTRAINT "shopping_lists_food_shopping_list_id_fkey" FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_lists_food" ADD CONSTRAINT "shopping_lists_food_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_preferences" ADD CONSTRAINT "users_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
