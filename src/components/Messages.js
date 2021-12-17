import React from 'react'
import '.././css/message.css'

export default function Messages({text, status}) {
        return (
            <div className={`message message-${status}`}>
                <span>{text}</span>
            </div>
        )
}
