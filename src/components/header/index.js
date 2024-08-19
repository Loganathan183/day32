
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from './header.module.css'

export default function Header() {
    return (
        <div>
            <Container>
                <div classname={styles.navbar}>
                    <h1>Shopping CART</h1>
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <Link to="/cart" >
                            <FaShoppingCart style={{ position: 'absolute', bottom: '09px',top: '-41px', right: '230px', fontSize: '24px', color: 'blue' }} />
                            <span>cart</span>
                        </Link>
                    </div>

                </div>
            </Container>

        </div>
    )
}