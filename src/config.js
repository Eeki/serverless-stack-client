export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-uploads-eliels"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://9p06bft75d.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_nrP5QgCmS",
    APP_CLIENT_ID: "5eiajs17t1e7p970lhg6m8gr9p",
    IDENTITY_POOL_ID: "eu-central-1:23cbca6d-0e51-4972-93d4-fa51e60ac2b1"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51H9ZudHO84VYracJTqma88qHJA9R3wGSWIhEK0iOEO5ynOdsAKotdF7kzgTSAhbWrdu8bPZw06QucwvE89O4TYFn00i8aoz4bS"
};