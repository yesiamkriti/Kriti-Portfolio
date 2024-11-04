import { styles } from '../styles';
import { ProfileImage } from './canvas';

  const Hero = ()=> {
    return (
      <section className="relative w-full h-screen mx-auto mb-30">
        <div className={`${styles.paddingX} relative inset-0  top-[120px] max-w-10xl mx-auto flex flex-row items-start gap-4`}>

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-customStart'/>
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-customStart'/>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}text-white`}>Hi &nbsp; I'm <span className='text-[]  rounded-xl hover:bg-primary p-2'>Kriti</span> </h1>
            <span className='sm-block text-4xl text-white'>Lovely Professional University</span> 
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Computer Science Engineer  
            <span className='sm:block hidden text-xl'>2022 - 2026</span>
          </p>
          </div>
        </div>
        <div className="absolute bottom-20 right-0 left-0 flex justify-center w-full h-[200px]">
          <ProfileImage />
        </div>

       
      </section>
    )
  }


export default Hero
