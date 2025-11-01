import { env } from '@/commons/libs/env/env'
import { Text, View } from 'react-native'

function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  )
}

function Storybook() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('@/commons/libs/storybook').default()
}

export default env('storybookEnabled') ? Storybook : Index
