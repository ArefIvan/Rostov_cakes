import $ from "jquery";
$(window).on("load",function(){
    let cards=$(".tasteCard")
    
    $(".tasteCard").each(function(){
        this.arrow = $(this).find(".tasteCard__arrow")
        this.text = $(this).find(".tasteCard__dscr")
        let text = this.text
        
        // console.log(this.arrow)
        // console.log(this.text)
        this.arrow.on("click",function(){
            let textPos = parseInt(text.css("top"))
            if(textPos<0){
                text.css("top","0")
                $(this).css("transform","rotate(-180deg)")
            }else{
                text.css("top","-100%")
                $(this).css("transform","rotate(0)")

            }
           
        })
    })

})