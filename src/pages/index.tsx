import Header from '@components/Header'

export default function Index() {
  async function createNewFlow(flowRate: any) {
    // const sf = await Framework.create({
    //   chainId: 80001,
    //   provider: customHttpProvider
    // })
    // const signer = customHttpProvider.getSigner()
    // const MATICx = '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4'
    // try {
    //   const createFlowOperation = sf.cfaV1.createFlow({
    //     flowRate: flowRate,
    //     receiver: '0xFa920e03C4096C09ae20716c249f6d3A27114984',
    //     superToken: MATICx
    //   })
    //   console.log('Creating your stream...')
    //   const result = await createFlowOperation.exec(signer)
    //   console.log(result)
    //   console.log(
    //     `Congrats - you've just created a money stream!
    // View Your Stream At: https://app.superfluid.finance/dashboard/0xFa920e03C4096C09ae20716c249f6d3A27114984
    // Network: Kovan
    // Super Token: DAIx
    // Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    // Receiver: 0xFa920e03C4096C09ae20716c249f6d3A27114984,
    // FlowRate: ${flowRate}
    // `
    //   )
    // } catch (error) {
    //   console.log(
    //     "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    //   )
    //   console.error(error)
    // }
  }

  return (
    <div className="container flex flex-col flex-1 max-w-screen-xl min-h-screen mx-auto">
      <Header />
      <div className="flex flex-col justify-between w-full gap-5 px-5 lg:flex-row">
        <button onClick={() => createNewFlow(1)}>Create flow</button>
      </div>
    </div>
  )
}
