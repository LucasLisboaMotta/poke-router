# Poke-Router

Olá galera, bem-vindos a revisão sobre ciclos de vida dos componentes, react router e localstorage.

Essa revisão faz parte do `Projeto Vale a Pena Ver de Novo` proposto pelos embaixas da turma 26.

A ideia é fazer um mini-projeto, que utiliza todos os 3 conceitos citados acima. Esse projeto sera resolvido durante a aula de revisão, e a gravação da aula sera disponibilizado pelo slack. Porem caso vocês queiram fazer o projeto por conta própria, sinta-se livres para clona-los e criar uma versão de vocês em sua máquina.

### API `https://pokeapi.co`

Neste projeto vou utilizar a PokeAPI, ela é uma api livre de pokemon. Recomendo vocês olharem essa API, pois ela tem muitos tipos de requisições e é ótima para fazer projetos pessoais e aprender novos conteúdos.



## 1 - Criar páginas do projeto e aplicá-las no componente App

Devemos criar as seguintes paginas:
```
PokeList
PokeDetail
PokeFavorites
```
Em seguida todas elas devem ser aplicadas no APP Cada uma em sua devida rota:

Rota `/list` com a pagina `PokeList`

Rota `/detail/:id` com a pagina  `PokeDetail`

Rota `/favorites` com a pagina `PokeFavorites`

# 2 - Criar um header de navegação

Deve ser criado um header que navegue para as paginas `/list` e `/favorites`

## 3 - Listar todos os pokemons na pagina `PokeList`

Para isso, voce deve utilizar a rota:

`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`

O Retorno sera algo semelhante a isso:

```json
{
  "count": 1154,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    ...
  ]
}
```

Para auxiliar nesse requisito, ja tem um componente pre-pronto chamado `Card`, nele basta inserir as propriedades `name` e `url` para que renderize o pokemon na tela.


## 4 - Criar um link do Card para a pagina de detalhes

Você devera alterar o componente Card para que ao clicar nele, a rota seja alterada para a pagina `/detail/${id}`

## 5 - Deverá ser implementado a lógica para renderizar o pokemon através do id da URL

Na paginá de detalhes, deve ser feito a requisição da api com base no id da url. A requisição deve ser feito na rota:

`https://pokeapi.co/api/v2/pokemon/${id}`

O retorno deverá ser algo semelhante a isso:

```json
{
  "abilities": [⇔],
  "base_experience": 101,
  "forms": [⇔],
  "game_indices": [⇔],
  "height": [⇔],
  "held_items": [⇔],
  "id": 132,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
  "moves": [⇔],
  "name": "ditto",
  "order": 214,
  "past_types": [⇔],
  "species": {⇔},
  "sprites": {⇔},
  "stats": [⇔],
  "types": [⇔],
  "weight": 40
}
```

Para isso, utilize o componente `CardDetail` para te auxiliar. Ele precisa das propriedades `name`, `sprites`,  `types`, `stats`. Todas essas propriedades são fornecidas pela API.

## 6 - Criar logica para favoritar o pokemon no localStorage

Na pagina de detalhes, deve ser criado um input que favorita o pokemon, e o mantem favoritado mesmo apos reload da pagina.

## 7 - Criar logica para desfavoritar o pokemon no localStorage

Na pagina de detalhes, o input deve ter a logica de remover o pokemon favorito do localStorage

## 8 - Listar todos os pokemons favoritos na pagina Favorites

Na pagina de favoritos, deve ser listado todos os pokemons presentes no localStorage
