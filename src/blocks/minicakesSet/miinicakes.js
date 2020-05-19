import counter from "../../components/counter/counter"

// let count = $(".counter__count")
function miniCakesCalc(el){
    let count = el.find(".counter__count")
    let dec = el.find("dec")
    let inc = el.find("inc")
    let weight = el.find(".minicakesSet__counter__weight")
    let price = el.find(".minicakesSet__counter__price")

    counter(count)
}

let calc = $(".minicakesSet__calc")
miniCakesCalc(calc)