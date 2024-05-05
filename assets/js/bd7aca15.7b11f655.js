"use strict";(self.webpackChunksprintcampus=self.webpackChunksprintcampus||[]).push([[3359],{889:(o,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var a=s(4848),r=s(8453);const i={},n="Tutorial: Github Actions com Java Spring",t={id:"Tutorial Github Actions com Java Spring/Tutorial Github Actions com Java Spring",title:"Tutorial: Github Actions com Java Spring",description:"O Github Actions \xe9 um servi\xe7o de automa\xe7\xe3o integrado ao GitHub, permitindo automatizar fluxos de trabalho diretamente em seu reposit\xf3rio. Com ele, \xe9 poss\xedvel criar fluxos customizados para tarefas como constru\xe7\xe3o, teste e implanta\xe7\xe3o de aplicativos. Ao responder a eventos espec\xedficos, como push de c\xf3digo ou cria\xe7\xe3o de pull requests, o GitHub Actions executa fluxos de trabalho compostos por diversas etapas.",source:"@site/docs/Tutorial Github Actions com Java Spring/Tutorial Github Actions com Java Spring.md",sourceDirName:"Tutorial Github Actions com Java Spring",slug:"/Tutorial Github Actions com Java Spring/",permalink:"/processos/docs/Tutorial Github Actions com Java Spring/",draft:!1,unlisted:!1,editUrl:"https://github.com/sprintcampus/processos/tree/main/docs/Tutorial Github Actions com Java Spring/Tutorial Github Actions com Java Spring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ferramentas",permalink:"/processos/docs/Testes/Ferramentas"},next:{title:"Orientacoes basicas",permalink:"/processos/docs/UX - UI/Orientacoes basicas"}},c={},d=[{value:"<strong>Passo 1: Cria\xe7\xe3o de um Projeto Spring</strong>",id:"passo-1-cria\xe7\xe3o-de-um-projeto-spring",level:2},{value:"Criar um projeto inicial com Spring",id:"criar-um-projeto-inicial-com-spring",level:3},{value:"<strong>Passo 2: Criar um Reposit\xf3rio e Realizar o Push do Projeto</strong>",id:"passo-2-criar-um-reposit\xf3rio-e-realizar-o-push-do-projeto",level:2},{value:"<strong>Passo 3: Configurando o GitHub Actions para Java</strong>",id:"passo-3-configurando-o-github-actions-para-java",level:2},{value:"<strong>Passo 4: Fazendo o Pull das Mudan\xe7as Criadas</strong>",id:"passo-4-fazendo-o-pull-das-mudan\xe7as-criadas",level:2},{value:"<strong>Passo 5: Editando o arquivo .yaml gerado</strong>",id:"passo-5-editando-o-arquivo-yaml-gerado",level:2},{value:"<strong>Passo 6: Criando um Primeiro Teste de Exemplo</strong>",id:"passo-6-criando-um-primeiro-teste-de-exemplo",level:2}];function l(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...o.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"tutorial-github-actions-com-java-spring",children:"Tutorial: Github Actions com Java Spring"}),"\n",(0,a.jsxs)("aside",{children:[(0,a.jsx)("img",{src:"https://www.notion.so/icons/chemistry_gray.svg",alt:"https://www.notion.so/icons/chemistry_gray.svg",width:"40px"}),(0,a.jsxs)(e.p,{children:["O ",(0,a.jsx)(e.strong,{children:"Github Actions"})," \xe9 um servi\xe7o de automa\xe7\xe3o integrado ao GitHub, permitindo automatizar fluxos de trabalho diretamente em seu reposit\xf3rio. Com ele, \xe9 poss\xedvel criar fluxos customizados para tarefas como constru\xe7\xe3o, teste e implanta\xe7\xe3o de aplicativos. Ao responder a eventos espec\xedficos, como push de c\xf3digo ou cria\xe7\xe3o de pull requests, o GitHub Actions executa fluxos de trabalho compostos por diversas etapas."]}),(0,a.jsx)(e.p,{children:"Agora que compreendemos o conceito por tr\xe1s do GitHub Actions, vamos explorar como integr\xe1-lo com o framework Java Spring para automatizar processos em nossos projetos."})]}),"\n",(0,a.jsx)(e.h2,{id:"passo-1-cria\xe7\xe3o-de-um-projeto-spring",children:(0,a.jsx)(e.strong,{children:"Passo 1: Cria\xe7\xe3o de um Projeto Spring"})}),"\n",(0,a.jsx)(e.h3,{id:"criar-um-projeto-inicial-com-spring",children:"Criar um projeto inicial com Spring"}),"\n",(0,a.jsx)(e.p,{children:"Para come\xe7ar nosso tutorial sobre Github Actions com Java Spring, o primeiro passo \xe9 criar um novo projeto Spring. Vamos utilizar o Spring Initializr, uma ferramenta online que simplifica o processo de inicializa\xe7\xe3o de projetos Spring, permitindo que voc\xea especifique as depend\xeancias e configura\xe7\xf5es desejadas."}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["Acesse o site ",(0,a.jsx)(e.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),"."]}),"\n",(0,a.jsx)(e.li,{children:"No Spring Initializr, voc\xea ser\xe1 apresentado com um formul\xe1rio para configurar o seu projeto Spring. Aqui est\xe3o algumas configura\xe7\xf5es que voc\xea precisa definir:"}),"\n"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Project"}),': Escolha "Maven Project" ou "Gradle Project", dependendo da sua prefer\xeancia de gerenciador de depend\xeancias de projeto. Para o projeto recomendamos utilizar o \u201cMaven\u201d para n\xe3o ocorrer nenhum erro.']}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Language"}),': Selecione "Java".']}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Spring Boot"}),": Escolha a vers\xe3o mais recente dispon\xedvel."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Group"}),": Defina o identificador de grupo do seu projeto. Por exemplo, ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"com.example"})}),"."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Artifact"}),": Especifique o nome do artefato do seu projeto. Por exemplo, ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"my-spring-project"})}),"."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Dependencies"}),": Adicione as depend\xeancias necess\xe1rias para o seu projeto Spring. Por exemplo, ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"Spring Web"})})," para uma aplica\xe7\xe3o web b\xe1sica."]}),"\n",(0,a.jsx)(e.li,{}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Abaixo pode ser visualizado a tela das configura\xe7\xf5es finais:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Captura de tela 2024-04-01 035527.png",src:s(9721).A+"",width:"1103",height:"569"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"imagem_2024-04-01_035325101.png",src:s(8512).A+"",width:"1114",height:"561"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:'Ap\xf3s configurar todas as op\xe7\xf5es necess\xe1rias, clique no bot\xe3o "Generate" para fazer o download do projeto Spring gerado como um arquivo ZIP.'}),"\n",(0,a.jsx)(e.li,{children:"Extraia o conte\xfado do arquivo ZIP baixado para o diret\xf3rio de sua escolha em seu sistema."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Agora que temos nosso projeto Spring configurado, podemos prosseguir para os pr\xf3ximos passos, onde iremos adicionar GitHub Actions para automatizar nossos processos de CI/CD."}),"\n",(0,a.jsx)(e.h2,{id:"passo-2-criar-um-reposit\xf3rio-e-realizar-o-push-do-projeto",children:(0,a.jsx)(e.strong,{children:"Passo 2: Criar um Reposit\xf3rio e Realizar o Push do Projeto"})}),"\n",(0,a.jsx)(e.p,{children:"Agora que temos nosso projeto Spring configurado, \xe9 hora de criar um reposit\xf3rio no GitHub para ele e realizar o push do c\xf3digo."}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Acesse o ",(0,a.jsx)(e.a,{href:"https://github.com/",children:"GitHub"})," e fa\xe7a login na sua conta (ou crie uma, se ainda n\xe3o tiver uma)."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'Clique no bot\xe3o "New" no canto superior direito da p\xe1gina para criar um novo reposit\xf3rio.'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"No formul\xe1rio de cria\xe7\xe3o do reposit\xf3rio, preencha as seguintes informa\xe7\xf5es:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Repository name"}),": Escolha um nome para o seu reposit\xf3rio. Por exemplo, ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"testeActions"})}),"."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Description"}),": (Opcional) Adicione uma descri\xe7\xe3o para o seu reposit\xf3rio."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Visibility"}),': Escolha entre "Public" (p\xfablico) ou "Private" (privado), de acordo com as suas necessidades.']}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Initialize this repository with"}),': Selecione "Add a README file" para inicializar o reposit\xf3rio com um arquivo README. Isso \xe9 \xfatil para fornecer informa\xe7\xf5es sobre o projeto e suas instru\xe7\xf5es de uso.']}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'Clique no bot\xe3o "Create repository" para criar o reposit\xf3rio.'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Ap\xf3s criar o reposit\xf3rio, voc\xea ser\xe1 redirecionado para a p\xe1gina do mesmo no GitHub. Voc\xea ver\xe1 as instru\xe7\xf5es para adicionar o reposit\xf3rio remoto ao seu projeto local. Siga essas instru\xe7\xf5es para realizar o push do seu projeto Spring rec\xe9m-criado para o reposit\xf3rio no GitHub."}),"\n",(0,a.jsx)(e.p,{children:"Por exemplo, se voc\xea estiver utilizando o Git a partir da linha de comando, poder\xe1 usar os seguintes comandos:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"bashCopy code\ngit remote add origin <url_do_reposit\xf3rio>\ngit branch -M main\ngit push -u origin main\n\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Certifique-se de substituir ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"<url_do_reposit\xf3rio>"})})," pela URL do reposit\xf3rio rec\xe9m-criado."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Ap\xf3s realizar o push do seu c\xf3digo, voc\xea ver\xe1 os arquivos do seu projeto Spring no reposit\xf3rio no GitHub."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Com isso, conclu\xedmos o passo de cria\xe7\xe3o do reposit\xf3rio e push do projeto."}),"\n",(0,a.jsx)(e.h2,{id:"passo-3-configurando-o-github-actions-para-java",children:(0,a.jsx)(e.strong,{children:"Passo 3: Configurando o GitHub Actions para Java"})}),"\n",(0,a.jsx)(e.p,{children:"Agora que temos nosso projeto no GitHub, \xe9 hora de adicionar o GitHub Actions para automatizar nossos processos de CI/CD. Para isso, precisamos buscar a a\xe7\xe3o adequada para a linguagem Java."}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:'No reposit\xf3rio do seu projeto no GitHub, clique na aba "Actions".'}),"\n",(0,a.jsx)(e.li,{children:'Voc\xea ser\xe1 apresentado \xe0 p\xe1gina de "GitHub Actions". Aqui voc\xea ver\xe1 v\xe1rias op\xe7\xf5es de fluxos de trabalho predefinidos que voc\xea pode usar. Como nosso projeto \xe9 em Java, vamos procurar por a\xe7\xf5es relacionadas ao Java. No campo de busca, digite "Java" e pressione Enter.'}),"\n",(0,a.jsx)(e.li,{children:"Voc\xea ver\xe1 uma lista de a\xe7\xf5es relacionadas ao Java. Escolha a a\xe7\xe3o que melhor se adeque \xe0s suas necessidades. Por exemplo, voc\xea pode escolher um fluxo de trabalho que compila e testa seu projeto Java com Maven ou Gradle. No caso deste projeto, n\xf3s utilizaremos o Java com Maven."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Captura de tela 2024-04-20 115405.png",src:s(3804).A+"",width:"1345",height:"855"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Clique na a\xe7\xe3o escolhida. Voc\xea ser\xe1 levado a uma nova p\xe1gina com detalhes sobre a a\xe7\xe3o. Aqui, voc\xea pode ver uma vis\xe3o geral da a\xe7\xe3o, bem como as instru\xe7\xf5es passo a passo sobre como configur\xe1-la."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Captura de tela 2024-04-20 115713.png",src:s(9670).A+"",width:"1282",height:"858"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Voc\xea ir\xe1 remover na parte debaixo do c\xf3digo que \xe9 opcional, pois \xe9 respons\xe1vel por enviar gr\xe1ficos para o github para melhorar a qualidade do \u201cdependabot\u201d, mas ele n\xe3o funciona fazendo com que o Action quebre. Para evitar isso, \xe9 recomendado apagar ele."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Captura de tela 2024-04-20 120223.png",src:s(8922).A+"",width:"1277",height:"413"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Agora \xe9 s\xf3 apertar no Commit para salvar as mudan\xe7as."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Com isso, voc\xea configurou com sucesso o GitHub Actions para o seu projeto Java. Agora, sempre que voc\xea fizer push de c\xf3digo para o seu reposit\xf3rio, o GitHub Actions ir\xe1 executar automaticamente o fluxo de trabalho que voc\xea configurou, ajudando a garantir a qualidade e a integridade do seu c\xf3digo."}),"\n",(0,a.jsx)(e.h2,{id:"passo-4-fazendo-o-pull-das-mudan\xe7as-criadas",children:(0,a.jsx)(e.strong,{children:"Passo 4: Fazendo o Pull das Mudan\xe7as Criadas"})}),"\n",(0,a.jsx)(e.p,{children:"Ap\xf3s configurar o GitHub Actions e fazer o push das altera\xe7\xf5es para o reposit\xf3rio, o pr\xf3ximo passo \xe9 puxar (pull) essas mudan\xe7as para sua m\xe1quina local. Seguem os passos para fazer isso:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Abra o terminal ou linha de comando."}),"\n",(0,a.jsxs)(e.li,{children:["Navegue at\xe9 o diret\xf3rio do seu projeto local utilizando o comando ",(0,a.jsx)(e.code,{children:"cd"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Uma vez dentro do diret\xf3rio do seu projeto, execute o comando ",(0,a.jsx)(e.code,{children:"git pull origin main"}),". Este comando ir\xe1 baixar (pull) todas as mudan\xe7as recentes do branch ",(0,a.jsx)(e.code,{children:"main"})," do reposit\xf3rio remoto para sua m\xe1quina local."]}),"\n",(0,a.jsx)(e.li,{children:"Ap\xf3s o comando ser executado, todas as mudan\xe7as feitas no reposit\xf3rio remoto agora tamb\xe9m estar\xe3o no seu projeto local."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Com isso, voc\xea ter\xe1 as configura\xe7\xf5es mais recentes do GitHub Actions em seu ambiente de desenvolvimento local."}),"\n",(0,a.jsx)(e.h2,{id:"passo-5-editando-o-arquivo-yaml-gerado",children:(0,a.jsx)(e.strong,{children:"Passo 5: Editando o arquivo .yaml gerado"})}),"\n",(0,a.jsxs)(e.p,{children:["Depois de configurar o GitHub Actions e adicionar o fluxo de trabalho ao seu projeto, o pr\xf3ximo passo \xe9 editar o arquivo ",(0,a.jsx)(e.code,{children:".yaml"})," gerado. Este arquivo cont\xe9m todas as instru\xe7\xf5es que o GitHub Actions ir\xe1 seguir ao executar o fluxo de trabalho."]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["No seu reposit\xf3rio GitHub, navegue at\xe9 a pasta ",(0,a.jsx)(e.code,{children:".github/workflows"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Clique no arquivo ",(0,a.jsx)(e.code,{children:".yaml"})," que foi gerado pelo GitHub Actions. O nome do arquivo ir\xe1 variar dependendo do fluxo de trabalho que voc\xea escolheu."]}),"\n",(0,a.jsx)(e.li,{children:'Clique no bot\xe3o "Edit" (ou "Editar") para come\xe7ar a fazer altera\xe7\xf5es no arquivo.'}),"\n",(0,a.jsxs)(e.li,{children:["No arquivo ",(0,a.jsx)(e.code,{children:".yaml"}),", voc\xea ver\xe1 v\xe1rias se\xe7\xf5es. Cada se\xe7\xe3o representa uma etapa do fluxo de trabalho. Voc\xea pode adicionar, remover ou modificar estas se\xe7\xf5es de acordo com as necessidades do seu projeto."]}),"\n",(0,a.jsx)(e.li,{children:'Depois de fazer as altera\xe7\xf5es desejadas, clique no bot\xe3o "Commit changes" (ou "Confirmar altera\xe7\xf5es") para salvar as suas modifica\xe7\xf5es.'}),"\n",(0,a.jsxs)(e.li,{children:["O GitHub Actions ir\xe1 agora seguir as instru\xe7\xf5es no seu arquivo ",(0,a.jsx)(e.code,{children:".yaml"})," atualizado sempre que o fluxo de trabalho for acionado."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Com isso, voc\xea terminou de editar o arquivo ",(0,a.jsx)(e.code,{children:".yaml"})," gerado pelo GitHub Actions. As altera\xe7\xf5es que voc\xea fez ir\xe3o ajudar a garantir que o fluxo de trabalho atenda \xe0s necessidades espec\xedficas do seu projeto."]}),"\n",(0,a.jsx)(e.h2,{id:"passo-6-criando-um-primeiro-teste-de-exemplo",children:(0,a.jsx)(e.strong,{children:"Passo 6: Criando um Primeiro Teste de Exemplo"})}),"\n",(0,a.jsx)(e.p,{children:"Depois de configurar o GitHub Actions para o seu projeto, \xe9 importante criar um teste de exemplo para garantir que tudo est\xe1 funcionando corretamente. Aqui est\xe3o os passos para criar um teste de exemplo em Java usando o framework JUnit:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["No seu ambiente de desenvolvimento, navegue at\xe9 o diret\xf3rio ",(0,a.jsx)(e.code,{children:"src/test/java"})," do seu projeto."]}),"\n",(0,a.jsxs)(e.li,{children:["Crie uma nova classe de teste. O nome da classe deve refletir a funcionalidade que voc\xea est\xe1 testando. Por exemplo, se voc\xea est\xe1 testando a classe ",(0,a.jsx)(e.code,{children:"Calculator"}),", voc\xea pode nomear a classe de teste como ",(0,a.jsx)(e.code,{children:"CalculatorTest"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Dentro da classe de teste, crie um novo m\xe9todo de teste. O nome do m\xe9todo deve descrever o comportamento que voc\xea est\xe1 testando. Por exemplo, ",(0,a.jsx)(e.code,{children:"testAddition()"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Anote o m\xe9todo de teste com ",(0,a.jsx)(e.code,{children:"@Test"})," para indicar que \xe9 um teste JUnit."]}),"\n",(0,a.jsx)(e.li,{children:"Dentro do m\xe9todo de teste, escreva o c\xf3digo para o teste. Isso geralmente envolve a cria\xe7\xe3o de um objeto da classe que voc\xea est\xe1 testando, a chamada de um m\xe9todo nesse objeto, e a verifica\xe7\xe3o se o resultado \xe9 o esperado."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Aqui est\xe1 um exemplo de como pode ser a classe de teste:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\npublic class CalculatorTest {\n    @Test\n    public void testAddition() {\n        Calculator calculator = new Calculator();\n        int result = calculator.add(2, 2);\n        assertEquals(4, result);\n    }\n}\n\n"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Salve e fa\xe7a o commit do seu c\xf3digo."}),"\n",(0,a.jsx)(e.li,{children:"Fa\xe7a o push do seu commit para o reposit\xf3rio no GitHub. O GitHub Actions ir\xe1 detectar o novo commit, iniciar o fluxo de trabalho configurado e executar o teste de exemplo que voc\xea acabou de criar."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Com isso, voc\xea criou com sucesso um teste de exemplo para o seu projeto. Agora, sempre que fizer um push para o seu reposit\xf3rio, o GitHub Actions executar\xe1 este teste, ajudando a garantir a qualidade do seu c\xf3digo."}),"\n",(0,a.jsx)(e.p,{children:"Se surgirem d\xfavidas ao seguir o tutorial, de forma ass\xedncrona voc\xea pode acompanhar o v\xeddeo correspondente aos passos descritos, logo abaixo:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://youtu.be/FoMbFqdwuqg?si=lIDxnTWSL6-M8n0v",children:"https://youtu.be/FoMbFqdwuqg?si=lIDxnTWSL6-M8n0v"})})]})}function u(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,a.jsx)(e,{...o,children:(0,a.jsx)(l,{...o})}):l(o)}},9721:(o,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/Captura_de_tela_2024-04-01_035527-ccab771d34e9813015a427826efa0007.png"},3804:(o,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/Captura_de_tela_2024-04-20_115405-e87734a51378c40e895811444ed6cf9c.png"},9670:(o,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/Captura_de_tela_2024-04-20_115713-3d2f9cb20cce41d3fc6e5a9ea087747a.png"},8922:(o,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/Captura_de_tela_2024-04-20_120223-fce316ed20fa31f613f274505ba7b4cf.png"},8512:(o,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/imagem_2024-04-01_035325101-7b51546eccb45655b4bb14768a8d3d99.png"},8453:(o,e,s)=>{s.d(e,{R:()=>n,x:()=>t});var a=s(6540);const r={},i=a.createContext(r);function n(o){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function t(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:n(o.components),a.createElement(i.Provider,{value:e},o.children)}}}]);