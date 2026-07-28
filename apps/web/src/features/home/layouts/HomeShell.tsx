import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type HomeShellProps = {
    children: ReactNode;
};

export function HomeShell({ children }: HomeShellProps) {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('yahub-home-active');

        return () => document.documentElement.classList.remove('yahub-home-active');
    }, []);

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 24);

        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });

        if (!('IntersectionObserver' in window)) {
            return () => window.removeEventListener('scroll', updateScrollState);
        }

        const sectionMap: Record<string, string> = {
            home: 'home',
            organizacao: 'organizacao',
            ecossistema: 'ecossistema',
            fluxo: 'fluxo',
            produtos: 'produtos',
            yahub: 'yahub',
        };
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

                if (visibleEntry) {
                    setActiveSection(sectionMap[visibleEntry.target.id] ?? 'home');
                }
            },
            { rootMargin: '-30% 0px -55%', threshold: [0, 0.2, 0.5] },
        );

        document.querySelectorAll<HTMLElement>('.home-main > section[id]').forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', updateScrollState);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        document.querySelectorAll<HTMLElement>('.home-main > section[id]').forEach((section) => {
            section.dataset.active = section.id === activeSection ? 'true' : 'false';
        });
    }, [activeSection]);

    return (
        <div className="home-shell">
            <a className="home-skip-link" href="#conteudo-principal">
                Pular para o conteúdo principal
            </a>

            <header className="home-header" data-scrolled={isScrolled ? 'true' : 'false'}>
                <a className="home-header__brand" href="#home" aria-label="Voltar ao início da Home">
                    YA LABS
                </a>

                <nav className="home-nav" aria-label="Navegação da Home">
                    <a
                        className="home-nav__link"
                        href="#home"
                        aria-current={activeSection === 'home' ? 'location' : undefined}
                    >
                        início
                    </a>
                    <a
                        className="home-nav__link"
                        href="#organizacao"
                        aria-current={activeSection === 'organizacao' ? 'location' : undefined}
                    >
                        sobre
                    </a>
                    <a
                        className="home-nav__link"
                        href="#ecossistema"
                        aria-label="Ecossistema YA"
                        aria-current={activeSection === 'ecossistema' ? 'location' : undefined}
                    >
                        ecossistema
                    </a>
                    <a
                        className="home-nav__link"
                        href="#fluxo"
                        aria-label="Fluxo de construção"
                        aria-current={activeSection === 'fluxo' ? 'location' : undefined}
                    >
                        fluxo
                    </a>
                    <a
                        className="home-nav__link"
                        href="#produtos"
                        aria-label="Produtos"
                        aria-current={activeSection === 'produtos' ? 'location' : undefined}
                    >
                        produtos
                    </a>
                    <a
                        className="home-nav__link"
                        href="#yahub"
                        aria-label="Central YAHub"
                        aria-current={activeSection === 'yahub' ? 'location' : undefined}
                    >
                        yahub
                    </a>
                </nav>

                <Link className="home-header__cta" to="/portal">
                    acessar portal
                </Link>
            </header>

            <main className="home-main" id="conteudo-principal">
                {children}
            </main>

            <footer className="home-footer">
                <div className="home-footer__signature" aria-label="YA LABS">
                    <span>YA</span>
                    <span>LABS</span>
                </div>

                <span className="home-footer__mark" aria-hidden="true" />

                <div className="home-footer__links">
                    <a href="https://github.com/ya-labs" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <span title="Destino ainda será definido">contato</span>
                    <span title="Destino ainda será definido">Discord</span>
                    <span title="Destino ainda será definido">redes</span>
                </div>
            </footer>
        </div>
    );
}
