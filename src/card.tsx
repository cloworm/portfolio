import React, { ReactElement } from 'react'

import Chip from './chip'
import ButtonLink from './button-link'

interface Props {
  year: number
  name: string
  description: string
  repo: string
  link: string
  bgImage: string
  bgPosition?: string
  flipped: boolean
  tags: string[]
}

const Card = ({
  year,
  name,
  description,
  repo,
  link,
  bgImage,
  bgPosition,
  flipped,
  tags,
}: Props): ReactElement => {
  return (
    <div className="relative rounded-xl group hover:border-transparent hover:shadow-xl shadow transition-all text-left grid lg:grid-cols-2 mb-10 transform hover:scale-105">
      <div className={`${flipped ? 'lg:order-1 lg:rounded-r-xl' : 'lg:rounded-l-xl'} px-8 py-8 bg-white`}>
        <p className="text-sm font-semibold text-theme_pink">
          {year}
        </p>
        <div className="pb-3">
          <div className="float-right space-x-2">
            <ButtonLink url={repo}>Source</ButtonLink>
            <ButtonLink url={link}>Demo</ButtonLink>
          </div>
          <p className="text-2xl font-bold tracking-wide align-center">
            {name}
          </p>
        </div>
        <p className="pb-10 text-sm">
          {description}
        </p>
        {tags.map((tag, idx) => {
          return (
            <div key={`${name}-div${idx}`} className="inline-block">
              <Chip key={`${name}-${idx}`}>{tag}</Chip>
            </div>
          )
        })}
      </div>

      <div style={{ backgroundImage: bgImage }} className={`bg-cover ${bgPosition ? bgPosition : 'bg-left-top'} bg-no-repeat ${flipped ? 'rounded-l-xl' : 'rounded-r-xl'} flex justify-center border-4 border-white h-40`} />
    </div>
  )
}

export default Card
