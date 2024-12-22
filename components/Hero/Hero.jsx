//import 
const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className='h-full flex justify-center items-center p-4'>
            <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-4 lg:pr-36'>
                    <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>VoyageVista</h1>
                    <p data-aos="fade-up" data-aos-delay='300'>
                        lorem
                    </p>
                    <button  data-aos="fade-up" data-aos-delay='500' className='bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>



        <img src=""></img>
        <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  )
}

export default Hero


