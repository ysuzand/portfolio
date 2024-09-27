import { memo, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTop from './SectionTop';
import SectionMiddle from './SectionMiddle';
import SectionBottom from './SectionBottom';

const Sections = () => {
    const {ref: middleRef, inView} = useInView()

    useEffect(() => {
        
    }, [])
    
    return (
    <>
        <SectionTop />
        <SectionMiddle ref={middleRef} isInView={inView}/>
        <SectionBottom />
    </>
)};

export default memo(Sections)