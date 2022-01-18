import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: any
}

export type AffectedRowsOutput = {
    __typename?: 'AffectedRowsOutput'
    count: Scalars['Int']
}

export type AggregateEdgeProductShop = {
    __typename?: 'AggregateEdgeProductShop'
    _count?: Maybe<EdgeProductShopCountAggregate>
    _max?: Maybe<EdgeProductShopMaxAggregate>
    _min?: Maybe<EdgeProductShopMinAggregate>
}

export type AggregateListItem = {
    __typename?: 'AggregateListItem'
    _avg?: Maybe<ListItemAvgAggregate>
    _count?: Maybe<ListItemCountAggregate>
    _max?: Maybe<ListItemMaxAggregate>
    _min?: Maybe<ListItemMinAggregate>
    _sum?: Maybe<ListItemSumAggregate>
}

export type AggregateLocation = {
    __typename?: 'AggregateLocation'
    _avg?: Maybe<LocationAvgAggregate>
    _count?: Maybe<LocationCountAggregate>
    _max?: Maybe<LocationMaxAggregate>
    _min?: Maybe<LocationMinAggregate>
    _sum?: Maybe<LocationSumAggregate>
}

export type AggregateProduct = {
    __typename?: 'AggregateProduct'
    _avg?: Maybe<ProductAvgAggregate>
    _count?: Maybe<ProductCountAggregate>
    _max?: Maybe<ProductMaxAggregate>
    _min?: Maybe<ProductMinAggregate>
    _sum?: Maybe<ProductSumAggregate>
}

export type AggregateShop = {
    __typename?: 'AggregateShop'
    _count?: Maybe<ShopCountAggregate>
    _max?: Maybe<ShopMaxAggregate>
    _min?: Maybe<ShopMinAggregate>
}

export type AggregateToken = {
    __typename?: 'AggregateToken'
    _count?: Maybe<TokenCountAggregate>
    _max?: Maybe<TokenMaxAggregate>
    _min?: Maybe<TokenMinAggregate>
}

export type AggregateUser = {
    __typename?: 'AggregateUser'
    _count?: Maybe<UserCountAggregate>
    _max?: Maybe<UserMaxAggregate>
    _min?: Maybe<UserMinAggregate>
}

export type BoolFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['Boolean']>
}

export type BoolFilter = {
    equals?: InputMaybe<Scalars['Boolean']>
    not?: InputMaybe<NestedBoolFilter>
}

export type BoolWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedBoolFilter>
    _min?: InputMaybe<NestedBoolFilter>
    equals?: InputMaybe<Scalars['Boolean']>
    not?: InputMaybe<NestedBoolWithAggregatesFilter>
}

export enum Currency {
    Bgn = 'BGN',
    Eur = 'EUR',
    Gbp = 'GBP',
    Usd = 'USD',
}

export type DateTimeFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['DateTime']>
}

export type DateTimeFilter = {
    equals?: InputMaybe<Scalars['DateTime']>
    gt?: InputMaybe<Scalars['DateTime']>
    gte?: InputMaybe<Scalars['DateTime']>
    in?: InputMaybe<Array<Scalars['DateTime']>>
    lt?: InputMaybe<Scalars['DateTime']>
    lte?: InputMaybe<Scalars['DateTime']>
    not?: InputMaybe<NestedDateTimeFilter>
    notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type DateTimeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedDateTimeFilter>
    _min?: InputMaybe<NestedDateTimeFilter>
    equals?: InputMaybe<Scalars['DateTime']>
    gt?: InputMaybe<Scalars['DateTime']>
    gte?: InputMaybe<Scalars['DateTime']>
    in?: InputMaybe<Array<Scalars['DateTime']>>
    lt?: InputMaybe<Scalars['DateTime']>
    lte?: InputMaybe<Scalars['DateTime']>
    not?: InputMaybe<NestedDateTimeWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type EdgeProductShop = {
    __typename?: 'EdgeProductShop'
    addedBy: User
    createdAt: Scalars['DateTime']
    id: Scalars['String']
    product: Product
    productId: Scalars['String']
    shop: Shop
    shopId: Scalars['String']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type EdgeProductShopCountAggregate = {
    __typename?: 'EdgeProductShopCountAggregate'
    _all: Scalars['Int']
    createdAt: Scalars['Int']
    id: Scalars['Int']
    productId: Scalars['Int']
    shopId: Scalars['Int']
    updatedAt: Scalars['Int']
    userId: Scalars['Int']
}

export type EdgeProductShopCountOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    shopId?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type EdgeProductShopCreateInput = {
    addedBy: UserCreateNestedOneWithoutAddedProductsToShopsInput
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    product: ProductCreateNestedOneWithoutInShopsInput
    shop: ShopCreateNestedOneWithoutHasProductsInput
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EdgeProductShopCreateManyAddedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    productId: Scalars['String']
    shopId: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EdgeProductShopCreateManyAddedByInputEnvelope = {
    data: Array<EdgeProductShopCreateManyAddedByInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type EdgeProductShopCreateManyInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    productId: Scalars['String']
    shopId: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
}

export type EdgeProductShopCreateManyProductInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    shopId: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
}

export type EdgeProductShopCreateManyProductInputEnvelope = {
    data: Array<EdgeProductShopCreateManyProductInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type EdgeProductShopCreateManyShopInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    productId: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
}

export type EdgeProductShopCreateManyShopInputEnvelope = {
    data: Array<EdgeProductShopCreateManyShopInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type EdgeProductShopCreateNestedManyWithoutAddedByInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutAddedByInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutAddedByInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyAddedByInputEnvelope>
}

export type EdgeProductShopCreateNestedManyWithoutProductInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutProductInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutProductInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyProductInputEnvelope>
}

export type EdgeProductShopCreateNestedManyWithoutShopInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutShopInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutShopInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyShopInputEnvelope>
}

export type EdgeProductShopCreateOrConnectWithoutAddedByInput = {
    create: EdgeProductShopCreateWithoutAddedByInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopCreateOrConnectWithoutProductInput = {
    create: EdgeProductShopCreateWithoutProductInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopCreateOrConnectWithoutShopInput = {
    create: EdgeProductShopCreateWithoutShopInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopCreateWithoutAddedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    product: ProductCreateNestedOneWithoutInShopsInput
    shop: ShopCreateNestedOneWithoutHasProductsInput
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EdgeProductShopCreateWithoutProductInput = {
    addedBy: UserCreateNestedOneWithoutAddedProductsToShopsInput
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    shop: ShopCreateNestedOneWithoutHasProductsInput
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EdgeProductShopCreateWithoutShopInput = {
    addedBy: UserCreateNestedOneWithoutAddedProductsToShopsInput
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    product: ProductCreateNestedOneWithoutInShopsInput
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EdgeProductShopGroupBy = {
    __typename?: 'EdgeProductShopGroupBy'
    _count?: Maybe<EdgeProductShopCountAggregate>
    _max?: Maybe<EdgeProductShopMaxAggregate>
    _min?: Maybe<EdgeProductShopMinAggregate>
    createdAt: Scalars['DateTime']
    id: Scalars['String']
    productId: Scalars['String']
    shopId: Scalars['String']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type EdgeProductShopListRelationFilter = {
    every?: InputMaybe<EdgeProductShopWhereInput>
    none?: InputMaybe<EdgeProductShopWhereInput>
    some?: InputMaybe<EdgeProductShopWhereInput>
}

export type EdgeProductShopMaxAggregate = {
    __typename?: 'EdgeProductShopMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    productId?: Maybe<Scalars['String']>
    shopId?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type EdgeProductShopMaxOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    shopId?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type EdgeProductShopMinAggregate = {
    __typename?: 'EdgeProductShopMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    productId?: Maybe<Scalars['String']>
    shopId?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type EdgeProductShopMinOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    shopId?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type EdgeProductShopOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>
}

export type EdgeProductShopOrderByWithAggregationInput = {
    _count?: InputMaybe<EdgeProductShopCountOrderByAggregateInput>
    _max?: InputMaybe<EdgeProductShopMaxOrderByAggregateInput>
    _min?: InputMaybe<EdgeProductShopMinOrderByAggregateInput>
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    shopId?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type EdgeProductShopOrderByWithRelationInput = {
    addedBy?: InputMaybe<UserOrderByWithRelationInput>
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    product?: InputMaybe<ProductOrderByWithRelationInput>
    productId?: InputMaybe<SortOrder>
    shop?: InputMaybe<ShopOrderByWithRelationInput>
    shopId?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export enum EdgeProductShopScalarFieldEnum {
    CreatedAt = 'createdAt',
    Id = 'id',
    ProductId = 'productId',
    ShopId = 'shopId',
    UpdatedAt = 'updatedAt',
    UserId = 'userId',
}

export type EdgeProductShopScalarWhereInput = {
    AND?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    NOT?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    OR?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    productId?: InputMaybe<StringFilter>
    shopId?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type EdgeProductShopScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<EdgeProductShopScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<EdgeProductShopScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<EdgeProductShopScalarWhereWithAggregatesInput>>
    createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    productId?: InputMaybe<StringWithAggregatesFilter>
    shopId?: InputMaybe<StringWithAggregatesFilter>
    updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>
    userId?: InputMaybe<StringWithAggregatesFilter>
}

export type EdgeProductShopUpdateInput = {
    addedBy?: InputMaybe<UserUpdateOneRequiredWithoutAddedProductsToShopsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    product?: InputMaybe<ProductUpdateOneRequiredWithoutInShopsInput>
    shop?: InputMaybe<ShopUpdateOneRequiredWithoutHasProductsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type EdgeProductShopUpdateManyMutationInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type EdgeProductShopUpdateManyWithWhereWithoutAddedByInput = {
    data: EdgeProductShopUpdateManyMutationInput
    where: EdgeProductShopScalarWhereInput
}

export type EdgeProductShopUpdateManyWithWhereWithoutProductInput = {
    data: EdgeProductShopUpdateManyMutationInput
    where: EdgeProductShopScalarWhereInput
}

export type EdgeProductShopUpdateManyWithWhereWithoutShopInput = {
    data: EdgeProductShopUpdateManyMutationInput
    where: EdgeProductShopScalarWhereInput
}

export type EdgeProductShopUpdateManyWithoutAddedByInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutAddedByInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutAddedByInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyAddedByInputEnvelope>
    delete?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    disconnect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    set?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    update?: InputMaybe<Array<EdgeProductShopUpdateWithWhereUniqueWithoutAddedByInput>>
    updateMany?: InputMaybe<Array<EdgeProductShopUpdateManyWithWhereWithoutAddedByInput>>
    upsert?: InputMaybe<Array<EdgeProductShopUpsertWithWhereUniqueWithoutAddedByInput>>
}

export type EdgeProductShopUpdateManyWithoutProductInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutProductInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutProductInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyProductInputEnvelope>
    delete?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    disconnect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    set?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    update?: InputMaybe<Array<EdgeProductShopUpdateWithWhereUniqueWithoutProductInput>>
    updateMany?: InputMaybe<Array<EdgeProductShopUpdateManyWithWhereWithoutProductInput>>
    upsert?: InputMaybe<Array<EdgeProductShopUpsertWithWhereUniqueWithoutProductInput>>
}

export type EdgeProductShopUpdateManyWithoutShopInput = {
    connect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<EdgeProductShopCreateOrConnectWithoutShopInput>>
    create?: InputMaybe<Array<EdgeProductShopCreateWithoutShopInput>>
    createMany?: InputMaybe<EdgeProductShopCreateManyShopInputEnvelope>
    delete?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<EdgeProductShopScalarWhereInput>>
    disconnect?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    set?: InputMaybe<Array<EdgeProductShopWhereUniqueInput>>
    update?: InputMaybe<Array<EdgeProductShopUpdateWithWhereUniqueWithoutShopInput>>
    updateMany?: InputMaybe<Array<EdgeProductShopUpdateManyWithWhereWithoutShopInput>>
    upsert?: InputMaybe<Array<EdgeProductShopUpsertWithWhereUniqueWithoutShopInput>>
}

export type EdgeProductShopUpdateWithWhereUniqueWithoutAddedByInput = {
    data: EdgeProductShopUpdateWithoutAddedByInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopUpdateWithWhereUniqueWithoutProductInput = {
    data: EdgeProductShopUpdateWithoutProductInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopUpdateWithWhereUniqueWithoutShopInput = {
    data: EdgeProductShopUpdateWithoutShopInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopUpdateWithoutAddedByInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    product?: InputMaybe<ProductUpdateOneRequiredWithoutInShopsInput>
    shop?: InputMaybe<ShopUpdateOneRequiredWithoutHasProductsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type EdgeProductShopUpdateWithoutProductInput = {
    addedBy?: InputMaybe<UserUpdateOneRequiredWithoutAddedProductsToShopsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    shop?: InputMaybe<ShopUpdateOneRequiredWithoutHasProductsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type EdgeProductShopUpdateWithoutShopInput = {
    addedBy?: InputMaybe<UserUpdateOneRequiredWithoutAddedProductsToShopsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    product?: InputMaybe<ProductUpdateOneRequiredWithoutInShopsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type EdgeProductShopUpsertWithWhereUniqueWithoutAddedByInput = {
    create: EdgeProductShopCreateWithoutAddedByInput
    update: EdgeProductShopUpdateWithoutAddedByInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopUpsertWithWhereUniqueWithoutProductInput = {
    create: EdgeProductShopCreateWithoutProductInput
    update: EdgeProductShopUpdateWithoutProductInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopUpsertWithWhereUniqueWithoutShopInput = {
    create: EdgeProductShopCreateWithoutShopInput
    update: EdgeProductShopUpdateWithoutShopInput
    where: EdgeProductShopWhereUniqueInput
}

export type EdgeProductShopWhereInput = {
    AND?: InputMaybe<Array<EdgeProductShopWhereInput>>
    NOT?: InputMaybe<Array<EdgeProductShopWhereInput>>
    OR?: InputMaybe<Array<EdgeProductShopWhereInput>>
    addedBy?: InputMaybe<UserRelationFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    product?: InputMaybe<ProductRelationFilter>
    productId?: InputMaybe<StringFilter>
    shop?: InputMaybe<ShopRelationFilter>
    shopId?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type EdgeProductShopWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']>
}

export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: InputMaybe<Currency>
}

export type EnumCurrencyFilter = {
    equals?: InputMaybe<Currency>
    in?: InputMaybe<Array<Currency>>
    not?: InputMaybe<NestedEnumCurrencyFilter>
    notIn?: InputMaybe<Array<Currency>>
}

export type EnumCurrencyWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedEnumCurrencyFilter>
    _min?: InputMaybe<NestedEnumCurrencyFilter>
    equals?: InputMaybe<Currency>
    in?: InputMaybe<Array<Currency>>
    not?: InputMaybe<NestedEnumCurrencyWithAggregatesFilter>
    notIn?: InputMaybe<Array<Currency>>
}

export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: InputMaybe<TokenType>
}

export type EnumTokenTypeFilter = {
    equals?: InputMaybe<TokenType>
    in?: InputMaybe<Array<TokenType>>
    not?: InputMaybe<NestedEnumTokenTypeFilter>
    notIn?: InputMaybe<Array<TokenType>>
}

export type EnumTokenTypeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedEnumTokenTypeFilter>
    _min?: InputMaybe<NestedEnumTokenTypeFilter>
    equals?: InputMaybe<TokenType>
    in?: InputMaybe<Array<TokenType>>
    not?: InputMaybe<NestedEnumTokenTypeWithAggregatesFilter>
    notIn?: InputMaybe<Array<TokenType>>
}

export type FloatFieldUpdateOperationsInput = {
    decrement?: InputMaybe<Scalars['Float']>
    divide?: InputMaybe<Scalars['Float']>
    increment?: InputMaybe<Scalars['Float']>
    multiply?: InputMaybe<Scalars['Float']>
    set?: InputMaybe<Scalars['Float']>
}

export type FloatFilter = {
    equals?: InputMaybe<Scalars['Float']>
    gt?: InputMaybe<Scalars['Float']>
    gte?: InputMaybe<Scalars['Float']>
    in?: InputMaybe<Array<Scalars['Float']>>
    lt?: InputMaybe<Scalars['Float']>
    lte?: InputMaybe<Scalars['Float']>
    not?: InputMaybe<NestedFloatFilter>
    notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type FloatWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedFloatFilter>
    _min?: InputMaybe<NestedFloatFilter>
    _sum?: InputMaybe<NestedFloatFilter>
    equals?: InputMaybe<Scalars['Float']>
    gt?: InputMaybe<Scalars['Float']>
    gte?: InputMaybe<Scalars['Float']>
    in?: InputMaybe<Array<Scalars['Float']>>
    lt?: InputMaybe<Scalars['Float']>
    lte?: InputMaybe<Scalars['Float']>
    not?: InputMaybe<NestedFloatWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type IntFieldUpdateOperationsInput = {
    decrement?: InputMaybe<Scalars['Int']>
    divide?: InputMaybe<Scalars['Int']>
    increment?: InputMaybe<Scalars['Int']>
    multiply?: InputMaybe<Scalars['Int']>
    set?: InputMaybe<Scalars['Int']>
}

export type IntFilter = {
    equals?: InputMaybe<Scalars['Int']>
    gt?: InputMaybe<Scalars['Int']>
    gte?: InputMaybe<Scalars['Int']>
    in?: InputMaybe<Array<Scalars['Int']>>
    lt?: InputMaybe<Scalars['Int']>
    lte?: InputMaybe<Scalars['Int']>
    not?: InputMaybe<NestedIntFilter>
    notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type IntWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedIntFilter>
    _min?: InputMaybe<NestedIntFilter>
    _sum?: InputMaybe<NestedIntFilter>
    equals?: InputMaybe<Scalars['Int']>
    gt?: InputMaybe<Scalars['Int']>
    gte?: InputMaybe<Scalars['Int']>
    in?: InputMaybe<Array<Scalars['Int']>>
    lt?: InputMaybe<Scalars['Int']>
    lte?: InputMaybe<Scalars['Int']>
    not?: InputMaybe<NestedIntWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type ListItem = {
    __typename?: 'ListItem'
    id: Scalars['String']
    importance: Scalars['Int']
    isPurchased: Scalars['Boolean']
    product: Product
    productId: Scalars['String']
    quantity: Scalars['Int']
}

export type ListItemAvgAggregate = {
    __typename?: 'ListItemAvgAggregate'
    importance?: Maybe<Scalars['Float']>
    quantity?: Maybe<Scalars['Float']>
}

export type ListItemAvgOrderByAggregateInput = {
    importance?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemCountAggregate = {
    __typename?: 'ListItemCountAggregate'
    _all: Scalars['Int']
    id: Scalars['Int']
    importance: Scalars['Int']
    isPurchased: Scalars['Int']
    productId: Scalars['Int']
    quantity: Scalars['Int']
}

export type ListItemCountOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>
    importance?: InputMaybe<SortOrder>
    isPurchased?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemCreateInput = {
    id?: InputMaybe<Scalars['String']>
    importance?: InputMaybe<Scalars['Int']>
    isPurchased?: InputMaybe<Scalars['Boolean']>
    product: ProductCreateNestedOneWithoutInListItemInput
    quantity?: InputMaybe<Scalars['Int']>
}

export type ListItemCreateManyInput = {
    id?: InputMaybe<Scalars['String']>
    importance?: InputMaybe<Scalars['Int']>
    isPurchased?: InputMaybe<Scalars['Boolean']>
    productId: Scalars['String']
    quantity?: InputMaybe<Scalars['Int']>
}

export type ListItemCreateManyProductInput = {
    id?: InputMaybe<Scalars['String']>
    importance?: InputMaybe<Scalars['Int']>
    isPurchased?: InputMaybe<Scalars['Boolean']>
    quantity?: InputMaybe<Scalars['Int']>
}

export type ListItemCreateManyProductInputEnvelope = {
    data: Array<ListItemCreateManyProductInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type ListItemCreateNestedManyWithoutProductInput = {
    connect?: InputMaybe<Array<ListItemWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ListItemCreateOrConnectWithoutProductInput>>
    create?: InputMaybe<Array<ListItemCreateWithoutProductInput>>
    createMany?: InputMaybe<ListItemCreateManyProductInputEnvelope>
}

export type ListItemCreateOrConnectWithoutProductInput = {
    create: ListItemCreateWithoutProductInput
    where: ListItemWhereUniqueInput
}

export type ListItemCreateWithoutProductInput = {
    id?: InputMaybe<Scalars['String']>
    importance?: InputMaybe<Scalars['Int']>
    isPurchased?: InputMaybe<Scalars['Boolean']>
    quantity?: InputMaybe<Scalars['Int']>
}

export type ListItemGroupBy = {
    __typename?: 'ListItemGroupBy'
    _avg?: Maybe<ListItemAvgAggregate>
    _count?: Maybe<ListItemCountAggregate>
    _max?: Maybe<ListItemMaxAggregate>
    _min?: Maybe<ListItemMinAggregate>
    _sum?: Maybe<ListItemSumAggregate>
    id: Scalars['String']
    importance: Scalars['Int']
    isPurchased: Scalars['Boolean']
    productId: Scalars['String']
    quantity: Scalars['Int']
}

export type ListItemListRelationFilter = {
    every?: InputMaybe<ListItemWhereInput>
    none?: InputMaybe<ListItemWhereInput>
    some?: InputMaybe<ListItemWhereInput>
}

export type ListItemMaxAggregate = {
    __typename?: 'ListItemMaxAggregate'
    id?: Maybe<Scalars['String']>
    importance?: Maybe<Scalars['Int']>
    isPurchased?: Maybe<Scalars['Boolean']>
    productId?: Maybe<Scalars['String']>
    quantity?: Maybe<Scalars['Int']>
}

export type ListItemMaxOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>
    importance?: InputMaybe<SortOrder>
    isPurchased?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemMinAggregate = {
    __typename?: 'ListItemMinAggregate'
    id?: Maybe<Scalars['String']>
    importance?: Maybe<Scalars['Int']>
    isPurchased?: Maybe<Scalars['Boolean']>
    productId?: Maybe<Scalars['String']>
    quantity?: Maybe<Scalars['Int']>
}

export type ListItemMinOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>
    importance?: InputMaybe<SortOrder>
    isPurchased?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>
}

export type ListItemOrderByWithAggregationInput = {
    _avg?: InputMaybe<ListItemAvgOrderByAggregateInput>
    _count?: InputMaybe<ListItemCountOrderByAggregateInput>
    _max?: InputMaybe<ListItemMaxOrderByAggregateInput>
    _min?: InputMaybe<ListItemMinOrderByAggregateInput>
    _sum?: InputMaybe<ListItemSumOrderByAggregateInput>
    id?: InputMaybe<SortOrder>
    importance?: InputMaybe<SortOrder>
    isPurchased?: InputMaybe<SortOrder>
    productId?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemOrderByWithRelationInput = {
    id?: InputMaybe<SortOrder>
    importance?: InputMaybe<SortOrder>
    isPurchased?: InputMaybe<SortOrder>
    product?: InputMaybe<ProductOrderByWithRelationInput>
    productId?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export enum ListItemScalarFieldEnum {
    Id = 'id',
    Importance = 'importance',
    IsPurchased = 'isPurchased',
    ProductId = 'productId',
    Quantity = 'quantity',
}

export type ListItemScalarWhereInput = {
    AND?: InputMaybe<Array<ListItemScalarWhereInput>>
    NOT?: InputMaybe<Array<ListItemScalarWhereInput>>
    OR?: InputMaybe<Array<ListItemScalarWhereInput>>
    id?: InputMaybe<StringFilter>
    importance?: InputMaybe<IntFilter>
    isPurchased?: InputMaybe<BoolFilter>
    productId?: InputMaybe<StringFilter>
    quantity?: InputMaybe<IntFilter>
}

export type ListItemScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<ListItemScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<ListItemScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<ListItemScalarWhereWithAggregatesInput>>
    id?: InputMaybe<StringWithAggregatesFilter>
    importance?: InputMaybe<IntWithAggregatesFilter>
    isPurchased?: InputMaybe<BoolWithAggregatesFilter>
    productId?: InputMaybe<StringWithAggregatesFilter>
    quantity?: InputMaybe<IntWithAggregatesFilter>
}

export type ListItemSumAggregate = {
    __typename?: 'ListItemSumAggregate'
    importance?: Maybe<Scalars['Int']>
    quantity?: Maybe<Scalars['Int']>
}

export type ListItemSumOrderByAggregateInput = {
    importance?: InputMaybe<SortOrder>
    quantity?: InputMaybe<SortOrder>
}

export type ListItemUpdateInput = {
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    importance?: InputMaybe<IntFieldUpdateOperationsInput>
    isPurchased?: InputMaybe<BoolFieldUpdateOperationsInput>
    product?: InputMaybe<ProductUpdateOneRequiredWithoutInListItemInput>
    quantity?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ListItemUpdateManyMutationInput = {
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    importance?: InputMaybe<IntFieldUpdateOperationsInput>
    isPurchased?: InputMaybe<BoolFieldUpdateOperationsInput>
    quantity?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ListItemUpdateManyWithWhereWithoutProductInput = {
    data: ListItemUpdateManyMutationInput
    where: ListItemScalarWhereInput
}

export type ListItemUpdateManyWithoutProductInput = {
    connect?: InputMaybe<Array<ListItemWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ListItemCreateOrConnectWithoutProductInput>>
    create?: InputMaybe<Array<ListItemCreateWithoutProductInput>>
    createMany?: InputMaybe<ListItemCreateManyProductInputEnvelope>
    delete?: InputMaybe<Array<ListItemWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<ListItemScalarWhereInput>>
    disconnect?: InputMaybe<Array<ListItemWhereUniqueInput>>
    set?: InputMaybe<Array<ListItemWhereUniqueInput>>
    update?: InputMaybe<Array<ListItemUpdateWithWhereUniqueWithoutProductInput>>
    updateMany?: InputMaybe<Array<ListItemUpdateManyWithWhereWithoutProductInput>>
    upsert?: InputMaybe<Array<ListItemUpsertWithWhereUniqueWithoutProductInput>>
}

export type ListItemUpdateWithWhereUniqueWithoutProductInput = {
    data: ListItemUpdateWithoutProductInput
    where: ListItemWhereUniqueInput
}

export type ListItemUpdateWithoutProductInput = {
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    importance?: InputMaybe<IntFieldUpdateOperationsInput>
    isPurchased?: InputMaybe<BoolFieldUpdateOperationsInput>
    quantity?: InputMaybe<IntFieldUpdateOperationsInput>
}

export type ListItemUpsertWithWhereUniqueWithoutProductInput = {
    create: ListItemCreateWithoutProductInput
    update: ListItemUpdateWithoutProductInput
    where: ListItemWhereUniqueInput
}

export type ListItemWhereInput = {
    AND?: InputMaybe<Array<ListItemWhereInput>>
    NOT?: InputMaybe<Array<ListItemWhereInput>>
    OR?: InputMaybe<Array<ListItemWhereInput>>
    id?: InputMaybe<StringFilter>
    importance?: InputMaybe<IntFilter>
    isPurchased?: InputMaybe<BoolFilter>
    product?: InputMaybe<ProductRelationFilter>
    productId?: InputMaybe<StringFilter>
    quantity?: InputMaybe<IntFilter>
}

export type ListItemWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']>
}

export type Location = {
    __typename?: 'Location'
    address: Scalars['String']
    id: Scalars['String']
    lat: Scalars['Float']
    long: Scalars['Float']
    ofShop: Shop
}

export type LocationAvgAggregate = {
    __typename?: 'LocationAvgAggregate'
    lat?: Maybe<Scalars['Float']>
    long?: Maybe<Scalars['Float']>
}

export type LocationAvgOrderByAggregateInput = {
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationCountAggregate = {
    __typename?: 'LocationCountAggregate'
    _all: Scalars['Int']
    address: Scalars['Int']
    id: Scalars['Int']
    lat: Scalars['Int']
    long: Scalars['Int']
}

export type LocationCountOrderByAggregateInput = {
    address?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationCreateInput = {
    address: Scalars['String']
    lat: Scalars['Float']
    long: Scalars['Float']
    ofShop?: InputMaybe<ShopCreateNestedOneWithoutLocationInput>
}

export type LocationCreateManyInput = {
    address: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    lat: Scalars['Float']
    long: Scalars['Float']
}

export type LocationCreateNestedOneWithoutOfShopInput = {
    connect?: InputMaybe<LocationWhereUniqueInput>
    connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutOfShopInput>
    create?: InputMaybe<LocationCreateWithoutOfShopInput>
}

export type LocationCreateOrConnectWithoutOfShopInput = {
    create: LocationCreateWithoutOfShopInput
    where: LocationWhereUniqueInput
}

export type LocationCreateWithoutOfShopInput = {
    address: Scalars['String']
    lat: Scalars['Float']
    long: Scalars['Float']
}

export type LocationGroupBy = {
    __typename?: 'LocationGroupBy'
    _avg?: Maybe<LocationAvgAggregate>
    _count?: Maybe<LocationCountAggregate>
    _max?: Maybe<LocationMaxAggregate>
    _min?: Maybe<LocationMinAggregate>
    _sum?: Maybe<LocationSumAggregate>
    address: Scalars['String']
    id: Scalars['String']
    lat: Scalars['Float']
    long: Scalars['Float']
}

export type LocationMaxAggregate = {
    __typename?: 'LocationMaxAggregate'
    address?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    lat?: Maybe<Scalars['Float']>
    long?: Maybe<Scalars['Float']>
}

export type LocationMaxOrderByAggregateInput = {
    address?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationMinAggregate = {
    __typename?: 'LocationMinAggregate'
    address?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    lat?: Maybe<Scalars['Float']>
    long?: Maybe<Scalars['Float']>
}

export type LocationMinOrderByAggregateInput = {
    address?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationOrderByWithAggregationInput = {
    _avg?: InputMaybe<LocationAvgOrderByAggregateInput>
    _count?: InputMaybe<LocationCountOrderByAggregateInput>
    _max?: InputMaybe<LocationMaxOrderByAggregateInput>
    _min?: InputMaybe<LocationMinOrderByAggregateInput>
    _sum?: InputMaybe<LocationSumOrderByAggregateInput>
    address?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationOrderByWithRelationInput = {
    address?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
    ofShop?: InputMaybe<ShopOrderByWithRelationInput>
}

export type LocationRelationFilter = {
    is?: InputMaybe<LocationWhereInput>
    isNot?: InputMaybe<LocationWhereInput>
}

export enum LocationScalarFieldEnum {
    Address = 'address',
    Id = 'id',
    Lat = 'lat',
    Long = 'long',
}

export type LocationScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>
    address?: InputMaybe<StringWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    lat?: InputMaybe<FloatWithAggregatesFilter>
    long?: InputMaybe<FloatWithAggregatesFilter>
}

export type LocationSumAggregate = {
    __typename?: 'LocationSumAggregate'
    lat?: Maybe<Scalars['Float']>
    long?: Maybe<Scalars['Float']>
}

export type LocationSumOrderByAggregateInput = {
    lat?: InputMaybe<SortOrder>
    long?: InputMaybe<SortOrder>
}

export type LocationUpdateInput = {
    address?: InputMaybe<StringFieldUpdateOperationsInput>
    lat?: InputMaybe<FloatFieldUpdateOperationsInput>
    long?: InputMaybe<FloatFieldUpdateOperationsInput>
    ofShop?: InputMaybe<ShopUpdateOneRequiredWithoutLocationInput>
}

export type LocationUpdateManyMutationInput = {
    address?: InputMaybe<StringFieldUpdateOperationsInput>
    lat?: InputMaybe<FloatFieldUpdateOperationsInput>
    long?: InputMaybe<FloatFieldUpdateOperationsInput>
}

export type LocationUpdateOneWithoutOfShopInput = {
    connect?: InputMaybe<LocationWhereUniqueInput>
    connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutOfShopInput>
    create?: InputMaybe<LocationCreateWithoutOfShopInput>
    delete?: InputMaybe<Scalars['Boolean']>
    disconnect?: InputMaybe<Scalars['Boolean']>
    update?: InputMaybe<LocationUpdateWithoutOfShopInput>
    upsert?: InputMaybe<LocationUpsertWithoutOfShopInput>
}

export type LocationUpdateWithoutOfShopInput = {
    address?: InputMaybe<StringFieldUpdateOperationsInput>
    lat?: InputMaybe<FloatFieldUpdateOperationsInput>
    long?: InputMaybe<FloatFieldUpdateOperationsInput>
}

export type LocationUpsertWithoutOfShopInput = {
    create: LocationCreateWithoutOfShopInput
    update: LocationUpdateWithoutOfShopInput
}

export type LocationWhereInput = {
    AND?: InputMaybe<Array<LocationWhereInput>>
    NOT?: InputMaybe<Array<LocationWhereInput>>
    OR?: InputMaybe<Array<LocationWhereInput>>
    address?: InputMaybe<StringFilter>
    id?: InputMaybe<StringFilter>
    lat?: InputMaybe<FloatFilter>
    long?: InputMaybe<FloatFilter>
    ofShop?: InputMaybe<ShopRelationFilter>
}

export type LocationWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']>
}

export type Mutation = {
    __typename?: 'Mutation'
    createEdgeProductShop: EdgeProductShop
    createListItem: ListItem
    createLocation: Location
    createManyEdgeProductShop: AffectedRowsOutput
    createManyListItem: AffectedRowsOutput
    createManyLocation: AffectedRowsOutput
    createManyProduct: AffectedRowsOutput
    createManyShop: AffectedRowsOutput
    createManyToken: AffectedRowsOutput
    createManyUser: AffectedRowsOutput
    createProduct: Product
    createShop: Shop
    createToken: Token
    createUser: User
    deleteEdgeProductShop?: Maybe<EdgeProductShop>
    deleteListItem?: Maybe<ListItem>
    deleteLocation?: Maybe<Location>
    deleteManyEdgeProductShop: AffectedRowsOutput
    deleteManyListItem: AffectedRowsOutput
    deleteManyLocation: AffectedRowsOutput
    deleteManyProduct: AffectedRowsOutput
    deleteManyShop: AffectedRowsOutput
    deleteManyToken: AffectedRowsOutput
    deleteManyUser: AffectedRowsOutput
    deleteProduct?: Maybe<Product>
    deleteShop?: Maybe<Shop>
    deleteToken?: Maybe<Token>
    deleteUser?: Maybe<User>
    updateEdgeProductShop?: Maybe<EdgeProductShop>
    updateListItem?: Maybe<ListItem>
    updateLocation?: Maybe<Location>
    updateManyEdgeProductShop: AffectedRowsOutput
    updateManyListItem: AffectedRowsOutput
    updateManyLocation: AffectedRowsOutput
    updateManyProduct: AffectedRowsOutput
    updateManyShop: AffectedRowsOutput
    updateManyToken: AffectedRowsOutput
    updateManyUser: AffectedRowsOutput
    updateProduct?: Maybe<Product>
    updateShop?: Maybe<Shop>
    updateToken?: Maybe<Token>
    updateUser?: Maybe<User>
    upsertEdgeProductShop: EdgeProductShop
    upsertListItem: ListItem
    upsertLocation: Location
    upsertProduct: Product
    upsertShop: Shop
    upsertToken: Token
    upsertUser: User
}

export type MutationCreateEdgeProductShopArgs = {
    data: EdgeProductShopCreateInput
}

export type MutationCreateListItemArgs = {
    data: ListItemCreateInput
}

export type MutationCreateLocationArgs = {
    data: LocationCreateInput
}

export type MutationCreateManyEdgeProductShopArgs = {
    data: Array<EdgeProductShopCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyListItemArgs = {
    data: Array<ListItemCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyLocationArgs = {
    data: Array<LocationCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyProductArgs = {
    data: Array<ProductCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyShopArgs = {
    data: Array<ShopCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyTokenArgs = {
    data: Array<TokenCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyUserArgs = {
    data: Array<UserCreateManyInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateProductArgs = {
    data: ProductCreateInput
}

export type MutationCreateShopArgs = {
    data: ShopCreateInput
}

export type MutationCreateTokenArgs = {
    data: TokenCreateInput
}

export type MutationCreateUserArgs = {
    data: UserCreateInput
}

export type MutationDeleteEdgeProductShopArgs = {
    where: EdgeProductShopWhereUniqueInput
}

export type MutationDeleteListItemArgs = {
    where: ListItemWhereUniqueInput
}

export type MutationDeleteLocationArgs = {
    where: LocationWhereUniqueInput
}

export type MutationDeleteManyEdgeProductShopArgs = {
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type MutationDeleteManyListItemArgs = {
    where?: InputMaybe<ListItemWhereInput>
}

export type MutationDeleteManyLocationArgs = {
    where?: InputMaybe<LocationWhereInput>
}

export type MutationDeleteManyProductArgs = {
    where?: InputMaybe<ProductWhereInput>
}

export type MutationDeleteManyShopArgs = {
    where?: InputMaybe<ShopWhereInput>
}

export type MutationDeleteManyTokenArgs = {
    where?: InputMaybe<TokenWhereInput>
}

export type MutationDeleteManyUserArgs = {
    where?: InputMaybe<UserWhereInput>
}

export type MutationDeleteProductArgs = {
    where: ProductWhereUniqueInput
}

export type MutationDeleteShopArgs = {
    where: ShopWhereUniqueInput
}

export type MutationDeleteTokenArgs = {
    where: TokenWhereUniqueInput
}

export type MutationDeleteUserArgs = {
    where: UserWhereUniqueInput
}

export type MutationUpdateEdgeProductShopArgs = {
    data: EdgeProductShopUpdateInput
    where: EdgeProductShopWhereUniqueInput
}

export type MutationUpdateListItemArgs = {
    data: ListItemUpdateInput
    where: ListItemWhereUniqueInput
}

export type MutationUpdateLocationArgs = {
    data: LocationUpdateInput
    where: LocationWhereUniqueInput
}

export type MutationUpdateManyEdgeProductShopArgs = {
    data: EdgeProductShopUpdateManyMutationInput
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type MutationUpdateManyListItemArgs = {
    data: ListItemUpdateManyMutationInput
    where?: InputMaybe<ListItemWhereInput>
}

export type MutationUpdateManyLocationArgs = {
    data: LocationUpdateManyMutationInput
    where?: InputMaybe<LocationWhereInput>
}

export type MutationUpdateManyProductArgs = {
    data: ProductUpdateManyMutationInput
    where?: InputMaybe<ProductWhereInput>
}

export type MutationUpdateManyShopArgs = {
    data: ShopUpdateManyMutationInput
    where?: InputMaybe<ShopWhereInput>
}

export type MutationUpdateManyTokenArgs = {
    data: TokenUpdateManyMutationInput
    where?: InputMaybe<TokenWhereInput>
}

export type MutationUpdateManyUserArgs = {
    data: UserUpdateManyMutationInput
    where?: InputMaybe<UserWhereInput>
}

export type MutationUpdateProductArgs = {
    data: ProductUpdateInput
    where: ProductWhereUniqueInput
}

export type MutationUpdateShopArgs = {
    data: ShopUpdateInput
    where: ShopWhereUniqueInput
}

export type MutationUpdateTokenArgs = {
    data: TokenUpdateInput
    where: TokenWhereUniqueInput
}

export type MutationUpdateUserArgs = {
    data: UserUpdateInput
    where: UserWhereUniqueInput
}

export type MutationUpsertEdgeProductShopArgs = {
    create: EdgeProductShopCreateInput
    update: EdgeProductShopUpdateInput
    where: EdgeProductShopWhereUniqueInput
}

export type MutationUpsertListItemArgs = {
    create: ListItemCreateInput
    update: ListItemUpdateInput
    where: ListItemWhereUniqueInput
}

export type MutationUpsertLocationArgs = {
    create: LocationCreateInput
    update: LocationUpdateInput
    where: LocationWhereUniqueInput
}

export type MutationUpsertProductArgs = {
    create: ProductCreateInput
    update: ProductUpdateInput
    where: ProductWhereUniqueInput
}

export type MutationUpsertShopArgs = {
    create: ShopCreateInput
    update: ShopUpdateInput
    where: ShopWhereUniqueInput
}

export type MutationUpsertTokenArgs = {
    create: TokenCreateInput
    update: TokenUpdateInput
    where: TokenWhereUniqueInput
}

export type MutationUpsertUserArgs = {
    create: UserCreateInput
    update: UserUpdateInput
    where: UserWhereUniqueInput
}

export type NestedBoolFilter = {
    equals?: InputMaybe<Scalars['Boolean']>
    not?: InputMaybe<NestedBoolFilter>
}

export type NestedBoolWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedBoolFilter>
    _min?: InputMaybe<NestedBoolFilter>
    equals?: InputMaybe<Scalars['Boolean']>
    not?: InputMaybe<NestedBoolWithAggregatesFilter>
}

export type NestedDateTimeFilter = {
    equals?: InputMaybe<Scalars['DateTime']>
    gt?: InputMaybe<Scalars['DateTime']>
    gte?: InputMaybe<Scalars['DateTime']>
    in?: InputMaybe<Array<Scalars['DateTime']>>
    lt?: InputMaybe<Scalars['DateTime']>
    lte?: InputMaybe<Scalars['DateTime']>
    not?: InputMaybe<NestedDateTimeFilter>
    notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type NestedDateTimeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedDateTimeFilter>
    _min?: InputMaybe<NestedDateTimeFilter>
    equals?: InputMaybe<Scalars['DateTime']>
    gt?: InputMaybe<Scalars['DateTime']>
    gte?: InputMaybe<Scalars['DateTime']>
    in?: InputMaybe<Array<Scalars['DateTime']>>
    lt?: InputMaybe<Scalars['DateTime']>
    lte?: InputMaybe<Scalars['DateTime']>
    not?: InputMaybe<NestedDateTimeWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type NestedEnumCurrencyFilter = {
    equals?: InputMaybe<Currency>
    in?: InputMaybe<Array<Currency>>
    not?: InputMaybe<NestedEnumCurrencyFilter>
    notIn?: InputMaybe<Array<Currency>>
}

export type NestedEnumCurrencyWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedEnumCurrencyFilter>
    _min?: InputMaybe<NestedEnumCurrencyFilter>
    equals?: InputMaybe<Currency>
    in?: InputMaybe<Array<Currency>>
    not?: InputMaybe<NestedEnumCurrencyWithAggregatesFilter>
    notIn?: InputMaybe<Array<Currency>>
}

export type NestedEnumTokenTypeFilter = {
    equals?: InputMaybe<TokenType>
    in?: InputMaybe<Array<TokenType>>
    not?: InputMaybe<NestedEnumTokenTypeFilter>
    notIn?: InputMaybe<Array<TokenType>>
}

export type NestedEnumTokenTypeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedEnumTokenTypeFilter>
    _min?: InputMaybe<NestedEnumTokenTypeFilter>
    equals?: InputMaybe<TokenType>
    in?: InputMaybe<Array<TokenType>>
    not?: InputMaybe<NestedEnumTokenTypeWithAggregatesFilter>
    notIn?: InputMaybe<Array<TokenType>>
}

export type NestedFloatFilter = {
    equals?: InputMaybe<Scalars['Float']>
    gt?: InputMaybe<Scalars['Float']>
    gte?: InputMaybe<Scalars['Float']>
    in?: InputMaybe<Array<Scalars['Float']>>
    lt?: InputMaybe<Scalars['Float']>
    lte?: InputMaybe<Scalars['Float']>
    not?: InputMaybe<NestedFloatFilter>
    notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type NestedFloatWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedFloatFilter>
    _min?: InputMaybe<NestedFloatFilter>
    _sum?: InputMaybe<NestedFloatFilter>
    equals?: InputMaybe<Scalars['Float']>
    gt?: InputMaybe<Scalars['Float']>
    gte?: InputMaybe<Scalars['Float']>
    in?: InputMaybe<Array<Scalars['Float']>>
    lt?: InputMaybe<Scalars['Float']>
    lte?: InputMaybe<Scalars['Float']>
    not?: InputMaybe<NestedFloatWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type NestedIntFilter = {
    equals?: InputMaybe<Scalars['Int']>
    gt?: InputMaybe<Scalars['Int']>
    gte?: InputMaybe<Scalars['Int']>
    in?: InputMaybe<Array<Scalars['Int']>>
    lt?: InputMaybe<Scalars['Int']>
    lte?: InputMaybe<Scalars['Int']>
    not?: InputMaybe<NestedIntFilter>
    notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedIntNullableFilter = {
    equals?: InputMaybe<Scalars['Int']>
    gt?: InputMaybe<Scalars['Int']>
    gte?: InputMaybe<Scalars['Int']>
    in?: InputMaybe<Array<Scalars['Int']>>
    lt?: InputMaybe<Scalars['Int']>
    lte?: InputMaybe<Scalars['Int']>
    not?: InputMaybe<NestedIntNullableFilter>
    notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedIntWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedIntFilter>
    _min?: InputMaybe<NestedIntFilter>
    _sum?: InputMaybe<NestedIntFilter>
    equals?: InputMaybe<Scalars['Int']>
    gt?: InputMaybe<Scalars['Int']>
    gte?: InputMaybe<Scalars['Int']>
    in?: InputMaybe<Array<Scalars['Int']>>
    lt?: InputMaybe<Scalars['Int']>
    lte?: InputMaybe<Scalars['Int']>
    not?: InputMaybe<NestedIntWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedStringFilter = {
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringNullableFilter = {
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringNullableFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringNullableWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntNullableFilter>
    _max?: InputMaybe<NestedStringNullableFilter>
    _min?: InputMaybe<NestedStringNullableFilter>
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedStringFilter>
    _min?: InputMaybe<NestedStringFilter>
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type NullableStringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['String']>
}

export type Product = {
    __typename?: 'Product'
    _count?: Maybe<ProductCount>
    createdAt: Scalars['DateTime']
    createdBy: User
    currency: Currency
    id: Scalars['String']
    inListItem: Array<ListItem>
    inShops: Array<EdgeProductShop>
    name: Scalars['String']
    price: Scalars['Float']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type ProductInListItemArgs = {
    cursor?: InputMaybe<ListItemWhereUniqueInput>
    distinct?: InputMaybe<Array<ListItemScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ListItemOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ListItemWhereInput>
}

export type ProductInShopsArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    distinct?: InputMaybe<Array<EdgeProductShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type ProductAvgAggregate = {
    __typename?: 'ProductAvgAggregate'
    price?: Maybe<Scalars['Float']>
}

export type ProductAvgOrderByAggregateInput = {
    price?: InputMaybe<SortOrder>
}

export type ProductCount = {
    __typename?: 'ProductCount'
    inListItem: Scalars['Int']
    inShops: Scalars['Int']
}

export type ProductCountAggregate = {
    __typename?: 'ProductCountAggregate'
    _all: Scalars['Int']
    createdAt: Scalars['Int']
    currency: Scalars['Int']
    id: Scalars['Int']
    name: Scalars['Int']
    price: Scalars['Int']
    updatedAt: Scalars['Int']
    userId: Scalars['Int']
}

export type ProductCountOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    currency?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    name?: InputMaybe<SortOrder>
    price?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ProductCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedProdcutsInput
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    inListItem?: InputMaybe<ListItemCreateNestedManyWithoutProductInput>
    inShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutProductInput>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProductCreateManyCreatedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProductCreateManyCreatedByInputEnvelope = {
    data: Array<ProductCreateManyCreatedByInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type ProductCreateManyInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
}

export type ProductCreateNestedManyWithoutCreatedByInput = {
    connect?: InputMaybe<Array<ProductWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCreatedByInput>>
    create?: InputMaybe<Array<ProductCreateWithoutCreatedByInput>>
    createMany?: InputMaybe<ProductCreateManyCreatedByInputEnvelope>
}

export type ProductCreateNestedOneWithoutInListItemInput = {
    connect?: InputMaybe<ProductWhereUniqueInput>
    connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInListItemInput>
    create?: InputMaybe<ProductCreateWithoutInListItemInput>
}

export type ProductCreateNestedOneWithoutInShopsInput = {
    connect?: InputMaybe<ProductWhereUniqueInput>
    connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInShopsInput>
    create?: InputMaybe<ProductCreateWithoutInShopsInput>
}

export type ProductCreateOrConnectWithoutCreatedByInput = {
    create: ProductCreateWithoutCreatedByInput
    where: ProductWhereUniqueInput
}

export type ProductCreateOrConnectWithoutInListItemInput = {
    create: ProductCreateWithoutInListItemInput
    where: ProductWhereUniqueInput
}

export type ProductCreateOrConnectWithoutInShopsInput = {
    create: ProductCreateWithoutInShopsInput
    where: ProductWhereUniqueInput
}

export type ProductCreateWithoutCreatedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    inListItem?: InputMaybe<ListItemCreateNestedManyWithoutProductInput>
    inShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutProductInput>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProductCreateWithoutInListItemInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedProdcutsInput
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    inShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutProductInput>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProductCreateWithoutInShopsInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedProdcutsInput
    currency?: InputMaybe<Currency>
    id?: InputMaybe<Scalars['String']>
    inListItem?: InputMaybe<ListItemCreateNestedManyWithoutProductInput>
    name?: InputMaybe<Scalars['String']>
    price?: InputMaybe<Scalars['Float']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProductGroupBy = {
    __typename?: 'ProductGroupBy'
    _avg?: Maybe<ProductAvgAggregate>
    _count?: Maybe<ProductCountAggregate>
    _max?: Maybe<ProductMaxAggregate>
    _min?: Maybe<ProductMinAggregate>
    _sum?: Maybe<ProductSumAggregate>
    createdAt: Scalars['DateTime']
    currency: Currency
    id: Scalars['String']
    name: Scalars['String']
    price: Scalars['Float']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type ProductListRelationFilter = {
    every?: InputMaybe<ProductWhereInput>
    none?: InputMaybe<ProductWhereInput>
    some?: InputMaybe<ProductWhereInput>
}

export type ProductMaxAggregate = {
    __typename?: 'ProductMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    currency?: Maybe<Currency>
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    price?: Maybe<Scalars['Float']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type ProductMaxOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    currency?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    name?: InputMaybe<SortOrder>
    price?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ProductMinAggregate = {
    __typename?: 'ProductMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    currency?: Maybe<Currency>
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    price?: Maybe<Scalars['Float']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type ProductMinOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    currency?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    name?: InputMaybe<SortOrder>
    price?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ProductOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>
}

export type ProductOrderByWithAggregationInput = {
    _avg?: InputMaybe<ProductAvgOrderByAggregateInput>
    _count?: InputMaybe<ProductCountOrderByAggregateInput>
    _max?: InputMaybe<ProductMaxOrderByAggregateInput>
    _min?: InputMaybe<ProductMinOrderByAggregateInput>
    _sum?: InputMaybe<ProductSumOrderByAggregateInput>
    createdAt?: InputMaybe<SortOrder>
    currency?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    name?: InputMaybe<SortOrder>
    price?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ProductOrderByWithRelationInput = {
    createdAt?: InputMaybe<SortOrder>
    createdBy?: InputMaybe<UserOrderByWithRelationInput>
    currency?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    inListItem?: InputMaybe<ListItemOrderByRelationAggregateInput>
    inShops?: InputMaybe<EdgeProductShopOrderByRelationAggregateInput>
    name?: InputMaybe<SortOrder>
    price?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ProductRelationFilter = {
    is?: InputMaybe<ProductWhereInput>
    isNot?: InputMaybe<ProductWhereInput>
}

export enum ProductScalarFieldEnum {
    CreatedAt = 'createdAt',
    Currency = 'currency',
    Id = 'id',
    Name = 'name',
    Price = 'price',
    UpdatedAt = 'updatedAt',
    UserId = 'userId',
}

export type ProductScalarWhereInput = {
    AND?: InputMaybe<Array<ProductScalarWhereInput>>
    NOT?: InputMaybe<Array<ProductScalarWhereInput>>
    OR?: InputMaybe<Array<ProductScalarWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    currency?: InputMaybe<EnumCurrencyFilter>
    id?: InputMaybe<StringFilter>
    name?: InputMaybe<StringFilter>
    price?: InputMaybe<FloatFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type ProductScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>
    createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
    currency?: InputMaybe<EnumCurrencyWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    name?: InputMaybe<StringWithAggregatesFilter>
    price?: InputMaybe<FloatWithAggregatesFilter>
    updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>
    userId?: InputMaybe<StringWithAggregatesFilter>
}

export type ProductSumAggregate = {
    __typename?: 'ProductSumAggregate'
    price?: Maybe<Scalars['Float']>
}

export type ProductSumOrderByAggregateInput = {
    price?: InputMaybe<SortOrder>
}

export type ProductUpdateInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedProdcutsInput>
    currency?: InputMaybe<EnumCurrencyFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    inListItem?: InputMaybe<ListItemUpdateManyWithoutProductInput>
    inShops?: InputMaybe<EdgeProductShopUpdateManyWithoutProductInput>
    name?: InputMaybe<StringFieldUpdateOperationsInput>
    price?: InputMaybe<FloatFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProductUpdateManyMutationInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    currency?: InputMaybe<EnumCurrencyFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    name?: InputMaybe<StringFieldUpdateOperationsInput>
    price?: InputMaybe<FloatFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProductUpdateManyWithWhereWithoutCreatedByInput = {
    data: ProductUpdateManyMutationInput
    where: ProductScalarWhereInput
}

export type ProductUpdateManyWithoutCreatedByInput = {
    connect?: InputMaybe<Array<ProductWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCreatedByInput>>
    create?: InputMaybe<Array<ProductCreateWithoutCreatedByInput>>
    createMany?: InputMaybe<ProductCreateManyCreatedByInputEnvelope>
    delete?: InputMaybe<Array<ProductWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>
    disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>
    set?: InputMaybe<Array<ProductWhereUniqueInput>>
    update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCreatedByInput>>
    updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCreatedByInput>>
    upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCreatedByInput>>
}

export type ProductUpdateOneRequiredWithoutInListItemInput = {
    connect?: InputMaybe<ProductWhereUniqueInput>
    connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInListItemInput>
    create?: InputMaybe<ProductCreateWithoutInListItemInput>
    update?: InputMaybe<ProductUpdateWithoutInListItemInput>
    upsert?: InputMaybe<ProductUpsertWithoutInListItemInput>
}

export type ProductUpdateOneRequiredWithoutInShopsInput = {
    connect?: InputMaybe<ProductWhereUniqueInput>
    connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInShopsInput>
    create?: InputMaybe<ProductCreateWithoutInShopsInput>
    update?: InputMaybe<ProductUpdateWithoutInShopsInput>
    upsert?: InputMaybe<ProductUpsertWithoutInShopsInput>
}

export type ProductUpdateWithWhereUniqueWithoutCreatedByInput = {
    data: ProductUpdateWithoutCreatedByInput
    where: ProductWhereUniqueInput
}

export type ProductUpdateWithoutCreatedByInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    currency?: InputMaybe<EnumCurrencyFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    inListItem?: InputMaybe<ListItemUpdateManyWithoutProductInput>
    inShops?: InputMaybe<EdgeProductShopUpdateManyWithoutProductInput>
    name?: InputMaybe<StringFieldUpdateOperationsInput>
    price?: InputMaybe<FloatFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProductUpdateWithoutInListItemInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedProdcutsInput>
    currency?: InputMaybe<EnumCurrencyFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    inShops?: InputMaybe<EdgeProductShopUpdateManyWithoutProductInput>
    name?: InputMaybe<StringFieldUpdateOperationsInput>
    price?: InputMaybe<FloatFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProductUpdateWithoutInShopsInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedProdcutsInput>
    currency?: InputMaybe<EnumCurrencyFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    inListItem?: InputMaybe<ListItemUpdateManyWithoutProductInput>
    name?: InputMaybe<StringFieldUpdateOperationsInput>
    price?: InputMaybe<FloatFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ProductUpsertWithWhereUniqueWithoutCreatedByInput = {
    create: ProductCreateWithoutCreatedByInput
    update: ProductUpdateWithoutCreatedByInput
    where: ProductWhereUniqueInput
}

export type ProductUpsertWithoutInListItemInput = {
    create: ProductCreateWithoutInListItemInput
    update: ProductUpdateWithoutInListItemInput
}

export type ProductUpsertWithoutInShopsInput = {
    create: ProductCreateWithoutInShopsInput
    update: ProductUpdateWithoutInShopsInput
}

export type ProductWhereInput = {
    AND?: InputMaybe<Array<ProductWhereInput>>
    NOT?: InputMaybe<Array<ProductWhereInput>>
    OR?: InputMaybe<Array<ProductWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    createdBy?: InputMaybe<UserRelationFilter>
    currency?: InputMaybe<EnumCurrencyFilter>
    id?: InputMaybe<StringFilter>
    inListItem?: InputMaybe<ListItemListRelationFilter>
    inShops?: InputMaybe<EdgeProductShopListRelationFilter>
    name?: InputMaybe<StringFilter>
    price?: InputMaybe<FloatFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type ProductWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']>
}

export type Query = {
    __typename?: 'Query'
    aggregateEdgeProductShop: AggregateEdgeProductShop
    aggregateListItem: AggregateListItem
    aggregateLocation: AggregateLocation
    aggregateProduct: AggregateProduct
    aggregateShop: AggregateShop
    aggregateToken: AggregateToken
    aggregateUser: AggregateUser
    edgeProductShop?: Maybe<EdgeProductShop>
    edgeProductShops: Array<EdgeProductShop>
    findFirstEdgeProductShop?: Maybe<EdgeProductShop>
    findFirstListItem?: Maybe<ListItem>
    findFirstLocation?: Maybe<Location>
    findFirstProduct?: Maybe<Product>
    findFirstShop?: Maybe<Shop>
    findFirstToken?: Maybe<Token>
    findFirstUser?: Maybe<User>
    groupByEdgeProductShop: Array<EdgeProductShopGroupBy>
    groupByListItem: Array<ListItemGroupBy>
    groupByLocation: Array<LocationGroupBy>
    groupByProduct: Array<ProductGroupBy>
    groupByShop: Array<ShopGroupBy>
    groupByToken: Array<TokenGroupBy>
    groupByUser: Array<UserGroupBy>
    listItem?: Maybe<ListItem>
    listItems: Array<ListItem>
    location?: Maybe<Location>
    locations: Array<Location>
    product?: Maybe<Product>
    products: Array<Product>
    shop?: Maybe<Shop>
    shops: Array<Shop>
    token?: Maybe<Token>
    tokens: Array<Token>
    user?: Maybe<User>
    users: Array<User>
}

export type QueryAggregateEdgeProductShopArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type QueryAggregateListItemArgs = {
    cursor?: InputMaybe<ListItemWhereUniqueInput>
    orderBy?: InputMaybe<Array<ListItemOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ListItemWhereInput>
}

export type QueryAggregateLocationArgs = {
    cursor?: InputMaybe<LocationWhereUniqueInput>
    orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<LocationWhereInput>
}

export type QueryAggregateProductArgs = {
    cursor?: InputMaybe<ProductWhereUniqueInput>
    orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ProductWhereInput>
}

export type QueryAggregateShopArgs = {
    cursor?: InputMaybe<ShopWhereUniqueInput>
    orderBy?: InputMaybe<Array<ShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ShopWhereInput>
}

export type QueryAggregateTokenArgs = {
    cursor?: InputMaybe<TokenWhereUniqueInput>
    orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<TokenWhereInput>
}

export type QueryAggregateUserArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<UserWhereInput>
}

export type QueryEdgeProductShopArgs = {
    where: EdgeProductShopWhereUniqueInput
}

export type QueryEdgeProductShopsArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    distinct?: InputMaybe<Array<EdgeProductShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type QueryFindFirstEdgeProductShopArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    distinct?: InputMaybe<Array<EdgeProductShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type QueryFindFirstListItemArgs = {
    cursor?: InputMaybe<ListItemWhereUniqueInput>
    distinct?: InputMaybe<Array<ListItemScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ListItemOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ListItemWhereInput>
}

export type QueryFindFirstLocationArgs = {
    cursor?: InputMaybe<LocationWhereUniqueInput>
    distinct?: InputMaybe<Array<LocationScalarFieldEnum>>
    orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<LocationWhereInput>
}

export type QueryFindFirstProductArgs = {
    cursor?: InputMaybe<ProductWhereUniqueInput>
    distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ProductWhereInput>
}

export type QueryFindFirstShopArgs = {
    cursor?: InputMaybe<ShopWhereUniqueInput>
    distinct?: InputMaybe<Array<ShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ShopWhereInput>
}

export type QueryFindFirstTokenArgs = {
    cursor?: InputMaybe<TokenWhereUniqueInput>
    distinct?: InputMaybe<Array<TokenScalarFieldEnum>>
    orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<TokenWhereInput>
}

export type QueryFindFirstUserArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>
    distinct?: InputMaybe<Array<UserScalarFieldEnum>>
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<UserWhereInput>
}

export type QueryGroupByEdgeProductShopArgs = {
    by: Array<EdgeProductShopScalarFieldEnum>
    having?: InputMaybe<EdgeProductShopScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type QueryGroupByListItemArgs = {
    by: Array<ListItemScalarFieldEnum>
    having?: InputMaybe<ListItemScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<ListItemOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ListItemWhereInput>
}

export type QueryGroupByLocationArgs = {
    by: Array<LocationScalarFieldEnum>
    having?: InputMaybe<LocationScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<LocationOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<LocationWhereInput>
}

export type QueryGroupByProductArgs = {
    by: Array<ProductScalarFieldEnum>
    having?: InputMaybe<ProductScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ProductWhereInput>
}

export type QueryGroupByShopArgs = {
    by: Array<ShopScalarFieldEnum>
    having?: InputMaybe<ShopScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<ShopOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ShopWhereInput>
}

export type QueryGroupByTokenArgs = {
    by: Array<TokenScalarFieldEnum>
    having?: InputMaybe<TokenScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<TokenOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<TokenWhereInput>
}

export type QueryGroupByUserArgs = {
    by: Array<UserScalarFieldEnum>
    having?: InputMaybe<UserScalarWhereWithAggregatesInput>
    orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<UserWhereInput>
}

export type QueryListItemArgs = {
    where: ListItemWhereUniqueInput
}

export type QueryListItemsArgs = {
    cursor?: InputMaybe<ListItemWhereUniqueInput>
    distinct?: InputMaybe<Array<ListItemScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ListItemOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ListItemWhereInput>
}

export type QueryLocationArgs = {
    where: LocationWhereUniqueInput
}

export type QueryLocationsArgs = {
    cursor?: InputMaybe<LocationWhereUniqueInput>
    distinct?: InputMaybe<Array<LocationScalarFieldEnum>>
    orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<LocationWhereInput>
}

export type QueryProductArgs = {
    where: ProductWhereUniqueInput
}

export type QueryProductsArgs = {
    cursor?: InputMaybe<ProductWhereUniqueInput>
    distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ProductWhereInput>
}

export type QueryShopArgs = {
    where: ShopWhereUniqueInput
}

export type QueryShopsArgs = {
    cursor?: InputMaybe<ShopWhereUniqueInput>
    distinct?: InputMaybe<Array<ShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ShopWhereInput>
}

export type QueryTokenArgs = {
    where: TokenWhereUniqueInput
}

export type QueryTokensArgs = {
    cursor?: InputMaybe<TokenWhereUniqueInput>
    distinct?: InputMaybe<Array<TokenScalarFieldEnum>>
    orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<TokenWhereInput>
}

export type QueryUserArgs = {
    where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>
    distinct?: InputMaybe<Array<UserScalarFieldEnum>>
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<UserWhereInput>
}

export type Shop = {
    __typename?: 'Shop'
    _count?: Maybe<ShopCount>
    createdAt: Scalars['DateTime']
    createdBy: User
    hasProducts: Array<EdgeProductShop>
    id: Scalars['String']
    location?: Maybe<Location>
    shopName: Scalars['String']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type ShopHasProductsArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    distinct?: InputMaybe<Array<EdgeProductShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type ShopCount = {
    __typename?: 'ShopCount'
    hasProducts: Scalars['Int']
}

export type ShopCountAggregate = {
    __typename?: 'ShopCountAggregate'
    _all: Scalars['Int']
    createdAt: Scalars['Int']
    id: Scalars['Int']
    shopName: Scalars['Int']
    updatedAt: Scalars['Int']
    userId: Scalars['Int']
}

export type ShopCountOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    shopName?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ShopCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedShopsInput
    hasProducts?: InputMaybe<EdgeProductShopCreateNestedManyWithoutShopInput>
    id?: InputMaybe<Scalars['String']>
    location?: InputMaybe<LocationCreateNestedOneWithoutOfShopInput>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ShopCreateManyCreatedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ShopCreateManyCreatedByInputEnvelope = {
    data: Array<ShopCreateManyCreatedByInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type ShopCreateManyInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    id?: InputMaybe<Scalars['String']>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
}

export type ShopCreateNestedManyWithoutCreatedByInput = {
    connect?: InputMaybe<Array<ShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ShopCreateOrConnectWithoutCreatedByInput>>
    create?: InputMaybe<Array<ShopCreateWithoutCreatedByInput>>
    createMany?: InputMaybe<ShopCreateManyCreatedByInputEnvelope>
}

export type ShopCreateNestedOneWithoutHasProductsInput = {
    connect?: InputMaybe<ShopWhereUniqueInput>
    connectOrCreate?: InputMaybe<ShopCreateOrConnectWithoutHasProductsInput>
    create?: InputMaybe<ShopCreateWithoutHasProductsInput>
}

export type ShopCreateNestedOneWithoutLocationInput = {
    connect?: InputMaybe<ShopWhereUniqueInput>
    connectOrCreate?: InputMaybe<ShopCreateOrConnectWithoutLocationInput>
    create?: InputMaybe<ShopCreateWithoutLocationInput>
}

export type ShopCreateOrConnectWithoutCreatedByInput = {
    create: ShopCreateWithoutCreatedByInput
    where: ShopWhereUniqueInput
}

export type ShopCreateOrConnectWithoutHasProductsInput = {
    create: ShopCreateWithoutHasProductsInput
    where: ShopWhereUniqueInput
}

export type ShopCreateOrConnectWithoutLocationInput = {
    create: ShopCreateWithoutLocationInput
    where: ShopWhereUniqueInput
}

export type ShopCreateWithoutCreatedByInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    hasProducts?: InputMaybe<EdgeProductShopCreateNestedManyWithoutShopInput>
    id?: InputMaybe<Scalars['String']>
    location?: InputMaybe<LocationCreateNestedOneWithoutOfShopInput>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ShopCreateWithoutHasProductsInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedShopsInput
    id?: InputMaybe<Scalars['String']>
    location?: InputMaybe<LocationCreateNestedOneWithoutOfShopInput>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ShopCreateWithoutLocationInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdBy: UserCreateNestedOneWithoutCreatedShopsInput
    hasProducts?: InputMaybe<EdgeProductShopCreateNestedManyWithoutShopInput>
    id?: InputMaybe<Scalars['String']>
    shopName: Scalars['String']
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ShopGroupBy = {
    __typename?: 'ShopGroupBy'
    _count?: Maybe<ShopCountAggregate>
    _max?: Maybe<ShopMaxAggregate>
    _min?: Maybe<ShopMinAggregate>
    createdAt: Scalars['DateTime']
    id: Scalars['String']
    shopName: Scalars['String']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
}

export type ShopListRelationFilter = {
    every?: InputMaybe<ShopWhereInput>
    none?: InputMaybe<ShopWhereInput>
    some?: InputMaybe<ShopWhereInput>
}

export type ShopMaxAggregate = {
    __typename?: 'ShopMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    shopName?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type ShopMaxOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    shopName?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ShopMinAggregate = {
    __typename?: 'ShopMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    shopName?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
}

export type ShopMinOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    shopName?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ShopOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>
}

export type ShopOrderByWithAggregationInput = {
    _count?: InputMaybe<ShopCountOrderByAggregateInput>
    _max?: InputMaybe<ShopMaxOrderByAggregateInput>
    _min?: InputMaybe<ShopMinOrderByAggregateInput>
    createdAt?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    shopName?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ShopOrderByWithRelationInput = {
    createdAt?: InputMaybe<SortOrder>
    createdBy?: InputMaybe<UserOrderByWithRelationInput>
    hasProducts?: InputMaybe<EdgeProductShopOrderByRelationAggregateInput>
    id?: InputMaybe<SortOrder>
    location?: InputMaybe<LocationOrderByWithRelationInput>
    shopName?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
}

export type ShopRelationFilter = {
    is?: InputMaybe<ShopWhereInput>
    isNot?: InputMaybe<ShopWhereInput>
}

export enum ShopScalarFieldEnum {
    CreatedAt = 'createdAt',
    Id = 'id',
    ShopName = 'shopName',
    UpdatedAt = 'updatedAt',
    UserId = 'userId',
}

export type ShopScalarWhereInput = {
    AND?: InputMaybe<Array<ShopScalarWhereInput>>
    NOT?: InputMaybe<Array<ShopScalarWhereInput>>
    OR?: InputMaybe<Array<ShopScalarWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    shopName?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type ShopScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<ShopScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<ShopScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<ShopScalarWhereWithAggregatesInput>>
    createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    shopName?: InputMaybe<StringWithAggregatesFilter>
    updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>
    userId?: InputMaybe<StringWithAggregatesFilter>
}

export type ShopUpdateInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedShopsInput>
    hasProducts?: InputMaybe<EdgeProductShopUpdateManyWithoutShopInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    location?: InputMaybe<LocationUpdateOneWithoutOfShopInput>
    shopName?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ShopUpdateManyMutationInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    shopName?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ShopUpdateManyWithWhereWithoutCreatedByInput = {
    data: ShopUpdateManyMutationInput
    where: ShopScalarWhereInput
}

export type ShopUpdateManyWithoutCreatedByInput = {
    connect?: InputMaybe<Array<ShopWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<ShopCreateOrConnectWithoutCreatedByInput>>
    create?: InputMaybe<Array<ShopCreateWithoutCreatedByInput>>
    createMany?: InputMaybe<ShopCreateManyCreatedByInputEnvelope>
    delete?: InputMaybe<Array<ShopWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<ShopScalarWhereInput>>
    disconnect?: InputMaybe<Array<ShopWhereUniqueInput>>
    set?: InputMaybe<Array<ShopWhereUniqueInput>>
    update?: InputMaybe<Array<ShopUpdateWithWhereUniqueWithoutCreatedByInput>>
    updateMany?: InputMaybe<Array<ShopUpdateManyWithWhereWithoutCreatedByInput>>
    upsert?: InputMaybe<Array<ShopUpsertWithWhereUniqueWithoutCreatedByInput>>
}

export type ShopUpdateOneRequiredWithoutHasProductsInput = {
    connect?: InputMaybe<ShopWhereUniqueInput>
    connectOrCreate?: InputMaybe<ShopCreateOrConnectWithoutHasProductsInput>
    create?: InputMaybe<ShopCreateWithoutHasProductsInput>
    update?: InputMaybe<ShopUpdateWithoutHasProductsInput>
    upsert?: InputMaybe<ShopUpsertWithoutHasProductsInput>
}

export type ShopUpdateOneRequiredWithoutLocationInput = {
    connect?: InputMaybe<ShopWhereUniqueInput>
    connectOrCreate?: InputMaybe<ShopCreateOrConnectWithoutLocationInput>
    create?: InputMaybe<ShopCreateWithoutLocationInput>
    update?: InputMaybe<ShopUpdateWithoutLocationInput>
    upsert?: InputMaybe<ShopUpsertWithoutLocationInput>
}

export type ShopUpdateWithWhereUniqueWithoutCreatedByInput = {
    data: ShopUpdateWithoutCreatedByInput
    where: ShopWhereUniqueInput
}

export type ShopUpdateWithoutCreatedByInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    hasProducts?: InputMaybe<EdgeProductShopUpdateManyWithoutShopInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    location?: InputMaybe<LocationUpdateOneWithoutOfShopInput>
    shopName?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ShopUpdateWithoutHasProductsInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedShopsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    location?: InputMaybe<LocationUpdateOneWithoutOfShopInput>
    shopName?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ShopUpdateWithoutLocationInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedShopsInput>
    hasProducts?: InputMaybe<EdgeProductShopUpdateManyWithoutShopInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    shopName?: InputMaybe<StringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type ShopUpsertWithWhereUniqueWithoutCreatedByInput = {
    create: ShopCreateWithoutCreatedByInput
    update: ShopUpdateWithoutCreatedByInput
    where: ShopWhereUniqueInput
}

export type ShopUpsertWithoutHasProductsInput = {
    create: ShopCreateWithoutHasProductsInput
    update: ShopUpdateWithoutHasProductsInput
}

export type ShopUpsertWithoutLocationInput = {
    create: ShopCreateWithoutLocationInput
    update: ShopUpdateWithoutLocationInput
}

export type ShopWhereInput = {
    AND?: InputMaybe<Array<ShopWhereInput>>
    NOT?: InputMaybe<Array<ShopWhereInput>>
    OR?: InputMaybe<Array<ShopWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    createdBy?: InputMaybe<UserRelationFilter>
    hasProducts?: InputMaybe<EdgeProductShopListRelationFilter>
    id?: InputMaybe<StringFilter>
    location?: InputMaybe<LocationRelationFilter>
    shopName?: InputMaybe<StringFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
}

export type ShopWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']>
}

export enum SortOrder {
    Asc = 'asc',
    Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['String']>
}

export type StringFilter = {
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type StringNullableFilter = {
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringNullableFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type StringNullableWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntNullableFilter>
    _max?: InputMaybe<NestedStringNullableFilter>
    _min?: InputMaybe<NestedStringNullableFilter>
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type StringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>
    _max?: InputMaybe<NestedStringFilter>
    _min?: InputMaybe<NestedStringFilter>
    contains?: InputMaybe<Scalars['String']>
    endsWith?: InputMaybe<Scalars['String']>
    equals?: InputMaybe<Scalars['String']>
    gt?: InputMaybe<Scalars['String']>
    gte?: InputMaybe<Scalars['String']>
    in?: InputMaybe<Array<Scalars['String']>>
    lt?: InputMaybe<Scalars['String']>
    lte?: InputMaybe<Scalars['String']>
    not?: InputMaybe<NestedStringWithAggregatesFilter>
    notIn?: InputMaybe<Array<Scalars['String']>>
    startsWith?: InputMaybe<Scalars['String']>
}

export type Token = {
    __typename?: 'Token'
    createdAt: Scalars['DateTime']
    emailToken?: Maybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id: Scalars['String']
    type: TokenType
    updatedAt: Scalars['DateTime']
    user: User
    userId: Scalars['String']
    valid: Scalars['Boolean']
}

export type TokenCountAggregate = {
    __typename?: 'TokenCountAggregate'
    _all: Scalars['Int']
    createdAt: Scalars['Int']
    emailToken: Scalars['Int']
    expiration: Scalars['Int']
    id: Scalars['Int']
    type: Scalars['Int']
    updatedAt: Scalars['Int']
    userId: Scalars['Int']
    valid: Scalars['Int']
}

export type TokenCountOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    emailToken?: InputMaybe<SortOrder>
    expiration?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    type?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
    valid?: InputMaybe<SortOrder>
}

export type TokenCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    emailToken?: InputMaybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id?: InputMaybe<Scalars['String']>
    type: TokenType
    updatedAt?: InputMaybe<Scalars['DateTime']>
    user: UserCreateNestedOneWithoutTokenInput
    valid?: InputMaybe<Scalars['Boolean']>
}

export type TokenCreateManyInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    emailToken?: InputMaybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id?: InputMaybe<Scalars['String']>
    type: TokenType
    updatedAt?: InputMaybe<Scalars['DateTime']>
    userId: Scalars['String']
    valid?: InputMaybe<Scalars['Boolean']>
}

export type TokenCreateManyUserInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    emailToken?: InputMaybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id?: InputMaybe<Scalars['String']>
    type: TokenType
    updatedAt?: InputMaybe<Scalars['DateTime']>
    valid?: InputMaybe<Scalars['Boolean']>
}

export type TokenCreateManyUserInputEnvelope = {
    data: Array<TokenCreateManyUserInput>
    skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type TokenCreateNestedManyWithoutUserInput = {
    connect?: InputMaybe<Array<TokenWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUserInput>>
    create?: InputMaybe<Array<TokenCreateWithoutUserInput>>
    createMany?: InputMaybe<TokenCreateManyUserInputEnvelope>
}

export type TokenCreateOrConnectWithoutUserInput = {
    create: TokenCreateWithoutUserInput
    where: TokenWhereUniqueInput
}

export type TokenCreateWithoutUserInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>
    emailToken?: InputMaybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id?: InputMaybe<Scalars['String']>
    type: TokenType
    updatedAt?: InputMaybe<Scalars['DateTime']>
    valid?: InputMaybe<Scalars['Boolean']>
}

export type TokenGroupBy = {
    __typename?: 'TokenGroupBy'
    _count?: Maybe<TokenCountAggregate>
    _max?: Maybe<TokenMaxAggregate>
    _min?: Maybe<TokenMinAggregate>
    createdAt: Scalars['DateTime']
    emailToken?: Maybe<Scalars['String']>
    expiration: Scalars['DateTime']
    id: Scalars['String']
    type: TokenType
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
    valid: Scalars['Boolean']
}

export type TokenListRelationFilter = {
    every?: InputMaybe<TokenWhereInput>
    none?: InputMaybe<TokenWhereInput>
    some?: InputMaybe<TokenWhereInput>
}

export type TokenMaxAggregate = {
    __typename?: 'TokenMaxAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    emailToken?: Maybe<Scalars['String']>
    expiration?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    type?: Maybe<TokenType>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
    valid?: Maybe<Scalars['Boolean']>
}

export type TokenMaxOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    emailToken?: InputMaybe<SortOrder>
    expiration?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    type?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
    valid?: InputMaybe<SortOrder>
}

export type TokenMinAggregate = {
    __typename?: 'TokenMinAggregate'
    createdAt?: Maybe<Scalars['DateTime']>
    emailToken?: Maybe<Scalars['String']>
    expiration?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    type?: Maybe<TokenType>
    updatedAt?: Maybe<Scalars['DateTime']>
    userId?: Maybe<Scalars['String']>
    valid?: Maybe<Scalars['Boolean']>
}

export type TokenMinOrderByAggregateInput = {
    createdAt?: InputMaybe<SortOrder>
    emailToken?: InputMaybe<SortOrder>
    expiration?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    type?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
    valid?: InputMaybe<SortOrder>
}

export type TokenOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>
}

export type TokenOrderByWithAggregationInput = {
    _count?: InputMaybe<TokenCountOrderByAggregateInput>
    _max?: InputMaybe<TokenMaxOrderByAggregateInput>
    _min?: InputMaybe<TokenMinOrderByAggregateInput>
    createdAt?: InputMaybe<SortOrder>
    emailToken?: InputMaybe<SortOrder>
    expiration?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    type?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    userId?: InputMaybe<SortOrder>
    valid?: InputMaybe<SortOrder>
}

export type TokenOrderByWithRelationInput = {
    createdAt?: InputMaybe<SortOrder>
    emailToken?: InputMaybe<SortOrder>
    expiration?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    type?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
    user?: InputMaybe<UserOrderByWithRelationInput>
    userId?: InputMaybe<SortOrder>
    valid?: InputMaybe<SortOrder>
}

export enum TokenScalarFieldEnum {
    CreatedAt = 'createdAt',
    EmailToken = 'emailToken',
    Expiration = 'expiration',
    Id = 'id',
    Type = 'type',
    UpdatedAt = 'updatedAt',
    UserId = 'userId',
    Valid = 'valid',
}

export type TokenScalarWhereInput = {
    AND?: InputMaybe<Array<TokenScalarWhereInput>>
    NOT?: InputMaybe<Array<TokenScalarWhereInput>>
    OR?: InputMaybe<Array<TokenScalarWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    emailToken?: InputMaybe<StringNullableFilter>
    expiration?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumTokenTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    userId?: InputMaybe<StringFilter>
    valid?: InputMaybe<BoolFilter>
}

export type TokenScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>
    createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
    emailToken?: InputMaybe<StringNullableWithAggregatesFilter>
    expiration?: InputMaybe<DateTimeWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    type?: InputMaybe<EnumTokenTypeWithAggregatesFilter>
    updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>
    userId?: InputMaybe<StringWithAggregatesFilter>
    valid?: InputMaybe<BoolWithAggregatesFilter>
}

export enum TokenType {
    Api = 'API',
    Email = 'EMAIL',
}

export type TokenUpdateInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    emailToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    expiration?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    type?: InputMaybe<EnumTokenTypeFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    user?: InputMaybe<UserUpdateOneRequiredWithoutTokenInput>
    valid?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type TokenUpdateManyMutationInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    emailToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    expiration?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    type?: InputMaybe<EnumTokenTypeFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    valid?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type TokenUpdateManyWithWhereWithoutUserInput = {
    data: TokenUpdateManyMutationInput
    where: TokenScalarWhereInput
}

export type TokenUpdateManyWithoutUserInput = {
    connect?: InputMaybe<Array<TokenWhereUniqueInput>>
    connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUserInput>>
    create?: InputMaybe<Array<TokenCreateWithoutUserInput>>
    createMany?: InputMaybe<TokenCreateManyUserInputEnvelope>
    delete?: InputMaybe<Array<TokenWhereUniqueInput>>
    deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>
    disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>
    set?: InputMaybe<Array<TokenWhereUniqueInput>>
    update?: InputMaybe<Array<TokenUpdateWithWhereUniqueWithoutUserInput>>
    updateMany?: InputMaybe<Array<TokenUpdateManyWithWhereWithoutUserInput>>
    upsert?: InputMaybe<Array<TokenUpsertWithWhereUniqueWithoutUserInput>>
}

export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    data: TokenUpdateWithoutUserInput
    where: TokenWhereUniqueInput
}

export type TokenUpdateWithoutUserInput = {
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    emailToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    expiration?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    type?: InputMaybe<EnumTokenTypeFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    valid?: InputMaybe<BoolFieldUpdateOperationsInput>
}

export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    create: TokenCreateWithoutUserInput
    update: TokenUpdateWithoutUserInput
    where: TokenWhereUniqueInput
}

export type TokenWhereInput = {
    AND?: InputMaybe<Array<TokenWhereInput>>
    NOT?: InputMaybe<Array<TokenWhereInput>>
    OR?: InputMaybe<Array<TokenWhereInput>>
    createdAt?: InputMaybe<DateTimeFilter>
    emailToken?: InputMaybe<StringNullableFilter>
    expiration?: InputMaybe<DateTimeFilter>
    id?: InputMaybe<StringFilter>
    type?: InputMaybe<EnumTokenTypeFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
    user?: InputMaybe<UserRelationFilter>
    userId?: InputMaybe<StringFilter>
    valid?: InputMaybe<BoolFilter>
}

export type TokenWhereUniqueInput = {
    emailToken?: InputMaybe<Scalars['String']>
    id?: InputMaybe<Scalars['String']>
}

export type User = {
    __typename?: 'User'
    Token: Array<Token>
    _count?: Maybe<UserCount>
    addedProductsToShops: Array<EdgeProductShop>
    alias: Scalars['String']
    createdAt: Scalars['DateTime']
    createdProdcuts: Array<Product>
    createdShops: Array<Shop>
    email: Scalars['String']
    hash: Scalars['String']
    id: Scalars['String']
    updatedAt: Scalars['DateTime']
}

export type UserTokenArgs = {
    cursor?: InputMaybe<TokenWhereUniqueInput>
    distinct?: InputMaybe<Array<TokenScalarFieldEnum>>
    orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<TokenWhereInput>
}

export type UserAddedProductsToShopsArgs = {
    cursor?: InputMaybe<EdgeProductShopWhereUniqueInput>
    distinct?: InputMaybe<Array<EdgeProductShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<EdgeProductShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<EdgeProductShopWhereInput>
}

export type UserCreatedProdcutsArgs = {
    cursor?: InputMaybe<ProductWhereUniqueInput>
    distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ProductWhereInput>
}

export type UserCreatedShopsArgs = {
    cursor?: InputMaybe<ShopWhereUniqueInput>
    distinct?: InputMaybe<Array<ShopScalarFieldEnum>>
    orderBy?: InputMaybe<Array<ShopOrderByWithRelationInput>>
    skip?: InputMaybe<Scalars['Int']>
    take?: InputMaybe<Scalars['Int']>
    where?: InputMaybe<ShopWhereInput>
}

export type UserCount = {
    __typename?: 'UserCount'
    Token: Scalars['Int']
    addedProductsToShops: Scalars['Int']
    createdProdcuts: Scalars['Int']
    createdShops: Scalars['Int']
}

export type UserCountAggregate = {
    __typename?: 'UserCountAggregate'
    _all: Scalars['Int']
    alias: Scalars['Int']
    createdAt: Scalars['Int']
    email: Scalars['Int']
    hash: Scalars['Int']
    id: Scalars['Int']
    salt: Scalars['Int']
    updatedAt: Scalars['Int']
}

export type UserCountOrderByAggregateInput = {
    alias?: InputMaybe<SortOrder>
    createdAt?: InputMaybe<SortOrder>
    email?: InputMaybe<SortOrder>
    hash?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    salt?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
}

export type UserCreateInput = {
    Token?: InputMaybe<TokenCreateNestedManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutAddedByInput>
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdProdcuts?: InputMaybe<ProductCreateNestedManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopCreateNestedManyWithoutCreatedByInput>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserCreateManyInput = {
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserCreateNestedOneWithoutAddedProductsToShopsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddedProductsToShopsInput>
    create?: InputMaybe<UserCreateWithoutAddedProductsToShopsInput>
}

export type UserCreateNestedOneWithoutCreatedProdcutsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedProdcutsInput>
    create?: InputMaybe<UserCreateWithoutCreatedProdcutsInput>
}

export type UserCreateNestedOneWithoutCreatedShopsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedShopsInput>
    create?: InputMaybe<UserCreateWithoutCreatedShopsInput>
}

export type UserCreateNestedOneWithoutTokenInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTokenInput>
    create?: InputMaybe<UserCreateWithoutTokenInput>
}

export type UserCreateOrConnectWithoutAddedProductsToShopsInput = {
    create: UserCreateWithoutAddedProductsToShopsInput
    where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutCreatedProdcutsInput = {
    create: UserCreateWithoutCreatedProdcutsInput
    where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutCreatedShopsInput = {
    create: UserCreateWithoutCreatedShopsInput
    where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutTokenInput = {
    create: UserCreateWithoutTokenInput
    where: UserWhereUniqueInput
}

export type UserCreateWithoutAddedProductsToShopsInput = {
    Token?: InputMaybe<TokenCreateNestedManyWithoutUserInput>
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdProdcuts?: InputMaybe<ProductCreateNestedManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopCreateNestedManyWithoutCreatedByInput>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserCreateWithoutCreatedProdcutsInput = {
    Token?: InputMaybe<TokenCreateNestedManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutAddedByInput>
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdShops?: InputMaybe<ShopCreateNestedManyWithoutCreatedByInput>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserCreateWithoutCreatedShopsInput = {
    Token?: InputMaybe<TokenCreateNestedManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutAddedByInput>
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdProdcuts?: InputMaybe<ProductCreateNestedManyWithoutCreatedByInput>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserCreateWithoutTokenInput = {
    addedProductsToShops?: InputMaybe<EdgeProductShopCreateNestedManyWithoutAddedByInput>
    alias: Scalars['String']
    createdAt?: InputMaybe<Scalars['DateTime']>
    createdProdcuts?: InputMaybe<ProductCreateNestedManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopCreateNestedManyWithoutCreatedByInput>
    email: Scalars['String']
    hash: Scalars['String']
    id?: InputMaybe<Scalars['String']>
    salt?: InputMaybe<Scalars['String']>
    updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UserGroupBy = {
    __typename?: 'UserGroupBy'
    _count?: Maybe<UserCountAggregate>
    _max?: Maybe<UserMaxAggregate>
    _min?: Maybe<UserMinAggregate>
    alias: Scalars['String']
    createdAt: Scalars['DateTime']
    email: Scalars['String']
    hash: Scalars['String']
    id: Scalars['String']
    salt?: Maybe<Scalars['String']>
    updatedAt: Scalars['DateTime']
}

export type UserMaxAggregate = {
    __typename?: 'UserMaxAggregate'
    alias?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    email?: Maybe<Scalars['String']>
    hash?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    salt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserMaxOrderByAggregateInput = {
    alias?: InputMaybe<SortOrder>
    createdAt?: InputMaybe<SortOrder>
    email?: InputMaybe<SortOrder>
    hash?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    salt?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
}

export type UserMinAggregate = {
    __typename?: 'UserMinAggregate'
    alias?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    email?: Maybe<Scalars['String']>
    hash?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    salt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserMinOrderByAggregateInput = {
    alias?: InputMaybe<SortOrder>
    createdAt?: InputMaybe<SortOrder>
    email?: InputMaybe<SortOrder>
    hash?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    salt?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
}

export type UserOrderByWithAggregationInput = {
    _count?: InputMaybe<UserCountOrderByAggregateInput>
    _max?: InputMaybe<UserMaxOrderByAggregateInput>
    _min?: InputMaybe<UserMinOrderByAggregateInput>
    alias?: InputMaybe<SortOrder>
    createdAt?: InputMaybe<SortOrder>
    email?: InputMaybe<SortOrder>
    hash?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    salt?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
}

export type UserOrderByWithRelationInput = {
    Token?: InputMaybe<TokenOrderByRelationAggregateInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopOrderByRelationAggregateInput>
    alias?: InputMaybe<SortOrder>
    createdAt?: InputMaybe<SortOrder>
    createdProdcuts?: InputMaybe<ProductOrderByRelationAggregateInput>
    createdShops?: InputMaybe<ShopOrderByRelationAggregateInput>
    email?: InputMaybe<SortOrder>
    hash?: InputMaybe<SortOrder>
    id?: InputMaybe<SortOrder>
    salt?: InputMaybe<SortOrder>
    updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
    is?: InputMaybe<UserWhereInput>
    isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
    Alias = 'alias',
    CreatedAt = 'createdAt',
    Email = 'email',
    Hash = 'hash',
    Id = 'id',
    Salt = 'salt',
    UpdatedAt = 'updatedAt',
}

export type UserScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
    NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
    OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
    alias?: InputMaybe<StringWithAggregatesFilter>
    createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
    email?: InputMaybe<StringWithAggregatesFilter>
    hash?: InputMaybe<StringWithAggregatesFilter>
    id?: InputMaybe<StringWithAggregatesFilter>
    salt?: InputMaybe<StringNullableWithAggregatesFilter>
    updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>
}

export type UserUpdateInput = {
    Token?: InputMaybe<TokenUpdateManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopUpdateManyWithoutAddedByInput>
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdProdcuts?: InputMaybe<ProductUpdateManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopUpdateManyWithoutCreatedByInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateOneRequiredWithoutAddedProductsToShopsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddedProductsToShopsInput>
    create?: InputMaybe<UserCreateWithoutAddedProductsToShopsInput>
    update?: InputMaybe<UserUpdateWithoutAddedProductsToShopsInput>
    upsert?: InputMaybe<UserUpsertWithoutAddedProductsToShopsInput>
}

export type UserUpdateOneRequiredWithoutCreatedProdcutsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedProdcutsInput>
    create?: InputMaybe<UserCreateWithoutCreatedProdcutsInput>
    update?: InputMaybe<UserUpdateWithoutCreatedProdcutsInput>
    upsert?: InputMaybe<UserUpsertWithoutCreatedProdcutsInput>
}

export type UserUpdateOneRequiredWithoutCreatedShopsInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedShopsInput>
    create?: InputMaybe<UserCreateWithoutCreatedShopsInput>
    update?: InputMaybe<UserUpdateWithoutCreatedShopsInput>
    upsert?: InputMaybe<UserUpsertWithoutCreatedShopsInput>
}

export type UserUpdateOneRequiredWithoutTokenInput = {
    connect?: InputMaybe<UserWhereUniqueInput>
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTokenInput>
    create?: InputMaybe<UserCreateWithoutTokenInput>
    update?: InputMaybe<UserUpdateWithoutTokenInput>
    upsert?: InputMaybe<UserUpsertWithoutTokenInput>
}

export type UserUpdateWithoutAddedProductsToShopsInput = {
    Token?: InputMaybe<TokenUpdateManyWithoutUserInput>
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdProdcuts?: InputMaybe<ProductUpdateManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopUpdateManyWithoutCreatedByInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateWithoutCreatedProdcutsInput = {
    Token?: InputMaybe<TokenUpdateManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopUpdateManyWithoutAddedByInput>
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdShops?: InputMaybe<ShopUpdateManyWithoutCreatedByInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateWithoutCreatedShopsInput = {
    Token?: InputMaybe<TokenUpdateManyWithoutUserInput>
    addedProductsToShops?: InputMaybe<EdgeProductShopUpdateManyWithoutAddedByInput>
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdProdcuts?: InputMaybe<ProductUpdateManyWithoutCreatedByInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateWithoutTokenInput = {
    addedProductsToShops?: InputMaybe<EdgeProductShopUpdateManyWithoutAddedByInput>
    alias?: InputMaybe<StringFieldUpdateOperationsInput>
    createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
    createdProdcuts?: InputMaybe<ProductUpdateManyWithoutCreatedByInput>
    createdShops?: InputMaybe<ShopUpdateManyWithoutCreatedByInput>
    email?: InputMaybe<StringFieldUpdateOperationsInput>
    hash?: InputMaybe<StringFieldUpdateOperationsInput>
    id?: InputMaybe<StringFieldUpdateOperationsInput>
    salt?: InputMaybe<NullableStringFieldUpdateOperationsInput>
    updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpsertWithoutAddedProductsToShopsInput = {
    create: UserCreateWithoutAddedProductsToShopsInput
    update: UserUpdateWithoutAddedProductsToShopsInput
}

export type UserUpsertWithoutCreatedProdcutsInput = {
    create: UserCreateWithoutCreatedProdcutsInput
    update: UserUpdateWithoutCreatedProdcutsInput
}

export type UserUpsertWithoutCreatedShopsInput = {
    create: UserCreateWithoutCreatedShopsInput
    update: UserUpdateWithoutCreatedShopsInput
}

export type UserUpsertWithoutTokenInput = {
    create: UserCreateWithoutTokenInput
    update: UserUpdateWithoutTokenInput
}

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>
    NOT?: InputMaybe<Array<UserWhereInput>>
    OR?: InputMaybe<Array<UserWhereInput>>
    Token?: InputMaybe<TokenListRelationFilter>
    addedProductsToShops?: InputMaybe<EdgeProductShopListRelationFilter>
    alias?: InputMaybe<StringFilter>
    createdAt?: InputMaybe<DateTimeFilter>
    createdProdcuts?: InputMaybe<ProductListRelationFilter>
    createdShops?: InputMaybe<ShopListRelationFilter>
    email?: InputMaybe<StringFilter>
    hash?: InputMaybe<StringFilter>
    id?: InputMaybe<StringFilter>
    salt?: InputMaybe<StringNullableFilter>
    updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
    email?: InputMaybe<Scalars['String']>
    id?: InputMaybe<Scalars['String']>
}

export type AddUserMutationVariables = Exact<{
    alias: Scalars['String']
    email: Scalars['String']
    password: Scalars['String']
}>

export type AddUserMutation = {
    __typename?: 'Mutation'
    createUser: { __typename?: 'User'; alias: string; email: string }
}

export type UpdateUserPasswordMutationVariables = Exact<{
    data: UserUpdateInput
    where: UserWhereUniqueInput
    newPassword: Scalars['String']
}>

export type UpdateUserPasswordMutation = {
    __typename?: 'Mutation'
    updateUser?: { __typename?: 'User'; id: string } | null | undefined
}

export type GetUserLoginQueryVariables = Exact<{
    email: Scalars['String']
}>

export type GetUserLoginQuery = {
    __typename?: 'Query'
    user?:
        | {
              __typename?: 'User'
              id: string
              alias: string
              email: string
              createdAt: any
              updatedAt: any
          }
        | null
        | undefined
}

export const AddUserDocument = gql`
    mutation addUser($alias: String!, $email: String!, $password: String!) {
        createUser(data: { alias: $alias, email: $email, hash: $password }) {
            alias
            email
        }
    }
`
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      alias: // value for 'alias'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddUserMutation(
    baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options)
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
    AddUserMutation,
    AddUserMutationVariables
>
export const UpdateUserPasswordDocument = gql`
    mutation UpdateUserPassword(
        $data: UserUpdateInput!
        $where: UserWhereUniqueInput!
        $newPassword: String!
    ) {
        updateUser(data: $data, where: $where) {
            id
        }
    }
`
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
>

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateUserPasswordMutation,
        UpdateUserPasswordMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(
        UpdateUserPasswordDocument,
        options
    )
}
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>
export type UpdateUserPasswordMutationResult = Apollo.MutationResult<UpdateUserPasswordMutation>
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
>
export const GetUserLoginDocument = gql`
    query getUserLogin($email: String!) {
        user(where: { email: $email }) {
            id
            alias
            email
            createdAt
            updatedAt
        }
    }
`

/**
 * __useGetUserLoginQuery__
 *
 * To run a query within a React component, call `useGetUserLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserLoginQuery(
    baseOptions: Apollo.QueryHookOptions<GetUserLoginQuery, GetUserLoginQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetUserLoginQuery, GetUserLoginQueryVariables>(
        GetUserLoginDocument,
        options
    )
}
export function useGetUserLoginLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUserLoginQuery, GetUserLoginQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetUserLoginQuery, GetUserLoginQueryVariables>(
        GetUserLoginDocument,
        options
    )
}
export type GetUserLoginQueryHookResult = ReturnType<typeof useGetUserLoginQuery>
export type GetUserLoginLazyQueryHookResult = ReturnType<typeof useGetUserLoginLazyQuery>
export type GetUserLoginQueryResult = Apollo.QueryResult<
    GetUserLoginQuery,
    GetUserLoginQueryVariables
>
export function refetchGetUserLoginQuery(variables: GetUserLoginQueryVariables) {
    return { query: GetUserLoginDocument, variables }
}
