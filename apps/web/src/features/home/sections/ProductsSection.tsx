import { useState } from 'react';

const products = [
    {
        id: 'svnflow',
        name: 'SVNFlow',
        role: 'produto de fluxo',
        description: 'Padroniza fluxos com SVN, Git e entregas para tornar o processo previsível.',
        artifact: 'um fluxo de entrega atravessando ambientes',
    },
    {
        id: 'devlab',
        name: 'DevLab',
        role: 'produto educacional',
        description: 'Organiza aprendizado, trilhas, conteúdos e evolução técnica em um só percurso.',
        artifact: 'uma trilha de estudo ganhando progresso',
    },
    {
        id: 'spotifolio',
        name: 'Spotifolio',
        role: 'produto de portfólio',
        description: 'Transforma repertório musical em uma presença profissional organizada.',
        artifact: 'um portfólio musical em construção',
    },
    {
        id: 'cade-o-dano',
        name: 'CADE-O-DANO',
        role: 'produto experimental',
        description: 'Explora dados de League of Legends de forma prática, divertida e útil.',
        artifact: 'uma partida convertida em leitura de dano',
    },
    {
        id: 'rmaworker',
        name: 'RMAWorker',
        role: 'produto de automação',
        description: 'Automatiza processos repetitivos para devolver atenção ao trabalho que importa.',
        artifact: 'uma fila de tarefas sendo processada',
    },
    {
        id: 'meu-treino',
        name: 'Meu Treino',
        role: 'produto pessoal',
        description: 'Acompanha treinos, rotina de academia e evolução pessoal com clareza.',
        artifact: 'uma rotina de treino acompanhada no tempo',
    },
] as const;

type ProductId = (typeof products)[number]['id'];

export function ProductsSection() {
    const [activeProductId, setActiveProductId] = useState<ProductId>('svnflow');
    const activeProduct = products.find((product) => product.id === activeProductId) ?? products[0];
    const activeProductIndex = products.indexOf(activeProduct);
    const previousProduct = products[(activeProductIndex - 1 + products.length) % products.length];
    const nextProduct = products[(activeProductIndex + 1) % products.length];

    const selectProductAt = (index: number) => {
        const normalizedIndex = (index + products.length) % products.length;
        setActiveProductId(products[normalizedIndex].id);
    };

    return (
        <section className="home-products" id="produtos" aria-labelledby="produtos-title">
            <div className="home-section-frame">
                <header className="home-products__intro">
                    <h2 id="produtos-title">Produtos com identidade própria.</h2>
                    <p>
                        Cada produto ocupa o próprio palco. Avance no ritmo que quiser para descobrir a função de cada
                        um e acompanhar sua evolução no YAHub.
                    </p>
                </header>

                <article
                    aria-labelledby={`product-name-${activeProduct.id}`}
                    className="home-product-gallery"
                    data-theme={activeProduct.id}
                    id="product-active-panel"
                    role="region"
                >
                    <span aria-hidden="true" className="home-product-gallery__wordmark">
                        {activeProduct.name}
                    </span>

                    <button
                        aria-label={`Ver produto anterior: ${previousProduct.name}`}
                        className="home-product-gallery__preview home-product-gallery__preview--previous"
                        onClick={() => selectProductAt(activeProductIndex - 1)}
                        type="button"
                    >
                        <span aria-hidden="true" className="home-product-gallery__arrow">←</span>
                        <span className="home-product-gallery__preview-copy">
                            <small>anterior</small>
                            <strong>{previousProduct.name}</strong>
                        </span>
                    </button>

                    <div className="home-product-gallery__active">
                        <span>{activeProduct.role}</span>
                        <h3 id={`product-name-${activeProduct.id}`}>{activeProduct.name}</h3>
                        <p>{activeProduct.description}</p>
                        <a href="#yahub">
                            acompanhar desenvolvimento
                            <span aria-hidden="true"> ↓</span>
                        </a>

                        <div
                            className="home-artifact-placeholder home-product-gallery__artifact"
                            role="img"
                            aria-label={`Território reservado para o artefato do ${activeProduct.name}`}
                        >
                            <span>[ artefato {activeProduct.name} ]</span>
                            <small>ex.: {activeProduct.artifact}</small>
                        </div>
                    </div>

                    <button
                        aria-label={`Ver próximo produto: ${nextProduct.name}`}
                        className="home-product-gallery__preview home-product-gallery__preview--next"
                        onClick={() => selectProductAt(activeProductIndex + 1)}
                        type="button"
                    >
                        <span className="home-product-gallery__preview-copy">
                            <small>próximo</small>
                            <strong>{nextProduct.name}</strong>
                        </span>
                        <span aria-hidden="true" className="home-product-gallery__arrow">→</span>
                    </button>

                    <span className="home-product-gallery__counter" aria-label={`Produto ${activeProductIndex + 1} de ${products.length}`}>
                        {String(activeProductIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
                    </span>
                </article>
            </div>
        </section>
    );
}
