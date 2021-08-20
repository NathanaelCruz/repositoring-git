import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import React, { LiHTMLAttributes } from 'react';
import { RepositorieListProps } from '../../../types/RepositoriesTypes';
import { URL_IMAGE_RANDOM_GENERATE } from '../../../constants/Repositories';
import { 
  parseISO,
  format
} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR';
import * as S from './styles'

interface RepositoryProps extends LiHTMLAttributes<HTMLLIElement> {
  infoRepo: RepositorieListProps
}

const Repository: React.FC<RepositoryProps> = ({infoRepo}) => {

  const maxImagesCount = 18

  const resizeText = (text: string) => {
    const maxLength = 25
    let textResized = text.length > maxLength ? `${text.substr(0, maxLength)}...` : text
    
    return textResized
  }

  const imageSelect = () => {
    return Math.ceil(Math.random() * (maxImagesCount - 0)) + 0
  }
  
  const formatedData = (dateCurrency: string) => {
    const parseDate = parseISO(dateCurrency)
    const dateFormated = format(
      parseDate,
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: ptBr
      }
    )

    return dateFormated
  }

  return (
    <S.RepositoryWrapper>
      <S.RepositoryHeader>
        {
          infoRepo.fork && (
            <S.RepositoryTag className="fork">
              Fork
            </S.RepositoryTag>
          )
        }
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
          <S.ContentTop>
            <S.ContentImage src={`${URL_IMAGE_RANDOM_GENERATE}${imageSelect()}`} alt={infoRepo.name} />
            <S.ContentTopText role="contentinfo">
              <S.TitleRepository href={infoRepo.html_url ? infoRepo.html_url : '#'} target="_blank" rel="noreferrer">
                {infoRepo.name && infoRepo.name}
              </S.TitleRepository>
              <p className="repository__description">
                {
                  infoRepo.description && resizeText(infoRepo.description)
                }
              </p>
            </S.ContentTopText>
          </S.ContentTop>
          <S.ContentBottom>
            {infoRepo.updated_at && (
              <>
                <FontAwesomeIcon icon={faCalendarPlus} size="1x" />
                <S.DateRepository dateTime={infoRepo.updated_at}>
                    {formatedData(infoRepo.updated_at)}
                </S.DateRepository>
              </>
            )}
          </S.ContentBottom>
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