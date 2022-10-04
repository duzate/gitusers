import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './providers/Auth'
import { ReposProvider } from './providers/Repos'
import { SelectProvider } from './providers/Select'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FollowersProvider } from './providers/Followers'
import { FollowingProvider } from './providers/Following'
console.log(window.location.pathname);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ReposProvider>
        <FollowersProvider>
          <FollowingProvider>
            <SelectProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </SelectProvider>
          </FollowingProvider>
        </FollowersProvider>
      </ReposProvider>
    </UserProvider>
  </React.StrictMode>
)
