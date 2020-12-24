import React, { ReactElement } from 'react'

import Project from './types/project.type'
import Chip from './chip'
import ButtonLink from './button-link'

interface Props {
  flipped: boolean
  project: Project
}

const Card = ({ project, flipped }: Props): ReactElement => {
  return (
    <div className="rounded-xl shadow-lg text-left grid grid-cols-2 mb-10">
      <div className={`${flipped ? 'order-1' : ''} px-8 py-8`}>
        <p className="text-sm font-semibold text-theme_pink">
          {project.year}
        </p>
        <p className="text-3xl font-bold pb-3 tracking-wide">
          {project.name}
        </p>
        <p className="pb-6 text-sm">
          {project.description}
        </p>
        {project.tags.map((tag, idx) => {
          return (
            <Chip key={`${project.name}-${idx}`}>{tag}</Chip>
          )
        })}
      </div>

      <div className={`bg-${project.bg} bg-cover ${flipped ? 'rounded-l-xl' : 'rounded-r-xl'} flex justify-center`}>
        <div className="self-end pb-4 space-x-1">
          <ButtonLink url={project.repo}>GitHub</ButtonLink>
          <ButtonLink url={project.link}>Live Demo</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Card
