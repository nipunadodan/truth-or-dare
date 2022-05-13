import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    return (
        <>
            <h1 className={'title text-5xl py-8'}>Truth or Dare</h1>
            <ThemeToggler />
        </>
    )
}

export default Header