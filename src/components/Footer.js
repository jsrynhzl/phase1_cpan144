import './Footer.css'

const Footer = () => {
    return(
        <div>
            <footer>
                <div class="footerpane">
                    <h3>Operating hours</h3>
                    <ul>
                        <li>Monday - Friday: 10am - 7pm</li>
                        <li>Saturday:&nbsp;10am - 5pm</li>
                        <li>Sunday:&nbsp;&nbsp;&nbsp;11am - 7pm</li>
                    </ul>
                </div>
                <div class="footerpane">
                    <h3>Locations</h3>
                    <ul>
                        <li>Vaughan Mills</li>
                        <li>Kensington Market</li>
                        <li>Niagara-on-the-Lake</li>
                    </ul>
                </div>
                <div class="footerpane">
                    <h3>Quick links</h3>
                    <nav id="footernav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="menu.html">Menu</a></li>
                            <li><a href="order.html">Order</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <p>Copyright &copy; TszWai and Jesse</p>
            </footer>
        </div>
    );
}

export default Footer