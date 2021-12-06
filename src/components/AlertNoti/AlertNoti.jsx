import React from 'react'
import './AlertNoti_Styled.scss'


export const AlertNoti = () => {
    return (
        <div className="alert--container">
            <div className="alert--hidden-container">
                <div className="alert--text">
                    <p className="alert--tip">Tip</p>
                    <p>If your questions involes how to use the website,
                        feature requests, or other situations that could be discussed
                        in a public forum, you can always try asking it in the 
                        <a href="#"> Support Community</a> instead.
                    </p>
                </div>
                <button>Ok, got it</button>
            </div>    
        </div>
    )
}
