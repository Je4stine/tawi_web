/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppData = /* GraphQL */ `
  mutation CreateAppData(
    $input: CreateAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    createAppData(input: $input, condition: $condition) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateAppData = /* GraphQL */ `
  mutation UpdateAppData(
    $input: UpdateAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    updateAppData(input: $input, condition: $condition) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteAppData = /* GraphQL */ `
  mutation DeleteAppData(
    $input: DeleteAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    deleteAppData(input: $input, condition: $condition) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createGraphData = /* GraphQL */ `
  mutation CreateGraphData(
    $input: CreateGraphDataInput!
    $condition: ModelGraphDataConditionInput
  ) {
    createGraphData(input: $input, condition: $condition) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
export const updateGraphData = /* GraphQL */ `
  mutation UpdateGraphData(
    $input: UpdateGraphDataInput!
    $condition: ModelGraphDataConditionInput
  ) {
    updateGraphData(input: $input, condition: $condition) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
export const deleteGraphData = /* GraphQL */ `
  mutation DeleteGraphData(
    $input: DeleteGraphDataInput!
    $condition: ModelGraphDataConditionInput
  ) {
    deleteGraphData(input: $input, condition: $condition) {
      deviceID
      moisture
      ph
      TDS
      createdAt
      updatedAt
    }
  }
`;
