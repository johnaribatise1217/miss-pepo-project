'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {

  return (
    <section className="lg:min-h-[115vh] min-h-[120vh] sm:bg-center relative bg-eventMobile max-w-full lg:bg-bgEvent bg-no-repeat bg-cover lg:bg-cover pt-[5rem] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="py-3 w-full"
      >
        <div className="container flex flex-col mt-[5rem] items-start sm:my-[10%] gap-[1.5rem] text-white overflow-x-hidden break-words">

          <p className="bricolage-grotesque font-[400] leading-[120%] text-pryWhite text-[clamp(42px,6vw,100px)]">
            Hosting <br /> Memorable <br /> Experiences
          </p>

          <p className="inter text-[clamp(18px,2.5vw,30px)] leading-[150%] font-[300]">
            As an expert event host, I transform your <br /> event into an unforgettable occasion that <br /> will always linger in your mind.
          </p>

          <Link href='/booking' className='bg-white w-full sm:w-auto inter text-[clamp(16px,1.6vw,16px)] px-6 py-4 border rounded-[16px] text-black border-b-[5px]'>
            Book Me!
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Header