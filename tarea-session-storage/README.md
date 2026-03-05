# Investigación: sessionStorage vs localStorage

## Introducción

Los navegadores modernos ofrecen distintos mecanismos para almacenar información directamente en el lado del cliente (cliente = navegador del usuario). Esto permite que las aplicaciones web puedan guardar datos sin necesidad de enviarlos constantemente al servidor.

Uno de estos mecanismos es la **Web Storage API**, que proporciona dos herramientas principales para almacenar información en el navegador:

- **localStorage**
- **sessionStorage**

Ambos permiten almacenar información en formato **clave-valor (key-value)** y son ampliamente utilizados en aplicaciones web modernas para guardar configuraciones, estados de usuario o datos temporales.

Sin embargo, aunque su funcionamiento es muy similar, existen diferencias importantes relacionadas con **la duración de los datos, el alcance entre pestañas y el uso adecuado en diferentes situaciones**.

---

# ¿Qué es sessionStorage?

`sessionStorage` es un mecanismo de almacenamiento del navegador que permite guardar información **temporalmente durante una sesión de navegación**.

Una **sesión** corresponde al tiempo en el que una pestaña del navegador permanece abierta. Esto significa que:

- Los datos almacenados en `sessionStorage` permanecen disponibles mientras la pestaña esté abierta.
- Cuando el usuario **cierra la pestaña o el navegador**, los datos se eliminan automáticamente.

Esto lo hace especialmente útil para almacenar información **temporal**, como por ejemplo:

- tokens de autenticación
- información de navegación temporal
- estados de formularios
- datos de sesión de usuario

Una característica importante es que **cada pestaña tiene su propio sessionStorage**, por lo que los datos no se comparten entre diferentes pestañas del navegador.

---

# Características principales de sessionStorage

Las principales características de `sessionStorage` son:

- Guarda datos en el navegador del usuario
- Los datos se eliminan al cerrar la pestaña
- No se comparte entre pestañas del mismo sitio
- Solo almacena datos en formato **string**
- Tiene una capacidad aproximada de **5MB por dominio**

Debido a que solo almacena **strings**, cuando se quiere guardar información más compleja (objetos o arreglos) es necesario utilizar **JSON**.

---

# Métodos principales de sessionStorage

La interfaz de `sessionStorage` proporciona varios métodos para manipular la información almacenada.

## Guardar información

Para guardar datos se utiliza el método:

```javascript
sessionStorage.setItem("clave", "valor");