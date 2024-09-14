import type { Group, Object3DEventMap } from 'three'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'
import pigScene from '@/assets/3d/lowpoly_origami_pig.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Pig = () => {
    const { nodes, materials} = useGLTF(pigScene)
    const pigRef = useRef<Group<Object3DEventMap>>(null);

    useFrame(() => {
        if(pigRef.current) {
            pigRef.current.rotation.z += 0.003
        }
    })

    return (
        <>
         <a.group ref={pigRef} position={[-1, -2.6, 1]} rotation={[-2,0,-0.5]} scale={0.15}>
         <mesh
            // @ts-ignore
            geometry={nodes.Cube_Pink_0.geometry}
            material={materials.Pink}
        />
          <mesh
            // @ts-ignore
            geometry={nodes.Cube_Black_0.geometry}
            material={materials.Black}
        />
          <mesh
            // @ts-ignore
            geometry={nodes.Cube_Pink2_0.geometry}
            material={materials.Pink2}
        />
      </a.group>
      </>
    )
}

export default Pig