let name=prompt("Введите свое имя: "); let surname=prompt("Введите свою фамилию: ");
let upname=name.toUpperCase(); let upsurname=surname.toUpperCase();
let standartusername=upname.substr(1); let normalsurname=upsurname.substr(1);
standartusername=standartusername.toLowerCase(); normalsurname=normalsurname.toLowerCase();
let n_surname=upsurname[0]; let n_name=upname[0];
let last_name=n_name+standartusername; let last_surname=n_surname+normalsurname;
if(last_name==name&&last_surname==surname)
{alert(name+" "+surname+"    "+"Вид имени и фамилии написан корректно.");}
else{if(last_name==name&&last_surname!=surname) {alert(name+" "+last_surname+"    "+"Вид имени имеет нормальный вид. Фамилия преведена в нормальный виду.");}
else{if(last_name!=name&&last_surname==surname) {alert(last_name+" "+surname+"    "+"Вид имени переделан в стандартный. Вид фамилии имеет нормальный вид.");}
else{alert(last_name+" "+last_surname+"     "+"Виды имени и фамилии переделаны в нормальный вид.");}};}