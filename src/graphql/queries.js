/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      Class_link
      Homework
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Class_link
        Homework
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Class_link
        Homework
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      Name
      Email
      Subject
      Message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Email
        Subject
        Message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCandidates = /* GraphQL */ `
  query SyncCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCandidates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        Email
        Subject
        Message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
