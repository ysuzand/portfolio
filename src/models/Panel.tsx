import type { BufferGeometry, Mesh, NormalBufferAttributes } from 'three';
import  type { Vector3, Euler } from '@react-three/fiber';
import { memo, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

const Panel = () => {
    const panelRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
    const scroll = useScroll()

    const config = useMemo(() => {
        const position: Vector3 = [-1.5, 0, 0];
        const rotation: Euler = [Math.PI / 3, 0, 0.5];

        return {
            position,
            rotation,
            scale: 0.1,
        }
    }, []);

    useFrame(() => {
        const offset = scroll.offset;
        const index = Math.floor(offset * 10)

        if (offset < 0.6) {
            if (index !== 0) {
                // Rotate the panel
                if (index >= 2 && panelRef?.current && panelRef.current.rotation.x > 0) {
                    panelRef.current.rotation.x -= 0.05;
                }
            } else {
                // Back to initial position.
                if (panelRef?.current && panelRef.current.rotation?.x < Math.PI / 2) {
                    panelRef.current.rotation.x += 0.1;
                }
            }
        }
    });
    return (
        <>
        <mesh
            ref={panelRef}
            position={config.position}
            rotation={config.rotation}
            scale={config.scale}
        >
            <planeGeometry args={[70, 50, 1, 1]} />
            <meshMatcapMaterial color="white" transparent />
            </mesh>
        </>
    )
}

export default memo(Panel);