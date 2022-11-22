# **Becarefuliate Front**
Para levantar el Front seguir los siguientes pasos:

1. Clonar el repositorio.
    ```sh
    $ git clone https://github.com/Becarfuliate/Becarefuliate-Front.git
    ```
2. Ubicarse en el directorio my-app en Becarefuliate-Front.
    ```sh
    $ cd Becarefuliate-Front/my-app/
    ```
    > (Donde se ubican los directorios de la estructura.)
3. De ser necesario, instalar las librerías necesarias.
    ```sh
    $ npm install
    ```
    Si tienes problemas para instalar sweetalert, usar la siguiente línea:
    ```sh
    npm install --save sweetalert -f
    ```
4. Levantar el Front.
    ```sh
    $ npm start
    ```

# **Endpoints and request**

## **Indice**
* [Login](#login)
    * [Request](#login-request)
    * [Response](#login-response)
* [Register](#register)
    * [Request](#register-request)
    * [Response](#register-response)
* [Crate Match](#create-match)
    * [Request](#create-match-request)
    * [Response](#create-match-response)
* [Read Matchs](#read-matchs)
    * [Request](#matchs-request)
    * [Response](#matchs-response)
* [Read Robots](#read-robots)
    * [Request](#robots-request)
    * [Response](#robots-response)

## **Login**

* Method: POST
* Endpoint: '/login'

### **Login Sent**

Type: Sent Body Format

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### **Case: Login Email**

Type: Sent Body

```json
{
  "username": "",
  "email" : "email",
  "password" : "password"
};
```

#### **Case: Login Username**

Type: Sent Body

```json
{
  "username": "username",
  "email" : "",
  "password" : "password"
};
```

#### **Case: Login empty fields**

```
Warning: 'Algunos campos estan vacíos, escriba algo.'
```

### **Login Recieved**

#### **Case: Success Login**

* Status Code: 200 Successful Response

Recieved Body:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJ1c2VyIiwiZXhwaXJ5IjoiMjAyMi0xMC0yMiAxMDoyMjoyMS4yNDQyNzYifQ.Lw6VbjurMIzZi9vOl_wrubUXhIAH_NZOkIHQQ8CZFCw"
}
```
Descripción: "Username/email correcto y contraseña correcta. Ingresa exitosamente."

#### **Case: Incorret Password**

Recieved Body:
```json
{
  "detail": "contrasenia incorrecta"
}
```

Message:
```
Error: "Usuario incorrecto."
```

#### **Case: Unverified User**

* Status Code: 400 Bad Request

Recieved Body:
```json
{
  "detail": "email no verificado"
}
```

Message:
```
Error: "Usuario incorrecto."
```

#### **Case: User Not Exist**

* Status Code: 400 Bad Request

Recieved Body:
```json
{
  "detail": "no existe el usuario"
}
```

Descripción: "Usuario o mail no existente"

Message:
```
Error: "Usuario incorrecto."
```


## **Register**

Method: POST
Endpoint: '/register'

### **Register Sent**

Type: Sent Body Format

```json
{
  "username": "string",
  "password": "string",
  "email": "string"
}
```

### **Register Recieved**

#### **Case: Register Success**

* Status Code: 200 Successful Recieved

Recieved Body:
```json
{
  "Status": "Usuario agregado con exito"
}
```

Message:
```
Success: "Se envió el mail de confirmación."
```

#### **Case: Empty Username**

Descripción: "Nombre de usuario vacío o con espacios."

Message:
```
Warning: "El nombre no puede estar vacío ni contener espacios."
```

#### **Case: Invalid Email Or Empty Email**

Descripción: "Email inválido o campo vacío"

Message:
```
Warning: "La dirección de correo es inválida."
```

#### **Case: Password Not Valid**

Descripción: "Contraseña sin caracter numérico o sin caracter especial o de longitud menor a 8"

Message:
```
Warning: "La contraseña es inválida."
```


## **Create Match**

Method: POST
Endpoint: '/match/add'

### **Create Match Request**

Type: Sent Body

```json
{
  "name": "string",
  "max_players": 0,
  "min_players": 0,
  "password": "string",
  "n_matchs": 0,
  "n_rounds_matchs": 0,
  "user_creator": "string",
  "token": "string"
}
```

### **Create Match Response**

#### **Case: Match Add Success**

* Descripción: "Se agregan todos los campos válidos"
* Status Code: 200 Successful Response

Recieved Body:
```json
{
  "Status": "Match added succesfully"
}
```

Message:
```
Success: "Partida creada."
```

#### **Case: Invalid Num Players**

* Descripicón: "La cantidad de jugadores no está entre 2 y 4"

* Status Code: 422 Unprocessable Entity

Recieved Body:
```json
{
  "detail": [
    {
      "loc": [
        "body",
        "min_players"
      ],
      "msg": "La cantidad de jugadores debe estar entre 2 y 4",
      "type": "value_error"
    }
  ]
}
```

Message:
```
Warning: "La cantidad de jugadores debe estar entre 2 y 4"
```

#### **Case: Invalid Num Matchs**

* Descripicón: "La cantidad de juegos no está entre 1 y 200"
* Status Code: 422 Unprocessable Entity

Recieved Body:

```json
{
  "detail": [
    {
      "loc": [
        "body",
        "n_matchs"
      ],
      "msg": "La cantidad de juegos debe estar entre 1 y 200",
      "type": "value_error"
    }
  ]
}
```

Message:
```
Warning: "La cantidad de juegos debe estar entre 1 y 200"
```

#### **Case: Invalid Num Rounds**

* Descripicón: "La cantidad de rondas no está entre 2 y 10.000"
* Status Code: 422 Unprocessable Entity

Recieved Body:

```json
{
  "detail": [
    {
      "loc": [
        "body",
        "n_rounds_matchs"
      ],
      "msg": "La cantidad de rondas debe estar entre 2 y 10.000",
      "type": "value_error"
    }
  ]
}
```

Message:
```
Warning: "La cantidad de rondas debe estar entre 2 y 10.000"
```


#### **Case: Invalid UserCreator**

* Descripicón: "El creador de la partida no es un usuario válido"
* Status Code: 400 Bad Request

Recieved Body:

```json
{
  "detail": "El usuario no existe"
}
```

Message:
```
Warning: "El usuario no existe"
```


#### **Case: Invalid Name**

* Descripicón: "Nombre de la partida vacío"
* Status Code: 422 Unprocessable Entity

Recieved Body:

```json
{
  "detail": [
    {
      "loc": [
        "body",
        "name"
      ],
      "msg": "El nombre no puede ser vacío",
      "type": "value_error"
    }
  ]
}
```

Message:
```
Warning: "El nombre no puede ser vacío"
```

#### **Case: Invalid Type**

* Descripicón: "Se introduce un str en un campo numérico"
* Status Code: 422 Unprocessable Entity

Recieved Body:

```json
{
  "detail": [
    {
      "loc": [
        "body",
        "max_players"
      ],
      "msg": "value is not a valid integer",
      "type": "type_error.integer"
    }
  ]
}
```

Message:
```
Warning: "value is not a valid integer"
```


## **Read Matchs**

Method: GET
Endpoint: '/matchs'

### **Matchs Request**

Type: Parameters Sent

```json
{
  "token": "string"
}
```

### **Matchs Response**

#### **Case: Match List Success**

* Descripción: "Se agrega token válido, se listan las partidas"
* Status Code: 200 Successful Response

Recieved Body:
```json
[
  {
    "name": "LichiPa",
    "max_players": 4,
    "min_players": 2,
    "password": "string",
    "n_matchs": 4,
    "n_rounds_matchs": 4,
    "id": 1
  },
  {
    "name": "LichiPa2",
    "max_players": 4,
    "min_players": 2,
    "password": "string",
    "n_matchs": 4,
    "n_rounds_matchs": 4,
    "id": 2
  }
]
```

#### **Case: Ivalid Token**

* Descripicón: "Token no válido"
* Status Code: 500 Internal Server Error

```json
Internal Server Error
```

## **Read Robots**

Method: GET
Endpoint: '/robots'

### **Robots Request**

Type: Parameters Sent

```json
{
  "token": "string"
}
```

### **Robots Response**

#### **Case: Robot List Success**

* Descripción: "Se agrega token válido, se listan los robots"
* Status Code: 200 Successful Response

Recieved Body:
```json
[
  {
    "name": "Krlos",
    "avatar": "asdf",
    "matchs_pleyed": 2,
    "matchs_won": 2,
    "avg_life_time": 80,
    "id": 5
  }
]
```

#### **Case: Ivalid Token**

* Descripicón: "Token no válido"
* Status Code: 500 Internal Server Error

```json
Internal Server Error
```

