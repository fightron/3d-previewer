import { ThreeClient } from '@dimensionalpocket/3d-client-three/src/ThreeClient'
import { HUMAN_SKELETON_JOINTS } from '@dimensionalpocket/3d-client-three/data/skeleton-definitions/human'

export const clientPlugin = {
  install (app, _options) {
    const client = new ThreeClient()

    client.feed('add', 'scene', { id: 'previewer-scene' })
    client.feed('add', 'camera', { id: 'previewer-camera', fov: 30 })
    client.feed('add', 'light', { id: 'previewer-light', color: 'grey' })
    client.feed('add', 'skeleton-definition', { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    client.feed('add', 'skeleton', { id: 'skeleton-1', definition: 'human' })
    client.feed('add', 'skeleton', { id: 'skeleton-2', definition: 'human' })
    client.feed('add', 'skeleton', { id: 'skeleton-3', definition: 'human' })
    client.feed('add', 'point', { id: 'skeleton-point-1' })
    client.feed('add', 'point', { id: 'skeleton-point-2' })
    client.feed('add', 'point', { id: 'skeleton-point-3' })

    client.feed('position', 'camera', 'previewer-camera', 0, 1, 6)
    client.feed('position', 'point', 'skeleton-point-1', 1.8, 0, -0.5)
    client.feed('position', 'point', 'skeleton-point-2', -1.8, 0, -0.5)
    client.feed('rotate', 'point', 'skeleton-point-1', 0, -1.5, 0)
    client.feed('rotate', 'point', 'skeleton-point-2', 0, 1.5, 0)

    client.feed('attach', 'camera', 'previewer-camera', 'scene', 'previewer-scene')
    client.feed('attach', 'light', 'previewer-light', 'scene', 'previewer-scene')
    client.feed('attach', 'skeleton', 'skeleton-1', 'point', 'skeleton-point-1')
    client.feed('attach', 'skeleton', 'skeleton-2', 'point', 'skeleton-point-2')
    client.feed('attach', 'skeleton', 'skeleton-3', 'point', 'skeleton-point-3')
    client.feed('attach', 'point', 'skeleton-point-1', 'scene', 'previewer-scene')
    client.feed('attach', 'point', 'skeleton-point-2', 'scene', 'previewer-scene')
    client.feed('attach', 'point', 'skeleton-point-3', 'scene', 'previewer-scene')

    client.feed('camera', 'previewer-camera')
    client.feed('scene', 'previewer-scene')

    client.feed('helper', 'RenderVolumes', 'skeleton-1', true)
    client.feed('helper', 'RenderVolumes', 'skeleton-2', true)
    client.feed('helper', 'RenderVolumes', 'skeleton-3', true)

    // var skeleton = client.data.skeletons.get('skeleton-1')
    // var scene = client.data.scenes.get('previewer-scene')
    // var camera = client.data.cameras.get('previewer-camera')

    // console.log(skeleton)
    // console.log(camera)

    window.client = client

    app.provide('client', client)
  }
}
