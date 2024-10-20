import type { BufferGeometry, Mesh, NormalBufferAttributes } from 'three';
import  type { Vector3, Euler } from '@react-three/fiber';
import { memo, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";

const cubicSize = 18

const Box = () => {
    const boxRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
    const scroll = useScroll()

    const config = useMemo(() => {
        const position: Vector3 = [-2.5, 0, 0];
        const rotation: Euler = [Math.PI, 0.5, 0.6];

        return {
            position,
            rotation,
            scale: 0.1,
        }
    }, []);

    useFrame(() => {
        const offset = scroll.offset;
        const index = Math.floor(offset * 10)

        if (offset < 0.9) {
            if (index !== 0) {
                // Rotate the box
                if (index >= 1 && boxRef?.current && boxRef.current.rotation.x > 0) {
                    boxRef.current.rotation.x -= 0.05;
                }
            } else {
                // Back to initial position.
                if (boxRef?.current && boxRef.current.rotation?.x < Math.PI / 2) {
                    boxRef.current.rotation.x += 0.1;
                }
            }
        }
    });

    return (
        <>
         {/* <OrbitControls enableZoom={false} /> */}
         {/* <ambientLight intensity={0.1} /> */}
        <mesh
            ref={boxRef}
            position={config.position}
            rotation={config.rotation}
            scale={config.scale}
        >
            <boxGeometry args={[cubicSize, cubicSize, cubicSize]} />
            <meshMatcapMaterial color="pink" transparent />
            </mesh>
        </>
    )
}

export default Box