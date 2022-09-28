/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppData = /* GraphQL */ `
  subscription OnCreateAppData($filter: ModelSubscriptionAppDataFilterInput) {
    onCreateAppData(filter: $filter) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAppData = /* GraphQL */ `
  subscription OnUpdateAppData($filter: ModelSubscriptionAppDataFilterInput) {
    onUpdateAppData(filter: $filter) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAppData = /* GraphQL */ `
  subscription OnDeleteAppData($filter: ModelSubscriptionAppDataFilterInput) {
    onDeleteAppData(filter: $filter) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGraphData = /* GraphQL */ `
  subscription OnCreateGraphData(
    $filter: ModelSubscriptionGraphDataFilterInput
  ) {
    onCreateGraphData(filter: $filter) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGraphData = /* GraphQL */ `
  subscription OnUpdateGraphData(
    $filter: ModelSubscriptionGraphDataFilterInput
  ) {
    onUpdateGraphData(filter: $filter) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGraphData = /* GraphQL */ `
  subscription OnDeleteGraphData(
    $filter: ModelSubscriptionGraphDataFilterInput
  ) {
    onDeleteGraphData(filter: $filter) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
