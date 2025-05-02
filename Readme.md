# 🗂️ Título del proyecto: "Validador Inteligente de Archivos de Texto"
## 📌 Contexto / Introducción
En muchas empresas, especialmente en áreas de logística, recursos humanos o legal, se manejan grandes volúmenes de archivos .txt con información que necesita validarse antes de ser procesada: formatos de fechas, identificadores, líneas duplicadas, datos vacíos, o líneas mal estructuradas.

Este proyecto propone construir un validador de archivos de texto plano, capaz de analizar y reportar errores, advertencias y estadísticas del contenido. Este tipo de automatizador es muy útil en la vida real y entrena al desarrollador en el manejo realista de datos semi-estructurados.

## ✅ Requerimientos funcionales
Tu script debe:

1. Leer un archivo .txt línea por línea, usando solo fs de Node.js (modo síncrono o asíncrono con promises).

2. Validar que cada línea cumpla con una estructura tipo CSV personalizada (por ejemplo: fecha,nombre,id) donde:

    - fecha es una fecha válida en formato YYYY-MM-DD

    - nombre es un string no vacío (sin números)

    - id es un número entero positivo

3. Registrar los errores encontrados por línea (por ejemplo: "Línea 8: Fecha inválida", "Línea 21: Campo vacío en nombre").

4. Generar un resumen final:

    - Total de líneas

    - Número de líneas válidas

    - Número de líneas con error

    - Errores únicos encontrados

5. Permitir ejecutar el script desde la terminal indicando el nombre del archivo como argumento (por ejemplo: node validador.js archivo.txt)

6. Usar funciones puras y pequeñas, bien organizadas en archivos separados según su rol: validación, lectura, análisis, reporte, etc.

7. Implementar un sistema básico de manejo de errores (por ejemplo, archivo no encontrado, línea mal formateada).

8. Usar types de JSDoc o TypeScript si lo tienes habilitado.

9. Aplicar map, filter, reduce o forEach donde sea adecuado.

10. Incluir al menos 1 uso correcto de destructuración, Sets, y objetos como diccionarios ({ [key]: value }).

## ⭐ Desafío opcional (Nivel 2%)
- Agrega una opción para permitir diferentes formatos de entrada: por ejemplo, cambiar el separador a ; o |.

- Implementa un sistema de "nivel de severidad" en los errores: errores críticos, advertencias (por ejemplo: nombre en minúsculas, ID fuera de rango).

- Genera un archivo de salida resumen.json con el resumen y los errores detallados.

## 🧠 Buenas prácticas y sugerencias técnicas
- Usa fs.promises para trabajar de forma asincrónica con los archivos.

- Define funciones puras como esFechaValida(fecha: string): boolean o validarLinea(linea: string): Error[].

- Divide bien tu código: validadores.js, lector.js, reporte.js, main.js.

- Usa estructuras como arrays, sets y objetos según lo que estés contando o validando.

- Usa módulos (import/export si tu entorno lo permite o require/module.exports en Node).

### 📥 Ejemplo de archivo de entrada (archivo.txt)

```
2023-02-14,Juan Perez,1024
2021-13-01,Ana Martinez,2048
2022-07-11,,309
2022-12-30,Jose Garcia,notanumber
```

### 📤 Ejemplo de salida esperada en consola

```
Archivo: archivo.txt
Total de líneas: 4
Líneas válidas: 1
Líneas con errores: 3

Errores detectados:
- Línea 2: Fecha inválida
- Línea 3: Campo nombre vacío
- Línea 4: ID no numérico
```