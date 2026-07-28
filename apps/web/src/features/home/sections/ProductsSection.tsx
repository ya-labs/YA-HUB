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

                <ul className="home-products__collection" aria-label="Produtos da YA LABS">
                    {products.map((product, index) => {
                        const isActive = product.id === activeProductId;
                        const panelId = `product-panel-${product.id}`;

                        return (
                            <li
                                className="home-product"
                                data-active={isActive ? 'true' : 'false'}
                                data-theme={product.id}
                                key={product.id}
                            >
                                <button
                                    aria-controls={panelId}
                                    aria-expanded={isActive}
                                    className="home-product__trigger"
                                    id={`product-trigger-${product.id}`}
                                    onClick={() => setActiveProductId(product.id)}
                                    type="button"
                                >
                                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                    <strong>{product.name}</strong>
                                </button>

                                <div
                                    aria-labelledby={`product-trigger-${product.id}`}
                                    className="home-product__panel"
                                    hidden={!isActive}
                                    id={panelId}
                                >
                                    <div className="home-product__copy">
                                        <span>{product.role}</span>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <a href="#yahub">
                                            acompanhar desenvolvimento
                                            <span aria-hidden="true"> ↓</span>
                                        </a>
                                    </div>

                                    <div
                                        className="home-artifact-placeholder home-product__artifact"
                                        role="img"
                                        aria-label={`Território reservado para o artefato do ${product.name}`}
                                    >
                                        <span>[ artefato {product.name} ]</span>
                                        <small>ex.: {product.artifact}</small>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
