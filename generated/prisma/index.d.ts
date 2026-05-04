
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Doacao
 * 
 */
export type Doacao = $Result.DefaultSelection<Prisma.$DoacaoPayload>
/**
 * Model ItemSendoDoado
 * 
 */
export type ItemSendoDoado = $Result.DefaultSelection<Prisma.$ItemSendoDoadoPayload>
/**
 * Model Prova_Gincana
 * 
 */
export type Prova_Gincana = $Result.DefaultSelection<Prisma.$Prova_GincanaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doacao`: Exposes CRUD operations for the **Doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doacaos
    * const doacaos = await prisma.doacao.findMany()
    * ```
    */
  get doacao(): Prisma.DoacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemSendoDoado`: Exposes CRUD operations for the **ItemSendoDoado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSendoDoados
    * const itemSendoDoados = await prisma.itemSendoDoado.findMany()
    * ```
    */
  get itemSendoDoado(): Prisma.ItemSendoDoadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prova_Gincana`: Exposes CRUD operations for the **Prova_Gincana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prova_Gincanas
    * const prova_Gincanas = await prisma.prova_Gincana.findMany()
    * ```
    */
  get prova_Gincana(): Prisma.Prova_GincanaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Equipe: 'Equipe',
    Item: 'Item',
    Doacao: 'Doacao',
    ItemSendoDoado: 'ItemSendoDoado',
    Prova_Gincana: 'Prova_Gincana'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "equipe" | "item" | "doacao" | "itemSendoDoado" | "prova_Gincana"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Equipe: {
        payload: Prisma.$EquipePayload<ExtArgs>
        fields: Prisma.EquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findFirst: {
            args: Prisma.EquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findMany: {
            args: Prisma.EquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          create: {
            args: Prisma.EquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          createMany: {
            args: Prisma.EquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          delete: {
            args: Prisma.EquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          update: {
            args: Prisma.EquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          deleteMany: {
            args: Prisma.EquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          upsert: {
            args: Prisma.EquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          aggregate: {
            args: Prisma.EquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipe>
          }
          groupBy: {
            args: Prisma.EquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Doacao: {
        payload: Prisma.$DoacaoPayload<ExtArgs>
        fields: Prisma.DoacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findFirst: {
            args: Prisma.DoacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findMany: {
            args: Prisma.DoacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          create: {
            args: Prisma.DoacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          createMany: {
            args: Prisma.DoacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          delete: {
            args: Prisma.DoacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          update: {
            args: Prisma.DoacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          deleteMany: {
            args: Prisma.DoacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          upsert: {
            args: Prisma.DoacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          aggregate: {
            args: Prisma.DoacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoacao>
          }
          groupBy: {
            args: Prisma.DoacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoacaoCountArgs<ExtArgs>
            result: $Utils.Optional<DoacaoCountAggregateOutputType> | number
          }
        }
      }
      ItemSendoDoado: {
        payload: Prisma.$ItemSendoDoadoPayload<ExtArgs>
        fields: Prisma.ItemSendoDoadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemSendoDoadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemSendoDoadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          findFirst: {
            args: Prisma.ItemSendoDoadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemSendoDoadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          findMany: {
            args: Prisma.ItemSendoDoadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>[]
          }
          create: {
            args: Prisma.ItemSendoDoadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          createMany: {
            args: Prisma.ItemSendoDoadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemSendoDoadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>[]
          }
          delete: {
            args: Prisma.ItemSendoDoadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          update: {
            args: Prisma.ItemSendoDoadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          deleteMany: {
            args: Prisma.ItemSendoDoadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemSendoDoadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemSendoDoadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>[]
          }
          upsert: {
            args: Prisma.ItemSendoDoadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSendoDoadoPayload>
          }
          aggregate: {
            args: Prisma.ItemSendoDoadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemSendoDoado>
          }
          groupBy: {
            args: Prisma.ItemSendoDoadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemSendoDoadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemSendoDoadoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemSendoDoadoCountAggregateOutputType> | number
          }
        }
      }
      Prova_Gincana: {
        payload: Prisma.$Prova_GincanaPayload<ExtArgs>
        fields: Prisma.Prova_GincanaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Prova_GincanaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Prova_GincanaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          findFirst: {
            args: Prisma.Prova_GincanaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Prova_GincanaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          findMany: {
            args: Prisma.Prova_GincanaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>[]
          }
          create: {
            args: Prisma.Prova_GincanaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          createMany: {
            args: Prisma.Prova_GincanaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Prova_GincanaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>[]
          }
          delete: {
            args: Prisma.Prova_GincanaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          update: {
            args: Prisma.Prova_GincanaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          deleteMany: {
            args: Prisma.Prova_GincanaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Prova_GincanaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Prova_GincanaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>[]
          }
          upsert: {
            args: Prisma.Prova_GincanaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prova_GincanaPayload>
          }
          aggregate: {
            args: Prisma.Prova_GincanaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProva_Gincana>
          }
          groupBy: {
            args: Prisma.Prova_GincanaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prova_GincanaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Prova_GincanaCountArgs<ExtArgs>
            result: $Utils.Optional<Prova_GincanaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    equipe?: EquipeOmit
    item?: ItemOmit
    doacao?: DoacaoOmit
    itemSendoDoado?: ItemSendoDoadoOmit
    prova_Gincana?: Prova_GincanaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    equipes: number
    items: number
    doacaos: number
    provaGincanas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    equipes?: boolean | UserCountOutputTypeCountEquipesArgs
    items?: boolean | UserCountOutputTypeCountItemsArgs
    doacaos?: boolean | UserCountOutputTypeCountDoacaosArgs
    provaGincanas?: boolean | UserCountOutputTypeCountProvaGincanasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoacaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProvaGincanasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prova_GincanaWhereInput
  }


  /**
   * Count Type EquipeCountOutputType
   */

  export type EquipeCountOutputType = {
    doacoes: number
    provaGincanas: number
  }

  export type EquipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | EquipeCountOutputTypeCountDoacoesArgs
    provaGincanas?: boolean | EquipeCountOutputTypeCountProvaGincanasArgs
  }

  // Custom InputTypes
  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeCountOutputType
     */
    select?: EquipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountProvaGincanasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prova_GincanaWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    doacoes: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | ItemCountOutputTypeCountDoacoesArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSendoDoadoWhereInput
  }


  /**
   * Count Type DoacaoCountOutputType
   */

  export type DoacaoCountOutputType = {
    itensDoadores: number
  }

  export type DoacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensDoadores?: boolean | DoacaoCountOutputTypeCountItensDoadoresArgs
  }

  // Custom InputTypes
  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoacaoCountOutputType
     */
    select?: DoacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeCountItensDoadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSendoDoadoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    equipes?: boolean | User$equipesArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    doacaos?: boolean | User$doacaosArgs<ExtArgs>
    provaGincanas?: boolean | User$provaGincanasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    equipes?: boolean | User$equipesArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    doacaos?: boolean | User$doacaosArgs<ExtArgs>
    provaGincanas?: boolean | User$provaGincanasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      equipes: Prisma.$EquipePayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      doacaos: Prisma.$DoacaoPayload<ExtArgs>[]
      provaGincanas: Prisma.$Prova_GincanaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipes<T extends User$equipesArgs<ExtArgs> = {}>(args?: Subset<T, User$equipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doacaos<T extends User$doacaosArgs<ExtArgs> = {}>(args?: Subset<T, User$doacaosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provaGincanas<T extends User$provaGincanasArgs<ExtArgs> = {}>(args?: Subset<T, User$provaGincanasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.equipes
   */
  export type User$equipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    cursor?: EquipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.doacaos
   */
  export type User$doacaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * User.provaGincanas
   */
  export type User$provaGincanasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    where?: Prova_GincanaWhereInput
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    cursor?: Prova_GincanaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prova_GincanaScalarFieldEnum | Prova_GincanaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Equipe
   */

  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type EquipeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type EquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipe to aggregate.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithAggregationInput | EquipeOrderByWithAggregationInput[]
    by: EquipeScalarFieldEnum[] | EquipeScalarFieldEnum
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }

  export type EquipeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: EquipeCountAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    doacoes?: boolean | Equipe$doacoesArgs<ExtArgs>
    provaGincanas?: boolean | Equipe$provaGincanasArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["equipe"]>
  export type EquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    doacoes?: boolean | Equipe$doacoesArgs<ExtArgs>
    provaGincanas?: boolean | Equipe$provaGincanasArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
      provaGincanas: Prisma.$Prova_GincanaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["equipe"]>
    composites: {}
  }

  type EquipeGetPayload<S extends boolean | null | undefined | EquipeDefaultArgs> = $Result.GetResult<Prisma.$EquipePayload, S>

  type EquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeCountAggregateInputType | true
    }

  export interface EquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipe'], meta: { name: 'Equipe' } }
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeFindUniqueArgs>(args: SelectSubset<T, EquipeFindUniqueArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeFindUniqueOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeFindFirstArgs>(args?: SelectSubset<T, EquipeFindFirstArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeFindManyArgs>(args?: SelectSubset<T, EquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
     */
    create<T extends EquipeCreateArgs>(args: SelectSubset<T, EquipeCreateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeCreateManyArgs>(args?: SelectSubset<T, EquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipes and returns the data saved in the database.
     * @param {EquipeCreateManyAndReturnArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
     */
    delete<T extends EquipeDeleteArgs>(args: SelectSubset<T, EquipeDeleteArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeUpdateArgs>(args: SelectSubset<T, EquipeUpdateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeDeleteManyArgs>(args?: SelectSubset<T, EquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeUpdateManyArgs>(args: SelectSubset<T, EquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes and returns the data updated in the database.
     * @param {EquipeUpdateManyAndReturnArgs} args - Arguments to update many Equipes.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
     */
    upsert<T extends EquipeUpsertArgs>(args: SelectSubset<T, EquipeUpsertArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): Prisma.PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
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
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipe model
   */
  readonly fields: EquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doacoes<T extends Equipe$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provaGincanas<T extends Equipe$provaGincanasArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$provaGincanasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipe model
   */
  interface EquipeFieldRefs {
    readonly id: FieldRef<"Equipe", 'String'>
    readonly name: FieldRef<"Equipe", 'String'>
    readonly createdAt: FieldRef<"Equipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipe", 'DateTime'>
    readonly createdById: FieldRef<"Equipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findUniqueOrThrow
   */
  export type EquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findFirstOrThrow
   */
  export type EquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipes to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe create
   */
  export type EquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipe.
     */
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }

  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe createManyAndReturn
   */
  export type EquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipe update
   */
  export type EquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipe.
     */
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe updateManyAndReturn
   */
  export type EquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     */
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     */
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }

  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter which Equipe to delete.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipes to delete
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to delete.
     */
    limit?: number
  }

  /**
   * Equipe.doacoes
   */
  export type Equipe$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Equipe.provaGincanas
   */
  export type Equipe$provaGincanasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    where?: Prova_GincanaWhereInput
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    cursor?: Prova_GincanaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prova_GincanaScalarFieldEnum | Prova_GincanaScalarFieldEnum[]
  }

  /**
   * Equipe without action
   */
  export type EquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    pontos: number | null
  }

  export type ItemSumAggregateOutputType = {
    pontos: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    pontos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    pontos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    pontos: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    pontos?: true
  }

  export type ItemSumAggregateInputType = {
    pontos?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    desc: string | null
    pontos: number
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    doacoes?: boolean | Item$doacoesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "pontos" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | Item$doacoesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      doacoes: Prisma.$ItemSendoDoadoPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string | null
      pontos: number
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacoes<T extends Item$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Item$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly desc: FieldRef<"Item", 'String'>
    readonly pontos: FieldRef<"Item", 'Int'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
    readonly createdById: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.doacoes
   */
  export type Item$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    where?: ItemSendoDoadoWhereInput
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    cursor?: ItemSendoDoadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemSendoDoadoScalarFieldEnum | ItemSendoDoadoScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Doacao
   */

  export type AggregateDoacao = {
    _count: DoacaoCountAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  export type DoacaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    equipeId: string | null
  }

  export type DoacaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    equipeId: string | null
  }

  export type DoacaoCountAggregateOutputType = {
    id: number
    nome: number
    desc: number
    createdAt: number
    updatedAt: number
    createdById: number
    equipeId: number
    _all: number
  }


  export type DoacaoMinAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
  }

  export type DoacaoMaxAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
  }

  export type DoacaoCountAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
    _all?: true
  }

  export type DoacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacao to aggregate.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doacaos
    **/
    _count?: true | DoacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoacaoMaxAggregateInputType
  }

  export type GetDoacaoAggregateType<T extends DoacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDoacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoacao[P]>
      : GetScalarType<T[P], AggregateDoacao[P]>
  }




  export type DoacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithAggregationInput | DoacaoOrderByWithAggregationInput[]
    by: DoacaoScalarFieldEnum[] | DoacaoScalarFieldEnum
    having?: DoacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoacaoCountAggregateInputType | true
    _min?: DoacaoMinAggregateInputType
    _max?: DoacaoMaxAggregateInputType
  }

  export type DoacaoGroupByOutputType = {
    id: string
    nome: string
    desc: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    equipeId: string
    _count: DoacaoCountAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  type GetDoacaoGroupByPayload<T extends DoacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
            : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
        }
      >
    >


  export type DoacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    itensDoadores?: boolean | Doacao$itensDoadoresArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectScalar = {
    id?: boolean
    nome?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
  }

  export type DoacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "desc" | "createdAt" | "updatedAt" | "createdById" | "equipeId", ExtArgs["result"]["doacao"]>
  export type DoacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    itensDoadores?: boolean | Doacao$itensDoadoresArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }

  export type $DoacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doacao"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      equipe: Prisma.$EquipePayload<ExtArgs>
      itensDoadores: Prisma.$ItemSendoDoadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      desc: string
      createdAt: Date
      updatedAt: Date
      createdById: string
      equipeId: string
    }, ExtArgs["result"]["doacao"]>
    composites: {}
  }

  type DoacaoGetPayload<S extends boolean | null | undefined | DoacaoDefaultArgs> = $Result.GetResult<Prisma.$DoacaoPayload, S>

  type DoacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoacaoCountAggregateInputType | true
    }

  export interface DoacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doacao'], meta: { name: 'Doacao' } }
    /**
     * Find zero or one Doacao that matches the filter.
     * @param {DoacaoFindUniqueArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoacaoFindUniqueArgs>(args: SelectSubset<T, DoacaoFindUniqueArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoacaoFindUniqueOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DoacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoacaoFindFirstArgs>(args?: SelectSubset<T, DoacaoFindFirstArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DoacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doacaos
     * const doacaos = await prisma.doacao.findMany()
     * 
     * // Get first 10 Doacaos
     * const doacaos = await prisma.doacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doacaoWithIdOnly = await prisma.doacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoacaoFindManyArgs>(args?: SelectSubset<T, DoacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doacao.
     * @param {DoacaoCreateArgs} args - Arguments to create a Doacao.
     * @example
     * // Create one Doacao
     * const Doacao = await prisma.doacao.create({
     *   data: {
     *     // ... data to create a Doacao
     *   }
     * })
     * 
     */
    create<T extends DoacaoCreateArgs>(args: SelectSubset<T, DoacaoCreateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doacaos.
     * @param {DoacaoCreateManyArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoacaoCreateManyArgs>(args?: SelectSubset<T, DoacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doacaos and returns the data saved in the database.
     * @param {DoacaoCreateManyAndReturnArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DoacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doacao.
     * @param {DoacaoDeleteArgs} args - Arguments to delete one Doacao.
     * @example
     * // Delete one Doacao
     * const Doacao = await prisma.doacao.delete({
     *   where: {
     *     // ... filter to delete one Doacao
     *   }
     * })
     * 
     */
    delete<T extends DoacaoDeleteArgs>(args: SelectSubset<T, DoacaoDeleteArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doacao.
     * @param {DoacaoUpdateArgs} args - Arguments to update one Doacao.
     * @example
     * // Update one Doacao
     * const doacao = await prisma.doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoacaoUpdateArgs>(args: SelectSubset<T, DoacaoUpdateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doacaos.
     * @param {DoacaoDeleteManyArgs} args - Arguments to filter Doacaos to delete.
     * @example
     * // Delete a few Doacaos
     * const { count } = await prisma.doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoacaoDeleteManyArgs>(args?: SelectSubset<T, DoacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoacaoUpdateManyArgs>(args: SelectSubset<T, DoacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos and returns the data updated in the database.
     * @param {DoacaoUpdateManyAndReturnArgs} args - Arguments to update many Doacaos.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DoacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doacao.
     * @param {DoacaoUpsertArgs} args - Arguments to update or create a Doacao.
     * @example
     * // Update or create a Doacao
     * const doacao = await prisma.doacao.upsert({
     *   create: {
     *     // ... data to create a Doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doacao we want to update
     *   }
     * })
     */
    upsert<T extends DoacaoUpsertArgs>(args: SelectSubset<T, DoacaoUpsertArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoCountArgs} args - Arguments to filter Doacaos to count.
     * @example
     * // Count the number of Doacaos
     * const count = await prisma.doacao.count({
     *   where: {
     *     // ... the filter for the Doacaos we want to count
     *   }
     * })
    **/
    count<T extends DoacaoCountArgs>(
      args?: Subset<T, DoacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoacaoAggregateArgs>(args: Subset<T, DoacaoAggregateArgs>): Prisma.PrismaPromise<GetDoacaoAggregateType<T>>

    /**
     * Group by Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoGroupByArgs} args - Group by arguments.
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
      T extends DoacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoacaoGroupByArgs['orderBy'] }
        : { orderBy?: DoacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DoacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doacao model
   */
  readonly fields: DoacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensDoadores<T extends Doacao$itensDoadoresArgs<ExtArgs> = {}>(args?: Subset<T, Doacao$itensDoadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doacao model
   */
  interface DoacaoFieldRefs {
    readonly id: FieldRef<"Doacao", 'String'>
    readonly nome: FieldRef<"Doacao", 'String'>
    readonly desc: FieldRef<"Doacao", 'String'>
    readonly createdAt: FieldRef<"Doacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Doacao", 'DateTime'>
    readonly createdById: FieldRef<"Doacao", 'String'>
    readonly equipeId: FieldRef<"Doacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doacao findUnique
   */
  export type DoacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findUniqueOrThrow
   */
  export type DoacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findFirst
   */
  export type DoacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findFirstOrThrow
   */
  export type DoacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findMany
   */
  export type DoacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacaos to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao create
   */
  export type DoacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Doacao.
     */
    data: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
  }

  /**
   * Doacao createMany
   */
  export type DoacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doacao createManyAndReturn
   */
  export type DoacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao update
   */
  export type DoacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Doacao.
     */
    data: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
    /**
     * Choose, which Doacao to update.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao updateMany
   */
  export type DoacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
  }

  /**
   * Doacao updateManyAndReturn
   */
  export type DoacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao upsert
   */
  export type DoacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Doacao to update in case it exists.
     */
    where: DoacaoWhereUniqueInput
    /**
     * In case the Doacao found by the `where` argument doesn't exist, create a new Doacao with this data.
     */
    create: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
    /**
     * In case the Doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
  }

  /**
   * Doacao delete
   */
  export type DoacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter which Doacao to delete.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao deleteMany
   */
  export type DoacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacaos to delete
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to delete.
     */
    limit?: number
  }

  /**
   * Doacao.itensDoadores
   */
  export type Doacao$itensDoadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    where?: ItemSendoDoadoWhereInput
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    cursor?: ItemSendoDoadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemSendoDoadoScalarFieldEnum | ItemSendoDoadoScalarFieldEnum[]
  }

  /**
   * Doacao without action
   */
  export type DoacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
  }


  /**
   * Model ItemSendoDoado
   */

  export type AggregateItemSendoDoado = {
    _count: ItemSendoDoadoCountAggregateOutputType | null
    _avg: ItemSendoDoadoAvgAggregateOutputType | null
    _sum: ItemSendoDoadoSumAggregateOutputType | null
    _min: ItemSendoDoadoMinAggregateOutputType | null
    _max: ItemSendoDoadoMaxAggregateOutputType | null
  }

  export type ItemSendoDoadoAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type ItemSendoDoadoSumAggregateOutputType = {
    quantidade: number | null
  }

  export type ItemSendoDoadoMinAggregateOutputType = {
    id: string | null
    quantidade: number | null
    doacaoId: string | null
    itemId: string | null
  }

  export type ItemSendoDoadoMaxAggregateOutputType = {
    id: string | null
    quantidade: number | null
    doacaoId: string | null
    itemId: string | null
  }

  export type ItemSendoDoadoCountAggregateOutputType = {
    id: number
    quantidade: number
    doacaoId: number
    itemId: number
    _all: number
  }


  export type ItemSendoDoadoAvgAggregateInputType = {
    quantidade?: true
  }

  export type ItemSendoDoadoSumAggregateInputType = {
    quantidade?: true
  }

  export type ItemSendoDoadoMinAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemSendoDoadoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemSendoDoadoCountAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
    _all?: true
  }

  export type ItemSendoDoadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSendoDoado to aggregate.
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSendoDoados to fetch.
     */
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemSendoDoadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSendoDoados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSendoDoados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSendoDoados
    **/
    _count?: true | ItemSendoDoadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemSendoDoadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSendoDoadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemSendoDoadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemSendoDoadoMaxAggregateInputType
  }

  export type GetItemSendoDoadoAggregateType<T extends ItemSendoDoadoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSendoDoado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSendoDoado[P]>
      : GetScalarType<T[P], AggregateItemSendoDoado[P]>
  }




  export type ItemSendoDoadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSendoDoadoWhereInput
    orderBy?: ItemSendoDoadoOrderByWithAggregationInput | ItemSendoDoadoOrderByWithAggregationInput[]
    by: ItemSendoDoadoScalarFieldEnum[] | ItemSendoDoadoScalarFieldEnum
    having?: ItemSendoDoadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemSendoDoadoCountAggregateInputType | true
    _avg?: ItemSendoDoadoAvgAggregateInputType
    _sum?: ItemSendoDoadoSumAggregateInputType
    _min?: ItemSendoDoadoMinAggregateInputType
    _max?: ItemSendoDoadoMaxAggregateInputType
  }

  export type ItemSendoDoadoGroupByOutputType = {
    id: string
    quantidade: number
    doacaoId: string
    itemId: string
    _count: ItemSendoDoadoCountAggregateOutputType | null
    _avg: ItemSendoDoadoAvgAggregateOutputType | null
    _sum: ItemSendoDoadoSumAggregateOutputType | null
    _min: ItemSendoDoadoMinAggregateOutputType | null
    _max: ItemSendoDoadoMaxAggregateOutputType | null
  }

  type GetItemSendoDoadoGroupByPayload<T extends ItemSendoDoadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemSendoDoadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemSendoDoadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemSendoDoadoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemSendoDoadoGroupByOutputType[P]>
        }
      >
    >


  export type ItemSendoDoadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSendoDoado"]>

  export type ItemSendoDoadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSendoDoado"]>

  export type ItemSendoDoadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSendoDoado"]>

  export type ItemSendoDoadoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
  }

  export type ItemSendoDoadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "doacaoId" | "itemId", ExtArgs["result"]["itemSendoDoado"]>
  export type ItemSendoDoadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemSendoDoadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemSendoDoadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemSendoDoadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemSendoDoado"
    objects: {
      doacao: Prisma.$DoacaoPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantidade: number
      doacaoId: string
      itemId: string
    }, ExtArgs["result"]["itemSendoDoado"]>
    composites: {}
  }

  type ItemSendoDoadoGetPayload<S extends boolean | null | undefined | ItemSendoDoadoDefaultArgs> = $Result.GetResult<Prisma.$ItemSendoDoadoPayload, S>

  type ItemSendoDoadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemSendoDoadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemSendoDoadoCountAggregateInputType | true
    }

  export interface ItemSendoDoadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemSendoDoado'], meta: { name: 'ItemSendoDoado' } }
    /**
     * Find zero or one ItemSendoDoado that matches the filter.
     * @param {ItemSendoDoadoFindUniqueArgs} args - Arguments to find a ItemSendoDoado
     * @example
     * // Get one ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemSendoDoadoFindUniqueArgs>(args: SelectSubset<T, ItemSendoDoadoFindUniqueArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemSendoDoado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemSendoDoadoFindUniqueOrThrowArgs} args - Arguments to find a ItemSendoDoado
     * @example
     * // Get one ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemSendoDoadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemSendoDoadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSendoDoado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoFindFirstArgs} args - Arguments to find a ItemSendoDoado
     * @example
     * // Get one ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemSendoDoadoFindFirstArgs>(args?: SelectSubset<T, ItemSendoDoadoFindFirstArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSendoDoado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoFindFirstOrThrowArgs} args - Arguments to find a ItemSendoDoado
     * @example
     * // Get one ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemSendoDoadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemSendoDoadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemSendoDoados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSendoDoados
     * const itemSendoDoados = await prisma.itemSendoDoado.findMany()
     * 
     * // Get first 10 ItemSendoDoados
     * const itemSendoDoados = await prisma.itemSendoDoado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemSendoDoadoWithIdOnly = await prisma.itemSendoDoado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemSendoDoadoFindManyArgs>(args?: SelectSubset<T, ItemSendoDoadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemSendoDoado.
     * @param {ItemSendoDoadoCreateArgs} args - Arguments to create a ItemSendoDoado.
     * @example
     * // Create one ItemSendoDoado
     * const ItemSendoDoado = await prisma.itemSendoDoado.create({
     *   data: {
     *     // ... data to create a ItemSendoDoado
     *   }
     * })
     * 
     */
    create<T extends ItemSendoDoadoCreateArgs>(args: SelectSubset<T, ItemSendoDoadoCreateArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemSendoDoados.
     * @param {ItemSendoDoadoCreateManyArgs} args - Arguments to create many ItemSendoDoados.
     * @example
     * // Create many ItemSendoDoados
     * const itemSendoDoado = await prisma.itemSendoDoado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemSendoDoadoCreateManyArgs>(args?: SelectSubset<T, ItemSendoDoadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemSendoDoados and returns the data saved in the database.
     * @param {ItemSendoDoadoCreateManyAndReturnArgs} args - Arguments to create many ItemSendoDoados.
     * @example
     * // Create many ItemSendoDoados
     * const itemSendoDoado = await prisma.itemSendoDoado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemSendoDoados and only return the `id`
     * const itemSendoDoadoWithIdOnly = await prisma.itemSendoDoado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemSendoDoadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemSendoDoadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemSendoDoado.
     * @param {ItemSendoDoadoDeleteArgs} args - Arguments to delete one ItemSendoDoado.
     * @example
     * // Delete one ItemSendoDoado
     * const ItemSendoDoado = await prisma.itemSendoDoado.delete({
     *   where: {
     *     // ... filter to delete one ItemSendoDoado
     *   }
     * })
     * 
     */
    delete<T extends ItemSendoDoadoDeleteArgs>(args: SelectSubset<T, ItemSendoDoadoDeleteArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemSendoDoado.
     * @param {ItemSendoDoadoUpdateArgs} args - Arguments to update one ItemSendoDoado.
     * @example
     * // Update one ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemSendoDoadoUpdateArgs>(args: SelectSubset<T, ItemSendoDoadoUpdateArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemSendoDoados.
     * @param {ItemSendoDoadoDeleteManyArgs} args - Arguments to filter ItemSendoDoados to delete.
     * @example
     * // Delete a few ItemSendoDoados
     * const { count } = await prisma.itemSendoDoado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemSendoDoadoDeleteManyArgs>(args?: SelectSubset<T, ItemSendoDoadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSendoDoados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSendoDoados
     * const itemSendoDoado = await prisma.itemSendoDoado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemSendoDoadoUpdateManyArgs>(args: SelectSubset<T, ItemSendoDoadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSendoDoados and returns the data updated in the database.
     * @param {ItemSendoDoadoUpdateManyAndReturnArgs} args - Arguments to update many ItemSendoDoados.
     * @example
     * // Update many ItemSendoDoados
     * const itemSendoDoado = await prisma.itemSendoDoado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemSendoDoados and only return the `id`
     * const itemSendoDoadoWithIdOnly = await prisma.itemSendoDoado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemSendoDoadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemSendoDoadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemSendoDoado.
     * @param {ItemSendoDoadoUpsertArgs} args - Arguments to update or create a ItemSendoDoado.
     * @example
     * // Update or create a ItemSendoDoado
     * const itemSendoDoado = await prisma.itemSendoDoado.upsert({
     *   create: {
     *     // ... data to create a ItemSendoDoado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSendoDoado we want to update
     *   }
     * })
     */
    upsert<T extends ItemSendoDoadoUpsertArgs>(args: SelectSubset<T, ItemSendoDoadoUpsertArgs<ExtArgs>>): Prisma__ItemSendoDoadoClient<$Result.GetResult<Prisma.$ItemSendoDoadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemSendoDoados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoCountArgs} args - Arguments to filter ItemSendoDoados to count.
     * @example
     * // Count the number of ItemSendoDoados
     * const count = await prisma.itemSendoDoado.count({
     *   where: {
     *     // ... the filter for the ItemSendoDoados we want to count
     *   }
     * })
    **/
    count<T extends ItemSendoDoadoCountArgs>(
      args?: Subset<T, ItemSendoDoadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemSendoDoadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSendoDoado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemSendoDoadoAggregateArgs>(args: Subset<T, ItemSendoDoadoAggregateArgs>): Prisma.PrismaPromise<GetItemSendoDoadoAggregateType<T>>

    /**
     * Group by ItemSendoDoado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSendoDoadoGroupByArgs} args - Group by arguments.
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
      T extends ItemSendoDoadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemSendoDoadoGroupByArgs['orderBy'] }
        : { orderBy?: ItemSendoDoadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemSendoDoadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemSendoDoadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemSendoDoado model
   */
  readonly fields: ItemSendoDoadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSendoDoado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemSendoDoadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacao<T extends DoacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoacaoDefaultArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemSendoDoado model
   */
  interface ItemSendoDoadoFieldRefs {
    readonly id: FieldRef<"ItemSendoDoado", 'String'>
    readonly quantidade: FieldRef<"ItemSendoDoado", 'Int'>
    readonly doacaoId: FieldRef<"ItemSendoDoado", 'String'>
    readonly itemId: FieldRef<"ItemSendoDoado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemSendoDoado findUnique
   */
  export type ItemSendoDoadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSendoDoado to fetch.
     */
    where: ItemSendoDoadoWhereUniqueInput
  }

  /**
   * ItemSendoDoado findUniqueOrThrow
   */
  export type ItemSendoDoadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSendoDoado to fetch.
     */
    where: ItemSendoDoadoWhereUniqueInput
  }

  /**
   * ItemSendoDoado findFirst
   */
  export type ItemSendoDoadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSendoDoado to fetch.
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSendoDoados to fetch.
     */
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSendoDoados.
     */
    cursor?: ItemSendoDoadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSendoDoados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSendoDoados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSendoDoados.
     */
    distinct?: ItemSendoDoadoScalarFieldEnum | ItemSendoDoadoScalarFieldEnum[]
  }

  /**
   * ItemSendoDoado findFirstOrThrow
   */
  export type ItemSendoDoadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSendoDoado to fetch.
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSendoDoados to fetch.
     */
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSendoDoados.
     */
    cursor?: ItemSendoDoadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSendoDoados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSendoDoados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSendoDoados.
     */
    distinct?: ItemSendoDoadoScalarFieldEnum | ItemSendoDoadoScalarFieldEnum[]
  }

  /**
   * ItemSendoDoado findMany
   */
  export type ItemSendoDoadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSendoDoados to fetch.
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSendoDoados to fetch.
     */
    orderBy?: ItemSendoDoadoOrderByWithRelationInput | ItemSendoDoadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSendoDoados.
     */
    cursor?: ItemSendoDoadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSendoDoados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSendoDoados.
     */
    skip?: number
    distinct?: ItemSendoDoadoScalarFieldEnum | ItemSendoDoadoScalarFieldEnum[]
  }

  /**
   * ItemSendoDoado create
   */
  export type ItemSendoDoadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemSendoDoado.
     */
    data: XOR<ItemSendoDoadoCreateInput, ItemSendoDoadoUncheckedCreateInput>
  }

  /**
   * ItemSendoDoado createMany
   */
  export type ItemSendoDoadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemSendoDoados.
     */
    data: ItemSendoDoadoCreateManyInput | ItemSendoDoadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemSendoDoado createManyAndReturn
   */
  export type ItemSendoDoadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemSendoDoados.
     */
    data: ItemSendoDoadoCreateManyInput | ItemSendoDoadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSendoDoado update
   */
  export type ItemSendoDoadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemSendoDoado.
     */
    data: XOR<ItemSendoDoadoUpdateInput, ItemSendoDoadoUncheckedUpdateInput>
    /**
     * Choose, which ItemSendoDoado to update.
     */
    where: ItemSendoDoadoWhereUniqueInput
  }

  /**
   * ItemSendoDoado updateMany
   */
  export type ItemSendoDoadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemSendoDoados.
     */
    data: XOR<ItemSendoDoadoUpdateManyMutationInput, ItemSendoDoadoUncheckedUpdateManyInput>
    /**
     * Filter which ItemSendoDoados to update
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * Limit how many ItemSendoDoados to update.
     */
    limit?: number
  }

  /**
   * ItemSendoDoado updateManyAndReturn
   */
  export type ItemSendoDoadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * The data used to update ItemSendoDoados.
     */
    data: XOR<ItemSendoDoadoUpdateManyMutationInput, ItemSendoDoadoUncheckedUpdateManyInput>
    /**
     * Filter which ItemSendoDoados to update
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * Limit how many ItemSendoDoados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSendoDoado upsert
   */
  export type ItemSendoDoadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemSendoDoado to update in case it exists.
     */
    where: ItemSendoDoadoWhereUniqueInput
    /**
     * In case the ItemSendoDoado found by the `where` argument doesn't exist, create a new ItemSendoDoado with this data.
     */
    create: XOR<ItemSendoDoadoCreateInput, ItemSendoDoadoUncheckedCreateInput>
    /**
     * In case the ItemSendoDoado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemSendoDoadoUpdateInput, ItemSendoDoadoUncheckedUpdateInput>
  }

  /**
   * ItemSendoDoado delete
   */
  export type ItemSendoDoadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
    /**
     * Filter which ItemSendoDoado to delete.
     */
    where: ItemSendoDoadoWhereUniqueInput
  }

  /**
   * ItemSendoDoado deleteMany
   */
  export type ItemSendoDoadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSendoDoados to delete
     */
    where?: ItemSendoDoadoWhereInput
    /**
     * Limit how many ItemSendoDoados to delete.
     */
    limit?: number
  }

  /**
   * ItemSendoDoado without action
   */
  export type ItemSendoDoadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSendoDoado
     */
    select?: ItemSendoDoadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSendoDoado
     */
    omit?: ItemSendoDoadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSendoDoadoInclude<ExtArgs> | null
  }


  /**
   * Model Prova_Gincana
   */

  export type AggregateProva_Gincana = {
    _count: Prova_GincanaCountAggregateOutputType | null
    _avg: Prova_GincanaAvgAggregateOutputType | null
    _sum: Prova_GincanaSumAggregateOutputType | null
    _min: Prova_GincanaMinAggregateOutputType | null
    _max: Prova_GincanaMaxAggregateOutputType | null
  }

  export type Prova_GincanaAvgAggregateOutputType = {
    pontos: number | null
  }

  export type Prova_GincanaSumAggregateOutputType = {
    pontos: number | null
  }

  export type Prova_GincanaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    desc: string | null
    pontos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    equipeId: string | null
  }

  export type Prova_GincanaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    desc: string | null
    pontos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    equipeId: string | null
  }

  export type Prova_GincanaCountAggregateOutputType = {
    id: number
    nome: number
    desc: number
    pontos: number
    createdAt: number
    updatedAt: number
    createdById: number
    equipeId: number
    _all: number
  }


  export type Prova_GincanaAvgAggregateInputType = {
    pontos?: true
  }

  export type Prova_GincanaSumAggregateInputType = {
    pontos?: true
  }

  export type Prova_GincanaMinAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
  }

  export type Prova_GincanaMaxAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
  }

  export type Prova_GincanaCountAggregateInputType = {
    id?: true
    nome?: true
    desc?: true
    pontos?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    equipeId?: true
    _all?: true
  }

  export type Prova_GincanaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova_Gincana to aggregate.
     */
    where?: Prova_GincanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova_Gincanas to fetch.
     */
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Prova_GincanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova_Gincanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova_Gincanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prova_Gincanas
    **/
    _count?: true | Prova_GincanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prova_GincanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prova_GincanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prova_GincanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prova_GincanaMaxAggregateInputType
  }

  export type GetProva_GincanaAggregateType<T extends Prova_GincanaAggregateArgs> = {
        [P in keyof T & keyof AggregateProva_Gincana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProva_Gincana[P]>
      : GetScalarType<T[P], AggregateProva_Gincana[P]>
  }




  export type Prova_GincanaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prova_GincanaWhereInput
    orderBy?: Prova_GincanaOrderByWithAggregationInput | Prova_GincanaOrderByWithAggregationInput[]
    by: Prova_GincanaScalarFieldEnum[] | Prova_GincanaScalarFieldEnum
    having?: Prova_GincanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prova_GincanaCountAggregateInputType | true
    _avg?: Prova_GincanaAvgAggregateInputType
    _sum?: Prova_GincanaSumAggregateInputType
    _min?: Prova_GincanaMinAggregateInputType
    _max?: Prova_GincanaMaxAggregateInputType
  }

  export type Prova_GincanaGroupByOutputType = {
    id: string
    nome: string
    desc: string
    pontos: number
    createdAt: Date
    updatedAt: Date
    createdById: string
    equipeId: string | null
    _count: Prova_GincanaCountAggregateOutputType | null
    _avg: Prova_GincanaAvgAggregateOutputType | null
    _sum: Prova_GincanaSumAggregateOutputType | null
    _min: Prova_GincanaMinAggregateOutputType | null
    _max: Prova_GincanaMaxAggregateOutputType | null
  }

  type GetProva_GincanaGroupByPayload<T extends Prova_GincanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prova_GincanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prova_GincanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prova_GincanaGroupByOutputType[P]>
            : GetScalarType<T[P], Prova_GincanaGroupByOutputType[P]>
        }
      >
    >


  export type Prova_GincanaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["prova_Gincana"]>

  export type Prova_GincanaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["prova_Gincana"]>

  export type Prova_GincanaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["prova_Gincana"]>

  export type Prova_GincanaSelectScalar = {
    id?: boolean
    nome?: boolean
    desc?: boolean
    pontos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    equipeId?: boolean
  }

  export type Prova_GincanaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "desc" | "pontos" | "createdAt" | "updatedAt" | "createdById" | "equipeId", ExtArgs["result"]["prova_Gincana"]>
  export type Prova_GincanaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }
  export type Prova_GincanaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }
  export type Prova_GincanaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    equipe?: boolean | Prova_Gincana$equipeArgs<ExtArgs>
  }

  export type $Prova_GincanaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prova_Gincana"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      equipe: Prisma.$EquipePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      desc: string
      pontos: number
      createdAt: Date
      updatedAt: Date
      createdById: string
      equipeId: string | null
    }, ExtArgs["result"]["prova_Gincana"]>
    composites: {}
  }

  type Prova_GincanaGetPayload<S extends boolean | null | undefined | Prova_GincanaDefaultArgs> = $Result.GetResult<Prisma.$Prova_GincanaPayload, S>

  type Prova_GincanaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Prova_GincanaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prova_GincanaCountAggregateInputType | true
    }

  export interface Prova_GincanaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prova_Gincana'], meta: { name: 'Prova_Gincana' } }
    /**
     * Find zero or one Prova_Gincana that matches the filter.
     * @param {Prova_GincanaFindUniqueArgs} args - Arguments to find a Prova_Gincana
     * @example
     * // Get one Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Prova_GincanaFindUniqueArgs>(args: SelectSubset<T, Prova_GincanaFindUniqueArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prova_Gincana that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Prova_GincanaFindUniqueOrThrowArgs} args - Arguments to find a Prova_Gincana
     * @example
     * // Get one Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Prova_GincanaFindUniqueOrThrowArgs>(args: SelectSubset<T, Prova_GincanaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prova_Gincana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaFindFirstArgs} args - Arguments to find a Prova_Gincana
     * @example
     * // Get one Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Prova_GincanaFindFirstArgs>(args?: SelectSubset<T, Prova_GincanaFindFirstArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prova_Gincana that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaFindFirstOrThrowArgs} args - Arguments to find a Prova_Gincana
     * @example
     * // Get one Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Prova_GincanaFindFirstOrThrowArgs>(args?: SelectSubset<T, Prova_GincanaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prova_Gincanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prova_Gincanas
     * const prova_Gincanas = await prisma.prova_Gincana.findMany()
     * 
     * // Get first 10 Prova_Gincanas
     * const prova_Gincanas = await prisma.prova_Gincana.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prova_GincanaWithIdOnly = await prisma.prova_Gincana.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Prova_GincanaFindManyArgs>(args?: SelectSubset<T, Prova_GincanaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prova_Gincana.
     * @param {Prova_GincanaCreateArgs} args - Arguments to create a Prova_Gincana.
     * @example
     * // Create one Prova_Gincana
     * const Prova_Gincana = await prisma.prova_Gincana.create({
     *   data: {
     *     // ... data to create a Prova_Gincana
     *   }
     * })
     * 
     */
    create<T extends Prova_GincanaCreateArgs>(args: SelectSubset<T, Prova_GincanaCreateArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prova_Gincanas.
     * @param {Prova_GincanaCreateManyArgs} args - Arguments to create many Prova_Gincanas.
     * @example
     * // Create many Prova_Gincanas
     * const prova_Gincana = await prisma.prova_Gincana.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Prova_GincanaCreateManyArgs>(args?: SelectSubset<T, Prova_GincanaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prova_Gincanas and returns the data saved in the database.
     * @param {Prova_GincanaCreateManyAndReturnArgs} args - Arguments to create many Prova_Gincanas.
     * @example
     * // Create many Prova_Gincanas
     * const prova_Gincana = await prisma.prova_Gincana.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prova_Gincanas and only return the `id`
     * const prova_GincanaWithIdOnly = await prisma.prova_Gincana.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Prova_GincanaCreateManyAndReturnArgs>(args?: SelectSubset<T, Prova_GincanaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prova_Gincana.
     * @param {Prova_GincanaDeleteArgs} args - Arguments to delete one Prova_Gincana.
     * @example
     * // Delete one Prova_Gincana
     * const Prova_Gincana = await prisma.prova_Gincana.delete({
     *   where: {
     *     // ... filter to delete one Prova_Gincana
     *   }
     * })
     * 
     */
    delete<T extends Prova_GincanaDeleteArgs>(args: SelectSubset<T, Prova_GincanaDeleteArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prova_Gincana.
     * @param {Prova_GincanaUpdateArgs} args - Arguments to update one Prova_Gincana.
     * @example
     * // Update one Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Prova_GincanaUpdateArgs>(args: SelectSubset<T, Prova_GincanaUpdateArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prova_Gincanas.
     * @param {Prova_GincanaDeleteManyArgs} args - Arguments to filter Prova_Gincanas to delete.
     * @example
     * // Delete a few Prova_Gincanas
     * const { count } = await prisma.prova_Gincana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Prova_GincanaDeleteManyArgs>(args?: SelectSubset<T, Prova_GincanaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prova_Gincanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prova_Gincanas
     * const prova_Gincana = await prisma.prova_Gincana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Prova_GincanaUpdateManyArgs>(args: SelectSubset<T, Prova_GincanaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prova_Gincanas and returns the data updated in the database.
     * @param {Prova_GincanaUpdateManyAndReturnArgs} args - Arguments to update many Prova_Gincanas.
     * @example
     * // Update many Prova_Gincanas
     * const prova_Gincana = await prisma.prova_Gincana.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prova_Gincanas and only return the `id`
     * const prova_GincanaWithIdOnly = await prisma.prova_Gincana.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Prova_GincanaUpdateManyAndReturnArgs>(args: SelectSubset<T, Prova_GincanaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prova_Gincana.
     * @param {Prova_GincanaUpsertArgs} args - Arguments to update or create a Prova_Gincana.
     * @example
     * // Update or create a Prova_Gincana
     * const prova_Gincana = await prisma.prova_Gincana.upsert({
     *   create: {
     *     // ... data to create a Prova_Gincana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prova_Gincana we want to update
     *   }
     * })
     */
    upsert<T extends Prova_GincanaUpsertArgs>(args: SelectSubset<T, Prova_GincanaUpsertArgs<ExtArgs>>): Prisma__Prova_GincanaClient<$Result.GetResult<Prisma.$Prova_GincanaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prova_Gincanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaCountArgs} args - Arguments to filter Prova_Gincanas to count.
     * @example
     * // Count the number of Prova_Gincanas
     * const count = await prisma.prova_Gincana.count({
     *   where: {
     *     // ... the filter for the Prova_Gincanas we want to count
     *   }
     * })
    **/
    count<T extends Prova_GincanaCountArgs>(
      args?: Subset<T, Prova_GincanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prova_GincanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prova_Gincana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Prova_GincanaAggregateArgs>(args: Subset<T, Prova_GincanaAggregateArgs>): Prisma.PrismaPromise<GetProva_GincanaAggregateType<T>>

    /**
     * Group by Prova_Gincana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prova_GincanaGroupByArgs} args - Group by arguments.
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
      T extends Prova_GincanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Prova_GincanaGroupByArgs['orderBy'] }
        : { orderBy?: Prova_GincanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Prova_GincanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProva_GincanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prova_Gincana model
   */
  readonly fields: Prova_GincanaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prova_Gincana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Prova_GincanaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipe<T extends Prova_Gincana$equipeArgs<ExtArgs> = {}>(args?: Subset<T, Prova_Gincana$equipeArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prova_Gincana model
   */
  interface Prova_GincanaFieldRefs {
    readonly id: FieldRef<"Prova_Gincana", 'String'>
    readonly nome: FieldRef<"Prova_Gincana", 'String'>
    readonly desc: FieldRef<"Prova_Gincana", 'String'>
    readonly pontos: FieldRef<"Prova_Gincana", 'Int'>
    readonly createdAt: FieldRef<"Prova_Gincana", 'DateTime'>
    readonly updatedAt: FieldRef<"Prova_Gincana", 'DateTime'>
    readonly createdById: FieldRef<"Prova_Gincana", 'String'>
    readonly equipeId: FieldRef<"Prova_Gincana", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prova_Gincana findUnique
   */
  export type Prova_GincanaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter, which Prova_Gincana to fetch.
     */
    where: Prova_GincanaWhereUniqueInput
  }

  /**
   * Prova_Gincana findUniqueOrThrow
   */
  export type Prova_GincanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter, which Prova_Gincana to fetch.
     */
    where: Prova_GincanaWhereUniqueInput
  }

  /**
   * Prova_Gincana findFirst
   */
  export type Prova_GincanaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter, which Prova_Gincana to fetch.
     */
    where?: Prova_GincanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova_Gincanas to fetch.
     */
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova_Gincanas.
     */
    cursor?: Prova_GincanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova_Gincanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova_Gincanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova_Gincanas.
     */
    distinct?: Prova_GincanaScalarFieldEnum | Prova_GincanaScalarFieldEnum[]
  }

  /**
   * Prova_Gincana findFirstOrThrow
   */
  export type Prova_GincanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter, which Prova_Gincana to fetch.
     */
    where?: Prova_GincanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova_Gincanas to fetch.
     */
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova_Gincanas.
     */
    cursor?: Prova_GincanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova_Gincanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova_Gincanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova_Gincanas.
     */
    distinct?: Prova_GincanaScalarFieldEnum | Prova_GincanaScalarFieldEnum[]
  }

  /**
   * Prova_Gincana findMany
   */
  export type Prova_GincanaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter, which Prova_Gincanas to fetch.
     */
    where?: Prova_GincanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova_Gincanas to fetch.
     */
    orderBy?: Prova_GincanaOrderByWithRelationInput | Prova_GincanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prova_Gincanas.
     */
    cursor?: Prova_GincanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova_Gincanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova_Gincanas.
     */
    skip?: number
    distinct?: Prova_GincanaScalarFieldEnum | Prova_GincanaScalarFieldEnum[]
  }

  /**
   * Prova_Gincana create
   */
  export type Prova_GincanaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * The data needed to create a Prova_Gincana.
     */
    data: XOR<Prova_GincanaCreateInput, Prova_GincanaUncheckedCreateInput>
  }

  /**
   * Prova_Gincana createMany
   */
  export type Prova_GincanaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prova_Gincanas.
     */
    data: Prova_GincanaCreateManyInput | Prova_GincanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prova_Gincana createManyAndReturn
   */
  export type Prova_GincanaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * The data used to create many Prova_Gincanas.
     */
    data: Prova_GincanaCreateManyInput | Prova_GincanaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prova_Gincana update
   */
  export type Prova_GincanaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * The data needed to update a Prova_Gincana.
     */
    data: XOR<Prova_GincanaUpdateInput, Prova_GincanaUncheckedUpdateInput>
    /**
     * Choose, which Prova_Gincana to update.
     */
    where: Prova_GincanaWhereUniqueInput
  }

  /**
   * Prova_Gincana updateMany
   */
  export type Prova_GincanaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prova_Gincanas.
     */
    data: XOR<Prova_GincanaUpdateManyMutationInput, Prova_GincanaUncheckedUpdateManyInput>
    /**
     * Filter which Prova_Gincanas to update
     */
    where?: Prova_GincanaWhereInput
    /**
     * Limit how many Prova_Gincanas to update.
     */
    limit?: number
  }

  /**
   * Prova_Gincana updateManyAndReturn
   */
  export type Prova_GincanaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * The data used to update Prova_Gincanas.
     */
    data: XOR<Prova_GincanaUpdateManyMutationInput, Prova_GincanaUncheckedUpdateManyInput>
    /**
     * Filter which Prova_Gincanas to update
     */
    where?: Prova_GincanaWhereInput
    /**
     * Limit how many Prova_Gincanas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prova_Gincana upsert
   */
  export type Prova_GincanaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * The filter to search for the Prova_Gincana to update in case it exists.
     */
    where: Prova_GincanaWhereUniqueInput
    /**
     * In case the Prova_Gincana found by the `where` argument doesn't exist, create a new Prova_Gincana with this data.
     */
    create: XOR<Prova_GincanaCreateInput, Prova_GincanaUncheckedCreateInput>
    /**
     * In case the Prova_Gincana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Prova_GincanaUpdateInput, Prova_GincanaUncheckedUpdateInput>
  }

  /**
   * Prova_Gincana delete
   */
  export type Prova_GincanaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
    /**
     * Filter which Prova_Gincana to delete.
     */
    where: Prova_GincanaWhereUniqueInput
  }

  /**
   * Prova_Gincana deleteMany
   */
  export type Prova_GincanaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova_Gincanas to delete
     */
    where?: Prova_GincanaWhereInput
    /**
     * Limit how many Prova_Gincanas to delete.
     */
    limit?: number
  }

  /**
   * Prova_Gincana.equipe
   */
  export type Prova_Gincana$equipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    where?: EquipeWhereInput
  }

  /**
   * Prova_Gincana without action
   */
  export type Prova_GincanaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova_Gincana
     */
    select?: Prova_GincanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova_Gincana
     */
    omit?: Prova_GincanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prova_GincanaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    pontos: 'pontos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const DoacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    equipeId: 'equipeId'
  };

  export type DoacaoScalarFieldEnum = (typeof DoacaoScalarFieldEnum)[keyof typeof DoacaoScalarFieldEnum]


  export const ItemSendoDoadoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    doacaoId: 'doacaoId',
    itemId: 'itemId'
  };

  export type ItemSendoDoadoScalarFieldEnum = (typeof ItemSendoDoadoScalarFieldEnum)[keyof typeof ItemSendoDoadoScalarFieldEnum]


  export const Prova_GincanaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    desc: 'desc',
    pontos: 'pontos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    equipeId: 'equipeId'
  };

  export type Prova_GincanaScalarFieldEnum = (typeof Prova_GincanaScalarFieldEnum)[keyof typeof Prova_GincanaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    equipes?: EquipeListRelationFilter
    items?: ItemListRelationFilter
    doacaos?: DoacaoListRelationFilter
    provaGincanas?: Prova_GincanaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    equipes?: EquipeOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    doacaos?: DoacaoOrderByRelationAggregateInput
    provaGincanas?: Prova_GincanaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    equipes?: EquipeListRelationFilter
    items?: ItemListRelationFilter
    doacaos?: DoacaoListRelationFilter
    provaGincanas?: Prova_GincanaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: StringFilter<"Equipe"> | string
    name?: StringFilter<"Equipe"> | string
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeFilter<"Equipe"> | Date | string
    createdById?: StringFilter<"Equipe"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    doacoes?: DoacaoListRelationFilter
    provaGincanas?: Prova_GincanaListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    doacoes?: DoacaoOrderByRelationAggregateInput
    provaGincanas?: Prova_GincanaOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    name?: StringFilter<"Equipe"> | string
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeFilter<"Equipe"> | Date | string
    createdById?: StringFilter<"Equipe"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    doacoes?: DoacaoListRelationFilter
    provaGincanas?: Prova_GincanaListRelationFilter
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    OR?: EquipeScalarWhereWithAggregatesInput[]
    NOT?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipe"> | string
    name?: StringWithAggregatesFilter<"Equipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipe"> | Date | string
    createdById?: StringWithAggregatesFilter<"Equipe"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    desc?: StringNullableFilter<"Item"> | string | null
    pontos?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    createdById?: StringFilter<"Item"> | string
    doacoes?: ItemSendoDoadoListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    doacoes?: ItemSendoDoadoOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    desc?: StringNullableFilter<"Item"> | string | null
    pontos?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    createdById?: StringFilter<"Item"> | string
    doacoes?: ItemSendoDoadoListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    desc?: StringNullableWithAggregatesFilter<"Item"> | string | null
    pontos?: IntWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    createdById?: StringWithAggregatesFilter<"Item"> | string
  }

  export type DoacaoWhereInput = {
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    id?: StringFilter<"Doacao"> | string
    nome?: StringFilter<"Doacao"> | string
    desc?: StringFilter<"Doacao"> | string
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
    createdById?: StringFilter<"Doacao"> | string
    equipeId?: StringFilter<"Doacao"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    itensDoadores?: ItemSendoDoadoListRelationFilter
  }

  export type DoacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    equipe?: EquipeOrderByWithRelationInput
    itensDoadores?: ItemSendoDoadoOrderByRelationAggregateInput
  }

  export type DoacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    nome?: StringFilter<"Doacao"> | string
    desc?: StringFilter<"Doacao"> | string
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
    createdById?: StringFilter<"Doacao"> | string
    equipeId?: StringFilter<"Doacao"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    itensDoadores?: ItemSendoDoadoListRelationFilter
  }, "id">

  export type DoacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
    _count?: DoacaoCountOrderByAggregateInput
    _max?: DoacaoMaxOrderByAggregateInput
    _min?: DoacaoMinOrderByAggregateInput
  }

  export type DoacaoScalarWhereWithAggregatesInput = {
    AND?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    OR?: DoacaoScalarWhereWithAggregatesInput[]
    NOT?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doacao"> | string
    nome?: StringWithAggregatesFilter<"Doacao"> | string
    desc?: StringWithAggregatesFilter<"Doacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
    createdById?: StringWithAggregatesFilter<"Doacao"> | string
    equipeId?: StringWithAggregatesFilter<"Doacao"> | string
  }

  export type ItemSendoDoadoWhereInput = {
    AND?: ItemSendoDoadoWhereInput | ItemSendoDoadoWhereInput[]
    OR?: ItemSendoDoadoWhereInput[]
    NOT?: ItemSendoDoadoWhereInput | ItemSendoDoadoWhereInput[]
    id?: StringFilter<"ItemSendoDoado"> | string
    quantidade?: IntFilter<"ItemSendoDoado"> | number
    doacaoId?: StringFilter<"ItemSendoDoado"> | string
    itemId?: StringFilter<"ItemSendoDoado"> | string
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemSendoDoadoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
    doacao?: DoacaoOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ItemSendoDoadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemSendoDoadoWhereInput | ItemSendoDoadoWhereInput[]
    OR?: ItemSendoDoadoWhereInput[]
    NOT?: ItemSendoDoadoWhereInput | ItemSendoDoadoWhereInput[]
    quantidade?: IntFilter<"ItemSendoDoado"> | number
    doacaoId?: StringFilter<"ItemSendoDoado"> | string
    itemId?: StringFilter<"ItemSendoDoado"> | string
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemSendoDoadoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
    _count?: ItemSendoDoadoCountOrderByAggregateInput
    _avg?: ItemSendoDoadoAvgOrderByAggregateInput
    _max?: ItemSendoDoadoMaxOrderByAggregateInput
    _min?: ItemSendoDoadoMinOrderByAggregateInput
    _sum?: ItemSendoDoadoSumOrderByAggregateInput
  }

  export type ItemSendoDoadoScalarWhereWithAggregatesInput = {
    AND?: ItemSendoDoadoScalarWhereWithAggregatesInput | ItemSendoDoadoScalarWhereWithAggregatesInput[]
    OR?: ItemSendoDoadoScalarWhereWithAggregatesInput[]
    NOT?: ItemSendoDoadoScalarWhereWithAggregatesInput | ItemSendoDoadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemSendoDoado"> | string
    quantidade?: IntWithAggregatesFilter<"ItemSendoDoado"> | number
    doacaoId?: StringWithAggregatesFilter<"ItemSendoDoado"> | string
    itemId?: StringWithAggregatesFilter<"ItemSendoDoado"> | string
  }

  export type Prova_GincanaWhereInput = {
    AND?: Prova_GincanaWhereInput | Prova_GincanaWhereInput[]
    OR?: Prova_GincanaWhereInput[]
    NOT?: Prova_GincanaWhereInput | Prova_GincanaWhereInput[]
    id?: StringFilter<"Prova_Gincana"> | string
    nome?: StringFilter<"Prova_Gincana"> | string
    desc?: StringFilter<"Prova_Gincana"> | string
    pontos?: IntFilter<"Prova_Gincana"> | number
    createdAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    updatedAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    createdById?: StringFilter<"Prova_Gincana"> | string
    equipeId?: StringNullableFilter<"Prova_Gincana"> | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    equipe?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }

  export type Prova_GincanaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    equipe?: EquipeOrderByWithRelationInput
  }

  export type Prova_GincanaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Prova_GincanaWhereInput | Prova_GincanaWhereInput[]
    OR?: Prova_GincanaWhereInput[]
    NOT?: Prova_GincanaWhereInput | Prova_GincanaWhereInput[]
    nome?: StringFilter<"Prova_Gincana"> | string
    desc?: StringFilter<"Prova_Gincana"> | string
    pontos?: IntFilter<"Prova_Gincana"> | number
    createdAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    updatedAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    createdById?: StringFilter<"Prova_Gincana"> | string
    equipeId?: StringNullableFilter<"Prova_Gincana"> | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    equipe?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }, "id">

  export type Prova_GincanaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrderInput | SortOrder
    _count?: Prova_GincanaCountOrderByAggregateInput
    _avg?: Prova_GincanaAvgOrderByAggregateInput
    _max?: Prova_GincanaMaxOrderByAggregateInput
    _min?: Prova_GincanaMinOrderByAggregateInput
    _sum?: Prova_GincanaSumOrderByAggregateInput
  }

  export type Prova_GincanaScalarWhereWithAggregatesInput = {
    AND?: Prova_GincanaScalarWhereWithAggregatesInput | Prova_GincanaScalarWhereWithAggregatesInput[]
    OR?: Prova_GincanaScalarWhereWithAggregatesInput[]
    NOT?: Prova_GincanaScalarWhereWithAggregatesInput | Prova_GincanaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prova_Gincana"> | string
    nome?: StringWithAggregatesFilter<"Prova_Gincana"> | string
    desc?: StringWithAggregatesFilter<"Prova_Gincana"> | string
    pontos?: IntWithAggregatesFilter<"Prova_Gincana"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Prova_Gincana"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prova_Gincana"> | Date | string
    createdById?: StringWithAggregatesFilter<"Prova_Gincana"> | string
    equipeId?: StringNullableWithAggregatesFilter<"Prova_Gincana"> | string | null
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutEquipesInput
    doacoes?: DoacaoCreateNestedManyWithoutEquipeInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutEquipeInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutEquipesNestedInput
    doacoes?: DoacaoUpdateManyWithoutEquipeNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutEquipeNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type EquipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: ItemSendoDoadoCreateNestedManyWithoutItemInput
    createdBy: UserCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    doacoes?: ItemSendoDoadoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: ItemSendoDoadoUpdateManyWithoutItemNestedInput
    createdBy?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    doacoes?: ItemSendoDoadoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DoacaoCreateInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDoacaosInput
    equipe: EquipeCreateNestedOneWithoutDoacoesInput
    itensDoadores?: ItemSendoDoadoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    equipeId: string
    itensDoadores?: ItemSendoDoadoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDoacaosNestedInput
    equipe?: EquipeUpdateOneRequiredWithoutDoacoesNestedInput
    itensDoadores?: ItemSendoDoadoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    equipeId?: StringFieldUpdateOperationsInput | string
    itensDoadores?: ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoCreateManyInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    equipeId: string
  }

  export type DoacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    equipeId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoCreateInput = {
    id?: string
    quantidade?: number
    doacao: DoacaoCreateNestedOneWithoutItensDoadoresInput
    item: ItemCreateNestedOneWithoutDoacoesInput
  }

  export type ItemSendoDoadoUncheckedCreateInput = {
    id?: string
    quantidade?: number
    doacaoId: string
    itemId: string
  }

  export type ItemSendoDoadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacao?: DoacaoUpdateOneRequiredWithoutItensDoadoresNestedInput
    item?: ItemUpdateOneRequiredWithoutDoacoesNestedInput
  }

  export type ItemSendoDoadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoCreateManyInput = {
    id?: string
    quantidade?: number
    doacaoId: string
    itemId: string
  }

  export type ItemSendoDoadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemSendoDoadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type Prova_GincanaCreateInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProvaGincanasInput
    equipe?: EquipeCreateNestedOneWithoutProvaGincanasInput
  }

  export type Prova_GincanaUncheckedCreateInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    equipeId?: string | null
  }

  export type Prova_GincanaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProvaGincanasNestedInput
    equipe?: EquipeUpdateOneWithoutProvaGincanasNestedInput
  }

  export type Prova_GincanaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    equipeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prova_GincanaCreateManyInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    equipeId?: string | null
  }

  export type Prova_GincanaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Prova_GincanaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    equipeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type EquipeListRelationFilter = {
    every?: EquipeWhereInput
    some?: EquipeWhereInput
    none?: EquipeWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type DoacaoListRelationFilter = {
    every?: DoacaoWhereInput
    some?: DoacaoWhereInput
    none?: DoacaoWhereInput
  }

  export type Prova_GincanaListRelationFilter = {
    every?: Prova_GincanaWhereInput
    some?: Prova_GincanaWhereInput
    none?: Prova_GincanaWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Prova_GincanaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ItemSendoDoadoListRelationFilter = {
    every?: ItemSendoDoadoWhereInput
    some?: ItemSendoDoadoWhereInput
    none?: ItemSendoDoadoWhereInput
  }

  export type ItemSendoDoadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    pontos?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    pontos?: SortOrder
  }

  export type EquipeScalarRelationFilter = {
    is?: EquipeWhereInput
    isNot?: EquipeWhereInput
  }

  export type DoacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type DoacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type DoacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type DoacaoScalarRelationFilter = {
    is?: DoacaoWhereInput
    isNot?: DoacaoWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemSendoDoadoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemSendoDoadoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type ItemSendoDoadoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemSendoDoadoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemSendoDoadoSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EquipeNullableScalarRelationFilter = {
    is?: EquipeWhereInput | null
    isNot?: EquipeWhereInput | null
  }

  export type Prova_GincanaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type Prova_GincanaAvgOrderByAggregateInput = {
    pontos?: SortOrder
  }

  export type Prova_GincanaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type Prova_GincanaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desc?: SortOrder
    pontos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    equipeId?: SortOrder
  }

  export type Prova_GincanaSumOrderByAggregateInput = {
    pontos?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EquipeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput> | EquipeCreateWithoutCreatedByInput[] | EquipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutCreatedByInput | EquipeCreateOrConnectWithoutCreatedByInput[]
    createMany?: EquipeCreateManyCreatedByInputEnvelope
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput> | ItemCreateWithoutCreatedByInput[] | ItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatedByInput | ItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: ItemCreateManyCreatedByInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type DoacaoCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput> | DoacaoCreateWithoutCreatedByInput[] | DoacaoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCreatedByInput | DoacaoCreateOrConnectWithoutCreatedByInput[]
    createMany?: DoacaoCreateManyCreatedByInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type Prova_GincanaCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput> | Prova_GincanaCreateWithoutCreatedByInput[] | Prova_GincanaUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutCreatedByInput | Prova_GincanaCreateOrConnectWithoutCreatedByInput[]
    createMany?: Prova_GincanaCreateManyCreatedByInputEnvelope
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EquipeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput> | EquipeCreateWithoutCreatedByInput[] | EquipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutCreatedByInput | EquipeCreateOrConnectWithoutCreatedByInput[]
    createMany?: EquipeCreateManyCreatedByInputEnvelope
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput> | ItemCreateWithoutCreatedByInput[] | ItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatedByInput | ItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: ItemCreateManyCreatedByInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput> | DoacaoCreateWithoutCreatedByInput[] | DoacaoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCreatedByInput | DoacaoCreateOrConnectWithoutCreatedByInput[]
    createMany?: DoacaoCreateManyCreatedByInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput> | Prova_GincanaCreateWithoutCreatedByInput[] | Prova_GincanaUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutCreatedByInput | Prova_GincanaCreateOrConnectWithoutCreatedByInput[]
    createMany?: Prova_GincanaCreateManyCreatedByInputEnvelope
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type EquipeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput> | EquipeCreateWithoutCreatedByInput[] | EquipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutCreatedByInput | EquipeCreateOrConnectWithoutCreatedByInput[]
    upsert?: EquipeUpsertWithWhereUniqueWithoutCreatedByInput | EquipeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EquipeCreateManyCreatedByInputEnvelope
    set?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    disconnect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    delete?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    update?: EquipeUpdateWithWhereUniqueWithoutCreatedByInput | EquipeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EquipeUpdateManyWithWhereWithoutCreatedByInput | EquipeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput> | ItemCreateWithoutCreatedByInput[] | ItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatedByInput | ItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCreatedByInput | ItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ItemCreateManyCreatedByInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCreatedByInput | ItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCreatedByInput | ItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type DoacaoUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput> | DoacaoCreateWithoutCreatedByInput[] | DoacaoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCreatedByInput | DoacaoCreateOrConnectWithoutCreatedByInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCreatedByInput | DoacaoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DoacaoCreateManyCreatedByInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCreatedByInput | DoacaoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCreatedByInput | DoacaoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type Prova_GincanaUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput> | Prova_GincanaCreateWithoutCreatedByInput[] | Prova_GincanaUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutCreatedByInput | Prova_GincanaCreateOrConnectWithoutCreatedByInput[]
    upsert?: Prova_GincanaUpsertWithWhereUniqueWithoutCreatedByInput | Prova_GincanaUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: Prova_GincanaCreateManyCreatedByInputEnvelope
    set?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    disconnect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    delete?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    update?: Prova_GincanaUpdateWithWhereUniqueWithoutCreatedByInput | Prova_GincanaUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: Prova_GincanaUpdateManyWithWhereWithoutCreatedByInput | Prova_GincanaUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type EquipeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput> | EquipeCreateWithoutCreatedByInput[] | EquipeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutCreatedByInput | EquipeCreateOrConnectWithoutCreatedByInput[]
    upsert?: EquipeUpsertWithWhereUniqueWithoutCreatedByInput | EquipeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EquipeCreateManyCreatedByInputEnvelope
    set?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    disconnect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    delete?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    update?: EquipeUpdateWithWhereUniqueWithoutCreatedByInput | EquipeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EquipeUpdateManyWithWhereWithoutCreatedByInput | EquipeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput> | ItemCreateWithoutCreatedByInput[] | ItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatedByInput | ItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCreatedByInput | ItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ItemCreateManyCreatedByInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCreatedByInput | ItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCreatedByInput | ItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput> | DoacaoCreateWithoutCreatedByInput[] | DoacaoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCreatedByInput | DoacaoCreateOrConnectWithoutCreatedByInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCreatedByInput | DoacaoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DoacaoCreateManyCreatedByInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCreatedByInput | DoacaoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCreatedByInput | DoacaoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput> | Prova_GincanaCreateWithoutCreatedByInput[] | Prova_GincanaUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutCreatedByInput | Prova_GincanaCreateOrConnectWithoutCreatedByInput[]
    upsert?: Prova_GincanaUpsertWithWhereUniqueWithoutCreatedByInput | Prova_GincanaUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: Prova_GincanaCreateManyCreatedByInputEnvelope
    set?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    disconnect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    delete?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    update?: Prova_GincanaUpdateWithWhereUniqueWithoutCreatedByInput | Prova_GincanaUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: Prova_GincanaUpdateManyWithWhereWithoutCreatedByInput | Prova_GincanaUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEquipesInput = {
    create?: XOR<UserCreateWithoutEquipesInput, UserUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipesInput
    connect?: UserWhereUniqueInput
  }

  export type DoacaoCreateNestedManyWithoutEquipeInput = {
    create?: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput> | DoacaoCreateWithoutEquipeInput[] | DoacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutEquipeInput | DoacaoCreateOrConnectWithoutEquipeInput[]
    createMany?: DoacaoCreateManyEquipeInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type Prova_GincanaCreateNestedManyWithoutEquipeInput = {
    create?: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput> | Prova_GincanaCreateWithoutEquipeInput[] | Prova_GincanaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutEquipeInput | Prova_GincanaCreateOrConnectWithoutEquipeInput[]
    createMany?: Prova_GincanaCreateManyEquipeInputEnvelope
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput> | DoacaoCreateWithoutEquipeInput[] | DoacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutEquipeInput | DoacaoCreateOrConnectWithoutEquipeInput[]
    createMany?: DoacaoCreateManyEquipeInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type Prova_GincanaUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput> | Prova_GincanaCreateWithoutEquipeInput[] | Prova_GincanaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutEquipeInput | Prova_GincanaCreateOrConnectWithoutEquipeInput[]
    createMany?: Prova_GincanaCreateManyEquipeInputEnvelope
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEquipesNestedInput = {
    create?: XOR<UserCreateWithoutEquipesInput, UserUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipesInput
    upsert?: UserUpsertWithoutEquipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEquipesInput, UserUpdateWithoutEquipesInput>, UserUncheckedUpdateWithoutEquipesInput>
  }

  export type DoacaoUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput> | DoacaoCreateWithoutEquipeInput[] | DoacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutEquipeInput | DoacaoCreateOrConnectWithoutEquipeInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutEquipeInput | DoacaoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: DoacaoCreateManyEquipeInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutEquipeInput | DoacaoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutEquipeInput | DoacaoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type Prova_GincanaUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput> | Prova_GincanaCreateWithoutEquipeInput[] | Prova_GincanaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutEquipeInput | Prova_GincanaCreateOrConnectWithoutEquipeInput[]
    upsert?: Prova_GincanaUpsertWithWhereUniqueWithoutEquipeInput | Prova_GincanaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: Prova_GincanaCreateManyEquipeInputEnvelope
    set?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    disconnect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    delete?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    update?: Prova_GincanaUpdateWithWhereUniqueWithoutEquipeInput | Prova_GincanaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: Prova_GincanaUpdateManyWithWhereWithoutEquipeInput | Prova_GincanaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput> | DoacaoCreateWithoutEquipeInput[] | DoacaoUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutEquipeInput | DoacaoCreateOrConnectWithoutEquipeInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutEquipeInput | DoacaoUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: DoacaoCreateManyEquipeInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutEquipeInput | DoacaoUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutEquipeInput | DoacaoUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type Prova_GincanaUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput> | Prova_GincanaCreateWithoutEquipeInput[] | Prova_GincanaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: Prova_GincanaCreateOrConnectWithoutEquipeInput | Prova_GincanaCreateOrConnectWithoutEquipeInput[]
    upsert?: Prova_GincanaUpsertWithWhereUniqueWithoutEquipeInput | Prova_GincanaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: Prova_GincanaCreateManyEquipeInputEnvelope
    set?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    disconnect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    delete?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    connect?: Prova_GincanaWhereUniqueInput | Prova_GincanaWhereUniqueInput[]
    update?: Prova_GincanaUpdateWithWhereUniqueWithoutEquipeInput | Prova_GincanaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: Prova_GincanaUpdateManyWithWhereWithoutEquipeInput | Prova_GincanaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
  }

  export type ItemSendoDoadoCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput> | ItemSendoDoadoCreateWithoutItemInput[] | ItemSendoDoadoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutItemInput | ItemSendoDoadoCreateOrConnectWithoutItemInput[]
    createMany?: ItemSendoDoadoCreateManyItemInputEnvelope
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemSendoDoadoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput> | ItemSendoDoadoCreateWithoutItemInput[] | ItemSendoDoadoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutItemInput | ItemSendoDoadoCreateOrConnectWithoutItemInput[]
    createMany?: ItemSendoDoadoCreateManyItemInputEnvelope
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
  }

  export type ItemSendoDoadoUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput> | ItemSendoDoadoCreateWithoutItemInput[] | ItemSendoDoadoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutItemInput | ItemSendoDoadoCreateOrConnectWithoutItemInput[]
    upsert?: ItemSendoDoadoUpsertWithWhereUniqueWithoutItemInput | ItemSendoDoadoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemSendoDoadoCreateManyItemInputEnvelope
    set?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    disconnect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    delete?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    update?: ItemSendoDoadoUpdateWithWhereUniqueWithoutItemInput | ItemSendoDoadoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemSendoDoadoUpdateManyWithWhereWithoutItemInput | ItemSendoDoadoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type ItemSendoDoadoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput> | ItemSendoDoadoCreateWithoutItemInput[] | ItemSendoDoadoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutItemInput | ItemSendoDoadoCreateOrConnectWithoutItemInput[]
    upsert?: ItemSendoDoadoUpsertWithWhereUniqueWithoutItemInput | ItemSendoDoadoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemSendoDoadoCreateManyItemInputEnvelope
    set?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    disconnect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    delete?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    update?: ItemSendoDoadoUpdateWithWhereUniqueWithoutItemInput | ItemSendoDoadoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemSendoDoadoUpdateManyWithWhereWithoutItemInput | ItemSendoDoadoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoacaosInput = {
    create?: XOR<UserCreateWithoutDoacaosInput, UserUncheckedCreateWithoutDoacaosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoacaosInput
    connect?: UserWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<EquipeCreateWithoutDoacoesInput, EquipeUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutDoacoesInput
    connect?: EquipeWhereUniqueInput
  }

  export type ItemSendoDoadoCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput> | ItemSendoDoadoCreateWithoutDoacaoInput[] | ItemSendoDoadoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutDoacaoInput | ItemSendoDoadoCreateOrConnectWithoutDoacaoInput[]
    createMany?: ItemSendoDoadoCreateManyDoacaoInputEnvelope
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
  }

  export type ItemSendoDoadoUncheckedCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput> | ItemSendoDoadoCreateWithoutDoacaoInput[] | ItemSendoDoadoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutDoacaoInput | ItemSendoDoadoCreateOrConnectWithoutDoacaoInput[]
    createMany?: ItemSendoDoadoCreateManyDoacaoInputEnvelope
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoacaosNestedInput = {
    create?: XOR<UserCreateWithoutDoacaosInput, UserUncheckedCreateWithoutDoacaosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoacaosInput
    upsert?: UserUpsertWithoutDoacaosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoacaosInput, UserUpdateWithoutDoacaosInput>, UserUncheckedUpdateWithoutDoacaosInput>
  }

  export type EquipeUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<EquipeCreateWithoutDoacoesInput, EquipeUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutDoacoesInput
    upsert?: EquipeUpsertWithoutDoacoesInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutDoacoesInput, EquipeUpdateWithoutDoacoesInput>, EquipeUncheckedUpdateWithoutDoacoesInput>
  }

  export type ItemSendoDoadoUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput> | ItemSendoDoadoCreateWithoutDoacaoInput[] | ItemSendoDoadoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutDoacaoInput | ItemSendoDoadoCreateOrConnectWithoutDoacaoInput[]
    upsert?: ItemSendoDoadoUpsertWithWhereUniqueWithoutDoacaoInput | ItemSendoDoadoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: ItemSendoDoadoCreateManyDoacaoInputEnvelope
    set?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    disconnect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    delete?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    update?: ItemSendoDoadoUpdateWithWhereUniqueWithoutDoacaoInput | ItemSendoDoadoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: ItemSendoDoadoUpdateManyWithWhereWithoutDoacaoInput | ItemSendoDoadoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
  }

  export type ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput> | ItemSendoDoadoCreateWithoutDoacaoInput[] | ItemSendoDoadoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemSendoDoadoCreateOrConnectWithoutDoacaoInput | ItemSendoDoadoCreateOrConnectWithoutDoacaoInput[]
    upsert?: ItemSendoDoadoUpsertWithWhereUniqueWithoutDoacaoInput | ItemSendoDoadoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: ItemSendoDoadoCreateManyDoacaoInputEnvelope
    set?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    disconnect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    delete?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    connect?: ItemSendoDoadoWhereUniqueInput | ItemSendoDoadoWhereUniqueInput[]
    update?: ItemSendoDoadoUpdateWithWhereUniqueWithoutDoacaoInput | ItemSendoDoadoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: ItemSendoDoadoUpdateManyWithWhereWithoutDoacaoInput | ItemSendoDoadoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
  }

  export type DoacaoCreateNestedOneWithoutItensDoadoresInput = {
    create?: XOR<DoacaoCreateWithoutItensDoadoresInput, DoacaoUncheckedCreateWithoutItensDoadoresInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutItensDoadoresInput
    connect?: DoacaoWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<ItemCreateWithoutDoacoesInput, ItemUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDoacoesInput
    connect?: ItemWhereUniqueInput
  }

  export type DoacaoUpdateOneRequiredWithoutItensDoadoresNestedInput = {
    create?: XOR<DoacaoCreateWithoutItensDoadoresInput, DoacaoUncheckedCreateWithoutItensDoadoresInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutItensDoadoresInput
    upsert?: DoacaoUpsertWithoutItensDoadoresInput
    connect?: DoacaoWhereUniqueInput
    update?: XOR<XOR<DoacaoUpdateToOneWithWhereWithoutItensDoadoresInput, DoacaoUpdateWithoutItensDoadoresInput>, DoacaoUncheckedUpdateWithoutItensDoadoresInput>
  }

  export type ItemUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<ItemCreateWithoutDoacoesInput, ItemUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDoacoesInput
    upsert?: ItemUpsertWithoutDoacoesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutDoacoesInput, ItemUpdateWithoutDoacoesInput>, ItemUncheckedUpdateWithoutDoacoesInput>
  }

  export type UserCreateNestedOneWithoutProvaGincanasInput = {
    create?: XOR<UserCreateWithoutProvaGincanasInput, UserUncheckedCreateWithoutProvaGincanasInput>
    connectOrCreate?: UserCreateOrConnectWithoutProvaGincanasInput
    connect?: UserWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutProvaGincanasInput = {
    create?: XOR<EquipeCreateWithoutProvaGincanasInput, EquipeUncheckedCreateWithoutProvaGincanasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutProvaGincanasInput
    connect?: EquipeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProvaGincanasNestedInput = {
    create?: XOR<UserCreateWithoutProvaGincanasInput, UserUncheckedCreateWithoutProvaGincanasInput>
    connectOrCreate?: UserCreateOrConnectWithoutProvaGincanasInput
    upsert?: UserUpsertWithoutProvaGincanasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProvaGincanasInput, UserUpdateWithoutProvaGincanasInput>, UserUncheckedUpdateWithoutProvaGincanasInput>
  }

  export type EquipeUpdateOneWithoutProvaGincanasNestedInput = {
    create?: XOR<EquipeCreateWithoutProvaGincanasInput, EquipeUncheckedCreateWithoutProvaGincanasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutProvaGincanasInput
    upsert?: EquipeUpsertWithoutProvaGincanasInput
    disconnect?: EquipeWhereInput | boolean
    delete?: EquipeWhereInput | boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutProvaGincanasInput, EquipeUpdateWithoutProvaGincanasInput>, EquipeUncheckedUpdateWithoutProvaGincanasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type EquipeCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutEquipeInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutEquipeInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeCreateOrConnectWithoutCreatedByInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput>
  }

  export type EquipeCreateManyCreatedByInputEnvelope = {
    data: EquipeCreateManyCreatedByInput | EquipeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutCreatedByInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: ItemSendoDoadoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: ItemSendoDoadoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCreatedByInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput>
  }

  export type ItemCreateManyCreatedByInputEnvelope = {
    data: ItemCreateManyCreatedByInput | ItemCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DoacaoCreateWithoutCreatedByInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe: EquipeCreateNestedOneWithoutDoacoesInput
    itensDoadores?: ItemSendoDoadoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutCreatedByInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipeId: string
    itensDoadores?: ItemSendoDoadoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutCreatedByInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput>
  }

  export type DoacaoCreateManyCreatedByInputEnvelope = {
    data: DoacaoCreateManyCreatedByInput | DoacaoCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type Prova_GincanaCreateWithoutCreatedByInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: EquipeCreateNestedOneWithoutProvaGincanasInput
  }

  export type Prova_GincanaUncheckedCreateWithoutCreatedByInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipeId?: string | null
  }

  export type Prova_GincanaCreateOrConnectWithoutCreatedByInput = {
    where: Prova_GincanaWhereUniqueInput
    create: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput>
  }

  export type Prova_GincanaCreateManyCreatedByInputEnvelope = {
    data: Prova_GincanaCreateManyCreatedByInput | Prova_GincanaCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type EquipeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EquipeWhereUniqueInput
    update: XOR<EquipeUpdateWithoutCreatedByInput, EquipeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EquipeCreateWithoutCreatedByInput, EquipeUncheckedCreateWithoutCreatedByInput>
  }

  export type EquipeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EquipeWhereUniqueInput
    data: XOR<EquipeUpdateWithoutCreatedByInput, EquipeUncheckedUpdateWithoutCreatedByInput>
  }

  export type EquipeUpdateManyWithWhereWithoutCreatedByInput = {
    where: EquipeScalarWhereInput
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EquipeScalarWhereInput = {
    AND?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
    OR?: EquipeScalarWhereInput[]
    NOT?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
    id?: StringFilter<"Equipe"> | string
    name?: StringFilter<"Equipe"> | string
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeFilter<"Equipe"> | Date | string
    createdById?: StringFilter<"Equipe"> | string
  }

  export type ItemUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCreatedByInput, ItemUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ItemCreateWithoutCreatedByInput, ItemUncheckedCreateWithoutCreatedByInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCreatedByInput, ItemUncheckedUpdateWithoutCreatedByInput>
  }

  export type ItemUpdateManyWithWhereWithoutCreatedByInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    desc?: StringNullableFilter<"Item"> | string | null
    pontos?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    createdById?: StringFilter<"Item"> | string
  }

  export type DoacaoUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutCreatedByInput, DoacaoUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DoacaoCreateWithoutCreatedByInput, DoacaoUncheckedCreateWithoutCreatedByInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutCreatedByInput, DoacaoUncheckedUpdateWithoutCreatedByInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutCreatedByInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DoacaoScalarWhereInput = {
    AND?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    OR?: DoacaoScalarWhereInput[]
    NOT?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    id?: StringFilter<"Doacao"> | string
    nome?: StringFilter<"Doacao"> | string
    desc?: StringFilter<"Doacao"> | string
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
    createdById?: StringFilter<"Doacao"> | string
    equipeId?: StringFilter<"Doacao"> | string
  }

  export type Prova_GincanaUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prova_GincanaWhereUniqueInput
    update: XOR<Prova_GincanaUpdateWithoutCreatedByInput, Prova_GincanaUncheckedUpdateWithoutCreatedByInput>
    create: XOR<Prova_GincanaCreateWithoutCreatedByInput, Prova_GincanaUncheckedCreateWithoutCreatedByInput>
  }

  export type Prova_GincanaUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prova_GincanaWhereUniqueInput
    data: XOR<Prova_GincanaUpdateWithoutCreatedByInput, Prova_GincanaUncheckedUpdateWithoutCreatedByInput>
  }

  export type Prova_GincanaUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prova_GincanaScalarWhereInput
    data: XOR<Prova_GincanaUpdateManyMutationInput, Prova_GincanaUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type Prova_GincanaScalarWhereInput = {
    AND?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
    OR?: Prova_GincanaScalarWhereInput[]
    NOT?: Prova_GincanaScalarWhereInput | Prova_GincanaScalarWhereInput[]
    id?: StringFilter<"Prova_Gincana"> | string
    nome?: StringFilter<"Prova_Gincana"> | string
    desc?: StringFilter<"Prova_Gincana"> | string
    pontos?: IntFilter<"Prova_Gincana"> | number
    createdAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    updatedAt?: DateTimeFilter<"Prova_Gincana"> | Date | string
    createdById?: StringFilter<"Prova_Gincana"> | string
    equipeId?: StringNullableFilter<"Prova_Gincana"> | string | null
  }

  export type UserCreateWithoutEquipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutEquipesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutEquipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEquipesInput, UserUncheckedCreateWithoutEquipesInput>
  }

  export type DoacaoCreateWithoutEquipeInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDoacaosInput
    itensDoadores?: ItemSendoDoadoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutEquipeInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    itensDoadores?: ItemSendoDoadoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutEquipeInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput>
  }

  export type DoacaoCreateManyEquipeInputEnvelope = {
    data: DoacaoCreateManyEquipeInput | DoacaoCreateManyEquipeInput[]
    skipDuplicates?: boolean
  }

  export type Prova_GincanaCreateWithoutEquipeInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProvaGincanasInput
  }

  export type Prova_GincanaUncheckedCreateWithoutEquipeInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type Prova_GincanaCreateOrConnectWithoutEquipeInput = {
    where: Prova_GincanaWhereUniqueInput
    create: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput>
  }

  export type Prova_GincanaCreateManyEquipeInputEnvelope = {
    data: Prova_GincanaCreateManyEquipeInput | Prova_GincanaCreateManyEquipeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEquipesInput = {
    update: XOR<UserUpdateWithoutEquipesInput, UserUncheckedUpdateWithoutEquipesInput>
    create: XOR<UserCreateWithoutEquipesInput, UserUncheckedCreateWithoutEquipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEquipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEquipesInput, UserUncheckedUpdateWithoutEquipesInput>
  }

  export type UserUpdateWithoutEquipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEquipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DoacaoUpsertWithWhereUniqueWithoutEquipeInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutEquipeInput, DoacaoUncheckedUpdateWithoutEquipeInput>
    create: XOR<DoacaoCreateWithoutEquipeInput, DoacaoUncheckedCreateWithoutEquipeInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutEquipeInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutEquipeInput, DoacaoUncheckedUpdateWithoutEquipeInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutEquipeInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutEquipeInput>
  }

  export type Prova_GincanaUpsertWithWhereUniqueWithoutEquipeInput = {
    where: Prova_GincanaWhereUniqueInput
    update: XOR<Prova_GincanaUpdateWithoutEquipeInput, Prova_GincanaUncheckedUpdateWithoutEquipeInput>
    create: XOR<Prova_GincanaCreateWithoutEquipeInput, Prova_GincanaUncheckedCreateWithoutEquipeInput>
  }

  export type Prova_GincanaUpdateWithWhereUniqueWithoutEquipeInput = {
    where: Prova_GincanaWhereUniqueInput
    data: XOR<Prova_GincanaUpdateWithoutEquipeInput, Prova_GincanaUncheckedUpdateWithoutEquipeInput>
  }

  export type Prova_GincanaUpdateManyWithWhereWithoutEquipeInput = {
    where: Prova_GincanaScalarWhereInput
    data: XOR<Prova_GincanaUpdateManyMutationInput, Prova_GincanaUncheckedUpdateManyWithoutEquipeInput>
  }

  export type ItemSendoDoadoCreateWithoutItemInput = {
    id?: string
    quantidade?: number
    doacao: DoacaoCreateNestedOneWithoutItensDoadoresInput
  }

  export type ItemSendoDoadoUncheckedCreateWithoutItemInput = {
    id?: string
    quantidade?: number
    doacaoId: string
  }

  export type ItemSendoDoadoCreateOrConnectWithoutItemInput = {
    where: ItemSendoDoadoWhereUniqueInput
    create: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput>
  }

  export type ItemSendoDoadoCreateManyItemInputEnvelope = {
    data: ItemSendoDoadoCreateManyItemInput | ItemSendoDoadoCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type ItemSendoDoadoUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemSendoDoadoWhereUniqueInput
    update: XOR<ItemSendoDoadoUpdateWithoutItemInput, ItemSendoDoadoUncheckedUpdateWithoutItemInput>
    create: XOR<ItemSendoDoadoCreateWithoutItemInput, ItemSendoDoadoUncheckedCreateWithoutItemInput>
  }

  export type ItemSendoDoadoUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemSendoDoadoWhereUniqueInput
    data: XOR<ItemSendoDoadoUpdateWithoutItemInput, ItemSendoDoadoUncheckedUpdateWithoutItemInput>
  }

  export type ItemSendoDoadoUpdateManyWithWhereWithoutItemInput = {
    where: ItemSendoDoadoScalarWhereInput
    data: XOR<ItemSendoDoadoUpdateManyMutationInput, ItemSendoDoadoUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemSendoDoadoScalarWhereInput = {
    AND?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
    OR?: ItemSendoDoadoScalarWhereInput[]
    NOT?: ItemSendoDoadoScalarWhereInput | ItemSendoDoadoScalarWhereInput[]
    id?: StringFilter<"ItemSendoDoado"> | string
    quantidade?: IntFilter<"ItemSendoDoado"> | number
    doacaoId?: StringFilter<"ItemSendoDoado"> | string
    itemId?: StringFilter<"ItemSendoDoado"> | string
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutDoacaosInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDoacaosInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDoacaosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoacaosInput, UserUncheckedCreateWithoutDoacaosInput>
  }

  export type EquipeCreateWithoutDoacoesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutEquipesInput
    provaGincanas?: Prova_GincanaCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateWithoutDoacoesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    provaGincanas?: Prova_GincanaUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeCreateOrConnectWithoutDoacoesInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutDoacoesInput, EquipeUncheckedCreateWithoutDoacoesInput>
  }

  export type ItemSendoDoadoCreateWithoutDoacaoInput = {
    id?: string
    quantidade?: number
    item: ItemCreateNestedOneWithoutDoacoesInput
  }

  export type ItemSendoDoadoUncheckedCreateWithoutDoacaoInput = {
    id?: string
    quantidade?: number
    itemId: string
  }

  export type ItemSendoDoadoCreateOrConnectWithoutDoacaoInput = {
    where: ItemSendoDoadoWhereUniqueInput
    create: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput>
  }

  export type ItemSendoDoadoCreateManyDoacaoInputEnvelope = {
    data: ItemSendoDoadoCreateManyDoacaoInput | ItemSendoDoadoCreateManyDoacaoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoacaosInput = {
    update: XOR<UserUpdateWithoutDoacaosInput, UserUncheckedUpdateWithoutDoacaosInput>
    create: XOR<UserCreateWithoutDoacaosInput, UserUncheckedCreateWithoutDoacaosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoacaosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoacaosInput, UserUncheckedUpdateWithoutDoacaosInput>
  }

  export type UserUpdateWithoutDoacaosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDoacaosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EquipeUpsertWithoutDoacoesInput = {
    update: XOR<EquipeUpdateWithoutDoacoesInput, EquipeUncheckedUpdateWithoutDoacoesInput>
    create: XOR<EquipeCreateWithoutDoacoesInput, EquipeUncheckedCreateWithoutDoacoesInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutDoacoesInput, EquipeUncheckedUpdateWithoutDoacoesInput>
  }

  export type EquipeUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutEquipesNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type ItemSendoDoadoUpsertWithWhereUniqueWithoutDoacaoInput = {
    where: ItemSendoDoadoWhereUniqueInput
    update: XOR<ItemSendoDoadoUpdateWithoutDoacaoInput, ItemSendoDoadoUncheckedUpdateWithoutDoacaoInput>
    create: XOR<ItemSendoDoadoCreateWithoutDoacaoInput, ItemSendoDoadoUncheckedCreateWithoutDoacaoInput>
  }

  export type ItemSendoDoadoUpdateWithWhereUniqueWithoutDoacaoInput = {
    where: ItemSendoDoadoWhereUniqueInput
    data: XOR<ItemSendoDoadoUpdateWithoutDoacaoInput, ItemSendoDoadoUncheckedUpdateWithoutDoacaoInput>
  }

  export type ItemSendoDoadoUpdateManyWithWhereWithoutDoacaoInput = {
    where: ItemSendoDoadoScalarWhereInput
    data: XOR<ItemSendoDoadoUpdateManyMutationInput, ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoInput>
  }

  export type DoacaoCreateWithoutItensDoadoresInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDoacaosInput
    equipe: EquipeCreateNestedOneWithoutDoacoesInput
  }

  export type DoacaoUncheckedCreateWithoutItensDoadoresInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    equipeId: string
  }

  export type DoacaoCreateOrConnectWithoutItensDoadoresInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutItensDoadoresInput, DoacaoUncheckedCreateWithoutItensDoadoresInput>
  }

  export type ItemCreateWithoutDoacoesInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutDoacoesInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type ItemCreateOrConnectWithoutDoacoesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutDoacoesInput, ItemUncheckedCreateWithoutDoacoesInput>
  }

  export type DoacaoUpsertWithoutItensDoadoresInput = {
    update: XOR<DoacaoUpdateWithoutItensDoadoresInput, DoacaoUncheckedUpdateWithoutItensDoadoresInput>
    create: XOR<DoacaoCreateWithoutItensDoadoresInput, DoacaoUncheckedCreateWithoutItensDoadoresInput>
    where?: DoacaoWhereInput
  }

  export type DoacaoUpdateToOneWithWhereWithoutItensDoadoresInput = {
    where?: DoacaoWhereInput
    data: XOR<DoacaoUpdateWithoutItensDoadoresInput, DoacaoUncheckedUpdateWithoutItensDoadoresInput>
  }

  export type DoacaoUpdateWithoutItensDoadoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDoacaosNestedInput
    equipe?: EquipeUpdateOneRequiredWithoutDoacoesNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutItensDoadoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    equipeId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutDoacoesInput = {
    update: XOR<ItemUpdateWithoutDoacoesInput, ItemUncheckedUpdateWithoutDoacoesInput>
    create: XOR<ItemCreateWithoutDoacoesInput, ItemUncheckedCreateWithoutDoacoesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutDoacoesInput, ItemUncheckedUpdateWithoutDoacoesInput>
  }

  export type ItemUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutProvaGincanasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeCreateNestedManyWithoutCreatedByInput
    items?: ItemCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutProvaGincanasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutCreatedByInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatedByInput
    doacaos?: DoacaoUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutProvaGincanasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProvaGincanasInput, UserUncheckedCreateWithoutProvaGincanasInput>
  }

  export type EquipeCreateWithoutProvaGincanasInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutEquipesInput
    doacoes?: DoacaoCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateWithoutProvaGincanasInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeCreateOrConnectWithoutProvaGincanasInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutProvaGincanasInput, EquipeUncheckedCreateWithoutProvaGincanasInput>
  }

  export type UserUpsertWithoutProvaGincanasInput = {
    update: XOR<UserUpdateWithoutProvaGincanasInput, UserUncheckedUpdateWithoutProvaGincanasInput>
    create: XOR<UserCreateWithoutProvaGincanasInput, UserUncheckedCreateWithoutProvaGincanasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProvaGincanasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProvaGincanasInput, UserUncheckedUpdateWithoutProvaGincanasInput>
  }

  export type UserUpdateWithoutProvaGincanasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUpdateManyWithoutCreatedByNestedInput
    items?: ItemUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProvaGincanasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutCreatedByNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatedByNestedInput
    doacaos?: DoacaoUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EquipeUpsertWithoutProvaGincanasInput = {
    update: XOR<EquipeUpdateWithoutProvaGincanasInput, EquipeUncheckedUpdateWithoutProvaGincanasInput>
    create: XOR<EquipeCreateWithoutProvaGincanasInput, EquipeUncheckedCreateWithoutProvaGincanasInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutProvaGincanasInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutProvaGincanasInput, EquipeUncheckedUpdateWithoutProvaGincanasInput>
  }

  export type EquipeUpdateWithoutProvaGincanasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutEquipesNestedInput
    doacoes?: DoacaoUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutProvaGincanasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipeCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateManyCreatedByInput = {
    id?: string
    name: string
    desc?: string | null
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoacaoCreateManyCreatedByInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipeId: string
  }

  export type Prova_GincanaCreateManyCreatedByInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipeId?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutEquipeNestedInput
    provaGincanas?: Prova_GincanaUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutEquipeNestedInput
    provaGincanas?: Prova_GincanaUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: ItemSendoDoadoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: ItemSendoDoadoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: EquipeUpdateOneRequiredWithoutDoacoesNestedInput
    itensDoadores?: ItemSendoDoadoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipeId?: StringFieldUpdateOperationsInput | string
    itensDoadores?: ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipeId?: StringFieldUpdateOperationsInput | string
  }

  export type Prova_GincanaUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: EquipeUpdateOneWithoutProvaGincanasNestedInput
  }

  export type Prova_GincanaUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prova_GincanaUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoacaoCreateManyEquipeInput = {
    id?: string
    nome: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type Prova_GincanaCreateManyEquipeInput = {
    id?: string
    nome: string
    desc: string
    pontos: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type DoacaoUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDoacaosNestedInput
    itensDoadores?: ItemSendoDoadoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    itensDoadores?: ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type Prova_GincanaUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProvaGincanasNestedInput
  }

  export type Prova_GincanaUncheckedUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type Prova_GincanaUncheckedUpdateManyWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoCreateManyItemInput = {
    id?: string
    quantidade?: number
    doacaoId: string
  }

  export type ItemSendoDoadoUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacao?: DoacaoUpdateOneRequiredWithoutItensDoadoresNestedInput
  }

  export type ItemSendoDoadoUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoCreateManyDoacaoInput = {
    id?: string
    quantidade?: number
    itemId: string
  }

  export type ItemSendoDoadoUpdateWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutDoacoesNestedInput
  }

  export type ItemSendoDoadoUncheckedUpdateWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSendoDoadoUncheckedUpdateManyWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.BaseDMMF
}