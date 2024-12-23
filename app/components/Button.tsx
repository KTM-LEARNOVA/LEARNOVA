import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({ href, onClick, children, className = '', disabled = false }: ButtonProps) {
  const baseClasses = 'inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed'
  const classes = `${baseClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

