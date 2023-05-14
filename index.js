const { MongoClient } = require('mongodb')

const user = 'admin01'
const password = 'WU74XrBCRRnpfcJE'

const client = new MongoClient(
  `mongodb+srv://${user}:${password}@cluster0.rcjcxkp.mongodb.net/?retryWrites=true&w=majority`
)

const start = async () => {
  try {
    await client.connect()
    console.log('Connected')
    await client.db().createCollection('users')
    const users = client.db().collection('users')
    users.insertOne({ name: 'John', age: 25 })
    const user = await users.findOne({ name: 'John' })
    console.log(user)
  } catch (err) {
    console.log(err)
  }
}

start()
