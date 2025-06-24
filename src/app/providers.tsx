"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { RainbowKitProvider, ConnectButton} from "@rainbow-me/rainbowkit"
import config from "@/rainbowKitConfig"
import React, { useState } from "react"
import {type ReactNode} from "react"
import { WagmiProvider } from "wagmi"
import "@rainbow-me/rainbowkit/styles.css"

export function Providers(props: {children: ReactNode}){

const [queryClient] = useState(() => new QueryClient())
   return ( 
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
                {props.children}
            </RainbowKitProvider>
        </QueryClientProvider>
           
    </WagmiProvider>
   )
}

