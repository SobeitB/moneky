import {
   MainComp,
   Performance,
   PerformanceTitle,
   PerformanceInfo,
   ContBtn,
   OpenSeaBtn,
   NextBtn,
   BodyNft,
   Nft,
   NftImg,
   BodyText,
   MonkeyTitle,
   ImgMedals,
   ContText,
   TitleText,
   TwoText,
   ThreeText,
   ImgMedalsMobile,
   PerformanceTitleTwo,
   ImgHockeyPc,
   ImgHockeyMobile,
   ImgBodyMob
} from './main.styled'

import next from './img/next.svg'
import medals from './img/medals.png'
import hockey_pc from './img/hockey_pc.png'
import hockey_mob from './img/hockey_mob.png'

import nft_one from './img/nft/nft_one.png'
import nft_two from './img/nft/nft_two.png'
import nft_three from './img/nft/nft_three.png'

import {chengedComponent} from '../../app/chengedSlice'
import {useAppDispatch} from '../../app/hooks'

function Main() {
   const dispatch = useAppDispatch();
   
   const onComponent = (name: string) => () => {
      dispatch(chengedComponent(name))
   }

   return (
      <MainComp >
         <Performance>
            <PerformanceTitle
               data-aos="fade-left"
            >
               <MonkeyTitle>Monkey</MonkeyTitle>Games
            </PerformanceTitle>

            <PerformanceTitleTwo>Hockey collection on the metaverse</PerformanceTitleTwo>

            <PerformanceInfo
               data-aos="fade-left"
            >
               The Ape Planet meets New Year 2022 anticipating the start of glorious competitions.
            </PerformanceInfo>

            <ContBtn
               data-aos="fade-up"
               data-aos-duration="1500"
               data-aos-easing="ease-in-back"
            >
               <OpenSeaBtn>OpenSea</OpenSeaBtn>
               <a onClick={onComponent('marketplace')}>
                  <NextBtn><img src={next} alt="" /></NextBtn>
               </a>
            </ContBtn>
         </Performance>

         <BodyNft
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
         >
            <Nft 
               top={"182px"}
            >
               <NftImg src={nft_one} alt="nft_one"/>
               <ImgMedals src={medals} alt="" />
               <ImgHockeyPc src={hockey_pc} alt="hockey_pc"/> 
            </Nft>

            <Nft 
               top={"112px"}
               data-aos="flip-right"
               data-aos-duration="2100"
            >
               <NftImg src={nft_two} alt="nft_two"/>
            </Nft>

            <Nft
               data-aos="flip-left" 
               data-aos-duration="2100"
            >
               <NftImg src={nft_three} alt="nft_three"/>
            </Nft>
         </BodyNft>

         <BodyText>
            <ContText>
               <TitleText>The best sports people representing<br /> each kingdom arrive in the capital to<br /> participate in the annual Olympic<br /> Games. They will contest the victory<br /> to take the main prize – Olympic<br /> medal 2022. The tournament starts<br /> with Ice hockey competitions.</TitleText>
               <TwoText>Will the teams win or lose? Will they see the<br /> Olympic gold glittering or scenes of<br /> disappointment?</TwoText>
               <ThreeText>The players are ready, the arena is full with supporters, and<br /> so the game starts! You will review 1016 NFTs in various<br /> sports. Cast your votes and choose the next sport for the<br /> winter Olympic Games 2022 schedule on the Ape Planet. </ThreeText>

               <ImgBodyMob>
                  <ImgMedalsMobile src={medals} alt="" />
                  <ImgHockeyMobile src={hockey_mob} alt="" />
               </ImgBodyMob>
            </ContText>
         </BodyText>
      </MainComp>
   );
}

export default Main;