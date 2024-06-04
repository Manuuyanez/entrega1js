


function calcularCosto(distancia, consumo, precio) {
    return distancia * consumo * precio;
  }

  function iniciarTaximetro() {

    let distancia = parseFloat(prompt("Introduce la distancia del viaje en kilómetros:"));
    
    
    while (isNaN(distancia) || distancia <= 0) {
      distancia = parseFloat(prompt("Por favor, introduce un valor válido para la distancia en kilómetros:"));
    }
  
    
    let consumo = parseFloat(prompt("Introduce el consumo del vehículo en litros por kilómetro:"));
  
    
    while (isNaN(consumo) || consumo <= 0) {
      consumo = parseFloat(prompt("Por favor, introduce un valor válido para el consumo en litros por kilómetro:"));
    }
  
    
    let precio = parseFloat(prompt("Introduce el precio del combustible por litro:"));
  
    
    while (isNaN(precio) || precio <= 0) {
      precio = parseFloat(prompt("Por favor, introduce un valor válido para el precio por litro:"));
    }
  
    
    let costo = calcularCosto(distancia, consumo, precio);
  
    console.log(`El costo total del viaje es: $${costo.toFixed(2)}`);
  }
  
  
  iniciarTaximetro();