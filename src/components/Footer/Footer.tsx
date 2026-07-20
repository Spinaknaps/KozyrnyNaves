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

                            +7(952)408-98-77
                        </a>

                        <a href="mailto:ghsdkjghs@mail.ru">
                            manky_seven@mail.ru

                        </a>
                    </div>

                    <div className="footer-right">
                        <h3>Мы в соцсетях</h3>

                        <div className="footer-socials">

                            <a href="https://vk.com/navesiartem">
                                <img
                                    src="assets/icons/vkv.svg"
                                    alt="VK"
                                />
                            </a>


                            <a href="https://t.me/artemmcarrow">

                                <img
                                    src="assets/icons/tg.svg"
                                    alt="Telegram"
                                />
                            </a>

                            <a href="https://max.ru/u/f9LHodD0cOK2_Pz73E3Bcn2SjnHsBUE-visFwuH4xgxAtp_ud3QcE_zwEtM">
                                <img
                                    src="assets/icons/max.svg"
                                    alt="max"
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