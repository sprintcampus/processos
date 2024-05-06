 # Diagrama Back end
 
![Diagrama back end](https://github.com/sprintcampus/processos/assets/65160454/08b4f576-462b-4ccb-b081-ad97681cf8bf)

O diagrama apresenta um modelo de banco de dados que gerencia informações sobre remédios, laboratórios e vias de administração de medicamentos. Existem três entidades principais representadas, cada uma com seus atributos e relações.

A entidade "Remédios" é a peça central, contendo atributos como id (chave primária), nome, lote_id (chave estrangeira), via, quantidade, validade, laboratorio_id (chave estrangeira), ativo e preço. Essa entidade armazena dados cruciais sobre os medicamentos, como seu nome, lote, via de administração, quantidade em estoque, validade, laboratório responsável pela produção, status de ativação e preço.

A entidade "Laboratórios" está conectada à entidade "Remédios" através da chave estrangeira laboratorio_id. Ela contém uma lista ENUMERATION com os laboratórios disponíveis, como "MEDELEY" e "LABEXEMP". Essa relação indica que cada remédio está associado a um laboratório específico, permitindo a identificação do fabricante de cada medicamento.

A entidade "Via" também está relacionada à entidade "Remédios" através do atributo "via". Ela contém uma lista ENUMERATION com diferentes vias de administração, como "ORAL", "NASAL", "INTRAMUSCULAR" e "RETAL". Esta relação indica como cada medicamento pode ser administrado, fornecendo informações úteis para profissionais de saúde e pacientes.

Algumas lições de boas práticas que podem ser associadas a este diagrama incluem:
- Utilização de chaves primárias e estrangeiras: Garante a integridade referencial dos dados, prevenindo inconsistências e erros no banco de dados.
- Listas ENUMERATION: Padroniza os valores aceitos para certos atributos, como laboratórios e vias de administração, promovendo consistência e facilitando a validação dos dados.
- Representação clara das relações entre entidades: Facilita a compreensão do modelo de dados e a manutenção do banco de dados, tornando-o mais intuitivo para desenvolvedores e administradores.


Entidades e Atributos:
-	A imagem mostra três caixas representando entidades ou tabelas em um banco de dados.
-	A caixa superior está rotulada como “Remédios” e contém os seguintes atributos:
    -	id (chave primária)
    -	nome (VARCHAR com tamanho máximo de 50 caracteres)
    -	lote_id (chave estrangeira)
    -	via (VARCHAR com tamanho máximo de 50 caracteres)
    -	quantidade (inteiro com limite de 500)
    -	validade (data)
    -	laboratorio_id (chave estrangeira)
    -	ativo (booleano)
    -	preço (numérico com 7 dígitos inteiros e 2 casas decimais)
-	As duas caixas inferiores estão conectadas à caixa “Remédios” por linhas que indicam relações 1 para muitos (1…*).
-	A caixa inferior esquerda está rotulada como “Laboratórios” e contém uma lista interna chamada ENUMERATION com os itens “MEDELEY” e “LABEXEMP”.
-	A caixa inferior direita está rotulada como “Via” e também possui uma lista ENUMERATION com os itens “ORAL”, “NASAL”, “INTRAMUSCULAR” e “RETAL”.

Relacionamentos:
-	O relacionamento entre “Remedios” e “Laboratorios” é representado pela chave estrangeira laboratorio_id.
-	O relacionamento entre “Remédios” e “Via” é representado pela coluna via.
