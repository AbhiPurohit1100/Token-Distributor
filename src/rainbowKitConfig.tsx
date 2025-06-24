"use client"
import { anvil, zksync , mainnet} from "wagmi/chains";
import { getDefaultConfig } from '@rainbow-me/rainbowkit';


export default getDefaultConfig({
  appName: 'My-App',
  projectId: process.env.NEXT_PUBLIC_WALLET_ID!,
  chains: [anvil, zksync,mainnet],
  ssr: false, 
});