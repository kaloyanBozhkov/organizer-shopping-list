import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'

import { ResolversContext } from './context'
import { SortListItemsBy } from './enums'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & {
    [P in K]-?: NonNullable<T[P]>
}
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
}

export enum Currency {
    Bgn = 'BGN',
    Gbp = 'GBP',
    Usd = 'USD',
}

/** A product in the shopping list */
export type ListItem = Product & {
    __typename?: 'ListItem'
    currency: Currency
    id: Scalars['ID']
    importance: Scalars['Int']
    /** The shops from which to buy the product */
    inShops: Array<Shop>
    isPurchased: Scalars['Boolean']
    listItemId: Scalars['ID']
    name: Scalars['String']
    price?: Maybe<Scalars['Float']>
}

export type Position = {
    __typename?: 'Position'
    lat: Scalars['Float']
    long: Scalars['Float']
}

/** A shopping item like a cake, pizza or salt */
export type Product = {
    currency: Currency
    id: Scalars['ID']
    /** The shops from which to buy the product */
    inShops: Array<Shop>
    name: Scalars['String']
    price?: Maybe<Scalars['Float']>
}

export type Query = {
    __typename?: 'Query'
    allListItems: Array<ListItem>
}

export type QueryAllListItemsArgs = {
    sortBy?: InputMaybe<SortListItemsBy>
    sortDirection?: InputMaybe<SortDirection>
}

export type Shop = {
    __typename?: 'Shop'
    created: Scalars['DateTime']
    /** The products in the shop that we might want to buy */
    hasProducts: Array<Product>
    id: Scalars['ID']
    isOpen: Scalars['Boolean']
    location: Position
    shopName: Scalars['String']
}

export enum SortDirection {
    Ascending = 'ASCENDING',
    Descending = 'DESCENDING',
}

export { SortListItemsBy }

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {}
> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>
    Currency: Currency
    DateTime: ResolverTypeWrapper<Scalars['DateTime']>
    Float: ResolverTypeWrapper<Scalars['Float']>
    ID: ResolverTypeWrapper<Scalars['ID']>
    Int: ResolverTypeWrapper<Scalars['Int']>
    ListItem: ResolverTypeWrapper<ListItem>
    Position: ResolverTypeWrapper<Position>
    Product: ResolversTypes['ListItem']
    Query: ResolverTypeWrapper<{}>
    Shop: ResolverTypeWrapper<Shop>
    SortDirection: SortDirection
    SortListItemsBy: SortListItemsBy
    String: ResolverTypeWrapper<Scalars['String']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Boolean: Scalars['Boolean']
    DateTime: Scalars['DateTime']
    Float: Scalars['Float']
    ID: Scalars['ID']
    Int: Scalars['Int']
    ListItem: ListItem
    Position: Position
    Product: ResolversParentTypes['ListItem']
    Query: {}
    Shop: Shop
    String: Scalars['String']
}>

export interface DateTimeScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime'
}

export type ListItemResolvers<
    ContextType = ResolversContext,
    ParentType extends ResolversParentTypes['ListItem'] = ResolversParentTypes['ListItem']
> = ResolversObject<{
    currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    importance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    inShops?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>
    isPurchased?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    listItemId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PositionResolvers<
    ContextType = ResolversContext,
    ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']
> = ResolversObject<{
    lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
    long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductResolvers<
    ContextType = ResolversContext,
    ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = ResolversObject<{
    __resolveType: TypeResolveFn<'ListItem', ParentType, ContextType>
    currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    inShops?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
}>

export type QueryResolvers<
    ContextType = ResolversContext,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
    allListItems?: Resolver<
        Array<ResolversTypes['ListItem']>,
        ParentType,
        ContextType,
        RequireFields<QueryAllListItemsArgs, 'sortBy' | 'sortDirection'>
    >
}>

export type ShopResolvers<
    ContextType = ResolversContext,
    ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']
> = ResolversObject<{
    created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
    hasProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    isOpen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    location?: Resolver<ResolversTypes['Position'], ParentType, ContextType>
    shopName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SortListItemsByResolvers = EnumResolverSignature<
    {
        CREATED?: any
        IMPORTANCE?: any
        IS_PURCHASED?: any
        PRICE?: any
        PRODUCT_NAME?: any
        SHOP_NAME?: any
    },
    ResolversTypes['SortListItemsBy']
>

export type Resolvers<ContextType = ResolversContext> = ResolversObject<{
    DateTime?: GraphQLScalarType
    ListItem?: ListItemResolvers<ContextType>
    Position?: PositionResolvers<ContextType>
    Product?: ProductResolvers<ContextType>
    Query?: QueryResolvers<ContextType>
    Shop?: ShopResolvers<ContextType>
    SortListItemsBy?: SortListItemsByResolvers
}>

export type GetAllListItemsQueryVariables = Exact<{
    sortBy?: InputMaybe<SortListItemsBy>
    sortDirection?: InputMaybe<SortDirection>
}>

export type GetAllListItemsQuery = {
    __typename?: 'Query'
    allListItems: Array<{
        __typename?: 'ListItem'
        id: string
        name: string
        price?: number | null | undefined
        currency: Currency
        inShops: Array<{ __typename?: 'Shop'; id: string; isOpen: boolean; name: string }>
    }>
}
