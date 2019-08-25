# AWS S3 JSON Database

This is simple, fast, small (12.5 KB), no dependencies, local disk, table-level Node.js JSON database, which we often use in large development workloads.

## Preparation

```bash
# system preparation:
npm install -g @aws-amplify/cli
amplify configure

# project:
npm i -S @talaikis/s3-db
amplify init
amplify add storage
amplify push
```
After these operations you will have `aws-exports.js` configuration file, which you will be able to use for this library `init()`

### Example aws-exports.js

```json
{
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:XXX-XXX-XXX-XXX-XXX",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-XXX",
    "aws_user_pools_web_client_id": "XXX",
    "oauth": {},
    "aws_user_files_s3_bucket": "s3-XXX-default",
    "aws_user_files_s3_bucket_region": "us-east-1"
}
```

## Fucntions

All functions need `baseDir`, where the database is stored. For example: `join(__dirname, '.data')`.

### Create item in a table

```js
import { init, create } from '@talaikis/s3-db'
init(awsexports, 'private')
await create(table, itemName, jsonData).catch((e) => ...)
```

### Read item from the table

```js
import { read } from '@talaikis/s3-db'
const jsonData = await read(table, itemName).catch((e) => ...)
```

### Update the item in a table

```js
import { update } from '@talaikis/s3-db'
await update(table, itemName, newJsonData).catch((e) => ...)
```

### Delete item from the table

```js
import { destroy } from '@talaikis/s3-db'
await destroy(table, itemName).catch((e) => ...)
```

### List table items

```js
import { list } from '@talaikis/s3-db'
await list(table).catch((e) => ...)
```

### Delete table (@TODO!)

```js
import { destroyTable } from '@talaikis/s3-db'
await destroyTable(table).catch((e) => ...)
```

## TODO

* list tables
* delete table
* row level ops (?)
* fix list items mock test

## Test

```bash
amplify init
amplify add storage
amplify push
amplify mock storage

# other terminal window:
npm run test
```

## Licence

MIT
