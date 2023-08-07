import { styled } from 'styled-components'

export const HeroList = styled.ul`
  max-height: 32.37rem;
  padding-top: 1.19rem;
  padding-right: 1.31rem;
  padding-bottom: 2rem;
  padding-left: 1.69rem;
  display: flex;
  gap: 0.63rem;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`

export const HeroListItem = styled.li`
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  background: ${(props) => props.theme['gray-100']};
  flex-basis: calc(25% - 0.63rem);
  flex-grow: 1;
  border-radius: 0.9375rem;
  padding: 0.88rem 0.63rem;
  display: flex;
  gap: 0.94rem;
`

export const HeroListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  flex: 1;
`

export const HeroListItemInfoTitle = styled.strong`
  font-size: 1rem;
  line-height: normal;
  font-weight: 700;
  letter-spacing: -0.03rem;
  color: ${(props) => props.theme.black};
`

export const HeroListItemInfoDescription = styled.p`
  font-size: 0.75rem;
  line-height: normal;
  font-weight: 300;
  letter-spacing: -0.0225rem;
  color: ${(props) => props.theme.black};
`
