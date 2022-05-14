import React, {useEffect, useState} from "react";
import Game from "../Game/Game";

const Settings = () => {
    const [settings, setSettings] = useState(JSON.parse(localStorage.getItem('td-settings')) ?? {noOfPlayers:0})

    useEffect(()=>{
        //TODO: Ask the user for a new session
        const settingsStorage = localStorage.getItem('td-settings')
        if(settingsStorage){
            setSettings(JSON.parse(settingsStorage))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('td-settings',JSON.stringify(settings));
    },[settings])

    const avoidSelect = (e) => {
        if(e.detail > 1 ){
            e.preventDefault()
        }
    }

    const changePlayerCount = (op) => {
        setSettings({
            ...settings,
            noOfPlayers:(op === 'dn' && settings.noOfPlayers > 0 ? settings.noOfPlayers-1 : (op === 'up' ? settings.noOfPlayers+1 : settings.noOfPlayers))
        })
    }

    const resetSettings = () => {
        localStorage.removeItem('td-settings')
    }

    const saveSettings = () => {
        setSettings({
            ...settings,
            ready: true
        })
    }

    return(
        <>
            {
                settings.ready
                    ? <Game />
                    : <>
                        <div className={'py-12'}>
                            How many players do you have?
                            <div className={'text-center'} style={{padding: '10px'}}>
                                <span onClick={() => changePlayerCount('dn')} onMouseDown={avoidSelect}
                                      className={'button button-circular border border-red-500 hover:bg-red-200 dark:hover:bg-red-900 text-red-500'}>-</span>
                                <span style={{
                                    fontSize: '1.5em',
                                    'margin': '0 10px',
                                    fontWeight: 'bold'
                                }}>{settings.noOfPlayers}</span>
                                <span onClick={() => changePlayerCount('up')} onMouseDown={avoidSelect}
                                      className={'button button-circular border border-red-500 hover:bg-red-200 dark:hover:bg-red-900 text-red-500'}>+</span>
                            </div>
                        </div>
                        <div onClick={saveSettings} className={'inline-block button my-8 border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600'}>Next</div>
                    </>
            }
        </>
    )
}

export default Settings