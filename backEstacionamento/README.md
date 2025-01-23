# 🅿️ Backend de Totem de Estacionamento  

Este é o backend de um sistema de totem de estacionamento desenvolvido em **ASP.NET Core 6.0** com **SQLite**. O sistema é projetado para gerenciar o fluxo de veículos, emitir notas fiscais, calcular períodos de estacionamento e gerenciar serviços adicionais, como estética automotiva.  

---

## 📋 Funcionalidades  

- **Gerenciamento de Clientes**: Cadastro, consulta e atualização de informações de clientes.  
- **Controle de Veículos**: Registro de veículos, incluindo marca e modelo.  
- **Emissão de Tickets**: Geração de tickets para entrada e saída de veículos.  
- **Cálculo de Período**: Determinação do tempo de permanência no estacionamento e cálculo automático de valores.  
- **Gestão de Serviços**: Controle dos serviços adicionais utilizados pelo veículo, como lavagem, polimento, entre outros.  
- **Emissão de Notas Fiscais**: Registro e emissão de notas fiscais para serviços e períodos de estacionamento.  

---

## 🛠️ Tecnologias Utilizadas  

- **Framework**: ASP.NET Core 6.0  
- **Banco de Dados**: SQLite  
- **ORM**: Entity Framework Core  
- **Arquitetura**: Clean Architecture com separação de responsabilidades.  

---

## 🗂️ Estrutura do Banco de Dados  

### Entidades  

1. **Cliente**  
   - Nome  
   - CPF/CNPJ  
   - Contato  

2. **Veículo**  
   - Placa  
   - Marca  
   - Modelo  

3. **Marca**  
   - Nome  

4. **Modelo**  
   - Nome  
   - Marca (Relacionamento)  

5. **Ticket**  
   - Código do Ticket  
   - Data/Hora de Entrada  
   - Data/Hora de Saída  
   - Cliente (Relacionamento)  
   - Veículo (Relacionamento)  

6. **Período**  
   - Tempo Total (calculado com base na entrada e saída)  
   - Valor Cobrado  

7. **Serviço**  
   - Nome do Serviço  
   - Preço  

8. **Nota Fiscal**  
   - Número da Nota  
   - Cliente (Relacionamento)  
   - Serviços (Relacionamento)  
   - Valor Total  

---

## 🚀 Como Executar  

### Pré-requisitos  

- .NET 6.0 SDK  
- SQLite  

### Passos  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/backend-estacionamento.git
   cd backend-estacionamento
