import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

const SearchBar: React.FC = () => {
  return (
    <S.WrapperSearch>
      <S.SearchInput type="text" placeholder="Search repositories here" />
      <S.SearchButton type="button" aria-label="Botão para pesquisar">
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </S.SearchButton>
    </S.WrapperSearch>
  )
}

export default SearchBar;