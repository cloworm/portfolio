import React, { ReactElement, useCallback } from 'react'

interface Props {
  children: string
  url: string
}

const ButtonLink = ({ children, url }: Props): ReactElement => {
  const handleClick = useCallback((event) => {
    event.stopPropagation()
  }, [])

  return (
    <a
      onClick={handleClick}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-theme_frenchPink to-theme_carnationPink rounded-full font-semiBold text-white px-6 py-2"
    >
      {children}
    </a>
  )
}

export default ButtonLink
