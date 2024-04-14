# Componentes do Fluxo

# Explorando o Fluxo do Processo do Sprint Campus

Nesta página vamos falar sobre o Fluxo do processo baseado em Scrum, o `Sprint Campus`, uma iniciativa da matéria Engenharia de Software no Campus IV - Rio Tinto. Nesta introdução, vamos navegar pelo esquema BPMN e explicá-lo.

## 1. Entendendo o BPMN

### 1.1 O que é?
É uma linguagem padrão usada para descrever visualmente processos de negócios. Ele é como um mapa que mostra como acontecem as coisas , desde o início até o fim.
### 1.2 Componentes BPMN
Vamos utilizar esses elementos para criar o nosso mapa do processo
- Atividades: São as coisas que precisam ser feitas, como "Enviar um E-mail" ou "Fazer uma Chamada". Elas são representadas por retângulos.

- Eventos: São momentos importantes em um processo, como o início, fim ou algo que acontece no meio, como "Receber Pedido" ou "Concluir Tarefa". São mostrados como círculos.

- Gateways (ou Portais): São como as encruzilhadas em um caminho. Eles ajudam a decidir qual direção seguir em um processo, com base em condições, como "Decisão" ou "Condição". Eles parecem losangos.

- Fluxos de Sequência: São as setas que conectam os elementos do processo, mostrando a ordem em que as coisas acontecem. Elas indicam o caminho que o processo segue e que você deve seguir para ler o Mapa.

- Pools e Lanes: São usados para organizar processos maiores. As "Pools" são como grandes grupos e as "Lanes" são como subgrupos dentro deles. Elas ajudam a mostrar quem está envolvido em diferentes partes do processo.


- Se ainda não está claro oque são esses componentes recomendamos assistir à este [**Vídeo**](https://youtu.be/o3qF7C-_qa4?si=-CfDOIHpIHTi0fvP)


## 2. Fluxo do Processo

Está é a representação do nosso processo. Vamos explicar passo a passo em seguida.
***
![Visão geral do Fluxo](img/Inicio%20do%20processo.svg)
***

## 3. O que cada bloco está fazendo

###     3.1 Processo de atividade

- Essa é a etapa inicial e nela antes mesmo de receber alguma atividade, já iniciamos com o passo de [Iniciação](#32-processo-de-iniciação).
- Em seguida vamos ao [levantamento de requisitos](#33-processo-de-levantamento-de-requisitos), [desenvolvimento](#34-processo-de-desenvolvimento) e finalizamos com a entrega de um produto final.
***
![Processo de atividade](<img/Inicio do processo.svg>)
***

### 3.2 Processo de iniciação

- Vamos utilizar o discord como meio de comunicação.
    - Criar um servidor no discord e adicionar a turma/equipe.
    - E no servidor criar chats para discussão.
- Depois disso em **pararelo** deve-se
    - Seguir [esses passos](/docs/Git%20-%20gerencia%20de%20configuração/uso-do-git) para definir as regras.
    - Adicionar os participantes nesse repositório criado.
    - Adicionar o Docussaurus como forma de documentação.
- E por fim, quando surgir uma atividade, Inicia-se o [Levantamento de requisitos](#33-processo-de-levantamento-de-requisitos)

***
![Iniciação](<img/Processo - Iniciação.svg>)
***

### 3.3 Processo de levantamento de requisitos

- A etapa de levantamento de requisitos é iniciado com uma ideia do projeto, onde o professor é envolvido para levantar os requisitos. Após isso, é passado para a etapa de ajustes dos requisitos, onde são criados os backlogs de produto e o planejamento de teste e é encerrado com a ideia inicial dos requisitos.

- O levantamento de teste é onde sera feito o plano de teste, como também serão definidas as estratégias para criar os cenários de testes nesserários para cobrir o máximo de funcionálidades do sistema.
O backlog de produto é uma lista de tarefas onde cada um dos itens dessa lista será realizado durante o desenvolvimento do projeto.
***
![Levantamento de requisitos](<img/Processo - Levantamento de requisitos.svg>)
***

### 3.4 Processo de Desenvolvimento

Após a etapa do Backlog, vem a fase de desenvolvimento em si. Essa fase acontece após a escolha da tarefa do backlog que será trabalhada e é subdividida em [Codificação](#341-codificação) e [Teste](#342-testes).

#### 3.4.1 Codificação

- O processo de Codificação trata-se da implementação das funcionalidades e requisitos definidos. 
    - Se os testes automáticos não estão passando, retorna-se à fase de codificação para arrumar o que está errado. 
    - Caso passe nos testes, os códigos são adicionados ao GitHub.
    - Uma nova funcionalidade é escolhida para codificação, caso haja tempo.
- Assim, finalizando a fase de desenvolvimento.

#### 3.4.2  Testes

- Por fim, caso o período de entrega tenha chegado, os itens desenvolvidos na etapa de desenvolvimento são entregues, tendo ou não sido cumpridos todos os itens do backlog. Em caso da fase de desenvolvimento ter sido concluída e o tempo de entrega ainda não ter chegado, deve-se revisar a etapa de desenvolvimento junto ao professor e repeti-la.

***
![Desenvolvimento](<img/Processo - Desenvolvimento.svg>)
***

Após isso, entregar o produto final.