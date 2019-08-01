import styled, { css } from 'styled-components'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { white } = StyleColors
const { mdsize } = StyleSize

const content = css`
  margin-top: ${mdsize};
  background: ${white};
  padding: 0.6rem;
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);
  float: left;
  .content {
    margin-top: ${mdsize};
    background: ${white};
    padding: 0.6rem;
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);
  }
`
const StyledSearch = styled.div.attrs({
  className: 'grid-d-9 grid-t-8 grid-tl-8 grid-m-12 no-padding',
})`
  padding: 0;
  @media (min-width: 720px) {
    padding-right: 1.1rem;
    padding-left: 1.1rem;
  }
  @media (min-width: 1200px) {
    padding-right: 1.1rem;
    padding-left: 0rem;
  }
`

const StyledSearchContent = styled.div.attrs({
  className: 'content grid-12',
})`
  ${content}
  margin-top: 4rem;
`
const StyledFilter = styled.div.attrs({
  className: 'grid-d-12 rid-t-4 grid-tl-4 grid-m-12 no-margin',
})`
  padding: 0;
  .lf-padding {
    padding: 0;
  }

  position: relative;
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 724px) {
    .content.desktop {
      display: inline-block;
    }
    .content.mobile {
      display: none;
    }
    .no-padding {
      padding: 0 ${mdsize};
    }
    .lf-padding {
      padding-right: ${mdsize};
    }
  }
  @media (min-width: 1080px) {
    .lf-padding {
      padding: 0 0 0 1rem;
    }
  }

  @media (min-width: 1200px) {
    .no-padding {
      padding: 0;
    }
    .lf-padding {
      padding-right: 0;
    }
  }

  @media (min-width: 720px) {
    padding-right: 1.1rem;
  }
  .content {
    ${content}
    width: 100%;
  }
`

const StyledCardContent = styled.div.attrs({
  className: 'tn-top m-bottom',
})`
  width: 100%;
  ${content}
`
const StyledFilterMobile = styled.div.attrs({
  className: 'grid-d-3 grid-t-4 grid-tl-4 grid-m-12 lf-padding',
})`
  position: relative;
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  margin-top: 2.9rem;

  .desktop {
    display: none;
  }
  padding: 0;
  @media (min-width: 720px) {
    padding-right: 1.1rem;
    .desktop {
      display: inline-block;
    }
    .content {
      width: 31%;
    }
  }
  .content {
    position: fixed;
    @media (min-width: 720px) {
      width: 31%;
    }
    @media (min-width: 1000px) {
      width: 31.3%;
    }
    @media (min-width: 1200px) {
      width: 277.28px;
    }

    ${content};
  }
`

const StyledCardMobileContent = styled.div.attrs({
  className: 'grid-12 no-padding relative',
})``

export {
  StyledSearch,
  StyledCardMobileContent,
  StyledFilterMobile,
  StyledSearchContent,
  StyledCardContent,
  StyledFilter,
}
