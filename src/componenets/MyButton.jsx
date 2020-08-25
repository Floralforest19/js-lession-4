import React from 'react'

export default function MyButton({
    setHeadline, title, setHeadlineTo
}) {
    function handleOnClick() {
        setHeadline(setHeadlineTo)
    }
    return (
        <button onClick={handleOnClick}>
            {title}
        </button>
    )
}