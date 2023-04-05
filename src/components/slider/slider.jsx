import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider() {

    let videos = ['assets/vid-1.mp4', 'assets/vid-2.mp4', 'assets/vid-3.mp4', 'assets/vid-4.mp4', 'assets/vid-5.mp4']
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== videos.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === videos.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(videos.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {videos.map((obj, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <video muted loop autoPlay >
                            <source src={videos[index]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <img
                            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        /> */}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}