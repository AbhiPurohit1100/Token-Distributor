"use client";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useState, useMemo } from "react";
import CalculateTotal from "@/utils/CalculateTotal";
import {readContract } from "@wagmi/core"
import { useChainId, useConfig, useAccount} from "wagmi";
import { config } from "process";
export default function TTokenSender() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");
  const chainId = useChainId()
  const config = useConfig()
  const userAdress = useAccount()

  const total: number = useMemo(() => CalculateTotal(amounts), [amounts])
  console.log(total)


  async function getApprovedAmount(tsenderAdress: string | null): Promise<number> {
    if(!tsenderAdress){
      alert("Adress not found, please use a supported chain")
      return 0;
    }
    const response = await readContract(config, {
      abi : erc20Abi,
      address: tokenAddress as `0x${string}`, 
      functionName: "allowance",
      args: [userAdress.address, tsenderAdress as `0x${string}` ],

    })
    return response as number
    
    
  }



  async function HandleSubmit(){
    const tsenderAdress= chainsToTSender[chainId]["tsender"]
    console.log(tsenderAdress, chainId)
    const approvedAmmount = await getApprovedAmount(tsenderAdress)
    console.log(approvedAmmount)

}






  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl border border-gray-300 shadow-sm bg-white dark:bg-gray-900 transition-all">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">T-Sender</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Token Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100"
            placeholder="0x"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Recipients (comma or new line separated)
          </label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amounts (wei; comma or new line separated)
          </label>
          <textarea
            rows={2}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100"
            value={amounts}
            onChange={(e) => setAmounts(e.target.value)}
            placeholder="100, 200, 300..."
          />
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm">
          <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">Transaction Details</div>
          <div className="text-gray-700 dark:text-gray-300">Token Name: <span className="font-semibold">-</span></div>
          <div className="text-gray-700 dark:text-gray-300">Amount (wei): <span className="font-semibold">0</span></div>
          <div className="text-gray-700 dark:text-gray-300">Amount (tokens): <span className="font-semibold">0.00</span></div>
        </div>

        <button className="w-full py-2 px-4 rounded-lg bg-blue-400 hover:bg-blue-800 text-white text-sm font-semibold transition" onClick={HandleSubmit}>
          Send Tokens
        </button>
      </div>
    </div>
  );
}
