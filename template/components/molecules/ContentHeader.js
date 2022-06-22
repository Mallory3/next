import Header from '../atoms/headers/header'
import HeaderSub from '../atoms/headers/headerSub'


const ContentHeader = ({ header, subHeader }) => {
  return (
    <div className="content-header">
      <Header title={header} />
      <HeaderSub title={subHeader} />
    </div>
  )
}

export default ContentHeader;