// https://github.com/expo/expo/issues/36831#issuecomment-3107047371
jest.mock('expo/src/winter/ImportMetaRegistry', () => ({
  ImportMetaRegistry: {
    get url() {
      return null
    },
  },
}))

if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = object => JSON.parse(JSON.stringify(object))
}

beforeEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
})
