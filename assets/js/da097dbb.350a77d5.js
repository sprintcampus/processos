"use strict";(self.webpackChunksprintcampus=self.webpackChunksprintcampus||[]).push([[6306],{8057:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(4848),s=n(8453);const a={},r="Esquema de Fluxo de Trabalho Git - Feature Branch Workflow",d={id:"Esquema de uso do git/uso-do-git",title:"Esquema de Fluxo de Trabalho Git - Feature Branch Workflow",description:"1. Branch Principal: main",source:"@site/docs/Esquema de uso do git/uso-do-git.md",sourceDirName:"Esquema de uso do git",slug:"/Esquema de uso do git/uso-do-git",permalink:"/processos/docs/Esquema de uso do git/uso-do-git",draft:!1,unlisted:!1,editUrl:"https://github.com/sprintcampus/processos/tree/main/docs/Esquema de uso do git/uso-do-git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/processos/docs/tutorial-extras/translate-your-site"}},c={},l=[{value:"1. Branch Principal: <code>main</code>",id:"1-branch-principal-main",level:2},{value:"2. Branch de Desenvolvimento: <code>develop</code> (Opcional)",id:"2-branch-de-desenvolvimento-develop-opcional",level:2},{value:"3. Feature Branches (Branches de Recursos)",id:"3-feature-branches-branches-de-recursos",level:2},{value:"4. Commits",id:"4-commits",level:2},{value:"5. Pull Requests (PRs)",id:"5-pull-requests-prs",level:2},{value:"6. Revis\xe3o de C\xf3digo",id:"6-revis\xe3o-de-c\xf3digo",level:2},{value:"7. Merge (Fus\xe3o)",id:"7-merge-fus\xe3o",level:2},{value:"8. Releases (Lan\xe7amentos)",id:"8-releases-lan\xe7amentos",level:2},{value:"9. Hotfixes (Corre\xe7\xf5es Urgentes)",id:"9-hotfixes-corre\xe7\xf5es-urgentes",level:2},{value:"10. Manuten\xe7\xe3o",id:"10-manuten\xe7\xe3o",level:2},{value:"Tipo e descri\xe7\xe3o \ud83d\udca1",id:"tipo-e-descri\xe7\xe3o-",level:2}];function t(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"esquema-de-fluxo-de-trabalho-git---feature-branch-workflow",children:"Esquema de Fluxo de Trabalho Git - Feature Branch Workflow"}),"\n",(0,i.jsxs)(o.h2,{id:"1-branch-principal-main",children:["1. Branch Principal: ",(0,i.jsx)(o.code,{children:"main"})]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Cont\xe9m o c\xf3digo que est\xe1 atualmente em produ\xe7\xe3o."}),"\n"]}),"\n",(0,i.jsxs)(o.h2,{id:"2-branch-de-desenvolvimento-develop-opcional",children:["2. Branch de Desenvolvimento: ",(0,i.jsx)(o.code,{children:"develop"})," (Opcional)"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Age como um est\xe1gio intermedi\xe1rio entre as branches de recursos e a produ\xe7\xe3o."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"3-feature-branches-branches-de-recursos",children:"3. Feature Branches (Branches de Recursos)"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Crie uma nova branch para cada nova funcionalidade, corre\xe7\xe3o de bug ou experimento a partir da ",(0,i.jsx)(o.code,{children:"main"})," ou ",(0,i.jsx)(o.code,{children:"develop"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Nomeie apropriadamente, como ",(0,i.jsx)(o.code,{children:"feature/login-social"}),", ",(0,i.jsx)(o.code,{children:"bugfix/correcao-login"}),", ",(0,i.jsx)(o.code,{children:"experiment/nova-ui"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"4-commits",children:"4. Commits"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Fa\xe7a commits pequenos e frequentes com mensagens claras e descritivas."}),"\n",(0,i.jsx)(o.li,{children:"Siga uma conven\xe7\xe3o para mensagens de commit."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"5-pull-requests-prs",children:"5. Pull Requests (PRs)"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Abra um Pull Request da sua branch de recurso para ",(0,i.jsx)(o.code,{children:"develop"})," ou ",(0,i.jsx)(o.code,{children:"main"})," quando estiver pronto."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"6-revis\xe3o-de-c\xf3digo",children:"6. Revis\xe3o de C\xf3digo"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"A equipe revisa o c\xf3digo no PR, sugerindo melhorias e garantindo a qualidade."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"7-merge-fus\xe3o",children:"7. Merge (Fus\xe3o)"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Ap\xf3s a aprova\xe7\xe3o do PR e a passagem nos testes de CI, fa\xe7a o merge para ",(0,i.jsx)(o.code,{children:"develop"})," ou ",(0,i.jsx)(o.code,{children:"main"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Delete a branch de recurso ap\xf3s o merge."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"8-releases-lan\xe7amentos",children:"8. Releases (Lan\xe7amentos)"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Fa\xe7a o merge da ",(0,i.jsx)(o.code,{children:"develop"})," para ",(0,i.jsx)(o.code,{children:"main"})," quando um conjunto de funcionalidades estiver pronto para produ\xe7\xe3o."]}),"\n",(0,i.jsx)(o.li,{children:"Use tags para marcar vers\xf5es de lan\xe7amentos no hist\xf3rico do Git."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"9-hotfixes-corre\xe7\xf5es-urgentes",children:"9. Hotfixes (Corre\xe7\xf5es Urgentes)"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Crie uma branch ",(0,i.jsx)(o.code,{children:"hotfix"})," a partir da ",(0,i.jsx)(o.code,{children:"main"})," para corre\xe7\xf5es urgentes."]}),"\n",(0,i.jsxs)(o.li,{children:["Fa\xe7a o merge para a ",(0,i.jsx)(o.code,{children:"main"})," e ",(0,i.jsx)(o.code,{children:"develop"})," ap\xf3s a conclus\xe3o."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"10-manuten\xe7\xe3o",children:"10. Manuten\xe7\xe3o"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Mantenha as branches de recursos atualizadas com a ",(0,i.jsx)(o.code,{children:"main"})," ou ",(0,i.jsx)(o.code,{children:"develop"})," para minimizar conflitos de merge."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"tipo-e-descri\xe7\xe3o-",children:"Tipo e descri\xe7\xe3o \ud83d\udca1"}),"\n",(0,i.jsx)(o.p,{children:"O commit sem\xe2ntico possui os elementos estruturais abaixo (tipos), que informam a inten\xe7\xe3o do seu commit ao utilizador(a) de seu c\xf3digo."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"feat - Commits do tipo feat indicam que seu trecho de c\xf3digo est\xe1 incluindo um novo recurso (se relaciona com MINOR do versionamento sem\xe2ntico)."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"fix - Commits do tipo fix indicam que seu trecho de c\xf3digo commitado est\xe1 solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento sem\xe2ntico)."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"docs - Commits do tipo docs indicam que houveram mudan\xe7as na documenta\xe7\xe3o, como por exemplo no Readme do seu reposit\xf3rio. (N\xe3o inclui altera\xe7\xf5es em c\xf3digo)."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"test - Commits do tipo test s\xe3o utilizados quando s\xe3o realizadas altera\xe7\xf5es em testes, seja criando, alterando ou excluindo testes unit\xe1rios. (N\xe3o inclui altera\xe7\xf5es em c\xf3digo)"}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"build - Commits do tipo build s\xe3o utilizados quando s\xe3o realizadas modifica\xe7\xf5es em arquivos de build e depend\xeancias."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"perf - Commits do tipo perf servem para identificar quaisquer altera\xe7\xf5es de c\xf3digo que estejam relacionadas a performance."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"style - Commits do tipo style indicam que houveram altera\xe7\xf5es referentes a formata\xe7\xf5es de c\xf3digo, semicolons, trailing spaces, lint... (N\xe3o inclui altera\xe7\xf5es em c\xf3digo)."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"refactor - Commits do tipo refactor referem-se a mudan\xe7as devido a refatora\xe7\xf5es que n\xe3o alterem sua funcionalidade, como por exemplo, uma altera\xe7\xe3o no formato como \xe9 processada determinada parte da tela, mas que mantenha a mesma funcionalidade, ou melhorias de performance devido a um code review."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"chore - Commits do tipo chore indicam atualiza\xe7\xf5es de tarefas de build, configura\xe7\xf5es de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (N\xe3o inclui altera\xe7\xf5es em c\xf3digo)"}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"ci - Commits do tipo ci indicam mudan\xe7as relacionadas a integra\xe7\xe3o cont\xednua (continuous integration)."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"raw - Commits do tipo raw indicam mudan\xe7as relacionadas a arquivos de configura\xe7\xf5es, dados, features, par\xe2metros."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>d});var i=n(6540);const s={},a=i.createContext(s);function r(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);