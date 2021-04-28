import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      pink: string
      purple: string
      gray: string
      background: string
    }
  }
}
