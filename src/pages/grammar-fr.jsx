import { Container } from "postcss"
import '../index.css';
const GramFR = () => {
  return (
    <main className="app">
      <div class="container relative overflow-hidden rounded-lg place-content-center mx-auto my-4 bg-azul">
        <div class="container">
          <h1 class="text-5xl text-center font-extrabold dark:text-white my-2">Structure de la langue</h1>
          <h5 class="text-xl text-center font-bold dark:text-white my-1">Section 1</h5>
          <div class="rounded-lg m-4 bg-verde">
            <h6 class="text-lg text-center font-semibold dark:text-white p-2">Instructions: Select the correct answer and click in Next button to see the following question.</h6>
          </div>
        </div>
        <div class="container h-56 md:h-96  bg-azul">
          <div id="french"></div>
          <script type="module" src="./src/preguntas/mainFR.jsx"></script>
        </div>
      </div>
    </main>
  );
  
    

    
  }

export default GramFR


