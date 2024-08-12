import React, { createContext, useState, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type stateType = 'default' | 'hover' | 'active' | 'disabled'
type shapeType = 'fixed' | 'hug'

const stateVariants = cva(
  'inline-flex items-center justify-center transition-colors font-medium leading-[125%]',
  {
    variants: {
      shape: {
        fixed: 'w-[132px] py-[10px] px-[12px]',
        hug: 'px-[16px] py-[8px]'
      },
      rounded: {
        default: 'rounded-[8px]',
        filter: 'rounded-[5px]',
        search: 'rounded-[5px]',
        menu: 'rounded-[4px]'
      }
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof stateVariants> {
  children?: React.ReactElement | string
  disabled?: boolean
  shape?: shapeType
  bgDisableCol?: string
  bgDefalutCol?: string
  bgHoverCol?: string
  bgActiveCol?: string
  textDisableCol?: string
  textDefaultCol?: string
  textHoverCol?: string
  textActiveCol?: string
}

export const ButtonContext = createContext<{ state: stateType }>({ state: 'default' })

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled = false,
      children,
      bgDisableCol,
      bgDefalutCol,
      bgHoverCol,
      bgActiveCol,
      textDisableCol,
      textDefaultCol,
      textHoverCol,
      textActiveCol,
      shape,
      rounded = 'default',
      onClick,
      ...props
    },
    ref
  ) => {
    const [state, setState] = useState<stateType>('default')
    const [bgCol, setBgCol] = useState<string | undefined>(bgDefalutCol)
    const [textCol, setTextCol] = useState<string | undefined>(textDefaultCol)

    useEffect(() => {
      if (disabled) {
        setState('disabled')
      }
    }, [disabled])

    useEffect(() => {
      switch (state) {
        case 'hover':
          console.log('horver')
          setBgCol(bgHoverCol)
          setTextCol(textHoverCol)
          break
        case 'active':
          console.log('active')
          setBgCol(bgActiveCol)
          setTextCol(textActiveCol)
          break
        case 'disabled':
          setBgCol(bgDisableCol)
          setTextCol(textDisableCol)
          break
        default:
          setBgCol(bgDefalutCol)
          setTextCol(textDefaultCol)
          break
      }
    }, [state])

    function handleMouseEnter() {
      if (!disabled && state !== 'active') setState('hover')
    }

    function handleMouseLeave() {
      if (!disabled && state !== 'active') {
        setState('default')
      }
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      if (!disabled && state !== 'active') setState('active')

      if (onClick) {
        onClick(event)
      }
    }

    return (
      <button
        className={cn(stateVariants({ shape, rounded }), bgCol, textCol, className)}
        ref={ref}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <ButtonContext.Provider value={{ state }}>{children}</ButtonContext.Provider>
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
