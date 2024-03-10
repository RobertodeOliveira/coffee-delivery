import * as S from './styles'
import { Text } from '../../../Text'
import { ReactNode } from 'react'

type HeaderTitleProps = {
  icon: ReactNode
  title: string
  subTitle: string
}

export const HeaderTitle = ({ icon, title, subTitle }: HeaderTitleProps) => {
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
