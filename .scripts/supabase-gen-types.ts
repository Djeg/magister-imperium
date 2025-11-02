import { $ } from 'bun'

await $`bunx supabase gen types typescript --project-id '${process.env.SUPABASE_PROJECT_ID}' --schema public > src/commons/libs/supabase/supabase.types.ts`
