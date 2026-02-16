# SPA Breaking-News

Este projeto é uma SPA(Single Page Aplication), desenvolvida utilizando React e Vite, que simula um sistema completo de notícias, podendo adicionar, excluir e editar usuário e notícias. Focada em demonstrar práticas modernas de desenvolvimento como validação de esquemas, gerenciamento de cookies para autenticação e estilização dinâmica.

## 🛠️ Tecnologias e Decisões Técnicas

**Vite**: Escolhido como build tool pela rapidez no HMR (Hot Module Replacement) e configuração simplificada em comparação ao CRA.

**Zod**: Implementado para garantir a integridade dos dados. Utilizado na validação de formulários.

**Styled Components**: Utilizado para manter o CSS isolado por componente e permitir a criação de temas dinâmicos baseados nas props do React.

**js-cookie**: Gerenciamento simplificado de cookies para persistência de tokens de autenticação do usuário com foco em segurança.

**Axios**: Cliente HTTP escolhido para facilitar a criação de instâncias personalizadas, interceptores de requisição (para injetar tokens) e tratamento global de erros.

## ✨ Funcionalidades Principais

- Validação de formulários em tempo real com feedback de erro.
- Persistência de sessão utilizando cookies.
- Interface responsiva com componentes estilizados dinâmicos.
- Integração com API própria utilizando interceptores.
- [API que desenvolvi e utilizei](https://github.com/AngeloSilva34/API-Breaking-News)
