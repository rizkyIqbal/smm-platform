import Navbar from '../Component/Navbar'
import backgroundTop from '../assets/img/background/order/top.png'
import backgroundBottom from '../assets/img/background/order/bottom.png'
import sectionOrder from '../assets/img/sectionOrder.png'
import sectionInfluencer from '../assets/img/sectionInfluencer.png'
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom'

function Order() {
  return (
    <>
    <section className='body-font font-poppins w-screen sm:overflow-x-hidden text-black'>
        <Navbar />
        <div className='flex'> 
          <div className='absolute -z-20 right-0'>
              <img src={backgroundTop} className='w-[550px] h-auto' alt="" />
          </div>
          <div className='absolute -z-20 top-[420px]'>
              <img src={backgroundBottom} className='w-[850px] h-auto' alt="" />
          </div>
        </div>
          <div className='px-32 py-24'>
            <p className='text-2xl font-medium mb-12'>Choose Your Choice</p>
              <div className='flex items-center '>
                <img src={sectionOrder} className='w-[620px] h-auto' alt="" />
                <div className='ml-12'>
                  <p className='text-3xl font-medium'>Social Media Management</p>
                  <p className='text-xl mt-2'>Create your business content with social media without hassle.</p>
                  <Link to="/order/smm">
                    <button className='btn w-44 mt-4 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>
                      Start Now
                    </button>
                  </Link>
                </div>
              </div> 
              <div className='flex items-center justify-end mt-24'>
                <div className='mr-96'>
                  <p className='text-3xl font-medium'>Influencer</p>
                  <p className='text-xl mt-2'>Introduce your products throught the right influencers.</p>
                  <button className='btn w-44 mt-4 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:text-white'>
                    Start Now
                  </button>
                </div>
                <img src={sectionInfluencer} className='w-[620px] h-auto' alt="" />
              </div>
          </div>
        <Footer />
    </section>
    </>
  )
}

export default Order