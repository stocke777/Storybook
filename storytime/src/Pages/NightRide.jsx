import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './stars.css'
import './style.css'
import forest from './../assets/forest.png';
import StoryPage from './StoryPage';

function NightRide() {
    const { page } = useParams()

    function stars() {
        let count = 100;
        let starscene = document.querySelector('.starscene');
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

            starscene.appendChild(star)
            i++
        }
    }

    useEffect(() => {
        stars();
    })
    useEffect(()=>{
        console.log('mounted')
        return ()=>console.log('unmounted')
    })

    const content = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`

    return (
        <div className="starscene">
            <div className="moon"></div>
            <img
                src={forest}
                alt=""
                className="forest"
            />
            <div className='paper'>
                {page === '1' &&
                    <StoryPage storyName={'NightRide'} pageNumber={Number(page)} left={'Steer Left'} right={'Steer Right'}>
                        {content}
                    </StoryPage>}
                {page === '2' &&
                    <StoryPage storyName={'NightRide'} pageNumber={Number(page)} left={'Ask For Help'} right={'Dont Ask For Help'}>
                        {content}
                    </StoryPage>}
                {page === '4' &&
                    <StoryPage storyName={'NightRide'} pageNumber={Number(page)} left={'Point Out his Weird Behaviour'} right={'Keep Silent'}>
                        {content}
                    </StoryPage>}
            </div>
        </div>
    )
}

export default NightRide