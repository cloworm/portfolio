import React, { ReactElement } from 'react'

interface Props {
  children: string
  url: string
}

const ButtonLink = ({ children, url }: Props): ReactElement => {
  return (
    <a className="cursor-pointer rounded bg-theme_indigo text-white text-sm inline-block px-7 py-1 mr-1" role="button" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default ButtonLink
