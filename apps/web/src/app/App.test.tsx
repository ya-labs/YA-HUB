import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { ADMIN_SESSION_STORAGE_KEY } from '../features/admin/auth/adminAuth';
import { resetMockAdminData } from '../shared/api/mockClient';
import App from './App';

afterEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    resetMockAdminData();
    cleanup();
});

describe('App', () => {
    it('renderiza a home do YAHub', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { level: 1, name: 'YA LABS' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /construímos como laboratório/i })).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /acessar portal/i })[0]).toHaveAttribute('href', '/portal');
        expect(screen.getByRole('link', { name: 'início' })).toHaveAttribute('href', '#home');
        expect(screen.getByRole('link', { name: 'sobre' })).toHaveAttribute('href', '#organizacao');
        expect(screen.getByRole('link', { name: 'Ecossistema YA' })).toHaveAttribute('href', '#ecossistema');
        expect(screen.getByRole('link', { name: 'Fluxo de construção' })).toHaveAttribute('href', '#fluxo');
        expect(screen.getByRole('link', { name: 'Produtos' })).toHaveAttribute('href', '#produtos');
        expect(screen.getByRole('link', { name: 'Central YAHub' })).toHaveAttribute('href', '#yahub');
        expect(screen.getByRole('link', { name: /pular para o conteúdo principal/i })).toHaveAttribute(
            'href',
            '#conteudo-principal',
        );
        expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo-principal');
        expect(screen.getByRole('link', { name: 'Ecossistema YA' })).toHaveAttribute('href', '#ecossistema');
        expect(screen.getByRole('link', { name: 'Produtos' })).toHaveAttribute('href', '#produtos');
        expect(screen.getByRole('list', { name: /áreas de atuação/i })).toBeInTheDocument();
        expect(screen.getByRole('tablist', { name: /módulos do ecossistema ya/i })).toBeInTheDocument();
        expect(screen.getByRole('list', { name: /produtos da ya labs/i })).toBeInTheDocument();

        const user = userEvent.setup();
        const yagitTab = screen.getByRole('tab', { name: 'YAGit' });
        await user.click(yagitTab);
        expect(yagitTab).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByRole('heading', { name: 'YAGit' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /acompanhar no yahub/i })).toHaveAttribute('href', '#yahub');

        const devLabTrigger = screen.getByRole('button', { name: /devlab/i });
        await user.click(devLabTrigger);
        expect(devLabTrigger).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('heading', { name: 'DevLab' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /acompanhar desenvolvimento/i })).toHaveAttribute(
            'href',
            '#yahub',
        );
    });

    it('renderiza a dashboard inicial do portal público', async () => {
        render(
            <MemoryRouter initialEntries={['/portal']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { level: 1, name: 'YA LABS' })).toBeInTheDocument();
        expect(await screen.findByRole('heading', { name: /produtos oficiais/i })).toBeInTheDocument();
        expect(await screen.findByRole('heading', { name: /projetos com apoio da ya labs/i })).toBeInTheDocument();
        expect(screen.getByText(/projetos orientados pertencem aos seus autores/i)).toBeInTheDocument();
    });

    it('renderiza detalhes de um projeto do portal', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/projetos/yahub']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: /projeto: yahub/i })).toBeInTheDocument();
        expect(await screen.findByRole('heading', { name: 'YAHub' })).toBeInTheDocument();
        expect(screen.getByText(/portal oficial da ya labs/i)).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('lista projetos públicos separados por agrupamento', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/projetos']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { level: 2, name: 'Produtos' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 2, name: 'Ecossistema' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 2, name: 'Projetos orientados' })).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /ver projeto/i })[0]).toHaveAttribute(
            'href',
            '/portal/projetos/yahub',
        );
        expect(screen.getByText(/projetos orientados pertencem aos seus autores/i)).toBeInTheDocument();
    });

    it('mostra erro previsível quando o projeto não existe', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/projetos/projeto-inexistente']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('alert')).toHaveTextContent('Projeto não encontrado.');
    });

    it.each([
        ['/portal/projetos', /projetos/i],
        ['/portal/membros', /membros/i],
        ['/portal/docs', /documentação/i],
        ['/portal/atividade', /atividades/i],
    ])('renderiza a rota pública %s', async (path, heading) => {
        render(
            <MemoryRouter initialEntries={[path]}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument();
    });

    it('renderiza detalhes de um membro do portal', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/membros/nicolas']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Nícolas Machado Cardoso' })).toBeInTheDocument();
        expect(screen.getByText(/idealização do yahub/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
            'href',
            'https://github.com/nicolasmacardoso',
        );
        expect(screen.getAllByRole('link', { name: /ver projeto/i })[0]).toHaveAttribute(
            'href',
            '/portal/projetos/yahub',
        );
    });

    it('lista membros públicos com links para detalhes', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/membros']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { level: 2, name: 'Membros disponíveis' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Nícolas Machado Cardoso' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Caio Matheus Queiroz' })).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /ver detalhe/i })[0]).toHaveAttribute(
            'href',
            '/portal/membros/nicolas',
        );
    });

    it('mostra erro previsível quando o membro não existe', async () => {
        render(
            <MemoryRouter initialEntries={['/portal/membros/membro-inexistente']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('alert')).toHaveTextContent('Membro não encontrado.');
    });

    it('redireciona a área administrativa para o login', async () => {
        render(
            <MemoryRouter initialEntries={['/admin']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: /acesso administrativo/i })).toBeInTheDocument();
    });

    it('permite acessar o painel administrativo com login mockado', async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={['/admin']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: /acesso administrativo/i })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Entrar' }));

        expect(await screen.findByRole('heading', { name: /conteúdo do yahub/i })).toBeInTheDocument();
        expect(await screen.findByText('Projetos cadastrados')).toBeInTheDocument();
        expect(await screen.findByText('Membros cadastrados')).toBeInTheDocument();
        expect(window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY)).not.toBeNull();
    });

    it('permite cadastrar e entrar com autenticação mockada', async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={['/admin/login']}>
                <App />
            </MemoryRouter>,
        );

        await user.click(await screen.findByRole('button', { name: 'Cadastro' }));
        await user.type(screen.getByLabelText('Nome'), 'Administrador Teste');
        await user.click(screen.getByRole('button', { name: 'Cadastrar e entrar' }));

        expect(await screen.findByRole('heading', { name: /conteúdo do yahub/i })).toBeInTheDocument();
        expect(window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY)).not.toBeNull();
    });

    it.each(['/admin/projetos', '/admin/membros'])('protege a rota administrativa %s', async (path) => {
        render(
            <MemoryRouter initialEntries={[path]}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: /acesso administrativo/i })).toBeInTheDocument();
    });

    it('renderiza a listagem administrativa de projetos com sessão mockada', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: {
                    id: 'admin-test',
                    name: 'Admin Teste',
                    email: 'admin@yalabs.local',
                },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/projetos']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Projetos' })).toBeInTheDocument();
        expect(await screen.findByText('Projetos cadastrados')).toBeInTheDocument();
        expect(await screen.findByRole('list', { name: 'Projetos administrativos' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'YAHub' })).toBeInTheDocument();
        expect(screen.getByText('ya-labs/YA-HUB')).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: 'Editar' })[0]).toHaveAttribute(
            'href',
            '/admin/projetos/yahub/editar',
        );
        expect(screen.getAllByRole('button', { name: 'Remover' })[0]).toBeEnabled();
        expect(screen.getByRole('link', { name: 'Novo projeto' })).toHaveAttribute('href', '/admin/projetos/novo');
    });

    it('renderiza a listagem administrativa de membros com ações locais', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: { id: 'admin-test', name: 'Admin Teste', email: 'admin@yalabs.local' },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/membros']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Membros' })).toBeInTheDocument();
        expect(await screen.findByRole('list', { name: 'Membros administrativos' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Nícolas Machado Cardoso' })).toBeInTheDocument();
        expect(screen.getByText('Product / Front-end / UX')).toBeInTheDocument();
        expect(screen.getByText('Idealização do YAHub')).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toHaveAttribute(
            'href',
            'https://github.com/nicolasmacardoso',
        );
        expect(screen.getAllByRole('link', { name: 'Editar' })[0]).toHaveAttribute(
            'href',
            '/admin/membros/nicolas/editar',
        );
        expect(screen.getAllByRole('button', { name: 'Remover' })[0]).toBeEnabled();
        expect(screen.getByRole('link', { name: 'Novo membro' })).toHaveAttribute('href', '/admin/membros/novo');
    });

    it('mantém rascunho do projeto ao voltar para a listagem sem salvar', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: {
                    id: 'admin-test',
                    name: 'Admin Teste',
                    email: 'admin@yalabs.local',
                },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/projetos/novo']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Novo projeto' })).toBeInTheDocument();
        fireEvent.click(await screen.findByRole('button', { name: /DevLab/ }));
        expect(screen.getByLabelText('Categoria')).toBeInTheDocument();
        fireEvent.change(screen.getByLabelText('Nome de exibição'), { target: { value: 'Projeto em Rascunho' } });
        fireEvent.click(screen.getByRole('link', { name: 'Voltar e manter rascunho' }));

        expect(await screen.findByRole('heading', { name: 'Projetos' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('link', { name: 'Novo projeto' }));

        expect(screen.getByLabelText('Nome de exibição')).toHaveValue('Projeto em Rascunho');
    });

    it('prioriza os dados do projeto ao editar quando o rascunho da sessão está incompleto', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: { id: 'admin-test', name: 'Admin Teste', email: 'admin@yalabs.local' },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );
        window.sessionStorage.setItem(
            'yahub.admin.projects.draft',
            JSON.stringify({ editingProjectId: 'yahub', formState: { displayName: '', slug: '' } }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/projetos/yahub/editar']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByLabelText('Nome de exibição')).toHaveValue('YAHub');
        expect(screen.getByText('yahub')).toBeInTheDocument();
    });

    it('mantém rascunho do membro ao voltar para a listagem sem salvar', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: { id: 'admin-test', name: 'Admin Teste', email: 'admin@yalabs.local' },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/membros/novo']}>
                <App />
            </MemoryRouter>,
        );

        fireEvent.change(await screen.findByLabelText('Nome'), { target: { value: 'Membro em Rascunho' } });
        fireEvent.click(screen.getByRole('link', { name: 'Voltar e manter rascunho' }));
        expect(await screen.findByRole('heading', { name: 'Membros' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('link', { name: 'Novo membro' }));
        expect(await screen.findByLabelText('Nome')).toHaveValue('Membro em Rascunho');
    });

    it('prioriza os dados do membro ao editar quando o rascunho da sessão está incompleto', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: { id: 'admin-test', name: 'Admin Teste', email: 'admin@yalabs.local' },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );
        window.sessionStorage.setItem(
            'yahub.admin.members.draft',
            JSON.stringify({ editingMemberId: 'nicolas', formState: { name: '', slug: '' } }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/membros/nicolas/editar']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByLabelText('Nome')).toHaveValue('Nícolas Machado Cardoso');
    });

    it('cria, edita e remove projeto no fluxo administrativo mockado', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: {
                    id: 'admin-test',
                    name: 'Admin Teste',
                    email: 'admin@yalabs.local',
                },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/projetos']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Projetos' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('link', { name: 'Novo projeto' }));
        expect(screen.queryByLabelText('Nome de exibição')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Tipos de apoio')).not.toBeInTheDocument();
        fireEvent.change(await screen.findByLabelText('URL de outro repositório'), {
            target: { value: 'https://github.com/nicolasmacardoso/projeto-local-admin' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'Usar URL mockada' }));
        expect(await screen.findByRole('link', { name: 'nicolasmacardoso' })).toHaveAttribute(
            'href',
            'https://github.com/nicolasmacardoso',
        );
        expect(screen.queryByLabelText('Categoria')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Tipos de apoio')).toBeInTheDocument();
        expect(screen.getByLabelText('Nome de exibição')).toHaveAttribute('aria-required', 'true');
        fireEvent.click(screen.getByRole('button', { name: 'Criar projeto' }));
        expect(await screen.findByText('Informe o nome de exibição do projeto.')).toBeInTheDocument();
        expect(screen.getByLabelText(/^Nome de exibição/)).toHaveAttribute('aria-invalid', 'true');
        fireEvent.change(screen.getByLabelText(/^Nome de exibição/), { target: { value: 'Projeto Local Admin' } });
        fireEvent.change(screen.getByLabelText(/^Chamada curta/), { target: { value: 'Fluxo administrativo local.' } });
        fireEvent.change(screen.getByLabelText(/^Descrição curta/), {
            target: { value: 'Projeto criado no fluxo mockado.' },
        });
        fireEvent.change(screen.getByLabelText(/^Descrição completa/), {
            target: { value: 'Projeto usado para validar CRUD local.' },
        });
        fireEvent.change(screen.getByLabelText('Nova opção para Tecnologias'), { target: { value: 'React' } });
        fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
        fireEvent.change(screen.getByLabelText('Nova opção para Tecnologias'), { target: { value: 'TypeScript' } });
        fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
        fireEvent.change(screen.getByLabelText('Responsáveis'), { target: { value: 'nicolas' } });
        expect(screen.getByRole('button', { name: 'Remover React' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Remover TypeScript' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Remover Nícolas Machado Cardoso' })).toBeInTheDocument();
        fireEvent.change(screen.getByLabelText('URL do site'), { target: { value: 'ftp://projeto.local' } });
        fireEvent.click(screen.getByRole('button', { name: 'Criar projeto' }));
        expect(await screen.findByText('Informe uma URL válida para o site.')).toBeInTheDocument();
        expect(screen.getByLabelText(/^URL do site/)).toHaveAttribute('aria-invalid', 'true');
        fireEvent.change(screen.getByLabelText(/^URL do site/), { target: { value: 'https://projeto.local' } });
        fireEvent.click(screen.getByRole('button', { name: 'Criar projeto' }));

        expect(await screen.findByRole('status')).toHaveTextContent('Projeto Projeto Local Admin criado localmente.');
        expect(await screen.findByRole('heading', { name: 'Projeto Local Admin' })).toBeInTheDocument();

        const projectActions = screen.getByLabelText('Ações de Projeto Local Admin');
        fireEvent.click(projectActions.querySelector('a') as HTMLAnchorElement);
        fireEvent.change(await screen.findByLabelText('Nome de exibição'), {
            target: { value: 'Projeto Local Editado' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'Salvar alterações' }));

        expect(await screen.findByText('Projeto Projeto Local Editado atualizado localmente.')).toBeInTheDocument();
        expect(await screen.findByRole('heading', { name: 'Projeto Local Editado' })).toBeInTheDocument();

        fireEvent.click(
            screen.getByLabelText('Ações de Projeto Local Editado').querySelector('button') as HTMLButtonElement,
        );
        expect(await screen.findByRole('dialog', { name: 'Remover projeto?' })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Remover projeto' }));

        expect(await screen.findByText('Projeto Projeto Local Editado removido localmente.')).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Projeto Local Editado' })).not.toBeInTheDocument();
    });

    it('cria, edita e remove membro no fluxo administrativo mockado', async () => {
        window.localStorage.setItem(
            ADMIN_SESSION_STORAGE_KEY,
            JSON.stringify({
                token: 'mock-jwt-token',
                user: { id: 'admin-test', name: 'Admin Teste', email: 'admin@yalabs.local' },
                authenticatedAt: '2026-07-12T00:00:00.000Z',
            }),
        );

        render(
            <MemoryRouter initialEntries={['/admin/membros']}>
                <App />
            </MemoryRouter>,
        );

        expect(await screen.findByRole('heading', { name: 'Membros' })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('link', { name: 'Novo membro' }));
        expect(await screen.findByLabelText('Nome')).toHaveAttribute('aria-required', 'true');
        expect(screen.getByLabelText('Cargo')).toHaveAttribute('aria-required', 'true');
        expect(screen.getByLabelText('Usuário do GitHub')).toHaveAttribute('aria-required', 'true');
        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Membro Local Admin' } });
        fireEvent.change(screen.getByLabelText('Cargo'), { target: { value: 'Front-end' } });
        fireEvent.change(screen.getByLabelText('Usuário do GitHub'), { target: { value: 'membro-local' } });
        fireEvent.change(screen.getByLabelText('Responsabilidades'), { target: { value: 'Front-end' } });
        fireEvent.change(screen.getByLabelText('Nova opção para Responsabilidades'), { target: { value: 'UX' } });
        fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
        await screen.findByRole('option', { name: 'YAHub' });
        fireEvent.change(screen.getByLabelText('Projetos associados'), { target: { value: 'yahub' } });
        expect(screen.getByRole('button', { name: 'Remover UX' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Remover YAHub' })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Criar membro' }));

        expect(await screen.findByRole('status')).toHaveTextContent('Membro Membro Local Admin criado localmente.');
        expect(await screen.findByRole('heading', { name: 'Membro Local Admin' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '@membro-local' })).toHaveAttribute(
            'href',
            'https://github.com/membro-local',
        );

        fireEvent.click(screen.getByLabelText('Ações de Membro Local Admin').querySelector('a') as HTMLAnchorElement);
        fireEvent.change(await screen.findByLabelText('Nome'), { target: { value: 'Membro Local Editado' } });
        fireEvent.click(screen.getByRole('button', { name: 'Salvar alterações' }));

        expect(await screen.findByText('Membro Membro Local Editado atualizado localmente.')).toBeInTheDocument();
        expect(await screen.findByRole('heading', { name: 'Membro Local Editado' })).toBeInTheDocument();

        fireEvent.click(
            screen.getByLabelText('Ações de Membro Local Editado').querySelector('button') as HTMLButtonElement,
        );
        expect(await screen.findByRole('dialog', { name: 'Remover membro?' })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Remover membro' }));

        expect(await screen.findByText('Membro Membro Local Editado removido localmente.')).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Membro Local Editado' })).not.toBeInTheDocument();
    });
});
