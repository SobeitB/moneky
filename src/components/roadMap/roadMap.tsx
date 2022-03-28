import {
   MainComp,
   Body,
   RoadMapTitle,
   RoadMapComp,
   RoadMapCircle,
   RoadMapTextRigth,
   RoadMapTextLeft,
   RoadMapLine,
   Line,
   ImgEth,
   BodyImgEth,
   BodyImgEthWhite,
   RoadMapBtn,
   BodyRodampMobile,
   MainCompMobile
} from './roadMap.styled'

import { useEffect, useRef } from "react";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {chengedComponent} from '../../app/chengedSlice'

import line from './img/line.svg'
import Ethereum from './img/Ethereum.png'
import eth_white from './img/eth_white.png'

function RoadMap() {
   const dispatch = useAppDispatch();
   let mainref = useRef<HTMLDivElement>(null);
   const {component} = useAppSelector((state:any) => state.chengedSlice);

   useEffect(() => {
      if(component === 'roadmap') {
         if(mainref.current !== null) {
            mainref.current.scrollIntoView({
               block:"center",
               inline:"nearest",
               behavior:"smooth"
            })

            dispatch(chengedComponent(''));
         }
      }
   }, [component])

   const onComponent = (name: string) => () => {
      dispatch(chengedComponent(name))
   }

   return (
      <>
         <MainComp ref={mainref}>
            <Body>
               <BodyImgEth src={Ethereum} alt="" data-aos="fade-up"/>
               <RoadMapTitle 
                  data-aos="fade-down"
                  data-aos-duration="500"
               >ROADMAP</RoadMapTitle>

               <RoadMapComp>
                  <div>
                     <RoadMapTextLeft data-aos="fade-right" top={"235px"} >Arrange tournaments<br /> and reward the winners</RoadMapTextLeft>
                     <RoadMapTextLeft data-aos="fade-right" top={"460px"} >Create community<br /> merchandise</RoadMapTextLeft>
                     <RoadMapTextLeft data-aos="fade-right" top={"633px"} >
                        Create virtual training grounds<br />
                        for sportspeople where each<br /> MonkeyGames owner can power-level<br /> his sports character into the Olympic champion
                     </RoadMapTextLeft>
                  </div>

                  <RoadMapLine>
                     <Line src={line} alt="" />
                     <RoadMapCircle data-aos="flip-right">1</RoadMapCircle>
                     <RoadMapCircle data-aos="flip-left">2</RoadMapCircle>
                     <RoadMapCircle data-aos="flip-right">3</RoadMapCircle>
                     <RoadMapCircle data-aos="flip-left">4</RoadMapCircle>
                     <RoadMapCircle data-aos="flip-left">5</RoadMapCircle>
                     <RoadMapCircle data-aos="flip-left">6</RoadMapCircle>
                  </RoadMapLine>

                  <div>
                     <RoadMapTextRigth data-aos="fade-left" top={"82px"}>Launch the sales of the first<br /> collection</RoadMapTextRigth>
                     <RoadMapTextRigth data-aos="fade-left" top={"312px"}>Develop the community with support<br /> from big-name sportspeople</RoadMapTextRigth>
                     <RoadMapTextRigth data-aos="fade-left" top={"531px"}>Encourage community members to<br /> select the second sport by voting </RoadMapTextRigth>
                  </div>

                  <BodyImgEthWhite 
                     data-aos="flip-right"
                  >
                     <ImgEth src={eth_white} alt="" />
                  </BodyImgEthWhite>
               </RoadMapComp>

               <RoadMapBtn onClick={onComponent('marketplace')} data-aos="zoom-in">Mint</RoadMapBtn>
            </Body>
         </MainComp>

         <MainCompMobile ref={mainref}>
            <Body>
               <BodyImgEth src={Ethereum} alt="" data-aos="fade-up"/>
               <RoadMapTitle 
                  data-aos="fade-down"
                  data-aos-duration="500"
               >ROADMAP</RoadMapTitle>

               <RoadMapComp>
                  <RoadMapLine>
                     <Line src={line} alt="" />
                     <BodyRodampMobile align="center">
                        <RoadMapCircle data-aos="flip-left">1</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Launch the sales of the<br /> first collection</RoadMapTextRigth>
                     </BodyRodampMobile>

                     <BodyRodampMobile align="center">
                        <RoadMapCircle data-aos="flip-left">2</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Arrange tournaments<br /> and reward the winners</RoadMapTextRigth>
                     </BodyRodampMobile>

                     <BodyRodampMobile align="center">
                        <RoadMapCircle data-aos="flip-left">3</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Develop the community<br /> with support from big-<br />name sportspeople</RoadMapTextRigth>
                     </BodyRodampMobile>

                     <BodyRodampMobile align="center">
                        <RoadMapCircle data-aos="flip-left">4</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Create community<br /> merchandise</RoadMapTextRigth>
                     </BodyRodampMobile>

                     <BodyRodampMobile align="center">
                        <RoadMapCircle data-aos="flip-left">5</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Encourage community<br /> members to select the<br /> second sport by voting</RoadMapTextRigth>
                     </BodyRodampMobile>

                     <BodyRodampMobile align="flex-start">
                        <RoadMapCircle data-aos="flip-left">6</RoadMapCircle>
                        <RoadMapTextRigth data-aos="fade-left" top={"50px"}>Create virtual training<br /> grounds for<br /> sportspeople where<br /> each MonkeyGames<br /> owner can power-level<br /> his sports character<br /> into the Olympic champion</RoadMapTextRigth>
                     </BodyRodampMobile>
                  </RoadMapLine>
               </RoadMapComp>

               <RoadMapBtn onClick={onComponent('marketplace')} data-aos="zoom-in">Mint</RoadMapBtn>
            </Body>
         </MainCompMobile>
      </>
   );
}

export default RoadMap;