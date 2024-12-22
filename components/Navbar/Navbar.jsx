//import logo
import Services from "../Services/Services.jsx";

const Navbar = () => {
  return (
    <div data-aos="fade-down"
    className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-2 sm:py-4'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img src ="" className='w-10'/>
                </div>
                <div className='text-white hidden md:block'>
                    <ul className='flex iems-center gap-6 text-xl py-2'>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href='#'>Packages</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='text-white border-2 border-white px-3 py-1 rounded-md'>
                    <button>Login</button>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Navbar