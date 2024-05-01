# Tutorial: Github Actions com Java Spring

<aside>
<img src="https://www.notion.so/icons/chemistry_gray.svg" alt="https://www.notion.so/icons/chemistry_gray.svg" width="40px" /> O **Github Actions** é um serviço de automação integrado ao GitHub, permitindo automatizar fluxos de trabalho diretamente em seu repositório. Com ele, é possível criar fluxos customizados para tarefas como construção, teste e implantação de aplicativos. Ao responder a eventos específicos, como push de código ou criação de pull requests, o GitHub Actions executa fluxos de trabalho compostos por diversas etapas.

Agora que compreendemos o conceito por trás do GitHub Actions, vamos explorar como integrá-lo com o framework Java Spring para automatizar processos em nossos projetos.

</aside>

## **Passo 1: Criação de um Projeto Spring**

### Criar um projeto inicial com Spring

Para começar nosso tutorial sobre Github Actions com Java Spring, o primeiro passo é criar um novo projeto Spring. Vamos utilizar o Spring Initializr, uma ferramenta online que simplifica o processo de inicialização de projetos Spring, permitindo que você especifique as dependências e configurações desejadas. 

1. Acesse o site [Spring Initializr](https://start.spring.io/).
2. No Spring Initializr, você será apresentado com um formulário para configurar o seu projeto Spring. Aqui estão algumas configurações que você precisa definir:
- **Project**: Escolha "Maven Project" ou "Gradle Project", dependendo da sua preferência de gerenciador de dependências de projeto. Para o projeto recomendamos utilizar o “Maven” para não ocorrer nenhum erro.
- **Language**: Selecione "Java".
- **Spring Boot**: Escolha a versão mais recente disponível.
- **Group**: Defina o identificador de grupo do seu projeto. Por exemplo, **`com.example`**.
- **Artifact**: Especifique o nome do artefato do seu projeto. Por exemplo, **`my-spring-project`**.
- **Dependencies**: Adicione as dependências necessárias para o seu projeto Spring. Por exemplo, **`Spring Web`** para uma aplicação web básica.
- 

Abaixo pode ser visualizado a tela das configurações finais:

![Captura de tela 2024-04-01 035527.png](Tutorial%20Github%20Actions%20com%20Java%20Spring%207999b1c153cd4b74bfe18d37d3e552b9/Captura_de_tela_2024-04-01_035527.png)

![imagem_2024-04-01_035325101.png](Tutorial%20Github%20Actions%20com%20Java%20Spring%207999b1c153cd4b74bfe18d37d3e552b9/imagem_2024-04-01_035325101.png)

  

1. Após configurar todas as opções necessárias, clique no botão "Generate" para fazer o download do projeto Spring gerado como um arquivo ZIP.
2. Extraia o conteúdo do arquivo ZIP baixado para o diretório de sua escolha em seu sistema.

Agora que temos nosso projeto Spring configurado, podemos prosseguir para os próximos passos, onde iremos adicionar GitHub Actions para automatizar nossos processos de CI/CD.

## **Passo 2: Criar um Repositório e Realizar o Push do Projeto**

Agora que temos nosso projeto Spring configurado, é hora de criar um repositório no GitHub para ele e realizar o push do código.

1. Acesse o [GitHub](https://github.com/) e faça login na sua conta (ou crie uma, se ainda não tiver uma).
2. Clique no botão "New" no canto superior direito da página para criar um novo repositório.
3. No formulário de criação do repositório, preencha as seguintes informações:
    - **Repository name**: Escolha um nome para o seu repositório. Por exemplo, **`testeActions`**.
    - **Description**: (Opcional) Adicione uma descrição para o seu repositório.
    - **Visibility**: Escolha entre "Public" (público) ou "Private" (privado), de acordo com as suas necessidades.
    - **Initialize this repository with**: Selecione "Add a README file" para inicializar o repositório com um arquivo README. Isso é útil para fornecer informações sobre o projeto e suas instruções de uso.
4. Clique no botão "Create repository" para criar o repositório.
5. Após criar o repositório, você será redirecionado para a página do mesmo no GitHub. Você verá as instruções para adicionar o repositório remoto ao seu projeto local. Siga essas instruções para realizar o push do seu projeto Spring recém-criado para o repositório no GitHub.
    
    Por exemplo, se você estiver utilizando o Git a partir da linha de comando, poderá usar os seguintes comandos:
    
    ```bash
    bashCopy code
    git remote add origin <url_do_repositório>
    git branch -M main
    git push -u origin main
    
    ```
    
    Certifique-se de substituir **`<url_do_repositório>`** pela URL do repositório recém-criado.
    
6. Após realizar o push do seu código, você verá os arquivos do seu projeto Spring no repositório no GitHub.

Com isso, concluímos o passo de criação do repositório e push do projeto.

## **Passo 3: Configurando o GitHub Actions para Java**

Agora que temos nosso projeto no GitHub, é hora de adicionar o GitHub Actions para automatizar nossos processos de CI/CD. Para isso, precisamos buscar a ação adequada para a linguagem Java.

1. No repositório do seu projeto no GitHub, clique na aba "Actions".
2. Você será apresentado à página de "GitHub Actions". Aqui você verá várias opções de fluxos de trabalho predefinidos que você pode usar. Como nosso projeto é em Java, vamos procurar por ações relacionadas ao Java. No campo de busca, digite "Java" e pressione Enter.
3. Você verá uma lista de ações relacionadas ao Java. Escolha a ação que melhor se adeque às suas necessidades. Por exemplo, você pode escolher um fluxo de trabalho que compila e testa seu projeto Java com Maven ou Gradle. No caso deste projeto, nós utilizaremos o Java com Maven.

![Captura de tela 2024-04-20 115405.png](Tutorial%20Github%20Actions%20com%20Java%20Spring%207999b1c153cd4b74bfe18d37d3e552b9/Captura_de_tela_2024-04-20_115405.png)

1. Clique na ação escolhida. Você será levado a uma nova página com detalhes sobre a ação. Aqui, você pode ver uma visão geral da ação, bem como as instruções passo a passo sobre como configurá-la.

![Captura de tela 2024-04-20 115713.png](Tutorial%20Github%20Actions%20com%20Java%20Spring%207999b1c153cd4b74bfe18d37d3e552b9/Captura_de_tela_2024-04-20_115713.png)

1. Você irá remover na parte debaixo do código que é opcional, pois é responsável por enviar gráficos para o github para melhorar a qualidade do “dependabot”, mas ele não funciona fazendo com que o Action quebre. Para evitar isso, é recomendado apagar ele.

![Captura de tela 2024-04-20 120223.png](Tutorial%20Github%20Actions%20com%20Java%20Spring%207999b1c153cd4b74bfe18d37d3e552b9/Captura_de_tela_2024-04-20_120223.png)

1. Agora é só apertar no Commit para salvar as mudanças.

Com isso, você configurou com sucesso o GitHub Actions para o seu projeto Java. Agora, sempre que você fizer push de código para o seu repositório, o GitHub Actions irá executar automaticamente o fluxo de trabalho que você configurou, ajudando a garantir a qualidade e a integridade do seu código.

## **Passo 4: Fazendo o Pull das Mudanças Criadas**

Após configurar o GitHub Actions e fazer o push das alterações para o repositório, o próximo passo é puxar (pull) essas mudanças para sua máquina local. Seguem os passos para fazer isso:

1. Abra o terminal ou linha de comando.
2. Navegue até o diretório do seu projeto local utilizando o comando `cd`.
3. Uma vez dentro do diretório do seu projeto, execute o comando `git pull origin main`. Este comando irá baixar (pull) todas as mudanças recentes do branch `main` do repositório remoto para sua máquina local.
4. Após o comando ser executado, todas as mudanças feitas no repositório remoto agora também estarão no seu projeto local.

Com isso, você terá as configurações mais recentes do GitHub Actions em seu ambiente de desenvolvimento local.

## **Passo 5: Editando o arquivo .yaml gerado**

Depois de configurar o GitHub Actions e adicionar o fluxo de trabalho ao seu projeto, o próximo passo é editar o arquivo `.yaml` gerado. Este arquivo contém todas as instruções que o GitHub Actions irá seguir ao executar o fluxo de trabalho.

1. No seu repositório GitHub, navegue até a pasta `.github/workflows`.
2. Clique no arquivo `.yaml` que foi gerado pelo GitHub Actions. O nome do arquivo irá variar dependendo do fluxo de trabalho que você escolheu.
3. Clique no botão "Edit" (ou "Editar") para começar a fazer alterações no arquivo.
4. No arquivo `.yaml`, você verá várias seções. Cada seção representa uma etapa do fluxo de trabalho. Você pode adicionar, remover ou modificar estas seções de acordo com as necessidades do seu projeto.
5. Depois de fazer as alterações desejadas, clique no botão "Commit changes" (ou "Confirmar alterações") para salvar as suas modificações.
6. O GitHub Actions irá agora seguir as instruções no seu arquivo `.yaml` atualizado sempre que o fluxo de trabalho for acionado.

Com isso, você terminou de editar o arquivo `.yaml` gerado pelo GitHub Actions. As alterações que você fez irão ajudar a garantir que o fluxo de trabalho atenda às necessidades específicas do seu projeto.

## **Passo 6: Criando um Primeiro Teste de Exemplo**

Depois de configurar o GitHub Actions para o seu projeto, é importante criar um teste de exemplo para garantir que tudo está funcionando corretamente. Aqui estão os passos para criar um teste de exemplo em Java usando o framework JUnit:

1. No seu ambiente de desenvolvimento, navegue até o diretório `src/test/java` do seu projeto.
2. Crie uma nova classe de teste. O nome da classe deve refletir a funcionalidade que você está testando. Por exemplo, se você está testando a classe `Calculator`, você pode nomear a classe de teste como `CalculatorTest`.
3. Dentro da classe de teste, crie um novo método de teste. O nome do método deve descrever o comportamento que você está testando. Por exemplo, `testAddition()`.
4. Anote o método de teste com `@Test` para indicar que é um teste JUnit.
5. Dentro do método de teste, escreva o código para o teste. Isso geralmente envolve a criação de um objeto da classe que você está testando, a chamada de um método nesse objeto, e a verificação se o resultado é o esperado.

Aqui está um exemplo de como pode ser a classe de teste:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 2);
        assertEquals(4, result);
    }
}

```

1. Salve e faça o commit do seu código.
2. Faça o push do seu commit para o repositório no GitHub. O GitHub Actions irá detectar o novo commit, iniciar o fluxo de trabalho configurado e executar o teste de exemplo que você acabou de criar.

Com isso, você criou com sucesso um teste de exemplo para o seu projeto. Agora, sempre que fizer um push para o seu repositório, o GitHub Actions executará este teste, ajudando a garantir a qualidade do seu código.

Se surgirem dúvidas ao seguir o tutorial, de forma assíncrona você pode acompanhar o vídeo correspondente aos passos descritos, logo abaixo:

[https://youtu.be/FoMbFqdwuqg?si=lIDxnTWSL6-M8n0v](https://youtu.be/FoMbFqdwuqg?si=lIDxnTWSL6-M8n0v)