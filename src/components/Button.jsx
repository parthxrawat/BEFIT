import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-blue-900 border-indigo-600 border-solid blueShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}
