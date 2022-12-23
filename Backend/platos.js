
const platos = [
    {
        "name": "cafeconleche",
        "calorias": 38,
        proteina: 1.7,
        "carbohidratos": 2.5,
        "grasas": 2.3,
        bedida: true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": "animal",
    },

    {
        "name": "cafecortado",
        "calorias": 16,
        "proteinas": 0.9,
        "carbohidratos": 1.1,
        "grasas": 0.9,
        "bebida": true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": "animal",
    },

    {
        "name": "cafeconlechedesoja",
        "calorias": 29,
        "proteinas": 2.5,
        "carbohidratos": 2.7,
        "grasas": 1.1,
        "bebida": true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": "cafeconlechedeavena",
        "calorias": 51,
        "proteinas": 1.1,
        "carbohidratos": 6.4,
        "grasas": 2.2,
        "bebida": true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": "te",
        "calorias": 2,
        "proteinas": 0.1,
        "carbohidratos": 0.1,
        "grasas": 0.1,
        "bebida": true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": "colacao",
        "calorias": 65,
        "proteinas": 3.3,
        "carbohidratos": 11,
        "grasas": 0.8,
        "bebida": true,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": [
            {
                "bebida": "deldesayuno",
                "bebida": "delamerienda",
            }
        ],
        "origen": "animal",
    },

    {
        "name": cocacolazero,
        "calorias": 1,
        "proteinas": 0.1,
        "carbohidratos": 0.1,
        "grasas": 0.1,
        "bebida": true,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": [
            {
                "bebida": delacomida,
                "bebida": delacena,
            }
        ],
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": agua,
        "calorias": 1,
        "proteinas": 0.1,
        "carbohidratos": 0.1,
        "grasas": 0.1,
        "bebida": true,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": [
            {
                "bebida": delacomida,
                "bebida": delacena,
            }
        ],
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": tortitasdeavena,
        "calorias": 208,
        "proteinas": 5.5,
        "carbohidratos": 31.4,
        "grasas": 6.8,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": pantumaca,
        "calorias": 107,
        "proteinas": 2.7,
        "carbohidratos": 13.9,
        "grasas": 4.5,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": galletasdearrozintegral,
        "calorias": 307,
        "proteinas": 8.7,
        "carbohidratos": 80.9,
        "grasas": 3.5,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": panconmantequilla,
        "calorias": 347,
        "proteinas": 9.7,
        "carbohidratos": 39.9,
        "grasas": 19.5,
        "bebida": false,
        "plato": "desayuno",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": avenaconperaymiel,
        "calorias": 82,
        "proteinas": 2.9,
        "carbohidratos": 15.9,
        "grasas": 1.3,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": avenayogurtychia,
        "calorias": 105,
        "proteinas": 5.1,
        "carbohidratos": 13.9,
        "grasas": 3.6,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },


    {
        "name": aavenaconplatano,
        "calorias": 190,
        "proteinas": 5.4,
        "carbohidratos": 23.1,
        "grasas": 19.6,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": panconhummusyaguacate,
        "calorias": 90,
        "proteinas": 3.3,
        "carbohidratos": 16.9,
        "grasas": 1.6,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": panconaguacateytomate,
        "calorias": 194,
        "proteinas": 4.3,
        "carbohidratos": 21.9,
        "grasas": 5.6,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": panconatun,
        "calorias": 206,
        "proteinas": 17,
        "carbohidratos": 13.9,
        "grasas": 9.5,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": panconpavoytomate,
        "calorias": 161,
        "proteinas": 15.2,
        "carbohidratos": 18.9,
        "grasas": 2.5,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": quesobatido,
        "calorias": 46,
        "proteinas": 8.1,
        "carbohidratos": 3.5,
        "grasas": 0.1,
        "bebida": false,
        "plato": "merienda",
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": uvas,
        "calorias": 69,
        "proteinas": 1,
        "carbohidratos": 18,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": pomelo,
        "calorias": 42,
        "proteinas": 1,
        "carbohidratos": 11,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": platano,
        "calorias": 89,
        "proteinas": 1,
        "carbohidratos": 23,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "desayuno",
            "merienda"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": naranja,
        "calorias": 49,
        "proteinas": 1,
        "carbohidratos": 12,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": melon,
        "calorias": 34,
        "proteinas": 1,
        "carbohidratos": 8,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": manzana,
        "calorias": 52,
        "proteinas": 1,
        "carbohidratos": 14,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": pera,
        "calorias": 57,
        "proteinas": 1,
        "carbohidratos": 15,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": yogurtnatural,
        "calorias": 61,
        "proteinas": 3,
        "carbohidratos": 5,
        "grasas": 3,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": "vegetariano",
    },

    {
        "name": yogurtdesnatado,
        "calorias": 34,
        "proteinas": 4,
        "carbohidratos": 5,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": "vegetariano",
    },

    {
        "name": arroznegro,
        "calorias": 107,
        "proteinas": 5.5,
        "carbohidratos": 15.3,
        "grasas": 2.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": paella,
        "calorias": 91,
        "proteinas": 8.5,
        "carbohidratos": 9.3,
        "grasas": 2.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": arrozabanda,
        "calorias": 142,
        "proteinas": 5.5,
        "carbohidratos": 18.3,
        "grasas": 5.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": lasañadeatun,
        "calorias": 142,
        "proteinas": 10.5,
        "carbohidratos": 17.3,
        "grasas": 3.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": pistomanchego,
        "calorias": 44,
        "proteinas": 1.0,
        "carbohidratos": 5.2,
        "grasas": 2.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": albondigas,
        "calorias": 300,
        "proteinas": 20.2,
        "carbohidratos": 12.8,
        "grasas": 18.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": polloalcurry,
        "calorias": 90,
        "proteinas": 6.9,
        "carbohidratos": 4.3,
        "grasas": 5.0,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": polloalaplancha,
        "calorias": 111,
        "proteinas": 22.1,
        "carbohidratos": 1.3,
        "grasas": 3.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": sopadebrocoli,
        "calorias": 65,
        "proteinas": 2.0,
        "carbohidratos": 4.8,
        "grasas": 4.6,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": sopadecebolla,
        "calorias": 110,
        "proteinas": 3.9,
        "carbohidratos": 11.7,
        "grasas": 5.4,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": gulasalajillo,
        "calorias": 168,
        "proteinas": 13.1,
        "carbohidratos": 5.3,
        "grasas": 10.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": arrozconhuevo,
        "calorias": 144,
        "proteinas": 6.1,
        "carbohidratos": 17.3,
        "grasas": 5.3,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": patatasalopobre,
        "calorias": 117,
        "proteinas": 1.6,
        "carbohidratos": 15.8,
        "grasas": 5.8,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": puredecalabacin,
        "calorias": 53,
        "proteinas": 1.2,
        "carbohidratos": 8.5,
        "grasas": 1.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": tortilladepatata,
        "calorias": 116,
        "proteinas": 4.9,
        "carbohidratos": 11.5,
        "grasas": 5.7,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": huevosrevueltos,
        "calorias": 103,
        "proteinas": 12.6,
        "carbohidratos": 0.6,
        "grasas": 7.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "vegetariano",
    },

    {
        "name": tabuledequinoa,
        "calorias": 102,
        "proteinas": 2.1,
        "carbohidratos": 11.4,
        "grasas": 5.6,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": ensaladaclasica,
        "calorias": 46,
        "proteinas": 1.1,
        "carbohidratos": 5.8,
        "grasas": 2.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": tortillafrancesa,
        "calorias": 110,
        "proteinas": 7.1,
        "carbohidratos": 2.4,
        "grasas": 8.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "vegetariano",
    },

    {
        "name": ensaladadepasta,
        "calorias": 114,
        "proteinas": 3.3,
        "carbohidratos": 16.9,
        "grasas": 3.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": marmitako,
        "calorias": 96,
        "proteinas": 4.7,
        "carbohidratos": 7.6,
        "grasas": 2.7,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": lasañadeespinacas,
        "calorias": 134,
        "proteinas": 8.4,
        "carbohidratos": 25.2,
        "grasas": 4.8,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": lentejas,
        "calorias": 99,
        "proteinas": 4.4,
        "carbohidratos": 9.8,
        "grasas": 3.9,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": garbanzosconpatatas,
        "calorias": 124,
        "proteinas": 5.9,
        "carbohidratos": 19.3,
        "grasas": 3.0,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": ensaladadequinoa,
        "calorias": 100,
        "proteinas": 2.9,
        "carbohidratos": 15.3,
        "grasas": 4.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": brochetaseitan,
        "calorias": 179,
        "proteinas": 31.9,
        "carbohidratos": 19.3,
        "grasas": 7.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": hamburguesadegarbanzo,
        "calorias": 149,
        "proteinas": 9.9,
        "carbohidratos": 29.3,
        "grasas": 6.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": arrozconverduras,
        "calorias": 119,
        "proteinas": 3.9,
        "carbohidratos": 18.3,
        "grasas": 3.7,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": pastalpesto,
        "calorias": 234,
        "proteinas": 6.5,
        "carbohidratos": 22.8,
        "grasas": 13.5,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "vegetariano",
    },

    {
        "name": pastabolognesa,
        "calorias": 144,
        "proteinas": 6.4,
        "carbohidratos": 11.8,
        "grasas": 4.5,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": pastaconberengenaytomate,
        "calorias": 98,
        "proteinas": 3.4,
        "carbohidratos": 17.9,
        "grasas": 1.4,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": pastacontomateychampiñones,
        "calorias": 128,
        "proteinas": 4.8,
        "carbohidratos": 16.3,
        "grasas": 4.9,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": tacosveganos,
        "calorias": 113,
        "proteinas": 3.6,
        "carbohidratos": 16.4,
        "grasas": 4.3,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": esparragostriguerosconaceite,
        "calorias": 68,
        "proteinas": 2.5,
        "carbohidratos": 4.7,
        "grasas": 4.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": berengenarellenadetomate,
        "calorias": 55,
        "proteinas": 1.0,
        "carbohidratos": 9.1,
        "grasas": 2.2,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": espinacasconcebolla,
        "calorias": 75,
        "proteinas": 3.6,
        "carbohidratos": 4.8,
        "grasas": 5.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": hummus,
        "calorias": 175,
        "proteinas": 7.6,
        "carbohidratos": 23.8,
        "grasas": 8.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": verdurassalteadas,
        "calorias": 55,
        "proteinas": 3.6,
        "carbohidratos": 13.8,
        "grasas": 0.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },


    {
        "name": menestra,
        "calorias": 45,
        "proteinas": 3.6,
        "carbohidratos": 4,
        "grasas": 2,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": salteadodesetas,
        "calorias": 26,
        "proteinas": 2.6,
        "carbohidratos": 1,
        "grasas": 0.2,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": salteadodechampiñonesycebolla,
        "calorias": 60,
        "proteinas": 2.0,
        "carbohidratos": 6.2,
        "grasas": 3.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": salteadodevainasycebolla,
        "calorias": 65,
        "proteinas": 1.0,
        "carbohidratos": 7.2,
        "grasas": 3.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": salteadovainasyalmendras,
        "calorias": 106,
        "proteinas": 3.5,
        "carbohidratos": 9.2,
        "grasas": 7.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": polloconvainas,
        "calorias": 115,
        "proteinas": 14.0,
        "carbohidratos": 4.2,
        "grasas": 4.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": pechugadepavoalaplancha,
        "calorias": 105,
        "proteinas": 17.0,
        "carbohidratos": 4.2,
        "grasas": 1.6,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": terneraalaplancha,
        "calorias": 110,
        "proteinas": 19.0,
        "carbohidratos": 1.2,
        "grasas": 2.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": lubinaalhorno,
        "calorias": 133,
        "proteinas": 21,
        "carbohidratos": 0.2,
        "grasas": 5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": bacalaoalhorno,
        "calorias": 122,
        "proteinas": 20.9,
        "carbohidratos": 0.4,
        "grasas": 3.5,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": merluzaalaplancha,
        "calorias": 111,
        "proteinas": 21.3,
        "carbohidratos": 0.2,
        "grasas": 2.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": meroalhorno,
        "calorias": 122,
        "proteinas": 19.3,
        "carbohidratos": 0.2,
        "grasas": 4.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": rapealhorno,
        "calorias": 97,
        "proteinas": 19.3,
        "carbohidratos": 0.2,
        "grasas": 2.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": lomoconpatatasalhorno,
        "calorias": 152,
        "proteinas": 13.3,
        "carbohidratos": 9.2,
        "grasas": 6.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": yogurtconkiwiyplatano,
        "calorias": 62,
        "proteinas": 2.3,
        "carbohidratos": 11.8,
        "grasas": 1.2,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "postre",
        "origen": "vegetariano",
    },

    {
        "name": arrozconpimientos,
        "calorias": 78,
        "proteinas": 4.0,
        "carbohidratos": 9.3,
        "grasas": 2.9,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": lentejasconarroz,
        "calorias": 118,
        "proteinas": 4.4,
        "carbohidratos": 19.3,
        "grasas": 1.9,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": puredepuerro,
        "calorias": 67,
        "proteinas": 1.4,
        "carbohidratos": 8.3,
        "grasas": 3.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": puredezanahoriaytomate,
        "calorias": 49,
        "proteinas": 1.4,
        "carbohidratos": 7.3,
        "grasas": 2.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": ensaladadelentejas,
        "calorias": 82,
        "proteinas": 5.1,
        "carbohidratos": 12.3,
        "grasas": 1.6,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": garbanzosconespinacas,
        "calorias": 89,
        "proteinas": 4.8,
        "carbohidratos": 13.3,
        "grasas": 1.4,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": alubiasconespinacas,
        "calorias": 83,
        "proteinas": 4.1,
        "carbohidratos": 14.3,
        "grasas": 1.6,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": ensaladaalcachofasyaguacate,
        "calorias": 95,
        "proteinas": 1.7,
        "carbohidratos": 6.3,
        "grasas": 7.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": patatarellena,
        "calorias": 153,
        "proteinas": 6.9,
        "carbohidratos": 16.5,
        "grasas": 6.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": patatasconchorizo,
        "calorias": 123,
        "proteinas": 3.9,
        "carbohidratos": 14.5,
        "grasas": 5.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": tortillaconqueso,
        "calorias": 209,
        "proteinas": 13.9,
        "carbohidratos": 11.5,
        "grasas": 12.1,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "vegetariano",
    },

    {
        "name": tortillaconespinacas,
        "calorias": 96,
        "proteinas": 6.9,
        "carbohidratos": 4.0,
        "grasas": 5.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "vegetariano",
    },

    {
        "name": estofadodeterneraconverduras,
        "calorias": 91,
        "proteinas": 7.9,
        "carbohidratos": 4.5,
        "grasas": 5.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": estofadodepollo,
        "calorias": 92,
        "proteinas": 4.9,
        "carbohidratos": 13.5,
        "grasas": 2.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": estofadodecerdoconchampiñones,
        "calorias": 100,
        "proteinas": 12.9,
        "carbohidratos": 4.5,
        "grasas": 3.1,
        "bebida": false,
        "plato": "comida",
        "enquemomentosecome": "principal",
        "origen": "animal",
    },

    {
        "name": pulpoalagallega,
        "calorias": 127,
        "proteinas": 13.4,
        "carbohidratos": 13.3,
        "grasas": 2.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": croquetasdejamon,
        "calorias": 323,
        "proteinas": 24.4,
        "carbohidratos": 22.3,
        "grasas": 14.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": croquetasdechampiñones,
        "calorias": 278,
        "proteinas": 20.4,
        "carbohidratos": 22.3,
        "grasas": 12.0,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

    {
        "name": ensaladadeespinacasynueces,
        "calorias": 155,
        "proteinas": 8.7,
        "carbohidratos": 7.3,
        "grasas": 9.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": ensaladadeguisantesyzanahoria,
        "calorias": 55,
        "proteinas": 3.7,
        "carbohidratos": 4.3,
        "grasas": 0.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "principal",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": calabazarellenadequinoaysetas,
        "calorias": 69,
        "proteinas": 2.7,
        "carbohidratos": 8.3,
        "grasas": 3.9,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": guisantesconpatatas,
        "calorias": 97,
        "proteinas": 5.7,
        "carbohidratos": 13.3,
        "grasas": 2.4,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": guisantescontomate,
        "calorias": 72,
        "proteinas": 3.5,
        "carbohidratos": 11.3,
        "grasas": 1.8,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": [
            "vegetariano",
            "vegano"
        ],
    },

    {
        "name": guisantesconjamon,
        "calorias": 97,
        "proteinas": 5.8,
        "carbohidratos": 10.3,
        "grasas": 3.8,
        "bebida": false,
        "plato": [
            "comida",
            "cena"
        ],
        "enquemomentosecome": "segundo",
        "origen": "animal",
    },

]

module.exports = platos