import { gql } from '@apollo/client';

const CREATE_USER = gql`
mutation CreateUser($name: String!, $email: String!, $role: String!) {
  createUser (payload: {name: $name, email: $email, role: $role}) {
    message
    data {
      name
      email
      role
    }
    status
  }
}
`;
const UPDATE_USER = gql`
mutation UpdateUser($originalId: String!, $name: String!, $email: String!, $role: String!) {
  updateUser (payload: {originalId: $originalId, name: $name, email: $email, role: $role}) {
    message
    data {
      name
      email
      role
    }
    status
  }
}
`;
const DELETE_USER = gql`
mutation deleteUser($originalId: String!) {
  deleteUser (payload: {originalId: $originalId}) {
    message
    status
  }
}
`;

export { CREATE_USER, UPDATE_USER, DELETE_USER };
