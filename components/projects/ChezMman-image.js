import Image from 'next/image'

import imageChezMmanDark from '../../public/chez-mman--dark.png'
import imageChezMmanLight from '../../public/chez-mman--light.png'

const ChezMmanImage = ({ darkMode }) => {
  return darkMode ? (
    <Image
      src={imageChezMmanDark}
      className='card__photo'
      placeholder='blur'
      layout='responsive'
      alt="Chez M'man in dark mode website preview"
    />
  ) : (
    <Image
      src={imageChezMmanLight}
      className='card__photo'
      placeholder='blur'
      layout='responsive'
      alt="Chez M'man in light mode website preview"
    />
  )
}

export default ChezMmanImage
