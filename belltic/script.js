var links = window.document.getElementsByClassName('links')[0]

var menu = window.document.getElementsByClassName('menu')[0]

var logo = window.document.getElementsByClassName('logo')[0]

function screen(){

    var screen = window.innerWidth

    if(screen < 762 ){

        /*menu-bar*/

        menu.style.display = 'block'

        menu.style.width = '40px'

        menu.style.height = '40px'

        menu.style.marginTop = '24px'

        /*Logotipo*/

        logo.innerHTML = '<img src="/imagens/logo.png" alt="logo">'

        logo.style.marginLeft = '10px'

        $('.logo').css('margin', '10px 5px')

        /*Lista de links*/

        links.style.visibility = 'hidden'

    }else{

        /*menu-bar*/

        menu.style.display = 'none'
        
        $('.menu').attr('src', '/imagens/menu-circlo.png')

        /*Logotipo*/

        logo.innerHTML = 'Bell<label>Tic</label>'

        $('.logo').css('margin-top', '10px').css('margin-bottom', '20px')

        /*Liata de links*/

        links.style.marginTop= '20px'

        links.style.visibility = 'visible'

        $('.links>li').css('display', 'inline').css('border', '').css('background-image', '').css('box-shadow', '')

        $('.links li>a').css('padding', '0px')

    }

}

window.onload = function(){
    screen()
    window.onresize = screen
}

function abrir(){

   if(links.style.visibility == 'hidden'){

        /*menu-bar*/

        $('.menu').attr('src', '/imagens/X-circlo.png')

        /*Lista de links*/
        links.style.visibility = 'visible'

        $('.links').css('margin', ' 10px 98px')

        $('.links>li').css('display', 'block').css('text-align', 'center').css('border', 'solid 1px #07595c').css('border-radius', '10px').css('background-image','linear-gradient(to right,#07595c, #00000010)').css('margin-bottom', '10px').css('box-shadow', '5px 5px 10px #0000006e')

        $('.links li>a').css('padding', '10px')

   } else{

        /*menu-bar*/
        
        $('.menu').attr('src', '/imagens/menu-circlo.png')

        /*Lista de links*/

        links.style.visibility = 'hidden'
        
   }
}