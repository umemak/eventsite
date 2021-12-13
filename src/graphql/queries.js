/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        event {
          id
          name
          date
          place
          open
          close
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        eventEntrantsId
        eventExitsId
      }
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        event {
          id
          name
          date
          place
          open
          close
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        eventDocumentsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        event {
          id
          name
          date
          place
          open
          close
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        eventCommentsId
      }
      nextToken
    }
  }
`;
