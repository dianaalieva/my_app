import React from "react";
import { Link } from "react-router-dom";

import whatsapp from '../../images/logos_whatsapp.svg'

export const Contacts = () => {
    return (
        <div>
            <p>lorem ipsum....</p>
            <div>
                <Link to="https://wa.clck.bar/79142667993">
                    <img src={whatsapp} alt="whatsapp"/>
                    <p>+7(914)266-79-93</p>
                </Link>
            </div>
        </div>
    )
}