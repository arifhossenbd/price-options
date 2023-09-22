
import Navbar from "./Component/Navbar/Navbar"
import StudentChart from "./Component/StudentCharts/StudentChart"
import PriceOptions from "./Component/priceOptions/priceOptions"
import Phones from "./Phones"

function App() {
  return (
    <>
      <div className=" p-12 gap-5 my-2">
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <StudentChart></StudentChart>
        <Phones></Phones>
      </div>
    </>
  )
}

export default App
