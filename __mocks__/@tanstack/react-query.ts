import { useMutationMock } from "./use-mutation.mock"

const actual = jest.requireActual('@tanstack/react-query')

export const useMutation = useMutationMock

export const useQuery = actual.useQuery

export const QueryClient = actual.QueryClient

export const QueryClientProvider = actual.QueryClientProvider

export const QueryErrorResetBoundary = actual.QueryErrorResetBoundary

export const QueryFeatureFlagProvider = actual.QueryFeatureFlagProvider

export const QueryObserver = actual.QueryObserver
