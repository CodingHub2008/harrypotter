var names=["Abraham ","Agahnim ","Alatar ","Alastair ","Albus ","Blaise ","Cedric ","David ","Draco ","Everard ","Gandalf ","Gwydion ","Harry ","Merlin ","Kingsley ","Lucius ","Neville ","Prospero ","Penn ","Peter ","Puck ","Radagast ","Remus ","Rincewind ","Ronald ","Rubeus ","Saruman ","Sauron ","Severus ","Sirius "];
var names2=["Abigail ","Agatha ","Alecto ","Astra ","Bellatrix ","Cassandra ","Circe ","Elphaba ","Elsa ","Endora ","Fleur ","Ginny ","Glinda ","Gwen ","Hermione ","Jadis ","Luna ","Matilda ","Minerva ","Molly ","Morgan ","Narcissa ","Nessarose ","Poppy ","Raven ","Ravenna ","Rowena ","Sabrina ","Samantha ","Sarah ","Selene ","Ursula ","Wanda "];
var surname=["Lupin ","Nott ","Macmillan ","Olivander ","Parkinson ","Bones ","Dumbledore ","Selwyn ","Black ","Lestrange ","Scamander ","Longbottom ","Malfoy ","Weasley ","Potter","Dawlish","Whitby","Helga"];
var random;
function getrandomname(id, boys){
  if(boys){
    document.getElementById(id).innerHTML=getrandom(names)+ getrandom(surname);
  }
  else{
    document.getElementById(id).innerHTML=getrandom(names2)+ getrandom(surname);
  }
}

function getrandom(nameArray){
  random = Math.floor(Math.random()*nameArray.length);
  return nameArray[random];
}

