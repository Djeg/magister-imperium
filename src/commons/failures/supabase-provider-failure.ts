import { failure } from '@/commons/libs/failure/failure'

export class SupabaseProviderFailure extends failure.named(
  'commons/failures/supabase-provider-failure',
) {}
