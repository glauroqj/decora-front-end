Requisitos funcionais

Desenvolver aplicação web contendo os seguintes requisitos:
  - A aplicação deverá estar protegida por login e senha
  - Deverá existir 2 tipos de perfis (ADMIN e USER)
  - Deverá possuir interface para pesquisa dos usuários cadastrados
  - Deverá possuir interface para cadastro dos usuários da aplicação
  - Deverá possuir interface para listar as tarefas
  - Deverá possuir interface para cadastro das tarefas
  - O usuário com acesso ADMIN poderá executar cadastro de outros usuários
  - O usuário com acesso USER poderá executar cadastro de tarefas
  - Deverá ser criado um componente Angular para mostrar os dados da tarefa na listagem
  - Fique livre para melhorar e evoluir os requisitos e funcionalidades


Requisitos não funcionais

Frontend

O frontend deverá ser desenvolvido em AngularJS. Para tanto, deverá ser utilizado o padrão HotTowel (https://github.com/johnpapa/generator-hottowel). 
O HotTowel é um conjunto de boas práticas unidos em uma aplicação modelo pré-configurada. Siga este modelo para a camada de frontend.

Para estilos da interface utilize o bootstrap. Utilizar alguma biblioteca de template conhecida que use o bootstrap como base. Capriche na interface, 
pois a vaga é para front end!

Durante o desenvolvimento levar em consideração boas práticas de projeto em AngularJS JohnPapa, conforme link com guia https://github.com/johnpapa/angular-styleguide.

O módulo frontend deverá se comunicar com o backend utilizando serviços REST com JSON.


Backend

Utilizar o nodejs, e persistir os dados somente em memória ou session do usuário.
 


Build and run

Utilizar gulp (padrão HotTowel) para build do módulo front.