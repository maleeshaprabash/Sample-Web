import image02 from '../assets/image02.png'
import image03 from '../assets/image03.jpg'
import image04 from '../assets/image04.jpg'
import image05 from '../assets/image05.png'
import image06 from '../assets/image06.jpeg'
import image07 from '../assets/image07.jpg'
import image08 from '../assets/image08.png'

function MiddleContainer() {

    const images =
        [
            {
                id: 2,
                image: image02
            },
            {
                id: 3,
                image: image03
            },
            {
                id: 4,
                image: image04
            },
            {
                id: 5,
                image: image05
            },
            {
                id: 6,
                image: image06
            },
            {
                id: 7,
                image: image07
            },
            {
                id: 8,
                image: image08
            },
        ];

    return (
        <div className='py-10 relative bg-blue-800'>
            <div className='flex text-[min(4vw,28px)] justify-center items-center uppercase font-bold font-SNPro tracking-wider'>
                <div className='absolute h-0.5 bg-black w-full'></div>
                <p className='h-10 w-100 bg-white z-10 items-center text-center'>New Arivals</p>
            </div>
            
            <div className="flex relative md:h-80 w-full justify-center items-center top-5">
                <div className='flex justify-cente md:gap-10 gap-4'>
                    {images.map((img) =>(
                        <div className='w-[min(13vw,176px)] h-[min(16vw,256px)]  overflow-hidden rounded-full hover:scale-105 transition-all duration-400 shadow-md shadow-black/50'>
                            <img 
                            src={img.image}
                            alt={`image-${img.id}`}
                            className='w-full h-full object-cover'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MiddleContainer