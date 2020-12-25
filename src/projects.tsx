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
      bgPosition: 'bg-center',
      bgImage: 'url(\'https://user-images.githubusercontent.com/5566310/103051331-942dae80-4564-11eb-8d6e-7b757d03e8c8.png\')',
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
      bgPosition: 'bg-center',
      bgImage: 'url(\'https://user-images.githubusercontent.com/5566310/102437990-7c48ae80-3fe9-11eb-8bf1-ef0ae5b72767.png\')'
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
      bgImage: 'url(\'https://user-images.githubusercontent.com/5566310/102733370-25a1e400-430b-11eb-9bb4-852053c4fb4c.png\')'
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
      bgPosition: 'bg-center',
      bgImage: 'url(\'https://user-images.githubusercontent.com/5566310/103108017-cd702800-4611-11eb-8da0-bf617623839b.png\')'
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
      repo: 'https://github.com/cloworm/regex-playground',
      link: 'http://regex-playground.cloworm.com/',
      bg: 'regex',
      bgImage: 'url(\'https://user-images.githubusercontent.com/5566310/103107945-17a4d980-4611-11eb-9fba-d70261ed555a.png\')'
    },
  ])
  return (
    <div className="bg-gradient-to-b from-theme_lilac to-theme_periwinkle flex justify-center">
      <div className="px-4 md:px-10 lg:px-20 xl:w-1/2 py-20">
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
