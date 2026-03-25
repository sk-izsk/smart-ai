import React from 'react'
import { Outlet } from 'react-router'

const LayoutScreen: React.FC = () => {
  return (
    <div>
      {' '}
      Layout
      <Outlet />
    </div>
  )
}

export default LayoutScreen
