Este projeto utiliza o Cypress para validar os principais fluxos de um e-commerce de roupas, garantindo a qualidade da experiência do usuário.
--


01- Validação de e-mail e CEP inválidos
-
Verifica mensagens de erro ao inserir:

E-mail em formato inválido

CEP inválido

Resultado esperado: Exibição de mensagens de validação apropriadas

02-Fluxo inicial de compra com sucesso
-
Simula:

Seleção de produto

Adição ao carrinho

Preenchimento correto de e-mail e CEP

Escolha do método de entrega

Resultado esperado: Usuário consegue avançar no checkout

03-Validação de campos obrigatórios vazios
-
Testa envio do formulário sem preencher dados de entrega

Resultado esperado: Mensagens de "Este campo deve ser preenchido" são exibidas

04-Validação de dados inválidos (telefone e CPF)
-
Insere:

Telefone inválido

CPF inválido

Resultado esperado: Sistema bloqueia avanço e exibe erros de validação

05-Preenchimento correto dos dados de entrega
-
Preenche todos os campos obrigatórios com dados válidos

Resultado esperado: Usuário avança para a etapa de pagamento
