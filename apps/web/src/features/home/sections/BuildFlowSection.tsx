const buildSteps = [
    {
        index: '01',
        title: 'Ideia',
        description: 'Um problema real encontra intenção e direção.',
    },
    {
        index: '02',
        title: 'Documentação',
        description: 'Contexto e decisões deixam de depender da memória.',
    },
    {
        index: '03',
        title: 'Issue',
        description: 'Escopo, critérios e limites tornam o trabalho claro.',
        emphasis: 'ponto de articulação',
    },
    {
        index: '04',
        title: 'Branch',
        description: 'A solução evolui isolada, rastreável e testável.',
    },
    {
        index: '05',
        title: 'Pull Request',
        description: 'Código, evidências e revisão se encontram.',
    },
    {
        index: '06',
        title: 'Release',
        description: 'O aprendizado termina em valor disponível.',
    },
];

export function BuildFlowSection() {
    return (
        <section className="home-build" id="fluxo" aria-labelledby="fluxo-title">
            <div className="home-section-frame">
                <header className="home-build__intro">
                    <h2 id="fluxo-title">Como uma ideia vira produto.</h2>
                    <p>
                        Uma trajetória contínua, colaborativa e rastreável. A Issue organiza o trabalho e mantém cada
                        passagem conectada.
                    </p>
                </header>

                <div className="home-build__journey">
                    <span className="home-build__route" aria-hidden="true" />

                    <ol className="home-build__steps" aria-label="Etapas do fluxo de construção da YA LABS">
                        {buildSteps.map((step) => (
                            <li data-primary={step.title === 'Issue' ? 'true' : undefined} key={step.title}>
                                <span className="home-build__index" aria-hidden="true">
                                    {step.index}
                                </span>
                                <span className="home-build__node" aria-hidden="true" />
                                <div>
                                    {step.emphasis ? <span className="home-build__emphasis">{step.emphasis}</span> : null}
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <p className="home-build__closing">
                    ideia → documentação → <strong>issue</strong> → branch → pull request → release
                </p>
            </div>
        </section>
    );
}
