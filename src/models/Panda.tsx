import type { Group, Object3DEventMap } from 'three'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'
import pandaScene from '@/assets/3d/lowpoly_origami_panda.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Panda = () => {
    const { nodes, materials} = useGLTF(pandaScene)
    const birdRef = useRef<Group<Object3DEventMap>>(null);

    useFrame(() => {
        if(birdRef.current) {
            birdRef.current.rotation.z += 0.003
        }
    })

    return (
        <>
         <a.group ref={birdRef} position={[-1, -2.3, 1]} rotation={[-2,0,-0.5]} scale={0.15}>
         <mesh
            // @ts-ignore
            geometry={nodes.Plane_White_0.geometry}
            material={materials.White}
            />
         <mesh
            // @ts-ignore
            geometry={nodes.Plane_Black_0.geometry}
            material={materials.Black}
         />
      </a.group>
      </>
    )
}

export default Panda