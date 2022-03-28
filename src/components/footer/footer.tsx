import {
   FooterComp,
   Container,
   BodySoc,
   ContImgSoc,
   ImgSoc,
   JoinText,
} from './footer.styled'

import twi from '../header/img/TWI.svg';
import disc from '../header/img/DISC.svg';
import tg from '../header/img/TG.svg';
import IG from '../header/img/IG.svg';

function Footer() {
  return (
   <FooterComp 
      data-aos="fade-up"
   >
      <Container>
         <BodySoc 
            data-aos="fade-right"
            data-aos-delay="500"
         >
            <ContImgSoc href="https://twitter.com/monkeygames_nft">
               <ImgSoc src={twi} alt=""/>
            </ContImgSoc>

            <ContImgSoc href="https://discord.gg/jYmfePsXXu">
               <ImgSoc src={disc} alt=""/>
            </ContImgSoc>

            <ContImgSoc href="https://t.me/+SRgzKFVpwrk2MzZi">
               <ImgSoc src={tg} alt=""/>
            </ContImgSoc>

            <ContImgSoc href="https://www.instagram.com/MonkeyGames_NFT/">
               <ImgSoc src={IG} alt=""/>
            </ContImgSoc>
         </BodySoc>
         
         <JoinText 
            data-aos="fade-right"
            data-aos-delay="500"
         >JOIN US</JoinText>
      </Container>
   </FooterComp>
  );
}

export default Footer;