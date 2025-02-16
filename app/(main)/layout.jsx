import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer/Footer"
import MobileHeader from "../components/layout/MobileHeader"
const MainLayout = ({children}) => {

  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout