import Amplify from '@aws-amplify/core'
import Storage from '@aws-amplify/storage'

import { read, create, update, destroy, list } from './src'

const init = (awsExports, level) => {
  Amplify.configure(awsExports)
  const _level = level ? level : 'private'
  Storage.configure({ level: _level })
}

export {
  init,
  read,
  create,
  update,
  destroy,
  list
}
