const areas = ['software', 'automação', 'produtos', 'documentação', 'experimentação'];

export function AboutSection() {
    return (
        <section className="home-about" id="organizacao" aria-labelledby="organizacao-title">
            <div className="home-about__content">
                <p className="home-about__label">sobre a YA LABS</p>

                <h2 id="organizacao-title">Construímos como laboratório.</h2>

                <p className="home-about__lead">
                    A YA LABS transforma ideias em software bem construído — com clareza, experimentação e cuidado real
                    com quem usa.
                </p>

                <ul className="home-about__areas" aria-label="Áreas de atuação da YA LABS">
                    {areas.map((area) => (
                        <li key={area}>{area}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
