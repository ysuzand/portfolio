import Bird from "@/models/Bird";
import Panda from "@/models/Panda";
import Pig from "@/models/Pig";
import { useScroll } from "@react-three/drei";
import st from '@/components/Section.module.scss'

const Sections = () => {
    const data = useScroll();

    console.log(data)
    const baseYPosition = -2.4

    return (
        <>
        <Bird position={[-1, baseYPosition, 1]}/>
        <Panda position={[-1, baseYPosition * 3, 1]}/>
        <Pig position={[-1, baseYPosition * 6, 1]}/>
        </>
    )
}

export default Sections;