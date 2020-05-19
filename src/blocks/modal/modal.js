window.addEventListener("load",function(){
    let scrollbar =  document.body.clientWidth - window.innerWidth + 'px';
    let open = document.querySelector('.openmodal')
    let modal = document.querySelector('.modal')
    let close = document.querySelector('.modal__close')
    let body = document.querySelector('body')
    
    open.addEventListener('click',function(e){
        e.preventDefault()
        document.body.style.overflow = 'hidden';
        modal.classList.add('modal-show')
        // modal.style.marginLeft = scrollbar;
        // body.style.marginLeft = scrollbar;
        open.style.display="none";
      });
      close.addEventListener('click',function(e){
        e.preventDefault()
        document.body.style.overflow = 'visible';
        modal.classList.remove('modal-show')
        body.style.marginLeft = "0px";
        modal.style.marginLeft = "0px";
        open.style.display="block";



        
      });
})