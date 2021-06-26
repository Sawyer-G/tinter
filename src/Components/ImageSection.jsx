import { h } from 'preact'
import ConfigBar from './ConfigBar'
import MainCanvas from './MainCanvas'
import { useStore } from './../hooks/useStore'
import FenceImg from './../assets/fence.svg'

const ImageSection = () => {
  const selectedImage = useStore((state) => state.selectedImage)

  return (
    <div className="relative w-full lg:w-1/2 xl:w-3/5">
      <div className="relative flex-col items-center h-full ">
        <div className="flex w-full lg:h-3/5" style={{ minHeight: '40vh' }}>
          <MainCanvas src={selectedImage} />
        </div>
        <div className="flex items-center justify-center flex-1 w-full lg:h-2/5">
          <ConfigBar />
        </div>
      </div>
      <div className="fixed z-10 mb-4 ml-4 bottom-3 left-3">
        <img src={FenceImg} alt="" />
      </div>
    </div>
  )
}

export default ImageSection
