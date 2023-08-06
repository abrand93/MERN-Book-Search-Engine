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

mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
     
        email
        password
      }
    }
  }
  

`

export const REMOVE_BOOK = gql `

mutation RemoveBook($userId: ID!, $bookId: String!) {
    removeBook(userId: $userId, bookId: $bookId) {
      _id
      savedBooks {
        bookId
      }
    }
  }

`
export const SAVE_BOOK = gql `

mutation Mutation($userId: ID!, $input: InputBook) {
    savedBook(userId: $userId, input: $input) {
      _id
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
  }


`