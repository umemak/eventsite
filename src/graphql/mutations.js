/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      date
      place
      open
      close
      entrants {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      exits {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      documents {
        items {
          id
          url
          createdAt
          updatedAt
          eventDocumentsId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          eventCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      date
      place
      open
      close
      entrants {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      exits {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      documents {
        items {
          id
          url
          createdAt
          updatedAt
          eventDocumentsId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          eventCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      date
      place
      open
      close
      entrants {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      exits {
        items {
          id
          name
          createdAt
          updatedAt
          eventEntrantsId
          eventExitsId
        }
        nextToken
      }
      documents {
        items {
          id
          url
          createdAt
          updatedAt
          eventDocumentsId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          eventCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      eventExitsId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      eventExitsId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      eventExitsId
    }
  }
`;
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      url
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventDocumentsId
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      id
      url
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventDocumentsId
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      id
      url
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventDocumentsId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      eventCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      eventCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      event {
        id
        name
        date
        place
        open
        close
        entrants {
          nextToken
        }
        exits {
          nextToken
        }
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      eventCommentsId
    }
  }
`;
