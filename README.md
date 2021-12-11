<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Criação do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programação que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Também utilizando a integração do Prisma e Postgresql.

## Installation

Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto está rodando, entre com o comando:

```bash
npm run start:dev
```

Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde contém arquivos `.js`, `.map` e `.d.ts.

Explorando um pouco a estrutura do NestJS, percebemos que temos 5 arquivos que foram gerados automaticamente dentro da pasta src: 

![img](https://blueedtech.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mj_r__f7dzSt2HUbwjg%2Fuploads%2FSzHtCS9EudOxrUvSywZr%2Fimg10.PNG?alt=media&token=9e3d8e21-772e-4992-b3e2-90260bacd047)

São eles: 

- app.controller.spec.ts, 
- app.controller.ts, 
- app.module.ts, 
- app.service.ts 
- E dentro dessa aplicação temos o arquivo mais importante que é o "coração" do projeto o main.ts.

## Neste projeto:

Para este projeto foram criadas 3 pastas distintas dentro da pasta `src` são elas:

- Pasta Filmes.
- Pasta Genero.
- Pasta Participante.

Para criação das pastas é necessario rodar o comando `nest g resource-nome da pasta` para criação de  cada uma delas, exemplo:

```basic
nest g resource filmes
```

Com esse comando havera a criação da pasta no caso (filmes) e dentro dela terá todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

Rode o mesmo comando para criação das outras duas pastas.

## Algumas Validações Importantes

Rode estes dois comandos:

```bash
npm i --save class-validator class-transformer
```

```bash
npm i --save helmet
```

 E faça as alterações necessarias para que seu codigo fique desta maneira:

```javascript
import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();

```

## Prisma

Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

```bash
npm install prisma --save-dev
```

```basic
npx prisma init
```

```bash
npm install @prisma/client
```

Este comando é para gerar a tabela do schema.prisma no banco do Postgre :

```bash
npx prrisma generate
```

Este é para dar um push na tabela:

```bash
npx prisma db push
```

Este comando é para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na versão beta:

```
npx prisma studio
```

## Rotas

**Temos 3 rotas principais:**

`/filmes.`

`/genero.`

`/participante`.

**Dentro de cada rota temos um CRUD completo criado com os Decorator:**

 `@POst()` 	**Cada uma das rotas principais tem o seu:**

```javascript
@Post()
  async create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.createPrisma(createFilmeDto);
  }
```

```javascript
@Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.createPrisma(createGeneroDto);
  }

```

```javascript
@Post()
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participanteService.createPrisma(createParticipanteDto);
  }
```



 `@Patch(':id') ` 	**Cada uma das rotas principais tem o seu:**

```javascript
 @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.updatePrisma(+id, updateFilmeDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.updatePrisma(+id, updateGeneroDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipanteDto: UpdateParticipanteDto) {
    return this.participanteService.updatePrisma(+id, updateParticipanteDto);
  }
```

`@Delete`()  	**cada rota principal tem o seu:**

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.removePrisma(+id);
  }
```

```javascript
 @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participanteService.removePrisma(+id);
  }
```

`@Get `() 	  ***cada rota principal tem o seu:***

```javascript
@Get()
  findAll() {
    return this.filmesService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.generoService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.participanteService.findAllPrisma();
  }
```

`@Get(':id')`  ***cada rota principal tem o seu:***

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOnePrisma(+id);
  }
```

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOnePrisma(+id);
  }
```

1. ```javascript
   @Get(':id')
     findOne(@Param('id') id: string) {
       return this.participanteService.findOnePrisma(+id);
     }
   ```

**Post  rota** `/genero` , **no Thunder:**			 

- ​	**Usado para adicionar um genero de filmes no banco de dados local.**
- ​    **Para adicionar um genero dentro do banco, necessita passar todos os dados com suas devidas informações a seguir no exemplo:

```javascript
 "id": 1,           //Number
"nome": "comédia"   //String
```

**Post  rota** `/filmes` , **no Thunder:**

**`"generoid" neste campo sera feito a ligação do filme ao Genero que cadastramos logo acimma. Mas para isso devemos saber qual o ID do genero comedia e colocar neste campo generoid de filmes.`**

```javascript
  "id": 1                          //Number
  "nome": "Vovozona",              //String 
  "imagem": "teste.jpg",           //String?
  "data_lancamento": "25/11/2006", //String
  "tempo_duracao": 110,            //Number
  "generoid": 1                    //Number
```

**Post  rota** `/participante , **no Thunder:**

**`"filmeid" neste campo sera feito a ligação do participante ao Filme que cadastramos logo acimma. Mas para isso devemos saber qual o ID do Filme que criamos e colocar neste campo filmeid de participante.`**

```javascript
  "nome": "Wiliam",                   //String
  "imagem": "teste1.jpg",             //String?
  "data_nascimento": "25/02/1980",    //String
  "ator": "Pedro, Duda, Léo",         //String
  "filmeid": 1                        //Int
```

* **Todos os `id` são autoincrement (criado sozinho, não precisa passar)**

## Running the app

```bash
# Use este comando para rodar o projeto
$ npm run start:dev
```

## Clonar repositório

git clone https://github.com/wellingtonnascimentto/Projeto3_final_Mod3_backend



## Autor

**Wellington Nascimento**



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## 

Nest is [MIT licensed](LICENSE).



