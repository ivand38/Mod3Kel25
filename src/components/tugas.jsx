import React, { useState, useEffect } from 'react';
import "./tugas.css";
import bahagia from '../assets/bahagia.png'
import sedih from '../assets/sedih.png'

export default function Tugas() {
    const [count, setCount] = useState(0);

    // fungsi tambah
    const countUp = () => {
        setCount(count + 1)
    };

    // fungsi kurang
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        (count == 10) && alert("Sudah 10")
    })

    return (
        <>
            {count>=10 ?
                <img src={bahagia} alt="up" width={300} height={250}/>
                :
                <img src={sedih} alt="down" />
            }
            <h3 className="Text">{count}</h3>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countUp}> +
                    </button>
                </div>
                <div className="ViewButton1">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countDown}> -
                    </button>
                </div>
            </div>
        </>
    );
}
