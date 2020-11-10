import React from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.route'

const Routes: React.FC = () => {
  const isLogged = false

  return isLogged ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
