var sinonChai = require('sinon-chai')
require('mocha')
var sinon = require('sinon')

var chai = require('chai')
var enzyme = require('enzyme')

require('babel-polyfill')
require('react-native-mock/mock')

import mockery from 'mockery'

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
})
mockery.registerMock('NativeModules', { RNConfig: { buildEnvironment: 'test' } })

chai.use(sinonChai)
chai.config.includeStack = true
global.expect = chai.expect
global.enzyme = enzyme
global.sinon = sinon
