import React from 'react';
import * as S from './styles'

const OwnerSkeleton: React.FC = () => {
  return (
    <S.OwnerWrapper>
      <S.SpinnerShimer />
      <S.OwnerInfo>
        <S.LineShimmer />
        <S.LineShimmer />
      </S.OwnerInfo>
    </S.OwnerWrapper>
  )
}

export default OwnerSkeleton;