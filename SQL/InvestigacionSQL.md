1. ¿Qué es una transacción? ¿Para qué se usan?
- Una transacción es un conjunto de operaciones en una base de datos que se ejecutan como una sola unidad. Esto significa que todas las operaciones deben completarse correctamente; de lo contrario, ninguna se aplica.
- Se utilizan para garantizar la integridad de los datos, asegurando que no queden cambios incompletos o inconsistentes. Por ejemplo, en una transferencia bancaria, el dinero debe salir de una cuenta y entrar a otra; si una parte falla, todo se cancela.

2. ¿Cómo evitar que falle CREATE TABLE si ya existe?
- Se puede usar la instrucción:
        CREATE TABLE IF NOT EXISTS nombre_tabla (...);
- Esto evita que el sistema arroje un error si la tabla ya fue creada previamente.

3. ¿Qué es un trigger o disparador? + ejemplos
- Un trigger es una acción automática que se ejecuta cuando ocurre un evento en la base de datos (como INSERT, UPDATE o DELETE).
- Ejemplos:
    - Registrar automáticamente en una tabla cuando se elimina un usuario.
    - Actualizar el inventario cuando se realiza una compra.

4. ¿Qué es SQL Injection? ¿Implicaciones?
- SQL Injection es un tipo de ataque donde un atacante inserta código SQL malicioso en inputs (como formularios) para manipular la base de datos.
- Implicaciones:
    - Robo de datos sensibles
    - Modificación o eliminación de información
    - Acceso no autorizado al sistema
- 3 noticias reales
        
        1. Yahoo (2014)
            Uno de los ataques más grandes de la historia afectó a más de 3 mil millones de cuentas. Los atacantes accedieron a información como correos, contraseñas y datos personales.
                https://www.bbc.com/news/technology-37232635

        2. Sony Pictures (2011)
            Hackers explotaron vulnerabilidades en su sistema y obtuvieron datos de millones de usuarios, incluyendo contraseñas y correos.
                https://www.bbc.com/news/technology-13263882

        3. TalkTalk (2015)
            Una empresa de telecomunicaciones en Reino Unido sufrió un ataque SQL Injection que expuso datos financieros y personales de miles de clientes.
                https://www.bbc.com/news/business-34635803

5. ¿Qué es un ORM y diferencias con SQL?
- Un ORM (Object Relational Mapping) es una herramienta que permite interactuar con bases de datos usando código (como Python o JavaScript) en lugar de escribir SQL directamente.
- El uso de ORM mejora la seguridad al evitar consultas directas concatenadas, reduciendo el riesgo de SQL Injection.

Diferencias:
    ORM	                                        SQL
Más fácil de usar	                    Más control directo
Menos propenso a errores	            Más flexible
Más seguro (previene SQL Injection)	    Requiere más cuidado

