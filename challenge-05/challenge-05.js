/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0, '', 'dondon', undefined, 666, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function rec_array(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
rec_array(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function index_arr(arr, id){
	return arr[id];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var difArray = [1, 'string', undefined, true, -0, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(index_arr(difArray, 0));	// 1
console.log(index_arr(difArray, 1)); // 'string'
console.log(index_arr(difArray, 2)); // undefined
console.log(index_arr(difArray, 3)); // true
console.log(index_arr(difArray, 4)); // -0
console.log(index_arr(difArray, 5)); // NaN
 
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
	var allBooks = {
		'book1':{qtdPagina:44, autor:'ze', editora:'indie'},
		'book2':{qtdPagina:22, autor:'juca', editora:'zaza'},
		'book3':{qtdPagina:3333, autor:'tiao', editora:'texas'}
	}

	return bookName ? allBooks[bookName] : allBooks;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());/*{
		'book1':{qtdPagina:44, autor:'ze', editora:'indie'},
		'book2':{qtdPagina:22, autor:'juca', editora:'zaza'},
		'book3':{qtdPagina:3333, autor:'tiao', editora:'texas'}
		  }*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'book3';
console.log( 'O livro' + bookName + ' tem ' + book(bookName).qtdPagina  + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');
