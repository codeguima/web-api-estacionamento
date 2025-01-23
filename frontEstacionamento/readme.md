# Sistema de Compra e Venda

Este projeto consiste no desenvolvimento de um sistema de compra e venda baseado em **JavaScript/Node.js**, projetado para atender pequenas e médias empresas, oferecendo funcionalidades robustas e eficientes para operações comerciais, arquitetura similar ao SAP.

## 📋 Funcionalidades

- **Controle de Transações**: Gerenciamento de operações de compra e venda.
- **Gestão Financeira**: Controle de contas a pagar e a receber.
- **Validações Automáticas**: Garantia da integridade das transações.
- **Segurança Avançada**:
  - Autenticação JWT.
  - Criptografia de senhas com **Bcrypt**.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js
- **Banco de Dados**: MySQL
- **ORM**: Sequelize
- **Autenticação**: JWT
- **Segurança**: Bcrypt para criptografia de senhas

## 🏷️ Entidades Representadas

- **Nota Fiscal**: Registra a transação de compra ou venda, incluindo informações sobre o valor e os itens envolvidos.
- **Serviços**: Representa os serviços oferecidos no sistema, como manutenção, suporte ou outros serviços relacionados às transações.
- **Cliente**: Contém informações sobre os clientes, como nome, endereço e detalhes de contato.
- **Ticket**: Registra o processo de compra e venda, incluindo detalhes como número de transação e status.
- **Veículo**: Representa os veículos relacionados às transações, incluindo informações como marca, modelo e ano.
- **Marca**: Representa a marca de um veículo ou produto.
- **Modelo**: Representa o modelo de um veículo ou produto.
- **Período
