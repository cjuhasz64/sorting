
const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}


function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class chart {

    #fNoOfValues;
    #fValues;


    constructor (aNoOfVAlues)
    {
       this.#fNoOfValues = aNoOfVAlues;
    }


    
    genValues (aLow, aHigh)
    {
        this.clearValues();

        this.#fValues = new Array(this.#fNoOfValues)

        for (let i = 0; i < this.#fNoOfValues; i++)
        {
            this.#fValues[i] = getRandomInt(aLow, aHigh)
            
        }
      
        
    }

    
    genNewValues (aNoOfVAlues, aLow, aHigh)
    {
        this.#fNoOfValues = aNoOfVAlues;
        this.clearValues();

        this.#fValues = new Array(this.#fNoOfValues)

        for (let i = 0; i < this.#fNoOfValues; i++)
        {
            this.#fValues[i] = getRandomInt(aLow, aHigh)
            
        }
      
        
    }
    
    clearValues ()
    {
        this.#fValues = [];
    }

    draw ()
    {
        
        document.getElementById('chart').innerHTML = "";
        this.#fValues.forEach((e,i)=> {
            let color = "rgb(" + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")"; // set bars to random colours
            //let color = "rgb(" + e + "," + e + "," + e + ")"; // set bars to random colours
            document.getElementById('chart').innerHTML += `<div id="${i}" class="bar" style="height:${e};background-color:${color};width:${100/this.#fNoOfValues}%"></div>`;

        });  
        
        console.log("draw")
    }

    swapBars(aIndex1, aIndex2)
    {
        let temp = document.getElementById(aIndex1).offsetHeight;
        let tempC = document.getElementById(aIndex1).style.backgroundColor; 
        document.getElementById(aIndex1).style.height = document.getElementById(aIndex2).offsetHeight;
        document.getElementById(aIndex2).style.height = temp;
        document.getElementById(aIndex1).style.backgroundColor= document.getElementById(aIndex2).style.backgroundColor;
        document.getElementById(aIndex2).style.backgroundColor = tempC;
    }

    sort ()
    {
        for (let i = 1; i <= this.#fNoOfValues; i++)
        {           
            for (let j = 0; j < this.#fNoOfValues; j++)
            {                
                if (this.#fValues[j] > this.#fValues[j+1])
                {
                    let temp = this.#fValues[j];
                    this.#fValues[j] = this.#fValues[j+1];
                    this.#fValues[j+1] = temp;

                    this.swapBars(j, j+1)  
                    syncWait(10); 
                }
            }          
        }    
    }
}

var x = new chart(50);

x.genValues(30, 500)
x.draw()


function sort ()
{
    console.log("start")
    x.sort()
    
   
    
}


