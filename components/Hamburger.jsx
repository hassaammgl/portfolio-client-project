"use client";
import { Fade as HamburgerIcon } from 'hamburger-react';
import React, { useState } from 'react'

const Hamburger = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <HamburgerIcon toggled={isOpen} toggle={setOpen} />
        </div>
    )
}

export default Hamburger
