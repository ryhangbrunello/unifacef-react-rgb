import Cache from '../containers/cache'
import Combustivel from '../containers/combustivel'
import Corona from '../containers/corona';
import Home from '../containers/home';
import Login from '../containers/login';
import Register from '../containers/register'
import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import StarWars from '../containers/star-wars'
import StarWarsDetails from '../containers/star-wars-details'
import Tags from '../containers/tags'

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
    name?: string
}

export const endpoints: EndPointsProps[] = [
    { path: `${publicUrl}/`, component: Home, exact: true },
    { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
    { path: `${publicUrl}/star-wars`, name: 'Star Wars', component: StarWars, exact: true },
    { path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails, exact: true },
    { path: `${publicUrl}/cache`, name: 'Cache', component: Cache, exact: true },
    { path: `${publicUrl}/tags`, name: 'Tags', component: Tags, exact: true },
    { path: `${publicUrl}/register`, name: 'Register', component: Register, exact: true },
    { path: `${publicUrl}/corona`, name: 'Corona', component: Corona, exact: true },
    { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
]

export const loginEndpoints: EndPointsProps[] = [
    { path: `${publicUrl}/`, component: Login, exact: true },
    { path: `${publicUrl}/logout`, component: Login, exact: true },
    { path: `${publicUrl}/login`, component: Login, exact: true },
  ];