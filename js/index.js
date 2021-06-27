setTimeout(function(){
    s = document.getElementById("site-loading");
    s.classList.remove("active");
}, 2000)

let dataxs = document.querySelectorAll("[data-x]")
for (var i =0; i < dataxs.length; i++){
    if (i != 0 ){
        dataxs[i].classList.add("offset")
    }
}
window.onscroll = function(e){
    tnb = document.getElementById("top-nav-bar")
    if (scrollY === 0){
        tnb.classList.remove("active");
    }else{
        tnb.classList.add("active");
    }

    let targetSection
    for (var i=0; i < dataxs.length; i++ ){
        // dataxs[i].classList.remove("offset")
        current = Math.abs(dataxs[i].offsetTop - document.documentElement.scrollTop)
        if ( i === 0){
            min = current
            targetSection = dataxs[i]
        }else{
            if (current < min){
                min = current
                targetSection = dataxs[i]
            }
        }
    }
    activeA(targetSection)
    
    
}

function activeA(targetA){
    // 先获取所有的banner里面的a
    var bannerAs = document.querySelectorAll(".banner .banner-list > li > a");
    // 找到该a的href等于targetSection的id的a
    for(var i=0; i < bannerAs.length; i++){
        if (bannerAs[i].getAttribute("href").length >= 2){
            if (bannerAs[i].getAttribute("href") == "#" + targetA.id ){
                // 给当前的a添加active
                bannerAs[i].className = "active"
            }else{
                // 移除其他a的active
                bannerAs[i].classList.remove("active")
            }
        }
    }
    targetA.classList.remove("offset")
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


function animate(time) {
	requestAnimationFrame(animate)
	TWEEN.update(time)
}
requestAnimationFrame(animate)



let as = document.querySelectorAll(".banner .banner-list > li > a");
for (var i = 0; i < as.length; i++){
    let targetA = as[i]
    targetA.onmouseover = function(e){
        e.target.classList.add("active");
    }

    if (as[i].getAttribute("href").length >= 2 ){
        let t = document.querySelector(as[i].getAttribute("href"));
        as[i].onclick = function(e){
            e.preventDefault() // 抑制标签的默认动作
            oft = t.offsetTop // 当前元素距离页面顶部的高度
            currentScrollTop = document.documentElement.scrollTop  // 当前滚动的距离
            needMove = oft - currentScrollTop - 80 // 需要移动的距离

            const coords = {y: 0} 
            const tween = new TWEEN.Tween(coords) 
                .to({x: 0, y: needMove}, 1000) 
                .easing(TWEEN.Easing.Quadratic.InOut) 
                .onUpdate(() => {
                    window.scroll(0, currentScrollTop + coords.y)
                })
                .start()
        }
    }
}


