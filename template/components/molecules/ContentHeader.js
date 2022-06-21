import Header from '../atoms/header'
import HeaderSub from '../atoms/headerSub'


const ContentHeader = ({ header, subHeader }) => {
  return (
    <div className="content-header">
      <Header title={header} />
      <HeaderSub title={subHeader} />
    </div>
  )
}

export default ContentHeader;