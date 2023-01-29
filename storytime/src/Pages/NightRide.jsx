import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './stars.css'
import forest from './../assets/forest.png';

function NightRide() {
    const { page } = useParams()

    function stars() {
        let count = 500;
        let scene = document.querySelector('.scene');
        let i = 0;
        while (i < count) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth)
            let y = Math.floor(Math.random() * window.innerHeight)
            let duration = Math.random() * 10;
            let size = Math.random() * 2;

            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.width = 1 + size + 'px';
            star.style.height = 1 + size + 'px';

            star.style.animationDuration = 5 + duration + 's';
            star.style.animationDelay = duration + 's';

            scene.appendChild(star)
            i++
        }
    }

    useEffect(() => {
        stars();
    }, [])
    
    return (
        <div className="scene">
            <div className="moon"></div>
            <img
                src={forest}
                alt=""
                className="forest"
            />
        </div>
    )
}

export default NightRide