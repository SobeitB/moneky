import {
   Main,
   MainTitle,
   ContainerMarket,
   BodyMint,
   BodyImg,
   ImgNft,
   BodyInfo,
   NameInfo,
   NameIndex,
   BodyPriceMint,
   BodyPrice,
   Price,
   TextQuestion,
   RandomMint,
   BodyAllImg,
   AllImgCont,
   AllImg,
   AllImgContMobile,
   TwoImgContMobile,
   DeleateNftBody,
   DeleateNft,
   DeleateNftHint,
} from './marketPlace.styled'

import s from './market.module.css'

import eth from './img/eth.svg'
import monkey from '../main/img/nft/nft_one.png'
import allMeta from '../../build/json/_metadata.json'

import one from './img/monkey/1.png' 
import two from './img/monkey/2.png' 
import three from './img/monkey/3.png' 
import four from './img/monkey/4.png' 
import five from './img/monkey/5.png' 
import six from './img/monkey/6.png' 

import {useState, useEffect, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {chengedComponent} from '../../app/chengedSlice'
// import { ethers } from "ethers";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import nft from '../../nft.json';
import {CONTRACT_ADDRESS} from '../../params/contract'

interface props{
   contractValue:any;
   setErrors:(error: string) => void;
}

function MarcketPlace({contractValue, setErrors}: props) {
   const dispatch = useAppDispatch();
   const [mintItem, setMintItem] = useState<false | any>(false)
   const [isMint, setIsMint] = useState<boolean>(false)
   const {component} = useAppSelector((state:any) => state.chengedSlice);
   const {Moralis, chainId } = useMoralis();
   const { fetch } = useWeb3ExecuteFunction()

   let mainref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if(component === 'marketplace') {
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

   useEffect(() => {
      const onIdNft = async (id: number) => {
         let idNft = await allMeta.filter((_, index: number) => {
            return Number(allMeta[index].name.replace(/[^0-9]/g,"")) === Number(id)
         });

         setMintItem(idNft[0])
         setIsMint(true);
      }

      const onEvent = async () => {
         const contract = contractValue;
         contract.on('returnNewId', onIdNft)
      }

      const offEvent = async () => {
         const contract = contractValue;
         contract.off('returnNewId', onIdNft)
      }

      if(contractValue) {
         onEvent()
      }
      return () => {
         if(contractValue) {
            offEvent()
         }
      }
   }, [contractValue])

   const mintNft = () => async () => {
      // проверяем, подключена сеть майннет или нет
      if (chainId === '0x1') { 
         let options = {
            contractAddress: CONTRACT_ADDRESS,
            functionName: "mint",
            abi: nft,
            params: {},
            msgValue: Moralis.Units.ETH(0.002),
         };

         fetch({
            params: options,
            onSuccess: (tx:any) => tx.wait().then((newTx:any) => console.log(newTx)),
            onError: (error:any) => {
               console.log(error.message)
               if(error.message === 'Missing web3 instance, make sure to call Moralis.enableWeb3() or Moralis.authenticate()') {
                  // к сайту не подключен кошелёк
                  if(!Moralis.authenticate()) {
                     setErrors('Please connect the wallet to the site.')
                  }
               } else {
                  setErrors('Please check your balance.')
               }
            },
         })
      } else {
         // если сеть не майннет
         setErrors('Connect with one of available wallet.')
      } 
   }

   return (
     <Main ref={mainref}>
        <MainTitle data-aos={component !== 'marketplace' && "fade-down"}>MARKETPLACE</MainTitle>

        <ContainerMarket data-aos={component !== 'marketplace' && "fade-up"} >
            <BodyAllImg>
               <AllImgCont>
                  <AllImg src={three} alt="" />
                  <AllImg src={five} alt="" />
                  <AllImg src={one} alt="" />
                  <AllImg src={two} alt="" />
                  <AllImg src={three} alt="" />
                  <AllImg src={four} alt="" />
                  <AllImg src={five} alt="" />
                  <AllImg src={four} alt="" />
                  <AllImg src={one} alt="" />
                  <AllImg src={two} alt="" />
                  <AllImg src={six} alt="" />
               </AllImgCont>

               <AllImgContMobile>
                  <TwoImgContMobile
                     marign={`0 auto 0 0`}
                     top={`79px`}
                  >
                     <AllImg src={one} alt="" />
                     <AllImg src={two} alt="" />
                  </TwoImgContMobile>

                  <TwoImgContMobile 
                     marign={`0 0 0 auto`}
                     top={`173px`}
                  >
                     <AllImg src={three} alt="" />
                     <AllImg src={four} alt="" />
                  </TwoImgContMobile>

                  <TwoImgContMobile 
                     marign={`0 auto 0 0`}
                     top={`15px`}
                  >
                     <AllImg src={five} alt="" />
                     <AllImg src={six} alt="" />
                  </TwoImgContMobile>

                  <TwoImgContMobile 
                     marign={`0 0 0 auto`}
                     top={`0`}
                  >
                     <AllImg src={one} alt="" />
                     <AllImg src={three} alt="" />
                  </TwoImgContMobile>
               </AllImgContMobile>

               {!isMint && 
                  <BodyMint>
                     <BodyImg>
                        <TextQuestion>???</TextQuestion>
                        <ImgNft mint={false} src={monkey} alt="" />
                     </BodyImg>
            
                     <BodyInfo>
                        <RandomMint onClick={mintNft()}>Random</RandomMint>
                     </BodyInfo>
                  </BodyMint> 
               }

               {isMint && <BodyMint>
                  <BodyImg>
                     <DeleateNftBody>
                        <DeleateNft 
                           onClick={() => {
                              setIsMint(false)
                           }}
                           className={s.deleate} 
                        />
                        <DeleateNftHint >do you want to remove this nft from viewing in order to buy another one?</DeleateNftHint>
                     </DeleateNftBody>
                     <ImgNft mint={true} src={mintItem.image} alt="" />
                  </BodyImg>
         
                  <BodyInfo>
                     <NameInfo>
                        Hockey monkey 
                        <NameIndex> {mintItem.name.replace(/[^0-9]/g,"")}</NameIndex>
                     </NameInfo>
            
                     <BodyPriceMint>
                        <BodyPrice>
                           <img src={eth} alt="" />
            
                           <Price>0,02</Price>
                        </BodyPrice>
                     </BodyPriceMint>
                  </BodyInfo>
               </BodyMint>  }
            </BodyAllImg>
      </ContainerMarket>
     </Main> 
   );
}

export default MarcketPlace;