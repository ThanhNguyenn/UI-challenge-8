import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './Language_Styled.scss'
export const Language = () => {
    return (
        <div className="language--container">
            <p>Language:</p>
            <Dropdown>
                <Dropdown.Toggle></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>English (US)</Dropdown.Item>
                    <Dropdown.Item>Português do Brasil</Dropdown.Item>
                    <Dropdown.Item>Français</Dropdown.Item>
                    <Dropdown.Item>Español</Dropdown.Item>
                    <Dropdown.Item>Български</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
         </div>
    )
}
