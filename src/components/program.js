const m = require("mithril");
const Programa = require("/model/programa.js");

const Program = function(initialVnode){

    var isLoading = true;
    var loadError = false;
    var content = null;
    var name = initialVnode.attrs.name;
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
        if(promise)
            return;

        promise = Programa.cargar(name)
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
