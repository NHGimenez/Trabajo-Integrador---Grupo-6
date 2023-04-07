function Enviar(){
    const NombreApellido = document.getElementById("NombreApellido").value;
    const Empresa = document.getElementById("Empresa").value;
    const Puesto = document.getElementById("Puesto").value;
    const Telefono = document.getElementById("Telefono").value;
    const Email = document.getElementById("Email").value;
    const Localidad = document.getElementById("Localidad").value;
    const Consulta = document.getElementById("Consulta").value;
    const Comentarios = document.getElementById("Comentarios").value;
    const lista = document.getElementById("lista");
    const item = document.createElement("Li");
    item.innerHTML = `<strong> NombreApellido:</strong> ${NombreApellido} | <strong>Empresa:</strong> ${Empresa} | <strong>Puesto:</strong> ${Puesto} |<strong>Telefono:</strong> ${Telefono} |<strong>Email:</strong> ${Email} |<strong>Localidad:</strong> ${Localidad} | <strong>Consulta:</strong> ${Consulta} |<strong>Comentarios:</strong> ${Comentarios}`;
    lista.appendChild(item);
    }    

    
$("h6").hide();
$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    let NombreApellido = $("#NombreApellido")[0].value;
    let Empresa = $("#Empresa")[0].value;
    let Puesto = $("#Puesto")[0].value;
    let Telefono = $("#Telefono")[0].value;
    let Email = $("#Email")[0].value;
    let Localidad = $("#Localidad")[0].value;
      if (NombreApellido == "" || Empresa == "" || Puesto == "" || Telefono == "" || Email == "" || Localidad == "") {
      $("h6").show();
    } else {
      $("h6").hide();
    }
  });
});
