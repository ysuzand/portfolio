import { type Euler, useThree, type Vector3 } from '@react-three/fiber'
import { useMemo } from 'react';
const Ball = () => {

    const canvasSize = useThree((state) => state.size)

    const ballSize = useMemo(() => {
        let position: Vector3 = [0,0,-100]
        let scale = canvasSize.width / 25;
        const rotation: Euler = [-Math.PI / 2, 0, 0]

        if (typeof canvasSize === 'object') {
            if (canvasSize.width < 1000 && canvasSize.width > 769) {
                position = [10, -30, -120]
                scale = canvasSize.width / 10;
            }

            if (canvasSize.width <= 768) {
                position = [10, -30, -120]
                scale = canvasSize.width / 10;
            }
        }

        return {scale, position, rotation}
    }, [canvasSize]);

    return (
        <mesh position={ballSize.position} rotation={ballSize.rotation} scale={ballSize.scale}>
            <sphereGeometry args={[1, 60, 1]} />
            <meshMatcapMaterial color="#ffffff" transparent />
        </mesh>
    )
}

export default Ball;