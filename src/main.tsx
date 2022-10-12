import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './providers/Auth'
import { ReposProvider } from './providers/Repos'
import { SelectProvider } from './providers/Select'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FollowersProvider } from './providers/Followers'
import { FollowingProvider } from './providers/Following'
import { FollowProvider } from './providers/Follow'
console.log(window.location.pathname);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ReposProvider>
          <FollowersProvider>
            <FollowingProvider>
              <FollowProvider>
                <SelectProvider>
                  <App />
                </SelectProvider>
              </FollowProvider>
            </FollowingProvider>
          </FollowersProvider>
        </ReposProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
