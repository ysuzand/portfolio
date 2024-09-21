import type { Euler, Vector3 } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import type { BufferGeometry, Mesh, NormalBufferAttributes } from 'three';

const Ball = () => {
    const ballRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null)
    const data = useScroll();
    const canvasSize = useThree((state) => state.size);

    const originalZ = useRef(0);
    const originalX = useRef(0);
    const prevIndex = useRef(0);


    const isTablet = useMemo(() => canvasSize.width >= 768 && canvasSize.width <= 1200, [canvasSize.width]);
    const isDesktop = useMemo(() => canvasSize.width > 1200, [canvasSize.width]);


    useEffect(() => {
        originalX.current = ballRef.current?.position.x ?? 0;
        originalZ.current = ballRef.current?.position.z ?? 0;
    }, [])

    useFrame(() => {
        // data.offset = current scroll position, between 0 and 1
        const index = data.offset;
        
        if (ballRef?.current) {
                if (prevIndex.current < index) { // down
                    console.log('scroll down')
                 if (ballRef.current.position.z > -200) {
                    ballRef.current.position.z -= 1;
                    ballRef.current.position.x += 1;
                 }

                 prevIndex.current = index;

                } 
                
                if (prevIndex.current > index){
                    console.log('scroll up')
                    if (ballRef.current.position.z <= originalZ.current) {
                        ballRef.current.position.z += 1;
                        ballRef.current.position.x -= 1;
                    }

                    prevIndex.current = index;
                    
                }
        }
    })

    const ballSize = useMemo(() => {
        let position: Vector3 = [10, -30, -120];
        let scale = canvasSize.width / 10;
        const rotation: Euler = [-Math.PI / 2, 0, 0]

        if (typeof canvasSize === 'object') {
            if (isTablet) {
                position = [10, -30, -120]
                scale = canvasSize.width / 10;
            }

            if (isDesktop) {
                position = [0,0,-100];
                scale = canvasSize.width / 25;
            }
        }

        return {scale, position, rotation}
    }, [canvasSize]);

    return (
        <>
        <OrbitControls enableZoom={false} />
        <mesh
            ref={ballRef}
            position={ballSize.position}
            rotation={ballSize.rotation}
            scale={ballSize.scale}
        >
            <sphereGeometry args={[1, 60, 1]} />
            <meshMatcapMaterial color="#ffffff" transparent />
        </mesh>
        </>
    )
}

export default Ball;