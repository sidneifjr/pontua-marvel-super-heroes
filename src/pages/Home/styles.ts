import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeroList = styled.ul`
  max-height: 32.37rem;
  padding-top: 1.19rem;
  padding-right: 1.31rem;
  padding-bottom: 2rem;
  padding-left: 1.69rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.63rem;
  flex: 1;
`

export const HeroListItem = styled.li`
  flex-basis: calc(25% - 0.63rem);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  background: ${(props) => props.theme['gray-100']};
  flex-grow: 1;
  border-radius: 0.9375rem;
  display: flex;

  img {
    width: 5.1875rem;
    height: 7.4375rem;
    border-radius: 10px;
  }
`

export const HeroListItemLink = styled(Link)`
  width: 100%;
  height: 100%;
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

export const SearchBox = styled.form`
  width: 100%;
`

export const SearchBoxField = styled.fieldset`
  position: relative;
  border-bottom: solid 0.0625rem ${(props) => props.theme.divider};

  label {
    font-size: 0.75rem;
    line-height: normal;
    font-weight: 500;
    letter-spacing: -0.0225rem;
    color: ${(props) => props.theme['blue-200']};
    position: absolute;
    top: 50%;
    left: 2.31rem;
    pointer-events: none;
    transform: translate3d(0, -50%, 0);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 1.37rem 2rem 1.6rem 4.25rem;
    border: none;
    display: block;
  }
`
