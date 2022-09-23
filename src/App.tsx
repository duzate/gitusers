import {RouterProvider } from 'react-router-dom'
import GlobalStyle from './global/styles/Global'
import router from './router'
const App = () => {

  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
