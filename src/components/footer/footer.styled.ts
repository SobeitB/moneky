import styled from "styled-components";

export const FooterComp = styled.footer`
   height:360px;
   background: #FE3E08;
   padding-top:78px;
   padding-left:100px;

   @media (max-width:650px) {
      height:206px;
   }
`

export const Container = styled.div`
   max-width:1140px;
   margin:0 auto;
`

export const BodySoc = styled.div`
   width: 359px;
   height: 50.71px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width:650px) {
      width: 208.81px;
      height: 29.49px;
   }
`

export const ContImgSoc = styled.a`
   width: 62.88px;
   height: 50.71px;
   cursor: pointer;

   @media (max-width:650px) {
      width: 36.57px;
      height: 29.49px;
   }
`

export const ImgSoc = styled.img`
   width: 100%;
   height: 100%;
`

export const InfoText = styled.a`
   display: block;
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 64px;
   color: #FFFFFF;
   cursor: pointer;
   margin-top:53px;

   @media (max-width:650px) {
      font-size: 16px;
      line-height: 60px;
      margin-top:34px;
   }
`

export const JoinText = styled.a`
   display: block;
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 64px;
   color: #FFFFFF;
   cursor: pointer;

   @media (max-width:650px) {
      font-size: 16px;
      line-height: 10px;
      margin-top:34px;
   }
`