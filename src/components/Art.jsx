import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';


gsap.registerPlugin(ScrollTrigger)

const Art = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div id='art' className='min-h-screen min-w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome TO art</h2>

                <AnimatedTitle
                    title="Besides being a de<b>v</b>eloper, I'm also an a<b>r</b>ti<b>s</b>t — here's a glimpse of one of my latest pai<b>nt</b>ings."
                    containerClass="mt-5 !text-black text-center text-md"
                />

                <div className='about-subtext mt-14'>
                    <p>While my day-to-day revolves around crafting interfaces and writing code, painting has always been a space where I disconnect and express freely.</p>
                    <p>It’s not just a hobby — it’s where my creativity began, long before my journey into tech</p>
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src="img/nature.jpeg" alt="Background" className='absolute left-0 top-0 size-full object-cover' />
                </div>

            </div>
        </div>
    )
}

export default Art