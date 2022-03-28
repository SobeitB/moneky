import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import nft from '../nft.json';

declare global {
   interface Window {
      ethereum?: any;
   }
}

export const CONTRACT_ADDRESS:string = "0x768Cd79eCaeA81f61D102936D00a0CCbf9fe8a38";
export async function getContract() {
   try{
      const {ethereum} = window;

      if(!ethereum) {
         const providerWallet = new WalletConnectProvider({
            infuraId: "77be13dcb523408ebfecc768818e1b11",
         });
         await providerWallet.enable();
         const provider = await new ethers.providers.Web3Provider(providerWallet)
         const signer = provider.getSigner()

         const contract = new ethers.Contract(
            CONTRACT_ADDRESS, 
            nft,
            signer
         );
   
         return contract
      } else {
         if(ethereum) {
            const provider = await new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
      
            const contract = new ethers.Contract(
               CONTRACT_ADDRESS, 
               nft,
               signer
            );
            return contract
         }
      }
   } catch(error:any) {
      console.log(error.message)
   }
}


 