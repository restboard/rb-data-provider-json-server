import t from 'tap'
import createProvider from '../src/index.js'

t.test('getOne', async t => {
  const provider = createProvider('https://jsonplaceholder.typicode.com')
  const id = 1
  const res = await provider.getOne('posts', id)
  t.equal(
    res.data.id,
    id,
    'should return the resource identified by the passed id'
  )
})
