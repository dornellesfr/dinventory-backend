
# dInventory

Este projeto tem como objetivo a criação de uma api REST com endpoints para a criação, leitura, manutenção e exclusão de estoques de lojas. A api conta com uma sessão de produtos da loja e sessão de vendas da loja também.


## Aprendizados

Fortaleci meu conhecimento sobre uma arquiterura mais limpa de código e de possibilidade de escalá-la, fortifiquei meu conhecimento sobre TypeScript e também utilizei pela primeira vez o Prisma ORM, o qual adaptei superfácil, sendo uma ótima opção além do sequelize. Meus desafios foram a organização do banco de dados, como torná-lo objetivo e como modelá-lo. Além disso, pensar na estruta geral do código e seus comportamentos foi uma tarefa árdua também para começar algo do zero.


## Rodando localmente

#### Necessário um container mysql ou ter o mysql instalado no seu computador e rodando.

Comando do docker para rodar o mysql:

`
docker run --name diventory -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql
`

Clone o projeto

```bash
  git clone git@github.com:dornellesfr/dinventory-backend.git
```

Entre no diretório do projeto

```bash
  cd dinventory-backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor no ambiente de desenvolvimento

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MYSQL_URL` -> URL de acesso ao banco de dados

`PORT` -> Porta que será executado no seu navegador em ambiente de desenvolvimento

`SECRETJWT` -> palavra secreta para sua aplicação



## Documentação da API

A URL base da API, no momento, rodando em ambiente de produção é: https://diventory-api-production.up.railway.app/

### Recursos

#### `/login`
**Obrigatório.** Este recurso permite fazer o login. Com o retorno esperado, haverá um token de autenticação para uso das próximas rotas.

Alguns recursos estão disponíveis apenas para admin. Você pode entrar em contato comigo caso queira testar ou saber mais sobre:

[Whatsapp](https://api.whatsapp.com/send?phone=5551997463822)

[Instagram](https://www.instagram.com/dornellesfr/)

#### Endpoints da rota /login:
* `POST / ` -> Faz o login retornando um token para autenticação.
    
  Rota livre para qualquer pessoa fazer login.

    Parâmetros pelo body da requisição:
      
      {
        "email": "test@test.com",
        "password": "dattebayo"
      }

    Retorna:
      
      {
        "token": "{tokenvalidandologin}"
      }
      
      * É válido por 5 dias cada token, você pode gerar o seu fazendo a mesma requisição com login e senha.


#### `/store`

Este recurso permite a manipulação total das lojas cadastradas no banco de dados.

#### Endpoints da rota /store:
* `GET / ` -> Faz a consulta para todas as lojas cadastradas.

  Essa rota só pode ser acessada com usuário admininistrador.

    Retorna:

      [
        ...
        {
          "id": 3,
          "name": "Test Store",
          "password": "{encryptedpassword}",
          "admin": false,
          "email": "test@test.com",
          "address": null,
          "phone": null
        }
        ...
      ]
          
* `POST / ` -> Cria uma loja no banco de dados.

  Essa rota só pode ser acessada com usuário admininistrador.

    Parâmetros:

      {
        "email": "test@test.com",
        "name": "Test Store",
        "password": "dattebayo"
      }

    Retorna: 

      {
        "message": "Store created"
      }
    

* `PUT /` -> Atualiza a loja as características das lojas.

  Essa rota só pode ser acessada com usuário admininistrador.

    Parâmetros: 

      {
        "id": 3
      }

  O único obrigatório é esse, o restante é o que você gostaria de trocar, como: password, email, name, phone e address.

    Retorno:

      {
        "message": "Store updated"
      }

* `DELETE /` -> Remove uma loja do banco de dados.

  Essa rota só pode ser acessada com usuário admininistrador.

    Parâmetros: 

      {
        "id": 3
      }
      
    Retorno:

      {
        "message": "Store removed"
      }

#### Endpoints da rota /product:
* `GET / ` -> Faz a consulta de todos os produtos cadastrados.

  Essa rota só pode ser acessada com usuário admininistrador.

    Retorno:

      [
        {
          "id": 1,
          "name": "Teclado mecânico",
          "description": "Teclado antighost com rgb", // nullable
          "price": 175.9,
          "quantity": 20,
          "storeId": 3
        },
        ...
      ]

* `POST / ` -> Cadastra um novo produto na loja selecionada.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros:

      {
        "name": "Mouse sem fio",
        "description": "Mouse óptico sem fio",
        "price": 50,
        "quantity": 10,
        "storeId": 3
      }

    Retorno:

      {
        "message": "Product created"
      }

* `PUT / ` -> Altera um produto da loja selecionada.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros:

      {
        "id": 1,
        "name": "Mouse gamer",
        "description": "Mouse óptico rgb",
        "price": 200,
        "quantity": 10,
        "storeId": 3
      }

    Retorno:

      {
        "message": "Product updated"
      }

* `DELETE /` -> Remove um produto da loja.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros: 

      {
        "id": 1
      }
      
    Retorno:

      {
        "message": "Store removed"
      }

* `GET /{id} ` -> Mostra o produto em específico cadastrado.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetro:

      id -> número do produto


    Se id = 1

    Retorno:

      {
        "id": 1,
        "name": "Teclado mecânico",
        "description": "Teclado antighost com rgb", // nullable
        "price": 175.9,
        "quantity": 20,
        "storeId": 3
      },

* `GET /store/{storeId}` -> Mostra todos produtos cadastrados da loja.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetro:

      storeId -> número da loja a qual se quer todos items

    Retorno:

      [
        {
          "id": 1,
          "name": "Teclado mecânico",
          "description": "Teclado antighost com rgb", // nullable
          "price": 175.9,
          "quantity": 20,
          "storeId": 3
        },
        ...
      ]

#### Endpoints da rota /sale:

* `GET / ` -> Faz a consulta de todas as vendas cadastradas.

  Essa rota só pode ser acessada com usuário admininistrador.

    Retorno:

    [
        {
            "id": 1,
            "date": "2023-05-08T14:42:32.382Z",
            "quantitySold": 1,
            "totalValue": 200,
            "productId": 1,
            "storeId": 3
        }
    ]

* `POST / ` -> Cadastra uma nova venda na loja selecionada.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros:

      {
        "quantitySold": 1,
        "totalValue": 200,
        "productId": 1,
        "storeId": 3
      }

    Retorno:

      {
        "message": "Sale created successfully"
      }

* `PUT / ` -> Altera uma venda da loja selecionada.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros:

        {
            "id": 1,
            "quantitySold": 2,
            "totalValue": 200,
            "productId": 1,
            "storeId": 3
        }

    Retorno:

      {
        "message": "Sale updated successfully"
      }

* `DELETE /` -> Remove uma venda da loja.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetros: 

      {
        "id": 1
      }
      
    Retorno:

      {
        "message": "Sale removed successfully"
      }

* `GET /{id} ` -> Mostra uma venda em específica cadastrada.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetro:

      id da venda


    Se id = 1

    Retorno:

        {
            "id": 1,
            "date": "2023-05-08T14:42:32.382Z",
            "quantitySold": 2,
            "totalValue": 200,
            "productId": 1,
            "storeId": 3
        }

* `GET /store/{storeId}` -> Mostra todas as vendas cadastradas da loja.

  Essa rota pode ser usada por qualquer usuário logado.

    Parâmetro:

      storeId -> número da loja a qual se quer todos items

    Retorno:

      [
          {
              "id": 1,
              "date": "2023-05-08T14:42:32.382Z",
              "quantitySold": 2,
              "totalValue": 200,
              "productId": 1,
              "storeId": 3,
              "product": {
              "id": 1,
              "name": "Mouse gamer",
              "description": "Mouse óptico rgb",
              "price": 200,
              "quantity": 5,
              "storeId": 3
              }
          }
          ...
      ]
## Stack utilizada

**Back-end:** Node, Express, TypeScript, Prisma e MySQL

