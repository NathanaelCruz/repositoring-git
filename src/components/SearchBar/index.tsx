import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce/lib';
import { GIT_URI } from '../../constants/Repositories';
import { useDispatch } from 'react-redux';
import { setLoading, setOwner, setRepositories } from '../../store/actions/RepositoryAction';
import swal from 'sweetalert';

const SearchBar: React.FC = () => {

  const [searchWord, setSearchWord] = useState('')
  const dispatch = useDispatch()

  const previewSearchUser = useDebouncedCallback(
    (word: string) => {
      setSearchWord(word)
    },
    200
  )

  const setRepositoryForOwner = (owner: string) => {
    fetch(GIT_URI.REPOS(owner))
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        return res.json()
      })
      .then(repos => {
        if(repos.length === 0){
          swal({
            title: 'Usuário Sem Repositórios',
            text: `O usuário ${owner}, não possui repositórios visivéis no momento.`,
            icon: 'warning',
            buttons: {
              cancel: {
                text: 'Tudo Bem!',
                value: 'cancel',
                className: 'btn__cancel',
                visible: true
              }
            }
          })
        }

        dispatch(setRepositories(repos))
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 1000)
      }).catch(err => {
        swal({
          title: 'Ops! Houve um erro',
          text: `Desculpe, mas houve um erro, por favor, tente novamente mais tarde`,
          icon: 'error',
          buttons: {
            cancel: {
              text: 'Tudo Bem!',
              value: 'cancel',
              className: 'btn__cancel',
              visible: true
            }
          }
        })

        setTimeout(() => {
          dispatch(setLoading(false))
        }, 500)
      })
  }

  const setOwnerOfRepository = (ownerSearch: string) => {

    fetch(GIT_URI.URI_USER + ownerSearch)
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        return res.json()
      })
      .then(owner => {
          dispatch(setOwner(owner))
          setRepositoryForOwner(ownerSearch)

          setTimeout(() => {
            dispatch(setLoading(false))
          }, 1000)
      }).catch(err => {
        swal({
          title: 'Usuário não encontrado!',
          text: `Não foi encontrado nenhum usuário para ${ownerSearch}, você gostaria de pesquisar outro usuário?`,
          icon: 'error',
          buttons: {
            cancel: {
              text: 'Hmm, não.',
              value: 'cancel',
              className: 'btn__cancel',
              visible: true
            },
            confirm: {
              text: 'Opa! Sim, é claro!',
              value: 'confirm',
              className: 'btn__confirm',
            }
          }
        }).then(value => {
          if(value === 'confirm') {
            const inputSearch = document.getElementById('inputSearch')
            if(inputSearch) inputSearch.focus()
          }
        })

        setTimeout(() => {
          dispatch(setLoading(false))
        }, 500)
      })
  }

  const setUserForRepository = () => {
    let searchUser = searchWord === '' ? 'NathanaelCruz' : searchWord

    dispatch(setLoading(true))
    setOwnerOfRepository(searchUser)
  }

  return (
    <S.WrapperSearch>
      <S.SearchInput id="inputSearch" type="text" placeholder="Procure repositórios de usuários aqui" onChange={
        (e) => {
          previewSearchUser(e.target.value)
        }
      }/>
      <S.SearchButton type="button" aria-label="Botão para pesquisar" onClick={() => setUserForRepository()}>
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </S.SearchButton>
    </S.WrapperSearch>
  )
}

export default SearchBar;