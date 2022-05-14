import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    return (
        <header className={'text-center'}>
            <h1 className={'title text-5xl pt-8 mb-8 text-red-500'}>Truth or Dare</h1>
            <div className={'my-8'}>
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header