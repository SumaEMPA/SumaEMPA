const m = require("mithril");
const Materias = require("/model/materias.js");

const Program = function(initialVnode){

    var isLoading = true;
    var loadError = false;
    var content = null;
    var code = initialVnode.attrs.code;
    var promise = null;

    function setData(data){
        content = data;
        isLoading = false;
    }

    function setError(){
        isLoading = false;
        loadError = true;
    }

    function loadPromise(){
        if(promise != null)
            return;

        promise = Materias.cargar(code)
                          .then(setData)
                          .catch(setError);
    }

    return {
        view(){
            loadPromise();

            if(isLoading)
                return "Cargando....";
            if(loadError)
                return "No hay datos";

            return m.trust(content);
        }
    }
}

module.exports = Program;
