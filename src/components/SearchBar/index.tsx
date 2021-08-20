import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce/lib';
import { GIT_URI } from '../../constants/Repositories';
import { useDispatch } from 'react-redux';
import { setOwner, setRepositories } from '../../store/actions/RepositoryAction';

const SearchBar: React.FC = () => {

  const [searchWord, setSearchWord] = useState('')
  const dispatch = useDispatch()

  const previewSearchUser = useDebouncedCallback(
    (word: string) => {
      setSearchWord(word)
    },
    200
  )

  const setOwnerOfRepository = (owner: string) => {

    fetch(GIT_URI.URI_USER + owner)
      .then(res => res.json())
      .then(owner => {
        if(owner.message){
          console.log('Usuário não encontrado')
        } else {
          dispatch(setOwner(owner))
        }
      }).catch(err => console.log(err))
  }

  const setRepositoryForOwner = (owner: string) => {
    fetch(GIT_URI.REPOS(owner))
      .then(res => res.json())
      .then(repos => {
        if(repos.message){
          console.log('Repositórios para este usuário não foi encontrado')
        } else {
          dispatch(setRepositories(repos))
        }
      }).catch(err => console.log(err))
  }

  const setUserForRepository = () => {
    let searchUser = searchWord === '' ? 'NathanaelCruz' : searchWord
    setOwnerOfRepository(searchUser)
    setRepositoryForOwner(searchUser)
  }

  return (
    <S.WrapperSearch>
      <S.SearchInput type="text" placeholder="Procure repositórios de usuários aqui" onChange={
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