/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_posts {
  __typename: "Post";
  id: number;
  content: string | null;
}

export interface Users_users {
  __typename: "User";
  id: number;
  name: string;
  posts: Users_users_posts[];
}

export interface Users {
  users: Users_users[];
}
