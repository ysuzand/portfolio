import { memo, forwardRef } from 'react';
import { css } from '@/utils';
import st from './Section.module.scss';

const SectionBottom = forwardRef<HTMLElement, {isInView: boolean}>(({isInView}, ref) => {
    return (
<section className={css(st.section, st.alignBottom, st.transSection, isInView && st.visible)} ref={ref}>
    <h2 className={css(st.subTitle, st.pb)}>Thank you.</h2>    
</section>
)})

export default memo(SectionBottom)