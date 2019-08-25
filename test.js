const { init }  = require('./index.js')

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:0394333b-175e-4931-874f-5da0283f883e",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_RT9INIatI",
    "aws_user_pools_web_client_id": "3igs2qog30g4tk3o32jgfccdlf",
    "aws_user_files_s3_bucket": "users-cubed-s36e7171846a7c45dfb0762fb4aaaf33da-prod",
    "aws_user_files_s3_bucket_region": "us-east-1"
}

init(awsmobile)
