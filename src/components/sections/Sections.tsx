import { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTop from './SectionTop';
import SectionMiddle from './SectionMiddle';
import SectionBottom from './SectionBottom';
import st from './Section.module.scss'

const Sections = () => {
    const {ref: middleRef, inView: middleIsInView} = useInView({
        threshold: 0.6
    })
    const {ref: bottomRef, inView: bottomIsInView} = useInView({
        threshold: 0.9
    })
    
    return (
    <div className={st.sectionsContainer}>
        <SectionTop />
        <SectionMiddle ref={middleRef} isInView={middleIsInView}/>
        <SectionBottom ref={bottomRef} isInView={bottomIsInView}/>
    </div>
)};

export default memo(Sections)