import styled from 'styled-components'

export const MenuContainer = styled.div`
   position: fixed;
   top:0;
   z-index:1900;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background: #121318;
   opacity: 0.5;
`

export const MenuComp = styled.div`
   position:fixed;
   z-index:2000;
   top:0;
   right: 0;
   box-sizing: border-box;
   width: 306px;
   height: 100%;
   padding-top:30px;
   padding-left:30px;
   background: #121318;

   display: flex;
   flex-direction: column;
   justify-content:space-between;
`

export const MenuLinkBody = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom:37px;
`

export const LinkImg = styled.img`
   width: 45.09px;
   height: 36.36px;
   margin-bottom:21px;
   cursor: pointer;
`

export const MenuLink = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 64px;
   color: #FFFFFF;
   margin-bottom:5px
   cursor: pointer;
   display:block;
   text-decoration: none;
`




