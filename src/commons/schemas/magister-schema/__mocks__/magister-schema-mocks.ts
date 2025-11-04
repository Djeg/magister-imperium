import { magisterSchema } from '../magister-schema'

export const magisterMock = magisterSchema.parse({
  id: '1',
  userId: '1',
  name: 'Merlin the sorcerer',
})
