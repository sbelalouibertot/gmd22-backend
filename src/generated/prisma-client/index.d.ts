
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Recipe
 * 
 */
export type Recipe = {
  id: string
  name: string
  preparationDuration: number
  cookingDuration: number
}

/**
 * Model RecipeFood
 * 
 */
export type RecipeFood = {
  id: string
  recipeId: string
  foodId: string
  quantity: number
  quantityUnit: string | null
}

/**
 * Model RecipeEvent
 * 
 */
export type RecipeEvent = {
  id: string
  recipeId: string
  eventId: string
  finishedAt: Date | null
}

/**
 * Model RecipeInstruction
 * 
 */
export type RecipeInstruction = {
  id: string
  description: string
  recipeId: string
  duration: number
}

/**
 * Model ShoppingList
 * 
 */
export type ShoppingList = {
  id: string
  name: string
  createdAt: Date
}

/**
 * Model ShoppingListEvent
 * 
 */
export type ShoppingListEvent = {
  id: string
  shoppingListId: string
  eventId: string
  finishedAt: Date | null
}

/**
 * Model ShoppingListFood
 * 
 */
export type ShoppingListFood = {
  id: string
  shoppingListId: string
  foodId: string
  isChecked: boolean
}

/**
 * Model Food
 * 
 */
export type Food = {
  id: string
  name: string
  type: FoodType
}

/**
 * Model QuantityUnit
 * 
 */
export type QuantityUnit = {
  type: string
  standardUnit: StandardUnitType
  value: number
}

/**
 * Model Event
 * 
 */
export type Event = {
  id: string
  type: EventType
  userId: string
  date: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  username: string
  firstName: string
}

/**
 * Model UserPreference
 * 
 */
export type UserPreference = {
  id: string
  userId: string
  type: UserPreferenceType
  value: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const FoodType: {
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
};

export type FoodType = (typeof FoodType)[keyof typeof FoodType]


export const StandardUnitType: {
  g: 'g',
  mg: 'mg',
  kg: 'kg',
  L: 'L',
  mL: 'mL'
};

export type StandardUnitType = (typeof StandardUnitType)[keyof typeof StandardUnitType]


export const EventType: {
  SHOPPING: 'SHOPPING',
  PREPARATION: 'PREPARATION',
  PERIOD_START: 'PERIOD_START',
  PERIOD_END: 'PERIOD_END'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const UserPreferenceType: {
  MAX_RECIPES_PER_WEEK: 'MAX_RECIPES_PER_WEEK',
  SHOPPING_WEEKS_INTERVAL: 'SHOPPING_WEEKS_INTERVAL'
};

export type UserPreferenceType = (typeof UserPreferenceType)[keyof typeof UserPreferenceType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<GlobalReject>;

  /**
   * `prisma.recipeFood`: Exposes CRUD operations for the **RecipeFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeFoods
    * const recipeFoods = await prisma.recipeFood.findMany()
    * ```
    */
  get recipeFood(): Prisma.RecipeFoodDelegate<GlobalReject>;

  /**
   * `prisma.recipeEvent`: Exposes CRUD operations for the **RecipeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeEvents
    * const recipeEvents = await prisma.recipeEvent.findMany()
    * ```
    */
  get recipeEvent(): Prisma.RecipeEventDelegate<GlobalReject>;

  /**
   * `prisma.recipeInstruction`: Exposes CRUD operations for the **RecipeInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeInstructions
    * const recipeInstructions = await prisma.recipeInstruction.findMany()
    * ```
    */
  get recipeInstruction(): Prisma.RecipeInstructionDelegate<GlobalReject>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **ShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.ShoppingListDelegate<GlobalReject>;

  /**
   * `prisma.shoppingListEvent`: Exposes CRUD operations for the **ShoppingListEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListEvents
    * const shoppingListEvents = await prisma.shoppingListEvent.findMany()
    * ```
    */
  get shoppingListEvent(): Prisma.ShoppingListEventDelegate<GlobalReject>;

  /**
   * `prisma.shoppingListFood`: Exposes CRUD operations for the **ShoppingListFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListFoods
    * const shoppingListFoods = await prisma.shoppingListFood.findMany()
    * ```
    */
  get shoppingListFood(): Prisma.ShoppingListFoodDelegate<GlobalReject>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<GlobalReject>;

  /**
   * `prisma.quantityUnit`: Exposes CRUD operations for the **QuantityUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuantityUnits
    * const quantityUnits = await prisma.quantityUnit.findMany()
    * ```
    */
  get quantityUnit(): Prisma.QuantityUnitDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.1
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RecipeCountOutputType
   */


  export type RecipeCountOutputType = {
    recipeEvents: number
    recipeInstructions: number
    recipeFood: number
  }

  export type RecipeCountOutputTypeSelect = {
    recipeEvents?: boolean
    recipeInstructions?: boolean
    recipeFood?: boolean
  }

  export type RecipeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RecipeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RecipeCountOutputType
    : S extends undefined
    ? never
    : S extends RecipeCountOutputTypeArgs
    ?'include' extends U
    ? RecipeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RecipeCountOutputType ? RecipeCountOutputType[P] : never
  } 
    : RecipeCountOutputType
  : RecipeCountOutputType




  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     * 
    **/
    select?: RecipeCountOutputTypeSelect | null
  }



  /**
   * Count Type ShoppingListCountOutputType
   */


  export type ShoppingListCountOutputType = {
    shoppingListEvents: number
    shoppingListFoods: number
  }

  export type ShoppingListCountOutputTypeSelect = {
    shoppingListEvents?: boolean
    shoppingListFoods?: boolean
  }

  export type ShoppingListCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ShoppingListCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ShoppingListCountOutputType
    : S extends undefined
    ? never
    : S extends ShoppingListCountOutputTypeArgs
    ?'include' extends U
    ? ShoppingListCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ShoppingListCountOutputType ? ShoppingListCountOutputType[P] : never
  } 
    : ShoppingListCountOutputType
  : ShoppingListCountOutputType




  // Custom InputTypes

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     * 
    **/
    select?: ShoppingListCountOutputTypeSelect | null
  }



  /**
   * Count Type FoodCountOutputType
   */


  export type FoodCountOutputType = {
    recipeFoodItems: number
    shoppingListFoodItems: number
  }

  export type FoodCountOutputTypeSelect = {
    recipeFoodItems?: boolean
    shoppingListFoodItems?: boolean
  }

  export type FoodCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FoodCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FoodCountOutputType
    : S extends undefined
    ? never
    : S extends FoodCountOutputTypeArgs
    ?'include' extends U
    ? FoodCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FoodCountOutputType ? FoodCountOutputType[P] : never
  } 
    : FoodCountOutputType
  : FoodCountOutputType




  // Custom InputTypes

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     * 
    **/
    select?: FoodCountOutputTypeSelect | null
  }



  /**
   * Count Type EventCountOutputType
   */


  export type EventCountOutputType = {
    recipeEvents: number
    shoppingListEvents: number
  }

  export type EventCountOutputTypeSelect = {
    recipeEvents?: boolean
    shoppingListEvents?: boolean
  }

  export type EventCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EventCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EventCountOutputType
    : S extends undefined
    ? never
    : S extends EventCountOutputTypeArgs
    ?'include' extends U
    ? EventCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EventCountOutputType ? EventCountOutputType[P] : never
  } 
    : EventCountOutputType
  : EventCountOutputType




  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     * 
    **/
    select?: EventCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    events: number
    userPreferences: number
  }

  export type UserCountOutputTypeSelect = {
    events?: boolean
    userPreferences?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Recipe
   */


  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    preparationDuration: number | null
    cookingDuration: number | null
  }

  export type RecipeSumAggregateOutputType = {
    preparationDuration: number | null
    cookingDuration: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    preparationDuration: number | null
    cookingDuration: number | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    preparationDuration: number | null
    cookingDuration: number | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    preparationDuration: number
    cookingDuration: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    preparationDuration?: true
    cookingDuration?: true
  }

  export type RecipeSumAggregateInputType = {
    preparationDuration?: true
    cookingDuration?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    preparationDuration?: true
    cookingDuration?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    preparationDuration?: true
    cookingDuration?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    preparationDuration?: true
    cookingDuration?: true
    _all?: true
  }

  export type RecipeAggregateArgs = {
    /**
     * Filter which Recipe to aggregate.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs = {
    where?: RecipeWhereInput
    orderBy?: Enumerable<RecipeOrderByWithAggregationInput>
    by: Array<RecipeScalarFieldEnum>
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }


  export type RecipeGroupByOutputType = {
    id: string
    name: string
    preparationDuration: number
    cookingDuration: number
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect = {
    id?: boolean
    name?: boolean
    preparationDuration?: boolean
    cookingDuration?: boolean
    recipeEvents?: boolean | RecipeEventFindManyArgs
    recipeInstructions?: boolean | RecipeInstructionFindManyArgs
    recipeFood?: boolean | RecipeFoodFindManyArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  }

  export type RecipeInclude = {
    recipeEvents?: boolean | RecipeEventFindManyArgs
    recipeInstructions?: boolean | RecipeInstructionFindManyArgs
    recipeFood?: boolean | RecipeFoodFindManyArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  }

  export type RecipeGetPayload<
    S extends boolean | null | undefined | RecipeArgs,
    U = keyof S
      > = S extends true
        ? Recipe
    : S extends undefined
    ? never
    : S extends RecipeArgs | RecipeFindManyArgs
    ?'include' extends U
    ? Recipe  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipeEvents' ? Array < RecipeEventGetPayload<S['include'][P]>>  :
        P extends 'recipeInstructions' ? Array < RecipeInstructionGetPayload<S['include'][P]>>  :
        P extends 'recipeFood' ? Array < RecipeFoodGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipeEvents' ? Array < RecipeEventGetPayload<S['select'][P]>>  :
        P extends 'recipeInstructions' ? Array < RecipeInstructionGetPayload<S['select'][P]>>  :
        P extends 'recipeFood' ? Array < RecipeFoodGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Recipe ? Recipe[P] : never
  } 
    : Recipe
  : Recipe


  type RecipeCountArgs = Merge<
    Omit<RecipeFindManyArgs, 'select' | 'include'> & {
      select?: RecipeCountAggregateInputType | true
    }
  >

  export interface RecipeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs>(
      args?: SelectSubset<T, RecipeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Recipe>>, PrismaPromise<Array<RecipeGetPayload<T>>>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs>(
      args: SelectSubset<T, RecipeCreateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Create many Recipes.
     *     @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeCreateManyArgs>(
      args?: SelectSubset<T, RecipeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs>(
      args: SelectSubset<T, RecipeDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs>(
      args: SelectSubset<T, RecipeUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs>(
      args?: SelectSubset<T, RecipeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs>(
      args: SelectSubset<T, RecipeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs>(
      args: SelectSubset<T, RecipeUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipeEvents<T extends RecipeEventFindManyArgs = {}>(args?: Subset<T, RecipeEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RecipeEvent>>, PrismaPromise<Array<RecipeEventGetPayload<T>>>>;

    recipeInstructions<T extends RecipeInstructionFindManyArgs = {}>(args?: Subset<T, RecipeInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RecipeInstruction>>, PrismaPromise<Array<RecipeInstructionGetPayload<T>>>>;

    recipeFood<T extends RecipeFoodFindManyArgs = {}>(args?: Subset<T, RecipeFoodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RecipeFood>>, PrismaPromise<Array<RecipeFoodGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     * 
    **/
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipes to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to create a Recipe.
     * 
    **/
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs = {
    /**
     * The data used to create many Recipes.
     * 
    **/
    data: Enumerable<RecipeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to update a Recipe.
     * 
    **/
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs = {
    /**
     * The data used to update Recipes.
     * 
    **/
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     * 
    **/
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     * 
    **/
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter which Recipe to delete.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs = {
    /**
     * Filter which Recipes to delete
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe without action
   */
  export type RecipeArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
  }



  /**
   * Model RecipeFood
   */


  export type AggregateRecipeFood = {
    _count: RecipeFoodCountAggregateOutputType | null
    _avg: RecipeFoodAvgAggregateOutputType | null
    _sum: RecipeFoodSumAggregateOutputType | null
    _min: RecipeFoodMinAggregateOutputType | null
    _max: RecipeFoodMaxAggregateOutputType | null
  }

  export type RecipeFoodAvgAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeFoodSumAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeFoodMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    foodId: string | null
    quantity: number | null
    quantityUnit: string | null
  }

  export type RecipeFoodMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    foodId: string | null
    quantity: number | null
    quantityUnit: string | null
  }

  export type RecipeFoodCountAggregateOutputType = {
    id: number
    recipeId: number
    foodId: number
    quantity: number
    quantityUnit: number
    _all: number
  }


  export type RecipeFoodAvgAggregateInputType = {
    quantity?: true
  }

  export type RecipeFoodSumAggregateInputType = {
    quantity?: true
  }

  export type RecipeFoodMinAggregateInputType = {
    id?: true
    recipeId?: true
    foodId?: true
    quantity?: true
    quantityUnit?: true
  }

  export type RecipeFoodMaxAggregateInputType = {
    id?: true
    recipeId?: true
    foodId?: true
    quantity?: true
    quantityUnit?: true
  }

  export type RecipeFoodCountAggregateInputType = {
    id?: true
    recipeId?: true
    foodId?: true
    quantity?: true
    quantityUnit?: true
    _all?: true
  }

  export type RecipeFoodAggregateArgs = {
    /**
     * Filter which RecipeFood to aggregate.
     * 
    **/
    where?: RecipeFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeFoods
    **/
    _count?: true | RecipeFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeFoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeFoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeFoodMaxAggregateInputType
  }

  export type GetRecipeFoodAggregateType<T extends RecipeFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeFood[P]>
      : GetScalarType<T[P], AggregateRecipeFood[P]>
  }




  export type RecipeFoodGroupByArgs = {
    where?: RecipeFoodWhereInput
    orderBy?: Enumerable<RecipeFoodOrderByWithAggregationInput>
    by: Array<RecipeFoodScalarFieldEnum>
    having?: RecipeFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeFoodCountAggregateInputType | true
    _avg?: RecipeFoodAvgAggregateInputType
    _sum?: RecipeFoodSumAggregateInputType
    _min?: RecipeFoodMinAggregateInputType
    _max?: RecipeFoodMaxAggregateInputType
  }


  export type RecipeFoodGroupByOutputType = {
    id: string
    recipeId: string
    foodId: string
    quantity: number
    quantityUnit: string | null
    _count: RecipeFoodCountAggregateOutputType | null
    _avg: RecipeFoodAvgAggregateOutputType | null
    _sum: RecipeFoodSumAggregateOutputType | null
    _min: RecipeFoodMinAggregateOutputType | null
    _max: RecipeFoodMaxAggregateOutputType | null
  }

  type GetRecipeFoodGroupByPayload<T extends RecipeFoodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeFoodGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeFoodGroupByOutputType[P]>
        }
      >
    >


  export type RecipeFoodSelect = {
    id?: boolean
    recipeId?: boolean
    foodId?: boolean
    quantity?: boolean
    quantityUnit?: boolean
    recipe?: boolean | RecipeArgs
    food?: boolean | FoodArgs
  }

  export type RecipeFoodInclude = {
    recipe?: boolean | RecipeArgs
    food?: boolean | FoodArgs
  }

  export type RecipeFoodGetPayload<
    S extends boolean | null | undefined | RecipeFoodArgs,
    U = keyof S
      > = S extends true
        ? RecipeFood
    : S extends undefined
    ? never
    : S extends RecipeFoodArgs | RecipeFoodFindManyArgs
    ?'include' extends U
    ? RecipeFood  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> :
        P extends 'food' ? FoodGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> :
        P extends 'food' ? FoodGetPayload<S['select'][P]> :  P extends keyof RecipeFood ? RecipeFood[P] : never
  } 
    : RecipeFood
  : RecipeFood


  type RecipeFoodCountArgs = Merge<
    Omit<RecipeFoodFindManyArgs, 'select' | 'include'> & {
      select?: RecipeFoodCountAggregateInputType | true
    }
  >

  export interface RecipeFoodDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RecipeFood that matches the filter.
     * @param {RecipeFoodFindUniqueArgs} args - Arguments to find a RecipeFood
     * @example
     * // Get one RecipeFood
     * const recipeFood = await prisma.recipeFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFoodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFoodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecipeFood'> extends True ? CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>> : CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood | null >, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T> | null >>

    /**
     * Find the first RecipeFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodFindFirstArgs} args - Arguments to find a RecipeFood
     * @example
     * // Get one RecipeFood
     * const recipeFood = await prisma.recipeFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFoodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFoodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecipeFood'> extends True ? CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>> : CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood | null >, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T> | null >>

    /**
     * Find zero or more RecipeFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeFoods
     * const recipeFoods = await prisma.recipeFood.findMany()
     * 
     * // Get first 10 RecipeFoods
     * const recipeFoods = await prisma.recipeFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeFoodWithIdOnly = await prisma.recipeFood.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFoodFindManyArgs>(
      args?: SelectSubset<T, RecipeFoodFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RecipeFood>>, PrismaPromise<Array<RecipeFoodGetPayload<T>>>>

    /**
     * Create a RecipeFood.
     * @param {RecipeFoodCreateArgs} args - Arguments to create a RecipeFood.
     * @example
     * // Create one RecipeFood
     * const RecipeFood = await prisma.recipeFood.create({
     *   data: {
     *     // ... data to create a RecipeFood
     *   }
     * })
     * 
    **/
    create<T extends RecipeFoodCreateArgs>(
      args: SelectSubset<T, RecipeFoodCreateArgs>
    ): CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>>

    /**
     * Create many RecipeFoods.
     *     @param {RecipeFoodCreateManyArgs} args - Arguments to create many RecipeFoods.
     *     @example
     *     // Create many RecipeFoods
     *     const recipeFood = await prisma.recipeFood.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeFoodCreateManyArgs>(
      args?: SelectSubset<T, RecipeFoodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecipeFood.
     * @param {RecipeFoodDeleteArgs} args - Arguments to delete one RecipeFood.
     * @example
     * // Delete one RecipeFood
     * const RecipeFood = await prisma.recipeFood.delete({
     *   where: {
     *     // ... filter to delete one RecipeFood
     *   }
     * })
     * 
    **/
    delete<T extends RecipeFoodDeleteArgs>(
      args: SelectSubset<T, RecipeFoodDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>>

    /**
     * Update one RecipeFood.
     * @param {RecipeFoodUpdateArgs} args - Arguments to update one RecipeFood.
     * @example
     * // Update one RecipeFood
     * const recipeFood = await prisma.recipeFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeFoodUpdateArgs>(
      args: SelectSubset<T, RecipeFoodUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>>

    /**
     * Delete zero or more RecipeFoods.
     * @param {RecipeFoodDeleteManyArgs} args - Arguments to filter RecipeFoods to delete.
     * @example
     * // Delete a few RecipeFoods
     * const { count } = await prisma.recipeFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeFoodDeleteManyArgs>(
      args?: SelectSubset<T, RecipeFoodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeFoods
     * const recipeFood = await prisma.recipeFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeFoodUpdateManyArgs>(
      args: SelectSubset<T, RecipeFoodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeFood.
     * @param {RecipeFoodUpsertArgs} args - Arguments to update or create a RecipeFood.
     * @example
     * // Update or create a RecipeFood
     * const recipeFood = await prisma.recipeFood.upsert({
     *   create: {
     *     // ... data to create a RecipeFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeFood we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeFoodUpsertArgs>(
      args: SelectSubset<T, RecipeFoodUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeFoodClient<RecipeFood>, Prisma__RecipeFoodClient<RecipeFoodGetPayload<T>>>

    /**
     * Count the number of RecipeFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodCountArgs} args - Arguments to filter RecipeFoods to count.
     * @example
     * // Count the number of RecipeFoods
     * const count = await prisma.recipeFood.count({
     *   where: {
     *     // ... the filter for the RecipeFoods we want to count
     *   }
     * })
    **/
    count<T extends RecipeFoodCountArgs>(
      args?: Subset<T, RecipeFoodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeFoodAggregateArgs>(args: Subset<T, RecipeFoodAggregateArgs>): PrismaPromise<GetRecipeFoodAggregateType<T>>

    /**
     * Group by RecipeFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeFoodGroupByArgs['orderBy'] }
        : { orderBy?: RecipeFoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeFoodGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeFoodClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs = {}>(args?: Subset<T, RecipeArgs>): CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>;

    food<T extends FoodArgs = {}>(args?: Subset<T, FoodArgs>): CheckSelect<T, Prisma__FoodClient<Food | null >, Prisma__FoodClient<FoodGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RecipeFood findUnique
   */
  export type RecipeFoodFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * Throw an Error if a RecipeFood can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeFood to fetch.
     * 
    **/
    where: RecipeFoodWhereUniqueInput
  }


  /**
   * RecipeFood findFirst
   */
  export type RecipeFoodFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * Throw an Error if a RecipeFood can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeFood to fetch.
     * 
    **/
    where?: RecipeFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeFoods.
     * 
    **/
    cursor?: RecipeFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeFoods.
     * 
    **/
    distinct?: Enumerable<RecipeFoodScalarFieldEnum>
  }


  /**
   * RecipeFood findMany
   */
  export type RecipeFoodFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * Filter, which RecipeFoods to fetch.
     * 
    **/
    where?: RecipeFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeFoods.
     * 
    **/
    cursor?: RecipeFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeFoodScalarFieldEnum>
  }


  /**
   * RecipeFood create
   */
  export type RecipeFoodCreateArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * The data needed to create a RecipeFood.
     * 
    **/
    data: XOR<RecipeFoodCreateInput, RecipeFoodUncheckedCreateInput>
  }


  /**
   * RecipeFood createMany
   */
  export type RecipeFoodCreateManyArgs = {
    /**
     * The data used to create many RecipeFoods.
     * 
    **/
    data: Enumerable<RecipeFoodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecipeFood update
   */
  export type RecipeFoodUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * The data needed to update a RecipeFood.
     * 
    **/
    data: XOR<RecipeFoodUpdateInput, RecipeFoodUncheckedUpdateInput>
    /**
     * Choose, which RecipeFood to update.
     * 
    **/
    where: RecipeFoodWhereUniqueInput
  }


  /**
   * RecipeFood updateMany
   */
  export type RecipeFoodUpdateManyArgs = {
    /**
     * The data used to update RecipeFoods.
     * 
    **/
    data: XOR<RecipeFoodUpdateManyMutationInput, RecipeFoodUncheckedUpdateManyInput>
    /**
     * Filter which RecipeFoods to update
     * 
    **/
    where?: RecipeFoodWhereInput
  }


  /**
   * RecipeFood upsert
   */
  export type RecipeFoodUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * The filter to search for the RecipeFood to update in case it exists.
     * 
    **/
    where: RecipeFoodWhereUniqueInput
    /**
     * In case the RecipeFood found by the `where` argument doesn't exist, create a new RecipeFood with this data.
     * 
    **/
    create: XOR<RecipeFoodCreateInput, RecipeFoodUncheckedCreateInput>
    /**
     * In case the RecipeFood was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeFoodUpdateInput, RecipeFoodUncheckedUpdateInput>
  }


  /**
   * RecipeFood delete
   */
  export type RecipeFoodDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
    /**
     * Filter which RecipeFood to delete.
     * 
    **/
    where: RecipeFoodWhereUniqueInput
  }


  /**
   * RecipeFood deleteMany
   */
  export type RecipeFoodDeleteManyArgs = {
    /**
     * Filter which RecipeFoods to delete
     * 
    **/
    where?: RecipeFoodWhereInput
  }


  /**
   * RecipeFood without action
   */
  export type RecipeFoodArgs = {
    /**
     * Select specific fields to fetch from the RecipeFood
     * 
    **/
    select?: RecipeFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeFoodInclude | null
  }



  /**
   * Model RecipeEvent
   */


  export type AggregateRecipeEvent = {
    _count: RecipeEventCountAggregateOutputType | null
    _min: RecipeEventMinAggregateOutputType | null
    _max: RecipeEventMaxAggregateOutputType | null
  }

  export type RecipeEventMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    eventId: string | null
    finishedAt: Date | null
  }

  export type RecipeEventMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    eventId: string | null
    finishedAt: Date | null
  }

  export type RecipeEventCountAggregateOutputType = {
    id: number
    recipeId: number
    eventId: number
    finishedAt: number
    _all: number
  }


  export type RecipeEventMinAggregateInputType = {
    id?: true
    recipeId?: true
    eventId?: true
    finishedAt?: true
  }

  export type RecipeEventMaxAggregateInputType = {
    id?: true
    recipeId?: true
    eventId?: true
    finishedAt?: true
  }

  export type RecipeEventCountAggregateInputType = {
    id?: true
    recipeId?: true
    eventId?: true
    finishedAt?: true
    _all?: true
  }

  export type RecipeEventAggregateArgs = {
    /**
     * Filter which RecipeEvent to aggregate.
     * 
    **/
    where?: RecipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeEvents
    **/
    _count?: true | RecipeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeEventMaxAggregateInputType
  }

  export type GetRecipeEventAggregateType<T extends RecipeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeEvent[P]>
      : GetScalarType<T[P], AggregateRecipeEvent[P]>
  }




  export type RecipeEventGroupByArgs = {
    where?: RecipeEventWhereInput
    orderBy?: Enumerable<RecipeEventOrderByWithAggregationInput>
    by: Array<RecipeEventScalarFieldEnum>
    having?: RecipeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeEventCountAggregateInputType | true
    _min?: RecipeEventMinAggregateInputType
    _max?: RecipeEventMaxAggregateInputType
  }


  export type RecipeEventGroupByOutputType = {
    id: string
    recipeId: string
    eventId: string
    finishedAt: Date | null
    _count: RecipeEventCountAggregateOutputType | null
    _min: RecipeEventMinAggregateOutputType | null
    _max: RecipeEventMaxAggregateOutputType | null
  }

  type GetRecipeEventGroupByPayload<T extends RecipeEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeEventGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeEventGroupByOutputType[P]>
        }
      >
    >


  export type RecipeEventSelect = {
    id?: boolean
    recipeId?: boolean
    eventId?: boolean
    finishedAt?: boolean
    recipe?: boolean | RecipeArgs
    event?: boolean | EventArgs
  }

  export type RecipeEventInclude = {
    recipe?: boolean | RecipeArgs
    event?: boolean | EventArgs
  }

  export type RecipeEventGetPayload<
    S extends boolean | null | undefined | RecipeEventArgs,
    U = keyof S
      > = S extends true
        ? RecipeEvent
    : S extends undefined
    ? never
    : S extends RecipeEventArgs | RecipeEventFindManyArgs
    ?'include' extends U
    ? RecipeEvent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> :
        P extends 'event' ? EventGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> :
        P extends 'event' ? EventGetPayload<S['select'][P]> :  P extends keyof RecipeEvent ? RecipeEvent[P] : never
  } 
    : RecipeEvent
  : RecipeEvent


  type RecipeEventCountArgs = Merge<
    Omit<RecipeEventFindManyArgs, 'select' | 'include'> & {
      select?: RecipeEventCountAggregateInputType | true
    }
  >

  export interface RecipeEventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RecipeEvent that matches the filter.
     * @param {RecipeEventFindUniqueArgs} args - Arguments to find a RecipeEvent
     * @example
     * // Get one RecipeEvent
     * const recipeEvent = await prisma.recipeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecipeEvent'> extends True ? CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>> : CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent | null >, Prisma__RecipeEventClient<RecipeEventGetPayload<T> | null >>

    /**
     * Find the first RecipeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventFindFirstArgs} args - Arguments to find a RecipeEvent
     * @example
     * // Get one RecipeEvent
     * const recipeEvent = await prisma.recipeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecipeEvent'> extends True ? CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>> : CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent | null >, Prisma__RecipeEventClient<RecipeEventGetPayload<T> | null >>

    /**
     * Find zero or more RecipeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeEvents
     * const recipeEvents = await prisma.recipeEvent.findMany()
     * 
     * // Get first 10 RecipeEvents
     * const recipeEvents = await prisma.recipeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeEventWithIdOnly = await prisma.recipeEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeEventFindManyArgs>(
      args?: SelectSubset<T, RecipeEventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RecipeEvent>>, PrismaPromise<Array<RecipeEventGetPayload<T>>>>

    /**
     * Create a RecipeEvent.
     * @param {RecipeEventCreateArgs} args - Arguments to create a RecipeEvent.
     * @example
     * // Create one RecipeEvent
     * const RecipeEvent = await prisma.recipeEvent.create({
     *   data: {
     *     // ... data to create a RecipeEvent
     *   }
     * })
     * 
    **/
    create<T extends RecipeEventCreateArgs>(
      args: SelectSubset<T, RecipeEventCreateArgs>
    ): CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>>

    /**
     * Create many RecipeEvents.
     *     @param {RecipeEventCreateManyArgs} args - Arguments to create many RecipeEvents.
     *     @example
     *     // Create many RecipeEvents
     *     const recipeEvent = await prisma.recipeEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeEventCreateManyArgs>(
      args?: SelectSubset<T, RecipeEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecipeEvent.
     * @param {RecipeEventDeleteArgs} args - Arguments to delete one RecipeEvent.
     * @example
     * // Delete one RecipeEvent
     * const RecipeEvent = await prisma.recipeEvent.delete({
     *   where: {
     *     // ... filter to delete one RecipeEvent
     *   }
     * })
     * 
    **/
    delete<T extends RecipeEventDeleteArgs>(
      args: SelectSubset<T, RecipeEventDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>>

    /**
     * Update one RecipeEvent.
     * @param {RecipeEventUpdateArgs} args - Arguments to update one RecipeEvent.
     * @example
     * // Update one RecipeEvent
     * const recipeEvent = await prisma.recipeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeEventUpdateArgs>(
      args: SelectSubset<T, RecipeEventUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>>

    /**
     * Delete zero or more RecipeEvents.
     * @param {RecipeEventDeleteManyArgs} args - Arguments to filter RecipeEvents to delete.
     * @example
     * // Delete a few RecipeEvents
     * const { count } = await prisma.recipeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeEventDeleteManyArgs>(
      args?: SelectSubset<T, RecipeEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeEvents
     * const recipeEvent = await prisma.recipeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeEventUpdateManyArgs>(
      args: SelectSubset<T, RecipeEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeEvent.
     * @param {RecipeEventUpsertArgs} args - Arguments to update or create a RecipeEvent.
     * @example
     * // Update or create a RecipeEvent
     * const recipeEvent = await prisma.recipeEvent.upsert({
     *   create: {
     *     // ... data to create a RecipeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeEvent we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeEventUpsertArgs>(
      args: SelectSubset<T, RecipeEventUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeEventClient<RecipeEvent>, Prisma__RecipeEventClient<RecipeEventGetPayload<T>>>

    /**
     * Count the number of RecipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventCountArgs} args - Arguments to filter RecipeEvents to count.
     * @example
     * // Count the number of RecipeEvents
     * const count = await prisma.recipeEvent.count({
     *   where: {
     *     // ... the filter for the RecipeEvents we want to count
     *   }
     * })
    **/
    count<T extends RecipeEventCountArgs>(
      args?: Subset<T, RecipeEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeEventAggregateArgs>(args: Subset<T, RecipeEventAggregateArgs>): PrismaPromise<GetRecipeEventAggregateType<T>>

    /**
     * Group by RecipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeEventGroupByArgs['orderBy'] }
        : { orderBy?: RecipeEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeEventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs = {}>(args?: Subset<T, RecipeArgs>): CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>;

    event<T extends EventArgs = {}>(args?: Subset<T, EventArgs>): CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RecipeEvent findUnique
   */
  export type RecipeEventFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * Throw an Error if a RecipeEvent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeEvent to fetch.
     * 
    **/
    where: RecipeEventWhereUniqueInput
  }


  /**
   * RecipeEvent findFirst
   */
  export type RecipeEventFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * Throw an Error if a RecipeEvent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeEvent to fetch.
     * 
    **/
    where?: RecipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeEvents.
     * 
    **/
    cursor?: RecipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeEvents.
     * 
    **/
    distinct?: Enumerable<RecipeEventScalarFieldEnum>
  }


  /**
   * RecipeEvent findMany
   */
  export type RecipeEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * Filter, which RecipeEvents to fetch.
     * 
    **/
    where?: RecipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeEvents.
     * 
    **/
    cursor?: RecipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeEventScalarFieldEnum>
  }


  /**
   * RecipeEvent create
   */
  export type RecipeEventCreateArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * The data needed to create a RecipeEvent.
     * 
    **/
    data: XOR<RecipeEventCreateInput, RecipeEventUncheckedCreateInput>
  }


  /**
   * RecipeEvent createMany
   */
  export type RecipeEventCreateManyArgs = {
    /**
     * The data used to create many RecipeEvents.
     * 
    **/
    data: Enumerable<RecipeEventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecipeEvent update
   */
  export type RecipeEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * The data needed to update a RecipeEvent.
     * 
    **/
    data: XOR<RecipeEventUpdateInput, RecipeEventUncheckedUpdateInput>
    /**
     * Choose, which RecipeEvent to update.
     * 
    **/
    where: RecipeEventWhereUniqueInput
  }


  /**
   * RecipeEvent updateMany
   */
  export type RecipeEventUpdateManyArgs = {
    /**
     * The data used to update RecipeEvents.
     * 
    **/
    data: XOR<RecipeEventUpdateManyMutationInput, RecipeEventUncheckedUpdateManyInput>
    /**
     * Filter which RecipeEvents to update
     * 
    **/
    where?: RecipeEventWhereInput
  }


  /**
   * RecipeEvent upsert
   */
  export type RecipeEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * The filter to search for the RecipeEvent to update in case it exists.
     * 
    **/
    where: RecipeEventWhereUniqueInput
    /**
     * In case the RecipeEvent found by the `where` argument doesn't exist, create a new RecipeEvent with this data.
     * 
    **/
    create: XOR<RecipeEventCreateInput, RecipeEventUncheckedCreateInput>
    /**
     * In case the RecipeEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeEventUpdateInput, RecipeEventUncheckedUpdateInput>
  }


  /**
   * RecipeEvent delete
   */
  export type RecipeEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
    /**
     * Filter which RecipeEvent to delete.
     * 
    **/
    where: RecipeEventWhereUniqueInput
  }


  /**
   * RecipeEvent deleteMany
   */
  export type RecipeEventDeleteManyArgs = {
    /**
     * Filter which RecipeEvents to delete
     * 
    **/
    where?: RecipeEventWhereInput
  }


  /**
   * RecipeEvent without action
   */
  export type RecipeEventArgs = {
    /**
     * Select specific fields to fetch from the RecipeEvent
     * 
    **/
    select?: RecipeEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeEventInclude | null
  }



  /**
   * Model RecipeInstruction
   */


  export type AggregateRecipeInstruction = {
    _count: RecipeInstructionCountAggregateOutputType | null
    _avg: RecipeInstructionAvgAggregateOutputType | null
    _sum: RecipeInstructionSumAggregateOutputType | null
    _min: RecipeInstructionMinAggregateOutputType | null
    _max: RecipeInstructionMaxAggregateOutputType | null
  }

  export type RecipeInstructionAvgAggregateOutputType = {
    duration: number | null
  }

  export type RecipeInstructionSumAggregateOutputType = {
    duration: number | null
  }

  export type RecipeInstructionMinAggregateOutputType = {
    id: string | null
    description: string | null
    recipeId: string | null
    duration: number | null
  }

  export type RecipeInstructionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    recipeId: string | null
    duration: number | null
  }

  export type RecipeInstructionCountAggregateOutputType = {
    id: number
    description: number
    recipeId: number
    duration: number
    _all: number
  }


  export type RecipeInstructionAvgAggregateInputType = {
    duration?: true
  }

  export type RecipeInstructionSumAggregateInputType = {
    duration?: true
  }

  export type RecipeInstructionMinAggregateInputType = {
    id?: true
    description?: true
    recipeId?: true
    duration?: true
  }

  export type RecipeInstructionMaxAggregateInputType = {
    id?: true
    description?: true
    recipeId?: true
    duration?: true
  }

  export type RecipeInstructionCountAggregateInputType = {
    id?: true
    description?: true
    recipeId?: true
    duration?: true
    _all?: true
  }

  export type RecipeInstructionAggregateArgs = {
    /**
     * Filter which RecipeInstruction to aggregate.
     * 
    **/
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeInstructions
    **/
    _count?: true | RecipeInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeInstructionMaxAggregateInputType
  }

  export type GetRecipeInstructionAggregateType<T extends RecipeInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeInstruction[P]>
      : GetScalarType<T[P], AggregateRecipeInstruction[P]>
  }




  export type RecipeInstructionGroupByArgs = {
    where?: RecipeInstructionWhereInput
    orderBy?: Enumerable<RecipeInstructionOrderByWithAggregationInput>
    by: Array<RecipeInstructionScalarFieldEnum>
    having?: RecipeInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeInstructionCountAggregateInputType | true
    _avg?: RecipeInstructionAvgAggregateInputType
    _sum?: RecipeInstructionSumAggregateInputType
    _min?: RecipeInstructionMinAggregateInputType
    _max?: RecipeInstructionMaxAggregateInputType
  }


  export type RecipeInstructionGroupByOutputType = {
    id: string
    description: string
    recipeId: string
    duration: number
    _count: RecipeInstructionCountAggregateOutputType | null
    _avg: RecipeInstructionAvgAggregateOutputType | null
    _sum: RecipeInstructionSumAggregateOutputType | null
    _min: RecipeInstructionMinAggregateOutputType | null
    _max: RecipeInstructionMaxAggregateOutputType | null
  }

  type GetRecipeInstructionGroupByPayload<T extends RecipeInstructionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeInstructionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeInstructionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeInstructionGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeInstructionGroupByOutputType[P]>
        }
      >
    >


  export type RecipeInstructionSelect = {
    id?: boolean
    description?: boolean
    recipeId?: boolean
    duration?: boolean
    recipe?: boolean | RecipeArgs
  }

  export type RecipeInstructionInclude = {
    recipe?: boolean | RecipeArgs
  }

  export type RecipeInstructionGetPayload<
    S extends boolean | null | undefined | RecipeInstructionArgs,
    U = keyof S
      > = S extends true
        ? RecipeInstruction
    : S extends undefined
    ? never
    : S extends RecipeInstructionArgs | RecipeInstructionFindManyArgs
    ?'include' extends U
    ? RecipeInstruction  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> :  P extends keyof RecipeInstruction ? RecipeInstruction[P] : never
  } 
    : RecipeInstruction
  : RecipeInstruction


  type RecipeInstructionCountArgs = Merge<
    Omit<RecipeInstructionFindManyArgs, 'select' | 'include'> & {
      select?: RecipeInstructionCountAggregateInputType | true
    }
  >

  export interface RecipeInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RecipeInstruction that matches the filter.
     * @param {RecipeInstructionFindUniqueArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecipeInstruction'> extends True ? CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction | null >, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T> | null >>

    /**
     * Find the first RecipeInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionFindFirstArgs} args - Arguments to find a RecipeInstruction
     * @example
     * // Get one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecipeInstruction'> extends True ? CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction | null >, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T> | null >>

    /**
     * Find zero or more RecipeInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeInstructions
     * const recipeInstructions = await prisma.recipeInstruction.findMany()
     * 
     * // Get first 10 RecipeInstructions
     * const recipeInstructions = await prisma.recipeInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeInstructionWithIdOnly = await prisma.recipeInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeInstructionFindManyArgs>(
      args?: SelectSubset<T, RecipeInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RecipeInstruction>>, PrismaPromise<Array<RecipeInstructionGetPayload<T>>>>

    /**
     * Create a RecipeInstruction.
     * @param {RecipeInstructionCreateArgs} args - Arguments to create a RecipeInstruction.
     * @example
     * // Create one RecipeInstruction
     * const RecipeInstruction = await prisma.recipeInstruction.create({
     *   data: {
     *     // ... data to create a RecipeInstruction
     *   }
     * })
     * 
    **/
    create<T extends RecipeInstructionCreateArgs>(
      args: SelectSubset<T, RecipeInstructionCreateArgs>
    ): CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>>

    /**
     * Create many RecipeInstructions.
     *     @param {RecipeInstructionCreateManyArgs} args - Arguments to create many RecipeInstructions.
     *     @example
     *     // Create many RecipeInstructions
     *     const recipeInstruction = await prisma.recipeInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeInstructionCreateManyArgs>(
      args?: SelectSubset<T, RecipeInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecipeInstruction.
     * @param {RecipeInstructionDeleteArgs} args - Arguments to delete one RecipeInstruction.
     * @example
     * // Delete one RecipeInstruction
     * const RecipeInstruction = await prisma.recipeInstruction.delete({
     *   where: {
     *     // ... filter to delete one RecipeInstruction
     *   }
     * })
     * 
    **/
    delete<T extends RecipeInstructionDeleteArgs>(
      args: SelectSubset<T, RecipeInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>>

    /**
     * Update one RecipeInstruction.
     * @param {RecipeInstructionUpdateArgs} args - Arguments to update one RecipeInstruction.
     * @example
     * // Update one RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeInstructionUpdateArgs>(
      args: SelectSubset<T, RecipeInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>>

    /**
     * Delete zero or more RecipeInstructions.
     * @param {RecipeInstructionDeleteManyArgs} args - Arguments to filter RecipeInstructions to delete.
     * @example
     * // Delete a few RecipeInstructions
     * const { count } = await prisma.recipeInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeInstructionDeleteManyArgs>(
      args?: SelectSubset<T, RecipeInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeInstructions
     * const recipeInstruction = await prisma.recipeInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeInstructionUpdateManyArgs>(
      args: SelectSubset<T, RecipeInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeInstruction.
     * @param {RecipeInstructionUpsertArgs} args - Arguments to update or create a RecipeInstruction.
     * @example
     * // Update or create a RecipeInstruction
     * const recipeInstruction = await prisma.recipeInstruction.upsert({
     *   create: {
     *     // ... data to create a RecipeInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeInstructionUpsertArgs>(
      args: SelectSubset<T, RecipeInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeInstructionClient<RecipeInstruction>, Prisma__RecipeInstructionClient<RecipeInstructionGetPayload<T>>>

    /**
     * Count the number of RecipeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionCountArgs} args - Arguments to filter RecipeInstructions to count.
     * @example
     * // Count the number of RecipeInstructions
     * const count = await prisma.recipeInstruction.count({
     *   where: {
     *     // ... the filter for the RecipeInstructions we want to count
     *   }
     * })
    **/
    count<T extends RecipeInstructionCountArgs>(
      args?: Subset<T, RecipeInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeInstructionAggregateArgs>(args: Subset<T, RecipeInstructionAggregateArgs>): PrismaPromise<GetRecipeInstructionAggregateType<T>>

    /**
     * Group by RecipeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeInstructionGroupByArgs['orderBy'] }
        : { orderBy?: RecipeInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeInstructionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs = {}>(args?: Subset<T, RecipeArgs>): CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RecipeInstruction findUnique
   */
  export type RecipeInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * Throw an Error if a RecipeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeInstruction to fetch.
     * 
    **/
    where: RecipeInstructionWhereUniqueInput
  }


  /**
   * RecipeInstruction findFirst
   */
  export type RecipeInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * Throw an Error if a RecipeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RecipeInstruction to fetch.
     * 
    **/
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeInstructions.
     * 
    **/
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeInstructions.
     * 
    **/
    distinct?: Enumerable<RecipeInstructionScalarFieldEnum>
  }


  /**
   * RecipeInstruction findMany
   */
  export type RecipeInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * Filter, which RecipeInstructions to fetch.
     * 
    **/
    where?: RecipeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeInstructions.
     * 
    **/
    cursor?: RecipeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeInstructionScalarFieldEnum>
  }


  /**
   * RecipeInstruction create
   */
  export type RecipeInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * The data needed to create a RecipeInstruction.
     * 
    **/
    data: XOR<RecipeInstructionCreateInput, RecipeInstructionUncheckedCreateInput>
  }


  /**
   * RecipeInstruction createMany
   */
  export type RecipeInstructionCreateManyArgs = {
    /**
     * The data used to create many RecipeInstructions.
     * 
    **/
    data: Enumerable<RecipeInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecipeInstruction update
   */
  export type RecipeInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * The data needed to update a RecipeInstruction.
     * 
    **/
    data: XOR<RecipeInstructionUpdateInput, RecipeInstructionUncheckedUpdateInput>
    /**
     * Choose, which RecipeInstruction to update.
     * 
    **/
    where: RecipeInstructionWhereUniqueInput
  }


  /**
   * RecipeInstruction updateMany
   */
  export type RecipeInstructionUpdateManyArgs = {
    /**
     * The data used to update RecipeInstructions.
     * 
    **/
    data: XOR<RecipeInstructionUpdateManyMutationInput, RecipeInstructionUncheckedUpdateManyInput>
    /**
     * Filter which RecipeInstructions to update
     * 
    **/
    where?: RecipeInstructionWhereInput
  }


  /**
   * RecipeInstruction upsert
   */
  export type RecipeInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * The filter to search for the RecipeInstruction to update in case it exists.
     * 
    **/
    where: RecipeInstructionWhereUniqueInput
    /**
     * In case the RecipeInstruction found by the `where` argument doesn't exist, create a new RecipeInstruction with this data.
     * 
    **/
    create: XOR<RecipeInstructionCreateInput, RecipeInstructionUncheckedCreateInput>
    /**
     * In case the RecipeInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeInstructionUpdateInput, RecipeInstructionUncheckedUpdateInput>
  }


  /**
   * RecipeInstruction delete
   */
  export type RecipeInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
    /**
     * Filter which RecipeInstruction to delete.
     * 
    **/
    where: RecipeInstructionWhereUniqueInput
  }


  /**
   * RecipeInstruction deleteMany
   */
  export type RecipeInstructionDeleteManyArgs = {
    /**
     * Filter which RecipeInstructions to delete
     * 
    **/
    where?: RecipeInstructionWhereInput
  }


  /**
   * RecipeInstruction without action
   */
  export type RecipeInstructionArgs = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     * 
    **/
    select?: RecipeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInstructionInclude | null
  }



  /**
   * Model ShoppingList
   */


  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type ShoppingListMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs = {
    /**
     * Filter which ShoppingList to aggregate.
     * 
    **/
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type ShoppingListGroupByArgs = {
    where?: ShoppingListWhereInput
    orderBy?: Enumerable<ShoppingListOrderByWithAggregationInput>
    by: Array<ShoppingListScalarFieldEnum>
    having?: ShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }


  export type ShoppingListGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends ShoppingListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    shoppingListEvents?: boolean | ShoppingListEventFindManyArgs
    shoppingListFoods?: boolean | ShoppingListFoodFindManyArgs
    _count?: boolean | ShoppingListCountOutputTypeArgs
  }

  export type ShoppingListInclude = {
    shoppingListEvents?: boolean | ShoppingListEventFindManyArgs
    shoppingListFoods?: boolean | ShoppingListFoodFindManyArgs
    _count?: boolean | ShoppingListCountOutputTypeArgs
  }

  export type ShoppingListGetPayload<
    S extends boolean | null | undefined | ShoppingListArgs,
    U = keyof S
      > = S extends true
        ? ShoppingList
    : S extends undefined
    ? never
    : S extends ShoppingListArgs | ShoppingListFindManyArgs
    ?'include' extends U
    ? ShoppingList  & {
    [P in TrueKeys<S['include']>]:
        P extends 'shoppingListEvents' ? Array < ShoppingListEventGetPayload<S['include'][P]>>  :
        P extends 'shoppingListFoods' ? Array < ShoppingListFoodGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShoppingListCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'shoppingListEvents' ? Array < ShoppingListEventGetPayload<S['select'][P]>>  :
        P extends 'shoppingListFoods' ? Array < ShoppingListFoodGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShoppingListCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ShoppingList ? ShoppingList[P] : never
  } 
    : ShoppingList
  : ShoppingList


  type ShoppingListCountArgs = Merge<
    Omit<ShoppingListFindManyArgs, 'select' | 'include'> & {
      select?: ShoppingListCountAggregateInputType | true
    }
  >

  export interface ShoppingListDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {ShoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShoppingListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShoppingList'> extends True ? CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListClient<ShoppingList | null >, Prisma__ShoppingListClient<ShoppingListGetPayload<T> | null >>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShoppingListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShoppingList'> extends True ? CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListClient<ShoppingList | null >, Prisma__ShoppingListClient<ShoppingListGetPayload<T> | null >>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShoppingListFindManyArgs>(
      args?: SelectSubset<T, ShoppingListFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShoppingList>>, PrismaPromise<Array<ShoppingListGetPayload<T>>>>

    /**
     * Create a ShoppingList.
     * @param {ShoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
    **/
    create<T extends ShoppingListCreateArgs>(
      args: SelectSubset<T, ShoppingListCreateArgs>
    ): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>>

    /**
     * Create many ShoppingLists.
     *     @param {ShoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     *     @example
     *     // Create many ShoppingLists
     *     const shoppingList = await prisma.shoppingList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingListCreateManyArgs>(
      args?: SelectSubset<T, ShoppingListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingList.
     * @param {ShoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingListDeleteArgs>(
      args: SelectSubset<T, ShoppingListDeleteArgs>
    ): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>>

    /**
     * Update one ShoppingList.
     * @param {ShoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingListUpdateArgs>(
      args: SelectSubset<T, ShoppingListUpdateArgs>
    ): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>>

    /**
     * Delete zero or more ShoppingLists.
     * @param {ShoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingListDeleteManyArgs>(
      args?: SelectSubset<T, ShoppingListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingListUpdateManyArgs>(
      args: SelectSubset<T, ShoppingListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingList.
     * @param {ShoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingListUpsertArgs>(
      args: SelectSubset<T, ShoppingListUpsertArgs>
    ): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList>, Prisma__ShoppingListClient<ShoppingListGetPayload<T>>>

    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListCountArgs>(
      args?: Subset<T, ShoppingListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShoppingListClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shoppingListEvents<T extends ShoppingListEventFindManyArgs = {}>(args?: Subset<T, ShoppingListEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShoppingListEvent>>, PrismaPromise<Array<ShoppingListEventGetPayload<T>>>>;

    shoppingListFoods<T extends ShoppingListFoodFindManyArgs = {}>(args?: Subset<T, ShoppingListFoodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShoppingListFood>>, PrismaPromise<Array<ShoppingListFoodGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShoppingList findUnique
   */
  export type ShoppingListFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * Throw an Error if a ShoppingList can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingList to fetch.
     * 
    **/
    where: ShoppingListWhereUniqueInput
  }


  /**
   * ShoppingList findFirst
   */
  export type ShoppingListFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * Throw an Error if a ShoppingList can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingList to fetch.
     * 
    **/
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     * 
    **/
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     * 
    **/
    distinct?: Enumerable<ShoppingListScalarFieldEnum>
  }


  /**
   * ShoppingList findMany
   */
  export type ShoppingListFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * Filter, which ShoppingLists to fetch.
     * 
    **/
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingLists.
     * 
    **/
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShoppingListScalarFieldEnum>
  }


  /**
   * ShoppingList create
   */
  export type ShoppingListCreateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * The data needed to create a ShoppingList.
     * 
    **/
    data: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
  }


  /**
   * ShoppingList createMany
   */
  export type ShoppingListCreateManyArgs = {
    /**
     * The data used to create many ShoppingLists.
     * 
    **/
    data: Enumerable<ShoppingListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShoppingList update
   */
  export type ShoppingListUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * The data needed to update a ShoppingList.
     * 
    **/
    data: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
    /**
     * Choose, which ShoppingList to update.
     * 
    **/
    where: ShoppingListWhereUniqueInput
  }


  /**
   * ShoppingList updateMany
   */
  export type ShoppingListUpdateManyArgs = {
    /**
     * The data used to update ShoppingLists.
     * 
    **/
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     * 
    **/
    where?: ShoppingListWhereInput
  }


  /**
   * ShoppingList upsert
   */
  export type ShoppingListUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * The filter to search for the ShoppingList to update in case it exists.
     * 
    **/
    where: ShoppingListWhereUniqueInput
    /**
     * In case the ShoppingList found by the `where` argument doesn't exist, create a new ShoppingList with this data.
     * 
    **/
    create: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
    /**
     * In case the ShoppingList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
  }


  /**
   * ShoppingList delete
   */
  export type ShoppingListDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
    /**
     * Filter which ShoppingList to delete.
     * 
    **/
    where: ShoppingListWhereUniqueInput
  }


  /**
   * ShoppingList deleteMany
   */
  export type ShoppingListDeleteManyArgs = {
    /**
     * Filter which ShoppingLists to delete
     * 
    **/
    where?: ShoppingListWhereInput
  }


  /**
   * ShoppingList without action
   */
  export type ShoppingListArgs = {
    /**
     * Select specific fields to fetch from the ShoppingList
     * 
    **/
    select?: ShoppingListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListInclude | null
  }



  /**
   * Model ShoppingListEvent
   */


  export type AggregateShoppingListEvent = {
    _count: ShoppingListEventCountAggregateOutputType | null
    _min: ShoppingListEventMinAggregateOutputType | null
    _max: ShoppingListEventMaxAggregateOutputType | null
  }

  export type ShoppingListEventMinAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    eventId: string | null
    finishedAt: Date | null
  }

  export type ShoppingListEventMaxAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    eventId: string | null
    finishedAt: Date | null
  }

  export type ShoppingListEventCountAggregateOutputType = {
    id: number
    shoppingListId: number
    eventId: number
    finishedAt: number
    _all: number
  }


  export type ShoppingListEventMinAggregateInputType = {
    id?: true
    shoppingListId?: true
    eventId?: true
    finishedAt?: true
  }

  export type ShoppingListEventMaxAggregateInputType = {
    id?: true
    shoppingListId?: true
    eventId?: true
    finishedAt?: true
  }

  export type ShoppingListEventCountAggregateInputType = {
    id?: true
    shoppingListId?: true
    eventId?: true
    finishedAt?: true
    _all?: true
  }

  export type ShoppingListEventAggregateArgs = {
    /**
     * Filter which ShoppingListEvent to aggregate.
     * 
    **/
    where?: ShoppingListEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShoppingListEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListEvents
    **/
    _count?: true | ShoppingListEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListEventMaxAggregateInputType
  }

  export type GetShoppingListEventAggregateType<T extends ShoppingListEventAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListEvent[P]>
      : GetScalarType<T[P], AggregateShoppingListEvent[P]>
  }




  export type ShoppingListEventGroupByArgs = {
    where?: ShoppingListEventWhereInput
    orderBy?: Enumerable<ShoppingListEventOrderByWithAggregationInput>
    by: Array<ShoppingListEventScalarFieldEnum>
    having?: ShoppingListEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListEventCountAggregateInputType | true
    _min?: ShoppingListEventMinAggregateInputType
    _max?: ShoppingListEventMaxAggregateInputType
  }


  export type ShoppingListEventGroupByOutputType = {
    id: string
    shoppingListId: string
    eventId: string
    finishedAt: Date | null
    _count: ShoppingListEventCountAggregateOutputType | null
    _min: ShoppingListEventMinAggregateOutputType | null
    _max: ShoppingListEventMaxAggregateOutputType | null
  }

  type GetShoppingListEventGroupByPayload<T extends ShoppingListEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShoppingListEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListEventGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListEventGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListEventSelect = {
    id?: boolean
    shoppingListId?: boolean
    eventId?: boolean
    finishedAt?: boolean
    shoppingList?: boolean | ShoppingListArgs
    event?: boolean | EventArgs
  }

  export type ShoppingListEventInclude = {
    shoppingList?: boolean | ShoppingListArgs
    event?: boolean | EventArgs
  }

  export type ShoppingListEventGetPayload<
    S extends boolean | null | undefined | ShoppingListEventArgs,
    U = keyof S
      > = S extends true
        ? ShoppingListEvent
    : S extends undefined
    ? never
    : S extends ShoppingListEventArgs | ShoppingListEventFindManyArgs
    ?'include' extends U
    ? ShoppingListEvent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'shoppingList' ? ShoppingListGetPayload<S['include'][P]> :
        P extends 'event' ? EventGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'shoppingList' ? ShoppingListGetPayload<S['select'][P]> :
        P extends 'event' ? EventGetPayload<S['select'][P]> :  P extends keyof ShoppingListEvent ? ShoppingListEvent[P] : never
  } 
    : ShoppingListEvent
  : ShoppingListEvent


  type ShoppingListEventCountArgs = Merge<
    Omit<ShoppingListEventFindManyArgs, 'select' | 'include'> & {
      select?: ShoppingListEventCountAggregateInputType | true
    }
  >

  export interface ShoppingListEventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShoppingListEvent that matches the filter.
     * @param {ShoppingListEventFindUniqueArgs} args - Arguments to find a ShoppingListEvent
     * @example
     * // Get one ShoppingListEvent
     * const shoppingListEvent = await prisma.shoppingListEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingListEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShoppingListEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShoppingListEvent'> extends True ? CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent | null >, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T> | null >>

    /**
     * Find the first ShoppingListEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventFindFirstArgs} args - Arguments to find a ShoppingListEvent
     * @example
     * // Get one ShoppingListEvent
     * const shoppingListEvent = await prisma.shoppingListEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingListEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShoppingListEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShoppingListEvent'> extends True ? CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent | null >, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T> | null >>

    /**
     * Find zero or more ShoppingListEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListEvents
     * const shoppingListEvents = await prisma.shoppingListEvent.findMany()
     * 
     * // Get first 10 ShoppingListEvents
     * const shoppingListEvents = await prisma.shoppingListEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListEventWithIdOnly = await prisma.shoppingListEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShoppingListEventFindManyArgs>(
      args?: SelectSubset<T, ShoppingListEventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShoppingListEvent>>, PrismaPromise<Array<ShoppingListEventGetPayload<T>>>>

    /**
     * Create a ShoppingListEvent.
     * @param {ShoppingListEventCreateArgs} args - Arguments to create a ShoppingListEvent.
     * @example
     * // Create one ShoppingListEvent
     * const ShoppingListEvent = await prisma.shoppingListEvent.create({
     *   data: {
     *     // ... data to create a ShoppingListEvent
     *   }
     * })
     * 
    **/
    create<T extends ShoppingListEventCreateArgs>(
      args: SelectSubset<T, ShoppingListEventCreateArgs>
    ): CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>>

    /**
     * Create many ShoppingListEvents.
     *     @param {ShoppingListEventCreateManyArgs} args - Arguments to create many ShoppingListEvents.
     *     @example
     *     // Create many ShoppingListEvents
     *     const shoppingListEvent = await prisma.shoppingListEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingListEventCreateManyArgs>(
      args?: SelectSubset<T, ShoppingListEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingListEvent.
     * @param {ShoppingListEventDeleteArgs} args - Arguments to delete one ShoppingListEvent.
     * @example
     * // Delete one ShoppingListEvent
     * const ShoppingListEvent = await prisma.shoppingListEvent.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListEvent
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingListEventDeleteArgs>(
      args: SelectSubset<T, ShoppingListEventDeleteArgs>
    ): CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>>

    /**
     * Update one ShoppingListEvent.
     * @param {ShoppingListEventUpdateArgs} args - Arguments to update one ShoppingListEvent.
     * @example
     * // Update one ShoppingListEvent
     * const shoppingListEvent = await prisma.shoppingListEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingListEventUpdateArgs>(
      args: SelectSubset<T, ShoppingListEventUpdateArgs>
    ): CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>>

    /**
     * Delete zero or more ShoppingListEvents.
     * @param {ShoppingListEventDeleteManyArgs} args - Arguments to filter ShoppingListEvents to delete.
     * @example
     * // Delete a few ShoppingListEvents
     * const { count } = await prisma.shoppingListEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingListEventDeleteManyArgs>(
      args?: SelectSubset<T, ShoppingListEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListEvents
     * const shoppingListEvent = await prisma.shoppingListEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingListEventUpdateManyArgs>(
      args: SelectSubset<T, ShoppingListEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingListEvent.
     * @param {ShoppingListEventUpsertArgs} args - Arguments to update or create a ShoppingListEvent.
     * @example
     * // Update or create a ShoppingListEvent
     * const shoppingListEvent = await prisma.shoppingListEvent.upsert({
     *   create: {
     *     // ... data to create a ShoppingListEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListEvent we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingListEventUpsertArgs>(
      args: SelectSubset<T, ShoppingListEventUpsertArgs>
    ): CheckSelect<T, Prisma__ShoppingListEventClient<ShoppingListEvent>, Prisma__ShoppingListEventClient<ShoppingListEventGetPayload<T>>>

    /**
     * Count the number of ShoppingListEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventCountArgs} args - Arguments to filter ShoppingListEvents to count.
     * @example
     * // Count the number of ShoppingListEvents
     * const count = await prisma.shoppingListEvent.count({
     *   where: {
     *     // ... the filter for the ShoppingListEvents we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListEventCountArgs>(
      args?: Subset<T, ShoppingListEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListEventAggregateArgs>(args: Subset<T, ShoppingListEventAggregateArgs>): PrismaPromise<GetShoppingListEventAggregateType<T>>

    /**
     * Group by ShoppingListEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListEventGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShoppingListEventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shoppingList<T extends ShoppingListArgs = {}>(args?: Subset<T, ShoppingListArgs>): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList | null >, Prisma__ShoppingListClient<ShoppingListGetPayload<T> | null >>;

    event<T extends EventArgs = {}>(args?: Subset<T, EventArgs>): CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShoppingListEvent findUnique
   */
  export type ShoppingListEventFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * Throw an Error if a ShoppingListEvent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingListEvent to fetch.
     * 
    **/
    where: ShoppingListEventWhereUniqueInput
  }


  /**
   * ShoppingListEvent findFirst
   */
  export type ShoppingListEventFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * Throw an Error if a ShoppingListEvent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingListEvent to fetch.
     * 
    **/
    where?: ShoppingListEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListEvents.
     * 
    **/
    cursor?: ShoppingListEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListEvents.
     * 
    **/
    distinct?: Enumerable<ShoppingListEventScalarFieldEnum>
  }


  /**
   * ShoppingListEvent findMany
   */
  export type ShoppingListEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * Filter, which ShoppingListEvents to fetch.
     * 
    **/
    where?: ShoppingListEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListEvents.
     * 
    **/
    cursor?: ShoppingListEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShoppingListEventScalarFieldEnum>
  }


  /**
   * ShoppingListEvent create
   */
  export type ShoppingListEventCreateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * The data needed to create a ShoppingListEvent.
     * 
    **/
    data: XOR<ShoppingListEventCreateInput, ShoppingListEventUncheckedCreateInput>
  }


  /**
   * ShoppingListEvent createMany
   */
  export type ShoppingListEventCreateManyArgs = {
    /**
     * The data used to create many ShoppingListEvents.
     * 
    **/
    data: Enumerable<ShoppingListEventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShoppingListEvent update
   */
  export type ShoppingListEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * The data needed to update a ShoppingListEvent.
     * 
    **/
    data: XOR<ShoppingListEventUpdateInput, ShoppingListEventUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListEvent to update.
     * 
    **/
    where: ShoppingListEventWhereUniqueInput
  }


  /**
   * ShoppingListEvent updateMany
   */
  export type ShoppingListEventUpdateManyArgs = {
    /**
     * The data used to update ShoppingListEvents.
     * 
    **/
    data: XOR<ShoppingListEventUpdateManyMutationInput, ShoppingListEventUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListEvents to update
     * 
    **/
    where?: ShoppingListEventWhereInput
  }


  /**
   * ShoppingListEvent upsert
   */
  export type ShoppingListEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * The filter to search for the ShoppingListEvent to update in case it exists.
     * 
    **/
    where: ShoppingListEventWhereUniqueInput
    /**
     * In case the ShoppingListEvent found by the `where` argument doesn't exist, create a new ShoppingListEvent with this data.
     * 
    **/
    create: XOR<ShoppingListEventCreateInput, ShoppingListEventUncheckedCreateInput>
    /**
     * In case the ShoppingListEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShoppingListEventUpdateInput, ShoppingListEventUncheckedUpdateInput>
  }


  /**
   * ShoppingListEvent delete
   */
  export type ShoppingListEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
    /**
     * Filter which ShoppingListEvent to delete.
     * 
    **/
    where: ShoppingListEventWhereUniqueInput
  }


  /**
   * ShoppingListEvent deleteMany
   */
  export type ShoppingListEventDeleteManyArgs = {
    /**
     * Filter which ShoppingListEvents to delete
     * 
    **/
    where?: ShoppingListEventWhereInput
  }


  /**
   * ShoppingListEvent without action
   */
  export type ShoppingListEventArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListEvent
     * 
    **/
    select?: ShoppingListEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListEventInclude | null
  }



  /**
   * Model ShoppingListFood
   */


  export type AggregateShoppingListFood = {
    _count: ShoppingListFoodCountAggregateOutputType | null
    _min: ShoppingListFoodMinAggregateOutputType | null
    _max: ShoppingListFoodMaxAggregateOutputType | null
  }

  export type ShoppingListFoodMinAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    foodId: string | null
    isChecked: boolean | null
  }

  export type ShoppingListFoodMaxAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    foodId: string | null
    isChecked: boolean | null
  }

  export type ShoppingListFoodCountAggregateOutputType = {
    id: number
    shoppingListId: number
    foodId: number
    isChecked: number
    _all: number
  }


  export type ShoppingListFoodMinAggregateInputType = {
    id?: true
    shoppingListId?: true
    foodId?: true
    isChecked?: true
  }

  export type ShoppingListFoodMaxAggregateInputType = {
    id?: true
    shoppingListId?: true
    foodId?: true
    isChecked?: true
  }

  export type ShoppingListFoodCountAggregateInputType = {
    id?: true
    shoppingListId?: true
    foodId?: true
    isChecked?: true
    _all?: true
  }

  export type ShoppingListFoodAggregateArgs = {
    /**
     * Filter which ShoppingListFood to aggregate.
     * 
    **/
    where?: ShoppingListFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShoppingListFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListFoods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListFoods
    **/
    _count?: true | ShoppingListFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListFoodMaxAggregateInputType
  }

  export type GetShoppingListFoodAggregateType<T extends ShoppingListFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListFood[P]>
      : GetScalarType<T[P], AggregateShoppingListFood[P]>
  }




  export type ShoppingListFoodGroupByArgs = {
    where?: ShoppingListFoodWhereInput
    orderBy?: Enumerable<ShoppingListFoodOrderByWithAggregationInput>
    by: Array<ShoppingListFoodScalarFieldEnum>
    having?: ShoppingListFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListFoodCountAggregateInputType | true
    _min?: ShoppingListFoodMinAggregateInputType
    _max?: ShoppingListFoodMaxAggregateInputType
  }


  export type ShoppingListFoodGroupByOutputType = {
    id: string
    shoppingListId: string
    foodId: string
    isChecked: boolean
    _count: ShoppingListFoodCountAggregateOutputType | null
    _min: ShoppingListFoodMinAggregateOutputType | null
    _max: ShoppingListFoodMaxAggregateOutputType | null
  }

  type GetShoppingListFoodGroupByPayload<T extends ShoppingListFoodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShoppingListFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListFoodGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListFoodGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListFoodSelect = {
    id?: boolean
    shoppingListId?: boolean
    foodId?: boolean
    isChecked?: boolean
    shoppingList?: boolean | ShoppingListArgs
    food?: boolean | FoodArgs
  }

  export type ShoppingListFoodInclude = {
    shoppingList?: boolean | ShoppingListArgs
    food?: boolean | FoodArgs
  }

  export type ShoppingListFoodGetPayload<
    S extends boolean | null | undefined | ShoppingListFoodArgs,
    U = keyof S
      > = S extends true
        ? ShoppingListFood
    : S extends undefined
    ? never
    : S extends ShoppingListFoodArgs | ShoppingListFoodFindManyArgs
    ?'include' extends U
    ? ShoppingListFood  & {
    [P in TrueKeys<S['include']>]:
        P extends 'shoppingList' ? ShoppingListGetPayload<S['include'][P]> :
        P extends 'food' ? FoodGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'shoppingList' ? ShoppingListGetPayload<S['select'][P]> :
        P extends 'food' ? FoodGetPayload<S['select'][P]> :  P extends keyof ShoppingListFood ? ShoppingListFood[P] : never
  } 
    : ShoppingListFood
  : ShoppingListFood


  type ShoppingListFoodCountArgs = Merge<
    Omit<ShoppingListFoodFindManyArgs, 'select' | 'include'> & {
      select?: ShoppingListFoodCountAggregateInputType | true
    }
  >

  export interface ShoppingListFoodDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShoppingListFood that matches the filter.
     * @param {ShoppingListFoodFindUniqueArgs} args - Arguments to find a ShoppingListFood
     * @example
     * // Get one ShoppingListFood
     * const shoppingListFood = await prisma.shoppingListFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingListFoodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShoppingListFoodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShoppingListFood'> extends True ? CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood | null >, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T> | null >>

    /**
     * Find the first ShoppingListFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodFindFirstArgs} args - Arguments to find a ShoppingListFood
     * @example
     * // Get one ShoppingListFood
     * const shoppingListFood = await prisma.shoppingListFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingListFoodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShoppingListFoodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShoppingListFood'> extends True ? CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>> : CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood | null >, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T> | null >>

    /**
     * Find zero or more ShoppingListFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListFoods
     * const shoppingListFoods = await prisma.shoppingListFood.findMany()
     * 
     * // Get first 10 ShoppingListFoods
     * const shoppingListFoods = await prisma.shoppingListFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListFoodWithIdOnly = await prisma.shoppingListFood.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShoppingListFoodFindManyArgs>(
      args?: SelectSubset<T, ShoppingListFoodFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShoppingListFood>>, PrismaPromise<Array<ShoppingListFoodGetPayload<T>>>>

    /**
     * Create a ShoppingListFood.
     * @param {ShoppingListFoodCreateArgs} args - Arguments to create a ShoppingListFood.
     * @example
     * // Create one ShoppingListFood
     * const ShoppingListFood = await prisma.shoppingListFood.create({
     *   data: {
     *     // ... data to create a ShoppingListFood
     *   }
     * })
     * 
    **/
    create<T extends ShoppingListFoodCreateArgs>(
      args: SelectSubset<T, ShoppingListFoodCreateArgs>
    ): CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>>

    /**
     * Create many ShoppingListFoods.
     *     @param {ShoppingListFoodCreateManyArgs} args - Arguments to create many ShoppingListFoods.
     *     @example
     *     // Create many ShoppingListFoods
     *     const shoppingListFood = await prisma.shoppingListFood.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingListFoodCreateManyArgs>(
      args?: SelectSubset<T, ShoppingListFoodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingListFood.
     * @param {ShoppingListFoodDeleteArgs} args - Arguments to delete one ShoppingListFood.
     * @example
     * // Delete one ShoppingListFood
     * const ShoppingListFood = await prisma.shoppingListFood.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListFood
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingListFoodDeleteArgs>(
      args: SelectSubset<T, ShoppingListFoodDeleteArgs>
    ): CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>>

    /**
     * Update one ShoppingListFood.
     * @param {ShoppingListFoodUpdateArgs} args - Arguments to update one ShoppingListFood.
     * @example
     * // Update one ShoppingListFood
     * const shoppingListFood = await prisma.shoppingListFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingListFoodUpdateArgs>(
      args: SelectSubset<T, ShoppingListFoodUpdateArgs>
    ): CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>>

    /**
     * Delete zero or more ShoppingListFoods.
     * @param {ShoppingListFoodDeleteManyArgs} args - Arguments to filter ShoppingListFoods to delete.
     * @example
     * // Delete a few ShoppingListFoods
     * const { count } = await prisma.shoppingListFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingListFoodDeleteManyArgs>(
      args?: SelectSubset<T, ShoppingListFoodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListFoods
     * const shoppingListFood = await prisma.shoppingListFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingListFoodUpdateManyArgs>(
      args: SelectSubset<T, ShoppingListFoodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingListFood.
     * @param {ShoppingListFoodUpsertArgs} args - Arguments to update or create a ShoppingListFood.
     * @example
     * // Update or create a ShoppingListFood
     * const shoppingListFood = await prisma.shoppingListFood.upsert({
     *   create: {
     *     // ... data to create a ShoppingListFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListFood we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingListFoodUpsertArgs>(
      args: SelectSubset<T, ShoppingListFoodUpsertArgs>
    ): CheckSelect<T, Prisma__ShoppingListFoodClient<ShoppingListFood>, Prisma__ShoppingListFoodClient<ShoppingListFoodGetPayload<T>>>

    /**
     * Count the number of ShoppingListFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodCountArgs} args - Arguments to filter ShoppingListFoods to count.
     * @example
     * // Count the number of ShoppingListFoods
     * const count = await prisma.shoppingListFood.count({
     *   where: {
     *     // ... the filter for the ShoppingListFoods we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListFoodCountArgs>(
      args?: Subset<T, ShoppingListFoodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListFoodAggregateArgs>(args: Subset<T, ShoppingListFoodAggregateArgs>): PrismaPromise<GetShoppingListFoodAggregateType<T>>

    /**
     * Group by ShoppingListFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListFoodGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListFoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListFoodGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShoppingListFoodClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shoppingList<T extends ShoppingListArgs = {}>(args?: Subset<T, ShoppingListArgs>): CheckSelect<T, Prisma__ShoppingListClient<ShoppingList | null >, Prisma__ShoppingListClient<ShoppingListGetPayload<T> | null >>;

    food<T extends FoodArgs = {}>(args?: Subset<T, FoodArgs>): CheckSelect<T, Prisma__FoodClient<Food | null >, Prisma__FoodClient<FoodGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShoppingListFood findUnique
   */
  export type ShoppingListFoodFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * Throw an Error if a ShoppingListFood can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingListFood to fetch.
     * 
    **/
    where: ShoppingListFoodWhereUniqueInput
  }


  /**
   * ShoppingListFood findFirst
   */
  export type ShoppingListFoodFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * Throw an Error if a ShoppingListFood can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ShoppingListFood to fetch.
     * 
    **/
    where?: ShoppingListFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListFoods.
     * 
    **/
    cursor?: ShoppingListFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListFoods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListFoods.
     * 
    **/
    distinct?: Enumerable<ShoppingListFoodScalarFieldEnum>
  }


  /**
   * ShoppingListFood findMany
   */
  export type ShoppingListFoodFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * Filter, which ShoppingListFoods to fetch.
     * 
    **/
    where?: ShoppingListFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListFoods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShoppingListFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListFoods.
     * 
    **/
    cursor?: ShoppingListFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListFoods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListFoods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShoppingListFoodScalarFieldEnum>
  }


  /**
   * ShoppingListFood create
   */
  export type ShoppingListFoodCreateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * The data needed to create a ShoppingListFood.
     * 
    **/
    data: XOR<ShoppingListFoodCreateInput, ShoppingListFoodUncheckedCreateInput>
  }


  /**
   * ShoppingListFood createMany
   */
  export type ShoppingListFoodCreateManyArgs = {
    /**
     * The data used to create many ShoppingListFoods.
     * 
    **/
    data: Enumerable<ShoppingListFoodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShoppingListFood update
   */
  export type ShoppingListFoodUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * The data needed to update a ShoppingListFood.
     * 
    **/
    data: XOR<ShoppingListFoodUpdateInput, ShoppingListFoodUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListFood to update.
     * 
    **/
    where: ShoppingListFoodWhereUniqueInput
  }


  /**
   * ShoppingListFood updateMany
   */
  export type ShoppingListFoodUpdateManyArgs = {
    /**
     * The data used to update ShoppingListFoods.
     * 
    **/
    data: XOR<ShoppingListFoodUpdateManyMutationInput, ShoppingListFoodUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListFoods to update
     * 
    **/
    where?: ShoppingListFoodWhereInput
  }


  /**
   * ShoppingListFood upsert
   */
  export type ShoppingListFoodUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * The filter to search for the ShoppingListFood to update in case it exists.
     * 
    **/
    where: ShoppingListFoodWhereUniqueInput
    /**
     * In case the ShoppingListFood found by the `where` argument doesn't exist, create a new ShoppingListFood with this data.
     * 
    **/
    create: XOR<ShoppingListFoodCreateInput, ShoppingListFoodUncheckedCreateInput>
    /**
     * In case the ShoppingListFood was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShoppingListFoodUpdateInput, ShoppingListFoodUncheckedUpdateInput>
  }


  /**
   * ShoppingListFood delete
   */
  export type ShoppingListFoodDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
    /**
     * Filter which ShoppingListFood to delete.
     * 
    **/
    where: ShoppingListFoodWhereUniqueInput
  }


  /**
   * ShoppingListFood deleteMany
   */
  export type ShoppingListFoodDeleteManyArgs = {
    /**
     * Filter which ShoppingListFoods to delete
     * 
    **/
    where?: ShoppingListFoodWhereInput
  }


  /**
   * ShoppingListFood without action
   */
  export type ShoppingListFoodArgs = {
    /**
     * Select specific fields to fetch from the ShoppingListFood
     * 
    **/
    select?: ShoppingListFoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShoppingListFoodInclude | null
  }



  /**
   * Model Food
   */


  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: FoodType | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: FoodType | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type FoodAggregateArgs = {
    /**
     * Filter which Food to aggregate.
     * 
    **/
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     * 
    **/
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs = {
    where?: FoodWhereInput
    orderBy?: Enumerable<FoodOrderByWithAggregationInput>
    by: Array<FoodScalarFieldEnum>
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }


  export type FoodGroupByOutputType = {
    id: string
    name: string
    type: FoodType
    _count: FoodCountAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    recipeFoodItems?: boolean | RecipeFoodFindManyArgs
    shoppingListFoodItems?: boolean | ShoppingListFoodFindManyArgs
    _count?: boolean | FoodCountOutputTypeArgs
  }

  export type FoodInclude = {
    recipeFoodItems?: boolean | RecipeFoodFindManyArgs
    shoppingListFoodItems?: boolean | ShoppingListFoodFindManyArgs
    _count?: boolean | FoodCountOutputTypeArgs
  }

  export type FoodGetPayload<
    S extends boolean | null | undefined | FoodArgs,
    U = keyof S
      > = S extends true
        ? Food
    : S extends undefined
    ? never
    : S extends FoodArgs | FoodFindManyArgs
    ?'include' extends U
    ? Food  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipeFoodItems' ? Array < RecipeFoodGetPayload<S['include'][P]>>  :
        P extends 'shoppingListFoodItems' ? Array < ShoppingListFoodGetPayload<S['include'][P]>>  :
        P extends '_count' ? FoodCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipeFoodItems' ? Array < RecipeFoodGetPayload<S['select'][P]>>  :
        P extends 'shoppingListFoodItems' ? Array < ShoppingListFoodGetPayload<S['select'][P]>>  :
        P extends '_count' ? FoodCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Food ? Food[P] : never
  } 
    : Food
  : Food


  type FoodCountArgs = Merge<
    Omit<FoodFindManyArgs, 'select' | 'include'> & {
      select?: FoodCountAggregateInputType | true
    }
  >

  export interface FoodDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FoodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Food'> extends True ? CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>> : CheckSelect<T, Prisma__FoodClient<Food | null >, Prisma__FoodClient<FoodGetPayload<T> | null >>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FoodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Food'> extends True ? CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>> : CheckSelect<T, Prisma__FoodClient<Food | null >, Prisma__FoodClient<FoodGetPayload<T> | null >>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FoodFindManyArgs>(
      args?: SelectSubset<T, FoodFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Food>>, PrismaPromise<Array<FoodGetPayload<T>>>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
    **/
    create<T extends FoodCreateArgs>(
      args: SelectSubset<T, FoodCreateArgs>
    ): CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>>

    /**
     * Create many Foods.
     *     @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     *     @example
     *     // Create many Foods
     *     const food = await prisma.food.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodCreateManyArgs>(
      args?: SelectSubset<T, FoodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
    **/
    delete<T extends FoodDeleteArgs>(
      args: SelectSubset<T, FoodDeleteArgs>
    ): CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodUpdateArgs>(
      args: SelectSubset<T, FoodUpdateArgs>
    ): CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodDeleteManyArgs>(
      args?: SelectSubset<T, FoodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodUpdateManyArgs>(
      args: SelectSubset<T, FoodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
    **/
    upsert<T extends FoodUpsertArgs>(
      args: SelectSubset<T, FoodUpsertArgs>
    ): CheckSelect<T, Prisma__FoodClient<Food>, Prisma__FoodClient<FoodGetPayload<T>>>

    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FoodClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipeFoodItems<T extends RecipeFoodFindManyArgs = {}>(args?: Subset<T, RecipeFoodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RecipeFood>>, PrismaPromise<Array<RecipeFoodGetPayload<T>>>>;

    shoppingListFoodItems<T extends ShoppingListFoodFindManyArgs = {}>(args?: Subset<T, ShoppingListFoodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShoppingListFood>>, PrismaPromise<Array<ShoppingListFoodGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * Throw an Error if a Food can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Food to fetch.
     * 
    **/
    where: FoodWhereUniqueInput
  }


  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * Throw an Error if a Food can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Food to fetch.
     * 
    **/
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     * 
    **/
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     * 
    **/
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     * 
    **/
    distinct?: Enumerable<FoodScalarFieldEnum>
  }


  /**
   * Food findMany
   */
  export type FoodFindManyArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * Filter, which Foods to fetch.
     * 
    **/
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     * 
    **/
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     * 
    **/
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FoodScalarFieldEnum>
  }


  /**
   * Food create
   */
  export type FoodCreateArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * The data needed to create a Food.
     * 
    **/
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }


  /**
   * Food createMany
   */
  export type FoodCreateManyArgs = {
    /**
     * The data used to create many Foods.
     * 
    **/
    data: Enumerable<FoodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Food update
   */
  export type FoodUpdateArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * The data needed to update a Food.
     * 
    **/
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     * 
    **/
    where: FoodWhereUniqueInput
  }


  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs = {
    /**
     * The data used to update Foods.
     * 
    **/
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     * 
    **/
    where?: FoodWhereInput
  }


  /**
   * Food upsert
   */
  export type FoodUpsertArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * The filter to search for the Food to update in case it exists.
     * 
    **/
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     * 
    **/
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }


  /**
   * Food delete
   */
  export type FoodDeleteArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
    /**
     * Filter which Food to delete.
     * 
    **/
    where: FoodWhereUniqueInput
  }


  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs = {
    /**
     * Filter which Foods to delete
     * 
    **/
    where?: FoodWhereInput
  }


  /**
   * Food without action
   */
  export type FoodArgs = {
    /**
     * Select specific fields to fetch from the Food
     * 
    **/
    select?: FoodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FoodInclude | null
  }



  /**
   * Model QuantityUnit
   */


  export type AggregateQuantityUnit = {
    _count: QuantityUnitCountAggregateOutputType | null
    _avg: QuantityUnitAvgAggregateOutputType | null
    _sum: QuantityUnitSumAggregateOutputType | null
    _min: QuantityUnitMinAggregateOutputType | null
    _max: QuantityUnitMaxAggregateOutputType | null
  }

  export type QuantityUnitAvgAggregateOutputType = {
    value: number | null
  }

  export type QuantityUnitSumAggregateOutputType = {
    value: number | null
  }

  export type QuantityUnitMinAggregateOutputType = {
    type: string | null
    standardUnit: StandardUnitType | null
    value: number | null
  }

  export type QuantityUnitMaxAggregateOutputType = {
    type: string | null
    standardUnit: StandardUnitType | null
    value: number | null
  }

  export type QuantityUnitCountAggregateOutputType = {
    type: number
    standardUnit: number
    value: number
    _all: number
  }


  export type QuantityUnitAvgAggregateInputType = {
    value?: true
  }

  export type QuantityUnitSumAggregateInputType = {
    value?: true
  }

  export type QuantityUnitMinAggregateInputType = {
    type?: true
    standardUnit?: true
    value?: true
  }

  export type QuantityUnitMaxAggregateInputType = {
    type?: true
    standardUnit?: true
    value?: true
  }

  export type QuantityUnitCountAggregateInputType = {
    type?: true
    standardUnit?: true
    value?: true
    _all?: true
  }

  export type QuantityUnitAggregateArgs = {
    /**
     * Filter which QuantityUnit to aggregate.
     * 
    **/
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     * 
    **/
    orderBy?: Enumerable<QuantityUnitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuantityUnits
    **/
    _count?: true | QuantityUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuantityUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuantityUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuantityUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuantityUnitMaxAggregateInputType
  }

  export type GetQuantityUnitAggregateType<T extends QuantityUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateQuantityUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuantityUnit[P]>
      : GetScalarType<T[P], AggregateQuantityUnit[P]>
  }




  export type QuantityUnitGroupByArgs = {
    where?: QuantityUnitWhereInput
    orderBy?: Enumerable<QuantityUnitOrderByWithAggregationInput>
    by: Array<QuantityUnitScalarFieldEnum>
    having?: QuantityUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuantityUnitCountAggregateInputType | true
    _avg?: QuantityUnitAvgAggregateInputType
    _sum?: QuantityUnitSumAggregateInputType
    _min?: QuantityUnitMinAggregateInputType
    _max?: QuantityUnitMaxAggregateInputType
  }


  export type QuantityUnitGroupByOutputType = {
    type: string
    standardUnit: StandardUnitType
    value: number
    _count: QuantityUnitCountAggregateOutputType | null
    _avg: QuantityUnitAvgAggregateOutputType | null
    _sum: QuantityUnitSumAggregateOutputType | null
    _min: QuantityUnitMinAggregateOutputType | null
    _max: QuantityUnitMaxAggregateOutputType | null
  }

  type GetQuantityUnitGroupByPayload<T extends QuantityUnitGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuantityUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuantityUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuantityUnitGroupByOutputType[P]>
            : GetScalarType<T[P], QuantityUnitGroupByOutputType[P]>
        }
      >
    >


  export type QuantityUnitSelect = {
    type?: boolean
    standardUnit?: boolean
    value?: boolean
  }

  export type QuantityUnitGetPayload<
    S extends boolean | null | undefined | QuantityUnitArgs,
    U = keyof S
      > = S extends true
        ? QuantityUnit
    : S extends undefined
    ? never
    : S extends QuantityUnitArgs | QuantityUnitFindManyArgs
    ?'include' extends U
    ? QuantityUnit 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof QuantityUnit ? QuantityUnit[P] : never
  } 
    : QuantityUnit
  : QuantityUnit


  type QuantityUnitCountArgs = Merge<
    Omit<QuantityUnitFindManyArgs, 'select' | 'include'> & {
      select?: QuantityUnitCountAggregateInputType | true
    }
  >

  export interface QuantityUnitDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one QuantityUnit that matches the filter.
     * @param {QuantityUnitFindUniqueArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuantityUnitFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuantityUnitFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuantityUnit'> extends True ? CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>> : CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit | null >, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T> | null >>

    /**
     * Find the first QuantityUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitFindFirstArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuantityUnitFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuantityUnitFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuantityUnit'> extends True ? CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>> : CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit | null >, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T> | null >>

    /**
     * Find zero or more QuantityUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuantityUnits
     * const quantityUnits = await prisma.quantityUnit.findMany()
     * 
     * // Get first 10 QuantityUnits
     * const quantityUnits = await prisma.quantityUnit.findMany({ take: 10 })
     * 
     * // Only select the `type`
     * const quantityUnitWithTypeOnly = await prisma.quantityUnit.findMany({ select: { type: true } })
     * 
    **/
    findMany<T extends QuantityUnitFindManyArgs>(
      args?: SelectSubset<T, QuantityUnitFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<QuantityUnit>>, PrismaPromise<Array<QuantityUnitGetPayload<T>>>>

    /**
     * Create a QuantityUnit.
     * @param {QuantityUnitCreateArgs} args - Arguments to create a QuantityUnit.
     * @example
     * // Create one QuantityUnit
     * const QuantityUnit = await prisma.quantityUnit.create({
     *   data: {
     *     // ... data to create a QuantityUnit
     *   }
     * })
     * 
    **/
    create<T extends QuantityUnitCreateArgs>(
      args: SelectSubset<T, QuantityUnitCreateArgs>
    ): CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>>

    /**
     * Create many QuantityUnits.
     *     @param {QuantityUnitCreateManyArgs} args - Arguments to create many QuantityUnits.
     *     @example
     *     // Create many QuantityUnits
     *     const quantityUnit = await prisma.quantityUnit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuantityUnitCreateManyArgs>(
      args?: SelectSubset<T, QuantityUnitCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a QuantityUnit.
     * @param {QuantityUnitDeleteArgs} args - Arguments to delete one QuantityUnit.
     * @example
     * // Delete one QuantityUnit
     * const QuantityUnit = await prisma.quantityUnit.delete({
     *   where: {
     *     // ... filter to delete one QuantityUnit
     *   }
     * })
     * 
    **/
    delete<T extends QuantityUnitDeleteArgs>(
      args: SelectSubset<T, QuantityUnitDeleteArgs>
    ): CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>>

    /**
     * Update one QuantityUnit.
     * @param {QuantityUnitUpdateArgs} args - Arguments to update one QuantityUnit.
     * @example
     * // Update one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuantityUnitUpdateArgs>(
      args: SelectSubset<T, QuantityUnitUpdateArgs>
    ): CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>>

    /**
     * Delete zero or more QuantityUnits.
     * @param {QuantityUnitDeleteManyArgs} args - Arguments to filter QuantityUnits to delete.
     * @example
     * // Delete a few QuantityUnits
     * const { count } = await prisma.quantityUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuantityUnitDeleteManyArgs>(
      args?: SelectSubset<T, QuantityUnitDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuantityUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuantityUnits
     * const quantityUnit = await prisma.quantityUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuantityUnitUpdateManyArgs>(
      args: SelectSubset<T, QuantityUnitUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one QuantityUnit.
     * @param {QuantityUnitUpsertArgs} args - Arguments to update or create a QuantityUnit.
     * @example
     * // Update or create a QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.upsert({
     *   create: {
     *     // ... data to create a QuantityUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuantityUnit we want to update
     *   }
     * })
    **/
    upsert<T extends QuantityUnitUpsertArgs>(
      args: SelectSubset<T, QuantityUnitUpsertArgs>
    ): CheckSelect<T, Prisma__QuantityUnitClient<QuantityUnit>, Prisma__QuantityUnitClient<QuantityUnitGetPayload<T>>>

    /**
     * Count the number of QuantityUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitCountArgs} args - Arguments to filter QuantityUnits to count.
     * @example
     * // Count the number of QuantityUnits
     * const count = await prisma.quantityUnit.count({
     *   where: {
     *     // ... the filter for the QuantityUnits we want to count
     *   }
     * })
    **/
    count<T extends QuantityUnitCountArgs>(
      args?: Subset<T, QuantityUnitCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuantityUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuantityUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuantityUnitAggregateArgs>(args: Subset<T, QuantityUnitAggregateArgs>): PrismaPromise<GetQuantityUnitAggregateType<T>>

    /**
     * Group by QuantityUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuantityUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuantityUnitGroupByArgs['orderBy'] }
        : { orderBy?: QuantityUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuantityUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuantityUnitGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuantityUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuantityUnitClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * QuantityUnit findUnique
   */
  export type QuantityUnitFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * Throw an Error if a QuantityUnit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuantityUnit to fetch.
     * 
    **/
    where: QuantityUnitWhereUniqueInput
  }


  /**
   * QuantityUnit findFirst
   */
  export type QuantityUnitFindFirstArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * Throw an Error if a QuantityUnit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuantityUnit to fetch.
     * 
    **/
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     * 
    **/
    orderBy?: Enumerable<QuantityUnitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuantityUnits.
     * 
    **/
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuantityUnits.
     * 
    **/
    distinct?: Enumerable<QuantityUnitScalarFieldEnum>
  }


  /**
   * QuantityUnit findMany
   */
  export type QuantityUnitFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * Filter, which QuantityUnits to fetch.
     * 
    **/
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     * 
    **/
    orderBy?: Enumerable<QuantityUnitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuantityUnits.
     * 
    **/
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuantityUnitScalarFieldEnum>
  }


  /**
   * QuantityUnit create
   */
  export type QuantityUnitCreateArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * The data needed to create a QuantityUnit.
     * 
    **/
    data: XOR<QuantityUnitCreateInput, QuantityUnitUncheckedCreateInput>
  }


  /**
   * QuantityUnit createMany
   */
  export type QuantityUnitCreateManyArgs = {
    /**
     * The data used to create many QuantityUnits.
     * 
    **/
    data: Enumerable<QuantityUnitCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuantityUnit update
   */
  export type QuantityUnitUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * The data needed to update a QuantityUnit.
     * 
    **/
    data: XOR<QuantityUnitUpdateInput, QuantityUnitUncheckedUpdateInput>
    /**
     * Choose, which QuantityUnit to update.
     * 
    **/
    where: QuantityUnitWhereUniqueInput
  }


  /**
   * QuantityUnit updateMany
   */
  export type QuantityUnitUpdateManyArgs = {
    /**
     * The data used to update QuantityUnits.
     * 
    **/
    data: XOR<QuantityUnitUpdateManyMutationInput, QuantityUnitUncheckedUpdateManyInput>
    /**
     * Filter which QuantityUnits to update
     * 
    **/
    where?: QuantityUnitWhereInput
  }


  /**
   * QuantityUnit upsert
   */
  export type QuantityUnitUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * The filter to search for the QuantityUnit to update in case it exists.
     * 
    **/
    where: QuantityUnitWhereUniqueInput
    /**
     * In case the QuantityUnit found by the `where` argument doesn't exist, create a new QuantityUnit with this data.
     * 
    **/
    create: XOR<QuantityUnitCreateInput, QuantityUnitUncheckedCreateInput>
    /**
     * In case the QuantityUnit was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuantityUnitUpdateInput, QuantityUnitUncheckedUpdateInput>
  }


  /**
   * QuantityUnit delete
   */
  export type QuantityUnitDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
    /**
     * Filter which QuantityUnit to delete.
     * 
    **/
    where: QuantityUnitWhereUniqueInput
  }


  /**
   * QuantityUnit deleteMany
   */
  export type QuantityUnitDeleteManyArgs = {
    /**
     * Filter which QuantityUnits to delete
     * 
    **/
    where?: QuantityUnitWhereInput
  }


  /**
   * QuantityUnit without action
   */
  export type QuantityUnitArgs = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     * 
    **/
    select?: QuantityUnitSelect | null
  }



  /**
   * Model Event
   */


  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    type: EventType | null
    userId: string | null
    date: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    type: EventType | null
    userId: string | null
    date: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    date: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    date?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    date?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    date?: true
    _all?: true
  }

  export type EventAggregateArgs = {
    /**
     * Filter which Event to aggregate.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs = {
    where?: EventWhereInput
    orderBy?: Enumerable<EventOrderByWithAggregationInput>
    by: Array<EventScalarFieldEnum>
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }


  export type EventGroupByOutputType = {
    id: string
    type: EventType
    userId: string
    date: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect = {
    id?: boolean
    type?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserArgs
    recipeEvents?: boolean | RecipeEventFindManyArgs
    shoppingListEvents?: boolean | ShoppingListEventFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventInclude = {
    user?: boolean | UserArgs
    recipeEvents?: boolean | RecipeEventFindManyArgs
    shoppingListEvents?: boolean | ShoppingListEventFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventGetPayload<
    S extends boolean | null | undefined | EventArgs,
    U = keyof S
      > = S extends true
        ? Event
    : S extends undefined
    ? never
    : S extends EventArgs | EventFindManyArgs
    ?'include' extends U
    ? Event  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'recipeEvents' ? Array < RecipeEventGetPayload<S['include'][P]>>  :
        P extends 'shoppingListEvents' ? Array < ShoppingListEventGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'recipeEvents' ? Array < RecipeEventGetPayload<S['select'][P]>>  :
        P extends 'shoppingListEvents' ? Array < ShoppingListEventGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Event ? Event[P] : never
  } 
    : Event
  : Event


  type EventCountArgs = Merge<
    Omit<EventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }
  >

  export interface EventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    recipeEvents<T extends RecipeEventFindManyArgs = {}>(args?: Subset<T, RecipeEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RecipeEvent>>, PrismaPromise<Array<RecipeEventGetPayload<T>>>>;

    shoppingListEvents<T extends ShoppingListEventFindManyArgs = {}>(args?: Subset<T, ShoppingListEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShoppingListEvent>>, PrismaPromise<Array<ShoppingListEventGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Throw an Error if a Event can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Throw an Error if a Event can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event create
   */
  export type EventCreateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to create a Event.
     * 
    **/
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs = {
    /**
     * The data used to create many Events.
     * 
    **/
    data: Enumerable<EventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to update a Event.
     * 
    **/
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs = {
    /**
     * The data used to update Events.
     * 
    **/
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The filter to search for the Event to update in case it exists.
     * 
    **/
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     * 
    **/
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter which Event to delete.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs = {
    /**
     * Filter which Events to delete
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event without action
   */
  export type EventArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstName: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    firstName: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    firstName?: boolean
    events?: boolean | EventFindManyArgs
    userPreferences?: boolean | UserPreferenceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    events?: boolean | EventFindManyArgs
    userPreferences?: boolean | UserPreferenceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'events' ? Array < EventGetPayload<S['include'][P]>>  :
        P extends 'userPreferences' ? Array < UserPreferenceGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'events' ? Array < EventGetPayload<S['select'][P]>>  :
        P extends 'userPreferences' ? Array < UserPreferenceGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    events<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    userPreferences<T extends UserPreferenceFindManyArgs = {}>(args?: Subset<T, UserPreferenceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserPreference>>, PrismaPromise<Array<UserPreferenceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserPreference
   */


  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    value: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    value: number | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: UserPreferenceType | null
    value: number | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: UserPreferenceType | null
    value: number | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    value: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    value?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    value?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs = {
    /**
     * Filter which UserPreference to aggregate.
     * 
    **/
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs = {
    where?: UserPreferenceWhereInput
    orderBy?: Enumerable<UserPreferenceOrderByWithAggregationInput>
    by: Array<UserPreferenceScalarFieldEnum>
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }


  export type UserPreferenceGroupByOutputType = {
    id: string
    userId: string
    type: UserPreferenceType
    value: number
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    user?: boolean | UserArgs
  }

  export type UserPreferenceInclude = {
    user?: boolean | UserArgs
  }

  export type UserPreferenceGetPayload<
    S extends boolean | null | undefined | UserPreferenceArgs,
    U = keyof S
      > = S extends true
        ? UserPreference
    : S extends undefined
    ? never
    : S extends UserPreferenceArgs | UserPreferenceFindManyArgs
    ?'include' extends U
    ? UserPreference  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserPreference ? UserPreference[P] : never
  } 
    : UserPreference
  : UserPreference


  type UserPreferenceCountArgs = Merge<
    Omit<UserPreferenceFindManyArgs, 'select' | 'include'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }
  >

  export interface UserPreferenceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPreferenceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserPreferenceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserPreference'> extends True ? CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>> : CheckSelect<T, Prisma__UserPreferenceClient<UserPreference | null >, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T> | null >>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPreferenceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserPreferenceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserPreference'> extends True ? CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>> : CheckSelect<T, Prisma__UserPreferenceClient<UserPreference | null >, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T> | null >>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserPreferenceFindManyArgs>(
      args?: SelectSubset<T, UserPreferenceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserPreference>>, PrismaPromise<Array<UserPreferenceGetPayload<T>>>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
    **/
    create<T extends UserPreferenceCreateArgs>(
      args: SelectSubset<T, UserPreferenceCreateArgs>
    ): CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>>

    /**
     * Create many UserPreferences.
     *     @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     *     @example
     *     // Create many UserPreferences
     *     const userPreference = await prisma.userPreference.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserPreferenceCreateManyArgs>(
      args?: SelectSubset<T, UserPreferenceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
    **/
    delete<T extends UserPreferenceDeleteArgs>(
      args: SelectSubset<T, UserPreferenceDeleteArgs>
    ): CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPreferenceUpdateArgs>(
      args: SelectSubset<T, UserPreferenceUpdateArgs>
    ): CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPreferenceDeleteManyArgs>(
      args?: SelectSubset<T, UserPreferenceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPreferenceUpdateManyArgs>(
      args: SelectSubset<T, UserPreferenceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
    **/
    upsert<T extends UserPreferenceUpsertArgs>(
      args: SelectSubset<T, UserPreferenceUpsertArgs>
    ): CheckSelect<T, Prisma__UserPreferenceClient<UserPreference>, Prisma__UserPreferenceClient<UserPreferenceGetPayload<T>>>

    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserPreferenceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * Throw an Error if a UserPreference can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserPreference to fetch.
     * 
    **/
    where: UserPreferenceWhereUniqueInput
  }


  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * Throw an Error if a UserPreference can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserPreference to fetch.
     * 
    **/
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     * 
    **/
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     * 
    **/
    distinct?: Enumerable<UserPreferenceScalarFieldEnum>
  }


  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * Filter, which UserPreferences to fetch.
     * 
    **/
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPreferenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     * 
    **/
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserPreferenceScalarFieldEnum>
  }


  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * The data needed to create a UserPreference.
     * 
    **/
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }


  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs = {
    /**
     * The data used to create many UserPreferences.
     * 
    **/
    data: Enumerable<UserPreferenceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * The data needed to update a UserPreference.
     * 
    **/
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     * 
    **/
    where: UserPreferenceWhereUniqueInput
  }


  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs = {
    /**
     * The data used to update UserPreferences.
     * 
    **/
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     * 
    **/
    where?: UserPreferenceWhereInput
  }


  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     * 
    **/
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     * 
    **/
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }


  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
    /**
     * Filter which UserPreference to delete.
     * 
    **/
    where: UserPreferenceWhereUniqueInput
  }


  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs = {
    /**
     * Filter which UserPreferences to delete
     * 
    **/
    where?: UserPreferenceWhereInput
  }


  /**
   * UserPreference without action
   */
  export type UserPreferenceArgs = {
    /**
     * Select specific fields to fetch from the UserPreference
     * 
    **/
    select?: UserPreferenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPreferenceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    preparationDuration: 'preparationDuration',
    cookingDuration: 'cookingDuration'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const RecipeFoodScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    foodId: 'foodId',
    quantity: 'quantity',
    quantityUnit: 'quantityUnit'
  };

  export type RecipeFoodScalarFieldEnum = (typeof RecipeFoodScalarFieldEnum)[keyof typeof RecipeFoodScalarFieldEnum]


  export const RecipeEventScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    eventId: 'eventId',
    finishedAt: 'finishedAt'
  };

  export type RecipeEventScalarFieldEnum = (typeof RecipeEventScalarFieldEnum)[keyof typeof RecipeEventScalarFieldEnum]


  export const RecipeInstructionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    recipeId: 'recipeId',
    duration: 'duration'
  };

  export type RecipeInstructionScalarFieldEnum = (typeof RecipeInstructionScalarFieldEnum)[keyof typeof RecipeInstructionScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const ShoppingListEventScalarFieldEnum: {
    id: 'id',
    shoppingListId: 'shoppingListId',
    eventId: 'eventId',
    finishedAt: 'finishedAt'
  };

  export type ShoppingListEventScalarFieldEnum = (typeof ShoppingListEventScalarFieldEnum)[keyof typeof ShoppingListEventScalarFieldEnum]


  export const ShoppingListFoodScalarFieldEnum: {
    id: 'id',
    shoppingListId: 'shoppingListId',
    foodId: 'foodId',
    isChecked: 'isChecked'
  };

  export type ShoppingListFoodScalarFieldEnum = (typeof ShoppingListFoodScalarFieldEnum)[keyof typeof ShoppingListFoodScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const QuantityUnitScalarFieldEnum: {
    type: 'type',
    standardUnit: 'standardUnit',
    value: 'value'
  };

  export type QuantityUnitScalarFieldEnum = (typeof QuantityUnitScalarFieldEnum)[keyof typeof QuantityUnitScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    date: 'date'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstName: 'firstName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    value: 'value'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: Enumerable<RecipeWhereInput>
    OR?: Enumerable<RecipeWhereInput>
    NOT?: Enumerable<RecipeWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    preparationDuration?: IntFilter | number
    cookingDuration?: IntFilter | number
    recipeEvents?: RecipeEventListRelationFilter
    recipeInstructions?: RecipeInstructionListRelationFilter
    recipeFood?: RecipeFoodListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
    recipeEvents?: RecipeEventOrderByRelationAggregateInput
    recipeInstructions?: RecipeInstructionOrderByRelationAggregateInput
    recipeFood?: RecipeFoodOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = {
    id?: string
  }

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    preparationDuration?: IntWithAggregatesFilter | number
    cookingDuration?: IntWithAggregatesFilter | number
  }

  export type RecipeFoodWhereInput = {
    AND?: Enumerable<RecipeFoodWhereInput>
    OR?: Enumerable<RecipeFoodWhereInput>
    NOT?: Enumerable<RecipeFoodWhereInput>
    id?: StringFilter | string
    recipeId?: StringFilter | string
    foodId?: StringFilter | string
    quantity?: IntFilter | number
    quantityUnit?: StringNullableFilter | string | null
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type RecipeFoodOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    quantityUnit?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type RecipeFoodWhereUniqueInput = {
    id?: string
  }

  export type RecipeFoodOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    quantityUnit?: SortOrder
    _count?: RecipeFoodCountOrderByAggregateInput
    _avg?: RecipeFoodAvgOrderByAggregateInput
    _max?: RecipeFoodMaxOrderByAggregateInput
    _min?: RecipeFoodMinOrderByAggregateInput
    _sum?: RecipeFoodSumOrderByAggregateInput
  }

  export type RecipeFoodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeFoodScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeFoodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeFoodScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    recipeId?: StringWithAggregatesFilter | string
    foodId?: StringWithAggregatesFilter | string
    quantity?: IntWithAggregatesFilter | number
    quantityUnit?: StringNullableWithAggregatesFilter | string | null
  }

  export type RecipeEventWhereInput = {
    AND?: Enumerable<RecipeEventWhereInput>
    OR?: Enumerable<RecipeEventWhereInput>
    NOT?: Enumerable<RecipeEventWhereInput>
    id?: StringFilter | string
    recipeId?: StringFilter | string
    eventId?: StringFilter | string
    finishedAt?: DateTimeNullableFilter | Date | string | null
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type RecipeEventOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type RecipeEventWhereUniqueInput = {
    id?: string
  }

  export type RecipeEventOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
    _count?: RecipeEventCountOrderByAggregateInput
    _max?: RecipeEventMaxOrderByAggregateInput
    _min?: RecipeEventMinOrderByAggregateInput
  }

  export type RecipeEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    recipeId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    finishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type RecipeInstructionWhereInput = {
    AND?: Enumerable<RecipeInstructionWhereInput>
    OR?: Enumerable<RecipeInstructionWhereInput>
    NOT?: Enumerable<RecipeInstructionWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    recipeId?: StringFilter | string
    duration?: IntFilter | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type RecipeInstructionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    recipeId?: SortOrder
    duration?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type RecipeInstructionWhereUniqueInput = {
    id?: string
  }

  export type RecipeInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    recipeId?: SortOrder
    duration?: SortOrder
    _count?: RecipeInstructionCountOrderByAggregateInput
    _avg?: RecipeInstructionAvgOrderByAggregateInput
    _max?: RecipeInstructionMaxOrderByAggregateInput
    _min?: RecipeInstructionMinOrderByAggregateInput
    _sum?: RecipeInstructionSumOrderByAggregateInput
  }

  export type RecipeInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeInstructionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    recipeId?: StringWithAggregatesFilter | string
    duration?: IntWithAggregatesFilter | number
  }

  export type ShoppingListWhereInput = {
    AND?: Enumerable<ShoppingListWhereInput>
    OR?: Enumerable<ShoppingListWhereInput>
    NOT?: Enumerable<ShoppingListWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    shoppingListEvents?: ShoppingListEventListRelationFilter
    shoppingListFoods?: ShoppingListFoodListRelationFilter
  }

  export type ShoppingListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    shoppingListEvents?: ShoppingListEventOrderByRelationAggregateInput
    shoppingListFoods?: ShoppingListFoodOrderByRelationAggregateInput
  }

  export type ShoppingListWhereUniqueInput = {
    id?: string
  }

  export type ShoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ShoppingListCountOrderByAggregateInput
    _max?: ShoppingListMaxOrderByAggregateInput
    _min?: ShoppingListMinOrderByAggregateInput
  }

  export type ShoppingListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShoppingListScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShoppingListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShoppingListScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShoppingListEventWhereInput = {
    AND?: Enumerable<ShoppingListEventWhereInput>
    OR?: Enumerable<ShoppingListEventWhereInput>
    NOT?: Enumerable<ShoppingListEventWhereInput>
    id?: StringFilter | string
    shoppingListId?: StringFilter | string
    eventId?: StringFilter | string
    finishedAt?: DateTimeNullableFilter | Date | string | null
    shoppingList?: XOR<ShoppingListRelationFilter, ShoppingListWhereInput>
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type ShoppingListEventOrderByWithRelationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
    shoppingList?: ShoppingListOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type ShoppingListEventWhereUniqueInput = {
    id?: string
  }

  export type ShoppingListEventOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
    _count?: ShoppingListEventCountOrderByAggregateInput
    _max?: ShoppingListEventMaxOrderByAggregateInput
    _min?: ShoppingListEventMinOrderByAggregateInput
  }

  export type ShoppingListEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShoppingListEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShoppingListEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShoppingListEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    shoppingListId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    finishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ShoppingListFoodWhereInput = {
    AND?: Enumerable<ShoppingListFoodWhereInput>
    OR?: Enumerable<ShoppingListFoodWhereInput>
    NOT?: Enumerable<ShoppingListFoodWhereInput>
    id?: StringFilter | string
    shoppingListId?: StringFilter | string
    foodId?: StringFilter | string
    isChecked?: BoolFilter | boolean
    shoppingList?: XOR<ShoppingListRelationFilter, ShoppingListWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type ShoppingListFoodOrderByWithRelationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    foodId?: SortOrder
    isChecked?: SortOrder
    shoppingList?: ShoppingListOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type ShoppingListFoodWhereUniqueInput = {
    id?: string
  }

  export type ShoppingListFoodOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    foodId?: SortOrder
    isChecked?: SortOrder
    _count?: ShoppingListFoodCountOrderByAggregateInput
    _max?: ShoppingListFoodMaxOrderByAggregateInput
    _min?: ShoppingListFoodMinOrderByAggregateInput
  }

  export type ShoppingListFoodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShoppingListFoodScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShoppingListFoodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShoppingListFoodScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    shoppingListId?: StringWithAggregatesFilter | string
    foodId?: StringWithAggregatesFilter | string
    isChecked?: BoolWithAggregatesFilter | boolean
  }

  export type FoodWhereInput = {
    AND?: Enumerable<FoodWhereInput>
    OR?: Enumerable<FoodWhereInput>
    NOT?: Enumerable<FoodWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    type?: EnumFoodTypeFilter | FoodType
    recipeFoodItems?: RecipeFoodListRelationFilter
    shoppingListFoodItems?: ShoppingListFoodListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    recipeFoodItems?: RecipeFoodOrderByRelationAggregateInput
    shoppingListFoodItems?: ShoppingListFoodOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = {
    id?: string
  }

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FoodScalarWhereWithAggregatesInput>
    OR?: Enumerable<FoodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FoodScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    type?: EnumFoodTypeWithAggregatesFilter | FoodType
  }

  export type QuantityUnitWhereInput = {
    AND?: Enumerable<QuantityUnitWhereInput>
    OR?: Enumerable<QuantityUnitWhereInput>
    NOT?: Enumerable<QuantityUnitWhereInput>
    type?: StringFilter | string
    standardUnit?: EnumStandardUnitTypeFilter | StandardUnitType
    value?: FloatFilter | number
  }

  export type QuantityUnitOrderByWithRelationInput = {
    type?: SortOrder
    standardUnit?: SortOrder
    value?: SortOrder
  }

  export type QuantityUnitWhereUniqueInput = {
    type?: string
  }

  export type QuantityUnitOrderByWithAggregationInput = {
    type?: SortOrder
    standardUnit?: SortOrder
    value?: SortOrder
    _count?: QuantityUnitCountOrderByAggregateInput
    _avg?: QuantityUnitAvgOrderByAggregateInput
    _max?: QuantityUnitMaxOrderByAggregateInput
    _min?: QuantityUnitMinOrderByAggregateInput
    _sum?: QuantityUnitSumOrderByAggregateInput
  }

  export type QuantityUnitScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuantityUnitScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuantityUnitScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuantityUnitScalarWhereWithAggregatesInput>
    type?: StringWithAggregatesFilter | string
    standardUnit?: EnumStandardUnitTypeWithAggregatesFilter | StandardUnitType
    value?: FloatWithAggregatesFilter | number
  }

  export type EventWhereInput = {
    AND?: Enumerable<EventWhereInput>
    OR?: Enumerable<EventWhereInput>
    NOT?: Enumerable<EventWhereInput>
    id?: StringFilter | string
    type?: EnumEventTypeFilter | EventType
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipeEvents?: RecipeEventListRelationFilter
    shoppingListEvents?: ShoppingListEventListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
    recipeEvents?: RecipeEventOrderByRelationAggregateInput
    shoppingListEvents?: ShoppingListEventOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = {
    id?: string
  }

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumEventTypeWithAggregatesFilter | EventType
    userId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    firstName?: StringFilter | string
    events?: EventListRelationFilter
    userPreferences?: UserPreferenceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    events?: EventOrderByRelationAggregateInput
    userPreferences?: UserPreferenceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
  }

  export type UserPreferenceWhereInput = {
    AND?: Enumerable<UserPreferenceWhereInput>
    OR?: Enumerable<UserPreferenceWhereInput>
    NOT?: Enumerable<UserPreferenceWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: EnumUserPreferenceTypeFilter | UserPreferenceType
    value?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = {
    id?: string
  }

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserPreferenceScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserPreferenceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserPreferenceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: EnumUserPreferenceTypeWithAggregatesFilter | UserPreferenceType
    value?: IntWithAggregatesFilter | number
  }

  export type RecipeCreateInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventCreateNestedManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUpdateManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUncheckedUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedUpdateManyWithoutRecipeInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodCreateInput = {
    id?: string
    quantity: number
    quantityUnit?: string | null
    recipe: RecipeCreateNestedOneWithoutRecipeFoodInput
    food: FoodCreateNestedOneWithoutRecipeFoodItemsInput
  }

  export type RecipeFoodUncheckedCreateInput = {
    id?: string
    recipeId: string
    foodId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type RecipeFoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutRecipeFoodInput
    food?: FoodUpdateOneRequiredWithoutRecipeFoodItemsInput
  }

  export type RecipeFoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeFoodCreateManyInput = {
    id?: string
    recipeId: string
    foodId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type RecipeFoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeFoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeEventCreateInput = {
    id?: string
    finishedAt?: Date | string | null
    recipe: RecipeCreateNestedOneWithoutRecipeEventsInput
    event: EventCreateNestedOneWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedCreateInput = {
    id?: string
    recipeId: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type RecipeEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe?: RecipeUpdateOneRequiredWithoutRecipeEventsInput
    event?: EventUpdateOneRequiredWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeEventCreateManyInput = {
    id?: string
    recipeId: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type RecipeEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeInstructionCreateInput = {
    id?: string
    description: string
    duration: number
    recipe: RecipeCreateNestedOneWithoutRecipeInstructionsInput
  }

  export type RecipeInstructionUncheckedCreateInput = {
    id?: string
    description: string
    recipeId: string
    duration: number
  }

  export type RecipeInstructionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutRecipeInstructionsInput
  }

  export type RecipeInstructionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionCreateManyInput = {
    id?: string
    description: string
    recipeId: string
    duration: number
  }

  export type RecipeInstructionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ShoppingListCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListEvents?: ShoppingListEventCreateNestedManyWithoutShoppingListInput
    shoppingListFoods?: ShoppingListFoodCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListEvents?: ShoppingListEventUncheckedCreateNestedManyWithoutShoppingListInput
    shoppingListFoods?: ShoppingListFoodUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListEvents?: ShoppingListEventUpdateManyWithoutShoppingListInput
    shoppingListFoods?: ShoppingListFoodUpdateManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListEvents?: ShoppingListEventUncheckedUpdateManyWithoutShoppingListInput
    shoppingListFoods?: ShoppingListFoodUncheckedUpdateManyWithoutShoppingListInput
  }

  export type ShoppingListCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ShoppingListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListEventCreateInput = {
    id?: string
    finishedAt?: Date | string | null
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListEventsInput
    event: EventCreateNestedOneWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedCreateInput = {
    id?: string
    shoppingListId: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListEventsInput
    event?: EventUpdateOneRequiredWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListEventCreateManyInput = {
    id?: string
    shoppingListId: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListFoodCreateInput = {
    id?: string
    isChecked: boolean
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListFoodsInput
    food: FoodCreateNestedOneWithoutShoppingListFoodItemsInput
  }

  export type ShoppingListFoodUncheckedCreateInput = {
    id?: string
    shoppingListId: string
    foodId: string
    isChecked: boolean
  }

  export type ShoppingListFoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListFoodsInput
    food?: FoodUpdateOneRequiredWithoutShoppingListFoodItemsInput
  }

  export type ShoppingListFoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListFoodCreateManyInput = {
    id?: string
    shoppingListId: string
    foodId: string
    isChecked: boolean
  }

  export type ShoppingListFoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListFoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FoodCreateInput = {
    id?: string
    name: string
    type: FoodType
    recipeFoodItems?: RecipeFoodCreateNestedManyWithoutFoodInput
    shoppingListFoodItems?: ShoppingListFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    name: string
    type: FoodType
    recipeFoodItems?: RecipeFoodUncheckedCreateNestedManyWithoutFoodInput
    shoppingListFoodItems?: ShoppingListFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    recipeFoodItems?: RecipeFoodUpdateManyWithoutFoodInput
    shoppingListFoodItems?: ShoppingListFoodUpdateManyWithoutFoodInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    recipeFoodItems?: RecipeFoodUncheckedUpdateManyWithoutFoodInput
    shoppingListFoodItems?: ShoppingListFoodUncheckedUpdateManyWithoutFoodInput
  }

  export type FoodCreateManyInput = {
    id?: string
    name: string
    type: FoodType
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
  }

  export type QuantityUnitCreateInput = {
    type: string
    standardUnit: StandardUnitType
    value: number
  }

  export type QuantityUnitUncheckedCreateInput = {
    type: string
    standardUnit: StandardUnitType
    value: number
  }

  export type QuantityUnitUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    standardUnit?: EnumStandardUnitTypeFieldUpdateOperationsInput | StandardUnitType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type QuantityUnitUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    standardUnit?: EnumStandardUnitTypeFieldUpdateOperationsInput | StandardUnitType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type QuantityUnitCreateManyInput = {
    type: string
    standardUnit: StandardUnitType
    value: number
  }

  export type QuantityUnitUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    standardUnit?: EnumStandardUnitTypeFieldUpdateOperationsInput | StandardUnitType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type QuantityUnitUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    standardUnit?: EnumStandardUnitTypeFieldUpdateOperationsInput | StandardUnitType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    id?: string
    type: EventType
    date: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    recipeEvents?: RecipeEventCreateNestedManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    type: EventType
    userId: string
    date: Date | string
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsInput
    recipeEvents?: RecipeEventUpdateManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUncheckedUpdateManyWithoutEventInput
  }

  export type EventCreateManyInput = {
    id?: string
    type: EventType
    userId: string
    date: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    firstName: string
    events?: EventCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    firstName: string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutUserInput
    userPreferences?: UserPreferenceUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutUserInput
    userPreferences?: UserPreferenceUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    firstName: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    type: UserPreferenceType
    value: number
    user: UserCreateNestedOneWithoutUserPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    type: UserPreferenceType
    value: number
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserPreferencesInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    userId: string
    type: UserPreferenceType
    value: number
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type RecipeEventListRelationFilter = {
    every?: RecipeEventWhereInput
    some?: RecipeEventWhereInput
    none?: RecipeEventWhereInput
  }

  export type RecipeInstructionListRelationFilter = {
    every?: RecipeInstructionWhereInput
    some?: RecipeInstructionWhereInput
    none?: RecipeInstructionWhereInput
  }

  export type RecipeFoodListRelationFilter = {
    every?: RecipeFoodWhereInput
    some?: RecipeFoodWhereInput
    none?: RecipeFoodWhereInput
  }

  export type RecipeEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    preparationDuration?: SortOrder
    cookingDuration?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type FoodRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type RecipeFoodCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    quantityUnit?: SortOrder
  }

  export type RecipeFoodAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RecipeFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    quantityUnit?: SortOrder
  }

  export type RecipeFoodMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    quantityUnit?: SortOrder
  }

  export type RecipeFoodSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type RecipeEventCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type RecipeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type RecipeEventMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type RecipeInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    recipeId?: SortOrder
    duration?: SortOrder
  }

  export type RecipeInstructionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type RecipeInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    recipeId?: SortOrder
    duration?: SortOrder
  }

  export type RecipeInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    recipeId?: SortOrder
    duration?: SortOrder
  }

  export type RecipeInstructionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ShoppingListEventListRelationFilter = {
    every?: ShoppingListEventWhereInput
    some?: ShoppingListEventWhereInput
    none?: ShoppingListEventWhereInput
  }

  export type ShoppingListFoodListRelationFilter = {
    every?: ShoppingListFoodWhereInput
    some?: ShoppingListFoodWhereInput
    none?: ShoppingListFoodWhereInput
  }

  export type ShoppingListEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ShoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ShoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ShoppingListRelationFilter = {
    is?: ShoppingListWhereInput
    isNot?: ShoppingListWhereInput
  }

  export type ShoppingListEventCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type ShoppingListEventMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type ShoppingListEventMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    eventId?: SortOrder
    finishedAt?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ShoppingListFoodCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    foodId?: SortOrder
    isChecked?: SortOrder
  }

  export type ShoppingListFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    foodId?: SortOrder
    isChecked?: SortOrder
  }

  export type ShoppingListFoodMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    foodId?: SortOrder
    isChecked?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumFoodTypeFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeFilter | FoodType
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type EnumFoodTypeWithAggregatesFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeWithAggregatesFilter | FoodType
    _count?: NestedIntFilter
    _min?: NestedEnumFoodTypeFilter
    _max?: NestedEnumFoodTypeFilter
  }

  export type EnumStandardUnitTypeFilter = {
    equals?: StandardUnitType
    in?: Enumerable<StandardUnitType>
    notIn?: Enumerable<StandardUnitType>
    not?: NestedEnumStandardUnitTypeFilter | StandardUnitType
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type QuantityUnitCountOrderByAggregateInput = {
    type?: SortOrder
    standardUnit?: SortOrder
    value?: SortOrder
  }

  export type QuantityUnitAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type QuantityUnitMaxOrderByAggregateInput = {
    type?: SortOrder
    standardUnit?: SortOrder
    value?: SortOrder
  }

  export type QuantityUnitMinOrderByAggregateInput = {
    type?: SortOrder
    standardUnit?: SortOrder
    value?: SortOrder
  }

  export type QuantityUnitSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumStandardUnitTypeWithAggregatesFilter = {
    equals?: StandardUnitType
    in?: Enumerable<StandardUnitType>
    notIn?: Enumerable<StandardUnitType>
    not?: NestedEnumStandardUnitTypeWithAggregatesFilter | StandardUnitType
    _count?: NestedIntFilter
    _min?: NestedEnumStandardUnitTypeFilter
    _max?: NestedEnumStandardUnitTypeFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EnumEventTypeFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeFilter | EventType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeWithAggregatesFilter | EventType
    _count?: NestedIntFilter
    _min?: NestedEnumEventTypeFilter
    _max?: NestedEnumEventTypeFilter
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type UserPreferenceListRelationFilter = {
    every?: UserPreferenceWhereInput
    some?: UserPreferenceWhereInput
    none?: UserPreferenceWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
  }

  export type EnumUserPreferenceTypeFilter = {
    equals?: UserPreferenceType
    in?: Enumerable<UserPreferenceType>
    notIn?: Enumerable<UserPreferenceType>
    not?: NestedEnumUserPreferenceTypeFilter | UserPreferenceType
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumUserPreferenceTypeWithAggregatesFilter = {
    equals?: UserPreferenceType
    in?: Enumerable<UserPreferenceType>
    notIn?: Enumerable<UserPreferenceType>
    not?: NestedEnumUserPreferenceTypeWithAggregatesFilter | UserPreferenceType
    _count?: NestedIntFilter
    _min?: NestedEnumUserPreferenceTypeFilter
    _max?: NestedEnumUserPreferenceTypeFilter
  }

  export type RecipeEventCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutRecipeInput>, Enumerable<RecipeEventUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeEventCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeEventWhereUniqueInput>
  }

  export type RecipeInstructionCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeInstructionCreateWithoutRecipeInput>, Enumerable<RecipeInstructionUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeInstructionCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeInstructionCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeInstructionWhereUniqueInput>
  }

  export type RecipeFoodCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutRecipeInput>, Enumerable<RecipeFoodUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeFoodCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
  }

  export type RecipeEventUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutRecipeInput>, Enumerable<RecipeEventUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeEventCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeEventWhereUniqueInput>
  }

  export type RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeInstructionCreateWithoutRecipeInput>, Enumerable<RecipeInstructionUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeInstructionCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeInstructionCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeInstructionWhereUniqueInput>
  }

  export type RecipeFoodUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutRecipeInput>, Enumerable<RecipeFoodUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeFoodCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeEventUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutRecipeInput>, Enumerable<RecipeEventUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeEventUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeEventCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeEventWhereUniqueInput>
    disconnect?: Enumerable<RecipeEventWhereUniqueInput>
    delete?: Enumerable<RecipeEventWhereUniqueInput>
    connect?: Enumerable<RecipeEventWhereUniqueInput>
    update?: Enumerable<RecipeEventUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeEventUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeEventScalarWhereInput>
  }

  export type RecipeInstructionUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeInstructionCreateWithoutRecipeInput>, Enumerable<RecipeInstructionUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeInstructionCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeInstructionCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeInstructionWhereUniqueInput>
    disconnect?: Enumerable<RecipeInstructionWhereUniqueInput>
    delete?: Enumerable<RecipeInstructionWhereUniqueInput>
    connect?: Enumerable<RecipeInstructionWhereUniqueInput>
    update?: Enumerable<RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeInstructionUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeInstructionScalarWhereInput>
  }

  export type RecipeFoodUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutRecipeInput>, Enumerable<RecipeFoodUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeFoodUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeFoodCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeFoodWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodWhereUniqueInput>
    delete?: Enumerable<RecipeFoodWhereUniqueInput>
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
    update?: Enumerable<RecipeFoodUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeFoodUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeFoodScalarWhereInput>
  }

  export type RecipeEventUncheckedUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutRecipeInput>, Enumerable<RecipeEventUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeEventUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeEventCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeEventWhereUniqueInput>
    disconnect?: Enumerable<RecipeEventWhereUniqueInput>
    delete?: Enumerable<RecipeEventWhereUniqueInput>
    connect?: Enumerable<RecipeEventWhereUniqueInput>
    update?: Enumerable<RecipeEventUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeEventUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeEventScalarWhereInput>
  }

  export type RecipeInstructionUncheckedUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeInstructionCreateWithoutRecipeInput>, Enumerable<RecipeInstructionUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeInstructionCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeInstructionCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeInstructionWhereUniqueInput>
    disconnect?: Enumerable<RecipeInstructionWhereUniqueInput>
    delete?: Enumerable<RecipeInstructionWhereUniqueInput>
    connect?: Enumerable<RecipeInstructionWhereUniqueInput>
    update?: Enumerable<RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeInstructionUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeInstructionScalarWhereInput>
  }

  export type RecipeFoodUncheckedUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutRecipeInput>, Enumerable<RecipeFoodUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeFoodUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeFoodCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeFoodWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodWhereUniqueInput>
    delete?: Enumerable<RecipeFoodWhereUniqueInput>
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
    update?: Enumerable<RecipeFoodUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeFoodUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeFoodScalarWhereInput>
  }

  export type RecipeCreateNestedOneWithoutRecipeFoodInput = {
    create?: XOR<RecipeCreateWithoutRecipeFoodInput, RecipeUncheckedCreateWithoutRecipeFoodInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeFoodInput
    connect?: RecipeWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutRecipeFoodItemsInput = {
    create?: XOR<FoodCreateWithoutRecipeFoodItemsInput, FoodUncheckedCreateWithoutRecipeFoodItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutRecipeFoodItemsInput
    connect?: FoodWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipeUpdateOneRequiredWithoutRecipeFoodInput = {
    create?: XOR<RecipeCreateWithoutRecipeFoodInput, RecipeUncheckedCreateWithoutRecipeFoodInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeFoodInput
    upsert?: RecipeUpsertWithoutRecipeFoodInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutRecipeFoodInput, RecipeUncheckedUpdateWithoutRecipeFoodInput>
  }

  export type FoodUpdateOneRequiredWithoutRecipeFoodItemsInput = {
    create?: XOR<FoodCreateWithoutRecipeFoodItemsInput, FoodUncheckedCreateWithoutRecipeFoodItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutRecipeFoodItemsInput
    upsert?: FoodUpsertWithoutRecipeFoodItemsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutRecipeFoodItemsInput, FoodUncheckedUpdateWithoutRecipeFoodItemsInput>
  }

  export type RecipeCreateNestedOneWithoutRecipeEventsInput = {
    create?: XOR<RecipeCreateWithoutRecipeEventsInput, RecipeUncheckedCreateWithoutRecipeEventsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeEventsInput
    connect?: RecipeWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutRecipeEventsInput = {
    create?: XOR<EventCreateWithoutRecipeEventsInput, EventUncheckedCreateWithoutRecipeEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRecipeEventsInput
    connect?: EventWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RecipeUpdateOneRequiredWithoutRecipeEventsInput = {
    create?: XOR<RecipeCreateWithoutRecipeEventsInput, RecipeUncheckedCreateWithoutRecipeEventsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeEventsInput
    upsert?: RecipeUpsertWithoutRecipeEventsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutRecipeEventsInput, RecipeUncheckedUpdateWithoutRecipeEventsInput>
  }

  export type EventUpdateOneRequiredWithoutRecipeEventsInput = {
    create?: XOR<EventCreateWithoutRecipeEventsInput, EventUncheckedCreateWithoutRecipeEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRecipeEventsInput
    upsert?: EventUpsertWithoutRecipeEventsInput
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutRecipeEventsInput, EventUncheckedUpdateWithoutRecipeEventsInput>
  }

  export type RecipeCreateNestedOneWithoutRecipeInstructionsInput = {
    create?: XOR<RecipeCreateWithoutRecipeInstructionsInput, RecipeUncheckedCreateWithoutRecipeInstructionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeInstructionsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutRecipeInstructionsInput = {
    create?: XOR<RecipeCreateWithoutRecipeInstructionsInput, RecipeUncheckedCreateWithoutRecipeInstructionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeInstructionsInput
    upsert?: RecipeUpsertWithoutRecipeInstructionsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutRecipeInstructionsInput, RecipeUncheckedUpdateWithoutRecipeInstructionsInput>
  }

  export type ShoppingListEventCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutShoppingListInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutShoppingListInput>
    createMany?: ShoppingListEventCreateManyShoppingListInputEnvelope
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
  }

  export type ShoppingListFoodCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutShoppingListInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutShoppingListInput>
    createMany?: ShoppingListFoodCreateManyShoppingListInputEnvelope
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
  }

  export type ShoppingListEventUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutShoppingListInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutShoppingListInput>
    createMany?: ShoppingListEventCreateManyShoppingListInputEnvelope
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
  }

  export type ShoppingListFoodUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutShoppingListInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutShoppingListInput>
    createMany?: ShoppingListFoodCreateManyShoppingListInputEnvelope
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShoppingListEventUpdateManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutShoppingListInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutShoppingListInput>
    upsert?: Enumerable<ShoppingListEventUpsertWithWhereUniqueWithoutShoppingListInput>
    createMany?: ShoppingListEventCreateManyShoppingListInputEnvelope
    set?: Enumerable<ShoppingListEventWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListEventWhereUniqueInput>
    delete?: Enumerable<ShoppingListEventWhereUniqueInput>
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
    update?: Enumerable<ShoppingListEventUpdateWithWhereUniqueWithoutShoppingListInput>
    updateMany?: Enumerable<ShoppingListEventUpdateManyWithWhereWithoutShoppingListInput>
    deleteMany?: Enumerable<ShoppingListEventScalarWhereInput>
  }

  export type ShoppingListFoodUpdateManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutShoppingListInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutShoppingListInput>
    upsert?: Enumerable<ShoppingListFoodUpsertWithWhereUniqueWithoutShoppingListInput>
    createMany?: ShoppingListFoodCreateManyShoppingListInputEnvelope
    set?: Enumerable<ShoppingListFoodWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    delete?: Enumerable<ShoppingListFoodWhereUniqueInput>
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    update?: Enumerable<ShoppingListFoodUpdateWithWhereUniqueWithoutShoppingListInput>
    updateMany?: Enumerable<ShoppingListFoodUpdateManyWithWhereWithoutShoppingListInput>
    deleteMany?: Enumerable<ShoppingListFoodScalarWhereInput>
  }

  export type ShoppingListEventUncheckedUpdateManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutShoppingListInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutShoppingListInput>
    upsert?: Enumerable<ShoppingListEventUpsertWithWhereUniqueWithoutShoppingListInput>
    createMany?: ShoppingListEventCreateManyShoppingListInputEnvelope
    set?: Enumerable<ShoppingListEventWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListEventWhereUniqueInput>
    delete?: Enumerable<ShoppingListEventWhereUniqueInput>
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
    update?: Enumerable<ShoppingListEventUpdateWithWhereUniqueWithoutShoppingListInput>
    updateMany?: Enumerable<ShoppingListEventUpdateManyWithWhereWithoutShoppingListInput>
    deleteMany?: Enumerable<ShoppingListEventScalarWhereInput>
  }

  export type ShoppingListFoodUncheckedUpdateManyWithoutShoppingListInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutShoppingListInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutShoppingListInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutShoppingListInput>
    upsert?: Enumerable<ShoppingListFoodUpsertWithWhereUniqueWithoutShoppingListInput>
    createMany?: ShoppingListFoodCreateManyShoppingListInputEnvelope
    set?: Enumerable<ShoppingListFoodWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    delete?: Enumerable<ShoppingListFoodWhereUniqueInput>
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    update?: Enumerable<ShoppingListFoodUpdateWithWhereUniqueWithoutShoppingListInput>
    updateMany?: Enumerable<ShoppingListFoodUpdateManyWithWhereWithoutShoppingListInput>
    deleteMany?: Enumerable<ShoppingListFoodScalarWhereInput>
  }

  export type ShoppingListCreateNestedOneWithoutShoppingListEventsInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListEventsInput, ShoppingListUncheckedCreateWithoutShoppingListEventsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListEventsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutShoppingListEventsInput = {
    create?: XOR<EventCreateWithoutShoppingListEventsInput, EventUncheckedCreateWithoutShoppingListEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutShoppingListEventsInput
    connect?: EventWhereUniqueInput
  }

  export type ShoppingListUpdateOneRequiredWithoutShoppingListEventsInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListEventsInput, ShoppingListUncheckedCreateWithoutShoppingListEventsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListEventsInput
    upsert?: ShoppingListUpsertWithoutShoppingListEventsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<ShoppingListUpdateWithoutShoppingListEventsInput, ShoppingListUncheckedUpdateWithoutShoppingListEventsInput>
  }

  export type EventUpdateOneRequiredWithoutShoppingListEventsInput = {
    create?: XOR<EventCreateWithoutShoppingListEventsInput, EventUncheckedCreateWithoutShoppingListEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutShoppingListEventsInput
    upsert?: EventUpsertWithoutShoppingListEventsInput
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutShoppingListEventsInput, EventUncheckedUpdateWithoutShoppingListEventsInput>
  }

  export type ShoppingListCreateNestedOneWithoutShoppingListFoodsInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListFoodsInput, ShoppingListUncheckedCreateWithoutShoppingListFoodsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListFoodsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutShoppingListFoodItemsInput = {
    create?: XOR<FoodCreateWithoutShoppingListFoodItemsInput, FoodUncheckedCreateWithoutShoppingListFoodItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutShoppingListFoodItemsInput
    connect?: FoodWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ShoppingListUpdateOneRequiredWithoutShoppingListFoodsInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListFoodsInput, ShoppingListUncheckedCreateWithoutShoppingListFoodsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListFoodsInput
    upsert?: ShoppingListUpsertWithoutShoppingListFoodsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<ShoppingListUpdateWithoutShoppingListFoodsInput, ShoppingListUncheckedUpdateWithoutShoppingListFoodsInput>
  }

  export type FoodUpdateOneRequiredWithoutShoppingListFoodItemsInput = {
    create?: XOR<FoodCreateWithoutShoppingListFoodItemsInput, FoodUncheckedCreateWithoutShoppingListFoodItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutShoppingListFoodItemsInput
    upsert?: FoodUpsertWithoutShoppingListFoodItemsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutShoppingListFoodItemsInput, FoodUncheckedUpdateWithoutShoppingListFoodItemsInput>
  }

  export type RecipeFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutFoodInput>, Enumerable<RecipeFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutFoodInput>
    createMany?: RecipeFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
  }

  export type ShoppingListFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutFoodInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutFoodInput>
    createMany?: ShoppingListFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
  }

  export type RecipeFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutFoodInput>, Enumerable<RecipeFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutFoodInput>
    createMany?: RecipeFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
  }

  export type ShoppingListFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutFoodInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutFoodInput>
    createMany?: ShoppingListFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
  }

  export type EnumFoodTypeFieldUpdateOperationsInput = {
    set?: FoodType
  }

  export type RecipeFoodUpdateManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutFoodInput>, Enumerable<RecipeFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<RecipeFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: RecipeFoodCreateManyFoodInputEnvelope
    set?: Enumerable<RecipeFoodWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodWhereUniqueInput>
    delete?: Enumerable<RecipeFoodWhereUniqueInput>
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
    update?: Enumerable<RecipeFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<RecipeFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<RecipeFoodScalarWhereInput>
  }

  export type ShoppingListFoodUpdateManyWithoutFoodInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutFoodInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<ShoppingListFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: ShoppingListFoodCreateManyFoodInputEnvelope
    set?: Enumerable<ShoppingListFoodWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    delete?: Enumerable<ShoppingListFoodWhereUniqueInput>
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    update?: Enumerable<ShoppingListFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<ShoppingListFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<ShoppingListFoodScalarWhereInput>
  }

  export type RecipeFoodUncheckedUpdateManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodCreateWithoutFoodInput>, Enumerable<RecipeFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<RecipeFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: RecipeFoodCreateManyFoodInputEnvelope
    set?: Enumerable<RecipeFoodWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodWhereUniqueInput>
    delete?: Enumerable<RecipeFoodWhereUniqueInput>
    connect?: Enumerable<RecipeFoodWhereUniqueInput>
    update?: Enumerable<RecipeFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<RecipeFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<RecipeFoodScalarWhereInput>
  }

  export type ShoppingListFoodUncheckedUpdateManyWithoutFoodInput = {
    create?: XOR<Enumerable<ShoppingListFoodCreateWithoutFoodInput>, Enumerable<ShoppingListFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ShoppingListFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<ShoppingListFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: ShoppingListFoodCreateManyFoodInputEnvelope
    set?: Enumerable<ShoppingListFoodWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    delete?: Enumerable<ShoppingListFoodWhereUniqueInput>
    connect?: Enumerable<ShoppingListFoodWhereUniqueInput>
    update?: Enumerable<ShoppingListFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<ShoppingListFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<ShoppingListFoodScalarWhereInput>
  }

  export type EnumStandardUnitTypeFieldUpdateOperationsInput = {
    set?: StandardUnitType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeEventCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutEventInput>, Enumerable<RecipeEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutEventInput>
    createMany?: RecipeEventCreateManyEventInputEnvelope
    connect?: Enumerable<RecipeEventWhereUniqueInput>
  }

  export type ShoppingListEventCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutEventInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutEventInput>
    createMany?: ShoppingListEventCreateManyEventInputEnvelope
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
  }

  export type RecipeEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutEventInput>, Enumerable<RecipeEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutEventInput>
    createMany?: RecipeEventCreateManyEventInputEnvelope
    connect?: Enumerable<RecipeEventWhereUniqueInput>
  }

  export type ShoppingListEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutEventInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutEventInput>
    createMany?: ShoppingListEventCreateManyEventInputEnvelope
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: EventType
  }

  export type UserUpdateOneRequiredWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type RecipeEventUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutEventInput>, Enumerable<RecipeEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<RecipeEventUpsertWithWhereUniqueWithoutEventInput>
    createMany?: RecipeEventCreateManyEventInputEnvelope
    set?: Enumerable<RecipeEventWhereUniqueInput>
    disconnect?: Enumerable<RecipeEventWhereUniqueInput>
    delete?: Enumerable<RecipeEventWhereUniqueInput>
    connect?: Enumerable<RecipeEventWhereUniqueInput>
    update?: Enumerable<RecipeEventUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<RecipeEventUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<RecipeEventScalarWhereInput>
  }

  export type ShoppingListEventUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutEventInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<ShoppingListEventUpsertWithWhereUniqueWithoutEventInput>
    createMany?: ShoppingListEventCreateManyEventInputEnvelope
    set?: Enumerable<ShoppingListEventWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListEventWhereUniqueInput>
    delete?: Enumerable<ShoppingListEventWhereUniqueInput>
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
    update?: Enumerable<ShoppingListEventUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<ShoppingListEventUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<ShoppingListEventScalarWhereInput>
  }

  export type RecipeEventUncheckedUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<RecipeEventCreateWithoutEventInput>, Enumerable<RecipeEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<RecipeEventCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<RecipeEventUpsertWithWhereUniqueWithoutEventInput>
    createMany?: RecipeEventCreateManyEventInputEnvelope
    set?: Enumerable<RecipeEventWhereUniqueInput>
    disconnect?: Enumerable<RecipeEventWhereUniqueInput>
    delete?: Enumerable<RecipeEventWhereUniqueInput>
    connect?: Enumerable<RecipeEventWhereUniqueInput>
    update?: Enumerable<RecipeEventUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<RecipeEventUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<RecipeEventScalarWhereInput>
  }

  export type ShoppingListEventUncheckedUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<ShoppingListEventCreateWithoutEventInput>, Enumerable<ShoppingListEventUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<ShoppingListEventCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<ShoppingListEventUpsertWithWhereUniqueWithoutEventInput>
    createMany?: ShoppingListEventCreateManyEventInputEnvelope
    set?: Enumerable<ShoppingListEventWhereUniqueInput>
    disconnect?: Enumerable<ShoppingListEventWhereUniqueInput>
    delete?: Enumerable<ShoppingListEventWhereUniqueInput>
    connect?: Enumerable<ShoppingListEventWhereUniqueInput>
    update?: Enumerable<ShoppingListEventUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<ShoppingListEventUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<ShoppingListEventScalarWhereInput>
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type UserPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPreferenceCreateWithoutUserInput>, Enumerable<UserPreferenceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPreferenceCreateOrConnectWithoutUserInput>
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: Enumerable<UserPreferenceWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type UserPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPreferenceCreateWithoutUserInput>, Enumerable<UserPreferenceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPreferenceCreateOrConnectWithoutUserInput>
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: Enumerable<UserPreferenceWhereUniqueInput>
  }

  export type EventUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type UserPreferenceUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPreferenceCreateWithoutUserInput>, Enumerable<UserPreferenceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPreferenceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPreferenceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: Enumerable<UserPreferenceWhereUniqueInput>
    disconnect?: Enumerable<UserPreferenceWhereUniqueInput>
    delete?: Enumerable<UserPreferenceWhereUniqueInput>
    connect?: Enumerable<UserPreferenceWhereUniqueInput>
    update?: Enumerable<UserPreferenceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPreferenceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPreferenceScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPreferenceCreateWithoutUserInput>, Enumerable<UserPreferenceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPreferenceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPreferenceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: Enumerable<UserPreferenceWhereUniqueInput>
    disconnect?: Enumerable<UserPreferenceWhereUniqueInput>
    delete?: Enumerable<UserPreferenceWhereUniqueInput>
    connect?: Enumerable<UserPreferenceWhereUniqueInput>
    update?: Enumerable<UserPreferenceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPreferenceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPreferenceScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserPreferencesInput = {
    create?: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUserPreferenceTypeFieldUpdateOperationsInput = {
    set?: UserPreferenceType
  }

  export type UserUpdateOneRequiredWithoutUserPreferencesInput = {
    create?: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferencesInput
    upsert?: UserUpsertWithoutUserPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserPreferencesInput, UserUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumFoodTypeFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeFilter | FoodType
  }

  export type NestedEnumFoodTypeWithAggregatesFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeWithAggregatesFilter | FoodType
    _count?: NestedIntFilter
    _min?: NestedEnumFoodTypeFilter
    _max?: NestedEnumFoodTypeFilter
  }

  export type NestedEnumStandardUnitTypeFilter = {
    equals?: StandardUnitType
    in?: Enumerable<StandardUnitType>
    notIn?: Enumerable<StandardUnitType>
    not?: NestedEnumStandardUnitTypeFilter | StandardUnitType
  }

  export type NestedEnumStandardUnitTypeWithAggregatesFilter = {
    equals?: StandardUnitType
    in?: Enumerable<StandardUnitType>
    notIn?: Enumerable<StandardUnitType>
    not?: NestedEnumStandardUnitTypeWithAggregatesFilter | StandardUnitType
    _count?: NestedIntFilter
    _min?: NestedEnumStandardUnitTypeFilter
    _max?: NestedEnumStandardUnitTypeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumEventTypeFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeFilter | EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeWithAggregatesFilter | EventType
    _count?: NestedIntFilter
    _min?: NestedEnumEventTypeFilter
    _max?: NestedEnumEventTypeFilter
  }

  export type NestedEnumUserPreferenceTypeFilter = {
    equals?: UserPreferenceType
    in?: Enumerable<UserPreferenceType>
    notIn?: Enumerable<UserPreferenceType>
    not?: NestedEnumUserPreferenceTypeFilter | UserPreferenceType
  }

  export type NestedEnumUserPreferenceTypeWithAggregatesFilter = {
    equals?: UserPreferenceType
    in?: Enumerable<UserPreferenceType>
    notIn?: Enumerable<UserPreferenceType>
    not?: NestedEnumUserPreferenceTypeWithAggregatesFilter | UserPreferenceType
    _count?: NestedIntFilter
    _min?: NestedEnumUserPreferenceTypeFilter
    _max?: NestedEnumUserPreferenceTypeFilter
  }

  export type RecipeEventCreateWithoutRecipeInput = {
    id?: string
    finishedAt?: Date | string | null
    event: EventCreateNestedOneWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedCreateWithoutRecipeInput = {
    id?: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type RecipeEventCreateOrConnectWithoutRecipeInput = {
    where: RecipeEventWhereUniqueInput
    create: XOR<RecipeEventCreateWithoutRecipeInput, RecipeEventUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeEventCreateManyRecipeInputEnvelope = {
    data: Enumerable<RecipeEventCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type RecipeInstructionCreateWithoutRecipeInput = {
    id?: string
    description: string
    duration: number
  }

  export type RecipeInstructionUncheckedCreateWithoutRecipeInput = {
    id?: string
    description: string
    duration: number
  }

  export type RecipeInstructionCreateOrConnectWithoutRecipeInput = {
    where: RecipeInstructionWhereUniqueInput
    create: XOR<RecipeInstructionCreateWithoutRecipeInput, RecipeInstructionUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeInstructionCreateManyRecipeInputEnvelope = {
    data: Enumerable<RecipeInstructionCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type RecipeFoodCreateWithoutRecipeInput = {
    id?: string
    quantity: number
    quantityUnit?: string | null
    food: FoodCreateNestedOneWithoutRecipeFoodItemsInput
  }

  export type RecipeFoodUncheckedCreateWithoutRecipeInput = {
    id?: string
    foodId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type RecipeFoodCreateOrConnectWithoutRecipeInput = {
    where: RecipeFoodWhereUniqueInput
    create: XOR<RecipeFoodCreateWithoutRecipeInput, RecipeFoodUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeFoodCreateManyRecipeInputEnvelope = {
    data: Enumerable<RecipeFoodCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type RecipeEventUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeEventWhereUniqueInput
    update: XOR<RecipeEventUpdateWithoutRecipeInput, RecipeEventUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeEventCreateWithoutRecipeInput, RecipeEventUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeEventUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeEventWhereUniqueInput
    data: XOR<RecipeEventUpdateWithoutRecipeInput, RecipeEventUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeEventUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeEventScalarWhereInput
    data: XOR<RecipeEventUpdateManyMutationInput, RecipeEventUncheckedUpdateManyWithoutRecipeEventsInput>
  }

  export type RecipeEventScalarWhereInput = {
    AND?: Enumerable<RecipeEventScalarWhereInput>
    OR?: Enumerable<RecipeEventScalarWhereInput>
    NOT?: Enumerable<RecipeEventScalarWhereInput>
    id?: StringFilter | string
    recipeId?: StringFilter | string
    eventId?: StringFilter | string
    finishedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeInstructionWhereUniqueInput
    update: XOR<RecipeInstructionUpdateWithoutRecipeInput, RecipeInstructionUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeInstructionCreateWithoutRecipeInput, RecipeInstructionUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeInstructionWhereUniqueInput
    data: XOR<RecipeInstructionUpdateWithoutRecipeInput, RecipeInstructionUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeInstructionUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeInstructionScalarWhereInput
    data: XOR<RecipeInstructionUpdateManyMutationInput, RecipeInstructionUncheckedUpdateManyWithoutRecipeInstructionsInput>
  }

  export type RecipeInstructionScalarWhereInput = {
    AND?: Enumerable<RecipeInstructionScalarWhereInput>
    OR?: Enumerable<RecipeInstructionScalarWhereInput>
    NOT?: Enumerable<RecipeInstructionScalarWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    recipeId?: StringFilter | string
    duration?: IntFilter | number
  }

  export type RecipeFoodUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeFoodWhereUniqueInput
    update: XOR<RecipeFoodUpdateWithoutRecipeInput, RecipeFoodUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeFoodCreateWithoutRecipeInput, RecipeFoodUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeFoodUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeFoodWhereUniqueInput
    data: XOR<RecipeFoodUpdateWithoutRecipeInput, RecipeFoodUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeFoodUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeFoodScalarWhereInput
    data: XOR<RecipeFoodUpdateManyMutationInput, RecipeFoodUncheckedUpdateManyWithoutRecipeFoodInput>
  }

  export type RecipeFoodScalarWhereInput = {
    AND?: Enumerable<RecipeFoodScalarWhereInput>
    OR?: Enumerable<RecipeFoodScalarWhereInput>
    NOT?: Enumerable<RecipeFoodScalarWhereInput>
    id?: StringFilter | string
    recipeId?: StringFilter | string
    foodId?: StringFilter | string
    quantity?: IntFilter | number
    quantityUnit?: StringNullableFilter | string | null
  }

  export type RecipeCreateWithoutRecipeFoodInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventCreateNestedManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRecipeFoodInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRecipeFoodInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRecipeFoodInput, RecipeUncheckedCreateWithoutRecipeFoodInput>
  }

  export type FoodCreateWithoutRecipeFoodItemsInput = {
    id?: string
    name: string
    type: FoodType
    shoppingListFoodItems?: ShoppingListFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutRecipeFoodItemsInput = {
    id?: string
    name: string
    type: FoodType
    shoppingListFoodItems?: ShoppingListFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutRecipeFoodItemsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutRecipeFoodItemsInput, FoodUncheckedCreateWithoutRecipeFoodItemsInput>
  }

  export type RecipeUpsertWithoutRecipeFoodInput = {
    update: XOR<RecipeUpdateWithoutRecipeFoodInput, RecipeUncheckedUpdateWithoutRecipeFoodInput>
    create: XOR<RecipeCreateWithoutRecipeFoodInput, RecipeUncheckedCreateWithoutRecipeFoodInput>
  }

  export type RecipeUpdateWithoutRecipeFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUpdateManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutRecipeFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutRecipeInput
    recipeInstructions?: RecipeInstructionUncheckedUpdateManyWithoutRecipeInput
  }

  export type FoodUpsertWithoutRecipeFoodItemsInput = {
    update: XOR<FoodUpdateWithoutRecipeFoodItemsInput, FoodUncheckedUpdateWithoutRecipeFoodItemsInput>
    create: XOR<FoodCreateWithoutRecipeFoodItemsInput, FoodUncheckedCreateWithoutRecipeFoodItemsInput>
  }

  export type FoodUpdateWithoutRecipeFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    shoppingListFoodItems?: ShoppingListFoodUpdateManyWithoutFoodInput
  }

  export type FoodUncheckedUpdateWithoutRecipeFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    shoppingListFoodItems?: ShoppingListFoodUncheckedUpdateManyWithoutFoodInput
  }

  export type RecipeCreateWithoutRecipeEventsInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeInstructions?: RecipeInstructionCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRecipeEventsInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeInstructions?: RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRecipeEventsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRecipeEventsInput, RecipeUncheckedCreateWithoutRecipeEventsInput>
  }

  export type EventCreateWithoutRecipeEventsInput = {
    id?: string
    type: EventType
    date: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    shoppingListEvents?: ShoppingListEventCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRecipeEventsInput = {
    id?: string
    type: EventType
    userId: string
    date: Date | string
    shoppingListEvents?: ShoppingListEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRecipeEventsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRecipeEventsInput, EventUncheckedCreateWithoutRecipeEventsInput>
  }

  export type RecipeUpsertWithoutRecipeEventsInput = {
    update: XOR<RecipeUpdateWithoutRecipeEventsInput, RecipeUncheckedUpdateWithoutRecipeEventsInput>
    create: XOR<RecipeCreateWithoutRecipeEventsInput, RecipeUncheckedCreateWithoutRecipeEventsInput>
  }

  export type RecipeUpdateWithoutRecipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeInstructions?: RecipeInstructionUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutRecipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeInstructions?: RecipeInstructionUncheckedUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedUpdateManyWithoutRecipeInput
  }

  export type EventUpsertWithoutRecipeEventsInput = {
    update: XOR<EventUpdateWithoutRecipeEventsInput, EventUncheckedUpdateWithoutRecipeEventsInput>
    create: XOR<EventCreateWithoutRecipeEventsInput, EventUncheckedCreateWithoutRecipeEventsInput>
  }

  export type EventUpdateWithoutRecipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsInput
    shoppingListEvents?: ShoppingListEventUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutRecipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListEvents?: ShoppingListEventUncheckedUpdateManyWithoutEventInput
  }

  export type RecipeCreateWithoutRecipeInstructionsInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRecipeInstructionsInput = {
    id?: string
    name: string
    preparationDuration: number
    cookingDuration: number
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRecipeInstructionsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRecipeInstructionsInput, RecipeUncheckedCreateWithoutRecipeInstructionsInput>
  }

  export type RecipeUpsertWithoutRecipeInstructionsInput = {
    update: XOR<RecipeUpdateWithoutRecipeInstructionsInput, RecipeUncheckedUpdateWithoutRecipeInstructionsInput>
    create: XOR<RecipeCreateWithoutRecipeInstructionsInput, RecipeUncheckedCreateWithoutRecipeInstructionsInput>
  }

  export type RecipeUpdateWithoutRecipeInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutRecipeInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    preparationDuration?: IntFieldUpdateOperationsInput | number
    cookingDuration?: IntFieldUpdateOperationsInput | number
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutRecipeInput
    recipeFood?: RecipeFoodUncheckedUpdateManyWithoutRecipeInput
  }

  export type ShoppingListEventCreateWithoutShoppingListInput = {
    id?: string
    finishedAt?: Date | string | null
    event: EventCreateNestedOneWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedCreateWithoutShoppingListInput = {
    id?: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListEventCreateOrConnectWithoutShoppingListInput = {
    where: ShoppingListEventWhereUniqueInput
    create: XOR<ShoppingListEventCreateWithoutShoppingListInput, ShoppingListEventUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListEventCreateManyShoppingListInputEnvelope = {
    data: Enumerable<ShoppingListEventCreateManyShoppingListInput>
    skipDuplicates?: boolean
  }

  export type ShoppingListFoodCreateWithoutShoppingListInput = {
    id?: string
    isChecked: boolean
    food: FoodCreateNestedOneWithoutShoppingListFoodItemsInput
  }

  export type ShoppingListFoodUncheckedCreateWithoutShoppingListInput = {
    id?: string
    foodId: string
    isChecked: boolean
  }

  export type ShoppingListFoodCreateOrConnectWithoutShoppingListInput = {
    where: ShoppingListFoodWhereUniqueInput
    create: XOR<ShoppingListFoodCreateWithoutShoppingListInput, ShoppingListFoodUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListFoodCreateManyShoppingListInputEnvelope = {
    data: Enumerable<ShoppingListFoodCreateManyShoppingListInput>
    skipDuplicates?: boolean
  }

  export type ShoppingListEventUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListEventWhereUniqueInput
    update: XOR<ShoppingListEventUpdateWithoutShoppingListInput, ShoppingListEventUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ShoppingListEventCreateWithoutShoppingListInput, ShoppingListEventUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListEventUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListEventWhereUniqueInput
    data: XOR<ShoppingListEventUpdateWithoutShoppingListInput, ShoppingListEventUncheckedUpdateWithoutShoppingListInput>
  }

  export type ShoppingListEventUpdateManyWithWhereWithoutShoppingListInput = {
    where: ShoppingListEventScalarWhereInput
    data: XOR<ShoppingListEventUpdateManyMutationInput, ShoppingListEventUncheckedUpdateManyWithoutShoppingListEventsInput>
  }

  export type ShoppingListEventScalarWhereInput = {
    AND?: Enumerable<ShoppingListEventScalarWhereInput>
    OR?: Enumerable<ShoppingListEventScalarWhereInput>
    NOT?: Enumerable<ShoppingListEventScalarWhereInput>
    id?: StringFilter | string
    shoppingListId?: StringFilter | string
    eventId?: StringFilter | string
    finishedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type ShoppingListFoodUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListFoodWhereUniqueInput
    update: XOR<ShoppingListFoodUpdateWithoutShoppingListInput, ShoppingListFoodUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ShoppingListFoodCreateWithoutShoppingListInput, ShoppingListFoodUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListFoodUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListFoodWhereUniqueInput
    data: XOR<ShoppingListFoodUpdateWithoutShoppingListInput, ShoppingListFoodUncheckedUpdateWithoutShoppingListInput>
  }

  export type ShoppingListFoodUpdateManyWithWhereWithoutShoppingListInput = {
    where: ShoppingListFoodScalarWhereInput
    data: XOR<ShoppingListFoodUpdateManyMutationInput, ShoppingListFoodUncheckedUpdateManyWithoutShoppingListFoodsInput>
  }

  export type ShoppingListFoodScalarWhereInput = {
    AND?: Enumerable<ShoppingListFoodScalarWhereInput>
    OR?: Enumerable<ShoppingListFoodScalarWhereInput>
    NOT?: Enumerable<ShoppingListFoodScalarWhereInput>
    id?: StringFilter | string
    shoppingListId?: StringFilter | string
    foodId?: StringFilter | string
    isChecked?: BoolFilter | boolean
  }

  export type ShoppingListCreateWithoutShoppingListEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListFoods?: ShoppingListFoodCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateWithoutShoppingListEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListFoods?: ShoppingListFoodUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListCreateOrConnectWithoutShoppingListEventsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutShoppingListEventsInput, ShoppingListUncheckedCreateWithoutShoppingListEventsInput>
  }

  export type EventCreateWithoutShoppingListEventsInput = {
    id?: string
    type: EventType
    date: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    recipeEvents?: RecipeEventCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutShoppingListEventsInput = {
    id?: string
    type: EventType
    userId: string
    date: Date | string
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutShoppingListEventsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutShoppingListEventsInput, EventUncheckedCreateWithoutShoppingListEventsInput>
  }

  export type ShoppingListUpsertWithoutShoppingListEventsInput = {
    update: XOR<ShoppingListUpdateWithoutShoppingListEventsInput, ShoppingListUncheckedUpdateWithoutShoppingListEventsInput>
    create: XOR<ShoppingListCreateWithoutShoppingListEventsInput, ShoppingListUncheckedCreateWithoutShoppingListEventsInput>
  }

  export type ShoppingListUpdateWithoutShoppingListEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListFoods?: ShoppingListFoodUpdateManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedUpdateWithoutShoppingListEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListFoods?: ShoppingListFoodUncheckedUpdateManyWithoutShoppingListInput
  }

  export type EventUpsertWithoutShoppingListEventsInput = {
    update: XOR<EventUpdateWithoutShoppingListEventsInput, EventUncheckedUpdateWithoutShoppingListEventsInput>
    create: XOR<EventCreateWithoutShoppingListEventsInput, EventUncheckedCreateWithoutShoppingListEventsInput>
  }

  export type EventUpdateWithoutShoppingListEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsInput
    recipeEvents?: RecipeEventUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutShoppingListEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutEventInput
  }

  export type ShoppingListCreateWithoutShoppingListFoodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListEvents?: ShoppingListEventCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateWithoutShoppingListFoodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shoppingListEvents?: ShoppingListEventUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListCreateOrConnectWithoutShoppingListFoodsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutShoppingListFoodsInput, ShoppingListUncheckedCreateWithoutShoppingListFoodsInput>
  }

  export type FoodCreateWithoutShoppingListFoodItemsInput = {
    id?: string
    name: string
    type: FoodType
    recipeFoodItems?: RecipeFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutShoppingListFoodItemsInput = {
    id?: string
    name: string
    type: FoodType
    recipeFoodItems?: RecipeFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutShoppingListFoodItemsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutShoppingListFoodItemsInput, FoodUncheckedCreateWithoutShoppingListFoodItemsInput>
  }

  export type ShoppingListUpsertWithoutShoppingListFoodsInput = {
    update: XOR<ShoppingListUpdateWithoutShoppingListFoodsInput, ShoppingListUncheckedUpdateWithoutShoppingListFoodsInput>
    create: XOR<ShoppingListCreateWithoutShoppingListFoodsInput, ShoppingListUncheckedCreateWithoutShoppingListFoodsInput>
  }

  export type ShoppingListUpdateWithoutShoppingListFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListEvents?: ShoppingListEventUpdateManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedUpdateWithoutShoppingListFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListEvents?: ShoppingListEventUncheckedUpdateManyWithoutShoppingListInput
  }

  export type FoodUpsertWithoutShoppingListFoodItemsInput = {
    update: XOR<FoodUpdateWithoutShoppingListFoodItemsInput, FoodUncheckedUpdateWithoutShoppingListFoodItemsInput>
    create: XOR<FoodCreateWithoutShoppingListFoodItemsInput, FoodUncheckedCreateWithoutShoppingListFoodItemsInput>
  }

  export type FoodUpdateWithoutShoppingListFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    recipeFoodItems?: RecipeFoodUpdateManyWithoutFoodInput
  }

  export type FoodUncheckedUpdateWithoutShoppingListFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    recipeFoodItems?: RecipeFoodUncheckedUpdateManyWithoutFoodInput
  }

  export type RecipeFoodCreateWithoutFoodInput = {
    id?: string
    quantity: number
    quantityUnit?: string | null
    recipe: RecipeCreateNestedOneWithoutRecipeFoodInput
  }

  export type RecipeFoodUncheckedCreateWithoutFoodInput = {
    id?: string
    recipeId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type RecipeFoodCreateOrConnectWithoutFoodInput = {
    where: RecipeFoodWhereUniqueInput
    create: XOR<RecipeFoodCreateWithoutFoodInput, RecipeFoodUncheckedCreateWithoutFoodInput>
  }

  export type RecipeFoodCreateManyFoodInputEnvelope = {
    data: Enumerable<RecipeFoodCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type ShoppingListFoodCreateWithoutFoodInput = {
    id?: string
    isChecked: boolean
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListFoodsInput
  }

  export type ShoppingListFoodUncheckedCreateWithoutFoodInput = {
    id?: string
    shoppingListId: string
    isChecked: boolean
  }

  export type ShoppingListFoodCreateOrConnectWithoutFoodInput = {
    where: ShoppingListFoodWhereUniqueInput
    create: XOR<ShoppingListFoodCreateWithoutFoodInput, ShoppingListFoodUncheckedCreateWithoutFoodInput>
  }

  export type ShoppingListFoodCreateManyFoodInputEnvelope = {
    data: Enumerable<ShoppingListFoodCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type RecipeFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: RecipeFoodWhereUniqueInput
    update: XOR<RecipeFoodUpdateWithoutFoodInput, RecipeFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<RecipeFoodCreateWithoutFoodInput, RecipeFoodUncheckedCreateWithoutFoodInput>
  }

  export type RecipeFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: RecipeFoodWhereUniqueInput
    data: XOR<RecipeFoodUpdateWithoutFoodInput, RecipeFoodUncheckedUpdateWithoutFoodInput>
  }

  export type RecipeFoodUpdateManyWithWhereWithoutFoodInput = {
    where: RecipeFoodScalarWhereInput
    data: XOR<RecipeFoodUpdateManyMutationInput, RecipeFoodUncheckedUpdateManyWithoutRecipeFoodItemsInput>
  }

  export type ShoppingListFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: ShoppingListFoodWhereUniqueInput
    update: XOR<ShoppingListFoodUpdateWithoutFoodInput, ShoppingListFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<ShoppingListFoodCreateWithoutFoodInput, ShoppingListFoodUncheckedCreateWithoutFoodInput>
  }

  export type ShoppingListFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: ShoppingListFoodWhereUniqueInput
    data: XOR<ShoppingListFoodUpdateWithoutFoodInput, ShoppingListFoodUncheckedUpdateWithoutFoodInput>
  }

  export type ShoppingListFoodUpdateManyWithWhereWithoutFoodInput = {
    where: ShoppingListFoodScalarWhereInput
    data: XOR<ShoppingListFoodUpdateManyMutationInput, ShoppingListFoodUncheckedUpdateManyWithoutShoppingListFoodItemsInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    username: string
    firstName: string
    userPreferences?: UserPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    username: string
    firstName: string
    userPreferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type RecipeEventCreateWithoutEventInput = {
    id?: string
    finishedAt?: Date | string | null
    recipe: RecipeCreateNestedOneWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedCreateWithoutEventInput = {
    id?: string
    recipeId: string
    finishedAt?: Date | string | null
  }

  export type RecipeEventCreateOrConnectWithoutEventInput = {
    where: RecipeEventWhereUniqueInput
    create: XOR<RecipeEventCreateWithoutEventInput, RecipeEventUncheckedCreateWithoutEventInput>
  }

  export type RecipeEventCreateManyEventInputEnvelope = {
    data: Enumerable<RecipeEventCreateManyEventInput>
    skipDuplicates?: boolean
  }

  export type ShoppingListEventCreateWithoutEventInput = {
    id?: string
    finishedAt?: Date | string | null
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedCreateWithoutEventInput = {
    id?: string
    shoppingListId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListEventCreateOrConnectWithoutEventInput = {
    where: ShoppingListEventWhereUniqueInput
    create: XOR<ShoppingListEventCreateWithoutEventInput, ShoppingListEventUncheckedCreateWithoutEventInput>
  }

  export type ShoppingListEventCreateManyEventInputEnvelope = {
    data: Enumerable<ShoppingListEventCreateManyEventInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    userPreferences?: UserPreferenceUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    userPreferences?: UserPreferenceUncheckedUpdateManyWithoutUserInput
  }

  export type RecipeEventUpsertWithWhereUniqueWithoutEventInput = {
    where: RecipeEventWhereUniqueInput
    update: XOR<RecipeEventUpdateWithoutEventInput, RecipeEventUncheckedUpdateWithoutEventInput>
    create: XOR<RecipeEventCreateWithoutEventInput, RecipeEventUncheckedCreateWithoutEventInput>
  }

  export type RecipeEventUpdateWithWhereUniqueWithoutEventInput = {
    where: RecipeEventWhereUniqueInput
    data: XOR<RecipeEventUpdateWithoutEventInput, RecipeEventUncheckedUpdateWithoutEventInput>
  }

  export type RecipeEventUpdateManyWithWhereWithoutEventInput = {
    where: RecipeEventScalarWhereInput
    data: XOR<RecipeEventUpdateManyMutationInput, RecipeEventUncheckedUpdateManyWithoutRecipeEventsInput>
  }

  export type ShoppingListEventUpsertWithWhereUniqueWithoutEventInput = {
    where: ShoppingListEventWhereUniqueInput
    update: XOR<ShoppingListEventUpdateWithoutEventInput, ShoppingListEventUncheckedUpdateWithoutEventInput>
    create: XOR<ShoppingListEventCreateWithoutEventInput, ShoppingListEventUncheckedCreateWithoutEventInput>
  }

  export type ShoppingListEventUpdateWithWhereUniqueWithoutEventInput = {
    where: ShoppingListEventWhereUniqueInput
    data: XOR<ShoppingListEventUpdateWithoutEventInput, ShoppingListEventUncheckedUpdateWithoutEventInput>
  }

  export type ShoppingListEventUpdateManyWithWhereWithoutEventInput = {
    where: ShoppingListEventScalarWhereInput
    data: XOR<ShoppingListEventUpdateManyMutationInput, ShoppingListEventUncheckedUpdateManyWithoutShoppingListEventsInput>
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    type: EventType
    date: Date | string
    recipeEvents?: RecipeEventCreateNestedManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    type: EventType
    date: Date | string
    recipeEvents?: RecipeEventUncheckedCreateNestedManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: Enumerable<EventCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string
    type: UserPreferenceType
    value: number
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    type: UserPreferenceType
    value: number
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceCreateManyUserInputEnvelope = {
    data: Enumerable<UserPreferenceCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventsInput>
  }

  export type EventScalarWhereInput = {
    AND?: Enumerable<EventScalarWhereInput>
    OR?: Enumerable<EventScalarWhereInput>
    NOT?: Enumerable<EventScalarWhereInput>
    id?: StringFilter | string
    type?: EnumEventTypeFilter | EventType
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
  }

  export type UserPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferenceScalarWhereInput
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyWithoutUserPreferencesInput>
  }

  export type UserPreferenceScalarWhereInput = {
    AND?: Enumerable<UserPreferenceScalarWhereInput>
    OR?: Enumerable<UserPreferenceScalarWhereInput>
    NOT?: Enumerable<UserPreferenceScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: EnumUserPreferenceTypeFilter | UserPreferenceType
    value?: IntFilter | number
  }

  export type UserCreateWithoutUserPreferencesInput = {
    id?: string
    username: string
    firstName: string
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPreferencesInput = {
    id?: string
    username: string
    firstName: string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
  }

  export type UserUpsertWithoutUserPreferencesInput = {
    update: XOR<UserUpdateWithoutUserPreferencesInput, UserUncheckedUpdateWithoutUserPreferencesInput>
    create: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
  }

  export type UserUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutUserInput
  }

  export type RecipeEventCreateManyRecipeInput = {
    id?: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type RecipeInstructionCreateManyRecipeInput = {
    id?: string
    description: string
    duration: number
  }

  export type RecipeFoodCreateManyRecipeInput = {
    id?: string
    foodId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type RecipeEventUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeEventUncheckedUpdateManyWithoutRecipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeInstructionUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeInstructionUncheckedUpdateManyWithoutRecipeInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
    food?: FoodUpdateOneRequiredWithoutRecipeFoodItemsInput
  }

  export type RecipeFoodUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeFoodUncheckedUpdateManyWithoutRecipeFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListEventCreateManyShoppingListInput = {
    id?: string
    eventId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListFoodCreateManyShoppingListInput = {
    id?: string
    foodId: string
    isChecked: boolean
  }

  export type ShoppingListEventUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListEventUncheckedUpdateManyWithoutShoppingListEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListFoodUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    food?: FoodUpdateOneRequiredWithoutShoppingListFoodItemsInput
  }

  export type ShoppingListFoodUncheckedUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListFoodUncheckedUpdateManyWithoutShoppingListFoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeFoodCreateManyFoodInput = {
    id?: string
    recipeId: string
    quantity: number
    quantityUnit?: string | null
  }

  export type ShoppingListFoodCreateManyFoodInput = {
    id?: string
    shoppingListId: string
    isChecked: boolean
  }

  export type RecipeFoodUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutRecipeFoodInput
  }

  export type RecipeFoodUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeFoodUncheckedUpdateManyWithoutRecipeFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListFoodUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListFoodsInput
  }

  export type ShoppingListFoodUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListFoodUncheckedUpdateManyWithoutShoppingListFoodItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeEventCreateManyEventInput = {
    id?: string
    recipeId: string
    finishedAt?: Date | string | null
  }

  export type ShoppingListEventCreateManyEventInput = {
    id?: string
    shoppingListId: string
    finishedAt?: Date | string | null
  }

  export type RecipeEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe?: RecipeUpdateOneRequiredWithoutRecipeEventsInput
  }

  export type RecipeEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListEventsInput
  }

  export type ShoppingListEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateManyUserInput = {
    id?: string
    type: EventType
    date: Date | string
  }

  export type UserPreferenceCreateManyUserInput = {
    id?: string
    type: UserPreferenceType
    value: number
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeEvents?: RecipeEventUpdateManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeEvents?: RecipeEventUncheckedUpdateManyWithoutEventInput
    shoppingListEvents?: ShoppingListEventUncheckedUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | EventType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUserPreferenceTypeFieldUpdateOperationsInput | UserPreferenceType
    value?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}