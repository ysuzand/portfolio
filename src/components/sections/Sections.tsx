import { memo } from 'react';
import SectionTop from './SectionTop';
import SectionMiddle from './SectionMiddle';
import SectionBottom from './SectionBottom';

const Sections = () => (
    <>
        <SectionTop />
        <SectionMiddle />
        <SectionBottom />
    </>
);

export default memo(Sections)