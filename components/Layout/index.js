import { useEffect }          from "react";
import { useRouter }          from "next/router";
import { Flex }               from "@chakra-ui/core";
import Header                 from "../Header";
import Footer                 from "../Footer";
import useDidMount            from "../../hooks/useDidMount";
import { scrollToPosition }   from "../../lib/scroll";

const Layout = ({ children }) => {
    const didMount = useDidMount();
    const router = useRouter();
    const { asPath } = router;
    /**
     * Scroll to top on each route change using `asPath` (resolved path),
     * not `pathname` (may be a dynamic route).
     */
    useEffect(() => {
      if (didMount) {
        scrollToPosition();
      }
    }, [asPath]);
  
    return (
        <Flex 
          w="100%"
          h="100vh"
          overflow="auto"
          flexDirection="column"
          bg="#000%"
          color="#fff"
        >
            <Header/>
            {children}
            <Footer/>
        </Flex>
    );
  };
  
  export default Layout;