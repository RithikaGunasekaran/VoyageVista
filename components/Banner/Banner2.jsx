import travelimg from '../../assets/t1.jpg'
const Banner = () => {
  return (
    <div className='relative z-50 bg-black text-white pb-1'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                
                <div className='spaze-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
                <p 
                 data-aos="fade-up"
                className='uppercase text-sky-800'>
                    ncawkjvbz mx
                </p>
                <h1 
                 data-aos="fade-up" data-aos-delay='300'
                className='uppercase text-5xl'>goal</h1>
                <p>lorem</p>
                <button 
                 data-aos="fade-up" data-aos-delay='700'
                className='text-white border-2 border-white px-3 py-1 rounded-md'>Learn More</button>
            </div>
            <div>
                    <img 
                     data-aos="zoom-in"
                     className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
                    src={travelimg} />
                </div>
            </div>
        </div>


    </div>
  )
}

export default Banner