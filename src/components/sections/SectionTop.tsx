import { memo } from 'react';
import st from './Section.module.scss';

const SectionTop = () => (
<section className={st.section}>
    <h1 className={st.title}>Hello</h1>
</section>
)

export default memo(SectionTop)