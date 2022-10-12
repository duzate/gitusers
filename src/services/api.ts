import axios from "axios";

const api = axios.create(
  {
    baseURL: 'https://api.github.com/users'
  }
);

export const useApi = () => 
  (
    {
      login: async (username: string) => {
        const response = await api.get(`${username}`)
        return response.data;
      },
      repos: async (username: string) => {
        const response = await api.get(`${username}/repos`)
        return response.data;
      },
      followers: async (username: string) => {
        const response = await api.get(`${username}/followers`)
        return response.data;
      },
      following: async (username: string) => {
        const response = await api.get(`${username}/following`)
        return response.data;
      },
    }
  )

