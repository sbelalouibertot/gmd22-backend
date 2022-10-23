
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.RecipeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  preparationDuration: 'preparationDuration',
  cookingDuration: 'cookingDuration',
  image: 'image',
  numberOfPeople: 'numberOfPeople'
});

exports.Prisma.RecipeFoodScalarFieldEnum = makeEnum({
  id: 'id',
  recipeId: 'recipeId',
  foodId: 'foodId',
  quantity: 'quantity',
  quantityUnit: 'quantityUnit'
});

exports.Prisma.RecipeEventScalarFieldEnum = makeEnum({
  id: 'id',
  recipeId: 'recipeId',
  eventId: 'eventId',
  finishedAt: 'finishedAt'
});

exports.Prisma.RecipeInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  recipeId: 'recipeId',
  duration: 'duration'
});

exports.Prisma.ShoppingListScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt'
});

exports.Prisma.ShoppingListEventScalarFieldEnum = makeEnum({
  id: 'id',
  shoppingListId: 'shoppingListId',
  eventId: 'eventId',
  finishedAt: 'finishedAt'
});

exports.Prisma.ShoppingListFoodScalarFieldEnum = makeEnum({
  id: 'id',
  shoppingListId: 'shoppingListId',
  foodId: 'foodId',
  isChecked: 'isChecked'
});

exports.Prisma.FoodScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  type: 'type'
});

exports.Prisma.QuantityUnitScalarFieldEnum = makeEnum({
  type: 'type',
  standardUnit: 'standardUnit',
  value: 'value'
});

exports.Prisma.EventScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  userId: 'userId',
  date: 'date'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  firstName: 'firstName'
});

exports.Prisma.UserPreferenceScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  value: 'value'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.FoodType = makeEnum({
  CEREALS_AND_DERIVED: 'CEREALS_AND_DERIVED',
  FRUIT: 'FRUIT',
  INGREDIENT: 'INGREDIENT',
  VEGETABLE: 'VEGETABLE',
  LEGUME: 'LEGUME',
  FATS: 'FATS',
  OILS: 'OILS',
  NUTS_AND_SEEDS: 'NUTS_AND_SEEDS',
  FISH: 'FISH',
  POTATOES: 'POTATOES',
  AGRICULTURAL_PRODUCTS: 'AGRICULTURAL_PRODUCTS',
  DAIRY_PRODUCTS: 'DAIRY_PRODUCTS',
  SAUCES: 'SAUCES',
  DRESSING: 'DRESSING',
  SODAS: 'SODAS',
  DRINKS: 'DRINKS',
  JUICES: 'JUICES',
  MEATS: 'MEATS'
});

exports.StandardUnitType = makeEnum({
  g: 'g',
  mg: 'mg',
  kg: 'kg',
  L: 'L',
  mL: 'mL'
});

exports.EventType = makeEnum({
  SHOPPING: 'SHOPPING',
  PREPARATION: 'PREPARATION',
  PERIOD_START: 'PERIOD_START',
  PERIOD_END: 'PERIOD_END'
});

exports.UserPreferenceType = makeEnum({
  MAX_RECIPES_PER_WEEK: 'MAX_RECIPES_PER_WEEK',
  SHOPPING_WEEKS_INTERVAL: 'SHOPPING_WEEKS_INTERVAL'
});

exports.Prisma.ModelName = makeEnum({
  Recipe: 'Recipe',
  RecipeFood: 'RecipeFood',
  RecipeEvent: 'RecipeEvent',
  RecipeInstruction: 'RecipeInstruction',
  ShoppingList: 'ShoppingList',
  ShoppingListEvent: 'ShoppingListEvent',
  ShoppingListFood: 'ShoppingListFood',
  Food: 'Food',
  QuantityUnit: 'QuantityUnit',
  Event: 'Event',
  User: 'User',
  UserPreference: 'UserPreference'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
