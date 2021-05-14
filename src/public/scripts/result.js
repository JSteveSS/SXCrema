// Getting data from form
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split("&");
var params = {};
for (var i = 0; i < paramarr.length; i++) {
  var tmparr = paramarr[i].split("=");
  params[tmparr[0]] = tmparr[1];
  // console.log('El valor del parámetro ' + tmparr[0] + ' es: ' + params[tmparr[0]]);
}

console.log(params);
// Getting json with products
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "jsonProducts", true);
xhttp.send();

xhttp.onreadystatechange = function () {
  // console.log(this.responseText);
  var datos = JSON.parse(this.responseText);

  // porosidad
  var recomend = [];
  if (
    params["porosidad"] == "baja" &&
    params["patron"] == "2a" &&
    params["volDef"] == "volumen" &&
    params["transicion"] == "si" &&
    params["natural"] == "si"
  ) {
    alert("Hola");
  } else {
    if (params["porosidad"] == "baja" && params["patron"] == "2a") {
      alert("Usa cremas solo para porosidad baja y patrón 2a");
    } else {
      if (params["porosidad"] == "baja") {
        var res = document.querySelector("#res");
        res.innerHTML = "";
        var resPorosidadNombre = [];
        resPorosidadNombre[0] = datos[1].Nombre;
        resPorosidadNombre[1] = datos[3].Nombre;
        resPorosidadNombre[2] = datos[9].Nombre;
        resPorosidadNombre[3] = datos[10].Nombre;
        resPorosidadNombre[4] = datos[12].Nombre;
        resPorosidadNombre[5] = datos[15].Nombre;
        resPorosidadNombre[6] = datos[16].Nombre;
        resPorosidadNombre[7] = datos[17].Nombre;
        resPorosidadNombre[8] = datos[21].Nombre;
        resPorosidadNombre[9] = datos[23].Nombre;
        resPorosidadNombre[10] = datos[26].Nombre;
        resPorosidadNombre[11] = datos[27].Nombre;
        resPorosidadNombre[12] = datos[29].Nombre;
        resPorosidadNombre[13] = datos[30].Nombre;

        var resPorosidadPrecio = [];
        resPorosidadPrecio[0] = datos[1].Precio;
        resPorosidadPrecio[1] = datos[3].Precio;
        resPorosidadPrecio[2] = datos[9].Precio;
        resPorosidadPrecio[3] = datos[10].Precio;
        resPorosidadPrecio[4] = datos[12].Precio;
        resPorosidadPrecio[5] = datos[15].Precio;
        resPorosidadPrecio[6] = datos[16].Precio;
        resPorosidadPrecio[7] = datos[17].Precio;
        resPorosidadPrecio[8] = datos[21].Precio;
        resPorosidadPrecio[9] = datos[23].Precio;
        resPorosidadPrecio[10] = datos[26].Precio;
        resPorosidadPrecio[11] = datos[27].Precio;
        resPorosidadPrecio[12] = datos[29].Precio;
        resPorosidadPrecio[13] = datos[30].Precio;

        var resPorosidadImgURL = [];
        resPorosidadImgURL[0] = datos[1].ImagenURL;
        resPorosidadImgURL[1] = datos[3].ImagenURL;
        resPorosidadImgURL[2] = datos[9].ImagenURL;
        resPorosidadImgURL[3] = datos[10].ImagenURL;
        resPorosidadImgURL[4] = datos[12].ImagenURL;
        resPorosidadImgURL[5] = datos[15].ImagenURL;
        resPorosidadImgURL[6] = datos[16].ImagenURL;
        resPorosidadImgURL[7] = datos[17].ImagenURL;
        resPorosidadImgURL[8] = datos[21].ImagenURL;
        resPorosidadImgURL[9] = datos[23].ImagenURL;
        resPorosidadImgURL[10] = datos[26].ImagenURL;
        resPorosidadImgURL[11] = datos[27].ImagenURL;
        resPorosidadImgURL[12] = datos[29].ImagenURL;
        resPorosidadImgURL[13] = datos[30].ImagenURL;

        // console.log(resPorosidadNombre.length);
        for (let j = 0; j < resPorosidadNombre.length; j++) {
          res.innerHTML += `
                            <tr>
                                <td id="nombreCrema">${resPorosidadNombre[j]}</td>
                                <td><img id="imgCrema" src="${resPorosidadImgURL[j]}" width="50px" height="60px"></td>
                                <td><p id="precioCrema">S/.${resPorosidadPrecio[j]}</p></td>
                            </tr>
                        `;
        }
      }
    }
  }
};

// Adding data in view
var para = document.createElement("h3");
// var t = document.createTextNode(tmparr[0] + ": " + params[tmparr[0]]);
var t = document.createTextNode('Cremas recomendadas para tu cabello');
para.appendChild(t);
document.getElementById("resultado").appendChild(para);
