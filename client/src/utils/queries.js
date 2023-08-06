import { gql } from '@apollo/client';

export const GET_ME =gql `
me(id: $meId) {
    username
    _id
    email
    password
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}


`