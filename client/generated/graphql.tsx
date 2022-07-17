import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  ModelID: any;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new petition */
  petitionCreate?: Maybe<PetitionCreatePayload>;
  /** Updates a petition by id */
  petitionUpdate?: Maybe<PetitionUpdatePayload>;
  /** Creates a new user */
  userCreate?: Maybe<UserToken>;
  /** Deletes a user by ID */
  userDelete?: Maybe<UserDeletePayload>;
  /** Login user */
  userLogin?: Maybe<UserToken>;
  /** Updates a user by id */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Creates a new vote */
  voteCreate?: Maybe<VoteCreatePayload>;
};


export type MutationPetitionCreateArgs = {
  input: PetitionCreateInput;
};


export type MutationPetitionUpdateArgs = {
  input: PetitionUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};


export type MutationUserLoginArgs = {
  input: UserLoginInput;
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};


export type MutationVoteCreateArgs = {
  input: VoteCreateInput;
};

export type Petition = {
  __typename?: 'Petition';
  createdAt: Scalars['ISO8601DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ModelID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  numberOfVotes: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

/** Autogenerated input type of PetitionCreate */
export type PetitionCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  petitionInput: PetitionInput;
};

/** Autogenerated return type of PetitionCreate */
export type PetitionCreatePayload = {
  __typename?: 'PetitionCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  petition: Petition;
};

export type PetitionInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ModelID']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  title: Scalars['String'];
};

/** Autogenerated input type of PetitionUpdate */
export type PetitionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  petitionInput: PetitionInput;
};

/** Autogenerated return type of PetitionUpdate */
export type PetitionUpdatePayload = {
  __typename?: 'PetitionUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  petition: Petition;
};

export type Query = {
  __typename?: 'Query';
  /** Get petition */
  petition: Petition;
  /** Get petitions list */
  petitions: Array<Petition>;
  /** Get user */
  user: User;
};


export type QueryPetitionArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ModelID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Autogenerated input type of UserCreate */
export type UserCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userInput: UserInput;
};

/** Autogenerated input type of UserDelete */
export type UserDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UserDelete */
export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of UserLogin */
export type UserLoginInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userLoginInput: CredentialsInput;
};

export type UserToken = {
  __typename?: 'UserToken';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UserUpdate */
export type UserUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  userInput: UserInput;
};

/** Autogenerated return type of UserUpdate */
export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ModelID'];
  petitionId: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

/** Autogenerated input type of VoteCreate */
export type VoteCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  voteInput: VoteInput;
};

/** Autogenerated return type of VoteCreate */
export type VoteCreatePayload = {
  __typename?: 'VoteCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  vote: Vote;
};

export type VoteInput = {
  createdAt?: InputMaybe<Scalars['ISO8601DateTime']>;
  id?: InputMaybe<Scalars['ModelID']>;
  petitionId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['ISO8601DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type CurrentUserFragment = { __typename?: 'User', id: any, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any };

export type PetitionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PetitionQuery = { __typename?: 'Query', petition: { __typename?: 'Petition', id: any, title?: string | null, description?: string | null, numberOfVotes: number, latitude: number, longitude: number, createdAt: any, updatedAt: any, userId: number } };

export type PetitionCreateMutationVariables = Exact<{
  input: PetitionCreateInput;
}>;


export type PetitionCreateMutation = { __typename?: 'Mutation', petitionCreate?: { __typename?: 'PetitionCreatePayload', petition: { __typename?: 'Petition', id: any, title?: string | null, description?: string | null, numberOfVotes: number, latitude: number, longitude: number, createdAt: any, updatedAt: any, userId: number } } | null };

export type PetitionFieldsFragment = { __typename?: 'Petition', id: any, title?: string | null, description?: string | null, numberOfVotes: number, latitude: number, longitude: number, createdAt: any, updatedAt: any, userId: number };

export type PetitionUpdateMutationVariables = Exact<{
  input: PetitionUpdateInput;
}>;


export type PetitionUpdateMutation = { __typename?: 'Mutation', petitionUpdate?: { __typename?: 'PetitionUpdatePayload', petition: { __typename?: 'Petition', id: any, title?: string | null, description?: string | null, numberOfVotes: number, latitude: number, longitude: number, createdAt: any, updatedAt: any, userId: number } } | null };

export type PetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PetitionsQuery = { __typename?: 'Query', petitions: Array<{ __typename?: 'Petition', id: any, title?: string | null, description?: string | null, numberOfVotes: number, latitude: number, longitude: number, createdAt: any, updatedAt: any, userId: number }> };

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: any, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type UserCreateMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate?: { __typename?: 'UserToken', token?: string | null, user?: { __typename?: 'User', id: any, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } | null } | null };

export type UserLoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin?: { __typename?: 'UserToken', token?: string | null, user?: { __typename?: 'User', id: any, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } | null } | null };

export type VoteCreateMutationVariables = Exact<{
  input: VoteCreateInput;
}>;


export type VoteCreateMutation = { __typename?: 'Mutation', voteCreate?: { __typename?: 'VoteCreatePayload', vote: { __typename?: 'Vote', id: any } } | null };

export const CurrentUserFragmentDoc = gql`
    fragment CurrentUser on User {
  id
  firstName
  lastName
  email
  createdAt
  updatedAt
}
    `;
export const PetitionFieldsFragmentDoc = gql`
    fragment PetitionFields on Petition {
  id
  title
  description
  numberOfVotes
  latitude
  longitude
  createdAt
  updatedAt
  userId
}
    `;
export const PetitionDocument = gql`
    query Petition($id: Int!) {
  petition(id: $id) {
    ...PetitionFields
  }
}
    ${PetitionFieldsFragmentDoc}`;

/**
 * __usePetitionQuery__
 *
 * To run a query within a React component, call `usePetitionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetitionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePetitionQuery(baseOptions: Apollo.QueryHookOptions<PetitionQuery, PetitionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PetitionQuery, PetitionQueryVariables>(PetitionDocument, options);
      }
export function usePetitionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PetitionQuery, PetitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PetitionQuery, PetitionQueryVariables>(PetitionDocument, options);
        }
export type PetitionQueryHookResult = ReturnType<typeof usePetitionQuery>;
export type PetitionLazyQueryHookResult = ReturnType<typeof usePetitionLazyQuery>;
export type PetitionQueryResult = Apollo.QueryResult<PetitionQuery, PetitionQueryVariables>;
export const PetitionCreateDocument = gql`
    mutation PetitionCreate($input: PetitionCreateInput!) {
  petitionCreate(input: $input) {
    petition {
      ...PetitionFields
    }
  }
}
    ${PetitionFieldsFragmentDoc}`;
export type PetitionCreateMutationFn = Apollo.MutationFunction<PetitionCreateMutation, PetitionCreateMutationVariables>;

/**
 * __usePetitionCreateMutation__
 *
 * To run a mutation, you first call `usePetitionCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePetitionCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [petitionCreateMutation, { data, loading, error }] = usePetitionCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePetitionCreateMutation(baseOptions?: Apollo.MutationHookOptions<PetitionCreateMutation, PetitionCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PetitionCreateMutation, PetitionCreateMutationVariables>(PetitionCreateDocument, options);
      }
export type PetitionCreateMutationHookResult = ReturnType<typeof usePetitionCreateMutation>;
export type PetitionCreateMutationResult = Apollo.MutationResult<PetitionCreateMutation>;
export type PetitionCreateMutationOptions = Apollo.BaseMutationOptions<PetitionCreateMutation, PetitionCreateMutationVariables>;
export const PetitionUpdateDocument = gql`
    mutation PetitionUpdate($input: PetitionUpdateInput!) {
  petitionUpdate(input: $input) {
    petition {
      ...PetitionFields
    }
  }
}
    ${PetitionFieldsFragmentDoc}`;
export type PetitionUpdateMutationFn = Apollo.MutationFunction<PetitionUpdateMutation, PetitionUpdateMutationVariables>;

/**
 * __usePetitionUpdateMutation__
 *
 * To run a mutation, you first call `usePetitionUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePetitionUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [petitionUpdateMutation, { data, loading, error }] = usePetitionUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePetitionUpdateMutation(baseOptions?: Apollo.MutationHookOptions<PetitionUpdateMutation, PetitionUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PetitionUpdateMutation, PetitionUpdateMutationVariables>(PetitionUpdateDocument, options);
      }
export type PetitionUpdateMutationHookResult = ReturnType<typeof usePetitionUpdateMutation>;
export type PetitionUpdateMutationResult = Apollo.MutationResult<PetitionUpdateMutation>;
export type PetitionUpdateMutationOptions = Apollo.BaseMutationOptions<PetitionUpdateMutation, PetitionUpdateMutationVariables>;
export const PetitionsDocument = gql`
    query Petitions {
  petitions {
    ...PetitionFields
  }
}
    ${PetitionFieldsFragmentDoc}`;

/**
 * __usePetitionsQuery__
 *
 * To run a query within a React component, call `usePetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePetitionsQuery(baseOptions?: Apollo.QueryHookOptions<PetitionsQuery, PetitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PetitionsQuery, PetitionsQueryVariables>(PetitionsDocument, options);
      }
export function usePetitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PetitionsQuery, PetitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PetitionsQuery, PetitionsQueryVariables>(PetitionsDocument, options);
        }
export type PetitionsQueryHookResult = ReturnType<typeof usePetitionsQuery>;
export type PetitionsLazyQueryHookResult = ReturnType<typeof usePetitionsLazyQuery>;
export type PetitionsQueryResult = Apollo.QueryResult<PetitionsQuery, PetitionsQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  user(id: $id) {
    ...CurrentUser
  }
}
    ${CurrentUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserCreateDocument = gql`
    mutation UserCreate($input: UserCreateInput!) {
  userCreate(input: $input) {
    user {
      ...CurrentUser
    }
    token
  }
}
    ${CurrentUserFragmentDoc}`;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserLoginDocument = gql`
    mutation UserLogin($input: UserLoginInput!) {
  userLogin(input: $input) {
    user {
      ...CurrentUser
    }
    token
  }
}
    ${CurrentUserFragmentDoc}`;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const VoteCreateDocument = gql`
    mutation VoteCreate($input: VoteCreateInput!) {
  voteCreate(input: $input) {
    vote {
      id
    }
  }
}
    `;
export type VoteCreateMutationFn = Apollo.MutationFunction<VoteCreateMutation, VoteCreateMutationVariables>;

/**
 * __useVoteCreateMutation__
 *
 * To run a mutation, you first call `useVoteCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteCreateMutation, { data, loading, error }] = useVoteCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoteCreateMutation(baseOptions?: Apollo.MutationHookOptions<VoteCreateMutation, VoteCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteCreateMutation, VoteCreateMutationVariables>(VoteCreateDocument, options);
      }
export type VoteCreateMutationHookResult = ReturnType<typeof useVoteCreateMutation>;
export type VoteCreateMutationResult = Apollo.MutationResult<VoteCreateMutation>;
export type VoteCreateMutationOptions = Apollo.BaseMutationOptions<VoteCreateMutation, VoteCreateMutationVariables>;