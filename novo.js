var crawlerjs = require('crawler-js');
 
var worlds = {
  interval: 100,
  getSample: 'http://informevagaspe.blogspot.com.br',
  get: 'http://informevagaspe.blogspot.com.br',
  preview: 0,
  extractors: [
    {
      selector: 'div.post-body.entry-content',
      callback: function(err, html, url, response){
        //console.log('Crawled url:');
        //console.log(url);
        // console.log(response); // If you need see more details about request
        if(!err){
          data = {};
           data.aqui = html.text();
	   data.titulo = html.children('div').text();
          /*data.nome = html.children('section').children('a').children('h1').text();
          data.imagem = html.children('div').eq(0).children('a').attr('href');
          data.banda = html.children('p').eq(0).children('a').text() + "," + html.children('p').eq(1).children('a').text();
          //data.banda2 = html.children('p').eq(1).children('a').text();
          data.dataInicio = html.children('span').eq(1).children('span').eq(0).attr('content');
          data.dataFim = html.children('span').eq(1).children('span').eq(1).attr('content');
          data.hora = html.children('span').eq(1).children('time').text();
          //data.carro = html.children('p.OLXad-list-price').text();
          //data.teste = html.children('a').attr('href');
          if(typeof data.world == 'undefined'){
            delete data.world;
          }
	*/
          console.log(data);
	  console.log('teste');
        }else{
          //console.log(err);
        }
      }
    }
  ]
}
 
crawlerjs(worlds);
