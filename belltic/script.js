var links = window.document.getElementsByClassName('links')[0]

var menu = window.document.getElementsByClassName('menu')[0]

var logo = window.document.getElementsByClassName('logo')[0]

function screen(){

    var screen = window.innerWidth

    if(screen <= 700){
        menu.style.display = 'block'

        menu.style.width = '40px'

        menu.style.height = '40px'

        menu.style.marginTop = '12px'

        menu.style.marginRight = '12px'

        logo.innerHTML = '<img src="/imagens/logo.png" alt="logo">'

        logo.style.marginLeft = '12px'

        links.style.marginTop= '18px'

        links.style.visibility = 'hidden'

    }else{

        menu.style.display = 'none'

        logo.innerHTML = 'Bell<label>Tic</label>'

        links.style.marginTop= '12px'

        links.style.visibility = 'visible'

        menu.style.marginTop = '12px'

        $('.links>li').css('display', 'inline')

    }

}

window.onload = function(){
    screen()
    window.onresize = screen
}

function abrir(){

   if(links.style.visibility == 'hidden'){

        links.style.visibility = 'visible'

        $('.links>li').css('display', 'block')

   } else{

    links.style.visibility = 'hidden'

    $('.links>li').css('display', 'inline')


   }
}