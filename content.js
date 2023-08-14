{
  const org = '@cty.ttg.gazprom.ru'; //домен организации

  addEventListener('click', (event) => {
	const isSendButton = event.target.closest('[tabindex="570"]'); //ивент на кнопку "Отправить"
    if (!isSendButton) return;
	const tooltipElement = document.querySelector('[class^="tooltip-"][data-test-id^="tooltip-operand-"]'); //элемент с селектором поля ввода почты
    const tooltipId = tooltipElement.getAttribute('data-test-id'); 
    const emailMatch = tooltipId.match(/tooltip-operand-(.+)$/);
    const email = emailMatch[1]; //достаем полную почту и домен получателя

    if (email.indexOf(org) === -1) { //проверка на домен
      const isConfirmed = confirm('ВНИМАНИЕ! Вы отправляете письмо на сторонний домен');
	  if (isConfirmed) return;
	} else {
 	  return;
	}	
    event.preventDefault()
    event.stopImmediatePropagation()
    event.stopPropagation()
	
  }, true);
}

