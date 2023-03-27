(() => {
    let userId: string | number;
    userId = 12121
    userId = 'test'

    function greeting(myText:string | number) {
        if(typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`)
        } else {
            console.log(`number ${myText.toFixed(1)}`)

        }
    }
    greeting('Test2')
    greeting(12) 
})()