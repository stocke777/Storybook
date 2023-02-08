import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './snow.css'
import './style.css'
import snowbg from './../assets/snow.png';
import StoryPage from './StoryPage';

function WhiteLie() {
    const { page } = useParams()

    function snow() {
        let count = 50;
        let snowscene = document.querySelector('.snowscene');
        let i = 0;
        while (i < count) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth)
            let y = Math.floor(Math.random() * window.innerHeight)
            let duration = Math.random() * 2;
            let size = Math.random() * 2;

            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.width = 5 + size + 'px';
            star.style.height = 5 + size + 'px';

            star.style.animationDuration = 2+ duration + 's';
            star.style.animationDelay = duration + 's';

            snowscene.appendChild(star)
            i++
        }
    }

    useEffect(() => {
      snow();
    })
    useEffect(()=>{
        console.log('mounted')
        return ()=>console.log('unmounted')
    })

    const content = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`

    return (
        <div className="snowscene">
            <img
                src={snowbg}
                alt=""
                className="snow"
            />
            <div className='paper'>
                {page === '1' &&
                    <StoryPage storyName={'WhiteLie'} pageNumber={Number(page)} left={'Steer Left'} right={'Steer Right'}>
                        {content}
                    </StoryPage>}
                {page === '2' &&
                    <StoryPage storyName={'WhiteLie'} pageNumber={Number(page)} left={'Ask For Help'} right={'Dont Ask For Help'}>
                        {content}
                    </StoryPage>}
                {page === '4' &&
                    <StoryPage storyName={'WhiteLie'} pageNumber={Number(page)} left={'Point Out his Weird Behaviour'} right={'Keep Silent'}>
                        {content}
                    </StoryPage>}
            </div>
        </div>
    )
}

export default WhiteLie