import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:flex-start;
`

export const WrapperStatusCount = styled.div`
display:flex;
align-items:center;
div{
margin-right:3vw;
text-align:center;
}
`
export const WrapperUserName = styled.div`
display:flex;
align-items:center;
h3{
    margin-right:3vw;
}
a{
    color: blue;
    font-weight:bold;
}
`

export const WrapperInfos = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
justify-content: space-between;
height:200px;;
margin-left:4vw;
h1{
    font-size:32px;
    font-weight:bold;
}
h3{
    font-size:18px;
    font-weight:bold;
}
h4{
    font-size:16px;
    font-weight:bold;
}
`

export const WrapperImage = styled.img`
border-radius:50%;
width:20vw;
margin: 3vw;
`