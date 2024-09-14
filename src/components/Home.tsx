import type { StageContentIndexType } from "./Info";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import Loader from '@/components/Loader'
import Island from '@/models/Island'
import st from './Home.module.scss'
import Sky from '@/models/Sky'
import House from '@/models/House'
import Bird from "@/models/Bird";
import Info from "./Info";
import Panda from "@/models/Panda";
import Pig from "@/models/Pig";

const Home = () => {
    const [currentStage, setCurrentStage] = useState<StageContentIndexType>(1);
    const [isRotating, setIsRotating] = useState(false);

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

                    <Sky />

                    {/* <Bird /> */}
                    <House
                    position={[0,-30,-120]}
                    scale={0.1}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    rotation={[0.2, 0, 0]}
                    />
                    {currentStage === 1 && <Bird />}
                    {currentStage === 2 && <Panda />}
                    {currentStage === 3 && <Pig />}
                    {/* <Island
                        position={adjustIslandForScreenSize.screenPosition}
                        scale={adjustIslandForScreenSize.screenScale}
                        rotation={adjustIslandForScreenSize.rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    /> */}
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home;