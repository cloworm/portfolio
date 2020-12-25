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
    <div className="relative rounded-xl group hover:border-transparent hover:shadow-xl shadow transition-all text-left grid lg:grid-cols-2 mb-10 transform hover:scale-105">
      <div className={`${flipped ? 'lg:order-1 lg:rounded-r-xl order-2' : 'lg:rounded-l-xl'} px-8 py-8 bg-white order-2`}>
        <p className="text-sm font-semibold text-theme_pink">
          {project.year}
        </p>
        <div className="pb-3">
          <div className="float-right space-x-2">
            <ButtonLink url={project.repo}>Source</ButtonLink>
            <ButtonLink url={project.link}>Demo</ButtonLink>
          </div>
          <p className="text-2xl font-bold tracking-wide align-center">
            {project.name}
          </p>
        </div>
        <p className="pb-10 text-sm">
          {project.description}
        </p>
        {project.tags.map((tag, idx) => {
          return (
            <div key={`${project.name}-div${idx}`} className="inline-block">
              <Chip key={`${project.name}-${idx}`}>{tag}</Chip>
            </div>
          )
        })}

      </div>

      <div style={{ backgroundImage: project.bgImage }} className={`bg-cover ${project.bgPosition ? project.bgPosition : 'bg-left-top'} bg-no-repeat ${flipped ? 'rounded-t-xl lg:rounded-l-xl' : 'rounded-t-xl lg:rounded-r-xl'} flex justify-center border-4 border-white h-40`}>
      </div>
    </div>
  )
}

export default Card
