import styled from 'styled-components'

export const MainComp = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Performance = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top:84px;

   @media (max-width: 560px) {
      padding:0 15px;
      width: 90%;   
   }
`

export const PerformanceTitle = styled.h1`
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: calc(32px + 28 * (100vw /1440));
   line-height: 64px;
   text-align: center;
   color: #FFFFFF;
   margin: 0;

   @media (max-width: 560px) {
      font-size: calc(32px + 20 * (100vw /1440));
      line-height: 42px;   
   }

   @media (max-width: 400px) {
      font-size: calc(32px + 28 * (100vw /1440));
      line-height: 42px;   
   }

   @media (max-width: 340px) {
      font-size: 27px;
      line-height: 35px;   
   }
`

export const PerformanceTitleTwo = styled.h3`
   font-family: 'Druk Wide Bold';
   font-style: normal;
   font-weight: 700;
   font-size: 26px;
   line-height: 32px;
   text-align: center;
   color: #FFFFFF;
   margin-top:22px;
`

export const MonkeyTitle = styled(PerformanceTitle)`
   display: inline-block;
   color: #FE3E08;

   @media (max-width: 400px) {
      display: block;  
   }
`

export const PerformanceInfo = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;
   margin-top:44px;

   @media (max-width: 500px) {
      font-size: 16px;
      line-height: 20px;    
   }

   @media (max-width: 400px) {
      font-size: 12px;
      line-height: 20px;  
      margin-top:24px;
   }
`

export const ContBtn = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   margin-top:47px;

   @media (max-width: 400px) { 
      margin-top:26px;
   }
`

export const OpenSeaBtn = styled.button`
   width: 195px;
   height: 72px;
   background: #2D13FE;
   border:none;
   cursor: pointer;
   border-radius: 36px;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;

   @media (max-width: 400px) {
      width: 150.36px;
      height: 60.75px;   
      font-size: 20px;
      line-height: 29px;   
   }

   @media (max-width: 480px) {
      width: 130.36px;
      height: 42.75px;   
      font-size: 18px;
      line-height: 29px;   
   }
`

export const NextBtn = styled.button`
   width: 58px;
   height: 58px;
   border: 2px solid #FFFFFF;
   border-radius:50%;
   background:none; 
   box-sizing: border-box;
   cursor: pointer;
   margin-left:23px;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;

   @media (max-width: 480px) {
      width: 36px;
      height: 36px;;   
   }
`

export const BodyNft = styled.div`
   height: 1765px;
   z-index:10;
   display:flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-top:42px;
   overflow: hidden;

   @media (max-width:900px) {
      height: 700px;
   }

   @media (max-width:600px) {
      width:100%;
      height: 500px;
      justify-content: center;
   }
`

export const Nft = styled.div.attrs((props: {top: string}) => props)`
   position: relative;
   max-height:370px;
   max-width:370px;
   margin-right:20px;
   margin-top:${(props) => props.top};

   &:last-child{
      margin-right:0px;
   }

   @media (max-width:600px) {
      max-width: 173.43px;
      max-height: 173.43px;
   }
`

export const ImgBodyMob = styled.div`
   position: relative;
`

export const ImgMedals = styled.img`
   position: absolute;
   z-index:1;
   bottom: -250px;
   left: 30px;
   width: 326px;
   height: 263px;
   filter: drop-shadow(10px 14px 30px rgba(0, 0, 0, 0.15));

   @media (max-width: 1250px) {
      display none;
   }
`

export const ImgHockeyPc = styled.img`
   position: absolute;
   top: 652px;
   left: 5px;

   @media (max-width: 1250px) {
      display none;
   }

   @media (max-width: 535px) {
      display none;
      top: 89px;
      left: -90px;  
   }
`

export const ImgMedalsMobile = styled.img`
   position: relative;
   z-index: 10;
   display none;
   width: 200px;
   height: 155px;
   margin-top:51px;

   @media (max-width: 1250px) {
      display block;
   }

   @media (max-width: 1250px) {
      width: 250px;
      height: 205px;
   }

   @media (max-width: 600px) {
      width: 162px;
      height: 131px;
   }
`

export const ImgHockeyMobile = styled.img`
   display none;
   width: 354px;
   height: 216px;
   top: 110px;
   left: -62px;

   @media (max-width: 1250px) {
      display block;
      position: absolute;
      z-index: 1;
   }

   @media (max-width: 900px) {
      top: 89px;
      left: -62px;
   }

   @media (max-width: 600px) {
      width: 270px;
      height: 180px;
      top: 80px;
      left: -64px;
   }
`

export const NftImg = styled.img`
   position: relative;
   z-index:0;
   height:100%;
   width:100%;

   @media (max-width:600px) {
      width: 173.43px;
      height: 173.43px;
   }
`

export const BodyText = styled.div`
   position: relative;
   z-index:0;
   top:-1240px;
   width:100%;
   height: 900px;
   background: #2D13FE;

   @media (max-width: 1250px) {
      top:-1160px;
      height: 960px;
   }

   @media (max-width: 1250px) {
      display:flex;
      justify-content: center;
   }

   @media (max-width: 900px) {
      top:0px;
      height: 800px;
   }

   @media (max-width: 450px) {
      height: 900px;
   }

   @media (max-width: 340px) {
      height: 1000px;
   }
`

export const ContText = styled.div`
   position: absolute;
   top: 133px;
   right:119px;

   @media (max-width:1300px) {
      right:70px;
   }

   @media (max-width:1040px) {
      right:50px;
   }

   @media (max-width: 1250px) {
      top: 65px;
      width:100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-left: 85px;
   }
`

export const TitleText = styled.h2`
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 38px;
   color: #FFFFFF;

   @media (max-width:1300px) {
      font-size: 25px;
      line-height: 33px;
   }

   @media (max-width:1040px) {
      font-size: 20px;
      line-height: 29px;
   }

   @media (max-width:620px) {
      font-size: 16px;
      line-height: 20px;
   }

`

export const TwoText = styled.h4`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 38px;
   color: #FFFFFF;
   margin-top:53px;

   @media (max-width:1300px) {
      font-size: 24px;
      line-height: 33px;
   }

   @media (max-width:1040px) {
      font-size: 18px;
      line-height: 28px;
      margin-top:33px;
   }

   @media (max-width:620px) {
      font-size: 16px;
      line-height: 20px;
   }

`

export const ThreeText = styled.h5`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 26px;
   line-height: 38px;
   color: #FFFFFF;
   margin-top:53px;

   @media (max-width:1300px) {
      font-size: 22px;
      line-height: 30px;
   }

   @media (max-width:1040px) {
      font-size: 18px;
      line-height: 28px;
      margin-top:33px;
   }

   @media (max-width:620px) {
      font-size: 16px;
      line-height: 20px;
   }
`