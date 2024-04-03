# Esquema de Fluxo de Trabalho Git - Feature Branch Workflow

## 1. Branch Principal: `main`
- Contém o código que está atualmente em produção.

## 2. Branch de Desenvolvimento: `develop` (Opcional)
- Age como um estágio intermediário entre as branches de recursos e a produção.

## 3. Feature Branches (Branches de Recursos)
- Crie uma nova branch para cada nova funcionalidade, correção de bug ou experimento a partir da `main` ou `develop`.
- Nomeie apropriadamente, como `feature/login-social`, `bugfix/correcao-login`, `experiment/nova-ui`.

## 4. Commits
- Faça commits pequenos e frequentes com mensagens claras e descritivas.
- Siga uma convenção para mensagens de commit.

## 5. Pull Requests (PRs)
- Abra um Pull Request da sua branch de recurso para `develop` ou `main` quando estiver pronto.

## 6. Revisão de Código
- A equipe revisa o código no PR, sugerindo melhorias e garantindo a qualidade.

## 7. Merge (Fusão)
- Após a aprovação do PR e a passagem nos testes de CI, faça o merge para `develop` ou `main`.
- Delete a branch de recurso após o merge.

## 8. Releases (Lançamentos)
- Faça o merge da `develop` para `main` quando um conjunto de funcionalidades estiver pronto para produção.
- Use tags para marcar versões de lançamentos no histórico do Git.

## 9. Hotfixes (Correções Urgentes)
- Crie uma branch `hotfix` a partir da `main` para correções urgentes.
- Faça o merge para a `main` e `develop` após a conclusão.

## 10. Manutenção
- Mantenha as branches de recursos atualizadas com a `main` ou `develop` para minimizar conflitos de merge.


## Tipo e descrição 💡

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- feat - Commits do tipo feat indicam que seu trecho de código está incluindo um novo recurso (se relaciona com MINOR do versionamento semântico).

- fix - Commits do tipo fix indicam que seu trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento semântico).

- docs - Commits do tipo docs indicam que houveram mudanças na documentação, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- test - Commits do tipo test são utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- build - Commits do tipo build são utilizados quando são realizadas modificações em arquivos de build e dependências.

- perf - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a performance.

- style - Commits do tipo style indicam que houveram alterações referentes a formatações de código, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- refactor - Commits do tipo refactor referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que mantenha a mesma funcionalidade, ou melhorias de performance devido a um code review.

- chore - Commits do tipo chore indicam atualizações de tarefas de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- ci - Commits do tipo ci indicam mudanças relacionadas a integração contínua (continuous integration).

- raw - Commits do tipo raw indicam mudanças relacionadas a arquivos de configurações, dados, features, parâmetros.
