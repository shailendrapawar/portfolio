import { useSelector } from "react-redux"
import Landing from "../components/landing/Landing"

function Home() {
  const {currentTheme}=useSelector(s=>s.theme)
  return (
    <div className="text-white w-full h-auto">

      <Landing/>

    </div>
  )
}
export default Home