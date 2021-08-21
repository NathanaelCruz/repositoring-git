import React from 'react';
import * as S from './styles'

const RepositorySkeleton: React.FC = () => {
  return (
    <S.RepositorySkeleton>
      <S.RepositoryHeader>
        <S.LineShimmer className="small" />
        <S.LineShimmer className="small" />
      </S.RepositoryHeader>
      <S.RepositoryContent>
        <S.ContentTop>
          <S.SpinnerShimer />
          <S.ContentTopText>
            <S.LineShimmer className="longer" />
            <S.LineShimmer className="longer" />
            <S.LineShimmer className="medium" />
          </S.ContentTopText>
        </S.ContentTop>
      </S.RepositoryContent>
      <S.RepositoryFooter>
        <S.LineShimmer className="small" />
      </S.RepositoryFooter>
    </S.RepositorySkeleton>
  )
}

export default RepositorySkeleton;