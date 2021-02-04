let name = document.getElementById("nombre");
let dateFull = document.getElementById("fecha");

let d = new Date();

let months = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

let month = months[d.getMonth()];
let day = d.getDate();

turnos();

function turnos(){
    if(month == "Febrero"){
        if(day % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "BAUTI";
        }
        else if((day + 1) % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "JUANI";
        }
        else{
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "SALU";
        }
    }
    
    else if(month == "Marzo" || month == "Agosto"){
        if(day - 1 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "JUANI";
        }
        else if(day % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "SALU";
        }
        else if((day + 1) % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "BAUTI";
        }
        else{
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "JUANI";
        }
    }
    else if(month == "Abril" || month == "Mayo" || month == "Septiembre" || month == "Octubre"){
        if(day - 1 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "BAUTI";
        }
        else if(day % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "JUANI";
        }
        else if((day + 1) % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "SALU";
        }
        else{
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "BAUTI";
        }
    }
    
    else if(month == "Junio" || month == "Julio" || month == "Noviembre" || month == "Diciembre"){
        if(day - 1 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "SALU";
        }
        else if(day % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "BAUTI";
        }
        else if((day + 1) % 3 == 0){
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "JUANI";
        }
        else{
            dateFull.innerHTML = day + " de " + month;
            name.innerHTML = "SALU";
        }
    }    
}


