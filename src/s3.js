import Storage from '@aws-amplify/storage'
import { get } from 'axios'

export const getData = (id, done) => {
  Storage.vault.get(id)
    .then((res) => {
      get(res).then((response) => {
        if (typeof response.data === 'object') {
          done(false, response.data)
        } else {
          done('No such data.')
        }
      }).catch((error) => {
        done(error)
      })
    })
    .catch((err) => done(err))
}

export const save = (id, data, done) => {
  data = typeof data === 'object' ? JSON.stringify(data) : false
  if (data) {
    Storage.put(id, data, {
      contentType: 'text/plain'
    }).then((res) => done(false, res))
      .catch((err) => done(err))
  } else {
    done('Data should be an object.')
  }
}

export const remove = (id, done) => {
  Storage.remove(id)
    .then((res) => done(false, res))
    .catch((err) => done(err))
}

export const listItems = (dir, done) => {
  Storage.list(`${dir}/`)
    .then((res) => done(false, res))
    .catch((err) => done(err))
}
