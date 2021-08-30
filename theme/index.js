import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/core';
const styles = {
  global: props => ({
    body: {
      color: mode('white', 'white')(props),
      bg: mode('#1e1a21', '#1e1a21')(props),
    },
  }),
};
const colors = {
  borderColor: {
    100: "#313131",
  },
}
const components = {
};

const theme = extendTheme({
  components,
  styles,
  colors
});

export default theme;