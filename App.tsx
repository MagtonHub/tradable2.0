import { TamaguiProvider, createTamagui, Button } from 'tamagui'
import { config } from './tamagui.config.ts'

type Conf = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <Button theme="warning">Hello world</Button>
      <Button theme="error">Hello world</Button>
      <Button theme="success">Hello world</Button>
      <Button theme="accent">Hello world</Button>
    </TamaguiProvider>
  )
}