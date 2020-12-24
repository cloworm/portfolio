import React, { ReactElement, useState } from 'react'

import Card from './card'
import Project from './types/project.type'

const Projects = (): ReactElement => {
  const [projects] = useState<Project[]>([
    {
      year: 2020,
      name: 'Countdown',
      description: 'Countdown timer with 3D flip animations',
      tags: [
        'React',
        'Next.js',
        'Vercel',
        'Tailwind CSS'
      ],
      repo: 'https://github.com/cloworm/countdown',
      link: 'https://countdown.cloworm.vercel.app/',
    }
  ])
  return (
    <div className="bg-gray-50">
      <div className="px-20 py-10">
        <h2 className="text-3xl font-extralight tracking-widest pb-12">
        PROJECTS
        </h2>
        {
          projects.map((project) => <Card key={project.name} project={project} />)
        }
      </div>
    </div>
  )
}

export default Projects
