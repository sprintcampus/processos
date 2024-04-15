## README: Documentação dos Testes para API de Remédios

Este repositório contém um conjunto de testes JUnit para uma API relacionada ao gerenciamento de informações de medicamentos (`com.example.ApiRemedios`). Os testes abrangem diversos aspectos das classes `RemedioController`, `Remedio` e `ServicesRemedio`. Os testes utilizam Mockito para simular dependências.

### `RemedioControllerTest`

#### `testCadastrarRemedio`
- **Objetivo**: Verificar o método `cadastrar` do `RemedioController` para registrar novos medicamentos.
- **Cenário**: Cria uma solicitação simulada para registrar um novo medicamento e verifica se o controlador responde com a resposta HTTP esperada.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Garante que o método `cadastrar` do serviço seja chamado exatamente uma vez com os dados fornecidos.

#### `testListarRemedios`
- **Objetivo**: Validar o método `listar` do `RemedioController` para obter uma lista de medicamentos.
- **Cenário**: Simula a resposta do serviço para listar medicamentos e verifica se o controlador retorna a lista de medicamentos esperada.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Verifica se a resposta HTTP contém a lista de medicamentos esperada.
  - Confirma que o código de status HTTP é `200` (OK).

#### `testAtualizarRemedio`
- **Objetivo**: Testar o método `atualizar` do `RemedioController` para atualizar informações de medicamentos.
- **Cenário**: Simula uma solicitação de atualização e garante que o controlador responda com os detalhes do medicamento atualizados.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Valida se o controlador retorna as informações atualizadas do medicamento corretamente.
  - Confirma que o código de status HTTP é `200` (OK).

#### `testReativarRemedio`
- **Objetivo**: Validar o método `reativar` do `RemedioController` para reativar um medicamento.
- **Cenário**: Simula uma solicitação de reativação e verifica se o controlador responde adequadamente.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Confirma que o método `reativar` do serviço é invocado exatamente uma vez com o ID fornecido.

#### `testExcluirRemedio`
- **Objetivo**: Testar o método `excluir` do `RemedioController` para excluir um medicamento.
- **Cenário**: Simula uma solicitação de exclusão e verifica a resposta do controlador.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Garante que o método `excluir` do serviço seja chamado exatamente uma vez com o ID fornecido.

#### `testInativarRemedio`
- **Objetivo**: Verificar o método `inativar` do `RemedioController` para desativar um medicamento.
- **Cenário**: Simula uma solicitação de desativação e verifica a resposta do controlador.
- **Dependências Mockadas**: `ServicesRemedio`
- **Verificações**:
  - Confirma que o método `inativar` do serviço é invocado exatamente uma vez com o ID fornecido.

### `RemedioTest`

#### `atualizarInfomacao`
- **Objetivo**: Testar o método `atualizarInfomacao` do `Remedio` para atualizar informações de medicamentos.
- **Cenário**: Simula uma solicitação de atualização e verifica se os detalhes do medicamento são atualizados corretamente.
- **Dependências Mockadas**: `DadosAtualizarRemedio`, `Laboratorio`
- **Verificações**:
  - Valida se o método atualiza as informações do medicamento conforme esperado.

#### `inativar`
- **Objetivo**: Validar o método `inativar` do `Remedio` para desativar um medicamento.
- **Cenário**: Simula uma solicitação de desativação e garante que o medicamento seja desativado.
- **Dependências Mockadas**: Nenhuma
- **Verificações**:
  - Verifica se o método `inativar` é invocado e desativa o medicamento.

#### `reativar`
- **Objetivo**: Testar o método `reativar` do `Remedio` para reativar um medicamento.
- **Cenário**: Simula uma solicitação de reativação e verifica se o medicamento é reativado corretamente.
- **Dependências Mockadas**: Nenhuma
- **Verificações**:
  - Confirma que o medicamento é reativado após a chamada do método `reativar`.

### `ServicesRemedioTest`

#### `cadastrar`
- **Objetivo**: Testar o método `cadastrar` do `ServicesRemedio` para registrar novos medicamentos.
- **Cenário**: Simula uma solicitação de registro e garante que o método retorne a resposta HTTP apropriada.
- **Dependências Mockadas**: `RemediosRepository`, `DadosCadastroRemedio`
- **Verificações**:
- Valida se o método registra o medicamento e retorna a resposta HTTP esperada.

#### `listar`
- **Objetivo**: Validar o método `listar` do `ServicesRemedio` para obter uma lista de medicamentos.
- **Cenário**: Simula uma solicitação de listagem e garante que o método retorne a lista correta de medicamentos.
- **Dependências Mockadas**: `RemediosRepository`
- **Verificações**:
  - Verifica se o método retorna a lista de medicamentos esperada na resposta HTTP.

#### `atualizar`
- **Objetivo**: Testar o método `atualizar` do `ServicesRemedio` para atualizar informações de medicamentos.
- **Cenário**: Simula uma solicitação de atualização e verifica se o método retorna os detalhes atualizados do medicamento.
- **Dependências Mockadas**: `RemediosRepository`, `DadosAtualizarRemedio`
- **Verificações**:
  - Valida se o método atualiza e retorna os detalhes corretos do medicamento.

#### `reativar`
- **Objetivo**: Validar o método `reativar` do `ServicesRemedio` para reativar um medicamento.
- **Cenário**: Simula uma solicitação de reativação e garante que o método retorne a resposta HTTP apropriada.
- **Dependências Mockadas**: `RemediosRepository

- Dependências mockadas se refere às instâncias de objetos que são substituídas por mocks durante os testes unitários. Em contextos de teste, é comum isolar a unidade de código que está sendo testada, substituindo suas dependências externas por versões simuladas, conhecidas como "mocks". Esses mocks imitam o comportamento das dependências reais, permitindo que o teste se concentre apenas na lógica da unidade em questão, sem depender do funcionamento real das dependências externas.

- Quando dizemos que "dependências estão mockadas" em um contexto de teste, significa que os objetos ou serviços que a unidade de código (como uma classe ou método) normalmente utiliza foram substituídos por mocks durante o teste. Esses mocks são configurados para simular o comportamento esperado das dependências reais, permitindo que o teste controle e verifique interações específicas com essas dependências.
