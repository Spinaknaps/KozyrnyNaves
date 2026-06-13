import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src="assets/logo/logotype.svg" alt="Козырный Навес" />
                        </div>

                        <p className="footer-description">
                            Производство и монтаж навесов в Ижевске и пригороде
                        </p>
                    </div>

                    <div className="footer-center">
                        <a href="tel:+7879405804860">
                            7879405804860
                        </a>

                        <a href="mailto:ghsdkjghs@mail.ru">
                            ghsdkjghs@mail.ru
                        </a>
                    </div>

                    <div className="footer-right">
                        <h3>Мы в соцсетях</h3>

                        <div className="footer-socials">

                            <a href="#">
                                <img
                                    src="assets/icons/vkv.svg"
                                    alt="VK"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="assets/icons/tg.svg"
                                    alt="Telegram"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="assets/icons/max.svg"
                                    alt="Telegram"
                                />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    © 2026 Козырный Навес. Все права защищены.
                </div>

            </div>
        </footer>
    );
}