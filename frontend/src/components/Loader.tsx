import { LoaderIcon } from 'lucide-react'
import React from 'react'
import { cn } from '../utils/tailwindClass'

interface LoaderProps {
  fullScreen?: boolean
  label?: string
}

export const Loader: React.FC<LoaderProps> = ({ fullScreen = false, label = 'Loading...' }) => {
  const className = cn('flex flex-col items-center justify-center gap-4', {
    'min-h-screen bg-base-100': fullScreen,
    'py-20': !fullScreen,
  })

  return (
    <div className={className}>
      <LoaderIcon className="size-10 text-primary animate-spin" />
      <p className="text-sm text-base-content/50">{label}</p>
    </div>
  )
}
