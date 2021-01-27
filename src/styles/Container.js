import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  z-index: 1;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const HeroContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.background.secondary};
`

export const SidebarContainer = styled.div`
  padding: 50px;
  transition: all 1s ease-in;
  background: ${(props) => props.theme.background.secondary};
  @media (min-width: 992px) {
    display: none;
  }
`

export const LeftContainer = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const LeftRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FlexStartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Wrapper = styled.div``

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  padding: 50px 0;
  background: ${(props) => props.theme.background.footer};
`

export const FeatureContainer = styled.div`
  padding: 100px 0;
`

export const MaxContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FirstFeature = styled(LeftContainer)`
  display: flex;
  ${(props) =>
    props.reverse &&
    css`
      order: 2;
    `}

  @media (max-width: 992px) {
    order: 2;
  }
`

export const SecondFeature = styled(RightContainer)`
  padding: 0 50px;
  ${(props) =>
    props.reverse &&
    css`
      order: 1;
    `}

  @media (max-width: 992px) {
    order: 1;
    padding: 0;
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.light_grey};
  height: 1px;
  width: 200px;
  margin: 20px;
`
