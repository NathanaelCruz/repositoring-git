import { REPOSITORIES_ACTIONS } from "../../../constants/Repositories";
import { ActionProps, InitialStateProps } from "../../../types/RepositoriesTypes"


const INITIAL_STATE: InitialStateProps = {
  loadingRepository: true,
  ownerRepositories: {},
  repositoriesList: []
}

const RepositoryReducer = (state = INITIAL_STATE, action: ActionProps) => {

  switch (action.type) {
    case REPOSITORIES_ACTIONS.GET_REPOSITORIES:
      return state.repositoriesList
    case REPOSITORIES_ACTIONS.SET_REPOSITORIES:
      return {
        ...state,
        repositoriesList: action.payload?.repositoriesList
      }
    case REPOSITORIES_ACTIONS.GET_OWNER_REPOSITORY:
      return state.ownerRepositories
    case REPOSITORIES_ACTIONS.SET_OWNER_REPOSITORY:
      return {
        ...state,
        ownerRepositories: action.payload?.ownerRepositories
      }
    case REPOSITORIES_ACTIONS.GET_LOADING:
      return state.loadingRepository
    case REPOSITORIES_ACTIONS.SET_LOADING:
      return {
        ...state,
        loadingRepository: action.payload?.loadingRepository
      }
    default:
      return state
  }

}


export default RepositoryReducer