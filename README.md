CT01 – Validação de e-mail e CEP inválidos
Cenário: Usuário tenta avançar no checkout com dados inválidos
Pré-condição: Usuário acessa o site e adiciona um produto ao carrinho
Passos:
Acessar o produto
Adicionar ao carrinho
Ir para checkout
Inserir e-mail inválido (qatestes5412gmail.com)
Inserir CEP inválido (81561691)
Clicar para continuar
Resultado esperado:
Exibir mensagem: "Digite o e-mail em um formato válido"
Exibir mensagem: "Digite um CEP válido"

CT02 – Fluxo de compra com sucesso (parcial)
Cenário: Usuário preenche dados iniciais corretamente
Pré-condição: Produto disponível no site
Passos:
Selecionar produto
Adicionar ao carrinho
Ir para checkout
Inserir e-mail válido (qatestes541@gmail.com)
Inserir CEP válido (65607-480)
Confirmar CEP
Selecionar método de entrega
Resultado esperado:
Sistema aceita os dados
Opções de entrega são exibidas
Usuário consegue prosseguir no checkout

CT03 – Campos obrigatórios vazios
Cenário: Usuário tenta continuar sem preencher dados de entrega
Pré-condição: Usuário já inseriu e-mail e CEP válidos
Passos:
Avançar até o formulário de entrega
Não preencher os campos obrigatórios
Clicar em continuar
Resultado esperado:
Exibir mensagens: "Este campo deve ser preenchido" para os campos obrigatórios
Exibir erro para CPF/CNPJ inválido

CT04 – Dados inválidos (telefone e CPF)
Cenário: Usuário insere informações incorretas
Pré-condição: Usuário no formulário de entrega
Passos:
Preencher nome e sobrenome
Inserir telefone inválido (2512)
Inserir número válido
Inserir CPF inválido (85919471501)
Resultado esperado:
Exibir mensagem de erro para CPF/CNPJ
Exibir mensagem de erro para telefone inválido

CT05 – Dados válidos para entrega
Cenário: Usuário preenche corretamente os dados
Pré-condição: Usuário no formulário de entrega
Passos:
Preencher todos os campos obrigatórios corretamente
Inserir telefone válido
Inserir CPF válido (693.408.090-41)
Continuar
Resultado esperado:
Sistema aceita os dados
Usuário avança para próxima etapa (pagamento)
