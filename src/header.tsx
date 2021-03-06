import { FunctionComponent, useState, useCallback } from 'react'

import Shape from './shape'
import Worm from './worm'

interface Colors {
  light: string
  dark: string
}

const Header: FunctionComponent = () => {
  const [colors, setColors] = useState<Colors>({
    light: '#F8E5EF',
    dark: '#F9ABCE'
  })

  const handleShapeHover = useCallback(({ light, dark }: Colors): void => {
    setColors({ light, dark })
  }, [])

  return (
    <div className="relative">
      <div>
        <Worm light={colors.light} dark={colors.dark} />
      </div>

      <header className="absolute top-0 left-0 right-0 lg:px-40 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="relative">
          <div className="absolute -top-72 lg:top-16 -right-3 lg:-right-10" onMouseEnter={() => handleShapeHover({ light: '#E9E7FD', dark: '#AC70EA' })} >
            <Shape />
          </div>
          <div className="absolute -top-60 lg:top-24 right-12" onMouseEnter={() => handleShapeHover({ light: '#78EED0', dark: '#59AAB9' })}>
            <Shape color="green" />
          </div>
          <div className="absolute -top-56 lg:top-32 -right-5" onMouseEnter={() => handleShapeHover({ light: '#F8E5EF', dark: '#FF6194' })}>
            <Shape color="pink" />
          </div>
          <h1 className="text-3xl pb-1 text-white">Hi, I&apos;m Chloe Echikson</h1>
          <div className="text-left pb-1">
            <a className="transition-all text-white hover:text-theme_aquamarine" href="https://www.linkedin.com/in/chloeechikson" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
              <svg className="inline" width="30px" height="30px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="pl-2 text-3xl align-middle">
                chloe.echikson
              </span>
            </a>
          </div>
          <div className="text-left">
            <a className="transition-all text-white hover:text-theme_aquamarine" href="http://github.com/cloworm" aria-label="github" target="_blank" rel="noopener noreferrer">
              <svg className="inline" width="30px" height="30px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span className="pl-2 text-3xl align-middle">
                cloworm
              </span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-col bg-theme_ghostWhite absolute bottom-0 left-0 right-0 flex flex-row items-center justify-center z-10 pt-14 clip-ellipse">
        <a href="#projects">
          <p className="font-light text-base tracking-wider">PROJECTS</p>
        </a>
        <div className="animate-bounce">
          <a href="#projects">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Header
