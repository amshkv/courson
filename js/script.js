$(function() {
  // переход с кнопок

  $('.js-button').click(function() {
    var scrollToElement = $(this).attr('data-href');
    $('html,body').animate(
      { scrollTop: $(scrollToElement).offset().top + 'px' },
      { duration: 1e3 }
    );
  });

  // типа отправка формы
  $('.form').submit(function(event) {
    event.preventDefault();

    var $form = $(this),
      $firstName = $form.find('.js-first-name-input').val(),
      $lastName = $form.find('.js-last-name-input').val(),
      $phone = $form.find('.js-phone-input').val(),
      $email = $form.find('.js-email-input').val(),
      $agreement = $form.find('#isAgree').is(':checked');

    if (!validateEmail($email)) {
      $form
        .find('.js-email-input')
        .parent()
        .addClass('error');
      return;
    } else {
      $form
        .find('.js-email-input')
        .parent()
        .removeClass('error');
      alert(
        'Форма как-бы должна куда-то уйти, имя - ' +
          $firstName +
          ', фамилия - ' +
          $lastName +
          ', телефон - ' +
          $phone +
          ', e-mail - ' +
          $email +
          ' Согласие на обработку персональных данных - ' +
          $agreement +
          '. Всё!'
      );
    }
  });

  // смена состояния заполненного поля
  $('.form__item-input').on('change keyup input click', function() {
    var field = $(this).val();
    var fieldtrim = $.trim(field);
    if (fieldtrim == '') {
      $(this).removeClass('active');
      $(this).val('');
    } else {
      $(this).addClass('active');
    }
  });

  // маска телефона в форме

  $('.js-phone-input').mask('+7 (999) 999-99-99');

  // валидация email
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
});
