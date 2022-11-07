import React from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'

export default function advertiseMent() {
  const params = useLocation()
  console.log(params)

  return <div>actor</div>
}
