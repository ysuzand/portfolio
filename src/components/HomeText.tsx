import { memo } from "react";
import st from './HomeText.module.scss'

const HomeText = () => {

    return (
        <>
        <section className={st.page}>
            <h1 className={st.title}>Hello</h1>
        </section>
        <section className={st.page}>
            <h2 className={st.title}>I am</h2>
        </section>
        <section className={st.page}>
            <h2 className={st.title}>here!</h2>
        </section>
        </>
    )
}

export default memo(HomeText)