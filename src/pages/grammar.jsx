import { Container } from "postcss"
import '../index.css';
const Gram = () => {
    return (
      <main>
        <br></br>
        <div class="container relative overflow-hidden rounded-lg md:h-100 bg-blue-900">
            <div class="container">
            <h1 class="text-5xl text-center font-extrabold dark:text-white">Grammar</h1>
            <h5 class="text-xl text-center font-bold dark:text-white">Part 1</h5>
              <div class="rounded-lg mx-3 bg-green-900">
                <h6 class="text-lg text-center font-semibold dark:text-white">Instructions: Select the correct answer and click in Next button to see the following question.</h6>
            </div>
            <br/>
          </div>
          <div class="container h-56 md:h-96  dark:bg-blue-800">
            <br></br>
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
                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="mx-1"></input>
                    <label for="default-radio-1" class="text-lg text-center font-normal dark:text-white">  day</label>
                </div>
            </div>
            <div class="container mx-20">
              <br></br>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
              <span>   </span>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</button>

            <br/>
          </div> 
          </div>
          
            
        </div>
      </main>

    )
}

export default Gram


