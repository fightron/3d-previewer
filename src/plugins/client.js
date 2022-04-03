import { ThreeClient } from '@dimensionalpocket/3d-client-three/src/ThreeClient'
import { HUMAN_SKELETON_JOINTS } from '@dimensionalpocket/3d-client-three/data/skeleton-definitions/human'

export const clientPlugin = {
  install (app, _options) {
    const client = new ThreeClient()

    client.feed('add', 'scene', { id: 'previewer-scene', bgcolor: '#b0ceff' })
    client.feed('add', 'camera', { id: 'previewer-camera', fov: 30 })
    client.feed('add', 'light', { id: 'previewer-light', color: '#777777', type: 'ambient' })
    client.feed('add', 'light', { id: 'previewer-sun', color: '#888888', type: 'directional' })
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
    client.feed('position', 'light', 'previewer-sun', 0, 2, 4)
    client.feed('rotate', 'point', 'skeleton-point-1', 0, -1.5, 0)
    client.feed('rotate', 'point', 'skeleton-point-2', 0, 1.5, 0)

    client.feed('attach', 'camera', 'previewer-camera', 'scene', 'previewer-scene')
    client.feed('attach', 'light', 'previewer-light', 'scene', 'previewer-scene')
    client.feed('attach', 'light', 'previewer-sun', 'scene', 'previewer-scene')
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

    client.feed('add', 'pose', {
      id: 'pose-1',
      skeleton: 'human',
      clear: false,
      transforms: [
        { joint: 'hipL', rotation: { y: 0.4, z: 0.05 } },
        { joint: 'hipR', rotation: { y: -0.4, z: -0.05 } },
        { joint: 'clavicleL', rotation: { x: 0.3 } },
        { joint: 'clavicleR', rotation: { x: 0.3 } },
        { joint: 'shoulderL', rotation: { z: 0.1 } },
        { joint: 'shoulderR', rotation: { z: -0.1 } },
        { joint: 'elbowL', rotation: { x: -0.4, y: -1.4 } },
        { joint: 'elbowR', rotation: { x: -0.4, y: 1.4 } }
      ]
    })

    client.feed('add', 'pose', {
      id: 'rested-hand-L',
      skeleton: 'human',
      transforms: [
        { joint: 'thumbL1', rotation: { x: -0.1, y: -0.4, z: 0.2 } },
        { joint: 'thumbL2', rotation: { x: -0.2 } },
        { joint: 'thumbL3', rotation: { x: -0.2 } },
        { joint: 'indexL1', rotation: { x: -0.1, z: 0.3 } },
        { joint: 'indexL2', rotation: { x: -0.2 } },
        { joint: 'indexL3', rotation: { x: -0.2 } },
        { joint: 'middleL1', rotation: { x: -0.1, z: 0.1 } },
        { joint: 'middleL2', rotation: { x: -0.2 } },
        { joint: 'middleL3', rotation: { x: -0.2 } },
        { joint: 'ringL1', rotation: { x: -0.1, z: -0.1 } },
        { joint: 'ringL2', rotation: { x: -0.2 } },
        { joint: 'ringL3', rotation: { x: -0.2 } },
        { joint: 'pinkyL1', rotation: { x: -0.1, z: -0.2 } },
        { joint: 'pinkyL2', rotation: { x: -0.2 } },
        { joint: 'pinkyL3', rotation: { x: -0.2 } }
      ]
    })

    client.feed('add', 'pose', {
      id: 'rested-hand-R',
      skeleton: 'human',
      transforms: [
        { joint: 'thumbR1', rotation: { x: -0.1, y: -0.4, z: -0.2 } },
        { joint: 'thumbR2', rotation: { x: -0.2 } },
        { joint: 'thumbR3', rotation: { x: -0.2 } },
        { joint: 'indexR1', rotation: { x: -0.1, z: -0.3 } },
        { joint: 'indexR2', rotation: { x: -0.2 } },
        { joint: 'indexR3', rotation: { x: -0.2 } },
        { joint: 'middleR1', rotation: { x: -0.1, z: -0.1 } },
        { joint: 'middleR2', rotation: { x: -0.2 } },
        { joint: 'middleR3', rotation: { x: -0.2 } },
        { joint: 'ringR1', rotation: { x: -0.1, z: 0.1 } },
        { joint: 'ringR2', rotation: { x: -0.2 } },
        { joint: 'ringR3', rotation: { x: -0.2 } },
        { joint: 'pinkyR1', rotation: { x: -0.1, z: 0.2 } },
        { joint: 'pinkyR2', rotation: { x: -0.2 } },
        { joint: 'pinkyR3', rotation: { x: -0.2 } }
      ]
    })

    client.feed('pose', 'skeleton-1', 'pose-1')
    client.feed('pose', 'skeleton-2', 'pose-1')
    client.feed('pose', 'skeleton-3', 'pose-1')

    client.feed('pose', 'skeleton-1', 'rested-hand-L')
    client.feed('pose', 'skeleton-2', 'rested-hand-L')
    client.feed('pose', 'skeleton-3', 'rested-hand-L')

    client.feed('pose', 'skeleton-1', 'rested-hand-R')
    client.feed('pose', 'skeleton-2', 'rested-hand-R')
    client.feed('pose', 'skeleton-3', 'rested-hand-R')

    const boneRotation = client.data.skeletons.get('skeleton-3').bones[0].rotation
    // var scene = client.data.scenes.get('previewer-scene')
    // var camera = client.data.cameras.get('previewer-camera')

    // console.log(skeleton)
    // console.log(camera)

    const animate = () => {
      requestAnimationFrame(animate)
      boneRotation.y += 0.01
    }

    requestAnimationFrame(animate)

    window.client = client

    app.provide('client', client)
  }
}
