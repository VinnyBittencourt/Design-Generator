import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Home() {
    return (
        <div className='container-home'>
            <h1>&lt;Design_generator&gt;</h1>
            <Link to='/Dashboard'>Generate</Link>
            <p className='creator'>
                Created by Vinícius de Ataídes Bittencourt
            </p>
        </div>
    );
}
