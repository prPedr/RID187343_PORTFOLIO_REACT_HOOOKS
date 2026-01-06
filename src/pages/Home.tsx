import Header from "../components/Header/Header"
import MenuApresentacao from "../components/MenuApresentacao/MenuApresentacao"
import Blog from "../components/Blog/Blog"
import Projetos from "../components/Projetos/Projetos"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <MenuApresentacao />
      <Blog />
      <Projetos />
      <Footer />
    </>
  )
}

export default Home