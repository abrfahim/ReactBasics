import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormSubmit from './FormSubmit';
import ManageFormUsingState from './ManageFormUsingState';
import UseRefCEC from './UseRefCEC';
import NotFound from './NotFound';
import ToDowithState from './ToDowithState'




const RoutingProcedure = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormSubmit/>} />
                <Route path="/manage" element={<ManageFormUsingState/>}/>
                <Route path="/useref" element={<UseRefCEC/>}/>
                <Route path="/todo" element={<ToDowithState/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutingProcedure