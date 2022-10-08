export type UserProps = {
    login: string;
    name: string;
    email: string;
    location: string;
    company: string;
    bio: string;
    avatar_url: string;
    organizations_url: string
    starred_url: string, 
    public_repos: string, 
    public_gists: string, 
    followers: string, 
    following: string
    followers_url: [
    {
      id: string,
      login: string,
      avatar_url: string,
      url: string,
    }
  ];
  following_url: [
    {
      id: string,
      login: string,
      avatar_url: string,
      url: string,
    }
  ];
  repos: [
    {
      id: string,
      name: string,
      description: string,
      private: boolean,
      stargazers_count: string,
    } 
  ]
}