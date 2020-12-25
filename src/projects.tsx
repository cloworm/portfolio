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
        'TypeScript',
        'React',
        'Next.js',
        'Vercel',
        'Tailwind CSS',
        'Responsive',
      ],
      repo: 'https://github.com/cloworm/countdown',
      link: 'https://countdown.cloworm.vercel.app/',
      bg: 'countdown',
      bgPosition: 'bg-center'
    },
    {
      year: 2020,
      name: 'Todo App',
      description: 'Todo App with sortable items and light/dark mode',
      tags: [
        'TypeScript',
        'React',
        'Next.js',
        'Recoil',
        'Netlify',
        'Tailwind CSS',
        'Framer Motion',
        'Responsive',
      ],
      repo: 'https://github.com/cloworm/todo',
      link: 'https://cloworm-todo.netlify.app/',
      bg: 'todo',
      bgPosition: 'bg-center'
    },
    {
      year: 2020,
      name: 'Shortly',
      description: 'Url shortener built on top of shrtco.de',
      tags: [
        'TypeScript',
        'React',
        'Next.js',
        'Recoil',
        'Vercel',
        'Tailwind CSS',
        'Framer Motion',
        'Responsive',
      ],
      repo: 'https://github.com/cloworm/shortly',
      link: 'https://shortly.cloworm.vercel.app/',
      bg: 'shortly',
    },
    {
      year: 2016,
      name: 'Deco',
      description: 'Augmented Reality mobile tool for interior designers',
      tags: [
        'TypeScript',
        'Ionic',
        'Angular',
        'Mobile',
        'AR',
        'Postgres',
        'Sequelize',
      ],
      repo: 'https://github.com/yuyingliu331/deco',
      link: 'https://www.youtube.com/watch?v=b7y7sqlsfZ8',
      bg: 'deco',
      bgPosition: 'bg-center'
    },
    {
      year: 2016,
      name: 'RegEx Playground',
      description: 'An update-as-you-type regular expression pattern-matcher with the ability to match multiple texts at once',
      tags: [
        'React',
        'Node',
        'Express',
        'Material UI',
      ],
      repo: 'https://github.com/yuyingliu331/deco',
      link: 'http://regex-playground.cloworm.com/',
      bg: 'regex',
    },
  ])
  return (
    <div className="bg-gradient-to-b from-theme_lilac to-theme_periwinkle flex justify-center">
      <div className="px-4 md:px-10 lg:px-20 xl:w-1/2 py-10">
        <h2 className="text-3xl font-extralight tracking-widest pb-12 text-center">
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
