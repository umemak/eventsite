/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
