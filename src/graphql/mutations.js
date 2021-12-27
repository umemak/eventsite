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
      userID
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
      userID
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
      userID
      createdAt
      updatedAt
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
      eventID
      userID
      createdAt
      updatedAt
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
      eventID
      userID
      createdAt
      updatedAt
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
      eventID
      userID
      createdAt
      updatedAt
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
      content
      eventID
      userID
      createdAt
      updatedAt
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
      content
      eventID
      userID
      createdAt
      updatedAt
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
      content
      eventID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createEventUser = /* GraphQL */ `
  mutation CreateEventUser(
    $input: CreateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    createEventUser(input: $input, condition: $condition) {
      id
      status
      eventID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateEventUser = /* GraphQL */ `
  mutation UpdateEventUser(
    $input: UpdateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    updateEventUser(input: $input, condition: $condition) {
      id
      status
      eventID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventUser = /* GraphQL */ `
  mutation DeleteEventUser(
    $input: DeleteEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    deleteEventUser(input: $input, condition: $condition) {
      id
      status
      eventID
      userID
      createdAt
      updatedAt
    }
  }
`;
