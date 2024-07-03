import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

  const Hero = ()=> {
    return (
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-customStart'/>
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-customStart'/>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}text-white`}>Hi &nbsp; I'm <span className='text-[] bg-customStart rounded-xl p-1 hover:bg-primary'>Kriti Singh</span> </h1>

            <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            Computer Science Engineer <span className='sm-block hidden text-6xl'>Lovely Professional University</span><span className='sm:block hidden text-xl'>2022 - 2026</span>
           
          </p>
          </div>
        </div>
              <div className="absolute bottom-0 w-full h-[700px]"> 
        <ComputersCanvas className="w-full h-full" />
      </div>
      </section>
    )
  }


export default Hero
