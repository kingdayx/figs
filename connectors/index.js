import { InjectedConnector } from '@web3-react/injected-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { PortisConnector } from '@web3-react/portis-connector'

// import { FortmaticConnector } from './Fortmatic'

const INFURA_KEY = "26ed940d0cd04a1db352b58eb22e1e88"
// const FORMATIC_KEY = "pk_live_FC92F3A55C1EEDB2"
// const PORTIS_ID = 'aaa6fd95-0320-4dbb-9124-1755818b2017'
// const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org"

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

// const NETWORK_URLS= {
//   [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.ARBITRUM_KOVAN]: `https://kovan5.arbitrum.io/rpc`,
//   [SupportedChainId.ARBITRUM_ONE]: `https://arb1.arbitrum.io/rpc`,
// }

// const SUPPORTED_CHAIN_IDS = [
//   SupportedChainId.MAINNET,
//   SupportedChainId.KOVAN,
//   SupportedChainId.GOERLI,
//   SupportedChainId.RINKEBY,
//   SupportedChainId.ROPSTEN,
//   SupportedChainId.ARBITRUM_KOVAN,
//   SupportedChainId.ARBITRUM_ONE,
// ]

// export const network = new NetworkConnector({
//   defaultChainId: 1029,
// })


export const injected = new InjectedConnector({
  supportedChainIds: [1029],
})

// export const walletconnect = new WalletConnectConnector({
//   supportedChainIds: 1029,
//   rpc: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
//   bridge: WALLETCONNECT_BRIDGE_URL,
//   qrcode: true,
//   pollingInterval: 15000,
// })

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1029,
// })

// // mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? '',
//   networks: [1029],
// })

// // mainnet only
// export const walletlink = new WalletLinkConnector({
//   url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
//   appName: 'Figgy',
// })
