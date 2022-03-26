import { ThreeClient } from '@dimensionalpocket/3d-client-three/src/ThreeClient'

export const clientPlugin = {
  install (app, _options) {
    const client = new ThreeClient()
    app.provide('client', client)
  }
}
