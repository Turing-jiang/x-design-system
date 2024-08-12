import * as React from 'react'
import { cn } from '@/lib/utils'

type stateType = 'default' | 'hover' | 'active' | 'disabled' | 'subActive'

export interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  disabledSrc: string
  defaultSrc: string
  hoverSrc: string
  activeSrc: string
  subActiveSrc?: string
  state: stateType
}

export const Icon: React.FC<IconProps> = ({
  className,
  state = 'default',
  defaultSrc,
  hoverSrc,
  activeSrc,
  disabledSrc,
  subActiveSrc = activeSrc,
  ...props
}) => {
  const srcMap = {
    disabled: disabledSrc,
    default: defaultSrc,
    hover: hoverSrc,
    active: activeSrc,
    subActive: subActiveSrc
  }

  return (
    <img
      src={srcMap[state]}
      alt={`${state} icon`}
      className={cn('inline-block', className)}
      {...props}
    />
  )
}

Icon.displayName = 'Icon'
