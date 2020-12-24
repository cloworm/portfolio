import React, { ReactElement } from 'react'

import Project from './types/project.type'
import Chip from './chip'
import ButtonLink from './button-link'

interface Props {
  project: Project
}

const Card = ({ project }: Props): ReactElement => {
  return (
    <div className="rounded-xl shadow-lg text-left grid grid-cols-2">
      <div className="px-8 py-8">
        <p className="text-sm font-semibold text-theme_pink">
          {project.year}
        </p>
        <p className="text-3xl font-bold tracking-wide">
          {project.name}
        </p>
        <p className="pb-4">
          {project.description}
        </p>
        {project.tags.map((tag, idx) => {
          return (
            <Chip key={`${project.name}-${idx}`}>{tag}</Chip>
          )
        })}
      </div>

      <div className="bg-gray-300 rounded-r-xl">
        <ButtonLink url={project.repo}>GitHub</ButtonLink>
        <ButtonLink url={project.link}>Live Demo</ButtonLink>
      </div>
    </div>
  )
}

export default Card
