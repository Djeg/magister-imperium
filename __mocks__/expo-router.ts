import { expoRouterMock } from './expo-router-mock'

const actual = jest.requireActual('expo-router')

module.exports = {
  ...actual,
  router: expoRouterMock,
}
