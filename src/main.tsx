import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './providers/Auth'
import { ReposProvider } from './providers/Repos'
import { SelectProvider } from './providers/Select'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ReposProvider>
        <SelectProvider>
          <App />
        </SelectProvider>
      </ReposProvider>
    </UserProvider>
  </React.StrictMode>
)
