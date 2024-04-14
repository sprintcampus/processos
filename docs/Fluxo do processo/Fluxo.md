# Componentes do Fluxo

# Explorando o Fluxo do Processo do Sprint Campus

Nesta página vamos falar sobre o Fluxo do processo baseado em Scrum (`Sprint Campus`), iniciativa da matéria Engenharia de Software no Campus IV - Rio Tinto, sendo assim, navegaremos pelo esquema BPMN e o explicaremos nesta introdução.

## 1. Entendendo o BPMN

### 1.1 O que é?
É uma linguagem padrão usada para descrever visualmente processos de negócios, como um mapa que mostra como acontecem as coisas , desde o início até o fim.
### 1.2 Componentes BPMN
Vamos utilizar esses elementos para criar o nosso mapa do processo:
- Atividades: São as coisas que precisam ser feitas, como "Enviar um E-mail" ou "Fazer uma Chamada", sendo representadas por retângulos.

- Eventos: São momentos importantes em um processo, como o início, fim ou algo que acontece no meio, como "Receber Pedido" ou "Concluir Tarefa", sendo representados por círculos.

- Gateways (ou Portais): São como as encruzilhadas em um caminho, onde ajudam a decidir qual direção seguir em um processo com base em condições, como "Decisão" ou "Condição", sendo representados por losangos.

- Fluxos de Sequência: São as setas que conectam os elementos do processo, mostrando a ordem em que as coisas acontecem e indicam o caminho que o processo segue e que você deve seguir para ler o Mapa.

- Pools e Lanes: As "Pools" são como grandes grupos e as "Lanes" são como subgrupos dentro deles onde, ambas são usadas para organizar processos maiores, como também ajudam a mostrar quem está envolvido em diferentes partes do processo.


- Se ainda não está claro oque são esses componentes recomendamos assistir à este [**Vídeo**](https://youtu.be/o3qF7C-_qa4?si=-CfDOIHpIHTi0fvP)


## 2. Fluxo do Processo

Vamos explicar passo a passo da representação do nosso processo logo abaixo:
***
![Visão geral do Fluxo](img/Esquema%20completo%20e%20expandido.svg)
***

## 3. O que cada bloco está fazendo

###     3.1 Processo de atividade

- Esta é a etapa inicial e nela já iniciamos com o passo de [Iniciação](#32-processo-de-iniciação).
- Em seguida vamos ao [levantamento de requisitos](#33-processo-de-levantamento-de-requisitos), [desenvolvimento](#34-processo-de-desenvolvimento) e finalizamos com a entrega de um produto final.
***
![Processo de atividade](<img/Inicio do processo.svg>)
***

### 3.2 Processo de iniciação

- Vamos utilizar o discord como meio de comunicação:
    - Criar um servidor no discord e adicionar a turma/equipe.
    - E no servidor criar chats para discussão.
- Em **paralelo** deve-se:
    - Seguir [esses passos](/docs/Git%20-%20gerencia%20de%20configuração/uso-do-git) para definir as regras.
    - Adicionar os participantes nesse repositório criado.
    - Adicionar o Docussaurus como forma de documentação.

***
![Iniciação](<img/Processo - Iniciação.svg>)
***

### 3.3 Processo de levantamento de requisitos

- A etapa de levantamento de requisitos é iniciado junto ao professor com uma ideia do projeto, onde o planejamento de teste e os backlogs do produto são criados e revisados.

    - No levantamento de teste serão definidas as estratégias para criar os cenários de testes necessários e cobrindo o máximo de funcionalidades do sistema.
    - O backlog de produto é uma lista de tarefas, que será realizada durante o desenvolvimento do projeto.
***
![Levantamento de requisitos](<img/Processo - Levantamento de requisitos.svg>)
***

### 3.4 Processo de Desenvolvimento

O processo de desenvolvimento é subdividido em [Codificação](#341-codificação) e [Testes](#342-testes).

#### 3.4.1 Codificação

- O processo de Codificação trata-se da implementação das funcionalidades e requisitos definidos. 
    - Se houver falhas nos testes automáticos, retorna-se à fase de codificação para corrigir os erros. 
    - Caso passe nos testes, os códigos são adicionados ao GitHub.
    - Todas as funcionalidades devem estar prontas e testadas até o prazo de entrega.

#### 3.4.2  Testes e Entrega

- Por fim, as funcionalidades desenvolvidos no desenvolvimento são testados e entregues, tendo ou não sido cumpridos todos os itens do backlog.
- Funcionalidades não prontas, são documentadas para a próxima reunião de desenvolvimento.

***
![Desenvolvimento](<img/Processo - Desenvolvimento.svg>)
***

Após isso, entregar o produto final.
