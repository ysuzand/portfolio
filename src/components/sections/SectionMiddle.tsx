import { memo } from 'react';
import st from './Section.module.scss';

const SectionMiddle = () => (
<section className={st.section}>
    <h2 className={st.title}>I am</h2>
</section>
)

export default memo(SectionMiddle)