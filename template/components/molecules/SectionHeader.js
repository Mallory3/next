import Header from '../atoms/headers/header'
import HeaderSection from '../atoms/headers/headerSection'


const SectionHeader = ({ sectionHeader, header }) => {
  return (
    <>
      <HeaderSection title={sectionHeader} />
      <Header title={header} />
    </>
  )
}

export default SectionHeader;