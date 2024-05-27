var serviciosData = {
    categoria1: {
        servicio1_1: {
            descripcion: "Es un documento que se inscribe en el Registro de la propiedad, demostrando así la existencia de la propiedad a nivel legal, ratificando que el inmueble está libre de ocupantes y cargas, y mostrando la voluntad de ambas partes de cumplir con el contrato.",
            requisitos: "1. Minuta firmada por vendedores y compradores, debidamente autorizada por un abogado.\n2. Copia del Autoavaluo (HR y PU)\n3. Copia de los recibos del pago anual del Impuesto Predial y/o constancia de No Adeudo."
        },
        servicio1_2: {
            descripcion: "Es un acto mediante el cual una persona natural otorga voluntariamente a otra, facultades para que actúe en su nombre y representación. Se pueden otorgar facultades de disposición (compraventa de inmuebles o vehículos), financieras o bancarias, e incluso procesales.",
            requisitos: "1. Solicitud debidamente firmada o minuta suscrita por las partes y autorizada por abogado colegiado.\n2. Proporcionar generales de ley del solicitante o de los contratantes\n3. Adjuntar fotocopia de documentos de identidad (DNI, CIP, Carnet de Extranjería, Etc.) del solicitante o contratantes.\n4. Cancelar importe de las publicaciones, cuando corresponda.\n5. Adjuntar copias originales de las partidas del Registro Civil que correspondan."
        }
    },
    categoria2: {
        servicio2_1: {
            descripcion: "Consiste en que el Notario da fe que la firma que aparece en un documento es auténtica y que pertenece a la persona que ha firmado en su presencia.",
            requisitos: "1. Presentarse a la Notaría con el documento original que se pretende legalizar.\n2. Documento de identidad original (DNI, Carné de extranjería, etc.), el DNI deberá contar con la constancia de votación al día, dispensa o pago de multas.\n3. Si la legalización de firmas es con poder o en representación de una entidad, se requiere la vigencia de poder expedida por los Registros Públicos (no debe ser mayor a 30 días de antigüedad)."
        },
        servicio2_2: {
            descripcion: "Es la certificación que realiza el funcionario consular de las reproducciones de Documentos obtenidas por cualquier medio idóneo, autorizando Con su firma que la copia que se le presenta guarda absoluta.",
            requisitos: "1. Presentarse a la notaria con el documento original que se pretende legalizar\n2. Presentar copia exacta y legible del documento original."
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var servicios = document.querySelectorAll('.list-group-item');
    
    servicios.forEach(function(servicio) {
        servicio.addEventListener('click', function() {
            var servicioId = this.id;
            var categoriaId = this.closest('.accordion-collapse').id;

            var descripcion = serviciosData[categoriaId][servicioId].descripcion;
            var requisitos = serviciosData[categoriaId][servicioId].requisitos;

            document.getElementById('servicioTitulo').innerText = this.innerText;
            document.getElementById('servicioDescripcion').innerHTML = descripcion.replace(/\n/g, '<br>');

            var requisitosElement = document.getElementById('servicioRequisitos');
            requisitosElement.innerHTML = '';  // Clear existing list
            requisitos.split('\n').forEach(function(requisito) {
                var li = document.createElement('li');
                li.innerText = requisito;
                requisitosElement.appendChild(li);
            });
        });
    });
});