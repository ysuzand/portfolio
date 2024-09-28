import { memo } from 'react';
import { css } from '@/utils';
import st from './Section.module.scss';

const SectionTop = () => (
<section className={css(st.section, st.alignMiddle)}>
    <h1 className={st.title}>Hello</h1>
    <p className={st.text}>Wrold</p>
</section>
)

export default memo(SectionTop)