import styled from "styled-components"

export const LineBox = styled.section`
    padding-top: 1rem;
    
    div {
        content: '';
        height: 1.5px;
        width: 100%;
        background-image: linear-gradient(to right, #110B20, #82016A);
        animation: zoomIn;
        animation-duration: 2s;
    }
`