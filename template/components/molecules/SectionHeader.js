import Header from '../atoms/header'
import HeaderSection from '../atoms/headerSection'


const SectionHeader = ({ sectionHeader, header }) => {
  return (
    <>
      <HeaderSection title={sectionHeader} />
      <Header title={header} />
    </>
  )
}

export default SectionHeader;