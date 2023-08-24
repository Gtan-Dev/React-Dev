import React, { useState } from 'react'

const PropsAndStates = () => {
    const [sub,setSub] = useState({
        message: "Please subscribe to this channel",
        sub: "Subscribe"
    })

    const changeButton = () =>{
        setSub({
            message:sub.sub === "Subscribe" ?  "Thank you for subscribing !!!" : "Please subscribe to this channel",
            sub: sub.sub === "Subscribe" ? "Unsubscribe" : "Subscribe"
        })
    }
        return (
            <>
                <div className="flex justify-center py-11 bg-cyan-900">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-3xl">Welcome</h1>
                        <h3 className='text-orange-500 mt-2'>{sub.message}</h3>
                        <button onClick={changeButton} className="text-white bg-red-700 rounded py-2 px-3 mt-2">{sub.sub}</button>
                    </div>
                </div>
            </>
        )
}

export default PropsAndStates
