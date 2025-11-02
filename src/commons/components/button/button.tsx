import type { ComponentProps } from 'react'
import { styled, Button as TamaguiButton } from 'tamagui'
import type { Except } from 'type-fest'
import {
  DecoratedFrame,
  type DecoratedFrameProps,
  type DecoratedFrameSize,
} from '../decorated-frame/decorated-frame'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type ButtonProps = Except<
  ComponentProps<typeof TamaguiButton>,
  'size'
> & {
  frameProps?: DecoratedFrameProps
  frameSize?: DecoratedFrameSize
  size?: ButtonSize
}

export function Button({
  size = 'md',
  frameSize = 'md',
  frameProps,
  ...props
}: ButtonProps) {
  return (
    <DecoratedFrame size={frameSize} {...frameProps}>
      <DecoratedButton decoratedSize={size} {...props} />
    </DecoratedFrame>
  )
}

const DecoratedButton = styled(TamaguiButton, {
  rounded: 0,
  fontWeight: 'bold',
  color: 'black',

  variants: {
    decoratedSize: {
      sm: {
        fontSize: '$3',
        px: '$3',
        py: '$1',
      },
      md: {
        fontSize: '$4',
        px: '$4',
        py: '$2',
      },
      lg: {
        fontSize: '$6',
        px: '$6',
        py: '$2',
      },
      xl: {
        fontSize: '$8',
        px: '$7',
        py: '$2',
      },
    } as const,
  },
})
