import React from "react";
import { Link } from "react-router-dom";

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
