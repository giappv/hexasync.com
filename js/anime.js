var randomMovement = function() {
    return anime.random(0, 200) + 'rem'
};

var randomSpeed = function() {
  return anime.random(1000, 5000) + 'rem'  
};

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

function randomPostionX() {
    return Math.floor(Math.random()*document.body.offsetHeight);
}

function randomPostionY() {
    return Math.floor(Math.random()*document.body.offsetHeight);
}

$(document).ready(function(){
	animation();
});

function ramdomSet(){
    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    $('.bubble').each( function(index){
        $(this).css({
            left: Math.random() * (bodyWidth - $(this).width()),
            top: Math.random() * (bodyHeight - $(this).height()),
            position: 'absolute',
        });
    });
}

function animation() {

    ramdomSet();
    
    var timelineParameters = anime.timeline({
        loop: true
    });

    timelineParameters
    /*.add({
        //targets: ['#bubble1', '#bubble2', '#bubble3', '#bubble4'],
        targets: ['#bubble1'],
        translateX: 0,
        translateY: 0,
        duration: 0,

        /*left: randomPostionX() + 'px',
        /* top: randomPostionY() + 'px',
        position: reletive,
        })*/
    .add({
        targets: '#bubble1',
        translateX: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200  }, { value: -400 }, { value: -600 } ],
        opacity: [ {value: 0.5 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed
    })
    /*.add({
        targets: '#bubble2',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.8 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 100
    })
    .add({
        targets: '#bubble3',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.3 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 0
    })
    .add({
        targets: '#bubble4',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.8 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 300
    })*/;
    timelineParameters.complete = function() {animation();};
}

