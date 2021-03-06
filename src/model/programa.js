const m = require("mithril");
const snarkdown = require("snarkdown").default;

var Programas = {
  url: {
    "lm/1": "/programas/lm/1.md",
    "lm/2": "/programas/lm/2.md",
    "lm/3": "/programas/lm/3.md",
    "lm/s": "/programas/lm/s.md"
  },
  data: {

  }
}

Programa = {
  cargar(nombre){
    if(!Programas.data[nombre]){
      Programas.data[nombre] = m.request({
        url: Programas.url[nombre],
        extract: function(xhr) {return {status: xhr.status, body: xhr.responseText}},
        deserialize: v => v
      }).then(data => {
        if(data.status != 200)
              throw new Error();
        return snarkdown(data.body);
      }).catch(() => "Sin datos disponibles");
    }
    return Programas.data[nombre];
  }
}


module.exports = Programa;
