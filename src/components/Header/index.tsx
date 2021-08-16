import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.HeaderRepositoring>
      <S.NavigatorHeader>
        <Logo />
        <SearchBar />
      </S.NavigatorHeader>
    </S.HeaderRepositoring>
  )
}

export default Header;