import { promisify } from 'util'

import { getData, save, remove, listItems } from './s3'

const _create = (dir, file, data, done) => {
  save(`${dir}/${file}`, data, (err, res) => {
    if (!err && res) {
      done(false, res)
    } else {
      done('Cannot create new item.')
    }
  })
}

const _read = (dir, file, done) => {
  getData(`${dir}/${file}`, (err, data) => {
    if (!err && data) {
      done(false, data)
    } else {
      done('Cannot read.')
    }
  })
}

const _update = (dir, file, newData, done) => {
  getData(`${dir}/${file}`, (err, data) => {
    if (!err && data) {
      remove(`${dir}/${file}`, (err, removed) => {
        if (!err && removed) {
          save(`${dir}/${file}`, newData, (err, res) => {
            if (!err && res) {
              done(false, res)
            } else {
              done('Cannot save new data.')
            }
          })
        } else {
          done('Error truncating old data.')
        }
      })
    } else {
      done('Cannot open for updating.')
    }
  })
}

const _destroy = (dir, file, done) => {
  remove(`${dir}/${file}`, (err, res) => {
    if (!err && res) {
      done(false, res)
    } else {
      done('Cannot delete.')
    }
  })
}

const _list = (dir, done) => {
  listItems(`${dir}/`, (err, data) => {
    if (!err && data) {
      done(false, data)
    } else {
      done('Cannot list.')
    }
  })
}

export const read = promisify(_read)
export const create = promisify(_create)
export const update = promisify(_update)
export const destroy = promisify(_destroy)
export const list = promisify(_list)
