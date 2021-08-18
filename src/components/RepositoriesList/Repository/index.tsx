import React, { LiHTMLAttributes } from 'react';
import { RepositorieListProps } from '../../../types/RepositoriesTypes';
import * as S from './styles'

interface RepositoryProps extends LiHTMLAttributes<HTMLLIElement> {
  infoRepo: RepositorieListProps
}

const Repository: React.FC<RepositoryProps> = ({infoRepo}) => {
  console.log(infoRepo)
  return (
    <S.RepositoryWrapper>
      <S.RepositoryHeader>
        <S.RepositoryTag className={infoRepo.private ? 'private' : 'public'}>
          {infoRepo.private ? 'Privado' : 'Público'}
        </S.RepositoryTag>
      </S.RepositoryHeader>
    </S.RepositoryWrapper>
  )
}

export default Repository;