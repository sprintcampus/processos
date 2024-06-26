# Esquema de Fluxo de Trabalho Git - Feature Branch Workflow

## 1. Branch Principal: `main`
- **Como fazer:** Sempre mantenha a `main` atualizada com o código em produção.
- **Como fazer (Terminal):** `git checkout main` e `git pull origin main`.
- **Como fazer (GitHub Desktop):** Selecione a branch `main` no menu superior e clique em "Fetch origin".
- **Como fazer (GitHub Web):** Acesse o seu repositório, clique em "Branches", selecione `main`.

## 2. Branch de Desenvolvimento: `develop` (Opcional)
- **Como fazer:** Use esta branch como intermediária para estágios antes da produção.
- **Como fazer (Terminal):** `git checkout -b develop origin/main`.
- **Como fazer (GitHub Desktop):** Crie a branch `develop` clicando em "Current branch" > "New Branch".
- **Como fazer (GitHub Web):** No repositório, clique em "Branch: main", digite `develop` e clique em "Create branch".
- ---
- **Exemplo de caso:** Novas funcionalidades são mescladas em `develop` após a revisão de código e testes de integração.

## 3. Feature Branches (Branches de Recursos)
- **Como fazer:** Crie uma nova branch para cada funcionalidade ou correção.
- **Como fazer (Terminal):** `git checkout -b nome-da-feature origin/main`.
- **Como fazer (GitHub Desktop):** Em "Current branch", clique em "New Branch" e nomeie sua branch.
- **Como fazer (GitHub Web):** No repositório, clique em "Branch: main", insira o nome da nova branch e crie-a.
- --
- **Exemplo de caso:** Um desenvolvedor cria uma branch `feature/login` para implementar a funcionalidade de login no aplicativo.

## 4. Commits
- **Como fazer:** Faça commits com mensagens claras.
- **Como fazer (Terminal):** `git add .` e `git commit -m "descrição do commit"`.
- **Como fazer (GitHub Desktop):** Adicione mudanças ao stage, escreva sua mensagem e clique em "Commit to branch".
- **Como fazer (GitHub Web):** Edite arquivos diretamente no GitHub, escreva a mensagem de commit e confirme as alterações.
- --
- **Exemplo de caso:** Após implementar a lógica de autenticação, o desenvolvedor faz um commit com a mensagem "feat: Adiciona funcionalidade de login".

## 5. Pull Requests (PRs)
- **Como fazer:** Abra um PR quando sua feature estiver pronta.
- **Como fazer (Terminal):** `git push origin nome-da-feature` e depois crie o PR no GitHub.
- **Como fazer (GitHub Desktop):** Push para o origin e depois vá para o GitHub para abrir o PR.
- **Como fazer (GitHub Web):** Clique em "Pull requests" > "New pull request", selecione sua branch e crie o PR.
- --
- **Exemplo de caso:** O desenvolvedor abre um PR da branch `feature/login` para `develop` após concluir a implementação e passar nos testes.

## 6. Revisão de Código
- **Como fazer:** Participe da revisão sugerindo melhorias ou aprovando mudanças.
- **Onde ir (GitHub Web):** No PR, participe comentando e revisando mudanças.
- --
- **Exemplo de caso:** Outro membro da equipe revisa o PR, sugerindo melhorias na interface de login e solicitando alterações antes da mesclagem.

## 7. Merge (Fusão)
- **Como fazer:** Após a aprovação e testes, faça o merge para `develop` ou `main`.
- **Como fazer (Terminal):** `git checkout main` ou `develop`, e `git merge nome-da-feature`.
- **Como fazer (GitHub Desktop):** Volte ao GitHub para realizar o merge do PR.
- **Como fazer (GitHub Web):** Em "Pull requests", abra o PR aprovado e clique em "Merge pull request".
- --
- **Exemplo de caso:** Após fazer as alterações solicitadas, o desenvolvedor mescla a branch `feature/login` em `develop`.

## 8. Releases (Lançamentos)
- **Como fazer:** Faça o merge de `develop` para `main` e marque com tags quando apropriado.
- **Como fazer (Terminal):** `git checkout main` e `git merge develop`; use `git tag -a v1.0 -m "versão 1.0"` e `git push --tags`.
- **Como fazer (GitHub Web):** Na branch `main`, clique em "Releases" > "New release" e crie a tag.
- --
- **Exemplo de caso:** Após um ciclo de desenvolvimento, todas as alterações são mescladas em `main` e marcadas como versão 1.0.

## 9. Hotfixes (Correções Urgentes)
- **Como fazer:** Crie uma branch `hotfix` a partir de `main` para correções urgentes.
- **Como fazer (Terminal):** `git checkout -b hotfix/issue main`.
- **Como fazer (GitHub Desktop):** Selecione `main`, clique em "New Branch" e nomeie-a como `hotfix/`.
- **Como fazer (GitHub Web):** Como anteriormente, crie a branch diretamente no GitHub.
- --
- **Exemplo de caso:** Uma falha crítica é descoberta após o lançamento, então uma branch `hotfix/bug` é criada para corrigir o problema e mesclada imediatamente em `main`.

## 10. Manutenção
- **Como fazer:** Mantenha suas branches de recursos atualizadas com `main` ou `develop`.
- **Como fazer (Terminal):** Regularmente faça `git pull origin main` ou `git pull origin develop`.
- **Como fazer (GitHub Desktop):** Faça rebase de sua branch de recurso com `main` ou `develop`.
- **Como fazer (GitHub Web):** Use a funcionalidade de rebase disponível nas configurações de PR se necessário.
- --
- **Exemplo de caso:** Regularmente, todas as branches ativas são atualizadas com as últimas alterações de `main` para evitar conflitos durante o merge.


## Tipo e descrição 💡

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- feat - Commits do tipo feat indicam que seu trecho de código está incluindo um novo recurso (se relaciona com MINOR do versionamento semântico).

- fix - Commits do tipo fix indicam que seu trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento semântico).

- test - Commits do tipo test são utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- refactor - Commits do tipo refactor referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que mantenha a mesma funcionalidade, ou melhorias de performance devido a um code review.
