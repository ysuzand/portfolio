import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from '@/components/Loader'
import Ball from "@/models/Ball";
import HomeText from "./HomeText";
import st from './Home.module.scss'

const Home = () => {

    return (
        <section className={st.wrapper}>
            <Canvas
                camera={{near: 0.1, far: 1000}}
                className={st.canvas}
                shadows
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight
                        castShadow
                        position={[0, 20, -30]}
                        intensity={1}
                        />
                    <ambientLight visible intensity={2}/>
                    <hemisphereLight intensity={1}/>
                    <spotLight intensity={1} position={[10, 10, 0]}/>
                    <ScrollControls pages={3} damping={0.25}>
                        <Scroll>
                            <Ball />
                        </Scroll>
                        <Scroll html>
                            <HomeText />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home;