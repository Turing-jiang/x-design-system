import { Button } from '@components/button/Button'

export interface GeneralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  disabled?: boolean
}

export default function GeneralButton({ children, onClick, ...props }: GeneralButtonProps) {
  return (
    <Button
      bgDisableCol="dark:bg-gs-depth-4-dark bg-gs-depth-4"
      bgDefalutCol="dark:bg-gs-depth-4-dark bg-gs-depth-4"
      bgHoverCol="dark:bg-gs-depth-5-dark bg-gs-depth-5"
      bgActiveCol="dark:bg-gs-depth-6-dark bg-gs-depth-6"
      textDisableCol="dark:text-gs-depth-6-dark text-gs-depth-6"
      textDefaultCol="dark:text-navy-depth-5-dark text-navy-depth-5"
      textHoverCol="dark:text-navy-depth-6-dark text-navy-depth-6"
      textActiveCol="dark:text-navy-depth-6-dark text-navy-depth-6"
      className="px-[15px] py-[3px]"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}
