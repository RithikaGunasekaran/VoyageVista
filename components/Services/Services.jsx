import { IoPricetags } from "react-icons/io5";
import wave from "../../assets/wave.jpg";
//import wave

const ServicesData = [
    {
        
        title: "VUJ",
        content:"Search for the best deals",
        description:" Search for the best deals from 900+ travel sites. No need to search multiple websites ",
        icon: <IoPricetags className="text-5xl" />,
        aosDelay: "300",
    },
    {
        title: "VUJ",
        content:"Search for the best deals",
        description:" Search for the best deals from 900+ travel sites. No need to search multiple websites ",
        icon: <IoPricetags className="text-5xl" />,
        aosDelay: "300",
    },
    {
        title: "VUJ",
        content:"Search for the best deals",
        description:" Search for the best deals from 900+ travel sites. No need to search multiple websites ",
        icon: <IoPricetags className="text-5xl" />,
        aosDelay: "300",
    }
]

const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
    <div className='container'>
        <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                {
                    ServicesData.map(
                        (data, index) => (
                            <div 
                             data-aos="fade-up" data-aos-delay={data.aosDelay}
                            className='min-h-[180px] flex flex-col justify-center items-center bg-sky-900/60 rounded-xl 
                            backdrop-blur-sm text-center gap-2 text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'
                            >{data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>

                            </div>
                        )
                    )
                }
            </div>
            <img src={wave} 
                className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
            />
        </div>
    </div>
    </div>
  )
}

export default Services;
