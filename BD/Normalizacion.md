# Normalización en Bases de Datos: Resumen del artículo de IBM y comparación con clase

## Introducción

La normalización de bases de datos es un proceso fundamental dentro del diseño de bases de datos relacionales, cuyo objetivo principal es organizar la información de manera eficiente para reducir redundancias, evitar errores y mejorar la integridad de los datos. De acuerdo con IBM, este proceso consiste en estructurar tablas bajo ciertas reglas llamadas “formas normales”, las cuales permiten que los datos estén mejor organizados y que las consultas sean más confiables. Este tema se relaciona directamente con lo revisado en clase, ya que en nuestros ejercicios aprendimos cómo diseñar tablas más limpias y funcionales usando claves, relaciones y consultas SQL.

## Conceptos más importantes del artículo

### 1. Objetivo principal de la normalización
IBM explica que normalizar significa dividir tablas grandes y complejas en tablas más pequeñas y relacionadas, con el fin de:
- Reducir redundancia de datos
- Evitar inconsistencias
- Mejorar la integridad
- Facilitar actualizaciones
- Optimizar consultas

Esto coincide con lo visto en clase cuando analizamos cómo una tabla mal diseñada puede repetir información innecesaria, provocando errores.

### 2. Anomalías que evita la normalización
El artículo destaca tres problemas principales:

**Anomalía de inserción:** sucede cuando no se puede agregar información sin otros datos obligatorios.  
**Anomalía de actualización:** ocurre cuando un dato repetido no se actualiza en todos lados.  
**Anomalía de eliminación:** pasa cuando al borrar un dato se pierde información importante relacionada.

### 3. Importancia de las claves
IBM enfatiza que las claves son esenciales:
- **Clave primaria (Primary Key):** identifica cada registro de forma única.
- **Clave externa (Foreign Key):** conecta tablas relacionadas.

Esto fue lo que aplicamos en ejercicios, donde usamos IDs para relacionar tablas mediante JOINs.

## Formas normales

### Primera Forma Normal (1NF)
- Cada campo debe tener un solo valor.
- No debe haber grupos repetidos.

**Ejemplo:**  
No guardar varios géneros en una sola celda.

### Segunda Forma Normal (2NF)
- Debe estar en 1NF.
- Todos los atributos deben depender completamente de la clave primaria.

### Tercera Forma Normal (3NF)
- Debe estar en 2NF.
- No debe haber dependencias transitivas.

En clase trabajamos especialmente hasta 3NF, separando entidades como:
- Universidad y campus

Esto mejoró la estructura y permitió consultas más claras.

## Ventajas de la normalización
Según IBM:
- Menor redundancia
- Menor costo de almacenamiento
- Mejor consistencia
- Consultas más rápidas
- Mayor facilidad de mantenimiento :contentReference[oaicite:1]{index=1}

## Desventajas
IBM también menciona que una base de datos muy normalizada puede requerir más JOINs, lo que puede hacer consultas más complejas. Esto lo observamos en clase, ya que entre más tablas separadas teníamos, más necesario era combinar información con SELECT, FROM, WHERE y JOIN.

## Comparación con los ejercicios de clase

### En clase:
- Usamos SELECT para consultar datos
- FROM para definir tablas
- WHERE para filtrar
- GROUP BY para agrupar
- JOINs para unir tablas relacionadas

### Relación con IBM:
IBM se enfoca en el diseño correcto de la base de datos antes de consultar, mientras que en clase aplicamos consultas sobre estructuras ya organizadas.

## Conclusión

El artículo de IBM refuerza que la normalización no solo es teoría, sino una práctica esencial para construir bases de datos eficientes, organizadas y confiables. Lo aprendido en clase complementa perfectamente esta visión, ya que mientras IBM explica por qué estructurar correctamente los datos, nosotros aprendimos cómo manipularlos mediante SQL. En conjunto, ambos enfoques permiten entender que una buena base de datos depende tanto de un diseño lógico adecuado como de consultas bien construidas.

En resumen, normalizar significa preparar correctamente la información para evitar problemas futuros, mejorar el rendimiento y facilitar el análisis, algo indispensable para cualquier sistema moderno.

## Referencia
IBM. (s.f.). *¿Qué es la normalización de bases de datos?* IBM Think. https://www.ibm.com/es-es/think/topics/database-normalization