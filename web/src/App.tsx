
import { RedwoodProvider } from '@redwoodjs/web'


import './index.css'

const App = () => {
  return (
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <div>Test project...</div>
      </RedwoodProvider>
  )
}

export default App
