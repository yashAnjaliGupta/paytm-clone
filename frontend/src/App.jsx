import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Signup} from './pages/Signup';
import {Signin} from './pages/Signin';
import {Dashboard} from './pages/Dashboard';
import {SendMoney} from './pages/Sendmoney';
import { PublicRoutes } from "./guards/PublicRoutes";
import { PrivateRoutes } from "./guards/PrivateRoutes";


function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={
              <PublicRoutes>
                <Signup/>
              </PublicRoutes>
              } />
            <Route path="/signin" element={
             <PublicRoutes>
              <Signin/>
              </PublicRoutes>
              } />
            <Route path="/dashboard" element={
              <PrivateRoutes>
                <Dashboard/>
              </PrivateRoutes>
              } />
            <Route path="/send" element={
              <PrivateRoutes>
              <SendMoney/>
              </PrivateRoutes>
              } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
