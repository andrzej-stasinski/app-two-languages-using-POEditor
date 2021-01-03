import styled from 'styled-components'
// import {Wrapper} from 'components'
import Wrapper from '../Wrapper'

export const TestDiv = styled.div`

`
export const Container = styled.div`
    background-color: ${props => props.theme.colors.gray.light};
    // display: flex;
    padding: ${({theme}) => theme.spacing.sm}px 0;
    // justify-content: space-between;
`
export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`

export const List = styled.ul`
  display: flex;
  color: red;
`;


