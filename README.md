# TIVIT - Jorge Sampaio

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.tivit.com/">
    <img src="https://www.tivit.com/wp-content/themes/tivit_theme/library/img/logo.png" alt="Logo">
  </a>
  <p>
  <strong>Desafio TIVIT Front-end</strong>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito com](#feito-com)
  - [Demonstração de telas](#demonstra%C3%A7%C3%A3o-telas)
  - [Input Mask](#input-mask)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto
Este projeto visa a criação de um template conforme o layout XD - <a>https://xd.adobe.com/view/1c17060d-ffb2-4fc3-b2f9-169f63521b47-4944/specs/</a> 

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [TypeScript](https://www.typescriptlang.org/) - Ao compreender o JavaScript, o TypeScript economiza tempo na detecção de erros e no fornecimento de correções antes de executar o código;
- [Snap Carousel](https://github.com/meliorence/react-native-snap-carousel) - O carousel é um slideshow para fazer um giro em vários coteúdos, construído com CSS 3D transforms e um pouco de JavaScript. Ele funciona com o uso de imagens, texto ou marcação personalizada. Também possui suporte para controles anterior, próximo e indicadores;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

### Demonstração telas

<img src="https://i.ibb.co/fMDM2v9/teste-Tivit.png?sanitize=false"></br>

### Input Mask
Existem 4 tipos de máscaras no componete Mask.
 - maskString: Limita a 30 caracteres;
 - maskCartaoCredito: Limita a 19 caracteres, sendo 16 numéricos digitados pelo usuário colocando automaticamente um espaço a cada 4 caracteres;
 - maskValidade: Limita a 5 caracteres, sendo 4 numéricos digitados pelo usuário;
 - maskCvv: Limita a 3 caracteres numéricos;

<div align="center">
<img src="https://media0.giphy.com/media/nwGN3UwPu0qI21tgTk/giphy.gif?sanitize=false"></br>
</div>
<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://react-native.rocketseat.dev/)

### Instalação

1. Clonar o projeto utilizando o comando:

```sh
git clone https://github.com/jorgeusjt/testefrontendsp.git
```

2. Depois do projeto baixado entre na pasta do projeto utilizando o comando:

```sh
cd testefrontendsp
```

3. Utilize o comando abaixo para instalar as dependências:
```sh
npm install
```
ou
```sh
yarn
```

4. Por último, comando de execução:

```sh
react-native run-android
```
<p>Com isso o projeto estará com todas as dependências devidamente instaladas e linkadas.</p></br>

## Contato

Jorge Sampaio de Lima - [Github](https://github.com/jorgeusjt) - **jorgelimass@hotmail.com**
