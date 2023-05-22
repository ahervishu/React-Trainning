import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isActive, setIsActive] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if(window.location.href === 'http://localhost:3000/'){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }, [])

    const showIsActive = () => {
        setIsActive(true);
        navigate('/');
    }
    const showIsInactive = () => {
        setIsActive(false);
        navigate('/firstQuarter');
    }
    return (
        <div className={style.navbar}>
            <div className={isActive ? style.active : style.inactive} onClick={showIsActive}>Compose Teams</div>
            <div className={!isActive ? style.active : style.inactive} onClick={showIsInactive}>First Quarter</div>
        </div>
    )
}
