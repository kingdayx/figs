import { ChakraProvider }     from "@chakra-ui/core";
import Layout                 from "../components/Layout";
import theme                  from "../theme";
import "../styles/globals.css";
import { Web3ReactProvider} from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider){
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


const fakeStorageManager = {
  get: () => "dark",
  set: (value) => {},
  type: "cookie",
};

const App = ({ Component, pageProps }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <ChakraProvider theme={theme} colorModeManager={fakeStorageManager}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </Web3ReactProvider>
  )
};

export default App;
