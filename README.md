
## Documentação da API

A URL base da API no momento é: https://diventory-api-production.up.railway.app/

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
        "name": "Test Store",
        "email": "test@test.com",
        "password": "dattebayo"
      }

    Retorna:
      
      {
        "message": "Store created"
      }


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
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAdGVzdC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlN1ZYZWJUQlV5Q1NkLkRVd1ZuMXh1bWNBMDF1YkltcGhJQVN0bVltL3NtU1M1eXk3YVAuMiIsIm5hbWUiOiJUZXN0IFN0b3JlIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2ODM0MDc4MDgsImV4cCI6MTY4Mzc1MzQwOH0.NERhRtOesimQuUVi41kHmSUpe3i6-OL941HQL9G8wc0"
      }
    
    * É válido por 5 dias cada token, você pode gerar o seu fazendo a mesma requisição com login e senha.

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
