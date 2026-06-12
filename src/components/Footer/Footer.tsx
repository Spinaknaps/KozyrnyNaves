import "./Footer.css";



function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-column">
                        <div className="footer-logo">
                           

                            <div className="footer-logo-text">
                                <h2>Козырный<br />Навес</h2>
                            </div>
                        </div>

                        <p className="footer-description">
                            Производство и монтаж навесов в
                            <br />
                            Ижевске и пригороде
                        </p>
                    </div>

                    <div className="footer-column footer-center">
                        <a
                            href="tel:+78789405804860"
                            className="footer-contact"
                        >
                            87879405804860
                        </a>

                        <a
                            href="mailto:ghsdkjghs@mail.ru"
                            className="footer-contact"
                        >
                            ghsdkjghs@mail.ru
                        </a>
                    </div>

                    <div className="footer-column footer-right">
                        <h3>Мы в соцсетях</h3>

                        <div className="footer-socials">
                            <a href="#">
                                <img src="assets/icons/vkv.svg" alt="VK" />
                            </a>

                            <a href="#">
                                <img src="assets/icons/max.svg" alt="VK" />
                            </a>

                            <a href="#">
                               <img src="assets/icons/tg.svg" alt="VK" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="footer-line"></div>

                <div className="footer-bottom">
                    © 2026 Козырный Навес. Все права защищены.
                </div>
            </div>
        </footer>
    );
}

export default Footer;