import { init, read, create, update, destroy, list } from '../index.js'
require('chai').use(require('chai-as-promised')).should()
const faker = require('faker')
const awsexports = require('./aws-exports')

describe('create', () => {
  it('can create items', async () => {
    init(awsexports, 'private')
    let errors = 0
    for (let t = 0; t < 10; t++) {
      for (let i = 0; i < 10; i++) {
        let jsonData = {
          users: [
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() }
          ]
        }
        await create(`${t}`, `${i}`, jsonData).catch((e) => {
          console.error(e)
          errors++
        })
        errors.should.be.equal(0)
      }
    }
  })
})

describe('read', () => {
  it('can read items', async () => {
    init(awsexports, 'private')
    let errors = 0
    for (let t = 0; t < 10; t++) {
      for (let i = 0; i < 10; i++) {
        let data = await read(`${t}`, `${i}`).catch((e) => {
          console.error(e)
          errors++
        })

        if (typeof data !== 'object') {
          errors++
        }
        errors.should.be.equal(0)
      }
    }
  })
})

describe('update', () => {
  it('can update item', async () => {
    init(awsexports, 'private')
    let errors = 0
    let data = await read('5', '6').catch((e) => {
      console.error(e)
      errors++
    })

    data.users[2].name = 'Changed'
    await update('5', '6', data).catch((e) => {
      console.error(e)
      errors++
    })

    data = await read('5', '6').catch((e) => {
      console.error(e)
      errors++
    })
    data.users[2].name.should.be.equal('Changed')
    errors.should.be.equal(0)
  })
})

describe('delete', () => {
  it('can delete item', async () => {
    init(awsexports, 'private')
    let errors = 0
    let msg = ''
    await destroy('9', '1').catch((e) => {
      console.error(e)
      errors++
    })

    await read('9', '1').catch((e) =>  msg = e)
    errors.should.be.equal(0)
    msg.should.be.equal('Cannot read.')
  })
})

/*
describe('list', () => {
  it('can list items', async () => {
    init(awsexports, 'private')
    let errors = 0
    const lst = await list('9').catch((e) =>  {
      console.error(e)
      errors++
    })
    errors.should.be.equal(0)
    lst.length.should.be.equal(9)
  })
})
*/
