//Abrir menu em mobile
var btns = document.querySelectorAll('.openClose')
var menumob = document.querySelector('.menu-mob')

for (i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        menumob.classList.toggle('open')
    })
}

//Abrir barra de busca 
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

