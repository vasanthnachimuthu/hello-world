import React from 'react'

function NameList() {
    const names = ['Vasanth', 'Alen', 'Nalan']
    const nameList = names.map(data => <h2>{data}</h2>)
    return <div>{nameList}</div>
}

export default NameList