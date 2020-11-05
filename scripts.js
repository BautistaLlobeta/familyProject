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
    // all salu days
    if(day - 1 === 0 && month === "Diciembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "JUANI";
        console.log("juani");
    }
    else if((day - 1) === 0 && month === "Octubre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "SALU";
        console.log("salu");
    }
    else if((day - 1) % 3 === 0 && month === "Noviembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "JUANI";
        console.log("juani")
    }
    else if((day - 1) % 3 === 0 && month === "Diciembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "JUANI";
        console.log("juani")
    }
    // corregido
    else if(day % 3 === 0 && month === "Noviembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "SALU";
        console.log("Salu");
    }
    // corregido
    else if(day % 3 === 0 &&  month === "Diciembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "SALU";
        console.log("Salu");
    }
    // corregido
    else if((day + 1) % 3 === 0 && month === "Noviembre" || month === "Diciembre"){
        dateFull.innerHTML = day + " de " + month;
        name.innerHTML = "BAUTI";
        console.log("sBauti")
    }
    else if (month === "Enero"){
        document.write("NECESITA ACTUALIZACIÓN");
    }
}
