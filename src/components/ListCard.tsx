import { memo } from 'react';
import st from '@/components/ListCard.module.scss'

const ListCard = ({children}: React.PropsWithChildren) => {
    return (
        <div className={st.card}>
            {children}
        </div>
    )
}

export default memo(ListCard);