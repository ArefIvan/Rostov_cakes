import counter from "../../components/counter/counter"

// let count = $(".counter__count")
function weightCalc(el){
    let count = el.find(".counter__count")
    let dec = el.find(".dec")
    let inc = el.find(".inc")
    
    let kilos = el.find(".weightCalc__weight--kg")
    let gramms = el.find(".weightCalc__weight--gramms")
    
    counter(count)
    getkilo()

    
    function getkilo(){
        let valuekilo ="";
        count.each(function(i){
            if(this.value<=10){
                valuekilo = 1
            }
            else{
                if(this.value>=100){
                    valuekilo = ((+this.value-+this.value%10) )/10
                }
                else{
                valuekilo = ((+this.value-+this.value%5) + 5 )/10
                console.log(valuekilo)

                }
            }
            
            kilos.html(valuekilo)

        })
    }
    count.on("input",getkilo)
    count.on("change",getkilo)
    dec.on("click",getkilo)
    inc.on("click",getkilo)

    
}

let calc = $(".weightCalc")

calc.each(function(){
    weightCalc($(this))
})