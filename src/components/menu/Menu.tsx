import {
   MenuContainer,
   MenuComp,
   MenuLink,
   LinkImg,
   MenuLinkBody
} from './Menu.styled'

import twi from '../header/img/TWI.svg';
import disc from '../header/img/DISC.svg';
import tg from '../header//img/TG.svg';
import IG from '../header//img/IG.svg';

import {useAppDispatch} from '../../app/hooks'
import {chengedComponent} from '../../app/chengedSlice'

interface menuProps {   
   menu:boolean;
   changeMenu: (menu: boolean) => void;
}

const Menu: React.FC<menuProps> = ({menu, changeMenu}) => {
   const dispatch = useAppDispatch();
   const onComponent = (name: string) => () => {
      dispatch(chengedComponent(name))
   }

  return (
   <>
      <MenuContainer onClick={() => changeMenu(!menu)} />

      <MenuComp 
         data-aos="fade-left"
         data-aos-anchor="#example-anchor"
         data-aos-offset="500"
         data-aos-duration="500"
      >
         <div>
            <MenuLink onClick={onComponent('roadmap')}>ROADMAP</MenuLink>
            <MenuLink onClick={onComponent('marketplace')}>MARKETPLACE</MenuLink>
            <MenuLink onClick={onComponent('faq')}>FAQ</MenuLink>
         </div>

         <MenuLinkBody>
            <a href="https://twitter.com/monkeygames_nft" >
               <LinkImg  src={twi} alt=""/>  
            </a>
            <a href="https://discord.gg/jYmfePsXXu" >
               <LinkImg src={disc} alt=""/>   
            </a>

            <a href="https://t.me/+SRgzKFVpwrk2MzZi" >
               <LinkImg src={tg} alt=""/>   
            </a>

            <a href="https://www.instagram.com/MonkeyGames_NFT/">
               <LinkImg src={IG} alt=""/>   
            </a>
         </MenuLinkBody>
      </MenuComp>
   </>
  );
}

export default Menu;