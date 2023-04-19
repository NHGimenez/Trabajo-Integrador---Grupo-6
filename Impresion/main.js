function Enviar(){
  if(ValidarCampos()){
    const NombreApellido = document.getElementById("NombreApellido").value;
    const Empresa = document.getElementById("Empresa").value;
    const Puesto = document.getElementById("Puesto").value;
    const Telefono = document.getElementById("Telefono").value;
    const Email = document.getElementById("Email").value;
    const Localidad = document.getElementById("Localidad").value;
    const Consulta = $("#ConsultaPor option:selected").text();
    const Comentarios = document.getElementById("Comentarios").value;
    const lista = document.getElementById("lista");
    const item = document.createElement("Li");
    document.getElementById("lista").style.display = "block";
    item.innerHTML = `<strong> NombreApellido:</strong> ${NombreApellido} | <strong>Empresa:</strong> ${Empresa} | <strong>Puesto:</strong> ${Puesto} |<strong>Telefono:</strong> ${Telefono} |<strong>Email:</strong> ${Email} |<strong>Localidad:</strong> ${Localidad} | <strong>Consulta:</strong> ${Consulta} |<strong>Comentarios:</strong> ${Comentarios} <br> <button onclick="DescargarResumen()" type ="button" class="Botones">Descargar resumen</button>`;
    item.id = 'itemHijoLista';

    let itemHijo = document.getElementById("lista").getElementsByTagName("Li");

    if(itemHijo.length > 0){
      let itemBorrar = document.getElementById('itemHijoLista');
      lista.removeChild(itemBorrar);
    }
    
    lista.appendChild(item);
  }    
}

function Limpiar(){
  document.getElementById("NombreApellido").value = '';
  document.getElementById("Empresa").value = '';
  document.getElementById("Puesto").value = '';
  document.getElementById("Telefono").value = '';
  document.getElementById("Email").value = '';
  document.getElementById("Localidad").value = '';
  $("#ConsultaPor").val('Diseño3D');
  document.getElementById("Comentarios").value = '';

  $("#mensajeValidacionCampos").hide();

  document.getElementById("lista").style.display = "none";

  let itemHijo = document.getElementById("lista").getElementsByTagName("Li");

  if(itemHijo.length > 0){
    let itemBorrar = document.getElementById('itemHijoLista');
    lista.removeChild(itemBorrar);
  }
}

function ValidarCampos(){
  let pasoValidacion = false;
  let NombreApellido = $("#NombreApellido")[0].value;
    let Empresa = $("#Empresa")[0].value;
    let Puesto = $("#Puesto")[0].value;
    let Telefono = $("#Telefono")[0].value;
    let Email = $("#Email")[0].value;
    let Localidad = $("#Localidad")[0].value;
      if (NombreApellido == "" || Empresa == "" || Puesto == "" || Telefono == "" || Email == "" || Localidad == "") {
      $("#mensajeValidacionCampos").show();
    } else {
      $("#mensajeValidacionCampos").hide();
      pasoValidacion = true;
    }
  return pasoValidacion;
}

function DescargarResumen(){
  var doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontType("bold");
  doc.setFontSize(24);
  doc.text(50, 10, 'SOLICITUD DE COTIZACIÓN');
  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setFontSize(14);
  doc.text(20, 20, 'Nombre y apellido: ' + document.getElementById("NombreApellido").value);
  doc.text(20, 30, 'Empresa: ' + document.getElementById("Empresa").value);
  doc.text(20, 40, 'Puesto: ' + document.getElementById("Puesto").value);
  doc.text(20, 50, 'Teléfono: ' + document.getElementById("Telefono").value);
  doc.text(20, 60, 'Email: ' + document.getElementById("Email").value);
  doc.text(20, 70, 'Localidad: ' + document.getElementById("Localidad").value);
  doc.text(20, 80, 'Consulta por: ' + $('#ConsultaPor option:selected').text());
  doc.text(20, 90, 'Comentarios: ' + document.getElementById("Comentarios").value);

  doc.save('Resumen.pdf');
}

$( document ).ready(function() {
  $("#mensajeValidacionCampos").hide();
});

function initMap() {
  const UTN = { lat:  -31.442391730017608, lng: -64.19326539021857, };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: UTN,
  });
  const Marker = new google.maps.Marker({
    position: UTN,
    map: map,
  });
}
window.initMap = initMap;