import React, {useEffect, useState} from "react";
import Game from "../Game/Game";

const Settings = () => {
    const [settings, setSettings] = useState({
        available:false,
        noOfPlayers:0
    })

    useEffect(() => {
        const settingsStorage = sessionStorage.getItem('td-settings')
        if(settingsStorage){
            setSettings(JSON.parse(settingsStorage))
        }
    },[settings])

    const avoidSelect = (e) => {
        if(e.detail > 1 ){
            e.preventDefault()
        }
    }

    const changeDisksCount = (op) => {
        setSettings({
            ...settings,
            noOfPlayers:(op === 'dn' && settings.noOfPlayers > 0 ? settings.noOfPlayers-1 : (op == 'up' ? settings.noOfPlayers+1 : settings.noOfPlayers))
        })
    }

    return(
        <>
            {
                settings.available
                    ? <Game />
                    : <>
                        <div className={'py-12'}>
                            How many players do you have?
                            <div className={'text-center'} style={{padding: '10px'}}>
                                <span onClick={() => changeDisksCount('dn')} onMouseDown={avoidSelect}
                                      className={'button button-circular border border-red-500 hover:bg-red-200 dark:hover:bg-red-900 text-red-500'}>-</span>
                                <span style={{
                                    fontSize: '1.5em',
                                    'margin': '0 10px',
                                    fontWeight: 'bold'
                                }}>{settings.noOfPlayers}</span>
                                <span onClick={() => changeDisksCount('up')} onMouseDown={avoidSelect}
                                      className={'button button-circular border border-red-500 hover:bg-red-200 dark:hover:bg-red-900 text-red-500'}>+</span>
                            </div>
                        </div>
                        <div className={'inline-block button my-8 border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600'}>Next</div>
                    </>
            }
        </>
    )
}

export default Settings