import { supabaseMock } from "@/commons/libs/supabase/__mocks__/supabase.mocks"

const actual = jest.requireActual('@supabase/supabase-js')

actual.createClient = jest.fn().mockReturnValue(supabaseMock)

module.exports = actual
