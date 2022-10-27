import '../styles/NavBar.css';

import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { getCollection } from '../utils/Firebase'
import CartWidget from "./CartWidget"
import logo from '../assets/logo.png'

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const categorias = [
            {categoryId: 'lamparas', categoryName: 'Lámparas111'},
            {categoryId: 'apliques', categoryName: 'Apliques222'},
            {categoryId: 'colgantes', categoryName: 'Colgantes333'},
            {categoryId: 'cartelesled', categoryName: 'Carteles LED444'}
        ];
        setCategories(categorias);
        console.log('leyendo categorias...');

        /*getCollection('categories')
        .then((categories)=>{
            setCategories(categories.docs.map((category)=>{
                return category.data();
            }))
        });*/

        return () => { }
      }, []);

    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavLink className="navbar-brand" to={`/`}> 
                        <img alt="Noah Iluminacion" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
                        Noah Iluminación
                    </NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {categories.map((category)=>{
                                return <NavLink className="nav-link" key={category.categoryId} to={`/category/${category.categoryId}`}>{category.categoryName}</NavLink>
                            })}
                            <NavLink className="nav-link" to={`/category/fake`}>FAKE</NavLink>
                            {/*<NavLink className="nav-link" to={`/category/lamparas`}>Lámparas</NavLink>
                            <NavLink className="nav-link" to={`/category/apliques`}>Apliques</NavLink>
                            <NavLink className="nav-link" to={`/category/colgantes`}>Colgantes</NavLink>
                            <NavLink className="nav-link" to={`/category/cartelesled`}>Carteles LED</NavLink>*/}
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/cart" className="cart-link nav-cart">
                        <CartWidget/>
				    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar