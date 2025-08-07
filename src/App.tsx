import { Outlet } from "react-router"
import ComponentLayout from "./components/layout/ComponentLayout"




function App() {
  return (
   <div >

    <ComponentLayout>
     
  <div >
       <Outlet></Outlet>
  </div>
  
  
   </ComponentLayout>
   </div>
  )
}

export default App
