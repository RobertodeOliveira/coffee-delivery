import * as S from './styles'
import { Text } from '../../../Text'
import { ReactNode } from 'react'

type HeadertitleProps = {
  icon: ReactNode
  title: string
  subTitle: string
}

export const Headertitle = ({ icon, title, subTitle }: HeadertitleProps) => {
  return (
    <>
      <S.InfoForm>
        {icon}
        <S.Container>
          <Text $fontSize="16px">{title}</Text>
          <Text $fontSize="14px">{subTitle}</Text>
        </S.Container>
      </S.InfoForm>
    </>
  )
}
