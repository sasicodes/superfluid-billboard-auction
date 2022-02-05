import Header from '@components/Header'
import { useContract } from 'wagmi'

import contractMeta from '../../abi/Auction.json'

export default function Index() {
  const contract = useContract({
    addressOrName: '0xFa920e03C4096C09ae20716c249f6d3A27114984',
    contractInterface: contractMeta.abi
  })
  console.log('🚀 ~ file: index.tsx ~ line 11 ~ Index ~ contract', contract)
  return (
    <div className="container flex flex-col flex-1 max-w-screen-xl min-h-screen mx-auto">
      <Header />
      <div className="flex flex-col justify-between w-full gap-5 px-5 lg:flex-row">
        wip
      </div>
    </div>
  )
}
