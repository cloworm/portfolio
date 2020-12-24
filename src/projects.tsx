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
        'Tailwind CSS',
        'responsive',
      ],
      repo: 'https://github.com/cloworm/countdown',
      link: 'https://countdown.cloworm.vercel.app/',
      bg: 'countdown',
    },
    {
      year: 2020,
      name: 'Todo App',
      description: 'Todo App with sortable items and light/dark mode',
      tags: [
        'React',
        'Next.js',
        'Netlify',
        'Tailwind CSS',
        'Framer Motion',
        'responsive',
      ],
      repo: 'https://github.com/cloworm/todo',
      link: 'https://cloworm-todo.netlify.app/',
      bg: 'todo',
    },
  ])
  return (
    <div className="bg-gray-50">
      <div className="px-20 py-10">
        <h2 className="text-3xl font-extralight tracking-widest pb-12">
        PROJECT SHOWCASE
        </h2>
        {
          projects.map((project, idx) => <Card key={project.name} project={project} flipped={idx % 2 !== 0} />)
        }
      </div>
    </div>
  )
}

export default Projects
