import { REPOSITORIES_ACTIONS } from "../../../constants/Repositories"
import { OwnerProps, RepositorieListProps } from "../../../types/RepositoriesTypes"

export const getRepositories = () => {
  return {
    type: REPOSITORIES_ACTIONS.GET_REPOSITORIES
  }
}

export const getOwner = () => {
  return {
    type: REPOSITORIES_ACTIONS.GET_OWNER_REPOSITORY
  }
}

export const setOwner = (owner: OwnerProps) => {
  return {
    type: REPOSITORIES_ACTIONS.SET_OWNER_REPOSITORY,
    payload: {
      ownerRepositories: owner
    }
  }
}

export const setRepositories = (repositories: Array<RepositorieListProps>) => {
  return {
    type: REPOSITORIES_ACTIONS.SET_REPOSITORIES,
    payload: {
      repositoriesList: repositories
    }
  }
}