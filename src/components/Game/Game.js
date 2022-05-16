import React, {useEffect, useState} from "react";
import questionsList from "../../assets/data/questions.json"
import daresList from "../../assets/data/dares.json"
import hello from "../../assets/data/hello.json"
import Modal from "../Common/Modal";

const noOfHellos = hello.length-1
//const noOfQuestions = questions.length-1


const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Game = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal, setModal] = useState({
        title:'',
        content:'',
        buttonText:''
    });
    const openModal = (modal) => {
        setModal(modal)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    //-------------------------//

    const [saluteID, setSaluteID] = useState(randomIntFromInterval(0,noOfHellos))
    const salute = hello[saluteID]
    //const question = questions[randomIntFromInterval(0,noOfQuestions)]

    const [questions, setQuestions] = useState(questionsList)
    const [dares, setDares] = useState(daresList)

    const [player, setPlayer] = useState(1)
    const [questionID, setQuestionID] = useState(randomIntFromInterval(0,questions.length-1))
    const [question, setQuestion] = useState(questions[questionID])
    const [dareID, setDareID] = useState(randomIntFromInterval(0,dares.length-1));
    const [dare, setDare] = useState(dares[dareID]);

    const [dareOn,setDareOn] = useState(false)
    //const [truthOn,setTruthOn] = useState(false)

    // when question ID changes this assigns a new question
    useEffect(() => {
        setQuestion(questions[questionID])
    },[questions, questionID])

    // when dare ID changes this assigns a new dare
    useEffect(() => {
        setDare(dares[dareID])
    },[dares, dareID])

    useEffect(() => {
        setQuestionID(randomIntFromInterval(0,questions.length-1))
    },[questions])

    useEffect(() => {
        setDareID(randomIntFromInterval(0,dares.length-1))
    },[dares])

    const truthSelected = () => {
        //setPlayer(player < settings.noOfPlayers ? player+1 : 1)
        setDareOn(false)
        openModal({
            title:'It\'s the time for truth',
            content:'Truth, nothing but the truth',
            buttonText:'Next <i class="la la-arrow-right"></i>'
        })
    }

    const dareSelected = () => {
        setDares(
            [...dares.slice(0, dareID), ...dares.slice(dareID + 1)]
        )

        openModal({
            title:dare.dare,
            content:'',
            buttonText:'Next <i class="la la-arrow-right"></i>'
        })

        setDareOn(false)
    }

    const nextSelected = () => {
        const settings = JSON.parse(localStorage.getItem('td-settings'))
        setPlayer(player < settings.noOfPlayers ? player+1 : 1)
        setSaluteID(randomIntFromInterval(0,noOfHellos))

        setQuestions(
            [...questions.slice(0, questionID), ...questions.slice(questionID + 1)]
        )
        setDareOn(false)
    }

    const resetGame = () => {
        setQuestions(questionsList)
        props.ready()
    }


    return(
        <section className={'flex justify-center flex-col shrink w-full'}>
            <Modal isOpen={modalIsOpen} closeModal={closeModal} modal={modal} func={nextSelected}/>
            <div className={'text-left self-center'}>
                <div className={'flex items-center'}>
                    <h2 className={'text-3xl inline-block'}>{salute.hello}, Player #{player}</h2>
                    <i onClick={resetGame} className={'la la-redo-alt text-sm button rounded-full border border-gray-500 text-gray-500 px-2 py-1'}/>
                </div>
                <p><i className={'text-sm'}>({salute.lang})</i></p>
            </div>
            {
                typeof question !== 'undefined'
                ? <>
                        <h3 className={'mt-20 text-5xl md:text-6xl self-center text-center w-4/5'}>{question.question}</h3>
                        <div id={'feedback'} className={'mt-6 mb-20 self-center'}>
                            <span className={'text-sm'}>Is this a fun question? </span>
                            <button className={'inline-block mx-2 rounded-full border border-green-500 text-green-500 px-2 py-1'}><i className={'la la-thumbs-up'} /> </button>
                            <button className={'inline-block mx-2 rounded-full border border-red-500 text-red-500 px-2 py-1'}><i className={'la la-thumbs-down'} /> </button>
                            <span>#{questionID}/{questions.length}</span>
                        </div>
                    </>
                : <></>
            }


            <div className={'self-center sticky'}>
                <button onClick={truthSelected} className={'inline-block button my-8 border border-red-500 px-10 text-red-500 hover:text-white bg-transparent hover:bg-red-600'}>Truth</button>
                <button onClick={dareSelected} className={'inline-block button my-8 border border-red-500 px-10 text-red-500 hover:text-white bg-transparent hover:bg-red-600'}>Dare</button>
            </div>

            {
                dareOn
                ? <div className={'self-center text-center mt-8'}>
                        <h4 className={'text-center text-3xl md:text-4xl'}>{dare.dare}</h4>
                        <button onClick={nextSelected} className={'inline-block button my-8 border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600'}>Next</button>
                    </div>
                : <></>
            }

        </section>
    )
}

export default Game