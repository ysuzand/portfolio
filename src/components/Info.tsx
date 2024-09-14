import { memo } from 'react';

export type StageContentIndexType = keyof typeof stageContent;

const stageContent = {
    1: (<>
        1
    </>),
    2: (
        <>2!</>
    ),
    3: (
        <>3</>
    ),
}


const Info = ({currentStage}: {currentStage: StageContentIndexType }) => {

    return (
        <div>{stageContent[currentStage]}</div>
    )
}

export default memo(Info);