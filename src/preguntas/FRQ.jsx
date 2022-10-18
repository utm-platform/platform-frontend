import preguntas from "./demo-questions-french";
import { useState, useEffect } from "react";
import '../index.css';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(20);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(20);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 2000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main>
        <div class="container relative overflow-hidden rounded-lg place-content-center mx-auto my-4 bg-azul">
          <span class="text-lg text-center font-normal dark:text-white">
            {" "}
            Your score: {puntuación} of {preguntas.length}{" "}
          </span>
          <button class="place-self-center bg-sky-800 hover:bg-blue-800 px-8 py-2 mx-4 text-white font-bold rounded" onClick={() => (window.location.href = "/")}>
            {" "}
            Replay
          </button>
          <button class="place-self-center bg-verde hover:bg-green-700 px-8 py-2 mx-4 text-white font-bold rounded justify-self-center"
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            See the answers
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <div class="text-lg text-justify font-bold mx-10 dark:text-white">
            <span> Question {preguntaActual + 1} /</span> {preguntas.length}
            </div>
          </div>
          <div className="titulo-pregunta" class="text-lg text-justify font-normal mx-10 dark:text-white">
            {preguntas[preguntaActual].titulo}
          </div>
          <div class="text-lg text-justify font-normal mx-10 dark:text-white">
            {
              preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button class="place-self-center bg-verde hover:bg-green-700 px-8 py-2 m-1 mx-4 text-white font-bold rounded justify-self-center"
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Replay"
              : "Next"}
          </button>
        </div>
      </main>
    );

  return (
    <main class="container h-56 md:h-96">
        <div className="titulo-pregunta" class="text-lg text-justify font-normal mx-10 dark:text-white">
          {preguntas[preguntaActual].titulo}
        </div>
      <div className="lado-derecho" class="grid grid-rows-4 grid-flow-col gap-4 px-11 py-3">
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button class=" bg-sky-800 hover:bg-blue-800 text-white font-semibold p-1 px-2 border border-blue-700 rounded"
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
      <div class="grid grid-cols-2 gap-4 pb-0">
        <div class="col-start-1 col-end-1 items-center">
        <h1 class="text-5xl text-center font-bold mx-10 dark:text-white pt-3">
            <span> {preguntaActual + 1} / </span> {preguntas.length}
          </h1>
          <h2 class="text-2xl text-center font-semibold text-white pb-3">Question</h2>
        </div>
      <div class="col-start-2 col-end-2 items-center">
          {!areDisabled ? (
            <div class="text-center">
            <span className="tiempo-restante" class="text-5xl text-center font-bold mx-10 dark:text-white pt-3">
              {tiempoRestante}{" "}
            </span>
            <div class="text-2xl text-center font-semibold text-white pb-3">
            Time Left 
            </div>
            </div>
          ) : (
            <button class="place-self-center bg-verde hover:bg-green-700 px-8 py-2 mx-4 text-white font-bold rounded justify-self-center"
              onClick={() => {
                setTiempoRestante(10);
                setAreDisabled(false);
                if (preguntaActual === preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
