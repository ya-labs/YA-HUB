export function HeroSection() {
    return (
        <section className="home-hero" id="home" aria-labelledby="home-title">
            <div className="home-hero__viewport">
                <div className="home-hero__content">
                    <p className="home-wire-label">wireframe estrutural · direção em validação</p>

                    <h1 className="home-hero__title" id="home-title" aria-label="YA LABS">
                        <span aria-hidden="true">YA</span>
                        <span aria-hidden="true">LABS</span>
                    </h1>

                    <p className="home-hero__slogan">
                        Code. Automate. <strong>Scale.</strong>
                    </p>
                </div>

                <div
                    className="home-hero__visual-territory"
                    role="img"
                    aria-label="Território reservado para a matéria visual e a trajetória técnica da marca"
                >
                    <span className="home-hero__trajectory home-hero__trajectory--outer" aria-hidden="true" />
                    <span className="home-hero__trajectory home-hero__trajectory--inner" aria-hidden="true" />
                    <span className="home-hero__visual-note">[ matéria visual da marca ]</span>
                    <span className="home-hero__visual-caption">trajetória técnica discreta</span>
                </div>

                <a className="home-hero__scroll" href="#organizacao">
                    <span>continuar</span>
                    <span aria-hidden="true">↓</span>
                </a>
            </div>

            <div className="home-hero__continuation" aria-label="Continuação estrutural da Hero">
                <span className="home-hero__monogram" aria-hidden="true">
                    A
                </span>
                <div>
                    <p>transformação da marca</p>
                    <span>[ passagem visual para o laboratório ]</span>
                </div>
            </div>
        </section>
    );
}
