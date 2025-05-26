import {} from "react-dom"
import { Outlet } from "react-router"
import {Toaster} from "react-hot-toast"
function RootLayout() {
  return (
    <div className="h-screen w-full justify-center flex items-center">
      <Toaster/>
        <Outlet/>
    </div>
  )
}
export default RootLayout