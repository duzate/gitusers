import axios from "axios";

const api = axios.create(
  {
    baseURL: 'https://api.github.com/users'
  }
);

export const useApi = () => 
  (
    {
      repos: async (username: string) => {
        const response = await api.get(`${username}/repos`)
        return response.data;
      },
      login: async (username: string) => {
        const response = await api.get(`${username}`)
        return response.data;
      }
    }
  )


