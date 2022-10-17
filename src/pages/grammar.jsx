import { Container } from "postcss"
import '../index.css';
const Gram = () => {
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


