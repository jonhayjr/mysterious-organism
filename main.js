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
        }
    };
}

/*Mutate function testing*/
/*const dnaObj = pAequorFactory(1, mockUpStrand());
console.log(dnaObj);
dnaObj.mutate();
console.log(dnaObj);*/