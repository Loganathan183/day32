
import { Container } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './header.module.css';

export default function Header() {
    return (
        <div classname={styles.header}>
         <Container>
                <div style={{color: "red",background_color: "white"}}>
                    <h1>hii</h1>
                    <Link to="cart" style={styles.cartIcon}>
                        <FaCartArrowDown />
                        <span>1</span>
                    </Link>
                </div>
           </Container>
        </div>
    )
};