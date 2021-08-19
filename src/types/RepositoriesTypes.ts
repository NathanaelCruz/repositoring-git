interface OwnerRepositoriesProps{
  login: string,
  avatar_url: string,
  html_url: string,
  type: string
}

interface LicenseProps{
  key: string,
  name: string,
  url: string
}

export interface RepositorieListProps{
  id?: number,
  name?: string,
  private?: boolean,
  language?: string | null,
  html_url?: string,
  description?: string,
  license?: null | LicenseProps
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