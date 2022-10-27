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
            {categoryId: 'lamparas', categoryName: 'Lámparas'},
            {categoryId: 'apliques', categoryName: 'Apliques'},
            {categoryId: 'colgantes', categoryName: 'Colgantes'},
            {categoryId: 'cartelesled', categoryName: 'Carteles LED'}
        ];
        setCategories(categorias);

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