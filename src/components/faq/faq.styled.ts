import styled from 'styled-components'

export const Main = styled.div`
   width: 90%;
   margin: 0 auto;
   padding-bottom: 140px;
`

export const MainTitle = styled.h1`
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 48px;
   line-height: 64px;
   color: #FFFFFF;
   text-align: center;
   margin-bottom: 35px;
   margin-top: 140px;

   @media (max-width: 640px) {
      font-size: 40px;
   }

   @media (max-width: 500px) {
      font-size: 30px;
   }
`

export const PopapQuestion = styled.div.attrs((props: {open: boolean}) => props)`
   width:95%;
   height: ${(props) => props.open ? '207px' : '121px'};
   background: #FFFFFF;
   box-sizing: border-box;
   border-radius: 83px;
   margin:0 auto;
   margin-bottom:20px;
   padding: 0 51px 0 58px;
   cursor: pointer;

   @media (max-width: 650px) {
      max-width:90%;
      height: ${(props) => props.open ? '130px' : '82px'};
      overflow: auto;
      padding-top:10px;
   }

   &::-webkit-scrollbar {
      width: 0px;
      background-color: #f9f9fd;
   }
`

export const QuestionTop = styled.div.attrs((props: {open: boolean}) => props)`
   height:${(props) => props.open ? '40px' : '100%'};
   display: flex;
   justify-content: space-between;
   align-items: ${(props) => props.open ? '' : 'center'};
   padding-top: ${(props) => props.open ? '30px' : '0'};
`

export const TitleQuestion = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 24px;
   line-height: 64px;
   color: #121319;

   @media (max-width: 650px) {
      font-size: 16px;
      line-height: 23px;
   }
`

export const TextQuestion = styled.p.attrs((props: {open: boolean}) => props)`
   display: ${(props) => props.open ? 'block' : 'none'};
   font-family: DM Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 29px;
   color: #121319;
   margin-top:21px;

   @media (max-width: 650px) {
      font-size: 16px;
      line-height: 23px;
   }
`

export const Img = styled.img`
   width:48px;
   height:48px;

   @media (max-width: 480px) {
      width:30px;
      height:30px;
   }
`