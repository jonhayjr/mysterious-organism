// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

//Factory function to return object with number and random DNA string
const pAequorFactory = (number, dnaArray) => {
    return {
        specimenNum: number,
        dna: dnaArray,
        /*Function to mutate random position in dna array with random base*/
        mutate() {
            /*Define random number based on dna array length*/
            const randomNumber = Math.floor(Math.random() * this.dna.length);
            /*Capture base at this random position in array*/
            const currentBase = this.dna[randomNumber];
            //Use returnRandBase function to define random base
            let newBase = returnRandBase();

            //If currentBase is equal to newBase, continue to select random base until values don't match
            while (newBase === currentBase) {
                newBase = returnRandBase();
            }
            //Update dna array with new base
            this.dna[randomNumber] = newBase;
        },
        compareDNA(pAequor) {
            //Variable to capture number of bases that match
            let numberMatched = 0;

            //Loop through each array and find matches
            for (let i=0; i < pAequor.dna.length; i++) {
                //Add 1 to numberMatches if values match
                if (pAequor.dna[i] === this.dna[i]) {
                    numberMatched++;
                }
            }
            //Calculate perfecentMatched based on numberMatched value and array length.  Rount to nearest decimal.
            const percentMatched = ((numberMatched/pAequor.dna.length) * 100).toFixed();

            //Return statement with details on percentage matched
            return `specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have ${percentMatched}% DNA in common.`;
        },
        willLikelySurvive() {
            //Capture numberMatched
            let numberMatched = 0;

            //Loop through dna array and add one if value is either C or G
            for (let i=0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    numberMatched++;
                }
            }

            //Calculate perfecentMatched based on numberMatched value and array length.  Rount to nearest decimal.
            const percentageMatched = ((numberMatched/this.dna.length) * 100).toFixed();

            return percentageMatched >= 60;
        }
    };
}

/*Function testing*/
/*const dnaObj1 = pAequorFactory(1, mockUpStrand());
const dnaObj2 = pAequorFactory(2, mockUpStrand());
console.log(dnaObj1);
console.log(dnaObj2);
console.log(dnaObj1.compareDNA(dnaObj2));
console.log(dnaObj2.willLikelySurvice());*/

//Function to generate random dna objects
const generateDNAArray = (number) => {
    //Variable to store dnaArray values
    const dnaArray = [];
    //Loop through specified number of times and push random dnaObj to array
    for (let i = 0; i < number; i++) {
        const dnaObj = pAequorFactory(i + 1, mockUpStrand());
        dnaArray.push(dnaObj);
    }
    return dnaArray;
}

const dnaArrayObject = generateDNAArray(30);
//console.log(dnaArrayObject);