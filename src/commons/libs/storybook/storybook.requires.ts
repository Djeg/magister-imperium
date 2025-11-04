import { start, updateView, type View } from '@storybook/react-native'

import '@storybook/addon-ondevice-actions/register'
import '@storybook/addon-ondevice-controls/register'

const normalizedStories = [
  {
    titlePrefix: '',
    directory: '../../../',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    req: require.context(
      '../../../',
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    ),
  },
]

declare global {
  var view: View
  var STORIES: typeof normalizedStories
}

const annotations = [
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./preview'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@storybook/react-native/preview'),
]

global.STORIES = normalizedStories

module?.hot?.accept?.()

if (!global.view) {
  global.view = start({
    annotations,
    storyEntries: normalizedStories,
  })
} else {
  updateView(global.view, annotations, normalizedStories)
}

// biome-ignore lint/suspicious/noRedeclare: we need to redeclare the view variable
export const view: View = global.view
