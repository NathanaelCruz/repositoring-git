import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GIT_URI } from '../../constants/Repositories';
import { StoreType } from '../../store';
import { setOwner } from '../../store/actions/RepositoryAction';
import { InitialStateProps } from '../../types/RepositoriesTypes';
import * as S from './styles'

const Owner: React.FC = () => {

  let owner = useSelector<StoreType, InitialStateProps>(state => state.RepositoryReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    let uriGit = GIT_URI.URI_USER + 'NathanaelCruz'
    fetch(uriGit)
      .then(res => res.json())
      .then(data => {
        if(!data.message){
          dispatch(setOwner(data))
        }
      }).catch(error => alert(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <S.OwnerWrapper>
      {
        Object.keys(owner.ownerRepositories).length > 0 && (
          <>
            <S.OwnerLinkImage href={owner.ownerRepositories.html_url}>
              <S.OwnerImage src={owner.ownerRepositories.avatar_url} alt={owner.ownerRepositories.avatar_url} />
            </S.OwnerLinkImage>
            <S.OwnerInfo role="contentinfo">
              <S.OwnerName>
                Hi, my name is {owner.ownerRepositories.name}
              </S.OwnerName>
            </S.OwnerInfo>
          </>
        )
      }
    </S.OwnerWrapper>
  )
}

export default Owner;