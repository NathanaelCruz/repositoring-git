import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import * as S from './styles'

const Logo: React.FC = () => {
  
  return (
    <S.WrapperLogo href="/">
      <FontAwesomeIcon icon={faGithubAlt} size="3x" />
      <S.LogoText>
        Repositoring
      </S.LogoText>
    </S.WrapperLogo>
  )
}

export default Logo;