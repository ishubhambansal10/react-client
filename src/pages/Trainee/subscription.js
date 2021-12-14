import { gql } from '@apollo/client';

const USER_UPDATED_SUBSCRIPTION = gql`
  subscription {
    userUpdated {
      message
      data {
        originalId
        name
        email
      }
      status
    }
  }
`;

const USER_DELETED_SUBSCRIPTION = gql`
  subscription {
    userDeleted {
      message
      originalId
      status
    }
  }
`;

export { USER_UPDATED_SUBSCRIPTION, USER_DELETED_SUBSCRIPTION };
