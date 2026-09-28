================================================================================
                        CRUD - SISTEMA DE CURSOS
================================================================================

Sistema web com login, registro de usuarios e cadastro (CRUD) de alunos,
professores e cursos. Feito com HTML, CSS e JavaScript puro, sem frameworks e
sem backend: os dados ficam salvos no localStorage do navegador.

Projeto educacional, criado para praticar DOM, eventos, formularios e
persistencia local.

================================================================================
1. FUNCIONALIDADES
================================================================================

  Autenticacao
  ------------
  [+] Registro de usuario (CPF, nome, e-mail e senha)
  [+] Bloqueio de CPF duplicado
  [+] Login com validacao de CPF e senha
  [+] Redirecionamento para a tela de alunos apos o login
  [+] Mensagens de sucesso e erro na propria tela

  Cadastros
  ---------
  Modulo        Campos                                   Acoes
  ------------  ---------------------------------------  ----------------------
  Alunos        Nome, e-mail, CPF                        Criar, listar, alterar
                                                         e excluir
  Professores   CPF, nome, e-mail                        Criar, listar, alterar
                                                         e excluir
  Cursos        Nome, professor, data de inicio e fim    Criar, listar, alterar
                                                         e excluir

  Outros
  ------
  [+] Menu de navegacao entre as telas, com botao Sair
  [+] Aviso quando algum campo obrigatorio esta vazio
  [+] Layout responsivo


================================================================================
2. TECNOLOGIAS
================================================================================

  * HTML5 ................ estrutura das paginas
  * CSS3 ................. layout (Flexbox e Grid), animacoes e transicoes
  * JavaScript (ES6+) .... logica, DOM e eventos
  * localStorage ......... persistencia dos dados no navegador

  Nao ha dependencias externas.


================================================================================
3. ESTRUTURA DO PROJETO
================================================================================

  CRUD---Sistema-de-Cursos/
  |
  |-- alunos/
  |     |-- alunos.html            Tela de cadastro de alunos
  |     `-- scriptAlunos.js        CRUD de alunos
  |
  |-- css/
  |     `-- style.css              Estilos do projeto
  |
  |-- cursos/
  |     |-- cursos.html            Tela de cadastro de cursos
  |     `-- scriptCursos.js        CRUD de cursos
  |
  |-- login/
  |     |-- index.html             Tela de login (pagina inicial)
  |     |-- register.html          Tela de registro
  |     `-- validacao.js           Registro e validacao de login
  |
  `-- professores/
        |-- professores.html       Tela de cadastro de professores
        `-- scriptProfessores.js   CRUD de professores


================================================================================
4. COMO EXECUTAR
================================================================================

  Nao e preciso instalar nada.

  1) Clone o repositorio:

       git clone https://github.com/luiznasc-es/CRUD---Sistema-de-Cursos.git
       cd CRUD---Sistema-de-Cursos

  2) Abra o arquivo  login/index.html

================================================================================
5. COMO USAR
================================================================================

  1) Abra login/index.html.
  2) Clique em "Registrar-se" e crie sua conta.
  3) Depois do registro voce volta ao login. Entre com CPF e senha.
  4) Voce sera levado a tela de Alunos. Use o menu para ir para Professores
     e Cursos.
  5) Em cada tela:
       - Criar   : preencha o formulario e clique no botao de envio.
       - Editar  : clique em "Carregar" (ou "Atualizar") no card, altere os
                   campos e clique em "Alterar".
       - Excluir : clique em "Excluir" no card.
  6) Para voltar ao login, clique em "Sair" no canto direito do menu.

  Obs: É preciso registrar um usuario antes do primeiro login. Os dados
  existem somente no navegador em que foram criados.


================================================================================
6. ARMAZENAMENTO DE DADOS
================================================================================

  Os dados sao guardados em JSON no localStorage, em quatro chaves:

  Chave         Formato de cada item
  ------------  ------------------------------------------------
  usuarios      { cpf, senha, nome, email }
  alunos        { nome, email, cpf }
  professores   { cpf, nome, email }
  cursos        { nome, professor, dataInicio, dataFim }

  Para ver os dados: F12 > Application > Local Storage (Chrome/Edge) ou
  Storage > Local Storage (Firefox).

  Para apagar tudo, rode no console do navegador:

       localStorage.clear();


================================================================================
7. AUTENTICACAO
================================================================================

  A logica fica em login/validacao.js:

  Funcao                                        O que faz
  --------------------------------------------  -----------------------------
  obterUsuarios()                               Le os usuarios do localStorage
  salvarUsuarios(usuarios)                      Grava a lista de usuarios
  registrarUsuario(cpf, senha, nome, email)     Cadastra, recusando CPF repetido
  validarLogin(cpf, senha)                      Busca usuario com CPF e senha
  exibirMensagem(texto, sucesso)                Mostra aviso verde ou vermelho
  HandleRegister(event)                         Trata o formulario de registro
  HandleLogin(event)                            Trata o login e redireciona

  Fluxo do login:

       Formulario (onsubmit)
              |
              v
         HandleLogin
              |
              v
        validarLogin
          |         |
     correto       incorreto
          |         |
          v         v
   ../alunos/     mensagem
   alunos.html    de erro


================================================================================
8. LIMITACOES E MELHORIAS FUTURAS
================================================================================

  Por ser um projeto de estudo, algumas coisas sao simples de proposito.
  Cada limitacao abaixo indica a melhoria correspondente.

  Limitacao                                  Melhoria futura
  -----------------------------------------  ---------------------------------
  Sem backend: dados ficam so no navegador   API e banco de dados
  Senhas salvas em texto puro                Criptografia
  Sem controle de sessao: as paginas         Sessao de usuario e protecao
  internas abrem direto pela URL             das paginas internas
  CPF sem validacao nem mascara              Validacao real e mascara de entrada
  Professor do curso e texto livre           Escolher entre os professores
                                             cadastrados
  Alunos nao se ligam a cursos               Matricula de alunos em cursos
  Conteudo inserido via innerHTML            Sanitizacao do conteudo exibido
  Excluir remove sem perguntar               Confirmacao antes de excluir
  Listas sem busca                           Busca e filtros nas listagens

================================================================================
