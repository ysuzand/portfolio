import { memo } from 'react';
import st from './Section.module.scss';

const SectionBottom = () => (
<section className={st.section}>
    <h2 className={st.title}>here!</h2>
</section>
)

export default memo(SectionBottom)