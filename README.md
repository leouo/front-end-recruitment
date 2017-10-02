# Netshoes Cart Test - Leonardo Morais

## Sobre o desenvolvimento deste teste

Para o desenvolvimento deste teste foi utilizado [React](https://facebook.github.io/react/) para componentizar a aplicação front-end e [Redux](http://redux.js.org/) para controle de estado da mesma. Os testes foram feitos com [Jest](https://facebook.github.io/jest/), [Chai](http://chaijs.com/) e [Enzyme](https://github.com/airbnb/enzyme) para os validar os componentes react.

## Configurações necessarias para execução

### Dependências globais

Instale todas as dependências globais através do terminal:

```cmd
npm i -g babel-eslint@7.2.3 cross-env@5.0.0 identity-obj-proxy@3.0.0 jest@20.0.4 semistandard@11.0.0 webpack@3.5.3 webpack-dev-server@2.7.1 yarn@0.27.5
```

### Instale o projeto

Após clonar o repositório, acesse o diretório do projeto e execute o comando `yarn` no terminal.

## Como subir a API de produtos

Acesse o diretório `server` e execute o comando `yarn start` no terminal.

## Como subir a aplicação

Vá para o diretório do projeto e execute o comando `yarn start` no terminal.

Após o webpack subir, acesse pelo seu navegador http://localhost:8080

## Rodando os testes

No diretório do projeto, execute o comando `yarn test:watch` no terminal.