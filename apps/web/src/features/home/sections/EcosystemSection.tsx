import { useRef, useState, type KeyboardEvent } from 'react';

const ecosystemModules = [
    {
        id: 'yabook',
        name: 'YABook',
        role: 'memória técnica',
        description:
            'Documentação, padrões, guias e engenharia da organização. A memória técnica que torna cada decisão rastreável.',
        artifact: 'decisões conectadas a uma página viva',
        layout: 'centered',
    },
    {
        id: 'yagit',
        name: 'YAGit',
        role: 'fluxo técnico',
        description:
            'Automação e padronização de fluxos Git e GitHub. O caminho técnico que reduz atrito e transforma processo em hábito.',
        artifact: 'uma issue atravessando branch e pull request',
        layout: 'split',
    },
    {
        id: 'yabot',
        name: 'YABot',
        role: 'integração',
        description:
            'O bot principal da YA LABS conecta comunicação, notificações, automações e integrações. Discord aparece como uma das suas superfícies.',
        artifact: 'uma ação disparando em múltiplos canais',
        layout: 'reverse',
    },
    {
        id: 'yahub',
        name: 'YAHub',
        role: 'central',
        description:
            'A central que reúne projetos, pessoas, documentação e atividade. O lugar onde o ecossistema deixa de parecer uma lista e passa a funcionar como sistema.',
        artifact: 'janela central reunindo as outras ferramentas',
        layout: 'hub',
    },
] as const;

type EcosystemModuleId = (typeof ecosystemModules)[number]['id'];

export function EcosystemSection() {
    const [activeModuleId, setActiveModuleId] = useState<EcosystemModuleId>('yabook');
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const activeModule = ecosystemModules.find((module) => module.id === activeModuleId) ?? ecosystemModules[0];

    const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
        let nextIndex: number;

        if (event.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % ecosystemModules.length;
        } else if (event.key === 'ArrowLeft') {
            nextIndex = (currentIndex - 1 + ecosystemModules.length) % ecosystemModules.length;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = ecosystemModules.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        const nextModule = ecosystemModules[nextIndex];
        setActiveModuleId(nextModule.id);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section className="home-ecosystem" id="ecossistema" aria-labelledby="ecossistema-title">
            <div className="home-section-frame">
                <header className="home-ecosystem__intro">
                    <h2 id="ecossistema-title">Ferramentas que colocam o laboratório em movimento.</h2>
                    <p>
                        Explore uma ferramenta por vez. O conteúdo completo e o desenvolvimento de cada uma convergem
                        no YAHub.
                    </p>
                </header>

                <div className="home-ecosystem__selector" role="tablist" aria-label="Módulos do Ecossistema YA">
                    {ecosystemModules.map((module, index) => {
                        const isActive = module.id === activeModule.id;

                        return (
                            <button
                                aria-controls="ecosystem-active-panel"
                                aria-selected={isActive}
                                id={`ecosystem-tab-${module.id}`}
                                key={module.id}
                                onClick={() => setActiveModuleId(module.id)}
                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                                ref={(node) => {
                                    tabRefs.current[index] = node;
                                }}
                                role="tab"
                                tabIndex={isActive ? 0 : -1}
                                type="button"
                            >
                                {module.name}
                            </button>
                        );
                    })}
                </div>

                <article
                    aria-labelledby={`ecosystem-tab-${activeModule.id}`}
                    className="home-ecosystem__stage"
                    data-layout={activeModule.layout}
                    id="ecosystem-active-panel"
                    role="tabpanel"
                    tabIndex={0}
                >
                    <div className="home-ecosystem__title">
                        <span>{activeModule.role}</span>
                        <h3>{activeModule.name}</h3>
                    </div>

                    <div
                        className="home-artifact-placeholder home-ecosystem__artifact"
                        role="img"
                        aria-label={`Território reservado para o artefato do ${activeModule.name}`}
                    >
                        <span>[ artefato {activeModule.name} ]</span>
                        <small>ex.: {activeModule.artifact}</small>
                    </div>

                    <div className="home-ecosystem__description">
                        <p>{activeModule.description}</p>
                        <a href="#yahub">
                            {activeModule.id === 'yahub' ? 'ver o YAHub' : 'acompanhar no YAHub'}
                            <span aria-hidden="true"> ↓</span>
                        </a>
                    </div>

                    <span className="home-ecosystem__counter" aria-hidden="true">
                        {String(ecosystemModules.indexOf(activeModule) + 1).padStart(2, '0')} / 04
                    </span>
                </article>
            </div>
        </section>
    );
}
