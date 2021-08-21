import React from 'react';
import RepositorySkeleton from './RepositorySkeleton';
import * as S from './styles'

const RepositoryListSkeleton: React.FC = () => {
  return (
    <S.RepositoryListContent>
      {
        Array(10).fill(null).map((content, index) => {
          return (
            <RepositorySkeleton key={index} />
          )
        })
      }
    </S.RepositoryListContent>
  )
}

export default RepositoryListSkeleton;