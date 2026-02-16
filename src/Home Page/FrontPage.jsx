import '../index.css'
import image01 from '../assets/banners/4.png'
import image02 from '../assets/banners/2.png'
import image03 from '../assets/banners/3.png'
import NavBar from "../Component.jsx/NavBar"

function FrontPage () {

    const images = [
        image01, image02, image03,
    ];

    return(
        <div className="relative md:h-screen w-full z-10">
            <div>
                <NavBar />
            </div>
            <div className=' overflow-hidden md:h-150 h-50'>
                <img 
                    src={image01} 
                    alt='image01'
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}

export default FrontPage


/*import '../index.css'
import { useState, useEffect } from 'react'
import image01 from '../assets/banners/1.png'
import image02 from '../assets/banners/2.png'
import image03 from '../assets/banners/3.png'
import NavBar from "../Component.jsx/NavBar"

const [currentIndex, setCurrentIndex] = useState(0);

const images = [
    image01, image02, image03,
];

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
};

const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
};

useEffect(() => {
    const autoPlay = setInterval(() => {
        nextSlide();
    }, 5000);
    return () => clearInterval(autoPlay);
}, [currentIndex]);

return (
    <div className=" h-screen w-full z-10 group">
        <NavBar />

        <div className="w-full h-full relative">
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full bg-center bg-cover duration-500 ease-in-out"
            ></div>

           
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={prevSlide}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

           
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={nextSlide}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

           
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`transition-all duration-300 cursor-pointer rounded-full ${currentIndex === slideIndex ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2 hover:bg-white'}`}
                    ></div>
                ))}
            </div>
        </div>
    </div>
)
}

export default FrontPage */