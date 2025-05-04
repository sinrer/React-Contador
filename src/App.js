// Importa el archivo de estilos CSS para aplicar estilos a los componentes
import "./App.css";

// Importa el componente Testimonio desde la carpeta componentes
import Testimonio from "./componentes/Testimonio";

// Función principal del componente App
function App() {
  return (
    // Elemento principal con clase "App", donde se aplica el estilo general
    <div className="App">
      {/* Contenedor principal de todos los testimonios */}
      <div className="contenedor-principal">
        {/* Título principal que se mostrará en la parte superior */}
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {/* Primer testimonio - se pasan las props al componente Testimonio */}
        <Testimonio
          nombre="Geremi Ndjitap"
          pais="Singapur"
          imagen="Mel" // Nombre de la imagen sin extensión (ej. Mel.jpg en la carpeta correspondiente)
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />

        {/* Segundo testimonio*/}
        <Testimonio
          nombre="Ruben Nguema"
          pais="Nigeria"
          imagen="Ruben"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />

        {/* Repetición del mismo testimonio anterior varias veces */}
        <Testimonio
          nombre="Ruben Nguema"
          pais="Nigeria"
          imagen="Ruben"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Ruben Nguema"
          pais="Nigeria"
          imagen="Ruben"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Ruben Nguema"
          pais="Nigeria"
          imagen="Ruben"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />

        {/* Último testimonio con datos distintos */}
        <Testimonio
          nombre="EL Pecador"
          pais="Suecia"
          imagen="Dylan"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado por React
export default App;
