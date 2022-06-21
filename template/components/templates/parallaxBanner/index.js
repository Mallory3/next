import Parallax from '../../atoms/parallax'
//GET DATA CONTENT
import { GetData } from '../../helper'
import data from '../../../content/data'

export const ParallaxBanner = () => {
  const content = GetData(data);
  const url = content?.sections.parallaxBanner?.image?.url
  const alt = content?.sections?.parallaxBanner?.image?.alt
  console.log(url, alt);
  return (
    <Parallax url={url} alt={alt}>
      hi
    </Parallax>

  )
}

