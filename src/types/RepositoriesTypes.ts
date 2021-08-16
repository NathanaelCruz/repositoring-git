interface OwnerRepositoriesProps{
  login: string,
  avatar_url: string,
  html_url: string,
  type: string
}

export interface RepositorieListProps{
  id?: number,
  name?: string,
  private?: boolean,
  owner?: OwnerRepositoriesProps,
  html_url?: string,
  description?: string
}

export interface OwnerProps {
  login?: string,
  avatar_url?: string,
  html_url?: string,
  name?: string
}

export type InitialStateProps = {
  ownerRepositories: OwnerProps,
  repositoriesList: Array<RepositorieListProps>
}

export type ActionProps = {
  type: string,
  payload?: InitialStateProps
}