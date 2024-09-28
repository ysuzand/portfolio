import { memo, forwardRef } from 'react';
import { css } from '@/utils';
import st from './Section.module.scss';

const SectionMiddle = forwardRef<HTMLElement, {isInView: boolean}>(({isInView}, ref) => {
    return (
<section className={css(st.section, st.alignMiddle, st.transSection, isInView && st.visible)} ref={ref}>
    <h2 className={css(st.subTitle)}>Hands-on experience</h2>  
    <ul>
        <li>
            As Work
            <ul>
                <li>React.js & Next.js</li>
                <li>Vue.js, Vuex</li>
                <li>TypeScript</li>
                <li>Apollo / GraphQL</li>
                <li>REST API</li>
                <li>Storybook</li>
                <li>Jest, Testing-library, Cypress</li>
                <li>Cloud environment: AWS</li>
                <li>Web Accessibility</li>
                <li>SEO</li>
            </ul>
        </li>
        <li>
            As Hobby
            <ul>
                <li>JavaScript</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>NoSQL & SQL</li>
                <li>Github actions</li>
            </ul>
        </li>
    </ul>  
</section>
)})

export default memo(SectionMiddle)