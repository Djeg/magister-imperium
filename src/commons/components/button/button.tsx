import {
  DecoratedFrame,
  type DecoratedFrameProps,
  type DecoratedFrameSize,
} from '@/commons/components/decorated-frame/decorated-frame'
import type { ComponentProps } from 'react'
import { styled, Button as TamaguiButton, Text, XStack } from 'tamagui'
import type { Except } from 'type-fest'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type ButtonProps = Except<
  ComponentProps<typeof TamaguiButton>,
  'size'
> & {
  frameProps?: DecoratedFrameProps
  frameSize?: DecoratedFrameSize
  size?: ButtonSize
  stretch?: boolean
}

export function Button({
  size = 'md',
  frameSize = 'md',
  frameProps,
  stretch = false,
  ...props
}: ButtonProps) {
  return (
    <DecoratedFrame
      size={frameSize}
      flex={stretch ? 1 : undefined}
      {...frameProps}
    >
      <DecoratedButton decoratedSize={size} {...props} />
    </DecoratedFrame>
  )
}

export type ButtonGroupProps = ComponentProps<typeof XStack>

function Group(props: ButtonGroupProps) {
  return <XStack gap="$2" items="center" {...props}></XStack>
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

const Horizontal = styled(XStack, {
  gap: '$2',
  items: 'stretch',
})

const Label = styled(Text, {
  fontWeight: 'bold',
  color: 'black',
})

Button.Group = Group
Button.Horizontal = Horizontal
Button.Label = Label
