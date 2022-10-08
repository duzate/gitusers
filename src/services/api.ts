import axios from "axios";
import { UserProps } from "../@types/User";

const api = axios.create(
  {
    baseURL: 'https://api.github.com/users'
  }
);

export const useApi = () => 
  (
    {
      login: async (username: string) => {
        const user:UserProps = await api.get(`${username}`)
        const repos = await api.get(`${username}/repos`)
        const followers = await api.get(`${username}/followers`)
        const following = await api.get(`${username}/following`)
        
        const data = <UserProps>{
          login: user.login,
          name: user.name,
          email: user.email,
          location: user.location,
          company: user.company,
          bio: user.bio,
          avatar_url: user.bio,
          organizations_url: user.organizations_url,
          starred_url: user.starred_url, 
          public_repos: user.public_repos, 
          public_gists: user.public_gists, 
          followers: user.followers, 
          following: user.following,
          followers_url: followers.data,
          following_url: following.data,
          repos: repos.data,
        }

        return data;
      }
    }
  )


