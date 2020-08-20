import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Dashboard() {
    const [theme, setTheme] = useState(setterTheme);
    const [serious, setSerious] = useState(setterSerious);
    const [font, setFont] = useState(setterFont);
    const [tech, setTech] = useState(setterTech);
    const [device, setDevice] = useState(setterDevice);

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

    function setterSerious() {
        const seriousArr = ["Fun", "Pro"];
        const random = Math.floor(Math.random() * seriousArr.length);
        return seriousArr[random];
    }

    function setterFont() {
        const fontArr = ["Roboto", "Montserrat", "Poppins", "Raleway"];
        const random = Math.floor(Math.random() * fontArr.length);
        return fontArr[random];
    }

    function setterTech() {
        const techArr = [
            "React default",
            "React w/ Service Worker",
            "React w/ PWA",
            "React w/ Service Worker and PWA",
        ];
        const random = Math.floor(Math.random() * techArr.length);
        return techArr[random];
    }

    function setterDevice() {
        const deviceArr = ["Web", "Mobile"];
        const random = Math.floor(Math.random() * deviceArr.length);
        return deviceArr[random];
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
                        <p className='txt-right'>{theme}</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Seriousness:</p>
                        <p className='txt-right'>{serious}</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Font:</p>
                        <p className='txt-right'>{font}</p>
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
                        <p className='txt-right'>{tech}</p>
                    </div>
                    <div className='g-box'>
                        <p className='txt-left'>Device:</p>
                        <p className='txt-right'>{device}</p>
                    </div>
                </div>
            </div>

            <p className='creator'>
                Created by Vinícius de Ataídes Bittencourt
            </p>
        </div>
    );
}
