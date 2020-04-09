//Declaración de variables

var nombreUsuario = "Sosa Juan";

var saldoCuenta = 500;


var limiteExtraccion= 500;


var agua=350;
var telefono=425;
var luz=210;
var internet=570;

var cuentaAmigaUno=1234567;
var cuentaAmigaDos=7654321;

var codigoSeg="0000";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  iniciarSesion();
  
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var nuevoLimite = prompt("Ingrese el nuevo limite de extraccion:");
  nuevoLimite = parseInt(nuevoLimite);

  if (consultaNan(nuevoLimite)){

    
    limiteExtraccion = nuevoLimite;
    alert("Tu nuevo limite de extraccion es: " + limiteExtraccion);
    actualizarLimiteEnPantalla(limiteExtraccion);
}
}

function extraerDinero() {
  alert("Vas a extraer dinero de tu cuenta.");
  var dinero = prompt("¿Cuanto dinero desea extraer?");
  dinero = parseInt(dinero);
  
  if (consultaNan(dinero)){
  
  if (haySaldoDisponible(dinero) == false) {
    alert(
      "No hay saldo disponible en su cuenta para extraer esa cantidad de dinero"
    );
  } else if (noSuperaLimite(dinero) == false) {
    alert("El dinero que solicita es mayor que su limite de extraccion");
  } else if (multiploCien(dinero) == false) {
    {
      alert(
        "Este cajero solo puede entregar billetes de $100. Coloque el importe correcto."
      );
    }
  } else {
    alertaActExt(saldoCuenta,dinero);
    restarDinero(dinero);
    actualizarSaldoEnPantalla();
  }
}
}

function haySaldoDisponible(dinero) {
  if (dinero <= saldoCuenta) return true;
  else {
    return false;
  }
}

function noSuperaLimite(dinero) {
  if (dinero <= limiteExtraccion) return true;
  else {
    return false;
  }
}

function multiploCien(dinero) {
  if (dinero % 100 == 0) return true;
  else {
    return false;
  }
}

function depositarDinero() {
  alert("Vas a depositar dinero en tu cuenta.");
  var dinero = prompt("¿Cuanto dinero desea depositar?");
  dinero = parseInt(dinero);
  
  if (consultaNan(dinero)){
  
  var ant = sumarDinero(0);
  alertaActDep(saldoCuenta,dinero)
  sumarDinero(dinero);
  actualizarSaldoEnPantalla();
  
}
}

function pagarServicio() {
    var servicio=prompt("Ingrese el numero que corresponda con el servicio que queres pagar:\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Telefono")
    servicio = parseInt(servicio);

    if (consultaNan(servicio)){
        
    
    
     switch(servicio){
      case 1:
        if (agua<saldoCuenta){
          var servicio="Agua";
          alertaPagoServicio(saldoCuenta,agua,servicio);
          restarDinero(agua);
          actualizarSaldoEnPantalla();
        }
        else{
          alert("No hay suficiente dinero para pagar el servicio")
        }
      break;
      
      case 2:
        if (luz<saldoCuenta){
          var servicio="Luz";
          alertaPagoServicio(saldoCuenta,luz,servicio);
          restarDinero(luz);
          actualizarSaldoEnPantalla();
        }
        else{
          alert("No hay suficiente dinero para pagar el servicio")
        }
      break;

      case 3:
        if (internet<saldoCuenta){
          var servicio="Internet";
          alertaPagoServicio(saldoCuenta,internet,servicio);
          restarDinero(internet);
          actualizarSaldoEnPantalla();
        }
        else{
          alert("No hay suficiente dinero para pagar el servicio")
        }
      break;

      case 4:
        if (telefono<saldoCuenta){
          var servicio="Telefono";
          alertaPagoServicio(saldoCuenta,telefono,servicio);
          restarDinero(telefono);
          actualizarSaldoEnPantalla();
        }
        else{
          alert("No hay suficiente dinero para pagar el servicio")
        }
      break;
      default:
        alert ("Ingrese un sevicio correcto.");
    }
}
}

function transferirDinero() {
  alert("Vas a transferir dinero de tu cuenta.");
  var dinero = parseInt (prompt("¿Cuanto dinero desea transferir?"));
  
  if(consultaNan(dinero)){
  
    if(dinero<saldoCuenta){
     
    var cuenta = prompt("Ingrese el numero de cuenta al que desea transferir el dinero.");
    cuenta = parseInt(cuenta);
    if (cuenta==cuentaAmigaUno || cuenta==cuentaAmigaDos){
      restarDinero(dinero);
      actualizarSaldoEnPantalla();
      alertaTransferencia(dinero,cuenta)}
    else{
      alert("Solo puede transferir dinero a una cuenta amiga.")
    }
  }
  else{
    alert("No puede transferir esa cantidad de dinero.")
  }
}
}

  
function iniciarSesion() {
  var cuenta = prompt("Ingrese el codigo de su cuenta");
  
  if (cuenta!=null){
    
    if (cuenta===codigoSeg){
      alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones.");
      cargarNombreEnPantalla();
    }
    
    else{
      alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
      saldoCuenta=0;
      actualizarSaldoEnPantalla;
    }
}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

function sumarDinero(montoSuma) {
  saldoCuenta = saldoCuenta + montoSuma;
}

function restarDinero(montoResta) {
  saldoCuenta = saldoCuenta - montoResta;
}

function alertaActDep(saldoCuenta,dinero){
   alert ("Has depositado: " + dinero + "\nSaldo anterior: " + saldoCuenta + "\nSaldo Actual: " + (saldoCuenta+dinero))
}

function alertaActExt(saldoCuenta,dinero){
  alert ("Vas a retirar: " + dinero + "\nSaldo anterior: " + saldoCuenta + "\nSaldo Actual: " + (saldoCuenta-dinero))
}

function alertaPagoServicio(saldoCuenta,dinero,servicio){
  alert ("Has pagado el servicio: " + servicio + "\nSaldo anterior: " + saldoCuenta + "\nDinero descontado: " + dinero + "\nSaldo Actual: " + (saldoCuenta-dinero))
}

function alertaTransferencia(dinero,cuenta){
  alert ("Se han transferido: " + dinero + "\nCuenta de destino: " + cuenta)
}

function consultaNan(dato){
  if (isNaN(dato)){
    alert("Se cancelo la operacion o ingreso un dato incorrecto.");  
  }
  else{
    return  true;
  }
  }