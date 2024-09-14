import type { Group, Object3DEventMap } from 'three'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'
import birdScene from '@/assets/3d/lowpoly_origami_bird.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    const { nodes, materials} = useGLTF(birdScene)
    const birdRef = useRef<Group<Object3DEventMap>>(null);

    useFrame(() => {
        if(birdRef.current) {
            birdRef.current.rotation.z += 0.003
        }
    })

    return (
        <>
         <a.group ref={birdRef} position={[-1, -2.4, 1]} rotation={[-2,0,-0.5]} scale={0.15}>
            <mesh
                // @ts-ignore
                geometry={nodes.Cube001_Blue_0.geometry}
                material={materials.Blue} />
            <mesh
                // @ts-ignore
                geometry={nodes.Cube001_Yellow_0.geometry}
                material={materials.Yellow} />
            <mesh
                // @ts-ignore
                geometry={nodes.Cube001_Black_0.geometry}
                material={materials.Black} />
            <mesh
                // @ts-ignore
                geometry={nodes.Cube001_White_0.geometry}
                material={materials.White} />
            <mesh
                // @ts-ignore
                geometry={nodes.Cube001_Pink_0.geometry}
                material={materials.Pink}
            />
      </a.group>
      </>
    )
}

export default Bird