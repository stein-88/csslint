## Objetivo

Atraves desse repositório será possível.

- Deixa o código pronto para ser usado em `production`.

## Install

`yarn install`

## Usage

- Os arquivos CSS devem estar na pasta `src/styles`

Production sera gerado dessa forma:
assets/style/ ----> .css

Comandos:

- `yarn checkcss` para verificar arquivos CSS.
  - Procura os arquivos CSS na pasta `filestocheck/styles`.
  - Verifica erros no CSS.
  - Minimifica o CSS.
  - Exporta para a pasta `assets/style`

- `yarn default`
  - Executa o comando checkcss como padrão.

Caso deseja verificar a documentação do GULP em que essa documentação foi baseada verifique o seguinte [website](https://github.com/gulpjs/gulp)