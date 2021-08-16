export const REPOSITORIES_ACTIONS = {
  SET_REPOSITORIES: 'SET_REPOSITORIES',
  GET_REPOSITORIES: 'GET_REPOSITORIES',
  SET_OWNER_REPOSITORY: 'SET_OWNER',
  GET_OWNER_REPOSITORY: 'GET_OWNER'
}

export const GIT_URI = {
  URI_USER: 'https://api.github.com/users/',
  REPOS: (owner: string) => {
    return `https://api.github.com/users/${owner}/repos`
  }
}