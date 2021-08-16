import React from 'react';
import * as S from './styles'

const MainWrapper: React.FC = ({children}) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}

export default MainWrapper;