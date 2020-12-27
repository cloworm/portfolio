import React, { ReactElement } from 'react'

interface Props {
  children: string
}

const Chip = ({ children }: Props): ReactElement => {
  return (
    <div
      className="text-gray-400 text-sm"
    >
      {children}
    </div>
  )
}

export default Chip
