import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${normalize}
body {
  font-family: sans-serif
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li + li {
    margin-left: ${({ theme }) => theme.spacing.xs}px;
  }
}
`
// export const AppDiv = styled.div`
// margin: 0;
// font-family: 'Roboto', 'Helvetica Neue', sans-serif;
// `







