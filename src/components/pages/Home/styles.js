import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import StyleColors from '@/components/styled/vars/StyleColors'
import StyleSize from '@/components/styled/vars/StyleSize'

const { primaryoff } = StyleColors
const { mdsize } = StyleSize

const content = css`
  margin-top: ${mdsize};
  .content {
    margin-top: ${mdsize};
  }
`

const StyledSort = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
  p {
    float: left;
    margin-top: 1.2rem;
    font-weight: 500;
    margin-left: 0;
  }
  .grid-d-12 {
    padding: 0;
    margin-top: 3rem;
  }
  .react-select__control {
    border-radius: 0;
    box-shadow: none;
    border-color: #ccc;
    &:hover {
      border-color: ${primaryoff};
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: none;
    border-color: ${primaryoff};
    &:hover {
      border-color: ${primaryoff};
    }
  }

  .react-select__option--is-focused {
    background: ${lighten(0.4, primaryoff)};
    &:hover {
      background: ${lighten(0.4, primaryoff)};
    }
  }
  .react-select__option--is-selected {
    background: ${primaryoff};
  }
  .react-select__menu {
    border-radius: 0;
  }
`
const StyledSearch = styled.div.attrs({
  className: 'grid-d-9 grid-t-12 grid-tl-12 grid-m-12',
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
  margin: 1.6rem 0;
  margin-top: 0.6rem;

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
    margin-bottom: 1.6rem;
  }

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
    width: 277.28px;
  }
`

export {
  StyledSearch,
  StyledFilterMobile,
  StyledSearchContent,
  StyledCardContent,
  StyledFilter,
  StyledSort,
}
