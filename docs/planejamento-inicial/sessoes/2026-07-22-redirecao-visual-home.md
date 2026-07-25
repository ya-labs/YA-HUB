# Redireção visual da Home

> Status: documento de trabalho. Esta sessão concentra a discussão e as decisões em evolução sobre o redesign visual da Home. A atualização consolidada só deve ocorrer em `direcao-visual.md` após a nova direção ser aprovada.

## Contexto

Foi iniciada uma revisão da Home para corrigir a falta de harmonia percebida entre hero, elementos visuais e seções. A composição atual comunica a marca e mantém uma base dark premium coerente, mas a experiência ainda não alcança a presença autoral, fluida e sofisticada esperada para o portal institucional da YA LABS.

O objetivo da revisão não é apenas tornar a primeira dobra mais bonita. É construir uma Home em que hero, scroll, capítulos narrativos, composição, tipografia, cor e interação pareçam pertencer ao mesmo universo visual.

## Diagnóstico da hero atual

### O que já comunica bem

- O azul-marinho muito escuro é atraente, sóbrio e adequado para uma presença institucional premium.
- O logo `YA LABS` tem escala e protagonismo suficientes para tornar a marca reconhecível logo na abertura.
- O slogan `Code. Automate. Scale.`, a navegação em minúsculas, o CTA e o indicador de scroll apontam para uma linguagem técnica, discreta e elegante.
- A intenção de usar textura, profundidade e tecnologia como atmosfera é compatível com a YA LABS.

### O que perde harmonia

- A montanha/textura da direita parece aplicada como fundo, sem uma função clara dentro da cena.
- Órbitas, grid, partículas e estrelas parecem camadas independentes, em vez de manifestações da mesma matéria visual.
- Linhas orbitais simples podem ser lidas como rabiscos quando não têm relação espacial com a textura.
- Estrelas e pontos dourados têm presença decorativa maior que seu significado e podem parecer ícones padrão.
- A área vazia entre marca e composição não gera tensão suficiente porque a cena à direita não sustenta o contrapeso.
- Navbar, CTA e scroll possuem boa base tipográfica, mas ainda não têm estados ou respostas que reforcem uma experiência viva e atual.

### Comparação com o mockup anterior

O mockup anterior organiza melhor o lado direito: a montanha tem território próprio, o campo orbital ocupa uma região definida e algumas linhas parecem cruzar ou desaparecer na matéria. Isso gera mais profundidade e dá função espacial para cada camada.

Ainda assim, o mockup é uma composição estática e prototípica. Ele não resolve acabamento, fluidez, comportamento, transições, resposta a interação nem a harmonia com o restante da Home. Deve ser tratado como referência de composição, não como solução a copiar.

## Decisões confirmadas

- A hero continua escura, minimalista, premium e centrada na YA LABS como organização.
- Fundo azul-marinho profundo, marca `YA LABS`, slogan `Code. Automate. Scale.`, CTA `acessar portal` e navegação discreta permanecem como fundamentos.
- Montanha, órbitas, grid e partículas deixam de ser requisitos. Podem ser reaproveitados apenas se integrarem uma linguagem visual única e funcional.
- A hero deve ser tratada como o primeiro capítulo da Home, não apenas como uma imagem de abertura isolada.
- A primeira dobra continua limpa e focada em presença de marca. A composição pode evoluir no scroll antes de começar a próxima seção narrativa.
- Movimento deve criar sensação de matéria viva, profundidade ou transformação; não pode ser efeito decorativo nem prejudicar leitura, desempenho ou redução de movimento.
- A nova direção precisa ser validada em design antes de uma nova rodada de implementação em código.

## Não decidido ainda

- Qual é a matéria visual autoral da YA LABS.
- Se a hero usará vídeo, composição generativa, imagem/material, forma tridimensional, símbolo em transformação ou outra solução.
- Se montanha, órbitas, grid e partículas serão removidos, reinterpretados ou preservados em nova linguagem.
- Qual é o ritmo, amplitude e tecnologia da animação.
- Como a composição muda da primeira dobra para o restante do primeiro capítulo.
- Como a gramática da hero será adaptada para desktop e mobile.

## Princípios de direção

1. **Uma regra visual comum:** formas, textura, tipografia, cor e movimento devem parecer consequências do mesmo sistema.
2. **Marca como composição:** o símbolo `YA` ou a assinatura `YA LABS` pode participar pontualmente da cena, além de funcionar como identificação.
3. **Contraste e hierarquia:** sofisticação deve vir de escala, espaço negativo, tipografia e cores controladas — não de acúmulo de efeitos.
4. **Narrativa contínua:** uma seção deve herdar, transformar ou responder a elementos da anterior.
5. **Clareza institucional:** a experimentação visual não pode transformar a YA LABS em uma marca críptica, genérica de IA/Web3 ou em uma landing page de SaaS.
6. **Hero como capítulo:** a hero pode ultrapassar a primeira dobra e evoluir no scroll, mas a abertura deve manter foco total em presença de marca.
7. **Acessibilidade e desempenho:** qualquer movimento precisa manter contraste, leitura, `prefers-reduced-motion` e desempenho como requisitos de implementação.

## Leitura das referências

| Referência | Aprendizado aplicado ao YAHub |
| --- | --- |
| Raycast | Movimento pode ser uma matéria única, mantendo conteúdo estável e legível. |
| Cleanmeter | A hero pode continuar no scroll como uma composição própria. |
| Railway | Uma metáfora visual consistente pode conectar hero e seções sem cortes bruscos. |
| Collider | A marca pode ocupar a composição como uma camada espacial de alto impacto. |
| Ciridae | Presença de marca, atmosfera escura e transformação no scroll podem coexistir com minimalismo. |
| Anthropic | Tipografia, contraste e espaço negativo podem sustentar elegância sem depender de efeitos. |

### Raycast — matéria viva

O vídeo em movimento ocupa o lugar de todos os efeitos soltos. A energia visual é alta, mas o título, a descrição e os CTAs permanecem estáveis e legíveis. A lição aplicável não é usar vermelho nem repetir o ritmo agressivo: é fazer o movimento parecer uma matéria única e controlada.

### Cleanmeter — hero como ambiente

As grandes formas fluidas não são apenas fundo; elas organizam a hero e continuam enquanto o produto é revelado ao scroll. A referência mostra que uma hero pode ter composição própria e funcionar como capítulo antes de a narrativa principal avançar. A estrutura de cards e o foco em produto não devem ser copiados para a YA LABS.

### Railway — mundo visual e narrativa

A paisagem, a interface de produto, a prova social e a sequência seguinte fazem parte de uma mesma metáfora. O valor da referência está na continuidade: o scroll não corta uma hero e inicia blocos sem relação. A YA LABS precisa encontrar sua própria metáfora, e não usar a linguagem de viagem ou infraestrutura do Railway.

### Collider — marca como camada espacial

O nome da marca ocupa um lugar estrutural na composição, atravessado pelo vídeo e pelo produto central. Mesmo em uma cena densa, há hierarquia clara. Para a YA LABS, a lição é permitir que `YA` ou `YA LABS` participe pontualmente da composição, sem copiar o tom de merch, a paleta quente ou a densidade comercial do site.

### Ciridae — minimalismo com presença

Atmosfera escura, vídeo desfocado, símbolo central e poucas frases criam uma hero marcante sem excesso de informação. No scroll, a identidade se transforma e ganha camadas. Essa é uma referência próxima da postura desejada para a YA LABS: marca em primeiro plano, profundidade controlada e movimento atmosférico. A YA LABS, porém, deve evitar o tom críptico e a associação com estética genérica de IA/Web3.

### Anthropic — elegância por hierarquia

Com cores fixas, espaço negativo e tipografia muito bem posicionada, a Anthropic cria impacto sem depender de fundo animado. A mudança de um bloco claro e editorial para um painel escuro imersivo mostra como uma hero pode ser formada por estados visuais diferentes. A lição é usar contraste, escala e transições deliberadas; não copiar literalmente seu par tipográfico nem sua linguagem editorial.

## Síntese provisória

A nova Home deve combinar três ambições sem tentar reproduzir uma referência inteira:

1. **Presença de marca:** a abertura precisa fazer o visitante querer descobrir a YA LABS.
2. **Elegância controlada:** navy profundo, contraste alto, espaço negativo e tipografia devem sustentar a maior parte do impacto.
3. **Experiência viva e contínua:** a matéria visual e o scroll precisam criar transformação real, não efeitos decorativos sobre seções isoladas.

O resultado desejado é uma experiência institucional criativa e tecnológica, mas clara. A sensação deve ser de uma organização que constrói, conecta e transforma ideias em produtos — não de uma marca de IA abstrata, uma landing page SaaS ou um dashboard público.

## Referências principais para a nova hero

As imagens `fase3design2.png` e `fase3design1.png` passam a ser as referências principais da fase de composição. Elas foram geradas a partir da discussão desta sessão e representam melhor a combinação procurada entre elegância, presença de marca e continuidade no scroll.

### `fase3design2.png` — estrutura e elegância

Esta referência concentra a direção estrutural mais forte:

- primeira dobra limpa, escura e focada em `YA LABS`;
- marca, slogan, navegação e CTA com hierarquia clara;
- campo visual à direita como contrapeso da assinatura à esquerda;
- hero que continua depois da viewport, abrindo espaço para um primeiro capítulo narrativo;
- `A` monumental usado como arquitetura visual, com respiro e composição organizada.

Ela é a base recomendada para organizar a abertura e a transição inicial da Home.

### `fase3design1.png` — marca como matéria visual

Esta referência contém o gesto visual de maior impacto da discussão:

- o grande `YA` deixa de ser apenas logo e se torna uma estrutura que revela a matéria visual;
- `LABS` aparece em escala monumental e baixa opacidade como continuação espacial da marca;
- textura e elementos da cena atravessam ou aparecem dentro das formas tipográficas;
- a marca ganha força semelhante a uma camada de composição, e não apenas a um título.

O mockup completo é mais denso e perde parte da hierarquia da outra proposta. Não deve ser copiado integralmente. O grande `YA / LABS`, porém, é uma referência visual prioritária e pode se tornar o momento de transformação do primeiro scroll.

### Síntese a investigar no protótipo

O caminho preferencial é combinar os dois papéis, sem tentar fundir todos os elementos de uma vez:

```text
1ª dobra: estrutura, respiro e clareza de fase3design2.
↓
Primeiro scroll: grande YA como máscara, janela ou arquitetura visual, inspirado em fase3design1.
↓
Transição: LABS monumental e sutil como limiar para o próximo capítulo da Home.
```

Essa síntese ainda é uma hipótese de design. A validação deve ocorrer no Figma, em desktop e mobile, antes de alterar o código ou consolidar a direção em `direcao-visual.md`.

### Preferência atual

No encerramento desta investigação, `fase3design2.png` é a referência-base preferida para a hero. Ela orienta a próxima composição por sua clareza, elegância e continuidade após a viewport. O uso monumental de `YA / LABS` de `fase3design1.png` permanece como possibilidade de refinamento para um momento específico do scroll, sem substituir a estrutura-base.

## Encerramento da investigação da hero

A investigação conceitual da hero está encerrada nesta sessão. Não é necessário gerar novas imagens por prompt para continuar. As duas referências principais, os princípios, os critérios e a síntese acima são suficientes para iniciar a composição visual controlada.

## Critérios para a próxima proposta de design

Uma proposta de hero só estará pronta para validação se responder, com composição desktop e mobile, a todos os pontos abaixo:

- A marca continua sendo percebida em menos de alguns segundos, sem precisar de explicação longa.
- Há uma matéria visual protagonista; os elementos secundários parecem nascer dela.
- O contraste mantém logo, slogan, navegação e CTA legíveis.
- O movimento adiciona profundidade, resposta ou transformação e tem alternativa reduzida.
- A cena continua interessante após o primeiro scroll e oferece uma transição intencional para o próximo capítulo.
- A solução não depende de card, métrica, terminal, dashboard ou acúmulo de UI na abertura.
- A estética continua própria da YA LABS e não copia uma referência literalmente.

## Próximos tópicos de trabalho

- Definir a matéria visual autoral da YA LABS.
- Definir a transição entre a abertura da marca e a primeira seção narrativa.
- Analisar a primeira seção após a hero e como ela deve herdar a gramática visual.
- Desenhar e validar a composição desktop e mobile no Figma antes do código.
- Consolidar no `direcao-visual.md` somente as decisões que sobreviverem à validação.

## Diagnóstico inicial das seções após a hero

### Problema transversal: consistência sem ritmo

As seções atuais usam repetidamente a mesma fórmula: comando técnico pequeno, título grande à esquerda, texto explicativo à direita e grade de cards abaixo. Ela mantém consistência superficial, mas não responde ao papel de cada capítulo da narrativa. O resultado é uma Home em que o leitor repete o mesmo movimento visual — ler o título, procurar explicação à direita e descer para cards — sem ser guiado por uma progressão.

A harmonia desejada não é tornar todas as seções semelhantes. É fazer cada uma herdar a mesma gramática da Home e, ao mesmo tempo, cumprir uma função visual e informacional distinta.

### 01. Sobre a YA LABS — entendimento direto

**Estado atual:** `Construímos como laboratório.` funciona como ponto de partida, mas a seção distribui mensagens concorrentes: título, texto institucional à direita, missão em outro card grande e quatro princípios em cards menores. O texto de missão repete a intenção do conteúdo já apresentado e aumenta a sensação de slogans em vez de explicar a organização.

**Direção a investigar:** uma apresentação curta, sincera e objetiva de quem é a YA LABS. A pessoa deve concluir rapidamente “entendi o que é esta organização e como ela trabalha”. O título pode permanecer, desde que seja acompanhado por uma explicação única e enxuta. Princípios só devem continuar se virarem suporte da experiência — não outro bloco de texto competindo por protagonismo.

**Papel narrativo:** depois da presença da hero, dar significado à marca sem sobrecarregar a leitura.

### 02. Ecossistema YA — descoberta guiada

**Estado atual:** os projetos aparecem como nós distribuídos em um diagrama estático. O leitor precisa alternar entre título, texto, cards à esquerda e direita, terminal e ligações decorativas. YAHub recebe mais destaque, mas YABook, YAGit e YABot não têm uma apresentação equivalente nem uma sequência de descoberta clara.

**Direção a investigar:** tratar o Ecossistema YA como uma experiência de exploração guiada. Uma navegação explícita — abas, trilho lateral ou controles horizontais — pode revelar uma ferramenta por vez, com contexto, função e caminho para conhecê-la no YAHub. Não deve ser um carrossel automático; a pessoa precisa controlar a mudança e poder navegar por teclado.

**Papel narrativo:** mostrar que a YA LABS não é uma marca abstrata; ela se sustenta em ferramentas que organizam, documentam, automatizam e conectam o trabalho.

### 03. Fluxo de construção — sequência legível

**Estado atual:** a sequência `Ideia → Documentação → Issue → Branch → Pull Request → Release` está correta e representa o modo de trabalho real da YA LABS. Porém, sua divisão em cards reduz a percepção de continuidade e a ordem perde força visual quando os estágios ocupam linhas separadas.

**Direção a investigar:** transformar o fluxo em uma trajetória contínua, com cada etapa revelada ou percorrida em ordem. A direção visual precisa comunicar passagem, transformação e rastreabilidade, sem recorrer a um painel de cards. A interação pode enriquecer a leitura, mas a sequência completa deve continuar clara sem depender dela.

**Papel narrativo:** provar que a organização transforma intenção em entrega de maneira visível e disciplinada.

### 04. Produtos — portfólio com identidades próprias

**Estado atual:** a presença de cor por produto é uma boa decisão e comunica diversidade. Ainda assim, seis cards aparecem simultaneamente, dividindo a atenção e fazendo produtos muito distintos parecerem itens de uma mesma grade.

**Direção a investigar:** apresentar cada produto com espaço e identidade próprios. A mecânica pode dialogar com a exploração do Ecossistema YA, mas a linguagem não deve ser idêntica: ecossistema representa ferramentas conectadas da organização; produtos representam criações diversas que nasceram dela. Uma galeria, trilho ou apresentação por produto pode dar foco a cada identidade, com navegação clara para a página correspondente no YAHub.

**Papel narrativo:** demonstrar a variedade concreta de produtos que a YA LABS constrói, sem diluir a personalidade de cada um.

### 05. YAHub — síntese e chamada para ação

**Estado atual:** a composição de texto à esquerda e preview do portal à direita é a mais clara das seções atuais. Ela já estabelece que o YAHub é o lugar onde o ecossistema se encontra, mas o preview ainda é discreto demais para o encerramento da narrativa.

**Direção a investigar:** manter o YAHub como desfecho, ampliando o sentido de central de acesso. O preview deve parecer uma janela real e mais impactante para o portal: projetos, pessoas, documentação e atividade convergem nele. A CTA precisa ser a consequência natural de toda a narrativa, não apenas mais um botão.

**Papel narrativo:** concluir que, depois de conhecer organização, ferramentas, processo e produtos, a pessoa sabe onde explorar tudo: no YAHub.

## Ritmo narrativo provisório da Home

```text
Hero            → presença e curiosidade
Sobre           → entendimento direto
Ecossistema YA  → descoberta guiada
Fluxo           → processo e rastreabilidade
Produtos        → diversidade e resultado concreto
YAHub           → síntese e acesso
```

O objetivo é que a linguagem compartilhada — navy profundo, contraste controlado, marca, movimento e matéria visual — acompanhe todos os capítulos sem obrigar cada um a repetir a mesma grade, a mesma posição de texto ou os mesmos cards.

## Referência para as seções: Raycast

O Raycast é uma referência importante para a evolução das seções porque preserva uma mesma atmosfera escura, navegação e acabamento, mas trata cada capítulo como uma demonstração visual diferente. Em vez de apresentar a mesma combinação de título, parágrafo e cards, ele alterna entre interface em foco, escolha guiada, galeria horizontal, composição tipográfica, ilustração técnica e CTA final.

### Princípio aplicável

**O texto explica; a cena prova.** Cada seção deve ter uma composição que torna sua ideia perceptível antes mesmo da leitura completa. A interação e a animação atualizam a cena conforme a pessoa avança, em vez de apenas decorar blocos de texto.

### O que preservar da referência

- Pouco texto por estado visual, com leitura guiada e objetiva.
- Uma ideia por seção e uma demonstração visual correspondente.
- Movimento que evidencia uma mudança de conteúdo ou foco.
- Transições fluidas entre capítulos, mantendo fundo, contraste e ritmo comuns.
- Elementos interativos controlados pela pessoa, como abas ou navegação horizontal, com alternativa clara para teclado e redução de movimento.

### O que não copiar

- A linguagem visual vermelha, os componentes de download e a interface do Raycast.
- Screens de produto inventadas apenas para preencher composição.
- Efeitos de entrada repetidos ou movimento sem conteúdo para revelar.

### Aplicação inicial por capítulo

| Capítulo YAHub | Princípio do Raycast reinterpretado |
| --- | --- |
| Sobre | Uma composição única que sustente uma explicação curta da organização, em vez de vários slogans e cards. |
| Ecossistema YA | Navegação guiada por ferramenta, semelhante à galeria de extensões, mas com funções reais de YABook, YAGit, YABot e YAHub. |
| Fluxo | Uma trajetória visual que atualize cada etapa na ordem `Ideia → Documentação → Issue → Branch → Pull Request → Release`. |
| Produtos | Galeria ou apresentação focada por produto, para que cada identidade tenha uma cena própria. |
| YAHub | Preview maior e mais vivo do portal como conclusão prática de toda a narrativa. |

O Raycast reforça que a harmonia da Home deve vir da linguagem compartilhada e do encadeamento do scroll, não da repetição de layout. A execução futura precisa traduzir isso em elementos reais da YA LABS, sem reproduzir as telas ou a identidade visual da referência.

## Referência para leitura e duração: Cleanmeter

O Cleanmeter reforça duas decisões importantes para a Home. Primeiro, quando uma mensagem precisa ser lida, ela recebe uma cena limpa: texto, ritmo e espaço negativo, sem imagem ou card disputando a atenção. Segundo, a seção não é limitada à altura da viewport. O scroll é usado para completar frases, atualizar o contraste das palavras e introduzir imagens ou detalhes apenas quando passam a ter função explicativa.

### Regra de duração das seções

Uma ideia por seção não significa uma única tela por seção. A altura deve servir ao conteúdo e à transição:

- capítulos de leitura podem ocupar mais de uma viewport e conduzir o texto progressivamente;
- cenas demonstrativas podem se expandir conforme uma interface, imagem ou artefato real é apresentado;
- momentos de passagem podem ser curtos e deixar espaço para respirar;
- nenhuma seção deve ocupar altura fixa apenas para preencher a tela.

### Aplicação em todas as seções após a hero

Esta é uma regra da Home inteira, não apenas do Sobre. Cada capítulo deve escolher a duração, a densidade e o tipo de composição que melhor serve à própria ideia:

- **Sobre:** leitura progressiva e objetiva, sem a divisão automática entre título à esquerda, explicação à direita e cards abaixo.
- **Ecossistema YA:** descoberta guiada por ferramenta, com mudança controlada de foco e contexto.
- **Fluxo:** sequência contínua que usa o scroll para tornar a passagem entre etapas perceptível.
- **Produtos:** apresentação por identidade, com espaço de leitura e demonstração adequado a cada produto.
- **YAHub:** aproximação progressiva do portal, para que a CTA seja resultado da narrativa.

O movimento de preenchimento de texto, mudança de contraste, imagem, preview, rótulo e legenda deve complementar a leitura, não esconder conteúdo. A versão estática precisa permanecer legível; cor e animação são apoio de hierarquia, não a única forma de entender a mensagem.

### Uso de imagens e artefatos

Imagens, previews e elementos visuais devem aparecer quando provarem algo concreto. O Cleanmeter mostra configurações e monitoramento porque são o produto que sua mensagem descreve. Para a YA LABS, qualquer artefato apresentado precisa nascer de documentação, fluxo, projeto ou portal real — nunca de uma interface inventada para ocupar espaço.

## Referência para interatividade e cor: Supabase

O Supabase demonstra como concentrar informação sem despejá-la de uma vez. Abas, seletores e controles simples trocam o conteúdo principal, preservando uma hierarquia estável: a pessoa vê o estado atual, entende-o e escolhe quando explorar outro. O conteúdo não é escondido de forma opaca; ele é revelado gradualmente sob controle da pessoa.

### Interatividade com propósito

Esse princípio é aplicável às seções mais densas da Home:

- **Ecossistema YA:** um seletor de ferramenta pode revelar contexto e artefatos reais de YABook, YAGit, YABot ou YAHub, um por vez.
- **Produtos:** uma navegação de portfólio pode dar foco a um produto por estado, preservando sua cor e identidade sem mostrar todos como cards equivalentes.
- **Fluxo:** os estágios podem assumir foco sequencial, com a trajetória e a explicação atualizadas conforme a pessoa explora ou rola.
- **YAHub:** controles ou marcadores podem revelar dimensões reais do portal, como projetos, membros, documentação e atividade.

Interatividade não deve bloquear a narrativa. A pessoa precisa conseguir continuar a leitura pelo scroll sem concluir controles, e toda troca de estado deve ter rótulo, foco de teclado e alternativa para `prefers-reduced-motion`.

### Cor sólida e hierarquia

Para a YA LABS, a elegância não dependerá de gradientes decorativos. A base deve usar cores sólidas e papéis estáveis:

- navy profundo para fundo e continuidade entre capítulos;
- off-white para conteúdo prioritário;
- dourado para foco, ação, estado ativo e pontos de descoberta;
- neutros escuros para níveis secundários;
- cores próprias de produtos apenas quando comunicarem sua identidade dentro da seção de portfólio.

Profundidade pode vir de contraste, áreas sólidas sobrepostas, transparência controlada, recortes, textura material e luz localizada. Isso é diferente de preencher superfícies com gradientes para criar interesse. Gradientes de texto e fundos decorativos devem ser evitados.

## Referência para harmonia narrativa: Railway

O Railway demonstra a forma mais forte de criar continuidade entre capítulos diferentes: uma metáfora estrutural acompanha a página inteira. O trilho, os marcadores de progresso e o trem conectam apresentações, interfaces, provas e transições sem exigir que todos os blocos tenham o mesmo layout. Cada capítulo tem sua própria cena, mas todos pertencem à mesma viagem.

### Princípio aplicável

A Home do YAHub precisa encontrar um elemento de continuidade próprio — uma regra espacial, material ou de transformação que acompanhe a narrativa e ajude a pessoa a perceber progresso. Esse elemento não deve copiar trem, trilho, linha vertical ou a metáfora de infraestrutura do Railway.

Para ser útil, o elemento de continuidade precisa cumprir mais de uma função:

- ligar visualmente os capítulos da página;
- sinalizar mudança ou progresso sem substituir a navegação normal;
- reforçar a identidade da YA LABS;
- permitir que cada seção mantenha uma composição própria;
- ganhar ou perder intensidade conforme a narrativa avança.

### Cuidado de direção

Uma linha decorativa isolada não resolve a harmonia; esse foi um dos problemas da composição anterior da hero. A continuidade só será adotada se nascer de uma metáfora e puder aparecer de maneira consistente em marca, movimento, conteúdo e transição. A definição concreta desse recurso continua em aberto para o protótipo.

### Aplicação conceitual

O futuro recurso de continuidade pode atravessar os capítulos sem ser igualmente visível em todos eles: surgir como transformação da marca na abertura, orientar a descoberta do Ecossistema, tornar a sequência do Fluxo legível, conectar a diversidade dos Produtos e culminar no YAHub como central de acesso. Essa progressão é mais importante que replicar a aparência do Railway ou suas interfaces de produto.

## Referência para capítulos imersivos: Ciridae

O Ciridae confirma que uma Home pode alternar composições muito diferentes e ainda preservar unidade quando marca, tipografia, ritmo e transições são consistentes. Algumas cenas são atmosféricas e quase silenciosas; outras usam painéis, imagens ou contrastes de fundo. A variação não é aleatória: cada mudança dá ao conteúdo um novo enquadramento e prepara o capítulo seguinte.

### Scroll como tempo de leitura

Em determinados trechos, o Ciridae mantém a cena fixa durante alguns avanços do scroll enquanto muda o estado exibido. Esse comportamento não deve ser entendido como "prender o leitor", mas como reservar tempo para uma sequência que precisa ser percebida em etapas.

Para a Home do YAHub, a implementação preferencial é uma **narrativa sticky por progresso de scroll**: o capítulo permanece visualmente ancorado por uma distância limitada e os estados avançam de forma clara. A página continua sendo uma página normal; não deve haver sequestro de roda do mouse, bloqueio artificial de rolagem ou exigência de que a pessoa conclua uma interação para seguir adiante.

### Quando usar

Esse recurso deve ser excepcional e ter conteúdo real para revelar. Possíveis capítulos adequados:

- **Ecossistema YA:** cada avanço revela uma ferramenta e sua função dentro da organização.
- **Fluxo:** os estágios `Ideia → Documentação → Issue → Branch → Pull Request → Release` surgem como uma sequência contínua, reforçando passagem e rastreabilidade.
- **Produtos:** uma apresentação focada pode trocar contexto, identidade e artefato de um produto por vez.
- **YAHub:** a central pode ser aproximada por camadas — projetos, pessoas, documentação e atividade — até culminar na CTA.

O **Sobre** tende a pedir uma leitura mais livre e direta. Só deve ganhar um estado sticky se houver uma transformação visual que realmente ajude a explicar a organização, e não apenas para dar movimento a um texto curto.

### Limites de experiência e implementação

- Cada capítulo sticky precisa informar com clareza seu estado ativo e o que mudou.
- A pessoa deve poder avançar, recuar, navegar por teclado e pular o capítulo sem ficar presa em uma sequência longa.
- Em telas pequenas, o comportamento pode ser simplificado para conteúdo em fluxo normal ou controles explícitos; desktop e mobile não precisam ter a mesma coreografia.
- `prefers-reduced-motion` deve preservar a ordem e todo o conteúdo sem animação dependente de scroll.
- O sticky não substitui boa escrita: texto essencial nunca pode existir somente durante uma etapa animada.

O critério é simples: se a cena não fica mais clara quando percorrida em etapas, ela não deve reter o scroll. O recurso existe para dar ritmo e foco à narrativa, não para tornar a navegação mais difícil.

## Referência para contraste entre capítulos: Zapier

O Zapier demonstra que unidade não exige repetição de superfície. Seus capítulos alternam fundos claros e escuros, escala tipográfica, densidade de informação, prova numérica, ilustração, módulos técnicos e chamadas para ação. Mesmo assim, a página continua reconhecível porque há disciplina de grade, tipografia, bordas, espaço e cor de destaque.

### Princípio aplicável

Na Home do YAHub, a harmonia deve vir da gramática comum — marca, tipografia, proporção, ritmo, cor de foco e elemento de continuidade — e não da obrigação de manter todo capítulo com o mesmo fundo navy e a mesma distribuição. Uma mudança de superfície pode marcar uma virada narrativa quando ela aumenta a clareza da mensagem.

Isso abre espaço, por exemplo, para uma cena clara e silenciosa de leitura, uma passagem escura e imersiva de processo, uma cena material para produtos e um encerramento concentrado no portal. Essas variações só fazem sentido se tiverem uma função narrativa; trocar cor apenas para evitar monotonia cria ruído.

### Texto e informação como composição

O Zapier também sustenta cenas inteiras com texto e informação bem editados:

- manchete grande para uma única afirmação;
- rótulo pequeno que situa o assunto;
- uma evidência concreta — número, caso, artefato ou estrutura — quando a mensagem precisa de prova;
- CTA de consequência clara no encerramento do capítulo.

Esse raciocínio reforça a revisão do conteúdo atual do YAHub: menos slogans concorrentes, mais uma ideia principal por cena e mais evidência real quando houver algo a demonstrar. Uma métrica, testemunho ou grid só deve entrar se representar informação verdadeira da organização; não deve ser inventado para reproduzir a aparência da referência.

### Limite de direção

A paleta quente, o laranja, as grades expansivas e a linguagem comercial do Zapier não pertencem automaticamente à YA LABS. A adaptação deve preservar a base navy, off-white, dourado e cores próprias de produtos já definida nesta sessão. O aprendizado é de contraste intencional e hierarquia informacional, não de identidade visual.

## Hipótese para o encerramento: footer como assinatura de marca

O footer é a última impressão da Home e pode ser mais que uma área de links. A referência de `fase3design1.png` sugere um uso mais adequado para o gesto monumental de marca: `YA` em escala dominante, com `LABS` abaixo, como fechamento da narrativa — sem os textos explicativos, rótulos e informações laterais presentes no mockup.

### Papel na narrativa

Depois que o YAHub conclui a história da organização e oferece o acesso ao portal, o footer pode devolver a pessoa à identidade que iniciou a experiência. A marca em grande escala deixa de competir com a leitura das seções e passa a funcionar como assinatura final: uma conclusão visual, silenciosa e memorável.

### Direção a validar

- `YA` monumental como principal gesto gráfico, com `LABS` em uma segunda linha ou plano;
- uso opcional da matéria visual aprovada para a Home dentro ou ao redor da marca, somente se preservar legibilidade e unidade;
- sem repetir slogans, descrições institucionais ou textos decorativos do mockup de referência;
- informações funcionais de footer — navegação essencial, contato, direitos e acessibilidade — continuam disponíveis, porém em uma camada discreta que não disputa com a assinatura;
- a versão mobile deve manter reconhecimento imediato sem reduzir a marca a uma textura ilegível.

Essa proposta reutiliza o potencial visual de `fase3design1.png` no lugar em que ele agrega mais valor: o desfecho. A composição final continua dependente da matéria visual e da direção de footer que forem validadas no protótipo.

## Sistema visual transversal em definição

### Sensação central confirmada

A Home deve fazer a YA LABS parecer uma organização **criativa, inovadora, séria e técnica**: um laboratório capaz de produzir coisas muito diferentes com alto nível de execução. Modernidade e elegância não são enfeites; são a percepção de que a organização experimenta com intenção e entrega com qualidade.

Essa direção estabelece uma tensão que a composição precisa sustentar:

- criatividade sem excesso de efeito, aleatoriedade ou estética de template;
- inovação sem tom abstrato, críptico ou genérico de IA/Web3;
- seriedade técnica sem aparência de dashboard frio ou instituição burocrática;
- elegância sem reduzir a marca a minimalismo vazio;
- diversidade de produtos sem perda de coerência institucional.

Em termos de linguagem visual, o princípio é **criatividade com rigor**. A página deve permitir gestos autorais, matéria e transformação, mas cada um precisa obedecer a uma estrutura clara, tipografia precisa, informação bem editada e acabamento consistente.

### Ideia que lidera a narrativa

A YA LABS é, antes de tudo, um laboratório que **transforma e coloca ideias em movimento**. Uma ideia ganha intenção, é estruturada, construída, compartilhada e se torna algo real. Essa passagem é mais representativa da organização do que a noção de apenas desvendar ou organizar complexidade.

Estrutura, documentação, automação e técnica continuam essenciais, mas ocupam o papel de meios que tornam o movimento confiável. A Home não deve comunicar somente que a YA LABS sabe organizar sistemas; ela deve comunicar que a organização faz ideias saírem do estado potencial e chegarem a impacto concreto.

Essa decisão orienta o futuro elemento de continuidade: ele precisa sugerir transformação, passagem, propagação ou evolução — não apenas conexão estática entre blocos. Também reforça o Fluxo como uma prova central da narrativa, e não como uma grade secundária de etapas.

## Impacto esperado

A Home deve deixar de parecer uma sequência de blocos visualmente bons, porém independentes. O objetivo é uma experiência institucional coesa, criativa e clara, em que a YA LABS seja percebida como uma organização técnica viva, confiável e memorável.
