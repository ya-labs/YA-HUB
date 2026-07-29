import { useRef, useState, type KeyboardEvent } from 'react';

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
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const activeProduct = products.find((product) => product.id === activeProductId) ?? products[0];

    const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
        let nextIndex: number;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % products.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            nextIndex = (currentIndex - 1 + products.length) % products.length;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = products.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        const nextProduct = products[nextIndex];
        setActiveProductId(nextProduct.id);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section className="home-products" id="produtos" aria-labelledby="produtos-title">
            <div className="home-section-frame">
                <header className="home-products__intro">
                    <h2 id="produtos-title">Produtos com identidade própria.</h2>
                    <p>
                        Selecione um produto para entender sua função. O estágio completo e a evolução de cada um ficam
                        no YAHub.
                    </p>
                </header>

                <div className="home-products__selector" role="tablist" aria-label="Produtos da YA LABS">
                    {products.map((product, index) => {
                        const isActive = product.id === activeProductId;

                        return (
                            <button
                                aria-controls="product-active-panel"
                                aria-selected={isActive}
                                className="home-product-tab"
                                data-theme={product.id}
                                id={`product-tab-${product.id}`}
                                key={product.id}
                                onClick={() => setActiveProductId(product.id)}
                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                                ref={(node) => {
                                    tabRefs.current[index] = node;
                                }}
                                role="tab"
                                tabIndex={isActive ? 0 : -1}
                                type="button"
                            >
                                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                <strong>{product.name}</strong>
                                <small>{product.role}</small>
                            </button>
                        );
                    })}
                </div>

                <article
                    aria-labelledby={`product-tab-${activeProduct.id}`}
                    className="home-product-stage"
                    data-theme={activeProduct.id}
                    id="product-active-panel"
                    role="tabpanel"
                    tabIndex={0}
                >
                    <div className="home-product__copy">
                        <span>{activeProduct.role}</span>
                        <h3>{activeProduct.name}</h3>
                        <p>{activeProduct.description}</p>
                        <a href="#yahub">
                            acompanhar desenvolvimento
                            <span aria-hidden="true"> ↓</span>
                        </a>
                    </div>

                    <div
                        className="home-artifact-placeholder home-product__artifact"
                        role="img"
                        aria-label={`Território reservado para o artefato do ${activeProduct.name}`}
                    >
                        <span>[ artefato {activeProduct.name} ]</span>
                        <small>ex.: {activeProduct.artifact}</small>
                    </div>
                </article>
            </div>
        </section>
    );
}
