import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import Loader from '@/components/Loader'
import Island from '@/models/Island'
import st from './Home.module.scss'
import Sky from '@/models/Sky'
import House from '@/models/House'
import Bird from "@/models/Bird";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const adjustIslandForScreenSize = useMemo(() => {
        let screenScale = [1, 1, 1]
        const screenPosition = [0.1, 0, -50]
        const rotation = [0.3, 4.7, 0]

        if (typeof window === 'object') {
            
            if (window.innerWidth < 768) {
                screenScale = [0.9, 0.9, 0.9]
            }
        }

        return {screenScale, screenPosition, rotation}
    }, [window.innerWidth])

    return (
        <Canvas
            camera={{near: 0.1, far: 1000}}
            className={st.canvas}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight position={[10, 1, 3]} intensity={1} />
                <ambientLight intensity={1}/>
                <hemisphereLight intensity={1}/>

                <Sky />

                {/* <Bird /> */}
                <House
                position={[0,-30,-120]}
                scale={0.1}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                rotation={[0.2, 0, 0]}
                />
                
                {/* <Island
                    position={adjustIslandForScreenSize.screenPosition}
                    scale={adjustIslandForScreenSize.screenScale}
                    rotation={adjustIslandForScreenSize.rotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                /> */}
            </Suspense>
        </Canvas>
    )
}

export default Home;