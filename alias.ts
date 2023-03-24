(() => {

    type Sizes = 'S' | 'M' | 'L' | 'XL'; 
    let shirtSize: Sizes
    shirtSize = 'S'
    // shirtSize = 'XXL'  <- error

    console.log(shirtSize)

})()