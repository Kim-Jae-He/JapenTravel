let swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup:2,
    autoplay: {
        delay: 2500,
    },

    navigation: {
        nextEl : '.slideNext',
        prevEl : '.slidePrev',
    }
});


let moreBtn = document.querySelector('.item-container1-container');
let more = document.querySelector('.item-container1 ul');
moreBtn.addEventListener('mouseover', function(){
    more.style.opacity = '1';
})
moreBtn.addEventListener('mouseleave', function(){
    more.style.opacity = '0';
});

// 도시 변경
change = () => {
    let seoulCh = document.querySelector('.seoul');
    let osakaCh = document.querySelector('.osaka');
    seoulCh.textContent = '오사카 (OSA)';
    osakaCh.textContent = '서울 (SEL)';
}

// 날짜 선택
$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  });

  up1 = () => {
    var count = document.getElementById("quantity1").value;
    if (count != 9) {
        document.getElementById("quantity1").value = parseInt(count) + 1;
    }

  }
  down1 = () => {
      var count = document.getElementById("quantity1").value;
      if (count != 1) {
          document.getElementById("quantity1").value = parseInt(count) - 1;
      }
  };
  up2 = () => {
    var count = document.getElementById("quantity2").value;
    if (count != 9) {
        document.getElementById("quantity2").value = parseInt(count) + 1;
    }

  }
  down2 = () => {
      var count = document.getElementById("quantity2").value;
      if (count != 1) {
          document.getElementById("quantity2").value = parseInt(count) - 1;
      }
  };
  up3 = () => {
    var count = document.getElementById("quantity3").value;
    if (count != 9) {
        document.getElementById("quantity3").value = parseInt(count) + 1;
    }

  }
  down3 = () => {
      var count = document.getElementById("quantity3").value;
      if (count != 1) {
          document.getElementById("quantity3").value = parseInt(count) - 1;
      }
  };
  popOn = () => {
    let popUp = document.querySelector('.popUp');
    popUp.style.opacity = '1';
  }
  popOff = () => {
    let popUp = document.querySelector('.popUp');
    popUp.style.opacity = '0';
  }