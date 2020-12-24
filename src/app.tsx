import React, { ReactElement } from 'react'

import Projects from './projects'

const App = (): ReactElement => {
  return (
    <div className="min-h-screen text-center">
      <header>
        <h1 className="text-8xl">Hello</h1>
      </header>
      <Projects/>
    </div>
  )
}

export default App
