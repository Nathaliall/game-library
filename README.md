# GAMEHUB :rocket: :rocket:
<ol>
        <li><a href="#sobre">Sobre</a></li>
        <li> <a href="#especificacoes">Especificações</a></li>
        <li> <a href="#comorodaroprojeto">Como Rodar o Projeto?</a> </li>
</ol>

<h2 id="sobre">Sobre</h2> 

Tela Inicial
![image](https://github.com/Nathaliall/game-library/assets/142734660/4fd816a4-2cbe-4477-909f-e5904e598163)

Tela de Jogos
![image](https://github.com/Nathaliall/game-library/assets/142734660/342e782a-3d27-4e5b-b3c9-e15e8b32562b)

Tela de Plataformas
![image](https://github.com/Nathaliall/game-library/assets/142734660/f48e03e9-4f1e-4c65-b4bc-64d91de12b1a)

<h2 id="especificacoes">Especificações</h2> 

<b>--></b> No backend utilizamos: 
    <ul>
    <li>Node Js v.18.xx.x</li>
    <li>PostgreSql</li>
    <li>Docker Desktop</li>
    </ul>
 <b>--></b> No frontend utilizamos: 
      <ul>
    <li> bootstrap</li>
    <li> react</li>
    </ul>
    
 <b>--></b> Você pode verificar todas as dependências utilizadas no projeto no arquivo Package.json tanto na pasta de backend quanto na pasta de frontend. 
    
 
<h2 id="comorodaroprojeto">Como rodar o projeto?</h2>

<b>Você precisará:</b>
<ul>
    <li>Node JS LTS (obrigatório)</li>
    <li>Visual Studio Code (recomendado)</li>
    <li>Git bash </li>
    <li>Windowns 10 ou superior</li>
    <li>Windowns 10 ou superior</li>
</ul>

``` bash
#Clone este repositório no terminal:
$ git clone 
``` 
*OBS: Para que a aplicação funcione como esperado, você deve deixar o frontend e o backend rodando simultaneamente (abra dois terminais):*

``` bash

#Com o primeiro terminal, abra a pasta backend e execute o comando:
$ npm install
ou
$ yarn install

#Em seguida inicie o container do docker através do comando abaixo:
$ npm run db:inicio

#Em seguida, com o container rodando, popule o banco do docker através do comando abaixo:
$ npm run db:popular


#Em seguida inicie a aplicação através do comando abaixo:
$ npm start
ou
$ yarn start

#A aplicação (backend) será aberta na porta:3333 - acesse http://localhost:3333. 
```
Agora que o backend está ativo, é necessário repetir o processo para o frontend: 

```bash
#No segundo terminal, abra a pasta frontend e execute o comando:
$ npm install
ou
$ yarn install

#Em seguida inicie a aplicação através do comando abaixo:
$ npm start
ou
$ yarn start

#A aplicação(frontend) será aberta na porta:3000 - acesse http://localhost:3000. 
```
