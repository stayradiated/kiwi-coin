import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: string;
  jsonb: any;
  numeric: number;
  smallint: number;
  timestamp: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user?: Maybe<User>;
  user_uid: Scalars['String'];
};

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult';
  dca_order?: Maybe<Dca_Order>;
  dca_order_uid: Scalars['uuid'];
};

export type CreateStripeSubscription = {
  __typename?: 'CreateStripeSubscription';
  client_secret: Scalars['String'];
  stripe_subscription?: Maybe<Stripe_Subscription>;
  subscription_id: Scalars['String'];
};

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput';
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  user_uid: Scalars['String'];
};

export type DeleteUser2FaOutput = {
  __typename?: 'DeleteUser2FAOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  user_uid: Scalars['uuid'];
};

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type QueryLiveStripeSubscriptionOutput = {
  __typename?: 'QueryLiveStripeSubscriptionOutput';
  client_secret: Scalars['String'];
  id: Scalars['String'];
};

export type QueryStripeConfigOutput = {
  __typename?: 'QueryStripeConfigOutput';
  publishable_key: Scalars['String'];
};

export type QueryUserEmailOutput = {
  __typename?: 'QueryUserEmailOutput';
  email: Scalars['String'];
  user_uid: Scalars['uuid'];
};

export type QueryUserLimitOutput = {
  __typename?: 'QueryUserLimitOutput';
  user_limit: Scalars['jsonb'];
  user_uid: Scalars['String'];
};

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user?: Maybe<User>;
  user_uid: Scalars['String'];
};

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

export type SeedTestAccountOutput = {
  __typename?: 'SeedTestAccountOutput';
  email: Scalars['String'];
  user_uid: Scalars['uuid'];
};

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput';
  user_uid: Scalars['uuid'];
};

export type SendUserPasswordResetOutput = {
  __typename?: 'SendUserPasswordResetOutput';
  email: Scalars['String'];
};

export type SetupUser2FaOutput = {
  __typename?: 'SetupUser2FAOutput';
  qrcode: Scalars['String'];
  secret: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type SyncCurrencyFxOutput = {
  __typename?: 'SyncCurrencyFxOutput';
  insert_count: Scalars['Int'];
};

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDCAOrderOutput';
  dca_order?: Maybe<Dca_Order>;
  dca_order_uid: Scalars['uuid'];
};

export type UpdateSubscriptionOutput = {
  __typename?: 'UpdateSubscriptionOutput';
  stripe_subscription?: Maybe<Stripe_Subscription>;
  subscription_id: Scalars['String'];
};

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput';
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type ValidatUserPasswordResetOutput = {
  __typename?: 'ValidatUserPasswordResetOutput';
  email?: Maybe<Scalars['String']>;
  is_valid: Scalars['Boolean'];
};

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput';
  is_valid: Scalars['Boolean'];
  validation_message?: Maybe<Scalars['String']>;
};

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput';
  is_valid: Scalars['Boolean'];
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
  validation_message?: Maybe<Scalars['String']>;
};

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput';
  email: Scalars['String'];
};

export type Available_Balance_Fx_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "balance" */
export type Balance = {
  __typename?: 'balance';
  available_balance: Scalars['numeric'];
  /** A computed field, executes function "balance_available_balance_fx" */
  available_balance_fx?: Maybe<Scalars['numeric']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  currency_symbol: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  total_balance: Scalars['numeric'];
  /** A computed field, executes function "balance_total_balance_fx" */
  total_balance_fx?: Maybe<Scalars['numeric']>;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  user_exchange_key: User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "balance" */
export type BalanceAvailable_Balance_FxArgs = {
  args: Available_Balance_Fx_Balance_Args;
};


/** columns and relationships of "balance" */
export type BalanceTotal_Balance_FxArgs = {
  args: Total_Balance_Fx_Balance_Args;
};

/** aggregated selection of "balance" */
export type Balance_Aggregate = {
  __typename?: 'balance_aggregate';
  aggregate?: Maybe<Balance_Aggregate_Fields>;
  nodes: Array<Balance>;
};

/** aggregate fields of "balance" */
export type Balance_Aggregate_Fields = {
  __typename?: 'balance_aggregate_fields';
  avg?: Maybe<Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Balance_Max_Fields>;
  min?: Maybe<Balance_Min_Fields>;
  stddev?: Maybe<Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Balance_Sum_Fields>;
  var_pop?: Maybe<Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Balance_Var_Samp_Fields>;
  variance?: Maybe<Balance_Variance_Fields>;
};


/** aggregate fields of "balance" */
export type Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Balance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Balance_Avg_Fields = {
  __typename?: 'balance_avg_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export type Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Balance_Bool_Exp>>;
  _not?: InputMaybe<Balance_Bool_Exp>;
  _or?: InputMaybe<Array<Balance_Bool_Exp>>;
  available_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  currency_symbol?: InputMaybe<String_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  total_balance?: InputMaybe<Numeric_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_exchange_key?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "balance" */
export enum Balance_Constraint {
  /** unique or primary key constraint on columns "uid" */
  BalancePkey = 'balance_pkey'
}

/** input type for incrementing numeric columns in table "balance" */
export type Balance_Inc_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  total_balance?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "balance" */
export type Balance_Insert_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  currency_symbol?: InputMaybe<Scalars['String']>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  total_balance?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_exchange_key?: InputMaybe<User_Exchange_Keys_Obj_Rel_Insert_Input>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Balance_Max_Fields = {
  __typename?: 'balance_max_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency_symbol?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  total_balance?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Balance_Min_Fields = {
  __typename?: 'balance_min_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency_symbol?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  total_balance?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "balance" */
export type Balance_Mutation_Response = {
  __typename?: 'balance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Balance>;
};

/** on_conflict condition type for table "balance" */
export type Balance_On_Conflict = {
  constraint: Balance_Constraint;
  update_columns?: Array<Balance_Update_Column>;
  where?: InputMaybe<Balance_Bool_Exp>;
};

/** Ordering options when selecting data from "balance". */
export type Balance_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  total_balance?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_exchange_key?: InputMaybe<User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: balance */
export type Balance_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "balance" */
export enum Balance_Select_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  TotalBalance = 'total_balance',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "balance" */
export type Balance_Set_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency_symbol?: InputMaybe<Scalars['String']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  total_balance?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Balance_Stddev_Fields = {
  __typename?: 'balance_stddev_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Balance_Stddev_Pop_Fields = {
  __typename?: 'balance_stddev_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Balance_Stddev_Samp_Fields = {
  __typename?: 'balance_stddev_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Balance_Sum_Fields = {
  __typename?: 'balance_sum_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  total_balance?: Maybe<Scalars['numeric']>;
};

/** update columns of table "balance" */
export enum Balance_Update_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  TotalBalance = 'total_balance',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

export type Balance_User_Exchange_Keys_Args = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate var_pop on columns */
export type Balance_Var_Pop_Fields = {
  __typename?: 'balance_var_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Balance_Var_Samp_Fields = {
  __typename?: 'balance_var_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Balance_Variance_Fields = {
  __typename?: 'balance_variance_fields';
  available_balance?: Maybe<Scalars['Float']>;
  total_balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'currency';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "currency" */
export type Currency_Aggregate = {
  __typename?: 'currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
};


/** aggregate fields of "currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Currency_Bool_Exp>>;
  _not?: InputMaybe<Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "currency" */
export enum Currency_Constraint {
  /** unique or primary key constraint on columns "symbol" */
  AssetPkey = 'asset_pkey'
}

/** input type for inserting data into table "currency" */
export type Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "currency" */
export type Currency_Mutation_Response = {
  __typename?: 'currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency>;
};

/** input type for inserting object relation for remote table "currency" */
export type Currency_Obj_Rel_Insert_Input = {
  data: Currency_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};

/** on_conflict condition type for table "currency" */
export type Currency_On_Conflict = {
  constraint: Currency_Constraint;
  update_columns?: Array<Currency_Update_Column>;
  where?: InputMaybe<Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: currency */
export type Currency_Pk_Columns_Input = {
  symbol: Scalars['String'];
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "currency" */
export type Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "currency" */
export enum Currency_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "dca_order" */
export type Dca_Order = {
  __typename?: 'dca_order';
  created_at: Scalars['timestamptz'];
  daily_average: Scalars['numeric'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  exchange: Exchange;
  exchange_market_trading_pair?: Maybe<Array<Market_Trading_Pair>>;
  exchange_uid: Scalars['uuid'];
  interval_ms: Scalars['Int'];
  last_run_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  market: Market;
  market_offset: Scalars['numeric'];
  /** An array relationship */
  market_prices: Array<Market_Price>;
  /** An aggregate relationship */
  market_prices_aggregate: Market_Price_Aggregate;
  market_uid: Scalars['uuid'];
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  primary_currency: Currency;
  primary_currency_symbol: Scalars['String'];
  /** An object relationship */
  secondary_currency: Currency;
  secondary_currency_symbol: Scalars['String'];
  start_at: Scalars['timestamptz'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  user_exchange_keys: User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "dca_order" */
export type Dca_OrderDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderExchange_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** aggregated selection of "dca_order" */
export type Dca_Order_Aggregate = {
  __typename?: 'dca_order_aggregate';
  aggregate?: Maybe<Dca_Order_Aggregate_Fields>;
  nodes: Array<Dca_Order>;
};

/** aggregate fields of "dca_order" */
export type Dca_Order_Aggregate_Fields = {
  __typename?: 'dca_order_aggregate_fields';
  avg?: Maybe<Dca_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dca_Order_Max_Fields>;
  min?: Maybe<Dca_Order_Min_Fields>;
  stddev?: Maybe<Dca_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Dca_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dca_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Dca_Order_Sum_Fields>;
  var_pop?: Maybe<Dca_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Dca_Order_Var_Samp_Fields>;
  variance?: Maybe<Dca_Order_Variance_Fields>;
};


/** aggregate fields of "dca_order" */
export type Dca_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dca_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order" */
export type Dca_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Dca_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dca_Order_Max_Order_By>;
  min?: InputMaybe<Dca_Order_Min_Order_By>;
  stddev?: InputMaybe<Dca_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dca_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dca_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dca_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Dca_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dca_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Dca_Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dca_order" */
export type Dca_Order_Arr_Rel_Insert_Input = {
  data: Array<Dca_Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Dca_Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Dca_Order_Avg_Fields = {
  __typename?: 'dca_order_avg_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order" */
export type Dca_Order_Avg_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dca_order". All fields are combined with a logical 'AND'. */
export type Dca_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Dca_Order_Bool_Exp>>;
  _not?: InputMaybe<Dca_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Dca_Order_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  daily_average?: InputMaybe<Numeric_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  enabled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_market_trading_pair?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  interval_ms?: InputMaybe<Int_Comparison_Exp>;
  last_run_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  max_price?: InputMaybe<Numeric_Comparison_Exp>;
  max_value?: InputMaybe<Numeric_Comparison_Exp>;
  min_price?: InputMaybe<Numeric_Comparison_Exp>;
  min_value?: InputMaybe<Numeric_Comparison_Exp>;
  next_run_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  primary_currency?: InputMaybe<Currency_Bool_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<Currency_Bool_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "dca_order" */
export enum Dca_Order_Constraint {
  /** unique or primary key constraint on columns "uid" */
  DcaOrderPkey = 'dca_order_pkey'
}

/** columns and relationships of "dca_order_history" */
export type Dca_Order_History = {
  __typename?: 'dca_order_history';
  available_balance: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  created_order: Scalars['Boolean'];
  /** An object relationship */
  dca_order: Dca_Order;
  dca_order_uid: Scalars['uuid'];
  description: Scalars['String'];
  market_offset: Scalars['numeric'];
  market_price: Scalars['numeric'];
  /** An object relationship */
  order?: Maybe<Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  target_value: Scalars['numeric'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
};

/** aggregated selection of "dca_order_history" */
export type Dca_Order_History_Aggregate = {
  __typename?: 'dca_order_history_aggregate';
  aggregate?: Maybe<Dca_Order_History_Aggregate_Fields>;
  nodes: Array<Dca_Order_History>;
};

/** aggregate fields of "dca_order_history" */
export type Dca_Order_History_Aggregate_Fields = {
  __typename?: 'dca_order_history_aggregate_fields';
  avg?: Maybe<Dca_Order_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dca_Order_History_Max_Fields>;
  min?: Maybe<Dca_Order_History_Min_Fields>;
  stddev?: Maybe<Dca_Order_History_Stddev_Fields>;
  stddev_pop?: Maybe<Dca_Order_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dca_Order_History_Stddev_Samp_Fields>;
  sum?: Maybe<Dca_Order_History_Sum_Fields>;
  var_pop?: Maybe<Dca_Order_History_Var_Pop_Fields>;
  var_samp?: Maybe<Dca_Order_History_Var_Samp_Fields>;
  variance?: Maybe<Dca_Order_History_Variance_Fields>;
};


/** aggregate fields of "dca_order_history" */
export type Dca_Order_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order_history" */
export type Dca_Order_History_Aggregate_Order_By = {
  avg?: InputMaybe<Dca_Order_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dca_Order_History_Max_Order_By>;
  min?: InputMaybe<Dca_Order_History_Min_Order_By>;
  stddev?: InputMaybe<Dca_Order_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dca_Order_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dca_Order_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dca_Order_History_Sum_Order_By>;
  var_pop?: InputMaybe<Dca_Order_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dca_Order_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Dca_Order_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dca_order_history" */
export type Dca_Order_History_Arr_Rel_Insert_Input = {
  data: Array<Dca_Order_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Dca_Order_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Dca_Order_History_Avg_Fields = {
  __typename?: 'dca_order_history_avg_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order_history" */
export type Dca_Order_History_Avg_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dca_order_history". All fields are combined with a logical 'AND'. */
export type Dca_Order_History_Bool_Exp = {
  _and?: InputMaybe<Array<Dca_Order_History_Bool_Exp>>;
  _not?: InputMaybe<Dca_Order_History_Bool_Exp>;
  _or?: InputMaybe<Array<Dca_Order_History_Bool_Exp>>;
  available_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_order?: InputMaybe<Boolean_Comparison_Exp>;
  dca_order?: InputMaybe<Dca_Order_Bool_Exp>;
  dca_order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_price?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  target_value?: InputMaybe<Numeric_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "dca_order_history" */
export enum Dca_Order_History_Constraint {
  /** unique or primary key constraint on columns "uid" */
  DcaOrderHistoryPkey = 'dca_order_history_pkey',
  /** unique or primary key constraint on columns "order_uid", "dca_order_uid" */
  UniqueDcaOrder = 'unique_dca_order'
}

/** input type for incrementing numeric columns in table "dca_order_history" */
export type Dca_Order_History_Inc_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "dca_order_history" */
export type Dca_Order_History_Insert_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_order?: InputMaybe<Scalars['Boolean']>;
  dca_order?: InputMaybe<Dca_Order_Obj_Rel_Insert_Input>;
  dca_order_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Dca_Order_History_Max_Fields = {
  __typename?: 'dca_order_history_max_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dca_order_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  target_value?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "dca_order_history" */
export type Dca_Order_History_Max_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dca_Order_History_Min_Fields = {
  __typename?: 'dca_order_history_min_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dca_order_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  target_value?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "dca_order_history" */
export type Dca_Order_History_Min_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "dca_order_history" */
export type Dca_Order_History_Mutation_Response = {
  __typename?: 'dca_order_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dca_Order_History>;
};

/** on_conflict condition type for table "dca_order_history" */
export type Dca_Order_History_On_Conflict = {
  constraint: Dca_Order_History_Constraint;
  update_columns?: Array<Dca_Order_History_Update_Column>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};

/** Ordering options when selecting data from "dca_order_history". */
export type Dca_Order_History_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_order?: InputMaybe<Order_By>;
  dca_order?: InputMaybe<Dca_Order_Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dca_order_history */
export type Dca_Order_History_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "dca_order_history" */
export enum Dca_Order_History_Select_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedOrder = 'created_order',
  /** column name */
  DcaOrderUid = 'dca_order_uid',
  /** column name */
  Description = 'description',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketPrice = 'market_price',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  TargetValue = 'target_value',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dca_order_history" */
export type Dca_Order_History_Set_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_order?: InputMaybe<Scalars['Boolean']>;
  dca_order_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Dca_Order_History_Stddev_Fields = {
  __typename?: 'dca_order_history_stddev_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dca_Order_History_Stddev_Pop_Fields = {
  __typename?: 'dca_order_history_stddev_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dca_Order_History_Stddev_Samp_Fields = {
  __typename?: 'dca_order_history_stddev_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Dca_Order_History_Sum_Fields = {
  __typename?: 'dca_order_history_sum_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  target_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order_history" */
export type Dca_Order_History_Sum_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "dca_order_history" */
export enum Dca_Order_History_Update_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedOrder = 'created_order',
  /** column name */
  DcaOrderUid = 'dca_order_uid',
  /** column name */
  Description = 'description',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketPrice = 'market_price',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  TargetValue = 'target_value',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Dca_Order_History_Var_Pop_Fields = {
  __typename?: 'dca_order_history_var_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order_history" */
export type Dca_Order_History_Var_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dca_Order_History_Var_Samp_Fields = {
  __typename?: 'dca_order_history_var_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order_history" */
export type Dca_Order_History_Var_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dca_Order_History_Variance_Fields = {
  __typename?: 'dca_order_history_variance_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order_history" */
export type Dca_Order_History_Variance_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "dca_order" */
export type Dca_Order_Inc_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>;
  interval_ms?: InputMaybe<Scalars['Int']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "dca_order" */
export type Dca_Order_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_average?: InputMaybe<Scalars['numeric']>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Arr_Rel_Insert_Input>;
  enabled_at?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  interval_ms?: InputMaybe<Scalars['Int']>;
  last_run_at?: InputMaybe<Scalars['timestamptz']>;
  market?: InputMaybe<Market_Obj_Rel_Insert_Input>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_prices?: InputMaybe<Market_Price_Arr_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
  next_run_at?: InputMaybe<Scalars['timestamptz']>;
  primary_currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Obj_Rel_Insert_Input>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Dca_Order_Max_Fields = {
  __typename?: 'dca_order_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  interval_ms?: Maybe<Scalars['Int']>;
  last_run_at?: Maybe<Scalars['timestamptz']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "dca_order" */
export type Dca_Order_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dca_Order_Min_Fields = {
  __typename?: 'dca_order_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  interval_ms?: Maybe<Scalars['Int']>;
  last_run_at?: Maybe<Scalars['timestamptz']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "dca_order" */
export type Dca_Order_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "dca_order" */
export type Dca_Order_Mutation_Response = {
  __typename?: 'dca_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dca_Order>;
};

/** input type for inserting object relation for remote table "dca_order" */
export type Dca_Order_Obj_Rel_Insert_Input = {
  data: Dca_Order_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Dca_Order_On_Conflict>;
};

/** on_conflict condition type for table "dca_order" */
export type Dca_Order_On_Conflict = {
  constraint: Dca_Order_Constraint;
  update_columns?: Array<Dca_Order_Update_Column>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "dca_order". */
export type Dca_Order_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_market_trading_pair_aggregate?: InputMaybe<Market_Trading_Pair_Aggregate_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Currency_Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Currency_Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dca_order */
export type Dca_Order_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "dca_order" */
export enum Dca_Order_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyAverage = 'daily_average',
  /** column name */
  EnabledAt = 'enabled_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  IntervalMs = 'interval_ms',
  /** column name */
  LastRunAt = 'last_run_at',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  MaxPrice = 'max_price',
  /** column name */
  MaxValue = 'max_value',
  /** column name */
  MinPrice = 'min_price',
  /** column name */
  MinValue = 'min_value',
  /** column name */
  NextRunAt = 'next_run_at',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "dca_order" */
export type Dca_Order_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_average?: InputMaybe<Scalars['numeric']>;
  enabled_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  interval_ms?: InputMaybe<Scalars['Int']>;
  last_run_at?: InputMaybe<Scalars['timestamptz']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
  next_run_at?: InputMaybe<Scalars['timestamptz']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Dca_Order_Stddev_Fields = {
  __typename?: 'dca_order_stddev_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order" */
export type Dca_Order_Stddev_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dca_Order_Stddev_Pop_Fields = {
  __typename?: 'dca_order_stddev_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order" */
export type Dca_Order_Stddev_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dca_Order_Stddev_Samp_Fields = {
  __typename?: 'dca_order_stddev_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order" */
export type Dca_Order_Stddev_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Dca_Order_Sum_Fields = {
  __typename?: 'dca_order_sum_fields';
  daily_average?: Maybe<Scalars['numeric']>;
  interval_ms?: Maybe<Scalars['Int']>;
  market_offset?: Maybe<Scalars['numeric']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order" */
export type Dca_Order_Sum_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** update columns of table "dca_order" */
export enum Dca_Order_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyAverage = 'daily_average',
  /** column name */
  EnabledAt = 'enabled_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  IntervalMs = 'interval_ms',
  /** column name */
  LastRunAt = 'last_run_at',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  MaxPrice = 'max_price',
  /** column name */
  MaxValue = 'max_value',
  /** column name */
  MinPrice = 'min_price',
  /** column name */
  MinValue = 'min_value',
  /** column name */
  NextRunAt = 'next_run_at',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

/** aggregate var_pop on columns */
export type Dca_Order_Var_Pop_Fields = {
  __typename?: 'dca_order_var_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order" */
export type Dca_Order_Var_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dca_Order_Var_Samp_Fields = {
  __typename?: 'dca_order_var_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order" */
export type Dca_Order_Var_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dca_Order_Variance_Fields = {
  __typename?: 'dca_order_variance_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order" */
export type Dca_Order_Variance_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** columns and relationships of "exchange" */
export type Exchange = {
  __typename?: 'exchange';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  id: Scalars['String'];
  market_uid?: Maybe<Scalars['uuid']>;
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** An array relationship */
  primary_currencies: Array<Exchange_Primary_Currency>;
  /** An aggregate relationship */
  primary_currencies_aggregate: Exchange_Primary_Currency_Aggregate;
  /** An array relationship */
  secondary_currencies: Array<Exchange_Secondary_Currency>;
  /** An aggregate relationship */
  secondary_currencies_aggregate: Exchange_Secondary_Currency_Aggregate;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "exchange" */
export type ExchangeDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangePrimary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangePrimary_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeSecondary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeSecondary_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** aggregated selection of "exchange" */
export type Exchange_Aggregate = {
  __typename?: 'exchange_aggregate';
  aggregate?: Maybe<Exchange_Aggregate_Fields>;
  nodes: Array<Exchange>;
};

/** aggregate fields of "exchange" */
export type Exchange_Aggregate_Fields = {
  __typename?: 'exchange_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exchange_Max_Fields>;
  min?: Maybe<Exchange_Min_Fields>;
};


/** aggregate fields of "exchange" */
export type Exchange_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  primary_currencies?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
  secondary_currencies?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** unique or primary key constraints on table "exchange" */
export enum Exchange_Constraint {
  /** unique or primary key constraint on columns "uid" */
  ExchangePkey = 'exchange_pkey',
  /** unique or primary key constraint on columns "id" */
  UniqueExchangeId = 'unique_exchange_id'
}

/** input type for inserting data into table "exchange" */
export type Exchange_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Dca_Order_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  primary_currencies?: InputMaybe<Exchange_Primary_Currency_Arr_Rel_Insert_Input>;
  secondary_currencies?: InputMaybe<Exchange_Secondary_Currency_Arr_Rel_Insert_Input>;
  trades?: InputMaybe<Trade_Arr_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Exchange_Max_Fields = {
  __typename?: 'exchange_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  market_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Exchange_Min_Fields = {
  __typename?: 'exchange_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  market_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "exchange" */
export type Exchange_Mutation_Response = {
  __typename?: 'exchange_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange>;
};

/** input type for inserting object relation for remote table "exchange" */
export type Exchange_Obj_Rel_Insert_Input = {
  data: Exchange_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};

/** on_conflict condition type for table "exchange" */
export type Exchange_On_Conflict = {
  constraint: Exchange_Constraint;
  update_columns?: Array<Exchange_Update_Column>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange". */
export type Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  primary_currencies_aggregate?: InputMaybe<Exchange_Primary_Currency_Aggregate_Order_By>;
  secondary_currencies_aggregate?: InputMaybe<Exchange_Secondary_Currency_Aggregate_Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<User_Exchange_Keys_Aggregate_Order_By>;
};

/** primary key columns input for table: exchange */
export type Exchange_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** columns and relationships of "exchange_primary_currency" */
export type Exchange_Primary_Currency = {
  __typename?: 'exchange_primary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "exchange_primary_currency" */
export type Exchange_Primary_Currency_Aggregate = {
  __typename?: 'exchange_primary_currency_aggregate';
  aggregate?: Maybe<Exchange_Primary_Currency_Aggregate_Fields>;
  nodes: Array<Exchange_Primary_Currency>;
};

/** aggregate fields of "exchange_primary_currency" */
export type Exchange_Primary_Currency_Aggregate_Fields = {
  __typename?: 'exchange_primary_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exchange_Primary_Currency_Max_Fields>;
  min?: Maybe<Exchange_Primary_Currency_Min_Fields>;
};


/** aggregate fields of "exchange_primary_currency" */
export type Exchange_Primary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exchange_Primary_Currency_Max_Order_By>;
  min?: InputMaybe<Exchange_Primary_Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Arr_Rel_Insert_Input = {
  data: Array<Exchange_Primary_Currency_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exchange_Primary_Currency_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type Exchange_Primary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Primary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Primary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exchange_primary_currency" */
export enum Exchange_Primary_Currency_Constraint {
  /** unique or primary key constraint on columns "symbol", "exchange_uid" */
  ExchangeAssetPkey = 'exchange_asset_pkey'
}

/** input type for inserting data into table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Exchange_Primary_Currency_Max_Fields = {
  __typename?: 'exchange_primary_currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exchange_Primary_Currency_Min_Fields = {
  __typename?: 'exchange_primary_currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Mutation_Response = {
  __typename?: 'exchange_primary_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Primary_Currency>;
};

/** on_conflict condition type for table "exchange_primary_currency" */
export type Exchange_Primary_Currency_On_Conflict = {
  constraint: Exchange_Primary_Currency_Constraint;
  update_columns?: Array<Exchange_Primary_Currency_Update_Column>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange_primary_currency". */
export type Exchange_Primary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exchange_primary_currency */
export type Exchange_Primary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};

/** select columns of table "exchange_primary_currency" */
export enum Exchange_Primary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exchange_primary_currency" */
export enum Exchange_Primary_Currency_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "exchange_secondary_currency" */
export type Exchange_Secondary_Currency = {
  __typename?: 'exchange_secondary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Aggregate = {
  __typename?: 'exchange_secondary_currency_aggregate';
  aggregate?: Maybe<Exchange_Secondary_Currency_Aggregate_Fields>;
  nodes: Array<Exchange_Secondary_Currency>;
};

/** aggregate fields of "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Aggregate_Fields = {
  __typename?: 'exchange_secondary_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exchange_Secondary_Currency_Max_Fields>;
  min?: Maybe<Exchange_Secondary_Currency_Min_Fields>;
};


/** aggregate fields of "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exchange_Secondary_Currency_Max_Order_By>;
  min?: InputMaybe<Exchange_Secondary_Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Arr_Rel_Insert_Input = {
  data: Array<Exchange_Secondary_Currency_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exchange_Secondary_Currency_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type Exchange_Secondary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Secondary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Secondary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exchange_secondary_currency" */
export enum Exchange_Secondary_Currency_Constraint {
  /** unique or primary key constraint on columns "symbol", "exchange_uid" */
  ExchangeSecondaryCurrencyPkey = 'exchange_secondary_currency_pkey'
}

/** input type for inserting data into table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Exchange_Secondary_Currency_Max_Fields = {
  __typename?: 'exchange_secondary_currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exchange_Secondary_Currency_Min_Fields = {
  __typename?: 'exchange_secondary_currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Mutation_Response = {
  __typename?: 'exchange_secondary_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Secondary_Currency>;
};

/** on_conflict condition type for table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_On_Conflict = {
  constraint: Exchange_Secondary_Currency_Constraint;
  update_columns?: Array<Exchange_Secondary_Currency_Update_Column>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange_secondary_currency". */
export type Exchange_Secondary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exchange_secondary_currency */
export type Exchange_Secondary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};

/** select columns of table "exchange_secondary_currency" */
export enum Exchange_Secondary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exchange_secondary_currency" */
export enum Exchange_Secondary_Currency_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select columns of table "exchange" */
export enum Exchange_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "exchange" */
export type Exchange_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exchange" */
export enum Exchange_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Fee_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "market" */
export type Market = {
  __typename?: 'market';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  market_prices: Array<Market_Price>;
  /** An aggregate relationship */
  market_prices_aggregate: Market_Price_Aggregate;
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "market" */
export type MarketDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "market" */
export type MarketDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "market" */
export type MarketMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


/** columns and relationships of "market" */
export type MarketMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** aggregated selection of "market" */
export type Market_Aggregate = {
  __typename?: 'market_aggregate';
  aggregate?: Maybe<Market_Aggregate_Fields>;
  nodes: Array<Market>;
};

/** aggregate fields of "market" */
export type Market_Aggregate_Fields = {
  __typename?: 'market_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Market_Max_Fields>;
  min?: Maybe<Market_Min_Fields>;
};


/** aggregate fields of "market" */
export type Market_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Market_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "market". All fields are combined with a logical 'AND'. */
export type Market_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Bool_Exp>>;
  _not?: InputMaybe<Market_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "market" */
export enum Market_Constraint {
  /** unique or primary key constraint on columns "uid" */
  MarketPkey = 'market_pkey',
  /** unique or primary key constraint on columns "id" */
  UniqueMarketId = 'unique_market_id'
}

/** input type for inserting data into table "market" */
export type Market_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Dca_Order_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  market_prices?: InputMaybe<Market_Price_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Market_Max_Fields = {
  __typename?: 'market_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Market_Min_Fields = {
  __typename?: 'market_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "market" */
export type Market_Mutation_Response = {
  __typename?: 'market_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Market>;
};

/** input type for inserting object relation for remote table "market" */
export type Market_Obj_Rel_Insert_Input = {
  data: Market_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Market_On_Conflict>;
};

/** on_conflict condition type for table "market" */
export type Market_On_Conflict = {
  constraint: Market_Constraint;
  update_columns?: Array<Market_Update_Column>;
  where?: InputMaybe<Market_Bool_Exp>;
};

/** Ordering options when selecting data from "market". */
export type Market_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: market */
export type Market_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** columns and relationships of "market_price" */
export type Market_Price = {
  __typename?: 'market_price';
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  fx_rate: Scalars['numeric'];
  /** An object relationship */
  market: Market;
  market_uid: Scalars['uuid'];
  price: Scalars['numeric'];
  source_currency: Scalars['bpchar'];
  source_price: Scalars['numeric'];
  timestamp: Scalars['timestamptz'];
};

/** aggregated selection of "market_price" */
export type Market_Price_Aggregate = {
  __typename?: 'market_price_aggregate';
  aggregate?: Maybe<Market_Price_Aggregate_Fields>;
  nodes: Array<Market_Price>;
};

/** aggregate fields of "market_price" */
export type Market_Price_Aggregate_Fields = {
  __typename?: 'market_price_aggregate_fields';
  avg?: Maybe<Market_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Market_Price_Max_Fields>;
  min?: Maybe<Market_Price_Min_Fields>;
  stddev?: Maybe<Market_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Market_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Market_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Market_Price_Sum_Fields>;
  var_pop?: Maybe<Market_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Market_Price_Var_Samp_Fields>;
  variance?: Maybe<Market_Price_Variance_Fields>;
};


/** aggregate fields of "market_price" */
export type Market_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Market_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "market_price" */
export type Market_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Market_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Market_Price_Max_Order_By>;
  min?: InputMaybe<Market_Price_Min_Order_By>;
  stddev?: InputMaybe<Market_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Market_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Market_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Market_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Market_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Market_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Market_Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "market_price" */
export type Market_Price_Arr_Rel_Insert_Input = {
  data: Array<Market_Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Market_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Market_Price_Avg_Fields = {
  __typename?: 'market_price_avg_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "market_price" */
export type Market_Price_Avg_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "market_price". All fields are combined with a logical 'AND'. */
export type Market_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Price_Bool_Exp>>;
  _not?: InputMaybe<Market_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Price_Bool_Exp>>;
  asset_symbol?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  fx_rate?: InputMaybe<Numeric_Comparison_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  source_currency?: InputMaybe<Bpchar_Comparison_Exp>;
  source_price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "market_price" */
export enum Market_Price_Constraint {
  /** unique or primary key constraint on columns "asset_symbol", "currency", "source_currency", "timestamp", "market_uid" */
  MarketPricePkey = 'market_price_pkey'
}

/** input type for incrementing numeric columns in table "market_price" */
export type Market_Price_Inc_Input = {
  fx_rate?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "market_price" */
export type Market_Price_Insert_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fx_rate?: InputMaybe<Scalars['numeric']>;
  market?: InputMaybe<Market_Obj_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_currency?: InputMaybe<Scalars['bpchar']>;
  source_price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

export type Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Market_Price_Max_Fields = {
  __typename?: 'market_price_max_fields';
  asset_symbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fx_rate?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  source_currency?: Maybe<Scalars['bpchar']>;
  source_price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "market_price" */
export type Market_Price_Max_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Market_Price_Min_Fields = {
  __typename?: 'market_price_min_fields';
  asset_symbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fx_rate?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  source_currency?: Maybe<Scalars['bpchar']>;
  source_price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "market_price" */
export type Market_Price_Min_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "market_price" */
export type Market_Price_Mutation_Response = {
  __typename?: 'market_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Market_Price>;
};

/** on_conflict condition type for table "market_price" */
export type Market_Price_On_Conflict = {
  constraint: Market_Price_Constraint;
  update_columns?: Array<Market_Price_Update_Column>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "market_price". */
export type Market_Price_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: market_price */
export type Market_Price_Pk_Columns_Input = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};

/** select columns of table "market_price" */
export enum Market_Price_Select_Column {
  /** column name */
  AssetSymbol = 'asset_symbol',
  /** column name */
  Currency = 'currency',
  /** column name */
  FxRate = 'fx_rate',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  Price = 'price',
  /** column name */
  SourceCurrency = 'source_currency',
  /** column name */
  SourcePrice = 'source_price',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "market_price" */
export type Market_Price_Set_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fx_rate?: InputMaybe<Scalars['numeric']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_currency?: InputMaybe<Scalars['bpchar']>;
  source_price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Market_Price_Stddev_Fields = {
  __typename?: 'market_price_stddev_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "market_price" */
export type Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Market_Price_Stddev_Pop_Fields = {
  __typename?: 'market_price_stddev_pop_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "market_price" */
export type Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Market_Price_Stddev_Samp_Fields = {
  __typename?: 'market_price_stddev_samp_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "market_price" */
export type Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Market_Price_Sum_Fields = {
  __typename?: 'market_price_sum_fields';
  fx_rate?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  source_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "market_price" */
export type Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** update columns of table "market_price" */
export enum Market_Price_Update_Column {
  /** column name */
  AssetSymbol = 'asset_symbol',
  /** column name */
  Currency = 'currency',
  /** column name */
  FxRate = 'fx_rate',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  Price = 'price',
  /** column name */
  SourceCurrency = 'source_currency',
  /** column name */
  SourcePrice = 'source_price',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate var_pop on columns */
export type Market_Price_Var_Pop_Fields = {
  __typename?: 'market_price_var_pop_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "market_price" */
export type Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Market_Price_Var_Samp_Fields = {
  __typename?: 'market_price_var_samp_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "market_price" */
export type Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Market_Price_Variance_Fields = {
  __typename?: 'market_price_variance_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "market_price" */
export type Market_Price_Variance_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** select columns of table "market" */
export enum Market_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "market" */
export type Market_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "market_trading_pair" */
export type Market_Trading_Pair = {
  __typename?: 'market_trading_pair';
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Currency;
  /** An object relationship */
  market: Market;
  /** An array relationship */
  market_prices: Array<Market_Price>;
  /** An aggregate relationship */
  market_prices_aggregate: Market_Price_Aggregate;
  market_uid: Scalars['uuid'];
  primary_currency_symbol: Scalars['String'];
  secondary_currency_symbol: Scalars['String'];
};


/** columns and relationships of "market_trading_pair" */
export type Market_Trading_PairMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


/** columns and relationships of "market_trading_pair" */
export type Market_Trading_PairMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** aggregated selection of "market_trading_pair" */
export type Market_Trading_Pair_Aggregate = {
  __typename?: 'market_trading_pair_aggregate';
  aggregate?: Maybe<Market_Trading_Pair_Aggregate_Fields>;
  nodes: Array<Market_Trading_Pair>;
};

/** aggregate fields of "market_trading_pair" */
export type Market_Trading_Pair_Aggregate_Fields = {
  __typename?: 'market_trading_pair_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Market_Trading_Pair_Max_Fields>;
  min?: Maybe<Market_Trading_Pair_Min_Fields>;
};


/** aggregate fields of "market_trading_pair" */
export type Market_Trading_Pair_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "market_trading_pair" */
export type Market_Trading_Pair_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Market_Trading_Pair_Max_Order_By>;
  min?: InputMaybe<Market_Trading_Pair_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "market_trading_pair". All fields are combined with a logical 'AND'. */
export type Market_Trading_Pair_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Trading_Pair_Bool_Exp>>;
  _not?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Trading_Pair_Bool_Exp>>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Currency_Bool_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "market_trading_pair" */
export type Market_Trading_Pair_Insert_Input = {
  currency?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Currency_Obj_Rel_Insert_Input>;
  market?: InputMaybe<Market_Obj_Rel_Insert_Input>;
  market_prices?: InputMaybe<Market_Price_Arr_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Market_Trading_Pair_Max_Fields = {
  __typename?: 'market_trading_pair_max_fields';
  market_uid?: Maybe<Scalars['uuid']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "market_trading_pair" */
export type Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Market_Trading_Pair_Min_Fields = {
  __typename?: 'market_trading_pair_min_fields';
  market_uid?: Maybe<Scalars['uuid']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "market_trading_pair" */
export type Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "market_trading_pair" */
export type Market_Trading_Pair_Mutation_Response = {
  __typename?: 'market_trading_pair_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Market_Trading_Pair>;
};

/** Ordering options when selecting data from "market_trading_pair". */
export type Market_Trading_Pair_Order_By = {
  currency?: InputMaybe<Currency_Order_By>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Currency_Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** select columns of table "market_trading_pair" */
export enum Market_Trading_Pair_Select_Column {
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol'
}

/** input type for updating data in table "market_trading_pair" */
export type Market_Trading_Pair_Set_Input = {
  market_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
};

/** update columns of table "market" */
export enum Market_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  action_create_auth_token?: Maybe<CreateAuthTokenOutput>;
  action_create_dca_order?: Maybe<CreateDcaOrderResult>;
  action_create_stripe_subscription: CreateStripeSubscription;
  action_create_user?: Maybe<CreateUserOutput>;
  action_create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>;
  action_delete_user?: Maybe<DeleteUserOutput>;
  action_delete_user_2fa?: Maybe<DeleteUser2FaOutput>;
  action_enable_user_2fa?: Maybe<EnableUser2FaOutput>;
  action_refresh_auth_token?: Maybe<RefreshAuthTokenOutput>;
  action_reset_user_password: ResetUserPasswordOutput;
  action_seed_test_account: SeedTestAccountOutput;
  action_send_user_email_verify: SendUserEmailVerifyOutput;
  action_send_user_password_reset: SendUserPasswordResetOutput;
  action_sync_currency_fx?: Maybe<SyncCurrencyFxOutput>;
  action_sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>;
  action_sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>;
  action_update_dca_order: UpdateDcaOrderOutput;
  action_update_stripe_subscription: UpdateSubscriptionOutput;
  action_update_user: UpdateUserOutput;
  action_update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>;
  action_validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>;
  action_validate_user_exchange_keys_live?: Maybe<ValidateUserExchangeKeysLiveOutput>;
  action_validate_user_password_reset: ValidatUserPasswordResetOutput;
  action_verify_user_email: VerifyUserEmailOutput;
  /** delete data from the table: "balance" */
  delete_balance?: Maybe<Balance_Mutation_Response>;
  /** delete single row from the table: "balance" */
  delete_balance_by_pk?: Maybe<Balance>;
  /** delete data from the table: "currency" */
  delete_currency?: Maybe<Currency_Mutation_Response>;
  /** delete single row from the table: "currency" */
  delete_currency_by_pk?: Maybe<Currency>;
  /** delete data from the table: "dca_order" */
  delete_dca_order?: Maybe<Dca_Order_Mutation_Response>;
  /** delete single row from the table: "dca_order" */
  delete_dca_order_by_pk?: Maybe<Dca_Order>;
  /** delete data from the table: "dca_order_history" */
  delete_dca_order_history?: Maybe<Dca_Order_History_Mutation_Response>;
  /** delete single row from the table: "dca_order_history" */
  delete_dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** delete data from the table: "exchange" */
  delete_exchange?: Maybe<Exchange_Mutation_Response>;
  /** delete single row from the table: "exchange" */
  delete_exchange_by_pk?: Maybe<Exchange>;
  /** delete data from the table: "exchange_primary_currency" */
  delete_exchange_primary_currency?: Maybe<Exchange_Primary_Currency_Mutation_Response>;
  /** delete single row from the table: "exchange_primary_currency" */
  delete_exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** delete data from the table: "exchange_secondary_currency" */
  delete_exchange_secondary_currency?: Maybe<Exchange_Secondary_Currency_Mutation_Response>;
  /** delete single row from the table: "exchange_secondary_currency" */
  delete_exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** delete data from the table: "market" */
  delete_market?: Maybe<Market_Mutation_Response>;
  /** delete single row from the table: "market" */
  delete_market_by_pk?: Maybe<Market>;
  /** delete data from the table: "market_price" */
  delete_market_price?: Maybe<Market_Price_Mutation_Response>;
  /** delete single row from the table: "market_price" */
  delete_market_price_by_pk?: Maybe<Market_Price>;
  /** delete data from the table: "market_trading_pair" */
  delete_market_trading_pair?: Maybe<Market_Trading_Pair_Mutation_Response>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "stripe_customer" */
  delete_stripe_customer?: Maybe<Stripe_Customer_Mutation_Response>;
  /** delete single row from the table: "stripe_customer" */
  delete_stripe_customer_by_pk?: Maybe<Stripe_Customer>;
  /** delete data from the table: "stripe_price" */
  delete_stripe_price?: Maybe<Stripe_Price_Mutation_Response>;
  /** delete single row from the table: "stripe_price" */
  delete_stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** delete data from the table: "stripe_product" */
  delete_stripe_product?: Maybe<Stripe_Product_Mutation_Response>;
  /** delete single row from the table: "stripe_product" */
  delete_stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** delete data from the table: "stripe_subscription" */
  delete_stripe_subscription?: Maybe<Stripe_Subscription_Mutation_Response>;
  /** delete single row from the table: "stripe_subscription" */
  delete_stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** delete data from the table: "trade" */
  delete_trade?: Maybe<Trade_Mutation_Response>;
  /** delete single row from the table: "trade" */
  delete_trade_by_pk?: Maybe<Trade>;
  /** delete data from the table: "type_trade_avg_price_by_window" */
  delete_type_trade_avg_price_by_window?: Maybe<Type_Trade_Avg_Price_By_Window_Mutation_Response>;
  /** delete data from the table: "type_trade_sum_by_window" */
  delete_type_trade_sum_by_window?: Maybe<Type_Trade_Sum_By_Window_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_2fa" */
  delete_user_2fa?: Maybe<User_2fa_Mutation_Response>;
  /** delete single row from the table: "user_2fa" */
  delete_user_2fa_by_pk?: Maybe<User_2fa>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_device" */
  delete_user_device?: Maybe<User_Device_Mutation_Response>;
  /** delete single row from the table: "user_device" */
  delete_user_device_by_pk?: Maybe<User_Device>;
  /** delete data from the table: "user_email_verify" */
  delete_user_email_verify?: Maybe<User_Email_Verify_Mutation_Response>;
  /** delete single row from the table: "user_email_verify" */
  delete_user_email_verify_by_pk?: Maybe<User_Email_Verify>;
  /** delete data from the table: "user_exchange_keys" */
  delete_user_exchange_keys?: Maybe<User_Exchange_Keys_Mutation_Response>;
  /** delete single row from the table: "user_exchange_keys" */
  delete_user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
  /** delete data from the table: "user_password_reset" */
  delete_user_password_reset?: Maybe<User_Password_Reset_Mutation_Response>;
  /** delete single row from the table: "user_password_reset" */
  delete_user_password_reset_by_pk?: Maybe<User_Password_Reset>;
  /** insert data into the table: "balance" */
  insert_balance?: Maybe<Balance_Mutation_Response>;
  /** insert a single row into the table: "balance" */
  insert_balance_one?: Maybe<Balance>;
  /** insert data into the table: "currency" */
  insert_currency?: Maybe<Currency_Mutation_Response>;
  /** insert a single row into the table: "currency" */
  insert_currency_one?: Maybe<Currency>;
  /** insert data into the table: "dca_order" */
  insert_dca_order?: Maybe<Dca_Order_Mutation_Response>;
  /** insert data into the table: "dca_order_history" */
  insert_dca_order_history?: Maybe<Dca_Order_History_Mutation_Response>;
  /** insert a single row into the table: "dca_order_history" */
  insert_dca_order_history_one?: Maybe<Dca_Order_History>;
  /** insert a single row into the table: "dca_order" */
  insert_dca_order_one?: Maybe<Dca_Order>;
  /** insert data into the table: "exchange" */
  insert_exchange?: Maybe<Exchange_Mutation_Response>;
  /** insert a single row into the table: "exchange" */
  insert_exchange_one?: Maybe<Exchange>;
  /** insert data into the table: "exchange_primary_currency" */
  insert_exchange_primary_currency?: Maybe<Exchange_Primary_Currency_Mutation_Response>;
  /** insert a single row into the table: "exchange_primary_currency" */
  insert_exchange_primary_currency_one?: Maybe<Exchange_Primary_Currency>;
  /** insert data into the table: "exchange_secondary_currency" */
  insert_exchange_secondary_currency?: Maybe<Exchange_Secondary_Currency_Mutation_Response>;
  /** insert a single row into the table: "exchange_secondary_currency" */
  insert_exchange_secondary_currency_one?: Maybe<Exchange_Secondary_Currency>;
  /** insert data into the table: "market" */
  insert_market?: Maybe<Market_Mutation_Response>;
  /** insert a single row into the table: "market" */
  insert_market_one?: Maybe<Market>;
  /** insert data into the table: "market_price" */
  insert_market_price?: Maybe<Market_Price_Mutation_Response>;
  /** insert a single row into the table: "market_price" */
  insert_market_price_one?: Maybe<Market_Price>;
  /** insert data into the table: "market_trading_pair" */
  insert_market_trading_pair?: Maybe<Market_Trading_Pair_Mutation_Response>;
  /** insert a single row into the table: "market_trading_pair" */
  insert_market_trading_pair_one?: Maybe<Market_Trading_Pair>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "stripe_customer" */
  insert_stripe_customer?: Maybe<Stripe_Customer_Mutation_Response>;
  /** insert a single row into the table: "stripe_customer" */
  insert_stripe_customer_one?: Maybe<Stripe_Customer>;
  /** insert data into the table: "stripe_price" */
  insert_stripe_price?: Maybe<Stripe_Price_Mutation_Response>;
  /** insert a single row into the table: "stripe_price" */
  insert_stripe_price_one?: Maybe<Stripe_Price>;
  /** insert data into the table: "stripe_product" */
  insert_stripe_product?: Maybe<Stripe_Product_Mutation_Response>;
  /** insert a single row into the table: "stripe_product" */
  insert_stripe_product_one?: Maybe<Stripe_Product>;
  /** insert data into the table: "stripe_subscription" */
  insert_stripe_subscription?: Maybe<Stripe_Subscription_Mutation_Response>;
  /** insert a single row into the table: "stripe_subscription" */
  insert_stripe_subscription_one?: Maybe<Stripe_Subscription>;
  /** insert data into the table: "trade" */
  insert_trade?: Maybe<Trade_Mutation_Response>;
  /** insert a single row into the table: "trade" */
  insert_trade_one?: Maybe<Trade>;
  /** insert data into the table: "type_trade_avg_price_by_window" */
  insert_type_trade_avg_price_by_window?: Maybe<Type_Trade_Avg_Price_By_Window_Mutation_Response>;
  /** insert a single row into the table: "type_trade_avg_price_by_window" */
  insert_type_trade_avg_price_by_window_one?: Maybe<Type_Trade_Avg_Price_By_Window>;
  /** insert data into the table: "type_trade_sum_by_window" */
  insert_type_trade_sum_by_window?: Maybe<Type_Trade_Sum_By_Window_Mutation_Response>;
  /** insert a single row into the table: "type_trade_sum_by_window" */
  insert_type_trade_sum_by_window_one?: Maybe<Type_Trade_Sum_By_Window>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_2fa" */
  insert_user_2fa?: Maybe<User_2fa_Mutation_Response>;
  /** insert a single row into the table: "user_2fa" */
  insert_user_2fa_one?: Maybe<User_2fa>;
  /** insert data into the table: "user_device" */
  insert_user_device?: Maybe<User_Device_Mutation_Response>;
  /** insert a single row into the table: "user_device" */
  insert_user_device_one?: Maybe<User_Device>;
  /** insert data into the table: "user_email_verify" */
  insert_user_email_verify?: Maybe<User_Email_Verify_Mutation_Response>;
  /** insert a single row into the table: "user_email_verify" */
  insert_user_email_verify_one?: Maybe<User_Email_Verify>;
  /** insert data into the table: "user_exchange_keys" */
  insert_user_exchange_keys?: Maybe<User_Exchange_Keys_Mutation_Response>;
  /** insert a single row into the table: "user_exchange_keys" */
  insert_user_exchange_keys_one?: Maybe<User_Exchange_Keys>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_password_reset" */
  insert_user_password_reset?: Maybe<User_Password_Reset_Mutation_Response>;
  /** insert a single row into the table: "user_password_reset" */
  insert_user_password_reset_one?: Maybe<User_Password_Reset>;
  /** update data of the table: "balance" */
  update_balance?: Maybe<Balance_Mutation_Response>;
  /** update single row of the table: "balance" */
  update_balance_by_pk?: Maybe<Balance>;
  /** update data of the table: "currency" */
  update_currency?: Maybe<Currency_Mutation_Response>;
  /** update single row of the table: "currency" */
  update_currency_by_pk?: Maybe<Currency>;
  /** update data of the table: "dca_order" */
  update_dca_order?: Maybe<Dca_Order_Mutation_Response>;
  /** update single row of the table: "dca_order" */
  update_dca_order_by_pk?: Maybe<Dca_Order>;
  /** update data of the table: "dca_order_history" */
  update_dca_order_history?: Maybe<Dca_Order_History_Mutation_Response>;
  /** update single row of the table: "dca_order_history" */
  update_dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** update data of the table: "exchange" */
  update_exchange?: Maybe<Exchange_Mutation_Response>;
  /** update single row of the table: "exchange" */
  update_exchange_by_pk?: Maybe<Exchange>;
  /** update data of the table: "exchange_primary_currency" */
  update_exchange_primary_currency?: Maybe<Exchange_Primary_Currency_Mutation_Response>;
  /** update single row of the table: "exchange_primary_currency" */
  update_exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** update data of the table: "exchange_secondary_currency" */
  update_exchange_secondary_currency?: Maybe<Exchange_Secondary_Currency_Mutation_Response>;
  /** update single row of the table: "exchange_secondary_currency" */
  update_exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** update data of the table: "market" */
  update_market?: Maybe<Market_Mutation_Response>;
  /** update single row of the table: "market" */
  update_market_by_pk?: Maybe<Market>;
  /** update data of the table: "market_price" */
  update_market_price?: Maybe<Market_Price_Mutation_Response>;
  /** update single row of the table: "market_price" */
  update_market_price_by_pk?: Maybe<Market_Price>;
  /** update data of the table: "market_trading_pair" */
  update_market_trading_pair?: Maybe<Market_Trading_Pair_Mutation_Response>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update data of the table: "stripe_customer" */
  update_stripe_customer?: Maybe<Stripe_Customer_Mutation_Response>;
  /** update single row of the table: "stripe_customer" */
  update_stripe_customer_by_pk?: Maybe<Stripe_Customer>;
  /** update data of the table: "stripe_price" */
  update_stripe_price?: Maybe<Stripe_Price_Mutation_Response>;
  /** update single row of the table: "stripe_price" */
  update_stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** update data of the table: "stripe_product" */
  update_stripe_product?: Maybe<Stripe_Product_Mutation_Response>;
  /** update single row of the table: "stripe_product" */
  update_stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** update data of the table: "stripe_subscription" */
  update_stripe_subscription?: Maybe<Stripe_Subscription_Mutation_Response>;
  /** update single row of the table: "stripe_subscription" */
  update_stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** update data of the table: "trade" */
  update_trade?: Maybe<Trade_Mutation_Response>;
  /** update single row of the table: "trade" */
  update_trade_by_pk?: Maybe<Trade>;
  /** update data of the table: "type_trade_avg_price_by_window" */
  update_type_trade_avg_price_by_window?: Maybe<Type_Trade_Avg_Price_By_Window_Mutation_Response>;
  /** update data of the table: "type_trade_sum_by_window" */
  update_type_trade_sum_by_window?: Maybe<Type_Trade_Sum_By_Window_Mutation_Response>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_2fa" */
  update_user_2fa?: Maybe<User_2fa_Mutation_Response>;
  /** update single row of the table: "user_2fa" */
  update_user_2fa_by_pk?: Maybe<User_2fa>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_device" */
  update_user_device?: Maybe<User_Device_Mutation_Response>;
  /** update single row of the table: "user_device" */
  update_user_device_by_pk?: Maybe<User_Device>;
  /** update data of the table: "user_email_verify" */
  update_user_email_verify?: Maybe<User_Email_Verify_Mutation_Response>;
  /** update single row of the table: "user_email_verify" */
  update_user_email_verify_by_pk?: Maybe<User_Email_Verify>;
  /** update data of the table: "user_exchange_keys" */
  update_user_exchange_keys?: Maybe<User_Exchange_Keys_Mutation_Response>;
  /** update single row of the table: "user_exchange_keys" */
  update_user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
  /** update data of the table: "user_password_reset" */
  update_user_password_reset?: Maybe<User_Password_Reset_Mutation_Response>;
  /** update single row of the table: "user_password_reset" */
  update_user_password_reset_by_pk?: Maybe<User_Password_Reset>;
};


/** mutation root */
export type Mutation_RootAction_Create_Auth_TokenArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  token_2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Create_Dca_OrderArgs = {
  daily_average: Scalars['Float'];
  interval_ms: Scalars['Int'];
  market_offset: Scalars['Float'];
  market_uid: Scalars['uuid'];
  max_price?: InputMaybe<Scalars['Float']>;
  max_value?: InputMaybe<Scalars['Float']>;
  min_price?: InputMaybe<Scalars['Float']>;
  min_value?: InputMaybe<Scalars['Float']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  start_at: Scalars['timestamp'];
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Create_Stripe_SubscriptionArgs = {
  price_id?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Create_UserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Create_User_Exchange_KeysArgs = {
  description: Scalars['String'];
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootAction_Delete_User_2faArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Enable_User_2faArgs = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Reset_User_PasswordArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  new_password: Scalars['String'];
  password_reset_secret: Scalars['String'];
  token_2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Seed_Test_AccountArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Send_User_Password_ResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Sync_Currency_FxArgs = {
  end_date: Scalars['timestamptz'];
  from_symbol: Scalars['String'];
  start_date: Scalars['timestamptz'];
  to_symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Sync_Exchange_Open_Order_ListArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Sync_Exchange_Trade_ListArgs = {
  force_sync?: InputMaybe<Scalars['Boolean']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Update_Dca_OrderArgs = {
  dca_order_uid: Scalars['uuid'];
  enabled: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootAction_Update_Stripe_SubscriptionArgs = {
  cancel_at_period_end: Scalars['Boolean'];
  subscription_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Update_UserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Update_User_Exchange_KeysArgs = {
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Exchange_Keys_LiveArgs = {
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Password_ResetArgs = {
  password_reset_secret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Verify_User_EmailArgs = {
  email_verify_secret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BalanceArgs = {
  where: Balance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Balance_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CurrencyArgs = {
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currency_By_PkArgs = {
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Dca_OrderArgs = {
  where: Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Dca_Order_HistoryArgs = {
  where: Dca_Order_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ExchangeArgs = {
  where: Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Primary_CurrencyArgs = {
  where: Exchange_Primary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Secondary_CurrencyArgs = {
  where: Exchange_Secondary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MarketArgs = {
  where: Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Market_PriceArgs = {
  where: Market_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


/** mutation root */
export type Mutation_RootDelete_Market_Trading_PairArgs = {
  where: Market_Trading_Pair_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stripe_CustomerArgs = {
  where: Stripe_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stripe_Customer_By_PkArgs = {
  user_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stripe_PriceArgs = {
  where: Stripe_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stripe_Price_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Stripe_ProductArgs = {
  where: Stripe_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stripe_Product_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Stripe_SubscriptionArgs = {
  where: Stripe_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stripe_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TradeArgs = {
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Type_Trade_Avg_Price_By_WindowArgs = {
  where: Type_Trade_Avg_Price_By_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Type_Trade_Sum_By_WindowArgs = {
  where: Type_Trade_Sum_By_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_2faArgs = {
  where: User_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_DeviceArgs = {
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Email_VerifyArgs = {
  where: User_Email_Verify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Email_Verify_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Exchange_KeysArgs = {
  where: User_Exchange_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Password_ResetArgs = {
  where: User_Password_Reset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BalanceArgs = {
  objects: Array<Balance_Insert_Input>;
  on_conflict?: InputMaybe<Balance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Balance_OneArgs = {
  object: Balance_Insert_Input;
  on_conflict?: InputMaybe<Balance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrencyArgs = {
  objects: Array<Currency_Insert_Input>;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_OneArgs = {
  object: Currency_Insert_Input;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dca_OrderArgs = {
  objects: Array<Dca_Order_Insert_Input>;
  on_conflict?: InputMaybe<Dca_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dca_Order_HistoryArgs = {
  objects: Array<Dca_Order_History_Insert_Input>;
  on_conflict?: InputMaybe<Dca_Order_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dca_Order_History_OneArgs = {
  object: Dca_Order_History_Insert_Input;
  on_conflict?: InputMaybe<Dca_Order_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dca_Order_OneArgs = {
  object: Dca_Order_Insert_Input;
  on_conflict?: InputMaybe<Dca_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExchangeArgs = {
  objects: Array<Exchange_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_OneArgs = {
  object: Exchange_Insert_Input;
  on_conflict?: InputMaybe<Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Primary_CurrencyArgs = {
  objects: Array<Exchange_Primary_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_Primary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Primary_Currency_OneArgs = {
  object: Exchange_Primary_Currency_Insert_Input;
  on_conflict?: InputMaybe<Exchange_Primary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Secondary_CurrencyArgs = {
  objects: Array<Exchange_Secondary_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Exchange_Secondary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Secondary_Currency_OneArgs = {
  object: Exchange_Secondary_Currency_Insert_Input;
  on_conflict?: InputMaybe<Exchange_Secondary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarketArgs = {
  objects: Array<Market_Insert_Input>;
  on_conflict?: InputMaybe<Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_OneArgs = {
  object: Market_Insert_Input;
  on_conflict?: InputMaybe<Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_PriceArgs = {
  objects: Array<Market_Price_Insert_Input>;
  on_conflict?: InputMaybe<Market_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_Price_OneArgs = {
  object: Market_Price_Insert_Input;
  on_conflict?: InputMaybe<Market_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Market_Trading_PairArgs = {
  objects: Array<Market_Trading_Pair_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Market_Trading_Pair_OneArgs = {
  object: Market_Trading_Pair_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_CustomerArgs = {
  objects: Array<Stripe_Customer_Insert_Input>;
  on_conflict?: InputMaybe<Stripe_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_Customer_OneArgs = {
  object: Stripe_Customer_Insert_Input;
  on_conflict?: InputMaybe<Stripe_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_PriceArgs = {
  objects: Array<Stripe_Price_Insert_Input>;
  on_conflict?: InputMaybe<Stripe_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_Price_OneArgs = {
  object: Stripe_Price_Insert_Input;
  on_conflict?: InputMaybe<Stripe_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_ProductArgs = {
  objects: Array<Stripe_Product_Insert_Input>;
  on_conflict?: InputMaybe<Stripe_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_Product_OneArgs = {
  object: Stripe_Product_Insert_Input;
  on_conflict?: InputMaybe<Stripe_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_SubscriptionArgs = {
  objects: Array<Stripe_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Stripe_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stripe_Subscription_OneArgs = {
  object: Stripe_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Stripe_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TradeArgs = {
  objects: Array<Trade_Insert_Input>;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_OneArgs = {
  object: Trade_Insert_Input;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Trade_Avg_Price_By_WindowArgs = {
  objects: Array<Type_Trade_Avg_Price_By_Window_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Trade_Avg_Price_By_Window_OneArgs = {
  object: Type_Trade_Avg_Price_By_Window_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Type_Trade_Sum_By_WindowArgs = {
  objects: Array<Type_Trade_Sum_By_Window_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Type_Trade_Sum_By_Window_OneArgs = {
  object: Type_Trade_Sum_By_Window_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_2faArgs = {
  objects: Array<User_2fa_Insert_Input>;
  on_conflict?: InputMaybe<User_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_2fa_OneArgs = {
  object: User_2fa_Insert_Input;
  on_conflict?: InputMaybe<User_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_DeviceArgs = {
  objects: Array<User_Device_Insert_Input>;
  on_conflict?: InputMaybe<User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Device_OneArgs = {
  object: User_Device_Insert_Input;
  on_conflict?: InputMaybe<User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Email_VerifyArgs = {
  objects: Array<User_Email_Verify_Insert_Input>;
  on_conflict?: InputMaybe<User_Email_Verify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Email_Verify_OneArgs = {
  object: User_Email_Verify_Insert_Input;
  on_conflict?: InputMaybe<User_Email_Verify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Exchange_KeysArgs = {
  objects: Array<User_Exchange_Keys_Insert_Input>;
  on_conflict?: InputMaybe<User_Exchange_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Exchange_Keys_OneArgs = {
  object: User_Exchange_Keys_Insert_Input;
  on_conflict?: InputMaybe<User_Exchange_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Password_ResetArgs = {
  objects: Array<User_Password_Reset_Insert_Input>;
  on_conflict?: InputMaybe<User_Password_Reset_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Password_Reset_OneArgs = {
  object: User_Password_Reset_Insert_Input;
  on_conflict?: InputMaybe<User_Password_Reset_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BalanceArgs = {
  _inc?: InputMaybe<Balance_Inc_Input>;
  _set?: InputMaybe<Balance_Set_Input>;
  where: Balance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Balance_By_PkArgs = {
  _inc?: InputMaybe<Balance_Inc_Input>;
  _set?: InputMaybe<Balance_Set_Input>;
  pk_columns: Balance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CurrencyArgs = {
  _set?: InputMaybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_By_PkArgs = {
  _set?: InputMaybe<Currency_Set_Input>;
  pk_columns: Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_OrderArgs = {
  _inc?: InputMaybe<Dca_Order_Inc_Input>;
  _set?: InputMaybe<Dca_Order_Set_Input>;
  where: Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_Order_By_PkArgs = {
  _inc?: InputMaybe<Dca_Order_Inc_Input>;
  _set?: InputMaybe<Dca_Order_Set_Input>;
  pk_columns: Dca_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_Order_HistoryArgs = {
  _inc?: InputMaybe<Dca_Order_History_Inc_Input>;
  _set?: InputMaybe<Dca_Order_History_Set_Input>;
  where: Dca_Order_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_Order_History_By_PkArgs = {
  _inc?: InputMaybe<Dca_Order_History_Inc_Input>;
  _set?: InputMaybe<Dca_Order_History_Set_Input>;
  pk_columns: Dca_Order_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExchangeArgs = {
  _set?: InputMaybe<Exchange_Set_Input>;
  where: Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_By_PkArgs = {
  _set?: InputMaybe<Exchange_Set_Input>;
  pk_columns: Exchange_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Primary_CurrencyArgs = {
  _set?: InputMaybe<Exchange_Primary_Currency_Set_Input>;
  where: Exchange_Primary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Primary_Currency_By_PkArgs = {
  _set?: InputMaybe<Exchange_Primary_Currency_Set_Input>;
  pk_columns: Exchange_Primary_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Secondary_CurrencyArgs = {
  _set?: InputMaybe<Exchange_Secondary_Currency_Set_Input>;
  where: Exchange_Secondary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Secondary_Currency_By_PkArgs = {
  _set?: InputMaybe<Exchange_Secondary_Currency_Set_Input>;
  pk_columns: Exchange_Secondary_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MarketArgs = {
  _set?: InputMaybe<Market_Set_Input>;
  where: Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Market_By_PkArgs = {
  _set?: InputMaybe<Market_Set_Input>;
  pk_columns: Market_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Market_PriceArgs = {
  _inc?: InputMaybe<Market_Price_Inc_Input>;
  _set?: InputMaybe<Market_Price_Set_Input>;
  where: Market_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Market_Price_By_PkArgs = {
  _inc?: InputMaybe<Market_Price_Inc_Input>;
  _set?: InputMaybe<Market_Price_Set_Input>;
  pk_columns: Market_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Market_Trading_PairArgs = {
  _set?: InputMaybe<Market_Trading_Pair_Set_Input>;
  where: Market_Trading_Pair_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_CustomerArgs = {
  _set?: InputMaybe<Stripe_Customer_Set_Input>;
  where: Stripe_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_Customer_By_PkArgs = {
  _set?: InputMaybe<Stripe_Customer_Set_Input>;
  pk_columns: Stripe_Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_PriceArgs = {
  _inc?: InputMaybe<Stripe_Price_Inc_Input>;
  _set?: InputMaybe<Stripe_Price_Set_Input>;
  where: Stripe_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_Price_By_PkArgs = {
  _inc?: InputMaybe<Stripe_Price_Inc_Input>;
  _set?: InputMaybe<Stripe_Price_Set_Input>;
  pk_columns: Stripe_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_ProductArgs = {
  _set?: InputMaybe<Stripe_Product_Set_Input>;
  where: Stripe_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_Product_By_PkArgs = {
  _set?: InputMaybe<Stripe_Product_Set_Input>;
  pk_columns: Stripe_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_SubscriptionArgs = {
  _inc?: InputMaybe<Stripe_Subscription_Inc_Input>;
  _set?: InputMaybe<Stripe_Subscription_Set_Input>;
  where: Stripe_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stripe_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Stripe_Subscription_Inc_Input>;
  _set?: InputMaybe<Stripe_Subscription_Set_Input>;
  pk_columns: Stripe_Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TradeArgs = {
  _inc?: InputMaybe<Trade_Inc_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_By_PkArgs = {
  _inc?: InputMaybe<Trade_Inc_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  pk_columns: Trade_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Trade_Avg_Price_By_WindowArgs = {
  _inc?: InputMaybe<Type_Trade_Avg_Price_By_Window_Inc_Input>;
  _set?: InputMaybe<Type_Trade_Avg_Price_By_Window_Set_Input>;
  where: Type_Trade_Avg_Price_By_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Type_Trade_Sum_By_WindowArgs = {
  _inc?: InputMaybe<Type_Trade_Sum_By_Window_Inc_Input>;
  _set?: InputMaybe<Type_Trade_Sum_By_Window_Set_Input>;
  where: Type_Trade_Sum_By_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_2faArgs = {
  _inc?: InputMaybe<User_2fa_Inc_Input>;
  _set?: InputMaybe<User_2fa_Set_Input>;
  where: User_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_2fa_By_PkArgs = {
  _inc?: InputMaybe<User_2fa_Inc_Input>;
  _set?: InputMaybe<User_2fa_Set_Input>;
  pk_columns: User_2fa_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_DeviceArgs = {
  _set?: InputMaybe<User_Device_Set_Input>;
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Device_By_PkArgs = {
  _set?: InputMaybe<User_Device_Set_Input>;
  pk_columns: User_Device_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Email_VerifyArgs = {
  _set?: InputMaybe<User_Email_Verify_Set_Input>;
  where: User_Email_Verify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Email_Verify_By_PkArgs = {
  _set?: InputMaybe<User_Email_Verify_Set_Input>;
  pk_columns: User_Email_Verify_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Exchange_KeysArgs = {
  _inc?: InputMaybe<User_Exchange_Keys_Inc_Input>;
  _set?: InputMaybe<User_Exchange_Keys_Set_Input>;
  where: User_Exchange_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Exchange_Keys_By_PkArgs = {
  _inc?: InputMaybe<User_Exchange_Keys_Inc_Input>;
  _set?: InputMaybe<User_Exchange_Keys_Set_Input>;
  pk_columns: User_Exchange_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Password_ResetArgs = {
  _set?: InputMaybe<User_Password_Reset_Set_Input>;
  where: User_Password_Reset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Password_Reset_By_PkArgs = {
  _set?: InputMaybe<User_Password_Reset_Set_Input>;
  pk_columns: User_Password_Reset_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  opened_at: Scalars['timestamptz'];
  order_id: Scalars['String'];
  price: Scalars['numeric'];
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  volume: Scalars['numeric'];
};


/** columns and relationships of "order" */
export type OrderDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  opened_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "uid" */
  OrderPkey = 'order_pkey',
  /** unique or primary key constraint on columns "order_id", "exchange_uid" */
  UniqueExchangeOrderId = 'unique_exchange_order_id'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Arr_Rel_Insert_Input>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  order_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  OpenedAt = 'opened_at',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  order_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  OpenedAt = 'opened_at',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Price_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** Query information about a Stripe Subscription (direct from Stripe) */
  action_query_live_stripe_subscription: QueryLiveStripeSubscriptionOutput;
  action_query_stripe_config: QueryStripeConfigOutput;
  action_query_user_email?: Maybe<QueryUserEmailOutput>;
  action_query_user_limit?: Maybe<QueryUserLimitOutput>;
  action_setup_user_2fa?: Maybe<SetupUser2FaOutput>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balance_aggregate: Balance_Aggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dca_order: Array<Dca_Order>;
  /** fetch aggregated fields from the table: "dca_order" */
  dca_order_aggregate: Dca_Order_Aggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dca_order_by_pk?: Maybe<Dca_Order>;
  /** fetch data from the table: "dca_order_history" */
  dca_order_history: Array<Dca_Order_History>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dca_order_history_aggregate: Dca_Order_History_Aggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch aggregated fields from the table: "exchange" */
  exchange_aggregate: Exchange_Aggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchange_primary_currency: Array<Exchange_Primary_Currency>;
  /** fetch aggregated fields from the table: "exchange_primary_currency" */
  exchange_primary_currency_aggregate: Exchange_Primary_Currency_Aggregate;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchange_secondary_currency: Array<Exchange_Secondary_Currency>;
  /** fetch aggregated fields from the table: "exchange_secondary_currency" */
  exchange_secondary_currency_aggregate: Exchange_Secondary_Currency_Aggregate;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  market_aggregate: Market_Aggregate;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  market_price: Array<Market_Price>;
  /** fetch aggregated fields from the table: "market_price" */
  market_price_aggregate: Market_Price_Aggregate;
  /** fetch data from the table: "market_price" using primary key columns */
  market_price_by_pk?: Maybe<Market_Price>;
  /** execute function "market_price_latest" which returns "market_price" */
  market_price_latest: Array<Market_Price>;
  /** execute function "market_price_latest" and query aggregates on result of table type "market_price" */
  market_price_latest_aggregate: Market_Price_Aggregate;
  /** fetch data from the table: "market_trading_pair" */
  market_trading_pair: Array<Market_Trading_Pair>;
  /** fetch aggregated fields from the table: "market_trading_pair" */
  market_trading_pair_aggregate: Market_Trading_Pair_Aggregate;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "stripe_customer" */
  stripe_customer: Array<Stripe_Customer>;
  /** fetch aggregated fields from the table: "stripe_customer" */
  stripe_customer_aggregate: Stripe_Customer_Aggregate;
  /** fetch data from the table: "stripe_customer" using primary key columns */
  stripe_customer_by_pk?: Maybe<Stripe_Customer>;
  /** fetch data from the table: "stripe_price" */
  stripe_price: Array<Stripe_Price>;
  /** fetch aggregated fields from the table: "stripe_price" */
  stripe_price_aggregate: Stripe_Price_Aggregate;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** fetch data from the table: "stripe_product" */
  stripe_product: Array<Stripe_Product>;
  /** fetch aggregated fields from the table: "stripe_product" */
  stripe_product_aggregate: Stripe_Product_Aggregate;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** fetch data from the table: "stripe_subscription" */
  stripe_subscription: Array<Stripe_Subscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripe_subscription_aggregate: Stripe_Subscription_Aggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** execute function "trade_avg_price_by_window" and query aggregates on result of table type "type_trade_avg_price_by_window" */
  trade_avg_price_by_window_aggregate: Type_Trade_Avg_Price_By_Window_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** execute function "trade_sum_by_window" and query aggregates on result of table type "type_trade_sum_by_window" */
  trade_sum_by_window_aggregate: Type_Trade_Sum_By_Window_Aggregate;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch aggregated fields from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window_aggregate: Type_Trade_Avg_Price_By_Window_Aggregate;
  /** fetch data from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch aggregated fields from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window_aggregate: Type_Trade_Sum_By_Window_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user_2fa: Array<User_2fa>;
  /** fetch aggregated fields from the table: "user_2fa" */
  user_2fa_aggregate: User_2fa_Aggregate;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user_2fa_by_pk?: Maybe<User_2fa>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
  /** fetch data from the table: "user_email_verify" */
  user_email_verify: Array<User_Email_Verify>;
  /** fetch aggregated fields from the table: "user_email_verify" */
  user_email_verify_aggregate: User_Email_Verify_Aggregate;
  /** fetch data from the table: "user_email_verify" using primary key columns */
  user_email_verify_by_pk?: Maybe<User_Email_Verify>;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
  /** fetch data from the table: "user_password_reset" */
  user_password_reset: Array<User_Password_Reset>;
  /** fetch aggregated fields from the table: "user_password_reset" */
  user_password_reset_aggregate: User_Password_Reset_Aggregate;
  /** fetch data from the table: "user_password_reset" using primary key columns */
  user_password_reset_by_pk?: Maybe<User_Password_Reset>;
};


export type Query_RootAction_Query_Live_Stripe_SubscriptionArgs = {
  subscription_id: Scalars['String'];
};


export type Query_RootAction_Query_User_EmailArgs = {
  user_uid: Scalars['uuid'];
};


export type Query_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Query_RootDca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Query_RootDca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Query_RootDca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootDca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Query_RootDca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Query_RootDca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Query_RootExchange_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Query_RootExchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Primary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootExchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Secondary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootMarketArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Query_RootMarket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Query_RootMarket_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootMarket_PriceArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Query_RootMarket_Price_LatestArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Price_Latest_AggregateArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Query_RootMarket_Trading_Pair_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootStripe_CustomerArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Customer_Order_By>>;
  where?: InputMaybe<Stripe_Customer_Bool_Exp>;
};


export type Query_RootStripe_Customer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Customer_Order_By>>;
  where?: InputMaybe<Stripe_Customer_Bool_Exp>;
};


export type Query_RootStripe_Customer_By_PkArgs = {
  user_uid: Scalars['uuid'];
};


export type Query_RootStripe_PriceArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Query_RootStripe_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Query_RootStripe_Price_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripe_ProductArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Query_RootStripe_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Query_RootStripe_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripe_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Query_RootStripe_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Query_RootStripe_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_Avg_Price_By_WindowArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootTrade_Avg_Price_By_Window_AggregateArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootTrade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootTrade_Sum_By_WindowArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootTrade_Sum_By_Window_AggregateArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Avg_Price_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Sum_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_2faArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Query_RootUser_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Query_RootUser_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_DeviceArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Query_RootUser_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Query_RootUser_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Array<User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Email_Verify_Order_By>>;
  where?: InputMaybe<User_Email_Verify_Bool_Exp>;
};


export type Query_RootUser_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Email_Verify_Order_By>>;
  where?: InputMaybe<User_Email_Verify_Bool_Exp>;
};


export type Query_RootUser_Email_Verify_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootUser_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_Password_ResetArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Password_Reset_Order_By>>;
  where?: InputMaybe<User_Password_Reset_Bool_Exp>;
};


export type Query_RootUser_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Password_Reset_Order_By>>;
  where?: InputMaybe<User_Password_Reset_Bool_Exp>;
};


export type Query_RootUser_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "stripe_customer" */
export type Stripe_Customer = {
  __typename?: 'stripe_customer';
  customer_id: Scalars['String'];
  /** An array relationship */
  stripe_subscriptions: Array<Stripe_Subscription>;
  /** An aggregate relationship */
  stripe_subscriptions_aggregate: Stripe_Subscription_Aggregate;
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "stripe_customer" */
export type Stripe_CustomerStripe_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


/** columns and relationships of "stripe_customer" */
export type Stripe_CustomerStripe_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};

/** aggregated selection of "stripe_customer" */
export type Stripe_Customer_Aggregate = {
  __typename?: 'stripe_customer_aggregate';
  aggregate?: Maybe<Stripe_Customer_Aggregate_Fields>;
  nodes: Array<Stripe_Customer>;
};

/** aggregate fields of "stripe_customer" */
export type Stripe_Customer_Aggregate_Fields = {
  __typename?: 'stripe_customer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stripe_Customer_Max_Fields>;
  min?: Maybe<Stripe_Customer_Min_Fields>;
};


/** aggregate fields of "stripe_customer" */
export type Stripe_Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stripe_Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_customer". All fields are combined with a logical 'AND'. */
export type Stripe_Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Customer_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Customer_Bool_Exp>>;
  customer_id?: InputMaybe<String_Comparison_Exp>;
  stripe_subscriptions?: InputMaybe<Stripe_Subscription_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_customer" */
export enum Stripe_Customer_Constraint {
  /** unique or primary key constraint on columns "user_uid" */
  CustomerPkey = 'customer_pkey',
  /** unique or primary key constraint on columns "customer_id" */
  UniqueCustomerId = 'unique_customer_id'
}

/** input type for inserting data into table "stripe_customer" */
export type Stripe_Customer_Insert_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  stripe_subscriptions?: InputMaybe<Stripe_Subscription_Arr_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stripe_Customer_Max_Fields = {
  __typename?: 'stripe_customer_max_fields';
  customer_id?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Stripe_Customer_Min_Fields = {
  __typename?: 'stripe_customer_min_fields';
  customer_id?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "stripe_customer" */
export type Stripe_Customer_Mutation_Response = {
  __typename?: 'stripe_customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stripe_Customer>;
};

/** input type for inserting object relation for remote table "stripe_customer" */
export type Stripe_Customer_Obj_Rel_Insert_Input = {
  data: Stripe_Customer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stripe_Customer_On_Conflict>;
};

/** on_conflict condition type for table "stripe_customer" */
export type Stripe_Customer_On_Conflict = {
  constraint: Stripe_Customer_Constraint;
  update_columns?: Array<Stripe_Customer_Update_Column>;
  where?: InputMaybe<Stripe_Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_customer". */
export type Stripe_Customer_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  stripe_subscriptions_aggregate?: InputMaybe<Stripe_Subscription_Aggregate_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_customer */
export type Stripe_Customer_Pk_Columns_Input = {
  user_uid: Scalars['uuid'];
};

/** select columns of table "stripe_customer" */
export enum Stripe_Customer_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "stripe_customer" */
export type Stripe_Customer_Set_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "stripe_customer" */
export enum Stripe_Customer_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  UserUid = 'user_uid'
}

/** columns and relationships of "stripe_price" */
export type Stripe_Price = {
  __typename?: 'stripe_price';
  active: Scalars['Boolean'];
  billing_scheme: Scalars['String'];
  created_at: Scalars['timestamptz'];
  currency: Scalars['bpchar'];
  id: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  product_id: Scalars['String'];
  recurring_aggregate_usage?: Maybe<Scalars['String']>;
  recurring_interval?: Maybe<Scalars['String']>;
  recurring_interval_count?: Maybe<Scalars['Int']>;
  recurring_usage_type?: Maybe<Scalars['String']>;
  /** An object relationship */
  stripe_product: Stripe_Product;
  /** An array relationship */
  stripe_subscriptions: Array<Stripe_Subscription>;
  /** An aggregate relationship */
  stripe_subscriptions_aggregate: Stripe_Subscription_Aggregate;
  type: Scalars['String'];
  unit_amount?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "stripe_price" */
export type Stripe_PriceStripe_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


/** columns and relationships of "stripe_price" */
export type Stripe_PriceStripe_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};

/** aggregated selection of "stripe_price" */
export type Stripe_Price_Aggregate = {
  __typename?: 'stripe_price_aggregate';
  aggregate?: Maybe<Stripe_Price_Aggregate_Fields>;
  nodes: Array<Stripe_Price>;
};

/** aggregate fields of "stripe_price" */
export type Stripe_Price_Aggregate_Fields = {
  __typename?: 'stripe_price_aggregate_fields';
  avg?: Maybe<Stripe_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stripe_Price_Max_Fields>;
  min?: Maybe<Stripe_Price_Min_Fields>;
  stddev?: Maybe<Stripe_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Stripe_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stripe_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Stripe_Price_Sum_Fields>;
  var_pop?: Maybe<Stripe_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Stripe_Price_Var_Samp_Fields>;
  variance?: Maybe<Stripe_Price_Variance_Fields>;
};


/** aggregate fields of "stripe_price" */
export type Stripe_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stripe_price" */
export type Stripe_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Stripe_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stripe_Price_Max_Order_By>;
  min?: InputMaybe<Stripe_Price_Min_Order_By>;
  stddev?: InputMaybe<Stripe_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stripe_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stripe_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stripe_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Stripe_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stripe_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Stripe_Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stripe_price" */
export type Stripe_Price_Arr_Rel_Insert_Input = {
  data: Array<Stripe_Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Stripe_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Stripe_Price_Avg_Fields = {
  __typename?: 'stripe_price_avg_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stripe_price" */
export type Stripe_Price_Avg_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stripe_price". All fields are combined with a logical 'AND'. */
export type Stripe_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Price_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Price_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  billing_scheme?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  recurring_aggregate_usage?: InputMaybe<String_Comparison_Exp>;
  recurring_interval?: InputMaybe<String_Comparison_Exp>;
  recurring_interval_count?: InputMaybe<Int_Comparison_Exp>;
  recurring_usage_type?: InputMaybe<String_Comparison_Exp>;
  stripe_product?: InputMaybe<Stripe_Product_Bool_Exp>;
  stripe_subscriptions?: InputMaybe<Stripe_Subscription_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  unit_amount?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_price" */
export enum Stripe_Price_Constraint {
  /** unique or primary key constraint on columns "id" */
  StripePricePkey = 'stripe_price_pkey'
}

/** input type for incrementing numeric columns in table "stripe_price" */
export type Stripe_Price_Inc_Input = {
  recurring_interval_count?: InputMaybe<Scalars['Int']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stripe_price" */
export type Stripe_Price_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  billing_scheme?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['bpchar']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['String']>;
  recurring_aggregate_usage?: InputMaybe<Scalars['String']>;
  recurring_interval?: InputMaybe<Scalars['String']>;
  recurring_interval_count?: InputMaybe<Scalars['Int']>;
  recurring_usage_type?: InputMaybe<Scalars['String']>;
  stripe_product?: InputMaybe<Stripe_Product_Obj_Rel_Insert_Input>;
  stripe_subscriptions?: InputMaybe<Stripe_Subscription_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Stripe_Price_Max_Fields = {
  __typename?: 'stripe_price_max_fields';
  billing_scheme?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  recurring_aggregate_usage?: Maybe<Scalars['String']>;
  recurring_interval?: Maybe<Scalars['String']>;
  recurring_interval_count?: Maybe<Scalars['Int']>;
  recurring_usage_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_amount?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stripe_price" */
export type Stripe_Price_Max_Order_By = {
  billing_scheme?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stripe_Price_Min_Fields = {
  __typename?: 'stripe_price_min_fields';
  billing_scheme?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  recurring_aggregate_usage?: Maybe<Scalars['String']>;
  recurring_interval?: Maybe<Scalars['String']>;
  recurring_interval_count?: Maybe<Scalars['Int']>;
  recurring_usage_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_amount?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stripe_price" */
export type Stripe_Price_Min_Order_By = {
  billing_scheme?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stripe_price" */
export type Stripe_Price_Mutation_Response = {
  __typename?: 'stripe_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stripe_Price>;
};

/** input type for inserting object relation for remote table "stripe_price" */
export type Stripe_Price_Obj_Rel_Insert_Input = {
  data: Stripe_Price_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stripe_Price_On_Conflict>;
};

/** on_conflict condition type for table "stripe_price" */
export type Stripe_Price_On_Conflict = {
  constraint: Stripe_Price_Constraint;
  update_columns?: Array<Stripe_Price_Update_Column>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_price". */
export type Stripe_Price_Order_By = {
  active?: InputMaybe<Order_By>;
  billing_scheme?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  stripe_product?: InputMaybe<Stripe_Product_Order_By>;
  stripe_subscriptions_aggregate?: InputMaybe<Stripe_Subscription_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_price */
export type Stripe_Price_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "stripe_price" */
export enum Stripe_Price_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billing_scheme',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  RecurringAggregateUsage = 'recurring_aggregate_usage',
  /** column name */
  RecurringInterval = 'recurring_interval',
  /** column name */
  RecurringIntervalCount = 'recurring_interval_count',
  /** column name */
  RecurringUsageType = 'recurring_usage_type',
  /** column name */
  Type = 'type',
  /** column name */
  UnitAmount = 'unit_amount',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "stripe_price" */
export type Stripe_Price_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  billing_scheme?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['bpchar']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['String']>;
  recurring_aggregate_usage?: InputMaybe<Scalars['String']>;
  recurring_interval?: InputMaybe<Scalars['String']>;
  recurring_interval_count?: InputMaybe<Scalars['Int']>;
  recurring_usage_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Stripe_Price_Stddev_Fields = {
  __typename?: 'stripe_price_stddev_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stripe_Price_Stddev_Pop_Fields = {
  __typename?: 'stripe_price_stddev_pop_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Pop_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stripe_Price_Stddev_Samp_Fields = {
  __typename?: 'stripe_price_stddev_samp_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Samp_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stripe_Price_Sum_Fields = {
  __typename?: 'stripe_price_sum_fields';
  recurring_interval_count?: Maybe<Scalars['Int']>;
  unit_amount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stripe_price" */
export type Stripe_Price_Sum_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** update columns of table "stripe_price" */
export enum Stripe_Price_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billing_scheme',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  RecurringAggregateUsage = 'recurring_aggregate_usage',
  /** column name */
  RecurringInterval = 'recurring_interval',
  /** column name */
  RecurringIntervalCount = 'recurring_interval_count',
  /** column name */
  RecurringUsageType = 'recurring_usage_type',
  /** column name */
  Type = 'type',
  /** column name */
  UnitAmount = 'unit_amount',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Stripe_Price_Var_Pop_Fields = {
  __typename?: 'stripe_price_var_pop_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stripe_price" */
export type Stripe_Price_Var_Pop_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stripe_Price_Var_Samp_Fields = {
  __typename?: 'stripe_price_var_samp_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stripe_price" */
export type Stripe_Price_Var_Samp_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stripe_Price_Variance_Fields = {
  __typename?: 'stripe_price_variance_fields';
  recurring_interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stripe_price" */
export type Stripe_Price_Variance_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "stripe_product" */
export type Stripe_Product = {
  __typename?: 'stripe_product';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  stripe_prices: Array<Stripe_Price>;
  /** An aggregate relationship */
  stripe_prices_aggregate: Stripe_Price_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "stripe_product" */
export type Stripe_ProductStripe_PricesArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


/** columns and relationships of "stripe_product" */
export type Stripe_ProductStripe_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};

/** aggregated selection of "stripe_product" */
export type Stripe_Product_Aggregate = {
  __typename?: 'stripe_product_aggregate';
  aggregate?: Maybe<Stripe_Product_Aggregate_Fields>;
  nodes: Array<Stripe_Product>;
};

/** aggregate fields of "stripe_product" */
export type Stripe_Product_Aggregate_Fields = {
  __typename?: 'stripe_product_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stripe_Product_Max_Fields>;
  min?: Maybe<Stripe_Product_Min_Fields>;
};


/** aggregate fields of "stripe_product" */
export type Stripe_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_product". All fields are combined with a logical 'AND'. */
export type Stripe_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Product_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Product_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  stripe_prices?: InputMaybe<Stripe_Price_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_product" */
export enum Stripe_Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  StripeProductPkey = 'stripe_product_pkey'
}

/** input type for inserting data into table "stripe_product" */
export type Stripe_Product_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stripe_prices?: InputMaybe<Stripe_Price_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Stripe_Product_Max_Fields = {
  __typename?: 'stripe_product_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Stripe_Product_Min_Fields = {
  __typename?: 'stripe_product_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "stripe_product" */
export type Stripe_Product_Mutation_Response = {
  __typename?: 'stripe_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stripe_Product>;
};

/** input type for inserting object relation for remote table "stripe_product" */
export type Stripe_Product_Obj_Rel_Insert_Input = {
  data: Stripe_Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stripe_Product_On_Conflict>;
};

/** on_conflict condition type for table "stripe_product" */
export type Stripe_Product_On_Conflict = {
  constraint: Stripe_Product_Constraint;
  update_columns?: Array<Stripe_Product_Update_Column>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_product". */
export type Stripe_Product_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_prices_aggregate?: InputMaybe<Stripe_Price_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_product */
export type Stripe_Product_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "stripe_product" */
export enum Stripe_Product_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "stripe_product" */
export type Stripe_Product_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "stripe_product" */
export enum Stripe_Product_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "stripe_subscription" */
export type Stripe_Subscription = {
  __typename?: 'stripe_subscription';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  cancel_at_period_end: Scalars['Boolean'];
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  current_period_end: Scalars['timestamptz'];
  current_period_start: Scalars['timestamptz'];
  customer_id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  price_id: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  stripe_customer: Stripe_Customer;
  /** An object relationship */
  stripe_price: Stripe_Price;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "stripe_subscription" */
export type Stripe_Subscription_Aggregate = {
  __typename?: 'stripe_subscription_aggregate';
  aggregate?: Maybe<Stripe_Subscription_Aggregate_Fields>;
  nodes: Array<Stripe_Subscription>;
};

/** aggregate fields of "stripe_subscription" */
export type Stripe_Subscription_Aggregate_Fields = {
  __typename?: 'stripe_subscription_aggregate_fields';
  avg?: Maybe<Stripe_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stripe_Subscription_Max_Fields>;
  min?: Maybe<Stripe_Subscription_Min_Fields>;
  stddev?: Maybe<Stripe_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Stripe_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stripe_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Stripe_Subscription_Sum_Fields>;
  var_pop?: Maybe<Stripe_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Stripe_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Stripe_Subscription_Variance_Fields>;
};


/** aggregate fields of "stripe_subscription" */
export type Stripe_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stripe_subscription" */
export type Stripe_Subscription_Aggregate_Order_By = {
  avg?: InputMaybe<Stripe_Subscription_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stripe_Subscription_Max_Order_By>;
  min?: InputMaybe<Stripe_Subscription_Min_Order_By>;
  stddev?: InputMaybe<Stripe_Subscription_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stripe_Subscription_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stripe_Subscription_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stripe_Subscription_Sum_Order_By>;
  var_pop?: InputMaybe<Stripe_Subscription_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stripe_Subscription_Var_Samp_Order_By>;
  variance?: InputMaybe<Stripe_Subscription_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stripe_subscription" */
export type Stripe_Subscription_Arr_Rel_Insert_Input = {
  data: Array<Stripe_Subscription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Stripe_Subscription_On_Conflict>;
};

/** aggregate avg on columns */
export type Stripe_Subscription_Avg_Fields = {
  __typename?: 'stripe_subscription_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stripe_subscription". All fields are combined with a logical 'AND'. */
export type Stripe_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Subscription_Bool_Exp>>;
  cancel_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cancel_at_period_end?: InputMaybe<Boolean_Comparison_Exp>;
  canceled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_period_end?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_period_start?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_id?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  stripe_customer?: InputMaybe<Stripe_Customer_Bool_Exp>;
  stripe_price?: InputMaybe<Stripe_Price_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_subscription" */
export enum Stripe_Subscription_Constraint {
  /** unique or primary key constraint on columns "id" */
  StripeSubscriptionPkey = 'stripe_subscription_pkey'
}

/** input type for incrementing numeric columns in table "stripe_subscription" */
export type Stripe_Subscription_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stripe_subscription" */
export type Stripe_Subscription_Insert_Input = {
  cancel_at?: InputMaybe<Scalars['timestamptz']>;
  cancel_at_period_end?: InputMaybe<Scalars['Boolean']>;
  canceled_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  current_period_end?: InputMaybe<Scalars['timestamptz']>;
  current_period_start?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  stripe_customer?: InputMaybe<Stripe_Customer_Obj_Rel_Insert_Input>;
  stripe_price?: InputMaybe<Stripe_Price_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Stripe_Subscription_Max_Fields = {
  __typename?: 'stripe_subscription_max_fields';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  current_period_end?: Maybe<Scalars['timestamptz']>;
  current_period_start?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  price_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Max_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stripe_Subscription_Min_Fields = {
  __typename?: 'stripe_subscription_min_fields';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  current_period_end?: Maybe<Scalars['timestamptz']>;
  current_period_start?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  price_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Min_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stripe_subscription" */
export type Stripe_Subscription_Mutation_Response = {
  __typename?: 'stripe_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stripe_Subscription>;
};

/** on_conflict condition type for table "stripe_subscription" */
export type Stripe_Subscription_On_Conflict = {
  constraint: Stripe_Subscription_Constraint;
  update_columns?: Array<Stripe_Subscription_Update_Column>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_subscription". */
export type Stripe_Subscription_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  cancel_at_period_end?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stripe_customer?: InputMaybe<Stripe_Customer_Order_By>;
  stripe_price?: InputMaybe<Stripe_Price_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_subscription */
export type Stripe_Subscription_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "stripe_subscription" */
export enum Stripe_Subscription_Select_Column {
  /** column name */
  CancelAt = 'cancel_at',
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "stripe_subscription" */
export type Stripe_Subscription_Set_Input = {
  cancel_at?: InputMaybe<Scalars['timestamptz']>;
  cancel_at_period_end?: InputMaybe<Scalars['Boolean']>;
  canceled_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  current_period_end?: InputMaybe<Scalars['timestamptz']>;
  current_period_start?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Stripe_Subscription_Stddev_Fields = {
  __typename?: 'stripe_subscription_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stripe_Subscription_Stddev_Pop_Fields = {
  __typename?: 'stripe_subscription_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stripe_Subscription_Stddev_Samp_Fields = {
  __typename?: 'stripe_subscription_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stripe_Subscription_Sum_Fields = {
  __typename?: 'stripe_subscription_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "stripe_subscription" */
export enum Stripe_Subscription_Update_Column {
  /** column name */
  CancelAt = 'cancel_at',
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Stripe_Subscription_Var_Pop_Fields = {
  __typename?: 'stripe_subscription_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stripe_Subscription_Var_Samp_Fields = {
  __typename?: 'stripe_subscription_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stripe_Subscription_Variance_Fields = {
  __typename?: 'stripe_subscription_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balance_aggregate: Balance_Aggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dca_order: Array<Dca_Order>;
  /** fetch aggregated fields from the table: "dca_order" */
  dca_order_aggregate: Dca_Order_Aggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dca_order_by_pk?: Maybe<Dca_Order>;
  /** fetch data from the table: "dca_order_history" */
  dca_order_history: Array<Dca_Order_History>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dca_order_history_aggregate: Dca_Order_History_Aggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch aggregated fields from the table: "exchange" */
  exchange_aggregate: Exchange_Aggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchange_primary_currency: Array<Exchange_Primary_Currency>;
  /** fetch aggregated fields from the table: "exchange_primary_currency" */
  exchange_primary_currency_aggregate: Exchange_Primary_Currency_Aggregate;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchange_secondary_currency: Array<Exchange_Secondary_Currency>;
  /** fetch aggregated fields from the table: "exchange_secondary_currency" */
  exchange_secondary_currency_aggregate: Exchange_Secondary_Currency_Aggregate;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  market_aggregate: Market_Aggregate;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  market_price: Array<Market_Price>;
  /** fetch aggregated fields from the table: "market_price" */
  market_price_aggregate: Market_Price_Aggregate;
  /** fetch data from the table: "market_price" using primary key columns */
  market_price_by_pk?: Maybe<Market_Price>;
  /** execute function "market_price_latest" which returns "market_price" */
  market_price_latest: Array<Market_Price>;
  /** execute function "market_price_latest" and query aggregates on result of table type "market_price" */
  market_price_latest_aggregate: Market_Price_Aggregate;
  /** fetch data from the table: "market_trading_pair" */
  market_trading_pair: Array<Market_Trading_Pair>;
  /** fetch aggregated fields from the table: "market_trading_pair" */
  market_trading_pair_aggregate: Market_Trading_Pair_Aggregate;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "stripe_customer" */
  stripe_customer: Array<Stripe_Customer>;
  /** fetch aggregated fields from the table: "stripe_customer" */
  stripe_customer_aggregate: Stripe_Customer_Aggregate;
  /** fetch data from the table: "stripe_customer" using primary key columns */
  stripe_customer_by_pk?: Maybe<Stripe_Customer>;
  /** fetch data from the table: "stripe_price" */
  stripe_price: Array<Stripe_Price>;
  /** fetch aggregated fields from the table: "stripe_price" */
  stripe_price_aggregate: Stripe_Price_Aggregate;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** fetch data from the table: "stripe_product" */
  stripe_product: Array<Stripe_Product>;
  /** fetch aggregated fields from the table: "stripe_product" */
  stripe_product_aggregate: Stripe_Product_Aggregate;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** fetch data from the table: "stripe_subscription" */
  stripe_subscription: Array<Stripe_Subscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripe_subscription_aggregate: Stripe_Subscription_Aggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** execute function "trade_avg_price_by_window" and query aggregates on result of table type "type_trade_avg_price_by_window" */
  trade_avg_price_by_window_aggregate: Type_Trade_Avg_Price_By_Window_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** execute function "trade_sum_by_window" and query aggregates on result of table type "type_trade_sum_by_window" */
  trade_sum_by_window_aggregate: Type_Trade_Sum_By_Window_Aggregate;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch aggregated fields from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window_aggregate: Type_Trade_Avg_Price_By_Window_Aggregate;
  /** fetch data from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch aggregated fields from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window_aggregate: Type_Trade_Sum_By_Window_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user_2fa: Array<User_2fa>;
  /** fetch aggregated fields from the table: "user_2fa" */
  user_2fa_aggregate: User_2fa_Aggregate;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user_2fa_by_pk?: Maybe<User_2fa>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
  /** fetch data from the table: "user_email_verify" */
  user_email_verify: Array<User_Email_Verify>;
  /** fetch aggregated fields from the table: "user_email_verify" */
  user_email_verify_aggregate: User_Email_Verify_Aggregate;
  /** fetch data from the table: "user_email_verify" using primary key columns */
  user_email_verify_by_pk?: Maybe<User_Email_Verify>;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
  /** fetch data from the table: "user_password_reset" */
  user_password_reset: Array<User_Password_Reset>;
  /** fetch aggregated fields from the table: "user_password_reset" */
  user_password_reset_aggregate: User_Password_Reset_Aggregate;
  /** fetch data from the table: "user_password_reset" using primary key columns */
  user_password_reset_by_pk?: Maybe<User_Password_Reset>;
};


export type Subscription_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Subscription_RootDca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Subscription_RootDca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Subscription_RootDca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootDca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootDca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootDca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Primary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootExchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Secondary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootMarketArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Subscription_RootMarket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Subscription_RootMarket_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootMarket_PriceArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Subscription_RootMarket_Price_LatestArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Price_Latest_AggregateArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Subscription_RootMarket_Trading_Pair_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootStripe_CustomerArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Customer_Order_By>>;
  where?: InputMaybe<Stripe_Customer_Bool_Exp>;
};


export type Subscription_RootStripe_Customer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Customer_Order_By>>;
  where?: InputMaybe<Stripe_Customer_Bool_Exp>;
};


export type Subscription_RootStripe_Customer_By_PkArgs = {
  user_uid: Scalars['uuid'];
};


export type Subscription_RootStripe_PriceArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Subscription_RootStripe_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Subscription_RootStripe_Price_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripe_ProductArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Subscription_RootStripe_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Subscription_RootStripe_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripe_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Subscription_RootStripe_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Subscription_RootStripe_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_Avg_Price_By_WindowArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootTrade_Avg_Price_By_Window_AggregateArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootTrade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootTrade_Sum_By_WindowArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootTrade_Sum_By_Window_AggregateArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Avg_Price_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Sum_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_2faArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Subscription_RootUser_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Subscription_RootUser_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_DeviceArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Subscription_RootUser_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Subscription_RootUser_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Array<User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Email_Verify_Order_By>>;
  where?: InputMaybe<User_Email_Verify_Bool_Exp>;
};


export type Subscription_RootUser_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Email_Verify_Order_By>>;
  where?: InputMaybe<User_Email_Verify_Bool_Exp>;
};


export type Subscription_RootUser_Email_Verify_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_Password_ResetArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Password_Reset_Order_By>>;
  where?: InputMaybe<User_Password_Reset_Bool_Exp>;
};


export type Subscription_RootUser_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Password_Reset_Order_By>>;
  where?: InputMaybe<User_Password_Reset_Bool_Exp>;
};


export type Subscription_RootUser_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Total_Balance_Fx_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

export type Total_Value_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'trade';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  fee: Scalars['numeric'];
  /** A computed field, executes function "trade_fee_fx" */
  fee_fx?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  order?: Maybe<Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  /** A computed field, executes function "trade_price_fx" */
  price_fx?: Maybe<Scalars['numeric']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  total_value: Scalars['numeric'];
  /** A computed field, executes function "trade_total_value_fx" */
  total_value_fx?: Maybe<Scalars['numeric']>;
  trade_id: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  /** A computed field, executes function "trade_value_fx" */
  value_fx?: Maybe<Scalars['numeric']>;
  volume: Scalars['numeric'];
};


/** columns and relationships of "trade" */
export type TradeFee_FxArgs = {
  args: Fee_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradePrice_FxArgs = {
  args: Price_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradeTotal_Value_FxArgs = {
  args: Total_Value_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradeValue_FxArgs = {
  args: Value_Fx_Trade_Args;
};

/** aggregated selection of "trade" */
export type Trade_Aggregate = {
  __typename?: 'trade_aggregate';
  aggregate?: Maybe<Trade_Aggregate_Fields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type Trade_Aggregate_Fields = {
  __typename?: 'trade_aggregate_fields';
  avg?: Maybe<Trade_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trade_Max_Fields>;
  min?: Maybe<Trade_Min_Fields>;
  stddev?: Maybe<Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Sum_Fields>;
  var_pop?: Maybe<Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Var_Samp_Fields>;
  variance?: Maybe<Trade_Variance_Fields>;
};


/** aggregate fields of "trade" */
export type Trade_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade" */
export type Trade_Aggregate_Order_By = {
  avg?: InputMaybe<Trade_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trade_Max_Order_By>;
  min?: InputMaybe<Trade_Min_Order_By>;
  stddev?: InputMaybe<Trade_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trade_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trade_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trade_Sum_Order_By>;
  var_pop?: InputMaybe<Trade_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trade_Var_Samp_Order_By>;
  variance?: InputMaybe<Trade_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trade" */
export type Trade_Arr_Rel_Insert_Input = {
  data: Array<Trade_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};

/** aggregate avg on columns */
export type Trade_Avg_Fields = {
  __typename?: 'trade_avg_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade" */
export type Trade_Avg_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Trade_Avg_Price_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type Trade_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_Bool_Exp>>;
  _not?: InputMaybe<Trade_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  trade_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "trade" */
export enum Trade_Constraint {
  /** unique or primary key constraint on columns "uid" */
  TradePkey = 'trade_pkey',
  /** unique or primary key constraint on columns "user_uid", "trade_id", "exchange_uid" */
  UniqueTradeExchangeTradeIdUserUid = 'unique_trade_exchange_trade_id_user_uid'
}

/** input type for incrementing numeric columns in table "trade" */
export type Trade_Inc_Input = {
  fee?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "trade" */
export type Trade_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Trade_Max_Fields = {
  __typename?: 'trade_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "trade" */
export type Trade_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Min_Fields = {
  __typename?: 'trade_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "trade" */
export type Trade_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trade" */
export type Trade_Mutation_Response = {
  __typename?: 'trade_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trade>;
};

/** on_conflict condition type for table "trade" */
export type Trade_On_Conflict = {
  constraint: Trade_Constraint;
  update_columns?: Array<Trade_Update_Column>;
  where?: InputMaybe<Trade_Bool_Exp>;
};

/** Ordering options when selecting data from "trade". */
export type Trade_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trade */
export type Trade_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "trade" */
export enum Trade_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Fee = 'fee',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "trade" */
export type Trade_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Trade_Stddev_Fields = {
  __typename?: 'trade_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade" */
export type Trade_Stddev_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Stddev_Pop_Fields = {
  __typename?: 'trade_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade" */
export type Trade_Stddev_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Stddev_Samp_Fields = {
  __typename?: 'trade_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade" */
export type Trade_Stddev_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Trade_Sum_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Trade_Sum_Fields = {
  __typename?: 'trade_sum_fields';
  fee?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "trade" */
export type Trade_Sum_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** update columns of table "trade" */
export enum Trade_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Fee = 'fee',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate var_pop on columns */
export type Trade_Var_Pop_Fields = {
  __typename?: 'trade_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade" */
export type Trade_Var_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Var_Samp_Fields = {
  __typename?: 'trade_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade" */
export type Trade_Var_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Variance_Fields = {
  __typename?: 'trade_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade" */
export type Trade_Variance_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** columns and relationships of "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window = {
  __typename?: 'type_trade_avg_price_by_window';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

export type Type_Trade_Avg_Price_By_Window_Aggregate = {
  __typename?: 'type_trade_avg_price_by_window_aggregate';
  aggregate?: Maybe<Type_Trade_Avg_Price_By_Window_Aggregate_Fields>;
  nodes: Array<Type_Trade_Avg_Price_By_Window>;
};

/** aggregate fields of "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Aggregate_Fields = {
  __typename?: 'type_trade_avg_price_by_window_aggregate_fields';
  avg?: Maybe<Type_Trade_Avg_Price_By_Window_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Type_Trade_Avg_Price_By_Window_Max_Fields>;
  min?: Maybe<Type_Trade_Avg_Price_By_Window_Min_Fields>;
  stddev?: Maybe<Type_Trade_Avg_Price_By_Window_Stddev_Fields>;
  stddev_pop?: Maybe<Type_Trade_Avg_Price_By_Window_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Type_Trade_Avg_Price_By_Window_Stddev_Samp_Fields>;
  sum?: Maybe<Type_Trade_Avg_Price_By_Window_Sum_Fields>;
  var_pop?: Maybe<Type_Trade_Avg_Price_By_Window_Var_Pop_Fields>;
  var_samp?: Maybe<Type_Trade_Avg_Price_By_Window_Var_Samp_Fields>;
  variance?: Maybe<Type_Trade_Avg_Price_By_Window_Variance_Fields>;
};


/** aggregate fields of "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Type_Trade_Avg_Price_By_Window_Avg_Fields = {
  __typename?: 'type_trade_avg_price_by_window_avg_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "type_trade_avg_price_by_window". All fields are combined with a logical 'AND'. */
export type Type_Trade_Avg_Price_By_Window_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Bool_Exp>>;
  _not?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Bool_Exp>>;
  avg_price?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Inc_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Insert_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Type_Trade_Avg_Price_By_Window_Max_Fields = {
  __typename?: 'type_trade_avg_price_by_window_max_fields';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Type_Trade_Avg_Price_By_Window_Min_Fields = {
  __typename?: 'type_trade_avg_price_by_window_min_fields';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Mutation_Response = {
  __typename?: 'type_trade_avg_price_by_window_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Trade_Avg_Price_By_Window>;
};

/** Ordering options when selecting data from "type_trade_avg_price_by_window". */
export type Type_Trade_Avg_Price_By_Window_Order_By = {
  avg_price?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "type_trade_avg_price_by_window" */
export enum Type_Trade_Avg_Price_By_Window_Select_Column {
  /** column name */
  AvgPrice = 'avg_price',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window_Set_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Type_Trade_Avg_Price_By_Window_Stddev_Fields = {
  __typename?: 'type_trade_avg_price_by_window_stddev_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Type_Trade_Avg_Price_By_Window_Stddev_Pop_Fields = {
  __typename?: 'type_trade_avg_price_by_window_stddev_pop_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Type_Trade_Avg_Price_By_Window_Stddev_Samp_Fields = {
  __typename?: 'type_trade_avg_price_by_window_stddev_samp_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Type_Trade_Avg_Price_By_Window_Sum_Fields = {
  __typename?: 'type_trade_avg_price_by_window_sum_fields';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Type_Trade_Avg_Price_By_Window_Var_Pop_Fields = {
  __typename?: 'type_trade_avg_price_by_window_var_pop_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Type_Trade_Avg_Price_By_Window_Var_Samp_Fields = {
  __typename?: 'type_trade_avg_price_by_window_var_samp_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Type_Trade_Avg_Price_By_Window_Variance_Fields = {
  __typename?: 'type_trade_avg_price_by_window_variance_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window = {
  __typename?: 'type_trade_sum_by_window';
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

export type Type_Trade_Sum_By_Window_Aggregate = {
  __typename?: 'type_trade_sum_by_window_aggregate';
  aggregate?: Maybe<Type_Trade_Sum_By_Window_Aggregate_Fields>;
  nodes: Array<Type_Trade_Sum_By_Window>;
};

/** aggregate fields of "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Aggregate_Fields = {
  __typename?: 'type_trade_sum_by_window_aggregate_fields';
  avg?: Maybe<Type_Trade_Sum_By_Window_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Type_Trade_Sum_By_Window_Max_Fields>;
  min?: Maybe<Type_Trade_Sum_By_Window_Min_Fields>;
  stddev?: Maybe<Type_Trade_Sum_By_Window_Stddev_Fields>;
  stddev_pop?: Maybe<Type_Trade_Sum_By_Window_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Type_Trade_Sum_By_Window_Stddev_Samp_Fields>;
  sum?: Maybe<Type_Trade_Sum_By_Window_Sum_Fields>;
  var_pop?: Maybe<Type_Trade_Sum_By_Window_Var_Pop_Fields>;
  var_samp?: Maybe<Type_Trade_Sum_By_Window_Var_Samp_Fields>;
  variance?: Maybe<Type_Trade_Sum_By_Window_Variance_Fields>;
};


/** aggregate fields of "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Type_Trade_Sum_By_Window_Avg_Fields = {
  __typename?: 'type_trade_sum_by_window_avg_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "type_trade_sum_by_window". All fields are combined with a logical 'AND'. */
export type Type_Trade_Sum_By_Window_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Trade_Sum_By_Window_Bool_Exp>>;
  _not?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Trade_Sum_By_Window_Bool_Exp>>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Inc_Input = {
  total_value?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Insert_Input = {
  primary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Type_Trade_Sum_By_Window_Max_Fields = {
  __typename?: 'type_trade_sum_by_window_max_fields';
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Type_Trade_Sum_By_Window_Min_Fields = {
  __typename?: 'type_trade_sum_by_window_min_fields';
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Mutation_Response = {
  __typename?: 'type_trade_sum_by_window_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Trade_Sum_By_Window>;
};

/** Ordering options when selecting data from "type_trade_sum_by_window". */
export type Type_Trade_Sum_By_Window_Order_By = {
  primary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "type_trade_sum_by_window" */
export enum Type_Trade_Sum_By_Window_Select_Column {
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window_Set_Input = {
  primary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Type_Trade_Sum_By_Window_Stddev_Fields = {
  __typename?: 'type_trade_sum_by_window_stddev_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Type_Trade_Sum_By_Window_Stddev_Pop_Fields = {
  __typename?: 'type_trade_sum_by_window_stddev_pop_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Type_Trade_Sum_By_Window_Stddev_Samp_Fields = {
  __typename?: 'type_trade_sum_by_window_stddev_samp_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Type_Trade_Sum_By_Window_Sum_Fields = {
  __typename?: 'type_trade_sum_by_window_sum_fields';
  total_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Type_Trade_Sum_By_Window_Var_Pop_Fields = {
  __typename?: 'type_trade_sum_by_window_var_pop_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Type_Trade_Sum_By_Window_Var_Samp_Fields = {
  __typename?: 'type_trade_sum_by_window_var_samp_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Type_Trade_Sum_By_Window_Variance_Fields = {
  __typename?: 'type_trade_sum_by_window_variance_fields';
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  email_encrypted: Scalars['String'];
  email_hash: Scalars['String'];
  email_keyring_id: Scalars['smallint'];
  email_verified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  password_hash: Scalars['String'];
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_2fa?: Maybe<User_2fa>;
  /** An array relationship */
  user_devices: Array<User_Device>;
  /** An aggregate relationship */
  user_devices_aggregate: User_Device_Aggregate;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "user" */
export type UserDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_DevicesArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** columns and relationships of "user_2fa" */
export type User_2fa = {
  __typename?: 'user_2fa';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  secret_encrypted: Scalars['String'];
  secret_keyring_id: Scalars['smallint'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "user_2fa" */
export type User_2fa_Aggregate = {
  __typename?: 'user_2fa_aggregate';
  aggregate?: Maybe<User_2fa_Aggregate_Fields>;
  nodes: Array<User_2fa>;
};

/** aggregate fields of "user_2fa" */
export type User_2fa_Aggregate_Fields = {
  __typename?: 'user_2fa_aggregate_fields';
  avg?: Maybe<User_2fa_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_2fa_Max_Fields>;
  min?: Maybe<User_2fa_Min_Fields>;
  stddev?: Maybe<User_2fa_Stddev_Fields>;
  stddev_pop?: Maybe<User_2fa_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_2fa_Stddev_Samp_Fields>;
  sum?: Maybe<User_2fa_Sum_Fields>;
  var_pop?: Maybe<User_2fa_Var_Pop_Fields>;
  var_samp?: Maybe<User_2fa_Var_Samp_Fields>;
  variance?: Maybe<User_2fa_Variance_Fields>;
};


/** aggregate fields of "user_2fa" */
export type User_2fa_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_2fa_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_2fa_Avg_Fields = {
  __typename?: 'user_2fa_avg_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_2fa". All fields are combined with a logical 'AND'. */
export type User_2fa_Bool_Exp = {
  _and?: InputMaybe<Array<User_2fa_Bool_Exp>>;
  _not?: InputMaybe<User_2fa_Bool_Exp>;
  _or?: InputMaybe<Array<User_2fa_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  secret_encrypted?: InputMaybe<String_Comparison_Exp>;
  secret_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_2fa" */
export enum User_2fa_Constraint {
  /** unique or primary key constraint on columns "user_uid" */
  UniqueUser_2faUserUid = 'unique_user_2fa_user_uid',
  /** unique or primary key constraint on columns "uid" */
  User_2faPkey = 'user_2fa_pkey'
}

/** input type for incrementing numeric columns in table "user_2fa" */
export type User_2fa_Inc_Input = {
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user_2fa" */
export type User_2fa_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secret_encrypted?: InputMaybe<Scalars['String']>;
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_2fa_Max_Fields = {
  __typename?: 'user_2fa_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secret_encrypted?: Maybe<Scalars['String']>;
  secret_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_2fa_Min_Fields = {
  __typename?: 'user_2fa_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secret_encrypted?: Maybe<Scalars['String']>;
  secret_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_2fa" */
export type User_2fa_Mutation_Response = {
  __typename?: 'user_2fa_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_2fa>;
};

/** input type for inserting object relation for remote table "user_2fa" */
export type User_2fa_Obj_Rel_Insert_Input = {
  data: User_2fa_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_2fa_On_Conflict>;
};

/** on_conflict condition type for table "user_2fa" */
export type User_2fa_On_Conflict = {
  constraint: User_2fa_Constraint;
  update_columns?: Array<User_2fa_Update_Column>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};

/** Ordering options when selecting data from "user_2fa". */
export type User_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  secret_encrypted?: InputMaybe<Order_By>;
  secret_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_2fa */
export type User_2fa_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_2fa" */
export enum User_2fa_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secret_encrypted',
  /** column name */
  SecretKeyringId = 'secret_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_2fa" */
export type User_2fa_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secret_encrypted?: InputMaybe<Scalars['String']>;
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_2fa_Stddev_Fields = {
  __typename?: 'user_2fa_stddev_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_2fa_Stddev_Pop_Fields = {
  __typename?: 'user_2fa_stddev_pop_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_2fa_Stddev_Samp_Fields = {
  __typename?: 'user_2fa_stddev_samp_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_2fa_Sum_Fields = {
  __typename?: 'user_2fa_sum_fields';
  secret_keyring_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "user_2fa" */
export enum User_2fa_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secret_encrypted',
  /** column name */
  SecretKeyringId = 'secret_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** aggregate var_pop on columns */
export type User_2fa_Var_Pop_Fields = {
  __typename?: 'user_2fa_var_pop_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_2fa_Var_Samp_Fields = {
  __typename?: 'user_2fa_var_samp_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_2fa_Variance_Fields = {
  __typename?: 'user_2fa_variance_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  email_encrypted?: InputMaybe<String_Comparison_Exp>;
  email_hash?: InputMaybe<String_Comparison_Exp>;
  email_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_2fa?: InputMaybe<User_2fa_Bool_Exp>;
  user_devices?: InputMaybe<User_Device_Bool_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email_hash" */
  UniqueUserEmailHash = 'unique_user_email_hash',
  /** unique or primary key constraint on columns "uid" */
  UserPkey = 'user_pkey'
}

/** columns and relationships of "user_device" */
export type User_Device = {
  __typename?: 'user_device';
  accessed_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  device_id_hash: Scalars['String'];
  name: Scalars['String'];
  trusted: Scalars['Boolean'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "user_device" */
export type User_Device_Aggregate = {
  __typename?: 'user_device_aggregate';
  aggregate?: Maybe<User_Device_Aggregate_Fields>;
  nodes: Array<User_Device>;
};

/** aggregate fields of "user_device" */
export type User_Device_Aggregate_Fields = {
  __typename?: 'user_device_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Device_Max_Fields>;
  min?: Maybe<User_Device_Min_Fields>;
};


/** aggregate fields of "user_device" */
export type User_Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_device" */
export type User_Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Device_Max_Order_By>;
  min?: InputMaybe<User_Device_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_device" */
export type User_Device_Arr_Rel_Insert_Input = {
  data: Array<User_Device_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Device_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type User_Device_Bool_Exp = {
  _and?: InputMaybe<Array<User_Device_Bool_Exp>>;
  _not?: InputMaybe<User_Device_Bool_Exp>;
  _or?: InputMaybe<Array<User_Device_Bool_Exp>>;
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_id_hash?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  trusted?: InputMaybe<Boolean_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_device" */
export enum User_Device_Constraint {
  /** unique or primary key constraint on columns "user_uid", "device_id_hash" */
  UniqueUserDeviceUserUidDeviceIdHash = 'unique_user_device_user_uid_device_id_hash',
  /** unique or primary key constraint on columns "uid" */
  UserDevicePkey = 'user_device_pkey'
}

/** input type for inserting data into table "user_device" */
export type User_Device_Insert_Input = {
  accessed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id_hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Device_Max_Fields = {
  __typename?: 'user_device_max_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id_hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_device" */
export type User_Device_Max_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Device_Min_Fields = {
  __typename?: 'user_device_min_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id_hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_device" */
export type User_Device_Min_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_device" */
export type User_Device_Mutation_Response = {
  __typename?: 'user_device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Device>;
};

/** on_conflict condition type for table "user_device" */
export type User_Device_On_Conflict = {
  constraint: User_Device_Constraint;
  update_columns?: Array<User_Device_Update_Column>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};

/** Ordering options when selecting data from "user_device". */
export type User_Device_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  trusted?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_device */
export type User_Device_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_device" */
export enum User_Device_Select_Column {
  /** column name */
  AccessedAt = 'accessed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceIdHash = 'device_id_hash',
  /** column name */
  Name = 'name',
  /** column name */
  Trusted = 'trusted',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_device" */
export type User_Device_Set_Input = {
  accessed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id_hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_device" */
export enum User_Device_Update_Column {
  /** column name */
  AccessedAt = 'accessed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceIdHash = 'device_id_hash',
  /** column name */
  Name = 'name',
  /** column name */
  Trusted = 'trusted',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** columns and relationships of "user_email_verify" */
export type User_Email_Verify = {
  __typename?: 'user_email_verify';
  created_at: Scalars['timestamptz'];
  secret_hash: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "user_email_verify" */
export type User_Email_Verify_Aggregate = {
  __typename?: 'user_email_verify_aggregate';
  aggregate?: Maybe<User_Email_Verify_Aggregate_Fields>;
  nodes: Array<User_Email_Verify>;
};

/** aggregate fields of "user_email_verify" */
export type User_Email_Verify_Aggregate_Fields = {
  __typename?: 'user_email_verify_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Email_Verify_Max_Fields>;
  min?: Maybe<User_Email_Verify_Min_Fields>;
};


/** aggregate fields of "user_email_verify" */
export type User_Email_Verify_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Email_Verify_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_email_verify". All fields are combined with a logical 'AND'. */
export type User_Email_Verify_Bool_Exp = {
  _and?: InputMaybe<Array<User_Email_Verify_Bool_Exp>>;
  _not?: InputMaybe<User_Email_Verify_Bool_Exp>;
  _or?: InputMaybe<Array<User_Email_Verify_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  secret_hash?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_email_verify" */
export enum User_Email_Verify_Constraint {
  /** unique or primary key constraint on columns "secret_hash" */
  UniqueUserEmailVerifySecretHash = 'unique_user_email_verify_secret_hash',
  /** unique or primary key constraint on columns "user_uid" */
  UniqueUserEmailVerifyUserUid = 'unique_user_email_verify_user_uid',
  /** unique or primary key constraint on columns "uid" */
  UserEmailVerifyPkey = 'user_email_verify_pkey'
}

/** input type for inserting data into table "user_email_verify" */
export type User_Email_Verify_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Email_Verify_Max_Fields = {
  __typename?: 'user_email_verify_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Email_Verify_Min_Fields = {
  __typename?: 'user_email_verify_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_email_verify" */
export type User_Email_Verify_Mutation_Response = {
  __typename?: 'user_email_verify_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Email_Verify>;
};

/** on_conflict condition type for table "user_email_verify" */
export type User_Email_Verify_On_Conflict = {
  constraint: User_Email_Verify_Constraint;
  update_columns?: Array<User_Email_Verify_Update_Column>;
  where?: InputMaybe<User_Email_Verify_Bool_Exp>;
};

/** Ordering options when selecting data from "user_email_verify". */
export type User_Email_Verify_Order_By = {
  created_at?: InputMaybe<Order_By>;
  secret_hash?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_email_verify */
export type User_Email_Verify_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_email_verify" */
export enum User_Email_Verify_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_email_verify" */
export type User_Email_Verify_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_email_verify" */
export enum User_Email_Verify_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_Keys = {
  __typename?: 'user_exchange_keys';
  /** A computed field, executes function "user_exchange_keys_balance" */
  balance?: Maybe<Array<Balance>>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  description: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  keys_encrypted: Scalars['String'];
  keys_hash: Scalars['String'];
  keys_keyring_id: Scalars['smallint'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysBalanceArgs = {
  args: Balance_User_Exchange_Keys_Args;
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};

/** aggregated selection of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate = {
  __typename?: 'user_exchange_keys_aggregate';
  aggregate?: Maybe<User_Exchange_Keys_Aggregate_Fields>;
  nodes: Array<User_Exchange_Keys>;
};

/** aggregate fields of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_Fields = {
  __typename?: 'user_exchange_keys_aggregate_fields';
  avg?: Maybe<User_Exchange_Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Exchange_Keys_Max_Fields>;
  min?: Maybe<User_Exchange_Keys_Min_Fields>;
  stddev?: Maybe<User_Exchange_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<User_Exchange_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Exchange_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<User_Exchange_Keys_Sum_Fields>;
  var_pop?: Maybe<User_Exchange_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<User_Exchange_Keys_Var_Samp_Fields>;
  variance?: Maybe<User_Exchange_Keys_Variance_Fields>;
};


/** aggregate fields of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_Order_By = {
  avg?: InputMaybe<User_Exchange_Keys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Exchange_Keys_Max_Order_By>;
  min?: InputMaybe<User_Exchange_Keys_Min_Order_By>;
  stddev?: InputMaybe<User_Exchange_Keys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Exchange_Keys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Exchange_Keys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Exchange_Keys_Sum_Order_By>;
  var_pop?: InputMaybe<User_Exchange_Keys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Exchange_Keys_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Exchange_Keys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_exchange_keys" */
export type User_Exchange_Keys_Arr_Rel_Insert_Input = {
  data: Array<User_Exchange_Keys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Exchange_Keys_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Exchange_Keys_Avg_Fields = {
  __typename?: 'user_exchange_keys_avg_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Avg_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_exchange_keys". All fields are combined with a logical 'AND'. */
export type User_Exchange_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<User_Exchange_Keys_Bool_Exp>>;
  _not?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<User_Exchange_Keys_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  invalidated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  keys_encrypted?: InputMaybe<String_Comparison_Exp>;
  keys_hash?: InputMaybe<String_Comparison_Exp>;
  keys_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_exchange_keys" */
export enum User_Exchange_Keys_Constraint {
  /** unique or primary key constraint on columns "uid" */
  UserExchangeKeysPkey = 'user_exchange_keys_pkey'
}

/** input type for incrementing numeric columns in table "user_exchange_keys" */
export type User_Exchange_Keys_Inc_Input = {
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user_exchange_keys" */
export type User_Exchange_Keys_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Dca_Order_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  exchange?: InputMaybe<Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  invalidated_at?: InputMaybe<Scalars['timestamptz']>;
  keys_encrypted?: InputMaybe<Scalars['String']>;
  keys_hash?: InputMaybe<Scalars['String']>;
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Exchange_Keys_Max_Fields = {
  __typename?: 'user_exchange_keys_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  keys_encrypted?: Maybe<Scalars['String']>;
  keys_hash?: Maybe<Scalars['String']>;
  keys_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Exchange_Keys_Min_Fields = {
  __typename?: 'user_exchange_keys_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  keys_encrypted?: Maybe<Scalars['String']>;
  keys_hash?: Maybe<Scalars['String']>;
  keys_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_exchange_keys" */
export type User_Exchange_Keys_Mutation_Response = {
  __typename?: 'user_exchange_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Exchange_Keys>;
};

/** input type for inserting object relation for remote table "user_exchange_keys" */
export type User_Exchange_Keys_Obj_Rel_Insert_Input = {
  data: User_Exchange_Keys_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Exchange_Keys_On_Conflict>;
};

/** on_conflict condition type for table "user_exchange_keys" */
export type User_Exchange_Keys_On_Conflict = {
  constraint: User_Exchange_Keys_Constraint;
  update_columns?: Array<User_Exchange_Keys_Update_Column>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "user_exchange_keys". */
export type User_Exchange_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_exchange_keys */
export type User_Exchange_Keys_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_exchange_keys" */
export enum User_Exchange_Keys_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  KeysEncrypted = 'keys_encrypted',
  /** column name */
  KeysHash = 'keys_hash',
  /** column name */
  KeysKeyringId = 'keys_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_exchange_keys" */
export type User_Exchange_Keys_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  invalidated_at?: InputMaybe<Scalars['timestamptz']>;
  keys_encrypted?: InputMaybe<Scalars['String']>;
  keys_hash?: InputMaybe<Scalars['String']>;
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Exchange_Keys_Stddev_Fields = {
  __typename?: 'user_exchange_keys_stddev_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Stddev_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Exchange_Keys_Stddev_Pop_Fields = {
  __typename?: 'user_exchange_keys_stddev_pop_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Stddev_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Exchange_Keys_Stddev_Samp_Fields = {
  __typename?: 'user_exchange_keys_stddev_samp_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Stddev_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Exchange_Keys_Sum_Fields = {
  __typename?: 'user_exchange_keys_sum_fields';
  keys_keyring_id?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Sum_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_exchange_keys" */
export enum User_Exchange_Keys_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  KeysEncrypted = 'keys_encrypted',
  /** column name */
  KeysHash = 'keys_hash',
  /** column name */
  KeysKeyringId = 'keys_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** aggregate var_pop on columns */
export type User_Exchange_Keys_Var_Pop_Fields = {
  __typename?: 'user_exchange_keys_var_pop_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Var_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Exchange_Keys_Var_Samp_Fields = {
  __typename?: 'user_exchange_keys_var_samp_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Var_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Exchange_Keys_Variance_Fields = {
  __typename?: 'user_exchange_keys_variance_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Variance_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Arr_Rel_Insert_Input>;
  dca_orders?: InputMaybe<Dca_Order_Arr_Rel_Insert_Input>;
  email_encrypted?: InputMaybe<Scalars['String']>;
  email_hash?: InputMaybe<Scalars['String']>;
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  password_hash?: InputMaybe<Scalars['String']>;
  trades?: InputMaybe<Trade_Arr_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_2fa?: InputMaybe<User_2fa_Obj_Rel_Insert_Input>;
  user_devices?: InputMaybe<User_Device_Arr_Rel_Insert_Input>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email_encrypted?: Maybe<Scalars['String']>;
  email_hash?: Maybe<Scalars['String']>;
  email_keyring_id?: Maybe<Scalars['smallint']>;
  password_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email_encrypted?: Maybe<Scalars['String']>;
  email_hash?: Maybe<Scalars['String']>;
  email_keyring_id?: Maybe<Scalars['smallint']>;
  password_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  email_encrypted?: InputMaybe<Order_By>;
  email_hash?: InputMaybe<Order_By>;
  email_keyring_id?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  password_hash?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_2fa?: InputMaybe<User_2fa_Order_By>;
  user_devices_aggregate?: InputMaybe<User_Device_Aggregate_Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<User_Exchange_Keys_Aggregate_Order_By>;
};

/** columns and relationships of "user_password_reset" */
export type User_Password_Reset = {
  __typename?: 'user_password_reset';
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  secret_hash: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "user_password_reset" */
export type User_Password_Reset_Aggregate = {
  __typename?: 'user_password_reset_aggregate';
  aggregate?: Maybe<User_Password_Reset_Aggregate_Fields>;
  nodes: Array<User_Password_Reset>;
};

/** aggregate fields of "user_password_reset" */
export type User_Password_Reset_Aggregate_Fields = {
  __typename?: 'user_password_reset_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Password_Reset_Max_Fields>;
  min?: Maybe<User_Password_Reset_Min_Fields>;
};


/** aggregate fields of "user_password_reset" */
export type User_Password_Reset_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Password_Reset_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_password_reset". All fields are combined with a logical 'AND'. */
export type User_Password_Reset_Bool_Exp = {
  _and?: InputMaybe<Array<User_Password_Reset_Bool_Exp>>;
  _not?: InputMaybe<User_Password_Reset_Bool_Exp>;
  _or?: InputMaybe<Array<User_Password_Reset_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  secret_hash?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_password_reset" */
export enum User_Password_Reset_Constraint {
  /** unique or primary key constraint on columns "secret_hash" */
  UniqueUserPasswordResetSecretHash = 'unique_user_password_reset_secret_hash',
  /** unique or primary key constraint on columns "uid" */
  UserPasswordResetPkey = 'user_password_reset_pkey'
}

/** input type for inserting data into table "user_password_reset" */
export type User_Password_Reset_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Password_Reset_Max_Fields = {
  __typename?: 'user_password_reset_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Password_Reset_Min_Fields = {
  __typename?: 'user_password_reset_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_password_reset" */
export type User_Password_Reset_Mutation_Response = {
  __typename?: 'user_password_reset_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Password_Reset>;
};

/** on_conflict condition type for table "user_password_reset" */
export type User_Password_Reset_On_Conflict = {
  constraint: User_Password_Reset_Constraint;
  update_columns?: Array<User_Password_Reset_Update_Column>;
  where?: InputMaybe<User_Password_Reset_Bool_Exp>;
};

/** Ordering options when selecting data from "user_password_reset". */
export type User_Password_Reset_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  secret_hash?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_password_reset */
export type User_Password_Reset_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_password_reset" */
export enum User_Password_Reset_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_password_reset" */
export type User_Password_Reset_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_password_reset" */
export enum User_Password_Reset_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailEncrypted = 'email_encrypted',
  /** column name */
  EmailHash = 'email_hash',
  /** column name */
  EmailKeyringId = 'email_keyring_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email_encrypted?: InputMaybe<Scalars['String']>;
  email_hash?: InputMaybe<Scalars['String']>;
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  password_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  email_keyring_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailEncrypted = 'email_encrypted',
  /** column name */
  EmailHash = 'email_hash',
  /** column name */
  EmailKeyringId = 'email_keyring_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Value_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

export type DcaOrderHistoryPriceChart_Dca_Order_HistoryFragment = { __typename?: 'dca_order_history', created_at: string, created_order: boolean, market_price: number, market_offset: number, value: number, available_balance: number };

export type CreateAuthTokenMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  deviceID: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  token2FA?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type CreateAuthTokenMutation = { __typename?: 'mutation_root', action_create_auth_token?: { __typename?: 'CreateAuthTokenOutput', user_uid: string, auth_token: string, expires_at: string } | null };

export type CreateDcaOrderMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
  marketUID: Scalars['uuid'];
  startAt: Scalars['timestamp'];
  marketOffset: Scalars['Float'];
  dailyAverage: Scalars['Float'];
  intervalMs: Scalars['Int'];
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  minValue?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
}>;


export type CreateDcaOrderMutation = { __typename?: 'mutation_root', action_create_dca_order?: { __typename?: 'CreateDCAOrderResult', dca_order?: { __typename?: 'dca_order', uid: string, user_exchange_keys_uid: string, enabled_at?: string | null, market_uid: string, start_at: string, market_offset: number, daily_average: number, interval_ms: number, min_value?: number | null, max_value?: number | null, exchange: { __typename?: 'exchange', uid: string, id: string, name: string }, primary_currency: { __typename?: 'currency', symbol: string }, secondary_currency: { __typename?: 'currency', symbol: string } } | null } | null };

export type CreateStripeSubscriptionMutationVariables = Exact<{
  priceId: Scalars['String'];
}>;


export type CreateStripeSubscriptionMutation = { __typename?: 'mutation_root', action_create_stripe_subscription: { __typename?: 'CreateStripeSubscription', subscription_id: string } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', action_create_user?: { __typename?: 'CreateUserOutput', user_uid: string } | null };

export type CreateUserExchangeKeysMutationVariables = Exact<{
  description: Scalars['String'];
  exchangeUID: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type CreateUserExchangeKeysMutation = { __typename?: 'mutation_root', action_create_user_exchange_keys?: { __typename?: 'CreateUserExchangeKeysOutput', user_exchange_keys?: { __typename?: 'user_exchange_keys', uid: string, description: string, invalidated_at?: string | null, exchange: { __typename?: 'exchange', uid: string }, dca_orders_aggregate: { __typename?: 'dca_order_aggregate', aggregate?: { __typename?: 'dca_order_aggregate_fields', count: number } | null } } | null } | null };

export type DeleteDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type DeleteDcaOrderMutation = { __typename?: 'mutation_root', delete_dca_order_by_pk?: { __typename?: 'dca_order', uid: string } | null };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'mutation_root', action_delete_user?: { __typename?: 'DeleteUserOutput', user_uid: string } | null };

export type DeleteUser2FaMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type DeleteUser2FaMutation = { __typename?: 'mutation_root', action_delete_user_2fa?: { __typename?: 'DeleteUser2FAOutput', user?: { __typename?: 'user', uid: string, user_2fa?: { __typename?: 'user_2fa', created_at: string, name: string, uid: string } | null } | null } | null };

export type DeleteUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
}>;


export type DeleteUserDeviceMutation = { __typename?: 'mutation_root', delete_user_device_by_pk?: { __typename?: 'user_device', uid: string } | null };

export type DeleteUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type DeleteUserExchangeKeysMutation = { __typename?: 'mutation_root', delete_user_exchange_keys_by_pk?: { __typename?: 'user_exchange_keys', uid: string } | null };

export type EnableUser2FaMutationVariables = Exact<{
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
}>;


export type EnableUser2FaMutation = { __typename?: 'mutation_root', action_enable_user_2fa?: { __typename?: 'EnableUser2FAOutput', user?: { __typename?: 'user', uid: string, user_2fa?: { __typename?: 'user_2fa', created_at: string, name: string, uid: string } | null } | null } | null };

export type UseResetUserPasswordMutationVariables = Exact<{
  passwordResetSecret: Scalars['String'];
  newPassword: Scalars['String'];
  deviceID: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  token2FA?: InputMaybe<Scalars['String']>;
}>;


export type UseResetUserPasswordMutation = { __typename?: 'mutation_root', action_reset_user_password: { __typename?: 'ResetUserPasswordOutput', user_uid: string, auth_token: string, expires_at: string } };

export type SendUserEmailVerifyMutationVariables = Exact<{ [key: string]: never; }>;


export type SendUserEmailVerifyMutation = { __typename?: 'mutation_root', action_send_user_email_verify: { __typename?: 'SendUserEmailVerifyOutput', user_uid: string } };

export type SendUserPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendUserPasswordResetMutation = { __typename?: 'mutation_root', action_send_user_password_reset: { __typename?: 'SendUserPasswordResetOutput', email: string } };

export type UpdateDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  values: Dca_Order_Set_Input;
}>;


export type UpdateDcaOrderMutation = { __typename?: 'mutation_root', update_dca_order_by_pk?: { __typename?: 'dca_order', uid: string, enabled_at?: string | null, daily_average: number, interval_ms: number, market_offset: number, market_uid: string, max_value?: number | null, min_value?: number | null, start_at: string, updated_at: string, user_exchange_keys_uid: string } | null };

export type UpdateDcaOrderEnabledMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  enabled: Scalars['Boolean'];
}>;


export type UpdateDcaOrderEnabledMutation = { __typename?: 'mutation_root', action_update_dca_order: { __typename?: 'UpdateDCAOrderOutput', dca_order?: { __typename?: 'dca_order', uid: string, enabled_at?: string | null } | null } };

export type UpdateStripeSubscriptionMutationVariables = Exact<{
  subscriptionID: Scalars['String'];
  cancelAtPeriodEnd: Scalars['Boolean'];
}>;


export type UpdateStripeSubscriptionMutation = { __typename?: 'mutation_root', action_update_stripe_subscription: { __typename?: 'UpdateSubscriptionOutput', stripe_subscription?: { __typename?: 'stripe_subscription', id: string, status: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean } | null } };

export type UpdateUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', action_update_user: { __typename?: 'UpdateUserOutput', user_uid: string } };

export type UpdateUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserDeviceMutation = { __typename?: 'mutation_root', update_user_device_by_pk?: { __typename?: 'user_device', uid: string, name: string } | null };

export type UpdateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
}>;


export type UpdateUserExchangeKeysMutation = { __typename?: 'mutation_root', action_update_user_exchange_keys?: { __typename?: 'UpdateUserExchangeKeysOutput', user_exchange_keys?: { __typename?: 'user_exchange_keys', uid: string, description: string, invalidated_at?: string | null, exchange: { __typename?: 'exchange', uid: string }, dca_orders_aggregate: { __typename?: 'dca_order_aggregate', aggregate?: { __typename?: 'dca_order_aggregate_fields', count: number } | null } } | null } | null };

export type ValidateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type ValidateUserExchangeKeysMutation = { __typename?: 'mutation_root', action_validate_user_exchange_keys?: { __typename?: 'ValidateUserExchangeKeysOutput', is_valid: boolean, validation_message?: string | null } | null };

export type ValidateUserExchangeKeysLiveMutationVariables = Exact<{
  exchangeUID: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type ValidateUserExchangeKeysLiveMutation = { __typename?: 'mutation_root', action_validate_user_exchange_keys_live?: { __typename?: 'ValidateUserExchangeKeysLiveOutput', is_valid: boolean, validation_message?: string | null } | null };

export type ValidateUserPasswordResetMutationVariables = Exact<{
  passwordResetSecret: Scalars['String'];
}>;


export type ValidateUserPasswordResetMutation = { __typename?: 'mutation_root', action_validate_user_password_reset: { __typename?: 'ValidatUserPasswordResetOutput', is_valid: boolean, email?: string | null } };

export type VerifyUserEmailMutationVariables = Exact<{
  emailVerifySecret: Scalars['String'];
}>;


export type VerifyUserEmailMutation = { __typename?: 'mutation_root', action_verify_user_email: { __typename?: 'VerifyUserEmailOutput', email: string } };

export type GetCheckoutPageQueryVariables = Exact<{
  subscriptionID: Scalars['String'];
}>;


export type GetCheckoutPageQuery = { __typename?: 'query_root', action_query_stripe_config: { __typename?: 'QueryStripeConfigOutput', publishable_key: string }, action_query_live_stripe_subscription: { __typename?: 'QueryLiveStripeSubscriptionOutput', id: string, client_secret: string }, stripe_subscription_by_pk?: { __typename?: 'stripe_subscription', id: string, status: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean, current_period_start: string, current_period_end: string, stripe_price: { __typename?: 'stripe_price', unit_amount?: number | null, currency: string, recurring_interval?: string | null, recurring_interval_count?: number | null, stripe_product: { __typename?: 'stripe_product', name: string } } } | null };

export type GetDcaOrderFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderFormCreateQuery = { __typename?: 'query_root', market: Array<{ __typename?: 'market', uid: string, name: string, market_prices: Array<{ __typename?: 'market_price', asset_symbol: string, currency: string }> }>, user_exchange_keys: Array<{ __typename?: 'user_exchange_keys', uid: string, description: string, exchange_uid: string }>, exchange: Array<{ __typename?: 'exchange', uid: string, name: string, primary_currencies: Array<{ __typename?: 'exchange_primary_currency', symbol: string, currency: { __typename?: 'currency', name: string } }>, secondary_currencies: Array<{ __typename?: 'exchange_secondary_currency', symbol: string, currency: { __typename?: 'currency', name: string } }> }> };

export type GetDcaOrderFormEditQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderFormEditQuery = { __typename?: 'query_root', market: Array<{ __typename?: 'market', uid: string, name: string, market_prices: Array<{ __typename?: 'market_price', asset_symbol: string, currency: string }> }>, user_exchange_keys: Array<{ __typename?: 'user_exchange_keys', uid: string, exchange_uid: string, description: string }>, dca_order_by_pk?: { __typename?: 'dca_order', uid: string, user_exchange_keys_uid: string, exchange_uid: string, market_uid: string, start_at: string, market_offset: number, daily_average: number, interval_ms: number, min_value?: number | null, max_value?: number | null, primary_currency: { __typename?: 'currency', symbol: string, name: string }, secondary_currency: { __typename?: 'currency', symbol: string, name: string }, exchange: { __typename?: 'exchange', uid: string, name: string } } | null };

export type GetDcaOrderHistoryListQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  gt: Scalars['timestamptz'];
  lte: Scalars['timestamptz'];
}>;


export type GetDcaOrderHistoryListQuery = { __typename?: 'query_root', dca_order_by_pk?: { __typename?: 'dca_order', uid: string, exchange: { __typename?: 'exchange', uid: string, name: string }, primary_currency: { __typename?: 'currency', symbol: string }, secondary_currency: { __typename?: 'currency', symbol: string } } | null, dca_order_history: Array<{ __typename?: 'dca_order_history', uid: string, created_at: string, market_price: number, market_offset: number, target_value: number, available_balance: number, created_order: boolean, description: string, value: number }> };

export type GetDcaOrderHistoryPriceChartQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  gt: Scalars['timestamptz'];
  lte: Scalars['timestamptz'];
}>;


export type GetDcaOrderHistoryPriceChartQuery = { __typename?: 'query_root', dca_order_by_pk?: { __typename?: 'dca_order', uid: string, exchange_market_trading_pair?: Array<{ __typename?: 'market_trading_pair', market_uid: string, primary_currency_symbol: string, secondary_currency_symbol: string, market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }> | null, market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> } | null };

export type GetDcaOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderListQuery = { __typename?: 'query_root', dca_order: Array<{ __typename?: 'dca_order', uid: string, enabled_at?: string | null, daily_average: number, start_at: string, market_offset: number, interval_ms: number, min_value?: number | null, max_value?: number | null, exchange: { __typename?: 'exchange', uid: string, id: string, name: string }, primary_currency: { __typename?: 'currency', symbol: string }, secondary_currency: { __typename?: 'currency', symbol: string } }> };

export type GetDcaOrderDeleteQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderDeleteQuery = { __typename?: 'query_root', dca_order_by_pk?: { __typename?: 'dca_order', uid: string, enabled_at?: string | null, daily_average: number, start_at: string, market_offset: number, min_value?: number | null, max_value?: number | null, exchange: { __typename?: 'exchange', uid: string, name: string }, primary_currency: { __typename?: 'currency', symbol: string }, secondary_currency: { __typename?: 'currency', symbol: string } } | null };

export type GetEmailVerifiedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmailVerifiedQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', uid: string, email_verified: boolean }> };

export type GetExchangeKeysFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeKeysFormCreateQuery = { __typename?: 'query_root', exchange: Array<{ __typename?: 'exchange', uid: string, id: string, name: string }> };

export type GetExchangeListQueryVariables = Exact<{
  currentTimestamp?: InputMaybe<Scalars['timestamptz']>;
  historicTimestamp?: InputMaybe<Scalars['timestamptz']>;
}>;


export type GetExchangeListQuery = { __typename?: 'query_root', user_exchange_keys: Array<{ __typename?: 'user_exchange_keys', uid: string, exchange: { __typename?: 'exchange', uid: string, name: string, url: string }, balance_latest?: Array<{ __typename?: 'balance', available_balance: number, total_balance: number, currency_symbol: string, total_balance_nzd?: number | null }> | null, balance_historic?: Array<{ __typename?: 'balance', currency_symbol: string, total_balance_nzd?: number | null }> | null }> };

export type GetMarketPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
}>;


export type GetMarketPriceQuery = { __typename?: 'query_root', binance_us: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }>, kiwi_coin: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }>, dasset: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }>, kraken: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }>, independent_reserve_aud: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }>, independent_reserve_nzd: Array<{ __typename?: 'market', market_prices: Array<{ __typename?: 'market_price', price: number, timestamp: string }> }> };

export type GetOpenOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenOrderListQuery = { __typename?: 'query_root', order: Array<{ __typename?: 'order', uid: string, opened_at: string, value: number, volume: number, price: number, primary_currency: string, secondary_currency: string, type: string, exchange: { __typename?: 'exchange', uid: string, name: string }, dca_order_histories: Array<{ __typename?: 'dca_order_history', uid: string, dca_order_uid: string }> }> };

export type GetPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricesQuery = { __typename?: 'query_root', stripe_product: Array<{ __typename?: 'stripe_product', id: string, active: boolean, name: string, stripe_prices: Array<{ __typename?: 'stripe_price', id: string, type: string, recurring_interval?: string | null, recurring_interval_count?: number | null, unit_amount?: number | null, currency: string }> }> };

export type StripeSubscriptionFragment = { __typename?: 'stripe_subscription', id: string, status: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean, current_period_start: string, current_period_end: string, stripe_price: { __typename?: 'stripe_price', unit_amount?: number | null, currency: string, recurring_interval?: string | null, recurring_interval_count?: number | null, stripe_product: { __typename?: 'stripe_product', name: string } } };

export type GetSubscriptionStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionStatusQuery = { __typename?: 'query_root', active_stripe_subscription: Array<{ __typename?: 'stripe_subscription', id: string, status: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean, current_period_start: string, current_period_end: string, stripe_price: { __typename?: 'stripe_price', unit_amount?: number | null, currency: string, recurring_interval?: string | null, recurring_interval_count?: number | null, stripe_product: { __typename?: 'stripe_product', name: string } } }>, incomplete_stripe_subscription: Array<{ __typename?: 'stripe_subscription', id: string, status: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean, current_period_start: string, current_period_end: string, stripe_price: { __typename?: 'stripe_price', unit_amount?: number | null, currency: string, recurring_interval?: string | null, recurring_interval_count?: number | null, stripe_product: { __typename?: 'stripe_product', name: string } } }>, stripe_subscription_aggregate: { __typename?: 'stripe_subscription_aggregate', aggregate?: { __typename?: 'stripe_subscription_aggregate_fields', count: number } | null } };

export type GetSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionsQuery = { __typename?: 'query_root', stripe_subscription: Array<{ __typename?: 'stripe_subscription', id: string, status: string, current_period_start: string, current_period_end: string, cancel_at?: string | null, canceled_at?: string | null, cancel_at_period_end: boolean, stripe_price: { __typename?: 'stripe_price', recurring_interval?: string | null, recurring_interval_count?: number | null, unit_amount?: number | null, currency: string, stripe_product: { __typename?: 'stripe_product', name: string } } }> };

export type GetTradeAvgPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
}>;


export type GetTradeAvgPriceQuery = { __typename?: 'query_root', trade_avg_price_by_window: Array<{ __typename?: 'type_trade_avg_price_by_window', timestamp?: string | null, price?: number | null, avg_price?: number | null }> };

export type GetTradeCumulativeSumByDayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeCumulativeSumByDayQuery = { __typename?: 'query_root', trade_avg_price_by_window: Array<{ __typename?: 'type_trade_avg_price_by_window', timestamp?: string | null, primary_currency?: string | null, total_value?: number | null }> };

export type GetTradeCumulativeVolumeByDayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeCumulativeVolumeByDayQuery = { __typename?: 'query_root', trade_avg_price_by_window: Array<{ __typename?: 'type_trade_avg_price_by_window', timestamp?: string | null, primary_currency?: string | null, volume?: number | null }> };

export type GetTradeListQueryVariables = Exact<{
  filters: Trade_Bool_Exp;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetTradeListQuery = { __typename?: 'query_root', trade_aggregate: { __typename?: 'trade_aggregate', aggregate?: { __typename?: 'trade_aggregate_fields', count: number, sum?: { __typename?: 'trade_sum_fields', value?: number | null, volume?: number | null, fee?: number | null } | null, min?: { __typename?: 'trade_min_fields', timestamp?: string | null } | null, max?: { __typename?: 'trade_max_fields', timestamp?: string | null } | null } | null }, trade: Array<{ __typename?: 'trade', uid: string, timestamp: string, value: number, volume: number, primary_currency: string, secondary_currency: string, type: string, price?: number | null, total_value?: number | null, fee?: number | null, exchange: { __typename?: 'exchange', uid: string, id: string } }> };

export type GetTradeSumValueByWeekQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeSumValueByWeekQuery = { __typename?: 'query_root', trade_sum_by_window: Array<{ __typename?: 'type_trade_sum_by_window', timestamp?: string | null, primary_currency?: string | null, total_value?: number | null }> };

export type GetUser2FaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUser2FaQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', uid: string, user_2fa?: { __typename?: 'user_2fa', created_at: string, name: string, uid: string } | null }> };

export type GetUserDeviceByUidQueryVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
}>;


export type GetUserDeviceByUidQuery = { __typename?: 'query_root', user_device_by_pk?: { __typename?: 'user_device', uid: string, name: string } | null };

export type GetUserDeviceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDeviceListQuery = { __typename?: 'query_root', user_device: Array<{ __typename?: 'user_device', uid: string, name: string, created_at: string, accessed_at: string }> };

export type GetUserExchangeKeysByUidQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type GetUserExchangeKeysByUidQuery = { __typename?: 'query_root', user_exchange_keys_by_pk?: { __typename?: 'user_exchange_keys', uid: string, description: string } | null };

export type GetUserExchangeKeysFormEditQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type GetUserExchangeKeysFormEditQuery = { __typename?: 'query_root', user_exchange_keys_by_pk?: { __typename?: 'user_exchange_keys', uid: string, description: string, exchange: { __typename?: 'exchange', uid: string, id: string, name: string } } | null };

export type GetUserExchangeKeysListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserExchangeKeysListQuery = { __typename?: 'query_root', user_exchange_keys: Array<{ __typename?: 'user_exchange_keys', uid: string, description: string, updated_at: string, exchange: { __typename?: 'exchange', uid: string, name: string }, dca_orders_aggregate: { __typename?: 'dca_order_aggregate', aggregate?: { __typename?: 'dca_order_aggregate_fields', count: number } | null } }> };

export type SetupUser2FaQueryVariables = Exact<{ [key: string]: never; }>;


export type SetupUser2FaQuery = { __typename?: 'query_root', action_setup_user_2fa?: { __typename?: 'SetupUser2FAOutput', qrcode: string, secret: string } | null };

export const DcaOrderHistoryPriceChart_Dca_Order_HistoryFragmentDoc = gql`
    fragment DCAOrderHistoryPriceChart_dca_order_history on dca_order_history {
  created_at
  created_order
  market_price
  market_offset
  value
  available_balance
}
    `;
export const StripeSubscriptionFragmentDoc = gql`
    fragment stripeSubscription on stripe_subscription {
  id
  status
  cancel_at
  canceled_at
  cancel_at_period_end
  current_period_start
  current_period_end
  stripe_price {
    unit_amount
    currency
    recurring_interval
    recurring_interval_count
    stripe_product {
      name
    }
  }
}
    `;
export const CreateAuthTokenDocument = gql`
    mutation createAuthToken($email: String!, $password: String!, $deviceID: String!, $deviceName: String!, $deviceTrusted: Boolean!, $token2FA: String, $role: String!) {
  action_create_auth_token(
    email: $email
    password: $password
    device_id: $deviceID
    device_name: $deviceName
    device_trusted: $deviceTrusted
    token_2fa: $token2FA
    role: $role
  ) {
    user_uid
    auth_token
    expires_at
  }
}
    `;
export const CreateDcaOrderDocument = gql`
    mutation createDCAOrder($userExchangeKeysUID: uuid!, $marketUID: uuid!, $startAt: timestamp!, $marketOffset: Float!, $dailyAverage: Float!, $intervalMs: Int!, $primaryCurrency: String!, $secondaryCurrency: String!, $minValue: Float, $maxValue: Float) {
  action_create_dca_order(
    user_exchange_keys_uid: $userExchangeKeysUID
    market_uid: $marketUID
    start_at: $startAt
    market_offset: $marketOffset
    daily_average: $dailyAverage
    interval_ms: $intervalMs
    primary_currency: $primaryCurrency
    secondary_currency: $secondaryCurrency
    min_value: $minValue
    max_value: $maxValue
  ) {
    dca_order {
      uid
      exchange {
        uid
        id
        name
      }
      user_exchange_keys_uid
      enabled_at
      market_uid
      start_at
      market_offset
      daily_average
      interval_ms
      primary_currency {
        symbol
      }
      secondary_currency {
        symbol
      }
      min_value
      max_value
    }
  }
}
    `;
export const CreateStripeSubscriptionDocument = gql`
    mutation createStripeSubscription($priceId: String!) {
  action_create_stripe_subscription(price_id: $priceId) {
    subscription_id
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $password: String!) {
  action_create_user(email: $email, password: $password) {
    user_uid
  }
}
    `;
export const CreateUserExchangeKeysDocument = gql`
    mutation createUserExchangeKeys($description: String!, $exchangeUID: uuid!, $keys: jsonb!) {
  action_create_user_exchange_keys(
    description: $description
    exchange_uid: $exchangeUID
    keys: $keys
  ) {
    user_exchange_keys {
      uid
      description
      exchange {
        uid
      }
      invalidated_at
      dca_orders_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export const DeleteDcaOrderDocument = gql`
    mutation deleteDCAOrder($dcaOrderUID: uuid!) {
  delete_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation deleteUser {
  action_delete_user {
    user_uid
  }
}
    `;
export const DeleteUser2FaDocument = gql`
    mutation deleteUser2FA($token: String!) {
  action_delete_user_2fa(token: $token) {
    user {
      uid
      user_2fa {
        created_at
        name
        uid
      }
    }
  }
}
    `;
export const DeleteUserDeviceDocument = gql`
    mutation deleteUserDevice($userDeviceUID: uuid!) {
  delete_user_device_by_pk(uid: $userDeviceUID) {
    uid
  }
}
    `;
export const DeleteUserExchangeKeysDocument = gql`
    mutation deleteUserExchangeKeys($userExchangeKeysUID: uuid!) {
  delete_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
  }
}
    `;
export const EnableUser2FaDocument = gql`
    mutation enableUser2FA($name: String!, $secret: String!, $token: String!) {
  action_enable_user_2fa(name: $name, secret: $secret, token: $token) {
    user {
      uid
      user_2fa {
        created_at
        name
        uid
      }
    }
  }
}
    `;
export const UseResetUserPasswordDocument = gql`
    mutation useResetUserPassword($passwordResetSecret: String!, $newPassword: String!, $deviceID: String!, $deviceName: String!, $deviceTrusted: Boolean!, $token2FA: String) {
  action_reset_user_password(
    password_reset_secret: $passwordResetSecret
    new_password: $newPassword
    device_id: $deviceID
    device_name: $deviceName
    device_trusted: $deviceTrusted
    token_2fa: $token2FA
  ) {
    user_uid
    auth_token
    expires_at
  }
}
    `;
export const SendUserEmailVerifyDocument = gql`
    mutation sendUserEmailVerify {
  action_send_user_email_verify {
    user_uid
  }
}
    `;
export const SendUserPasswordResetDocument = gql`
    mutation sendUserPasswordReset($email: String!) {
  action_send_user_password_reset(email: $email) {
    email
  }
}
    `;
export const UpdateDcaOrderDocument = gql`
    mutation updateDCAOrder($dcaOrderUID: uuid!, $values: dca_order_set_input!) {
  update_dca_order_by_pk(pk_columns: {uid: $dcaOrderUID}, _set: $values) {
    uid
    enabled_at
    daily_average
    enabled_at
    interval_ms
    market_offset
    market_uid
    max_value
    min_value
    start_at
    updated_at
    user_exchange_keys_uid
  }
}
    `;
export const UpdateDcaOrderEnabledDocument = gql`
    mutation updateDCAOrderEnabled($dcaOrderUID: uuid!, $enabled: Boolean!) {
  action_update_dca_order(dca_order_uid: $dcaOrderUID, enabled: $enabled) {
    dca_order {
      uid
      enabled_at
    }
  }
}
    `;
export const UpdateStripeSubscriptionDocument = gql`
    mutation updateStripeSubscription($subscriptionID: String!, $cancelAtPeriodEnd: Boolean!) {
  action_update_stripe_subscription(
    subscription_id: $subscriptionID
    cancel_at_period_end: $cancelAtPeriodEnd
  ) {
    stripe_subscription {
      id
      status
      cancel_at
      canceled_at
      cancel_at_period_end
    }
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($email: String, $password: String) {
  action_update_user(email: $email, password: $password) {
    user_uid
  }
}
    `;
export const UpdateUserDeviceDocument = gql`
    mutation updateUserDevice($userDeviceUID: uuid!, $name: String) {
  update_user_device_by_pk(pk_columns: {uid: $userDeviceUID}, _set: {name: $name}) {
    uid
    name
  }
}
    `;
export const UpdateUserExchangeKeysDocument = gql`
    mutation updateUserExchangeKeys($userExchangeKeysUID: uuid!, $description: String, $keys: jsonb) {
  action_update_user_exchange_keys(
    user_exchange_keys_uid: $userExchangeKeysUID
    description: $description
    keys: $keys
  ) {
    user_exchange_keys {
      uid
      description
      exchange {
        uid
      }
      invalidated_at
      dca_orders_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export const ValidateUserExchangeKeysDocument = gql`
    mutation validateUserExchangeKeys($userExchangeKeysUID: uuid!) {
  action_validate_user_exchange_keys(user_exchange_keys_uid: $userExchangeKeysUID) {
    is_valid
    validation_message
  }
}
    `;
export const ValidateUserExchangeKeysLiveDocument = gql`
    mutation validateUserExchangeKeysLive($exchangeUID: uuid!, $keys: jsonb!) {
  action_validate_user_exchange_keys_live(exchange_uid: $exchangeUID, keys: $keys) {
    is_valid
    validation_message
  }
}
    `;
export const ValidateUserPasswordResetDocument = gql`
    mutation validateUserPasswordReset($passwordResetSecret: String!) {
  action_validate_user_password_reset(password_reset_secret: $passwordResetSecret) {
    is_valid
    email
  }
}
    `;
export const VerifyUserEmailDocument = gql`
    mutation verifyUserEmail($emailVerifySecret: String!) {
  action_verify_user_email(email_verify_secret: $emailVerifySecret) {
    email
  }
}
    `;
export const GetCheckoutPageDocument = gql`
    query getCheckoutPage($subscriptionID: String!) {
  action_query_stripe_config {
    publishable_key
  }
  action_query_live_stripe_subscription(subscription_id: $subscriptionID) {
    id
    client_secret
  }
  stripe_subscription_by_pk(id: $subscriptionID) {
    ...stripeSubscription
  }
}
    ${StripeSubscriptionFragmentDoc}`;
export const GetDcaOrderFormCreateDocument = gql`
    query getDCAOrderFormCreate {
  market {
    uid
    name
    market_prices(
      distinct_on: [asset_symbol, currency]
      where: {timestamp: {_gt: "2021-12-09T12:00:00"}}
    ) {
      asset_symbol
      currency
    }
  }
  user_exchange_keys {
    uid
    description
    exchange_uid
  }
  exchange {
    uid
    name
    primary_currencies {
      symbol
      currency {
        name
      }
    }
    secondary_currencies {
      symbol
      currency {
        name
      }
    }
  }
}
    `;
export const GetDcaOrderFormEditDocument = gql`
    query getDCAOrderFormEdit($dcaOrderUID: uuid!) {
  market {
    uid
    name
    market_prices(
      distinct_on: [asset_symbol, currency]
      where: {timestamp: {_gt: "2022-07-01T12:00:00"}}
    ) {
      asset_symbol
      currency
    }
  }
  user_exchange_keys {
    uid
    exchange_uid
    description
  }
  dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    user_exchange_keys_uid
    exchange_uid
    market_uid
    start_at
    market_offset
    daily_average
    interval_ms
    primary_currency {
      symbol
      name
    }
    secondary_currency {
      symbol
      name
    }
    min_value
    max_value
    exchange {
      uid
      name
    }
  }
}
    `;
export const GetDcaOrderHistoryListDocument = gql`
    query getDCAOrderHistoryList($dcaOrderUID: uuid!, $gt: timestamptz!, $lte: timestamptz!) {
  dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange {
      uid
      name
    }
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
  }
  dca_order_history(
    where: {dca_order_uid: {_eq: $dcaOrderUID}, created_at: {_lte: $lte, _gt: $gt}}
    order_by: {created_at: desc}
  ) {
    ...DCAOrderHistoryPriceChart_dca_order_history
    uid
    created_at
    market_price
    market_offset
    target_value
    available_balance
    created_order
    description
    value
  }
}
    ${DcaOrderHistoryPriceChart_Dca_Order_HistoryFragmentDoc}`;
export const GetDcaOrderHistoryPriceChartDocument = gql`
    query getDCAOrderHistoryPriceChart($dcaOrderUID: uuid!, $gt: timestamptz!, $lte: timestamptz!) {
  dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange_market_trading_pair {
      market_uid
      primary_currency_symbol
      secondary_currency_symbol
      market_prices(
        where: {timestamp: {_lte: $lte, _gt: $gt}}
        order_by: {timestamp: desc}
      ) {
        price
        timestamp
      }
    }
    market_prices(
      where: {timestamp: {_lte: $lte, _gt: $gt}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
}
    `;
export const GetDcaOrderListDocument = gql`
    query getDCAOrderList {
  dca_order(order_by: [{exchange: {name: asc}}, {created_at: asc}]) {
    uid
    exchange {
      uid
      id
      name
    }
    enabled_at
    daily_average
    start_at
    market_offset
    interval_ms
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
    min_value
    max_value
  }
}
    `;
export const GetDcaOrderDeleteDocument = gql`
    query getDCAOrderDelete($dcaOrderUID: uuid!) {
  dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange {
      uid
      name
    }
    enabled_at
    daily_average
    start_at
    market_offset
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
    min_value
    max_value
  }
}
    `;
export const GetEmailVerifiedDocument = gql`
    query getEmailVerified {
  user {
    uid
    email_verified
  }
}
    `;
export const GetExchangeKeysFormCreateDocument = gql`
    query getExchangeKeysFormCreate {
  exchange {
    uid
    id
    name
  }
}
    `;
export const GetExchangeListDocument = gql`
    query getExchangeList($currentTimestamp: timestamptz, $historicTimestamp: timestamptz) {
  user_exchange_keys(order_by: {created_at: asc}) {
    uid
    exchange {
      uid
      name
      url
    }
    balance_latest: balance(
      args: {timestamp_at: $currentTimestamp}
      order_by: {currency_symbol: asc}
    ) {
      available_balance
      total_balance
      total_balance_nzd: total_balance_fx(args: {currency: "NZD"})
      currency_symbol
    }
    balance_historic: balance(
      args: {timestamp_at: $historicTimestamp}
      order_by: {currency_symbol: asc}
    ) {
      total_balance_nzd: total_balance_fx(args: {currency: "NZD"})
      currency_symbol
    }
  }
}
    `;
export const GetMarketPriceDocument = gql`
    query getMarketPrice($primaryCurrency: String!, $secondaryCurrency: String!) {
  binance_us: market(where: {id: {_eq: "binance.us"}}) {
    market_prices(
      where: {asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
  kiwi_coin: market(where: {id: {_eq: "kiwi-coin.com"}}) {
    market_prices(
      where: {asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
  dasset: market(where: {id: {_eq: "dassetx.com"}}) {
    market_prices(
      where: {asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
  kraken: market(where: {id: {_eq: "kraken.com"}}) {
    market_prices(
      where: {asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
  independent_reserve_aud: market(where: {id: {_eq: "independentreserve.com"}}) {
    market_prices(
      where: {source_currency: {_eq: "AUD"}, asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
  independent_reserve_nzd: market(where: {id: {_eq: "independentreserve.com"}}) {
    market_prices(
      where: {source_currency: {_eq: "NZD"}, asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      order_by: {timestamp: desc}
    ) {
      price
      timestamp
    }
  }
}
    `;
export const GetOpenOrderListDocument = gql`
    query getOpenOrderList {
  order(where: {closed_at: {_is_null: true}}) {
    uid
    exchange {
      uid
      name
    }
    opened_at
    value
    volume
    price
    primary_currency
    secondary_currency
    type
    dca_order_histories {
      uid
      dca_order_uid
    }
  }
}
    `;
export const GetPricesDocument = gql`
    query getPrices {
  stripe_product(where: {active: {_eq: true}}) {
    id
    active
    name
    stripe_prices(where: {active: {_eq: true}}) {
      id
      type
      recurring_interval
      recurring_interval_count
      unit_amount
      currency
    }
  }
}
    `;
export const GetSubscriptionStatusDocument = gql`
    query getSubscriptionStatus {
  active_stripe_subscription: stripe_subscription(
    where: {status: {_eq: "active"}}
    limit: 1
    order_by: {current_period_start: desc}
  ) {
    ...stripeSubscription
  }
  incomplete_stripe_subscription: stripe_subscription(
    where: {status: {_eq: "incomplete"}}
    limit: 1
    order_by: {current_period_start: desc}
  ) {
    ...stripeSubscription
  }
  stripe_subscription_aggregate {
    aggregate {
      count
    }
  }
}
    ${StripeSubscriptionFragmentDoc}`;
export const GetSubscriptionsDocument = gql`
    query getSubscriptions {
  stripe_subscription(order_by: {current_period_start: desc}) {
    id
    status
    current_period_start
    current_period_end
    cancel_at
    canceled_at
    cancel_at_period_end
    stripe_price {
      recurring_interval
      recurring_interval_count
      unit_amount
      currency
      stripe_product {
        name
      }
    }
  }
}
    `;
export const GetTradeAvgPriceDocument = gql`
    query getTradeAvgPrice($primaryCurrency: String!) {
  trade_avg_price_by_window(
    args: {group_by: "hour", currency: "NZD"}
    where: {primary_currency: {_eq: $primaryCurrency}}
    order_by: {timestamp: desc}
  ) {
    timestamp
    price
    avg_price
  }
}
    `;
export const GetTradeCumulativeSumByDayDocument = gql`
    query getTradeCumulativeSumByDay {
  trade_avg_price_by_window(
    args: {group_by: "day", currency: "NZD"}
    order_by: {timestamp: desc}
  ) {
    timestamp
    primary_currency
    total_value
  }
}
    `;
export const GetTradeCumulativeVolumeByDayDocument = gql`
    query getTradeCumulativeVolumeByDay {
  trade_avg_price_by_window(
    args: {group_by: "day", currency: "NZD"}
    order_by: {timestamp: desc}
  ) {
    timestamp
    primary_currency
    volume
  }
}
    `;
export const GetTradeListDocument = gql`
    query getTradeList($filters: trade_bool_exp!, $offset: Int!, $limit: Int!) {
  trade_aggregate(where: $filters) {
    aggregate {
      count
      sum {
        value
        volume
        fee
      }
      min {
        timestamp
      }
      max {
        timestamp
      }
    }
  }
  trade(
    where: $filters
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    uid
    exchange {
      uid
      id
    }
    timestamp
    value
    volume
    primary_currency
    secondary_currency
    type
    price: price_fx(args: {currency: "NZD"})
    total_value: total_value_fx(args: {currency: "NZD"})
    fee: fee_fx(args: {currency: "NZD"})
  }
}
    `;
export const GetTradeSumValueByWeekDocument = gql`
    query getTradeSumValueByWeek {
  trade_sum_by_window(
    args: {group_by: "week", currency: "NZD"}
    order_by: {timestamp: desc}
  ) {
    timestamp
    primary_currency
    total_value
  }
}
    `;
export const GetUser2FaDocument = gql`
    query getUser2FA {
  user {
    uid
    user_2fa {
      created_at
      name
      uid
    }
  }
}
    `;
export const GetUserDeviceByUidDocument = gql`
    query getUserDeviceByUID($userDeviceUID: uuid!) {
  user_device_by_pk(uid: $userDeviceUID) {
    uid
    name
  }
}
    `;
export const GetUserDeviceListDocument = gql`
    query getUserDeviceList {
  user_device(order_by: {accessed_at: desc}) {
    uid
    name
    created_at
    accessed_at
  }
}
    `;
export const GetUserExchangeKeysByUidDocument = gql`
    query getUserExchangeKeysByUID($userExchangeKeysUID: uuid!) {
  user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
    description
  }
}
    `;
export const GetUserExchangeKeysFormEditDocument = gql`
    query getUserExchangeKeysFormEdit($userExchangeKeysUID: uuid!) {
  user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
    description
    exchange {
      uid
      id
      name
    }
  }
}
    `;
export const GetUserExchangeKeysListDocument = gql`
    query getUserExchangeKeysList {
  user_exchange_keys {
    uid
    description
    updated_at
    exchange {
      uid
      name
    }
    dca_orders_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const SetupUser2FaDocument = gql`
    query setupUser2FA {
  action_setup_user_2fa {
    qrcode
    secret
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createAuthToken(variables: CreateAuthTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAuthTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAuthTokenMutation>(CreateAuthTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAuthToken', 'mutation');
    },
    createDCAOrder(variables: CreateDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDcaOrderMutation>(CreateDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDCAOrder', 'mutation');
    },
    createStripeSubscription(variables: CreateStripeSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateStripeSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStripeSubscriptionMutation>(CreateStripeSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStripeSubscription', 'mutation');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    createUserExchangeKeys(variables: CreateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserExchangeKeysMutation>(CreateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserExchangeKeys', 'mutation');
    },
    deleteDCAOrder(variables: DeleteDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteDcaOrderMutation>(DeleteDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteDCAOrder', 'mutation');
    },
    deleteUser(variables?: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deleteUser2FA(variables: DeleteUser2FaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUser2FaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUser2FaMutation>(DeleteUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser2FA', 'mutation');
    },
    deleteUserDevice(variables: DeleteUserDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserDeviceMutation>(DeleteUserDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserDevice', 'mutation');
    },
    deleteUserExchangeKeys(variables: DeleteUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserExchangeKeysMutation>(DeleteUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserExchangeKeys', 'mutation');
    },
    enableUser2FA(variables: EnableUser2FaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EnableUser2FaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableUser2FaMutation>(EnableUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableUser2FA', 'mutation');
    },
    useResetUserPassword(variables: UseResetUserPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UseResetUserPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UseResetUserPasswordMutation>(UseResetUserPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'useResetUserPassword', 'mutation');
    },
    sendUserEmailVerify(variables?: SendUserEmailVerifyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserEmailVerifyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserEmailVerifyMutation>(SendUserEmailVerifyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserEmailVerify', 'mutation');
    },
    sendUserPasswordReset(variables: SendUserPasswordResetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserPasswordResetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserPasswordResetMutation>(SendUserPasswordResetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserPasswordReset', 'mutation');
    },
    updateDCAOrder(variables: UpdateDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDcaOrderMutation>(UpdateDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDCAOrder', 'mutation');
    },
    updateDCAOrderEnabled(variables: UpdateDcaOrderEnabledMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDcaOrderEnabledMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDcaOrderEnabledMutation>(UpdateDcaOrderEnabledDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDCAOrderEnabled', 'mutation');
    },
    updateStripeSubscription(variables: UpdateStripeSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStripeSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStripeSubscriptionMutation>(UpdateStripeSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateStripeSubscription', 'mutation');
    },
    updateUser(variables?: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserDevice(variables: UpdateUserDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserDeviceMutation>(UpdateUserDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserDevice', 'mutation');
    },
    updateUserExchangeKeys(variables: UpdateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserExchangeKeysMutation>(UpdateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserExchangeKeys', 'mutation');
    },
    validateUserExchangeKeys(variables: ValidateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserExchangeKeysMutation>(ValidateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserExchangeKeys', 'mutation');
    },
    validateUserExchangeKeysLive(variables: ValidateUserExchangeKeysLiveMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserExchangeKeysLiveMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserExchangeKeysLiveMutation>(ValidateUserExchangeKeysLiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserExchangeKeysLive', 'mutation');
    },
    validateUserPasswordReset(variables: ValidateUserPasswordResetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserPasswordResetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserPasswordResetMutation>(ValidateUserPasswordResetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserPasswordReset', 'mutation');
    },
    verifyUserEmail(variables: VerifyUserEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VerifyUserEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyUserEmailMutation>(VerifyUserEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyUserEmail', 'mutation');
    },
    getCheckoutPage(variables: GetCheckoutPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCheckoutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCheckoutPageQuery>(GetCheckoutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCheckoutPage', 'query');
    },
    getDCAOrderFormCreate(variables?: GetDcaOrderFormCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderFormCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderFormCreateQuery>(GetDcaOrderFormCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderFormCreate', 'query');
    },
    getDCAOrderFormEdit(variables: GetDcaOrderFormEditQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderFormEditQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderFormEditQuery>(GetDcaOrderFormEditDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderFormEdit', 'query');
    },
    getDCAOrderHistoryList(variables: GetDcaOrderHistoryListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderHistoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderHistoryListQuery>(GetDcaOrderHistoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderHistoryList', 'query');
    },
    getDCAOrderHistoryPriceChart(variables: GetDcaOrderHistoryPriceChartQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderHistoryPriceChartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderHistoryPriceChartQuery>(GetDcaOrderHistoryPriceChartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderHistoryPriceChart', 'query');
    },
    getDCAOrderList(variables?: GetDcaOrderListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderListQuery>(GetDcaOrderListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderList', 'query');
    },
    getDCAOrderDelete(variables: GetDcaOrderDeleteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderDeleteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderDeleteQuery>(GetDcaOrderDeleteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDCAOrderDelete', 'query');
    },
    getEmailVerified(variables?: GetEmailVerifiedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEmailVerifiedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEmailVerifiedQuery>(GetEmailVerifiedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEmailVerified', 'query');
    },
    getExchangeKeysFormCreate(variables?: GetExchangeKeysFormCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExchangeKeysFormCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExchangeKeysFormCreateQuery>(GetExchangeKeysFormCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExchangeKeysFormCreate', 'query');
    },
    getExchangeList(variables?: GetExchangeListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExchangeListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExchangeListQuery>(GetExchangeListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExchangeList', 'query');
    },
    getMarketPrice(variables: GetMarketPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMarketPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketPriceQuery>(GetMarketPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMarketPrice', 'query');
    },
    getOpenOrderList(variables?: GetOpenOrderListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOpenOrderListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOpenOrderListQuery>(GetOpenOrderListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOpenOrderList', 'query');
    },
    getPrices(variables?: GetPricesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPricesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPricesQuery>(GetPricesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPrices', 'query');
    },
    getSubscriptionStatus(variables?: GetSubscriptionStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSubscriptionStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubscriptionStatusQuery>(GetSubscriptionStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptionStatus', 'query');
    },
    getSubscriptions(variables?: GetSubscriptionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSubscriptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubscriptionsQuery>(GetSubscriptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptions', 'query');
    },
    getTradeAvgPrice(variables: GetTradeAvgPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeAvgPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeAvgPriceQuery>(GetTradeAvgPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeAvgPrice', 'query');
    },
    getTradeCumulativeSumByDay(variables?: GetTradeCumulativeSumByDayQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeCumulativeSumByDayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeCumulativeSumByDayQuery>(GetTradeCumulativeSumByDayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeCumulativeSumByDay', 'query');
    },
    getTradeCumulativeVolumeByDay(variables?: GetTradeCumulativeVolumeByDayQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeCumulativeVolumeByDayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeCumulativeVolumeByDayQuery>(GetTradeCumulativeVolumeByDayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeCumulativeVolumeByDay', 'query');
    },
    getTradeList(variables: GetTradeListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeListQuery>(GetTradeListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeList', 'query');
    },
    getTradeSumValueByWeek(variables?: GetTradeSumValueByWeekQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeSumValueByWeekQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeSumValueByWeekQuery>(GetTradeSumValueByWeekDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeSumValueByWeek', 'query');
    },
    getUser2FA(variables?: GetUser2FaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUser2FaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser2FaQuery>(GetUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser2FA', 'query');
    },
    getUserDeviceByUID(variables: GetUserDeviceByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserDeviceByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserDeviceByUidQuery>(GetUserDeviceByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserDeviceByUID', 'query');
    },
    getUserDeviceList(variables?: GetUserDeviceListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserDeviceListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserDeviceListQuery>(GetUserDeviceListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserDeviceList', 'query');
    },
    getUserExchangeKeysByUID(variables: GetUserExchangeKeysByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysByUidQuery>(GetUserExchangeKeysByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysByUID', 'query');
    },
    getUserExchangeKeysFormEdit(variables: GetUserExchangeKeysFormEditQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysFormEditQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysFormEditQuery>(GetUserExchangeKeysFormEditDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysFormEdit', 'query');
    },
    getUserExchangeKeysList(variables?: GetUserExchangeKeysListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysListQuery>(GetUserExchangeKeysListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysList', 'query');
    },
    setupUser2FA(variables?: SetupUser2FaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetupUser2FaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetupUser2FaQuery>(SetupUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setupUser2FA', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;