import { RouteProps } from "react-router-dom";
import Home from "../containers/home";
import Sobre from "../containers/sobre";

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
    name?: string
}

export const endpoints: EndPointsProps[] = [
    {path: `${publicUrl}/`, component: Home, exact:true},
    {path: `${publicUrl}/home`, name:'Home', component: Home, exact:true},
    {path: `${publicUrl}/sobre`, name:'Sobre', component: Sobre, exact:true},
]