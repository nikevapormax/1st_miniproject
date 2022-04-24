$(document).ready(function () {

    $('.trigger').on('click', function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
    $(function () {
        $("#close").on("click", function () {
            $("#modal-wrapper").hide();
        })
    })
    
    $('h1.mytitle').fadeIn(2000);
    $('button.btn').fadeIn(4000);
    $('a.btn2').fadeIn(4000);

    $('#mybtn2').click(function () {
        var offset = $('#people').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#mybtn2').click(function () {
        var offset = $('#people').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#ks').click(function () {
        var offset = $('#a').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#ss').click(function () {
        var offset = $('#b').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#sk').click(function () {
        var offset = $('#c').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#dg').click(function () {
        var offset = $('#d').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#jh').click(function () {
        var offset = $('#e').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#a1').click(function () {
        var offset = $('#myteam').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#b1').click(function () {
        var offset = $('#myteam').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#c1').click(function () {
        var offset = $('#myteam').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#d1').click(function () {
        var offset = $('#myteam').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });
    $('#e1').click(function () {
        var offset = $('#myteam').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
        $('html').animate({scrollTop: offset.top}, 400);
    });

});

// window.addEventListener('wheel', function (e) {
//     e.preventDefault();
// }, {passive: false});
//
// let $html = $('html');
// let page = 1;
// let lastPage = $('.content').length;
// $html.animate({scrollTop: 0}, 30);

// $(window).on('wheel', function (e) {
//     if ($html.is('.animated')) return;
//     if (e.originalEvent.deltaY > 0) {
//         if (page == lastPage) return;
//         page++;
//     } else if (e.originalEvent.deltaY < 0) {
//         if (page == 1) return;
//         page--;
//     }
//     let posTop = (page - 1) * $(window).height();
//
//     $html.animate({scrollTop: posTop})
// });