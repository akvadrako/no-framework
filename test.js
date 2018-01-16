
const index = require('./index')
const assert = require('assert')

describe('no framework', function() {
  it('exists', function(done) {
    assert.notStrictEqual(index, undefined)
    done()
  })
})
