import React, { useState } from 'react'
import { useRef } from 'react';
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect'

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }
    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false)
        }
    }, [loadedVideos])

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVideoRef.current.play(),
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        })
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    })

    const getVideoSrc = (index) => `videos/game-${index}.mp4`




    return (


        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                    </div>
                </div>
            )}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 '>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                            <div className="absolute left-0 top-0 size-full bg-gray-950 bg-opacity-40 z-10" />
                        </div>

                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 object-cover size-64 object-center'
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center '
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    {/* G<b>a</b>ming */}
                    LA<b>U</b>NCH
                </h1>
                <div className='absolute left-0 top-0 z-[30] size-full '>
                    <div className='mt-40 px-5 sm:px-10 '>

                        <h1 className='font-tektur  text-[32px]  text-blue-100  '>
                            {/* redefi<b>n</b>e */}
                            Hello there, <br /> I'm Sourabh Karikatti
                        </h1>
                        <div className="text-white font-tektur flex flex-col sm:flex-row">
                            <h1 className="mr-0 sm:mr-1 bg-gray-700 bg-opacity-35 text-[20px] sm:text-[26px] mb-1 sm:mb-0">
                                I'm a developer
                            </h1>
                            <span className="text-blue-400 font-bold text-[20px] sm:text-[26px] bg-gray-700 bg-opacity-35" style={{textShadow:'  1px 1px 0 black,-1px -1px 0 black'}}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'who still tests in production, but only on Fridays.',
                                            'That means I turn coffee into code and bugs into features.',
                                            ' with 99 Chrome tabs open, all in the name of "debugging".',
                                            ' who totally didn’t just Google that solution five minutes ago',
                                        ],
                                        autoStart: true,
                                        delay: 50,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>



                        {/* <Button
                            id="watch-trailer"
                            title="Watch trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="!bg-yellow-300 flex-center gap-1"
                        /> */}
                    </div>
                    <div className='w-full px-10'>
                        <p className='text-white text-[16px] font-tektur absolute m:text-[22px] mb-1 sm:mb-0'>Yes, this looks flashy, but don’t let the animations deceive you <br /> — I’m just a regular dev.</p>
                    </div>


                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black'>
                {/* G<b>a</b>ming */}
                LA<b>U</b>NCH
            </h1>
        </div>
    )
}

export default Hero