import styled from 'styled-components'

export const MainComp = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: 1150px) {
      display: none;
   }
`

export const MainCompMobile = styled.main`
   display: none;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: 1150px) {
      display: flex;
   }
`

export const Body = styled.div`
   position: relative;
   z-index: 1000;
   display: flex;
   flex-direction: column;
   align-items: center;

   background: #E5E5E5;
   width: 90%;
   height: 1113px;
   border-radius:50px;
   margin-top:140px;
   margin-bottom:140px;

   @media (max-width: 1150px) {
      height: 1015px;
      margin-top:62px;
      margin-bottom:112px;
   }

   @media (max-width: 500px) {
      height: 1000px;
   }

   @media (max-width: 365px) {
      height: 1050px;
   }
`

export const BodyImgEth = styled.img`
   width: 130px;
   height: 220px;
   position: absolute;
   top:-148px;
   right:125px;

   @media (max-width: 1150px) {
      right:-5px;
      top:-114px;
      width: 120.82px;
      height: 170.62px;
   }
`

export const ImgEth = styled.img`
   width: 100%; 
   height:100%;
`

export const BodyImgEthWhite = styled.div`
   width: 130px;
   height: 220px;
   position: absolute;
   bottom:335px;
   left:45px;
`

export const RoadMapTitle = styled.h2`
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 48px;
   line-height: 64px;
   color: #121319;
   margin-top:49px;

   @media (max-width: 1150px) {
      font-size: 38px;
   }

   @media (max-width: 510px) {
      font-size: 30px;
   }

   @media (max-width: 400px) {
      font-size: 25px;
   }
`

export const RoadMapComp = styled.div`
   display: flex;
   justify-content: space-between;
   margin-left:-100px;

   @media (max-width: 1510px) {
      margin-left:69px;
   }

   @media (max-width: 380px) {
      margin-left:40px;
   }

   @media (max-width: 360px) {
      margin-left:25px;
   }
`

export const RoadMapLine = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: 1150px) {
      align-items: flex-start;
   }
`

export const Line = styled.img`
   position: absolute;
   z-index:0;
   top:145px;

   @media (max-width: 1150px) {
      top:113px;
      left:29px;
      height: 504px;
   }

   @media (max-width: 380px) {
      top:113px;
      left:29px;
      height: 530px;
   }

   @media (max-width: 362px) {
      top:113px;
      left:29px;
      height: 550px;
   }
`

export const RoadMapCircle = styled.div`
   position: relative;
   z-index:1;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius:50%;
   width: 95px;
   height: 95px;
   background: #2D13FE;
   margin-top:50px;

   font-family: DM Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 40px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;

   @media (max-width: 1150px) {
      width: 62px;
      height: 63px;
      margin-top:0px;

      font-size: 30px;
      line-height: 29px;
   }
`

export const RoadMapText = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 24px;
   line-height: 29px;
   color: #000000;

   @media (max-width: 1150px) {
      font-size: 16px;
      line-height: 20px;
   }

   @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
   }
`

export const RoadMapTextRigth = styled(RoadMapText).attrs((props: {top: string}) => props)`
   position: relative;
   text-align: left;
   margin-left:43px;
   top:${(props) => props.top};

   @media (max-width: 1150px) {
      margin-left:35px;
      top:0;
   }

   @media (max-width: 768px) {
      margin-left:20px;
   }
`

export const RoadMapTextLeft = styled(RoadMapText).attrs((props: {top: string}) => props)`
   position: relative;
   left:-43px;
   text-align: right;
   top:${(props) => props.top};

   @media (max-width: 1510px) {
      width:400px;
   }

   @media (max-width: 1150px) {
      left:-35px;
   }
`

export const RoadMapBtn = styled.button`
   width: 213px;
   height: 103px;
   background: #FE3E08;
   border: 17px solid #121319;
   border-radius: 50px;

   position: absolute;
   bottom:-54px;
   margin-left:-14px;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;
   cursor:pointer;

   @media (max-width: 1510px) {
      margin-left:-5px;
   }

   @media (max-width: 510px) {
      width: 144.36px;
      height: 74.75px;
      font-size: 18px;
      line-height: 29px;
      bottom:-39px;
      margin-left:0px;
   }
`

export const BodyRodampMobile = styled.div.attrs((props: {align:string}) => props)`
   display:flex;
   align-items: ${(props) => props.align};
   margin-top:50px;
`



