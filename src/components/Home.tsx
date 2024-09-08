import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import Loader from '@/components/Loader'
import Island from '@/models/Island'
import st from './Home.module.scss'
import Sky from '@/models/Sky'

const Home = () => {
    const adjustIslandForScreenSize = useMemo(() => {
        let screenScale: number[] = [1, 1, 1]
        const screenPosition = [0, -6.5, -43]
        const rotation = [0.1, 4.8, 0]

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
                <hemisphereLight />

                <Sky />
                
                <Island
                    position={adjustIslandForScreenSize.screenPosition}
                    scale={adjustIslandForScreenSize.screenScale}
                    rotation={adjustIslandForScreenSize.rotation}
                />
            </Suspense>
        </Canvas>
    )
}

export default Home;