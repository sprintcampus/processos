"use strict";(self.webpackChunksprintcampus=self.webpackChunksprintcampus||[]).push([[846],{8160:(a,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var o=i(4848),s=i(8453);const n={},r="Diagrama Back end",d={id:"Modelo DER - BD/Diagrama do Back End",title:"Diagrama Back end",description:"Diagrama back end",source:"@site/docs/Modelo DER - BD/Diagrama do Back End.md",sourceDirName:"Modelo DER - BD",slug:"/Modelo DER - BD/Diagrama do Back End",permalink:"/processos/docs/Modelo DER - BD/Diagrama do Back End",draft:!1,unlisted:!1,editUrl:"https://github.com/sprintcampus/processos/tree/main/docs/Modelo DER - BD/Diagrama do Back End.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Esquema de Fluxo de Trabalho Git - Feature Branch Workflow",permalink:"/processos/docs/Git - gerencia de configura\xe7\xe3o/uso-do-git"},next:{title:"Diagrama banco de dados",permalink:"/processos/docs/Modelo DER - BD/Diagrama"}},t={},c=[];function l(a){const e={h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...a.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"diagrama-back-end",children:"Diagrama Back end"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/sprintcampus/processos/assets/65160454/08b4f576-462b-4ccb-b081-ad97681cf8bf",alt:"Diagrama back end"})}),"\n",(0,o.jsx)(e.p,{children:"O diagrama apresenta um modelo de banco de dados que gerencia informa\xe7\xf5es sobre rem\xe9dios, laborat\xf3rios e vias de administra\xe7\xe3o de medicamentos. Existem tr\xeas entidades principais representadas, cada uma com seus atributos e rela\xe7\xf5es."}),"\n",(0,o.jsx)(e.p,{children:'A entidade "Rem\xe9dios" \xe9 a pe\xe7a central, contendo atributos como id (chave prim\xe1ria), nome, lote_id (chave estrangeira), via, quantidade, validade, laboratorio_id (chave estrangeira), ativo e pre\xe7o. Essa entidade armazena dados cruciais sobre os medicamentos, como seu nome, lote, via de administra\xe7\xe3o, quantidade em estoque, validade, laborat\xf3rio respons\xe1vel pela produ\xe7\xe3o, status de ativa\xe7\xe3o e pre\xe7o.'}),"\n",(0,o.jsx)(e.p,{children:'A entidade "Laborat\xf3rios" est\xe1 conectada \xe0 entidade "Rem\xe9dios" atrav\xe9s da chave estrangeira laboratorio_id. Ela cont\xe9m uma lista ENUMERATION com os laborat\xf3rios dispon\xedveis, como "MEDELEY" e "LABEXEMP". Essa rela\xe7\xe3o indica que cada rem\xe9dio est\xe1 associado a um laborat\xf3rio espec\xedfico, permitindo a identifica\xe7\xe3o do fabricante de cada medicamento.'}),"\n",(0,o.jsx)(e.p,{children:'A entidade "Via" tamb\xe9m est\xe1 relacionada \xe0 entidade "Rem\xe9dios" atrav\xe9s do atributo "via". Ela cont\xe9m uma lista ENUMERATION com diferentes vias de administra\xe7\xe3o, como "ORAL", "NASAL", "INTRAMUSCULAR" e "RETAL". Esta rela\xe7\xe3o indica como cada medicamento pode ser administrado, fornecendo informa\xe7\xf5es \xfateis para profissionais de sa\xfade e pacientes.'}),"\n",(0,o.jsx)(e.p,{children:"Algumas li\xe7\xf5es de boas pr\xe1ticas que podem ser associadas a este diagrama incluem:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Utiliza\xe7\xe3o de chaves prim\xe1rias e estrangeiras: Garante a integridade referencial dos dados, prevenindo inconsist\xeancias e erros no banco de dados."}),"\n",(0,o.jsx)(e.li,{children:"Listas ENUMERATION: Padroniza os valores aceitos para certos atributos, como laborat\xf3rios e vias de administra\xe7\xe3o, promovendo consist\xeancia e facilitando a valida\xe7\xe3o dos dados."}),"\n",(0,o.jsx)(e.li,{children:"Representa\xe7\xe3o clara das rela\xe7\xf5es entre entidades: Facilita a compreens\xe3o do modelo de dados e a manuten\xe7\xe3o do banco de dados, tornando-o mais intuitivo para desenvolvedores e administradores."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Entidades e Atributos:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"A imagem mostra tr\xeas caixas representando entidades ou tabelas em um banco de dados."}),"\n",(0,o.jsxs)(e.li,{children:["A caixa superior est\xe1 rotulada como \u201cRem\xe9dios\u201d e cont\xe9m os seguintes atributos:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"id (chave prim\xe1ria)"}),"\n",(0,o.jsx)(e.li,{children:"nome (VARCHAR com tamanho m\xe1ximo de 50 caracteres)"}),"\n",(0,o.jsx)(e.li,{children:"lote_id (chave estrangeira)"}),"\n",(0,o.jsx)(e.li,{children:"via (VARCHAR com tamanho m\xe1ximo de 50 caracteres)"}),"\n",(0,o.jsx)(e.li,{children:"quantidade (inteiro com limite de 500)"}),"\n",(0,o.jsx)(e.li,{children:"validade (data)"}),"\n",(0,o.jsx)(e.li,{children:"laboratorio_id (chave estrangeira)"}),"\n",(0,o.jsx)(e.li,{children:"ativo (booleano)"}),"\n",(0,o.jsx)(e.li,{children:"pre\xe7o (num\xe9rico com 7 d\xedgitos inteiros e 2 casas decimais)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:"As duas caixas inferiores est\xe3o conectadas \xe0 caixa \u201cRem\xe9dios\u201d por linhas que indicam rela\xe7\xf5es 1 para muitos (1\u2026*)."}),"\n",(0,o.jsx)(e.li,{children:"A caixa inferior esquerda est\xe1 rotulada como \u201cLaborat\xf3rios\u201d e cont\xe9m uma lista interna chamada ENUMERATION com os itens \u201cMEDELEY\u201d e \u201cLABEXEMP\u201d."}),"\n",(0,o.jsx)(e.li,{children:"A caixa inferior direita est\xe1 rotulada como \u201cVia\u201d e tamb\xe9m possui uma lista ENUMERATION com os itens \u201cORAL\u201d, \u201cNASAL\u201d, \u201cINTRAMUSCULAR\u201d e \u201cRETAL\u201d."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Relacionamentos:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"O relacionamento entre \u201cRemedios\u201d e \u201cLaboratorios\u201d \xe9 representado pela chave estrangeira laboratorio_id."}),"\n",(0,o.jsx)(e.li,{children:"O relacionamento entre \u201cRem\xe9dios\u201d e \u201cVia\u201d \xe9 representado pela coluna via."}),"\n"]})]})}function m(a={}){const{wrapper:e}={...(0,s.R)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(l,{...a})}):l(a)}},8453:(a,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var o=i(6540);const s={},n=o.createContext(s);function r(a){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:r(a.components),o.createElement(n.Provider,{value:e},a.children)}}}]);