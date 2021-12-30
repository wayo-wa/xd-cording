// 制作実績のswiper
var mySwiper = new Swiper('.swiper', {
	centeredSlides: true,//中央に配置(.swiper-slide要素にborderを設定いる場合、.swiper-slideにbox-sizing:border-box必要！！)
	loop: true,
	speed: 1000,
  spaceBetween: 16,//margin
  slidesPerView: 1.3,
      breakpoints: {
        // 768px以上の場合
        768: {
          spaceBetween: 24,//margin
        },
        900: {
          slidesPerView: 1.75,//この数値の小数点以下で.swiper-slideのwidth:323px位になるように調整した
          spaceBetween: 40,//margin
        },
        // 1200px以上の場合
        1200: {
          slidesPerView: 3.75,//この数値の小数点以下で.swiper-slideのwidth:323px位になるように調整した
          spaceBetween: 56,//margin
        }
      },
    autoplay: {
		delay: 5000,//5秒でスライド
		disableOnInteraction: true,//操作中はautoplay止める
    },
});

//スムーススクロール
$(function () {
  var headerHight = 95; //ヘッダの高さ
  $('a[href^="#"]').click(function () {//#から始まるaタグをクリックしたら
    var href = $(this).attr("href");//hrefの中身をhref変数に渡す
    var target = $(href == "#" || href == "" ? 'html' : href);//中身が#か空欄ならhtml(ページトップ)、それ以外ならhref変数の中身を渡す
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
	  var speed = 1000;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

//aos.js(要素のアニメーション)
AOS.init({
  duration: 700,
});



//お問い合わせフォームのバリエーションチェック(jQuery validation plugin使用)
$("#contact_form").validate({
  rules: {
      your_name: {
          required: true,
          maxlength: 50
      },
      your_email: {
          required: true,
          email: true,
          maxlength: 200
      },
      your_msg: {
          required: true,
          maxlength: 200
        },
      privacy_policy: {
        required: true
      }
  },
  messages: {
      your_name: {
          required: "※入力必須です。",
          maxlength: "お名前は50文字以内で入力してください。"
      },
      your_email: {
          required: "※入力必須です。",
          email: "※不正な形式のメールアドレスです。",
          maxlength: "メールアドレスは200文字以内で入力してください。",
      },
      your_msg: {
          required: "※入力必須です。",
          maxlength: "内容は200文字以内で入力してください。"
      },
      privacy_policy: {
        required: '※選択して下さい。'
      }
   },
  //  errorラベルの変更
   errorElement: "p",// <label>から<p>に変更した
   errorClass: "is-error",// class="is-error"に変更した
   // errorメッセージを出す位置の変更
   errorPlacement: function(error, element){
     error.insertBefore(element);//エラー発生した要素の前に設置
  },
  success: function(error, element) {
    $(error).remove();// DOMに挿入するエラーラベルを削除
    $(element).removeClass('is-error');// errorクラスを削除
  },
});

//バリデーションチェック後のsubmit
//バリデーションチェックはjQuery validation pluginで行っている
function form_submit() {
  var name = document.querySelector("input[name=your_name]");
  var email = document.querySelector("input[name=your_email]");
  var msg = document.querySelector("textarea[name=your_msg]");
  var privacy = document.querySelector("input[name=privacy_policy]:checked");

  if(
      name.value !== "" &&
      email.value !== "" &&
      msg.value !== "" &&
      name.value.length < 50 &&
      email.value.length < 200 &&
      msg.value.length < 200 &&
      email.value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) &&
      privacy.value !== ""
      ) {
          console.log('当お問い合わせフォームはダミーです。');
          alert('お問い合わせを受け付けました。');
          return false;
      }
}

//Q&Aのアコーディオン
$(function(){
  $('#faq > dt').on('click',function(){
    $(this).next('dd').slideToggle();
  });
});

//ハンバーガー
$('.js-hamburger__icon').on('click', function() {
  $(this).toggleClass('is-active');
  $('.js-hamburger__nav').toggleClass('is-active');
});

//ハンバーガー内のリストクリックでメニュー閉じる
$('.js-hamburger__li').on('click', function() {
  $('.js-hamburger__icon').removeClass('is-active');
  $('.js-hamburger__nav').removeClass('is-active');
});