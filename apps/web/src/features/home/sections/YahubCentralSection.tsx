import { Link } from 'react-router-dom';

const yahubAreas = ['projetos', 'pessoas', 'documentação', 'atividade', 'ecossistema'];

export function YahubCentralSection() {
    return (
        <section className="home-central" id="yahub" aria-labelledby="yahub-title">
            <div className="home-section-frame">
                <header className="home-central__intro">
                    <h2 id="yahub-title">Um lugar para encontrar o que a YA LABS está construindo e como.</h2>
                    <p>
                        O YAHub reúne o laboratório em uma janela única. Este wireframe define a hierarquia da central,
                        não sua interface final.
                    </p>
                </header>

                <div className="home-portal-window" aria-label="Estrutura conceitual da central YAHub">
                    <header className="home-portal-window__bar">
                        <strong>YAHub</strong>
                        <span>portal / visão geral</span>
                        <i aria-hidden="true" />
                    </header>

                    <div className="home-portal-window__body">
                        <ul aria-label="Áreas representadas no wireframe do YAHub">
                            {yahubAreas.map((area, index) => (
                                <li data-active={index === 0 ? 'true' : undefined} key={area}>
                                    {area}
                                </li>
                            ))}
                        </ul>

                        <div className="home-portal-window__canvas">
                            <div className="home-portal-window__headline">
                                <span>central YA LABS</span>
                                <strong>O que está em movimento, reunido e legível.</strong>
                            </div>

                            <div className="home-portal-window__regions" aria-hidden="true">
                                <span>[ projetos em destaque ]</span>
                                <span>[ atividade recente ]</span>
                                <span>[ documentação e pessoas ]</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Link className="home-central__cta" to="/portal">
                    acessar o portal
                    <span aria-hidden="true"> →</span>
                </Link>
            </div>
        </section>
    );
}
