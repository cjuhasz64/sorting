
class chart {

    #fNoOfValues;
    #fValues;


    constructor ()
    {
       this.#fNoOfValues = 0;
    }


    
    genValues (aNoOfVAlues)
    {

        this.#fNoOfValues = aNoOfVAlues;
        this.clearValues();

        this.#fValues = [aNoOfVAlues];

        this.#fValues.forEach(e => {
            e = rand(50, 300);
        });

        console.log(this.#fValues);
        
    }

    clearValues ()
    {
        this.#fValues = [];
    }

}