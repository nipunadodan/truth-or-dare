import React from "react";
import ThemeToggler from "../Common/ThemeToggler";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Settings from "../Settings/Settings";

const Home = () => {
    return (
        <div className={'text-center'}>
            <Header />
            <Settings />
            <Footer />
        </div>
    )
}

export default Home