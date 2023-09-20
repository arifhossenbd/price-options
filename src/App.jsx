
import Navbar from "./Component/Navbar/Navbar"
import StudentChart from "./Component/StudentCharts/StudentChart"
import PriceOptions from "./Component/priceOptions/priceOptions"

function App() {
  return (
    <>
      <div className=" p-12">
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <StudentChart></StudentChart>
      </div>
    </>
  )
}

export default App
