import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

/**
 * div pra tudo!
 * Não possui semântica  (exemplo h1 e text, isso não existe).
*/

/**
 * Sempre vai receber no style um estilo onde será definido qual será a maneira de estilizar
 * o texto e as funções da aplicação.
 * StyleSheet.create => Criação dos estilos. (Criar função utilizando o create).
 */

/**
 * Flexbox: todos são DISPLAY FLEX por padrão!!!!!
 */

/**
 * Propriedades: sem hífem (background-color(css) => backgroundColor (reactNative)
 * colocar os valores das propriedades entre aspas (simpes ou duplas)
 */

/**
 * Herança de estilo: NÃO EXISTE HERANÇA DE ESTILOS!! Cada componente possui seu estilo. 
 * (estilização propria)
 */


import Routes from './src/routes';
export default function App() {
  return (
    <Routes />
  );
}
