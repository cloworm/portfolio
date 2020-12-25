import React, { ReactElement } from 'react'

import Projects from './projects'

const App = (): ReactElement => {
  return (
    <div>
      <header className="min-h-screen flex justify-center items-center text-center">
        <h1 className="text-8xl">Hello</h1>
      </header>
      <Projects/>
    </div>
  )
}

export default App
