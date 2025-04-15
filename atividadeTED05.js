const DATA = '[{ "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"} ]';
 
 function getJsonObjects() {
     return JSON.parse(DATA)
 }
 
 function imprimeListaAlunosPassados(listaDeAlunosMedia) {
     const passados = listaDeAlunosMedia.filter((aluno) => {
         return aluno.media > 6.9;
     });
 
     return passados;
 }
 
 function imprimeListaAlunosMedia(listaDeAlunos) {
     const alunosMedia = listaDeAlunos.map((valor) => {
         let somaNotas = Number(valor.notas.reduce((acc, val) => {
             return acc + val;
         }, 0));
         let media = parseFloat(somaNotas / Number(valor.notas.length));
         const alunoMedia = {
             nome: valor.nome,
             media: media,
             curso: valor.curso
         }
         return alunoMedia
     });
 
     return alunosMedia;
 }
 
 const dados = getJsonObjects();
 const listaComMedia = imprimeListaAlunosMedia(dados);
 const listaDeAlunosPassados = imprimeListaAlunosPassados(listaComMedia);
 
 listaDeAlunosPassados.forEach(aluno => {
     console.log(`O Aluno ${ aluno.nome } passou com a média ${ aluno.media.toFixed(2) } no curso ${ aluno.curso }`);
 });