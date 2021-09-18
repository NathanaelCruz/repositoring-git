import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GIT_URI } from '../../constants/Repositories';
import { StoreType } from '../../store';
import { setLoading, setOwner } from '../../store/actions/RepositoryAction';
import { InitialStateProps } from '../../types/RepositoriesTypes';
import OwnerSkeleton from '../Skeletons/OwnerSkeleton';
import swal from 'sweetalert';
import * as S from './styles'

const Owner: React.FC = () => {

  let owner = useSelector<StoreType, InitialStateProps>(state => state.RepositoryReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    let uriGit = GIT_URI.URI_USER + 'NathanaelCruz'
    fetch(uriGit)
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        if(!data.message){
          dispatch(setOwner(data))
          setTimeout(() => {
            dispatch(setLoading(false))
          }, 1000)
        }
        //Adicionar modal de erro
      }).catch(error => {
        swal({
          title: 'Desculpe mas houve um erro interno',
          text: 'Por favor, tente mais tarde novamente.',
          buttons: {
            cancel: {
              text: 'Tudo Bem!',
              visible: true
            }
          }
        })
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
    {
      owner.loadingRepository ? (
        <OwnerSkeleton />
      ) : (
        <S.OwnerWrapper>
          {
            Object.keys(owner.ownerRepositories).length > 0 && (
              <>
                <S.OwnerLinkImage href={owner.ownerRepositories.html_url}>
                  <S.OwnerImage src={owner.ownerRepositories.avatar_url} alt={owner.ownerRepositories.avatar_url} />
                </S.OwnerLinkImage>
                <S.OwnerInfo role="contentinfo">
                  <S.OwnerName>
                    {owner.ownerRepositories.login === 'NathanaelCruz' ? 'Olá, meu nome é ' : 'Olá, '}<strong className="featured">{owner.ownerRepositories.name}</strong>
                  </S.OwnerName>
                  <S.OwnerText>
                    {owner.ownerRepositories.login === 'NathanaelCruz' ? 'Abaixo, veja meus repositórios no GitHub, mas não deixe de pesquisar de outros desenvolvedores' : `Olha, os repositórios de ${owner.ownerRepositories.login}!`}
                  </S.OwnerText>
                </S.OwnerInfo>
              </>
            )
          }
        </S.OwnerWrapper>
      )
    }
    </>
  )
}

export default Owner;
