import { useMutationMock } from './react-query-mocks'

const actual = jest.requireActual('@tanstack/react-query')

module.exports = {
  ...actual,
  useMutation: useMutationMock,
}
