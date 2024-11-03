# Middleware é um software que permite que diferentes aplicações se comuniquem umas com as outras,
O Middleware atua como uma ponte entre diversas tecnologias, ferramentas e bancos de dados.
Por exemplo, uma aplicação de frontend do Windows envia e recebe dados de um servidor de backend do Linux.

Tipos mais comuns de Middleare
Middleware de banco de dados: Centraliza a comunicação e troca de informações com bancos de dados de diferentes aplicações. 
Middleware de servidor de aplicativos: Garante a comunicação rápida e direta entre diversas aplicações. 
Middleware de mensagens: Gerencia a troca de mensagens assíncronas. 
Middleware de objeto: Facilita a comunicação entre objetos distribuídos. 
Middleware de transação: Garante a consistência de transações distribuídas. 
Middleware de comunicação: Lida com a troca de dados entre sistemas. 
Middleware de web ou online: Especial para aplicações e sistemas web. 
Middleware de processamento de transações: Centraliza o processamento de transações de diferentes aplicações. 

Exemplos de uso em aplicações Node.js
// Middleware #1 app. use((req, res, next) => ...
// Middleware #2 app. get('/', (req, res) => ...
// Middleware #3 app. get('/', (req, res) => ...
// Middleware #1 app. use((req, res, next) => ...