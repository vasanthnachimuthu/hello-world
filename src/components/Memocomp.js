import React from 'react'

function Memocomp({ name }) {
    console.log('memo rendering')
    return (
        < div >
            {name}
        </div >
    )
}

export default React.memo(Memocomp)