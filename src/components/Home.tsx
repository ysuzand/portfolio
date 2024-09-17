import type { StageContentIndexType } from "./Info";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from '@/components/Loader'
import Info from "./Info";
import Sections from "./Sections";
import Ball from "@/models/Ball";
import st from './Home.module.scss'

const Home = () => {
    const [currentStage, setCurrentStage] = useState<StageContentIndexType>(1);
    

    return (
        <section className={st.wrapper}>
            <div className={st.element}>
                {!!currentStage && <Info currentStage={currentStage}/>}
            </div>
            <Canvas
                camera={{near: 0.1, far: 1000}}
                className={st.canvas}
                shadows
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight
                        castShadow
                        // position={[0, 20, -30]}
                        intensity={1}
                        />
                    <ambientLight visible intensity={2}/>
                    <hemisphereLight intensity={1}/>
                    <spotLight intensity={1} position={[10, 10, 0]}/>
                    <ScrollControls pages={3} damping={1.2}>
                        <Scroll>
                            <Ball />
                            <Sections />
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