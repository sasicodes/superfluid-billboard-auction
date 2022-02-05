import { LogoutIcon } from '@heroicons/react/outline'
import shortenAddress from '@utils/helpers/shortenAddress'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useNetwork } from 'wagmi'

const Header = () => {
  const router = useRouter()

  const { isAuthenticated, authenticate, logout, user } = useMoralis()
  const [{ data: network }, switchNetwork] = useNetwork()

  const onConnect = async () => {
    await authenticate({
      signingMessage: 'Authorize linking of your wallet'
    })
  }

  const onLogout = () => {
    logout()
    router.push('/')
  }

  useEffect(() => {
    if (network.chain?.unsupported) {
      onLogout()
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
              : onConnect()
          }
          disabled={isAuthenticated}
          className={clsx(
            'space-x-2 hidden lg:flex items-center justify-center px-4 py-1.5 overflow-hidden  border-2 border-transparent outline-none rounded-lg border-gray-700',
            {
              'border-red-400': network.chain?.unsupported,
              'hover:bg-gray-700': !isAuthenticated
            }
          )}
        >
          <div>
            {isAuthenticated && !network.chain?.unsupported ? (
              <span>{shortenAddress(user?.get('ethAddress'))}</span>
            ) : network.chain?.unsupported && switchNetwork ? (
              'Switch Network'
            ) : (
              'Connect Wallet'
            )}
          </div>
        </button>
        {isAuthenticated && (
          <button
            onClick={() => onLogout()}
            className="flex items-center justify-center px-4 py-2 overflow-hidden border-2 border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <LogoutIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
