import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Dashboard() {
    const [theme, setTheme] = useState(setterTheme);

    function setterTheme() {
        const themesArr = [
            "Technology",
            "Learning/Teaching",
            "E-commerce",
            "Random Product",
            "Random Business WebSite",
            "Hotsite about a current theme",
            "Look for a theme one on Dribbble",
            "Copy a Design from Dribbble",
        ];
        const random = Math.floor(Math.random() * themesArr.length);
        return themesArr[random];
    }

    useEffect(() => {
        console.log(theme);
    }, []);

    return (
        <div className='container-dash'>
            <header>
                <h1>&lt;Design_generator&gt;</h1>
                <Link to='/'>
                    <FiArrowLeft size={16} color='00174e'></FiArrowLeft>Go Back
                </Link>
            </header>

            <div className='card-dash'>
                <h1>Website information generated</h1>
                <div className='text-box'>
                    <div className='g-box'>
                        <p className='txt-left'>Theme:</p>
                        <p className='txt-right'>Tecnology</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Seriousness:</p>
                        <p className='txt-right'>Fun</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Font:</p>
                        <p className='txt-right'>Roboto</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Palette:</p>
                        <a
                            href='https://coolors.co/generate'
                            target='_blank'
                            className='txt-right'
                        >
                            Click here
                        </a>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Technology:</p>
                        <p className='txt-right'>React default</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Device:</p>
                        <p className='txt-right'>Web Browser</p>
                    </div>
                </div>
            </div>

            <p className='creator'>
                Created by Vinícius de Ataídes Bittencourt
            </p>
        </div>
    );
}
