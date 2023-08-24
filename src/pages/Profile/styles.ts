import { Tab, TabList } from 'react-tabs'
import { styled } from 'styled-components'

import { Container } from '../../components/Wrapper/styles'

export const ProfileWrapper = styled(Container)`
  padding-top: 1.56rem;
  padding-left: 2.25rem;
`

export const ProfileTitle = styled.h1`
  font-size: 1.5rem;
  line-height: normal;
  font-weight: 700;
  letter-spacing: -0.045rem;
  text-transform: capitalize;
  color: ${(props) => props.theme['blue-600']};
  margin-bottom: 1.44rem;

  span {
    font-weight: 300;
    padding-left: 1rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '/';
      color: ${(props) => props.theme['orange-500']};
      position: absolute;
      left: 0;
    }
  }
`

export const ProfileTabList = styled(TabList)`
  border-bottom: solid 0.0625rem ${(props) => props.theme['gray-200']};
  margin-bottom: 1.69rem;
  display: flex;
  gap: 1rem;
`

export const ProfileTabItem = styled(Tab)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-500']};
  padding-bottom: 1rem;
  position: relative;
  transition: color ease-in-out 0.2s;
  cursor: pointer;

  &:after {
    content: '';
    width: 100%;
    height: 0.125rem;
    background: ${(props) => props.theme['blue-600']};
    position: absolute;
    bottom: 0;
    display: block;
    opacity: 0;
    transition: opacity ease-in-out 0.2s;
  }

  &[aria-selected='true'] {
    color: ${(props) => props.theme['blue-600']};

    &:after {
      opacity: 1;
    }
  }
`

export const ProfileInfoBlock = styled.div`
  max-width: 120rem;
  background: ${(props) => props.theme.white};
  border-radius: 0.9375rem;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 2.62rem 2.19rem 4.5rem 2.13rem;
  margin-right: 3.75rem;
  display: flex;
  gap: 1.94rem;
`

export const ProfileInfoBlockImage = styled.img`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;
`

export const ProfileInfoBlockContent = styled.div`
  h3 {
    height: 2.18069rem;
    font-size: 1.5rem;
    line-height: normal;
    font-weight: 700;
    letter-spacing: -0.045rem;
    color: ${(props) => props.theme['blue-600']};
    margin-bottom: 0.13rem;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 153.5%;
    letter-spacing: -0.03rem;
    color: ${(props) => props.theme['gray-600']};
  }
`
