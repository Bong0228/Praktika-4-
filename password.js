console.log("Первое задание")
let pass = prompt("Введите пароль:" )
if ( pass.length > 4 && ( pass.includes('_') || pass.includes('-') ) )
{console.log("Сильный пароль")}
else
{console.log("Слабый пароль")}