import { Button } from '@components/button/Button'

type shapeType = 'fixed' | 'hug'

export interface GeneralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  shape?: shapeType
}

export default function GeneralButton({
  children,
  onClick,
  shape = 'hug',
  ...props
}: GeneralButtonProps) {
  return (
    <Button
      bgDefalutCol="dark:bg-gs-depth-4-dark bg-gs-depth-4"
      bgHoverCol="dark:bg-gs-depth-5-dark bg-gs-depth-5"
      bgActiveCol="dark:bg-gs-depth-6-dark bg-gs-depth-6"
      textDefaultCol="dark:text-navy-depth-5-dark text-navy-depth-5"
      textHoverCol="dark:text-navy-depth-6-dark text-navy-depth-6"
      textActiveCol="dark:text-navy-depth-6-dark text-navy-depth-6"
      onClick={onClick}
      shape={shape}
      {...props}
    >
      {children}
    </Button>
  )
}
