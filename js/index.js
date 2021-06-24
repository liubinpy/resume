setTimeout(function(){
    s = document.getElementById("site-loading");
    s.classList.remove("active");
}, 2000)

window.onscroll = function(e){
    tnb = document.getElementById("top-nav-bar")
    if (scrollY === 0){
        tnb.classList.remove("active");
    }else{
        tnb.classList.add("active");
    }
}

let menuLists = document.getElementsByClassName("menuList")
for(var i=0; i < menuLists.length; i++){
    let m = menuLists[i]
    m.onmouseover = function(e){
        let mc = m.childNodes
        for (var i=0; i<mc.length; i++){
            if(mc[i].tagName == "UL" ){
                mc[i].className = "active"
            } 
        }
    }
    m.onmouseleave = function(e){
        let mc = m.childNodes
        for (var i=0; i<mc.length; i++){
            if(mc[i].tagName == "UL" ){
                mc[i].className = ""
            } 
        }
    }
}

function jump(id1, id2){
    let jam = document.getElementById(id1)
    jam.onclick = function(e){
        e.preventDefault()
        aboutMe = document.getElementById(id2)
        y = aboutMe.offsetTop
        window.scroll(0, y-150)
    }
}
jump("jump-about-me","abount-me")
jump("jump-skills","skills")
jump("jump-protfolios","portfolios")