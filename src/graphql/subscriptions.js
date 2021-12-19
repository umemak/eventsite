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
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
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
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
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
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
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
      entrants {
        items {
          id
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      entrants {
        items {
          id
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      entrants {
        items {
          id
          status
          createdAt
          updatedAt
          eventEntrantsId
          userEntrantsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      content
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
      eventCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
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
      eventCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
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
      eventCommentsId
    }
  }
`;
export const onCreateEventUser = /* GraphQL */ `
  subscription OnCreateEventUser {
    onCreateEventUser {
      id
      status
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
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        entrants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      userEntrantsId
    }
  }
`;
export const onUpdateEventUser = /* GraphQL */ `
  subscription OnUpdateEventUser {
    onUpdateEventUser {
      id
      status
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
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        entrants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      userEntrantsId
    }
  }
`;
export const onDeleteEventUser = /* GraphQL */ `
  subscription OnDeleteEventUser {
    onDeleteEventUser {
      id
      status
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
        documents {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        entrants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventEntrantsId
      userEntrantsId
    }
  }
`;
