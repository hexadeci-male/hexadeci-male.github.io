import { themeBase } from "./base"
import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react"

const random//: typeof theme
  = {
  styles: {
    global: {
      body: {
        color: 'themed.secondary',
        bg: 'themed.primary',
      },
      '*::placeholder': {
        color: 'gray.400',
      },
      '*, *::before, &::after': {
        borderColor: 'gray.700'
      },
    }
  },
  colors: {
    themed: {
      scheme: `${theme.colors.green[500]}`,
      primary: `${theme.colors.blackAlpha[900]}`,
      secondary: `${theme.colors.gray[200]}`,
      accent1: `${theme.colors.gray[900]}`,
      accent2: `${theme.colors.gray[600]}`,
      accent3: `${theme.colors.white}`,
      accent4: `${theme.colors.white}`,
      accent5: `${theme.colors.white}`,
      accent6: `${theme.colors.white}`,
      accent7: `${theme.colors.white}`,
    }
  },
}

export const themeRandom = extendTheme(
  random,
  withDefaultColorScheme({
    colorScheme: 'green'
  }),
  themeBase
)