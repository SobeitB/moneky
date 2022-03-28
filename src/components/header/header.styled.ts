import styled from 'styled-components'

export const HeaderComp = styled.header`
   min-height: 112px;
   height: 112px;
   width: 100%;
   mix-blend-mode: normal;
   border-bottom: 2px solid rgba(146, 145, 145, 0.2);;

   @media (max-width:777px) {
      border-bottom: 0px solid #929191;
   }
`

export const Container = styled.div`
   max-width:1340px;
   height: 100%;
   padding: 0 15px;
   margin:0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const NavigationBar = styled.div`
   width:431px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-right:50px;
   @media (max-width:777px) {
      display: none;
   }
`

export const TextBar = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 29px;
   color: #FFFFFF;
   cursor: pointer;
   text-decoration: none;
`

export const BodyRigth = styled.div`
   display: flex;
   align-items: center;
   @media (max-width:777px) {
      display: none;
   }
`

export const SocBar = styled.div`
   width:177px;
   @media (max-width:860px) {
      width:150px;
   }
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const СonnectWalletBtn = styled.button`
   width: 156.19px;
   height: 40px;
   margin-left:50px;

   @media (max-width:860px) {
      margin-left:30px;
   }

   @media (max-width:777px) {
      margin-left:0px;
   }
   
   background: none;
   border: 1px solid #FFFFFF;
   border-radius: 36px;

   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 29px;
   text-align: center;
   color: #FFFFFF;
   cursor: pointer;
`

export const СonnectWalletBtnMobile = styled(СonnectWalletBtn)`
   display: none;
   @media (max-width:777px) {
      display: block;
      width: 120px;
      height: 40.79px;     
      font-size: 14px;
      line-height: 29px;
   }

   @media (max-width:350px){
      width: 99px;
      height: 29.79px;    
   }
`

export const MenuMobile = styled.div`
   flex-direction: column;
   justify-content: space-between;
   height: 20px;
   cursor:pointer;

   display: none;
   @media (max-width:777px) {
      display: flex;
   }
`

export const MenuItemMobile = styled.div`
   width: 30px;
   height: 4px;   
   background: #FE3E08;
`