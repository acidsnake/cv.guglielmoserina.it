import Button from './Button';

function Hero() {
  return (
    <>
      <div className='flex justify-between flex-wrap md:flex-nowrap'>
        <div>
          <h1 className='font-bold text-2xl'>Guglielmo Serina</h1>
          <h2 className='text-lg mb-7'>Front end developer</h2>
        </div>
        <div className='hidden md:block'>
          <Button 
            css='btn-download-cv'
            cta={'Download cv'} 
            url={'/cv-guglielmo-serina.pdf'} 
            iconType={'lucide:download'}
            isBlank={true} />        
        </div>
      </div>
    </>
  )
}

export default Hero;