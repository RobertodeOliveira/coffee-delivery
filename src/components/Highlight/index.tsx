import { ReactNode } from 'react'
import * as S from './styles'

type HighlightProps = {
  icon?: ReactNode
  backgroundIcon?: string
  title?: ReactNode
  subTitle?: ReactNode
}

export const Highlight = ({
  icon,
  backgroundIcon,
  title,
  subTitle,
}: HighlightProps) => {
  return (
    <>
      <S.Container>
        <S.WrapperIcon $background={backgroundIcon}> {icon}</S.WrapperIcon>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.Content>
      </S.Container>
    </>
  )
}
