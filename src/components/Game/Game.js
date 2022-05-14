import React, {useEffect, useState} from "react";
import questions from "../../assets/data/questions.json"
import dares from "../../assets/data/dares.json"
import hello from "../../assets/data/hello.json"

const noOfHellos = hello.length-1
//const noOfQuestions = questions.length-1
const settings = JSON.parse(localStorage.getItem('td-settings'))

const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Game = () => {
    const salute = hello[randomIntFromInterval(0,noOfHellos)]
    //const question = questions[randomIntFromInterval(0,noOfQuestions)]

    const[player,setPlayer] = useState(1)
    const[question,setQuestion] = useState(questions[randomIntFromInterval(0,questions.length-1)])

    useEffect(() => {
        if (question > -1) {
            questions.splice(question, 1); // 2nd parameter means remove one item only
        }
        setQuestion(questions[randomIntFromInterval(0,questions.length-1)])
    },[player])

    const truthSelected = () => {
        setPlayer(player < settings.noOfPlayers ? player+1 : 1)
    }

    const dareSelected = () => {
        setPlayer(player < settings.noOfPlayers ? player+1 : 1)
    }

    return(
        <section className={'flex justify-center flex-col shrink w-full'}>
            <div className={'text-left self-center'}>
                <h2 className={'text-3xl'}>{salute.hello}, Player #{player}</h2>
                <p><i className={'text-sm'}>({salute.lang})</i></p>
            </div>

            <h3 className={'mt-20 text-5xl md:text-6xl self-center text-center'}>{question.question}</h3>
            <div id={'feedback'} className={'mt-6 mb-20 self-center'}>
                <span className={'text-sm'}>Is this a fun question? </span>
                <button className={'inline-block mx-2 rounded-full border border-green-500 text-green-500 px-2 py-1'}><i className={'la la-thumbs-up'} /> </button>
                <button className={'inline-block mx-2 rounded-full border border-red-500 text-red-500 px-2 py-1'}><i className={'la la-thumbs-down'} /> </button>
            </div>

            <div className={'self-center'}>
                <button onClick={truthSelected} className={'inline-block button my-8 border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600'}>Truth</button>
                <button onClick={dareSelected} className={'inline-block button my-8 border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600'}>Dare</button>
            </div>

        </section>
    )
}

export default Game