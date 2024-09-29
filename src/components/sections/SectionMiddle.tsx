import { memo, forwardRef } from 'react';
import { css } from '@/utils';
import { tech } from '@/mappings/experiences';
import ListCard from '@/components/ListCard'
import st from './Section.module.scss';

const SectionMiddle = forwardRef<HTMLElement, {isInView: boolean}>(({isInView}, ref) => {
    return (
<section className={css(st.section, st.alignMiddle, st.transSection, isInView && st.visible)} ref={ref}>
    <h2 className={css(st.subTitle)}>Hands-on experience</h2>  
    <ul className={st.outerList}>
        <li>
            As Work
            <ul className={st.list}>
                {tech.map(item => item.tag === 'work'
                    ? (<li key={item.id}>
                            <ListCard>{item.label}</ListCard>
                        </li>)
                    : null
                )}
            </ul>
        </li>
        <li>
            As Personal projects
            <ul className={st.list}>
                {tech.map(item => item.tag === 'other'
                    ? (<li key={item.id}>
                            <ListCard>{item.label}</ListCard>
                        </li>)
                    : null
                )}
            </ul>
        </li>
    </ul>  
</section>
)})

export default memo(SectionMiddle)