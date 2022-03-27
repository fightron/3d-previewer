import { ThreeClient } from '@dimensionalpocket/3d-client-three/src/ThreeClient'
import { HUMAN_SKELETON_JOINTS } from '@dimensionalpocket/3d-client-three/data/skeleton-definitions/human'

export const clientPlugin = {
  install (app, _options) {
    const client = new ThreeClient()

    client.feed('add', 'scene', { id: 'previewer-scene' })
    client.feed('add', 'camera', { id: 'previewer-camera' })
    client.feed('add', 'light', { id: 'previewer-light', color: 'silver' })
    client.feed('add', 'skeleton-definition', { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    client.feed('add', 'skeleton', { id: 'previewer-skeleton', definition: 'human' })

    client.feed('position', 'camera', 'previewer-camera', 0, 1, 2.8)

    client.feed('attach', 'camera', 'previewer-camera', 'scene', 'previewer-scene')
    client.feed('attach', 'light', 'previewer-light', 'scene', 'previewer-scene')
    client.feed('attach', 'skeleton', 'previewer-skeleton', 'scene', 'previewer-scene')

    client.feed('camera', 'previewer-camera')
    client.feed('scene', 'previewer-scene')

    client.feed('helper', 'RenderVolumes', 'previewer-skeleton')

    var skeleton = client.data.skeletons.get('previewer-skeleton')
    var scene = client.data.scenes.get('previewer-scene')
    var camera = client.data.cameras.get('previewer-camera')

    scene.add(skeleton.bones[0])

    console.log(skeleton)
    // console.log(camera)

    app.provide('client', client)
  }
}
