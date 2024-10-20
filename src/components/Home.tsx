import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Suspense, lazy } from 'react';
import Loader from '@/components/Loader'
import Ball from '@/models/Ball';
import Box from '@/models/Box';
import Sections from '@/components/sections/Sections';
import st from './Home.module.scss'

const Panel = lazy(() => import('@/models/Panel'))

const Home = () => {
    return (
        <section className={st.wrapper}>
            <Canvas
                camera={{near: 0.1, far: 800}}
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
                        {/* <Panel /> */}
                        <Box />
                        <Scroll>      
                            <Ball />
                        </Scroll>
                        <Scroll html>
                            <Sections />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home;