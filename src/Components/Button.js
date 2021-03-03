import React from 'react'
import './Button.css'

//primary color of the button
const STYLES = [
    'btn--primary',
    'btn--outline'
]
//sizing for the button
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // checks for button style, if not it sets a style by going to button primary
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSIze = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type} >
            {children}
        </button>
    )
}