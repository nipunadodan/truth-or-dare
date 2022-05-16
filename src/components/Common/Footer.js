import React from "react";
import ThemeToggler from "./ThemeToggler";

const Footer = () => {
    return(
        <footer className={'text-center mb-24'}>
            <div className={'mt-20 mb-4'}>
                <ThemeToggler />
            </div>
            <p className={'text-xs pb-12 text-gray-400'}>Privacy notice: This app does NOT send any of your private or usage data back to us except for your explicit feedback.</p>
        </footer>
    )
}

export default Footer