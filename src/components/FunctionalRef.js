import React, { useRef } from 'react'

function FunctionalRef() {
    let inputRef=useRef('demo')

    let focusInput=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
             <input ref={inputRef}/>
            <button onClick={focusInput}>Click</button>
        </div>
    )
}

export default FunctionalRef
