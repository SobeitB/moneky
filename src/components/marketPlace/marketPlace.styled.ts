import styled from 'styled-components'

export const Main = styled.div`
   width: 100%;
   margin: 0 auto;
`

export const MainTitle = styled.h1`
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 48px;
   line-height: 64px;
   color: #FFFFFF;
   text-align: center;
   margin-bottom: 55px;

   @media (max-width: 640px) {
      font-size: 40px;
   }

   @media (max-width: 500px) {
      font-size: 30px;
   }

   @media (max-width: 400px) {
      font-size: 25px;
   }

   @media (max-width: 350px) {
      font-size: 20px;
   }
`

export const ContainerMarket = styled.section`
   width: 100%;
   display:flex;
   justify-content: center;
   flex-wrap: wrap;

   @media (max-width:730px) {
      height: 939px;
   }
`

export const BodyMint = styled.div`
   position: relative;
   z-index:2;
   width: 295px;
   height: 390px;
   background: #FFFFFF;
   border-radius: 30px;
   margin-left:20px;
   margin-bottom:27px;
   padding:10px 10px;

   display: flex;
   flex-direction: column;
   align-items: center;
   box-sizing: border-box;

   @media (max-width:400px) {
      width: 80%;
      padding:5px 5px;
   }
`

export const BodyImg = styled.div`
   position: relative;
   width: 276.15px;
   height: 277.35px;
   border-radius: 30px;
   overflow: hidden;
   display: flex;
   justify-content:center;
   align-items: center;

   @media (max-width:400px) {
      width: 90%;
   }
`

export const ImgNft = styled.img.attrs((props: {mint:boolean}) => props)`
   position: absolute;
   z-index: 0;
   width: 100%;
   height: 100%;
   filter:${(props) => props.mint ? 'blur(0px)' : 'blur(17px)'} ;
   overflow: hidden;
`

export const TextQuestion = styled.p`
   position: absolute;
   z-index: 1;
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 50px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const TextError = styled.p`
   position: absolute;
   top:10px;
   z-index: 1;
   font-family: Druk Wide Bold;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 29px;
   text-align: center;
   color: #951010;
`

export const BodyInfo = styled.div`
   width: 100%;
   margin-top:16.55px;
   display:flex;
   flex-direction: column;
`

export const NameInfo = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 16px;
   color: #121319;
   padding-left: 27px;
`

export const NameIndex = styled.span`
   font-family: DM Sans;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 16px;
   color: rgba(43, 44, 49, 0.4);
   position: relative;
   top: 2px;
`

export const BodyPriceMint = styled.div`
   width: 85%;
   margin-top:13.7px;
   display:flex;
   justify-content: space-between;
   padding: 0 18px 0 27px;
`

export const BodyPrice = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width:400px) {
      margin-right:15px;
   }
`

export const Price = styled.span`
   font-family: DM Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 16px;
   color: #121319;
   margin-left:8px;
`

export const BtnMint = styled.button`
   width: 108.74px;
   height: 38.81px;
   background: #FE3E08;
   border-radius: 36px;
   border:none;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;
   cursor: pointer;

   @media (max-width:400px) {
      width: 80.74px;
      height: 35.81px;
      font-size: 90%;
   }
`

export const RandomMint = styled.button`
   width: 156.19px;
   height: 40px;
   border: 1px solid #000000;
   border-radius: 36px;
   margin: auto;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 29px;
   text-align: center;
   color: #000000;
   cursor: pointer;
`

export const BodyAllImg = styled.div`
   position: relative;
   width:100%;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
`

export const AllImgCont = styled.div`
   width: 100%;
   position: absolute;
   z-index:1;
   display: flex;
   align-items: space-between;
   justify-content: center;

   @media (max-width:730px) {
      display: none;
   }
`

export const AllImgContMobile = styled.div`
   width: 100%;
   position: absolute;
   z-index:1;
   display: flex;
   flex-direction: column;

   @media (min-width:730px) {
      display: none;
   }
`

export const TwoImgContMobile = styled.div.attrs((props: {marign: string, top:string} ) => props)`
   position: relative;
   margin:${(props) => props.marign};
   margin-bottom:${(props) => props.top};
   display: flex;
`

export const AllImg = styled.img`
   width: 220px;
   height: 220px;
   border-radius: 30px;
   margin-left:10px;

   @media (max-width:730px) {
      width: 168px;
      height: 168px;
      border-radius: 20px;
   }
`

export const DeleateNftHint = styled.div`
   position: absolute;
   top:5px;
   right:40px;
   width: 170px;
   height: 2.5em;
   background-color: #fff;
   color: #000;
   border-radius: 0px 15px 0px 15px;

   font-size:11px;
   padding-left:10px;

   @media (max-width:380px) {
      font-size:10px;
      width: 140px;
      height: 3.8em;
      overflow: hidden;
      padding-top:4px;
      top:-10px;
   }

   opacity:0;
   transition: opacity 0.5s;
`

export const DeleateNftBody = styled.div`
   position: absolute;
   z-index: 10000;
   top:10px;
   right:15px;

   &:hover ${DeleateNftHint}{
      opacity:1;
   }

   @media (max-width:380px) {
      top:18px;
   }
`

export const DeleateNft = styled.button`
   box-sizing: content-box;
   width: 2em;
   height: 2em;
   padding: 0.25em 0.25em;
   color: #000;
   border: 0;
   border-radius: 0.25rem;
   opacity: .8;
   cursor: pointer;
   background-color:#00000075;   
`



