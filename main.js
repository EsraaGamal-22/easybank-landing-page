function showMenu(menu_info){
    var nav_menu = document.getElementById("nav-menuu");
    var head=document.getElementById("head");
    var images=document.getElementsByTagName("img");
    var logo=document.getElementById("logoo");
    var sec=document.getElementsByTagName("section");
    var colors=['hsl(0, 0%, 98%)','hsl(220, 16%, 96%)', 'hsl(0, 0%, 98%)']
    if(menu_info.classList.contains("change")) 
    {
        menu_info.classList.remove("change");
        nav_menu.classList.remove("nav-min");
        document.body.style.backgroundColor='unset';
        head.classList.remove("head-nor");
        document.getElementById("intro-img").style.display="unset";
        document.getElementsByClassName("img-intro")[0].classList.remove("img-back");
        for(i=0;i<images.length;i++)
        {
            images[i].style.opacity="unset";
        }
        for(y=0;y<sec.length;y++)
        {
            sec[y].style.backgroundColor=colors[y];
        }

    }
    else{
        menu_info.classList.toggle("change");
        nav_menu.classList.add("nav-min");
        document.body.style.backgroundColor='rgba(211,211,211,0.9)';
        head.classList.add("head-nor");
        document.getElementById("intro-img").style.display="none";
        document.getElementsByClassName("img-intro")[0].classList.add("img-back");
        for(i=0;i<images.length;i++)
        {
            images[i].style.opacity="0.7";
        }
        logo.style.opacity="1";
        for(y=0;y<sec.length;y++)
        {
            sec[y].style.backgroundColor='rgba(211,211,211,0.7)';
        }
    }
   
}