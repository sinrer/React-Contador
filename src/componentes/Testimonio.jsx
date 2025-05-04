// Importamos React para poder usar JSX y crear componentes
import React from "react";

// Importamos los estilos CSS específicos para el componente Testimonio
import "../styles/Testimonio.css";

// Definimos un componente funcional llamado Testimonio que recibe 'props' como parámetro
function Testimonio(props) {
  return (
    // Contenedor principal del testimonio con una clase CSS para estilos
    <div className="contenedor-testimonio">
      
      {/* Imagen del testimonio */}
      <img
        className="imagen-testimonio" // Clase CSS para la imagen
        src={require(`../imgs/${props.imagen}.jpg`)} 
        /* Usamos 'require' para cargar imágenes dinámicamente desde la carpeta imgs 
           La sintaxis `${props.imagen}` es una plantilla literal que permite insertar 
           el valor dinámico de 'props.imagen' en la ruta del archivo */
        alt="Foto de Ruben" // Texto alternativo que se muestra si la imagen no carga
      />

      {/* Contenedor del texto del testimonio */}
      <div className="contenedor-texto-testimonio">

        {/* Nombre y país de la persona */}
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>

        {/* Cargo y empresa donde trabaja */}
        <p className="cargo-testimonio">
          <strong>
            {props.cargo} en {props.empresa}
          </strong>
        </p>

        {/* Texto del testimonio entre comillas */}
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

// Exportamos el componente para que pueda ser utilizado en otros archivos, como App.js
export default Testimonio;
