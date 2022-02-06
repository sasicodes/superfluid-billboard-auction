import Header from '@components/Header'
import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'

import ContractJson from '../../abi/Auction.json'

const customHttpProvider = new ethers.providers.JsonRpcProvider(
  process.env.MUMBAI_RPC_URL as string
)

export default function Index() {
  const [{ data: signer }] = useSigner()

  const getWinner = async () => {
    const contract = new ethers.Contract(
      '0xFa920e03C4096C09ae20716c249f6d3A27114984',
      ContractJson.abi,
      signer
    )
    const winner = await contract.winner()
    console.log('🚀 ~ file: index.tsx ~ line 18 ~ getWinner ~ sf', winner)
  }

  async function createNewFlow(flowRate: any) {
    const sf = await Framework.create({
      chainId: 80001,
      provider: customHttpProvider
    })
    const MATICx = '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'
    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        flowRate: flowRate,
        receiver: '0xFa920e03C4096C09ae20716c249f6d3A27114984',
        superToken: MATICx
      })
      if (signer) {
        console.log('Creating your stream...')
        const result = await createFlowOperation.exec(signer)
        console.log(result)
        console.log(
          `Congrats - you've just created a money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/0xFa920e03C4096C09ae20716c249f6d3A27114984
        Network: Matic
        Super Token: MATICx
        FlowRate: ${flowRate}
        `
        )
      }
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      )
      console.error(error)
    }
  }

  return (
    <div className="container flex flex-col flex-1 max-w-screen-xl min-h-screen mx-auto">
      <Header />
      <div className="flex flex-col justify-between w-full gap-5 px-5 lg:flex-row">
        <button onClick={() => createNewFlow(23148148148148)}>
          Create flow
        </button>
        <button onClick={() => getWinner()}>Get winner</button>
      </div>
    </div>
  )
}
