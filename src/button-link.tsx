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
    <div>
      {/* <a
        onClick={handleClick}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block neumorphic-button rounded-full font-semiBold text-white px-6 py-2 mr-2"
      >
        {children}
      </a> */}
      <a
        onClick={handleClick}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:bg-theme_frenchPink bg-gradient-to-tr from-theme_frenchPink to-theme_carnationPink rounded-full font-semiBold text-white px-6 py-2"
      >
        {children}
      </a>
    </div>
  )
}

export default ButtonLink
