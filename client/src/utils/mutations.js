import { gql } from '@apollo/client';
export const LOGIN_USER =gql `
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }

`
export const ADD_USER =gql `

mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
     
        email
        password
      }
    }
  }
  

`
export const SAVE_BOOK = gql `



`
export const REMOVE_BOOK = gql `

mutation Mutation($userId: ID!, $bookId: String!) {
    removeBook(userId: $userId, bookId: $bookId) {
      _id
      savedBooks {
        bookId
      }
    }
  }

`