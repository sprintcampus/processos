# Diagrama banco de dados
![Diagrama_do_Banco_Dados drawio](https://github.com/sprintcampus/processos/assets/81367152/50d3eccb-d0da-409e-8ef8-f30b0dfcc394)

O diagrama em questão representa um modelo de banco de dados que lida com informações relacionadas a remédios, fornecedores, laboratórios, clientes e vias de administração de medicamentos. Cada tabela é representada por um retângulo e possui uma série de atributos específicos.

A tabela "Remédios" armazena informações essenciais sobre os medicamentos, como nome, tipo, validade e se estão ativos. Além disso, ela possui uma chave estrangeira que a conecta à tabela "Laboratórios", indicando a relação de muitos para um, o que significa que vários remédios podem ser produzidos por um único laboratório.

Os laboratórios são representados na tabela "Laboratórios", onde cada um é identificado por um único nome. Esta tabela também está relacionada à tabela "Fornecedor" através da chave estrangeira "remedio_id", permitindo que os fornecedores forneçam diferentes medicamentos produzidos pelos laboratórios.

A tabela "Fornecedor" armazena informações sobre os fornecedores, como nome, endereço e telefone. Além disso, ela está conectada às tabelas "Remédios" e "Laboratórios" através de chaves estrangeiras, permitindo uma relação de muitos para muitos. Isso significa que um fornecedor pode fornecer vários medicamentos ou trabalhar com vários laboratórios, e vice-versa.

Os clientes são representados na tabela "Cliente", com informações como nome, endereço e telefone. Esta tabela também está relacionada à tabela "Remédios" através de uma chave estrangeira, indicando que um cliente pode estar associado a vários medicamentos, seguindo uma relação de muitos para muitos.

Por fim, a tabela "Via" representa as diferentes vias de administração de medicamentos, como oral, intravenosa, entre outras. Embora não haja uma chave estrangeira diretamente ligando esta tabela às outras, a relação entre "Via" e "Remédios" é de um para muitos, pois um medicamento pode ser administrado por várias vias.

Algumas lições de boas práticas que podem ser associadas a este diagrama incluem:

- Utilização de chaves primárias e estrangeiras para garantir integridade referencial e facilitar a manutenção dos dados.
- Normalização do banco de dados para evitar redundância e inconsistência de dados.
-	Representação clara e organizada das relações entre as entidades, facilitando a compreensão e manutenção do modelo.
- Uso de tipos de dados apropriados para cada atributo, garantindo consistência e eficiência no armazenamento e manipulação dos dados.

#### Entidades:
-	Remedios:
  -	id (Chave Primária)
  -	nome (Texto)
  - via_id (Chave Estrangeira referenciando a tabela Via)
  - lote (Texto)
  -	quantidade (Número Inteiro)
  -	validade (Data)
  -	laboratorio_id (Chave Estrangeira referenciando a tabela Laboratorios)
  -	ativo (Booleano)
- Laboratorios:
  - MEDLEY (Enumeração)
  - LABEXEMP (Enumeração)
- Via:
  - ORAL (Enumeração)
  - NASAL (Enumeração)
  - VENOSO (Enumeração)
  - INTRAMUSCULAR (Enumeração)
  - RETAL (Enumeração)
- Fornecedor:
  - id (Chave Primária)
  - nome (Texto)
  - endereço (Texto)
  - contato (Texto)
  - remedio_id (Chave Estrangeira referenciando a tabela Remedios)
  - laboratorio_id (Chave Estrangeira referenciando a tabela Laboratorios)
- Farmacia:
  - id (Chave Primária)
  - nome (Texto)
  - endereço (Texto)
  - remedio_id (Chave Estrangeira referenciando a tabela Remedios)
  - cliente_id (Chave Estrangeira referenciando a tabela Cliente)
  - Cliente
  - id (Chave Primária)
  - nome (Texto)
  - endereço (Texto)
  - receita (Booleano)

#### Relacionamentos:
- Remedios:
  - Cada remédio pertence a um laboratório.
  - Cada remédio é administrado por uma via específica.
  - A tabela Remedios é a entidade principal do sistema, representando os remédios registrados.
- Laboratorios:
  - Cada laboratório pode ter vários remédios associados a ele.
  - A tabela Laboratorios armazena os detalhes sobre os laboratórios que produzem os remédios.
- Via:
  - Cada remédio é administrado por uma via específica.
  - A tabela Via armazena os tipos de vias de administração dos remédios
- Fornecedor:
  - Cada fornecedor pode administrar vários tipos de remédios.
  - Cada fornecedor pode ter negócios com vários laboratórios.
- Farmacia:
  - Cada farmácia pode ser associada com vários fornecedores.
  - Uma farmácia pode possuir inúmeros clientes.
- Cliente:
  - Cada cliente está associado a uma farmácia.
