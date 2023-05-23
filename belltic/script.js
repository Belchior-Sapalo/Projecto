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

        links.style.marginTop= '18px'

        links.style.visibility = 'hidden'

        $('.links li>a').css('margin-top', '20px')

    }else{

        /*menu-bar*/

        menu.style.display = 'none'

        menu.style.marginTop = '12px'
        
        $('.menu').attr('src', '/imagens/menu-circlo.png')

        /*Logotipo*/

        logo.innerHTML = 'Bell<label>Tic</label>'

        logo.style.marginLeft = '60px'

        $('.logo').css('margin-top', '10px')

        logo.style.marginBottom = '8px'

        /*Liata de links*/

        links.style.marginTop= '20px'

        links.style.visibility = 'visible'

        $('.links>li').css('display', 'inline')

        $('.links li>a').css('padding', '0px').css('backgrounr-color', '')

        $('.links>li').css('border', 'none').css('margin', '0px').css('text-align', 'center').css('background-color', '').css('background-image','').css('box-shadow', '')

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

        $('.links').css('margin', ' 10px 98px').css('text-align', 'top')

        $('.links>li').css('display', 'block')

        $('.links>li').css('border', 'solid 1px #07595c').css('border-radius', '10px').css('background-image','linear-gradient(to right,#07595c, #001a24)').css('margin-bottom', '10px').css('text-align', 'center').css('box-shadow', '5px 5px 10px #0000006e')

        $('.links li>a').css('padding', '10px')
   } else{

        /*menu-bar*/
        
        $('.menu').attr('src', '/imagens/menu-circlo.png')

        /*Lista de links*/

        links.style.visibility = 'hidden'

        $('.links').css('margin', ' 10px 98px')

        $('.links li>a').css('padding', '0px')

        $('.links>li').css('display', 'inline')

        /*Logotipo*/

   }
}