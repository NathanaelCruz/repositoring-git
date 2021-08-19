import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { LiHTMLAttributes } from 'react';
import { RepositorieListProps } from '../../../types/RepositoriesTypes';
import * as S from './styles'

interface RepositoryProps extends LiHTMLAttributes<HTMLLIElement> {
  infoRepo: RepositorieListProps
}

const Repository: React.FC<RepositoryProps> = ({infoRepo}) => {

  const resizeText = (text: string) => {
    let textResized = text.length > 40 ? `${text.substr(0, 40)}...` : text
    
    return textResized
  }

  return (
    <S.RepositoryWrapper>
      <S.RepositoryHeader>
        {
          infoRepo.license !== null && (
            <a href={infoRepo.license?.url} target="_blank" rel="noreferrer">
              <S.RepositoryTag className="license" data-license={infoRepo.license?.key}>
                {infoRepo.license?.name}
              </S.RepositoryTag>
            </a>
          )
        }
        <S.RepositoryTag className={infoRepo.private ? 'private' : 'public'}>
          {infoRepo.private ? 'Privado' : 'Público'}
        </S.RepositoryTag>
      </S.RepositoryHeader>
        <S.RepositoryContent>
          <S.TitleRepository href={infoRepo.html_url ? infoRepo.html_url : '#'} target="_blank" rel="noreferrer">
            {infoRepo.name && infoRepo.name}
          </S.TitleRepository>
          <p className="repository__description">
            {
              infoRepo.description && resizeText(infoRepo.description)
            }
          </p>
        </S.RepositoryContent>
        
        <S.RepositoryFooter className={infoRepo.language === null ? 'no__language' : ''}>
          {
            infoRepo.language === null ? (
              <FontAwesomeIcon icon={faGithub} size="1x" />
            ) : (
              <S.RepositoryTag className="language">
                {infoRepo.language}
              </S.RepositoryTag>
            )
          }
        </S.RepositoryFooter>
    </S.RepositoryWrapper>
  )
}

export default Repository;