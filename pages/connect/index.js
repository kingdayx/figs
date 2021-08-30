import {
    Flex,
    Text,
    Image,
    SimpleGrid,
    Link,
} from "@chakra-ui/core";
import Web3 from "web3";

// import conflux from '../lib/conflux'
// import confluxPortal from '../../connectors/conflux-portal'

import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { injected, walletlink, walletconnect, fortmatic, portis } from "../../connectors";
  
 const ConnectWallet = () => {
//     connectConfluxPortal = async () => {
//         this.setState({ status: PORTAL_STATE_CONNECTING })
//         await confluxPortal.enable()
//         const account = confluxPortal.getAccount()
//         this.setState({ status: PORTAL_STATE_CONNECTED, account, balance: '' })
//         this.refreshBalance()
//       }
    
//     //   refreshBalance = async () => {
//     //     if (!this.state.account) {
//     //       return
//     //     }
//     //     this.setState({ balance: '' })
//     //     const balance = await conflux.getBalance(this.state.account)
//     //     this.setState({ balance: util.unit.fromDripToCFX(balance) })
//     //   }
    
//       renderPortalButton = () => {
//         if (this.state.status === PORTAL_STATE_CONNECTED) {
//           return (
//             <button className="btn btn-success">
//               Connected to Conflux Portal
//             </button>
//           )
//         } else if (this.state.status === PORTAL_STATE_CONNECTING) {
//           return (
//             <button className="btn btn-primary">
//               Connecting...
//             </button>
//           )
//         } else {
//           return (
//             <button className="btn btn-primary" onClick={this.connectConfluxPortal}>
//               Connect to Conflux Portal
//             </button>
//           )
//         }
//       }
    
//       renderConnectedAccount = () => {
//         if (this.state.status === PORTAL_STATE_CONNECTED) {
//           return (
//             <div className="mt-3">
//               <div>Account: <code>{this.state.account}</code></div>
//               <div className="d-flex align-items-center">
//                 <div className="mr-1">Balance: {this.state.balance ? `${this.state.balance} CFX` : 'Loading...'}</div>
//                 <span
//                   className="badge badge-primary"
//                   style={{ cursor: 'pointer' }}
//                   onClick={this.refreshBalance}
//                 >refresh</span>
//               </div>
//             </div>
//           )
//         }
//         return null
//       }
    
//       render () {
//         return (
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Conflux Portal</h5>
//               {this.renderPortalButton()}
//               {this.renderConnectedAccount()}
//             </div>
//           </div>
//         )
//       }
//     }
const getWeb3 = () =>
  new Promise(async(resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
      // Modern dapp browsers...
      if (window.conflux) {
        const web3 = new Web3(window.conflux);
        try {
          // Request account access if needed
          await window.conflux.enable();
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        alert("Please install Conflux portal!");
        resolve(web3);
      }
    });


  const handleConflux = async () =>{
     const conflux = await getWeb3();
    console.log("conflux portal", conflux)
  }
  function handleInjected() {
    const context = useWeb3React()
    const {  activate } = context
    activate(injected)
  
  }
    // const connections = [
    //     {name: "Metamask", image: "metamask.svg", connect:{injected}},
    //      {name: "Conflux Portal", image: "conflux.png", connect:{connectConflux}},
    //     // {name: "Wallet Connect", image: "walletconnect.svg", connect:{walletconnect}},
    //     // {name: "Kaikas", image: "kaikas.svg", connect:{injected}},
    //     // {name: "MyEtherWallet", image: "myetherwallet.svg", connect:{injected}},
    //     // // {name: "Fortmatic", image: "fortmatic.svg", connect:{fortmatic}},
    //     // {name: "Biteki", image: "biteki.svg", connect:{injected}},
    //     // {name: "WalletLink", image: "walletlink.svg", connect:{walletlink}},
    //     // {name: "Arkane", image: "arkane.svg", connect:{injected}},
    //     // {name: "Dopper", image: "dopper.svg", connect:{injected}},
    //     // {name: "Autherium", image: "autherium.svg", connect:{injected}},
    //     // {name: "Tours", image: "tours.svg", connect:{injected}},
    //     // {name: "Coinbase", image: "coinbase.svg", connect:{injected}},
    //     // {name: "Opera Touch", image: "opera.svg", connect:{injected}},
    //     // {name: "Trust", image: "trust.svg", connect:{injected}},
    // ];

    const renderTitleContent = () => {
        return (
            <Flex
                w="100%"
                flexDirection="column"
                p="5rem 0"
                borderBottom="1px solid #651AB2"
                bg="#1E1A21"
            >
                <Text fontFamily="PressStart2PRegular" fontSize="40px" textAlign="center">
                    Connect your wallet
                </Text>
                <Text textAlign="center" m="1rem">You can set preferred display name, create your branded profile <br/> URL and manage other personal settings</Text>
            </Flex>
        );
    }

    const renderConnections = () => {
        return (
            <Flex
                w="100%"
                flexDirection="column"
                p="7rem 0"
                bg="#1E1A21"
            >
                <Flex
                    w="100%"
                    maxW="70rem"
                    flexDirection="column"
                    margin="0 auto"
                    p="0 10px"
                >
                    <Link ml="0.5rem" maxW="25rem">
                        Connect with one of available wallet providers or create a new wallet.
                        <Text color="#942DFE" as="u" ml="0.5rem">What is a wallet?</Text>
                    </Link>
                    <SimpleGrid spacing="2rem" minChildWidth="20rem" w="100%" m="4rem 0 3rem 0">
                        {/* {connections.map((item, index) => {
                            return (
                                <Flex p="1.5rem 1rem" border="1px solid #942DFE" borderRadius="10px" key={index} cursor="pointer">
                                    <Image src={"/images/connect/" + item.image} onClick={item.connect} />
                                    <Text ml="1.5rem" fontWeight="700">{item.name}</Text>
                                </Flex>
                            )
                        })} */}
                         <Flex p="1.5rem 1rem" border="1px solid #942DFE" borderRadius="10px" cursor="pointer" onClick={handleConflux}>
                                    <Image src="/images/connect/conflux.png"  />
                                    <Text ml="1.5rem" fontWeight="700">Conflux</Text>
                                </Flex>
                                <Flex p="1.5rem 1rem" border="1px solid #942DFE" borderRadius="10px" cursor="pointer"  onClick={handleInjected}>
                                    <Image src="/images/connect/metamask.svg"  />
                                    <Text ml="1.5rem" fontWeight="700">Injected</Text>
                                </Flex>
                    </SimpleGrid>
                    <Flex flexDirection="row" justifyContent="center">
                        <Flex borderRadius="5px" p="0.8rem 0rem" cursor="pointer" w="30%" bg="linear-gradient(180deg, #942DFE 0%, #5A189C 100%)">
                            <Text fontWeight="500" fontSize="16px" m="auto">Create</Text>
                        </Flex>
                    </Flex>
                    <Text maxW="29rem" m="5rem 0 3rem 0">
                        We do not own your private keys and cannot access your funds without your confirmation.
                    </Text>
                </Flex>
            </Flex>
        );
    }

    return (
      <Flex flexDirection="column">
          {renderTitleContent()}
          {renderConnections()}
      </Flex>
    )
  };
  
  export default ConnectWallet;
  