import React, { ReactElement } from 'react'

import Project from './types/project.type'

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
            <div
              key={`${project.name}-${idx}`}
              className="rounded-full bg-theme_periwinkle text-sm inline-block px-7 py-1 mr-1 mb-1"
            >
              {tag}
            </div>
          )
        })}
      </div>

      <div className="bg-gray-300 rounded-r-xl">
        <a href={project.repo}>
          GitHub
        </a>
        <a href={project.link}>
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default Card
