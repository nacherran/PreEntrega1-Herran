/* import {SlBasket} from "react-icons/sl";*/
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    return (
        <nav>
            <h3>Chorro</h3>
            <div>
                <button>Pantalones</button>
                <button>Remeras</button>
                <button>Camperas</button>                
            </div>
            <CartWidget/>
            
        </nav>
    )

}

export default Navbar