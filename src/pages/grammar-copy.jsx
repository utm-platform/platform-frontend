import { Container } from "postcss"
import '../index.css';
import EnglishQuestions from "../preguntas/demo-questions-english";
import { useState, useEffect } from "react";

const Gram = () => {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === EnglishQuestions.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    }, 1500);
  }

  handleOptionClick = (e) =>{
    console.log('Button Clicked');
    M.toast()
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuación} de {EnglishQuestions.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {EnglishQuestions.length}
          </div>
          <div className="titulo-pregunta">
            {EnglishQuestions[preguntaActual].titulo}
          </div>
          <div>
            {
              EnglishQuestions[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === EnglishQuestions.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === EnglishQuestions.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app">
      <div class="container relative overflow-hidden rounded-lg place-content-center mx-auto my-4 bg-azul">
        <div class="container">
          <h1 class="text-5xl text-center font-extrabold dark:text-white my-2">Grammar</h1>
          <h5 class="text-xl text-center font-bold dark:text-white my-1">Part 1</h5>
          <div class="rounded-lg m-4 bg-verde">
            <h6 class="text-lg text-center font-semibold dark:text-white p-2">Instructions: Select the correct answer and click in Next button to see the following question.</h6>
          </div>
        </div>
        <div class="container h-56 md:h-96  bg-azul">
          <div class="container mx-15">
            <div class="text-lg text-justify font-normal mx-10 dark:text-white">{EnglishQuestions[preguntaActual].titulo}
            </div>
            <div class="grid grid-rows-4 grid-flow-col gap-4 px-11 py-3">
              {EnglishQuestions[preguntaActual].opciones.map((respuesta) => (
              
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-2 border border-blue-700 rounded"
                    disabled={areDisabled}
                    key={respuesta.textoRespuesta}
                    onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                  ><p class="text-lg text-center font-normal dark:text-white">{respuesta.textoRespuesta}</p>
                    
                  </button>
              ))}
            </div>
          </div>  
          </div>
          <div class="grid grid-cols-4 gap-4 ">
            <div class="col-start-1 col-end-1">
              <div class="text-5xl text-center font-bold mx-10 dark:text-white pt-3">
                <span >{preguntaActual + 1} /</span> {EnglishQuestions.length}
              </div>
              <h2 class="text-2xl text-center font-semibold text-white pb-3">Question</h2>
            </div>
            <div class="col-start-2 col-end-2">
              <div  class="text-5xl text-center font-bold mx-10 dark:text-white pt-3">
                  <span className="tiempo-restante">
                    {tiempoRestante}{" "}
                    </span>
               </div>
              <h2 class="text-2xl text-center font-semibold text-white pb-3">Time left</h2>
            </div>
            <div class="col-span-2 container flex items-center justify-end">
                <button class="place-self-center bg-sky-800 hover:bg-blue-700 px-8 py-2 mx-4 text-white font-bold rounded">Back</button>
                <button
                 onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === EnglishQuestions.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
                class="place-self-center bg-verde hover:bg-green-700 px-8 py-2 mx-4 text-white font-bold rounded justify-self-center">Next</button> 
            </div>
          </div>
        
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button
              onClick={() => {
                setTiempoRestante(10);
                setAreDisabled(false);
                if (preguntaActual === EnglishQuestions.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </div>
    </main>
  );
  
    

    return (
      <main>
        <div class="container relative overflow-hidden rounded-lg place-content-center mx-auto my-4 bg-azul">
          <div class="container">
            <h1 class="text-5xl text-center font-extrabold dark:text-white my-2">Grammar</h1>
            <h5 class="text-xl text-center font-bold dark:text-white my-1">Part 1</h5>
            <div class="rounded-lg m-4 bg-verde">
              <h6 class="text-lg text-center font-semibold dark:text-white p-2">Instructions: Select the correct answer and click in Next button to see the following question.</h6>
            </div>
          </div>
          <div class="container h-56 md:h-96  bg-azul">
            <div class="container mx-15">
              <p class="text-lg text-justify font-normal mx-10 dark:text-white">Mrs. Brown <span class="font-bold  dark:text-white"> is talking </span> her children <span class="font-bold  dark:text-white">to</span> school <span class="font-bold  dark:text-white">by</span> car every <span class="font-bold  dark:text-white">day</span>.</p>
              <div class="flex items-center mx-10">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="mx-1"></input>
                <label for="default-radio-1" class="text-lg text-center font-normal dark:text-white">  is taking</label>
              </div>
              <div class="flex items-center mx-10">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="mx-1"></input>
                <label for="default-radio-1" class="text-lg text-center font-normal dark:text-white">  to</label>
              </div>
              <div class="flex items-center mx-10">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="mx-1"></input>
                <label for="default-radio-1" class="text-lg text-center font-normal dark:text-white">  by</label>
              </div>
              <div class="flex items-center mx-10">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="form-radio mx-1"></input>
                <label for="default-radio-1" class="text-lg text-center font-normal dark:text-white">  day</label>
              </div>
            </div>  
          </div>
          <div class="grid grid-cols-4 gap-4 ">
            <div class="col-start-1 col-end-1">
              <h1 class="text-5xl text-center font-bold mx-10 dark:text-white pt-3">1/25</h1>
              <span> Pregunta {preguntaActual + 1} de</span> {EnglishQuestions.length}
              <h2 class="text-2xl text-center font-semibold text-white pb-3">Question</h2>
            </div>
            <div class="col-start-2 col-end-2">
              <div  class="text-5xl text-center font-bold mx-10 dark:text-white pt-3"id="timer"></div>
              <script type="module" src="src/CountDown-Demo/demo-count.jsx"></script>
              <h2 class="text-2xl text-center font-semibold text-white pb-3">Time left</h2>
            </div>
            <div class="col-span-2 container flex items-center justify-end">
                <button class="place-self-center bg-sky-800 hover:bg-blue-700 px-8 py-2 mx-4 text-white font-bold rounded">Back</button>
                <button class="place-self-center bg-verde hover:bg-green-700 px-8 py-2 mx-4 text-white font-bold rounded justify-self-center">Next</button> 
            </div>
          </div>
        </div>
        <div  class="text-5xl text-center font-bold mx-10 dark:text-white pt-3"id="ENQ"></div>
        <script type="module" src="./QUESTION.jsx"></script>
      </main>
    )
  }

export default Gram


