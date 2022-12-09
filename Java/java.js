//Abrir menu em mobile
var btns = document.querySelectorAll('.openClose')
var menumob = document.querySelector('.menu-mob')

for (i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        menumob.classList.toggle('open')
    })
}

//Abrir barra de busca Desktop
var btn = document.querySelector('.btn-find')
var input = document.querySelector('.find')

function open (){
    btn.style.right = 30 + 'px'
    input.style.right = 80 + 'px'
    input.style.width = 20 + '%'
    input.style.cursor = 'auto'
}
function close (){
    btn.style.right = 100 + 'px'
    input.style.right = 130 + 'px'
    input.style.width = 50 + 'px'
    input.style.cursor = 'pointer'
}
var pos=1
for (var c=0; c < 1; c++){
    btn.addEventListener('click', function(){
        pos += 1
        if (pos%2 == 0){
            open()
        }
        else {
            close()
        }
    })
    input.addEventListener('click', function(){
        pos+=1
        if (pos%2 == 0){
            open()
        }
        else {
            return
        }
    })
    
}
//Barra de busca Mobile

var btn_mob = document.querySelector('.btn-find-mob')
var input_mob = document.querySelector('.find-mob')

function open_mob (){
    btn_mob.style.right = 30 + 'px'
    input_mob.style.right = 60 + 'px'
    input_mob.style.width = 30 + '%'
    input_mob.style.cursor = 'auto'
}
function close_mob (){
    btn_mob.style.right = 100 + 'px'
    input_mob.style.right = 50 + 'px'
    input_mob.style.width = 50 + 'px'
    input_mob.style.cursor = 'pointer'
}

var pos_mob=1
for (var m=0; m < 1; m++){
    btn_mob.addEventListener('click', function(){
        pos_mob += 1
        if (pos_mob%2 == 0){
            open_mob()
        }
        else {
            close_mob()
        }
    })
    input_mob.addEventListener('click', function(){
        pos_mob+=1
        if (pos_mob%2 == 0){
            open_mob()
        }
        else {
            return
        }
    })
}


//Waypoints section 2
var line1 = document.querySelector('.line-view1')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view1'),
    handler: function() {
        line1.classList.toggle('strain')
    },
    offset:'50%'
})
var line2 = document.querySelector('.line-view2')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view2'),
    handler: function() {
        line2.classList.toggle('strain')
    },
    offset:'50%'
})
var line3 = document.querySelector('.line-view3')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view3'),
    handler: function() {
        line3.classList.toggle('strain')
    },
    offset:'50%'
})
var line4 = document.querySelector('.line-view4')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view4'),
    handler: function() {
        line4.classList.toggle('strain')
    },
    offset:'50%'
})


//Waypoints Section2 Mobile

var line1_mob = document.querySelector('.line-view1-mob')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view1-mob'),
    handler: function() {
        line1_mob.classList.toggle('strain')
    },
    offset:'90%'
})
var line2_mob = document.querySelector('.line-view2-mob')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view2-mob'),
    handler: function() {
        line2_mob.classList.toggle('strain')
    },
    offset:'90%'
})
var line3_mob = document.querySelector('.line-view3-mob')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view3-mob'),
    handler: function() {
        line3_mob.classList.toggle('strain')
    },
    offset:'90%'
})
var line4_mob = document.querySelector('.line-view4-mob')
var waypoint = new Waypoint({
    element: document.querySelector('.line-view4-mob'),
    handler: function() {
        line4_mob.classList.toggle('strain')
    },
    offset:'90%'
})

//carousel da lista destaque
let count = 1

setInterval( function(){
    nextImage()
}, 3000)
function nextImage(){
    count++
    if (count>3){
        count = 1;
    }
    document.getElementById("slide"+count).checked = true;
}