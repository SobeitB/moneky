import {
   HeaderComp,
   Container,
   NavigationBar,
   TextBar,
   BodyRigth,
   SocBar,
   СonnectWalletBtn,
   СonnectWalletBtnMobile,
   MenuMobile,
   MenuItemMobile,
} from './header.styled'

import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {useAppDispatch} from '../../app/hooks'
import {chengedComponent} from '../../app/chengedSlice'
import {getContract} from '../../params/contract'

import twi from './img/TWI.svg';
import disc from './img/DISC.svg';
import tg from './img/TG.svg';
import IG from './img/IG.svg';
import Menu from '../menu/Menu';

interface contractI {
   setContract:(contract: any) => void;
}

function Header({setContract}: contractI) {
   const { 
      authenticate, 
      logout,
      account, 
   } = useMoralis();
   const dispatch = useAppDispatch();
   const [menu, setMenu] = useState<boolean>(false);

   const onContract = async () => {
      const contract = await getContract() 
      setContract(contract)
   }

   const connectWallet = () => {
      authenticate({
         provider: "walletconnect",
         chainId: 1,
         mobileLinks: [
            "metamask",
            "trust",
            "rainbow",
            "coinbase",
            "blockchain"
         ],
         signingMessage: "Welcome!",
      });
   }

   useEffect(() => {
      if(typeof account === "string") {
         onContract()
      }
   }, [account, setContract])

   const onComponent = (name: string) => () => {
      dispatch(chengedComponent(name))
   }

  return (
   <>
      <HeaderComp>
         <Container>
            <СonnectWalletBtnMobile 
               onClick={() => {
                  if(!account) {
                     if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
                        connectWallet()
                     } else if(!window.ethereum) {
                        connectWallet()
                     } else {
                        authenticate({signingMessage: "Welcome!"});
                     }
                  } else {
                     logout()
                  }
               }}
            >
               {!account ? 'Connect' : 'Disconnect'}
            </СonnectWalletBtnMobile>
            <NavigationBar 
               data-aos="fade-right"
               data-aos-duration="2000"
               data-aos-easing="ease-in-back"
            >
               <TextBar onClick={onComponent('roadmap')}>ROADMAP</TextBar>
               <TextBar onClick={onComponent('marketplace')}>MARKETPLACE</TextBar>
               <TextBar onClick={onComponent('faq')}>FAQ</TextBar>
            </NavigationBar>
            <BodyRigth
               data-aos="fade-left"
               data-aos-duration="2000"
               data-aos-easing="ease-in-back"
            >
               <SocBar>
                  <a href="https://twitter.com/monkeygames_nft">
                     <img src={twi} alt="twi"/>
                  </a>

                  <a href="https://discord.gg/jYmfePsXXu" >
                     <img src={disc} alt="disc"/>
                  </a>

                  <a href="https://t.me/+SRgzKFVpwrk2MzZi" >
                     <img src={tg} alt="tg"/>
                  </a>

                  <a href="https://www.instagram.com/MonkeyGames_NFT/">
                     <img src={IG} alt="IG"/>
                  </a>
               </SocBar>

               <СonnectWalletBtn 
                  onClick={() => {
                     if(!account) {
                        if(!window.ethereum) {
                           connectWallet()
                        } else {
                           authenticate({signingMessage: "Welcome!"});
                        }
                     } else {
                        logout();
                     }
                  }}
               >
                  {!account ? 'Connect' : 'Disconnect'}
               </СonnectWalletBtn>
            </BodyRigth>

            <MenuMobile onClick={() => setMenu(!menu)} >
               <MenuItemMobile />
               <MenuItemMobile />
               <MenuItemMobile />
            </MenuMobile>
         </Container>
      </HeaderComp>

      {menu && 
         <Menu 
            menu={menu}
            changeMenu={setMenu}
         />
      }
   </>
  );
}

export default Header;