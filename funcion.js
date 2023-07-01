 rut = prompt("Ingrese su rut: ");
if (rut.length == 8 && !isNaN(rut)){

    document.write(rut);


    function calcularDigitoVerificador(rut) {
        let rutArray =rut.split('').reverse();
        let verificador = 0;

        for (let i = 0; i < rutArray.length; i++) {
          let factor = (i % 6) + 2; 
          verificador += parseInt(rutArray[i]) * factor;
        }

      
        let resultado = verificador % 11;
        let digitoVerificador = '';
      
        if (resultado === 0) {
          digitoVerificador = '0';
        } else if (resultado === 1) {
          digitoVerificador = 'K';
        } else {
          digitoVerificador = (11 - resultado).toString();
        }
      
        return digitoVerificador;
      }

      
      let digitoVerificador = calcularDigitoVerificador(rut);
      document.write("<br/>",'Su dígito verificador es:', digitoVerificador);

}
else
{

    alert("Rut Incorrecto");    
}
