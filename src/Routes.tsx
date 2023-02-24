import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { Cart } from "./pages/Cart"
import { Catalog } from "./pages/Catalog"

export function AppRoutes(){
    return(
        
        <Router> {/*Encapsula os outros elementos, fornece informações para os componentes que estão abaixo dele, entende qual é a rota que está sendo solicitada*/}
        <Routes>
            <Route path="/catalog" element={<Catalog/>}/>
            
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </Router>
    )
}