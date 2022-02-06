import shortenAddress from '@utils/helpers/shortenAddress'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAccount, useConnect, useNetwork } from 'wagmi'

const Header = () => {
  const router = useRouter()

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: connectData }, connect] = useConnect()
  const [{ data: account }] = useAccount()

  useEffect(() => {
    if (network.chain?.unsupported) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network.chain?.unsupported])

  return (
    <header className="sticky top-0 font-mono left-0 right-0 z-10 flex items-center justify-between px-5 py-4 bg-opacity-70 backdrop-filter backdrop-blur bg-[#0f172a]">
      <div className="flex items-center space-x-2 text-xl ">
        <span className="text-xl">🥳 Liverse</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() =>
            network.chain?.unsupported && switchNetwork
              ? switchNetwork(80001)
              : connect(connectData.connectors[0])
          }
          className={clsx(
            'space-x-2 hidden lg:flex items-center justify-center px-4 py-1.5 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700',
            {
              'border-red-400': network.chain?.unsupported,
              'hover:bg-gray-700': !connectData.connected
            }
          )}
        >
          <div>
            {account?.address &&
            connectData.connected &&
            !network.chain?.unsupported ? (
              <span>{shortenAddress(account?.address)}</span>
            ) : network.chain?.unsupported && switchNetwork ? (
              'Switch Network'
            ) : (
              'Connect Wallet'
            )}
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header
