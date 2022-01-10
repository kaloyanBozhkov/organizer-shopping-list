import React from 'react'

const links = [
        {
            text: 'Shopping Items',
        },
    ],
    SideMenu = () => {
        return (
            <div>
                {links.map((_, idx) => (
                    <p key={idx}>ok</p>
                ))}
            </div>
        )
    }

export default SideMenu
