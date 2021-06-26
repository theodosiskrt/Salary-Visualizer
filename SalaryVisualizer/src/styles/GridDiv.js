import styled from 'styled-components'


export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: ${({templateCols}) => templateCols};
    grid-column:2;
    grid-template-rows:1fr 1fr;
`
