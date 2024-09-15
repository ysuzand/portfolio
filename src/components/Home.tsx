import type { StageContentIndexType } from "./Info";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
import Loader from '@/components/Loader'
import Sky from '@/models/Sky'
import House from '@/models/House'
import Info from "./Info";
import Sections from "./Sections";
import st from './Home.module.scss'

const Home = () => {
    const [currentStage, setCurrentStage] = useState<StageContentIndexType>(1);
    const [isRotating, setIsRotating] = useState(false);

    const houseSize = useMemo(() => {
        let screenScale = [0.1, 0.1, 0.1]
        let screenPosition = [0,-30,-120]
        const rotation = [0.3, 4.7, 0]

        if (typeof window === 'object') {
            
            if (window.innerWidth < 768) {
                screenScale = [0.08, 0.08, 0.08]
                screenPosition = [10, -30, -120]
            }
        }

        return {screenScale, screenPosition, rotation}
    }, [window.innerWidth])

    return (
        <section className={st.wrapper}>
            <div className={st.element}>
                {!!currentStage && <Info currentStage={currentStage}/>}
            </div>
            <Canvas
                camera={{near: 0.1, far: 1000}}
                className={st.canvas}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 1, 3]} intensity={1} />
                    <ambientLight intensity={1}/>
                    <hemisphereLight intensity={1}/>
                    <ScrollControls pages={3} damping={1.2}>
                    <Scroll>
                    <Sky />
                    
                    <House
                    position={houseSize.screenPosition}
                    scale={houseSize.screenScale}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    rotation={[0.2, 1.6, 0]}
                    />
                    <Sections />
                    {/* {currentStage === 1 && <Bird />}
                    {currentStage === 2 && <Panda />}
                    {currentStage === 3 && <Pig />} */}
                    {/* <Island
                        position={adjustIslandForScreenSize.screenPosition}
                        scale={adjustIslandForScreenSize.screenScale}
                        rotation={adjustIslandForScreenSize.rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    /> */}
                    </Scroll>
                    <Scroll html>
                        <h1>123</h1>
                    </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home;