import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GIT_URI } from '../../constants/Repositories';
import { StoreType } from '../../store';
import { setRepositories } from '../../store/actions/RepositoryAction';
import { InitialStateProps } from '../../types/RepositoriesTypes';
import Repository from './Repository';
import * as S from './styles'

const RepositoriesList: React.FC = () => {

  const repositoryState = useSelector<StoreType, InitialStateProps>(state => state.RepositoryReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(GIT_URI.REPOS('NathanaelCruz'))
      .then(resp => resp.json())
      .then(data => {
        if(!data.message){
          dispatch(setRepositories(data))
        }
      })
      .catch(err => alert(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.WrapperList>
      {
        repositoryState.repositoriesList.length > 0 && repositoryState.repositoriesList.map(repo => {
          return (
            <Repository key={repo.id} infoRepo={repo} />
          )
        })
      }
    </S.WrapperList>
  )
}

export default RepositoriesList;