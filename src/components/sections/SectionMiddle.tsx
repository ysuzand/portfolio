import { memo, forwardRef } from 'react';
import st from './Section.module.scss';

const SectionMiddle = forwardRef<HTMLElement, {isInView: boolean}>(({isInView}, ref) => (
<section className={st.section} ref={ref}>
    <h2 className={st.title}>I am</h2>
    {isInView ? 'visible' : 'invisible'}
</section>
))

export default memo(SectionMiddle)