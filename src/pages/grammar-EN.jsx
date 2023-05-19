import { Container } from "postcss"
import '../index.css';
import Quiz from "../preguntas/ENQ";
const Gram = () => {
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
          <div id="english"></div>
          <script type="module" src="../src/preguntas/mainEN.jsx"></script>
        </div>
      </div>
    </main>
  );
  
    

    
  }

export default Gram


