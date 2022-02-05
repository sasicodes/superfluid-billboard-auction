import { network } from 'hardhat'
import hre from 'hardhat'

const main = async () => {
  const host = '0xEB796bdb90fFA0f28255275e16936D25d3418603'
  const cfa = '0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873'
  const maticx = '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'

  console.log(`Deploying on ${network.name}`)
  const auction = await hre.ethers.getContractFactory('Auction')
  const auctionTxn = await auction.deploy(host, cfa, maticx, '110000')
  await auctionTxn.deployed()
  console.log('Contract deployed to:', auctionTxn.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
