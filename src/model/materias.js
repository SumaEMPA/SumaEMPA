const m = require("mithril");
const snarkdown = require("snarkdown").default;
const Materias = require("/generated/materias.json");

function crearInstrumento(codigo, nombre, jazz, folklore, tango){
  return {codigo, nombre, jazz: jazz!=0, folklore: folklore!=0, tango: tango!=0};
}

const DatosInstrumentos = [
  crearInstrumento("acordeon", "Acordeón",       0, 1, 0),
  crearInstrumento("aerofonos", "Aerófonos",     0, 1, 0),
  crearInstrumento("armonica", "Armónica",       1, 1, 1),
  crearInstrumento("bajo", "Bajo",               1, 1, 1),
  crearInstrumento("bandoneon", "Bandoneón",     0, 1, 1),
  crearInstrumento("bateria", "Batería",         1, 1, 1),
  crearInstrumento("canto", "Canto",             1, 1, 1),
  crearInstrumento("charango", "Charango",       0, 1, 0),
  crearInstrumento("clarinete", "Clarinete",     1, 0, 0),
  crearInstrumento("contrabajo", "Contrabajo",   0, 1, 0),
  crearInstrumento("flauta", "Flauta",           1, 1, 1),
  crearInstrumento("guitarra", "Guitarra",       1, 1, 1),
  crearInstrumento("percusion", "Percusión",     0, 1, 0),
  crearInstrumento("piano", "Piano",             1, 1, 1),
  crearInstrumento("saxofon", "Saxofón",         1, 1, 1),
  crearInstrumento("trompeta", "Trompeta",       1, 0, 0),
  crearInstrumento("violin", "Violín",           1, 1, 1),
  crearInstrumento("Vibráfono", "Vibráfono",     0, 0, 0),
  crearInstrumento("Violonchelo", "Violonchelo", 0, 0, 1),
];

function crearAño(codigo, nombre){
  return {codigo, nombre};
}

const Años = {
  "lm": [
    crearAño("lm", "Lenguaje Musical"),
  ],
  "inst": [
    crearAño("inst", "Instrumentos"),
  ],
  "foba": [
    crearAño("fobap", "FOBA Preparatorio"),
    crearAño("foba1", "FOBA I"),
    crearAño("foba2", "FOBA II"),
    crearAño("foba3", "FOBA III"),
  ],
  "pem": [
    crearAño("pem1", "PEM I"),
    crearAño("pem2", "PEM II"),
    crearAño("pem3", "PEM III"),
    crearAño("pem4", "PEM IV"),
  ],
  "imp": [
    crearAño("imp1", "PIM I"),
    crearAño("imp2", "PIM II"),
    crearAño("imp3", "PIM III"),
    crearAño("imp4", "PIM IV"),
  ],
  "pimp": [
    crearAño("pimp1", "PIMP I"),
    crearAño("pimp2", "PIMP II"),
    crearAño("pimp3", "PIMP III"),
    crearAño("pimp4", "PIMP IV"),
  ],
  "tango": [
    crearAño("tango1", "Tango I"),
    crearAño("tango2", "Tango II"),
    crearAño("tango3", "Tango III"),
    crearAño("tango4", "Tango IV"),
  ],
  "jazz": [
    crearAño("jazz1", "Jazz I"),
    crearAño("jazz2", "Jazz II"),
    crearAño("jazz3", "Jazz III"),
    crearAño("jazz4", "Jazz IV"),
  ],
  "folklore": [
    crearAño("folklore1", "Folklore I"),
    crearAño("folklore2", "Folklore II"),
    crearAño("folklore3", "Folklore III"),
    crearAño("folklore4", "Folklore IV"),
  ]
}

function buscarMateria(codigoMateria){
  const [año, materia] = codigoMateria.split("/");
  return Materias[año].find(materia => materia.codigo == codigoMateria) || {url: ""};
}

var Cache = {};

const Programa = {
  cargar(codigoMateria){
    if(Cache[codigoMateria])
      return Cache[codigoMateria];

    const datosMateria = buscarMateria(codigoMateria);
    Cache[codigoMateria] =  m.request({
      url: datosMateria.url,
      extract: function(xhr) {return {status: xhr.status, body: xhr.responseText}},
      deserialize: v => v
    }).then(data => {
      if(data.status != 200)
        throw new Error();
      return snarkdown(data.body);
    }).catch(() => "Sin datos disponibles");

    return Cache[codigoMateria];
  },
  listarMaterias(año, instrumento){
    const materias = Materias[año] || [];
    if(!instrumento)
      return materias.filter(materia => materia.instrumentos.length == 0);
    return materias.filter(materia => materia.instrumentos.includes(instrumento) || materia.instrumentos.length==0)
                   .sort((m1, m2) => m1.instrumentos.length - m2.instrumentos.length);
  },
  listarInstrumentos(filtro){
    if(!filtro) return DatosInstrumentos;
    return DatosInstrumentos.filter(i => i[filtro]);
  },
  listarAños(categoria){
    return Años[categoria] || [];
  }
};

window.Cache = Cache;
module.exports = Programa;
