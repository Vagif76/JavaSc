
// console.log(telebeler[0].ad, telebeler [0].soyad, telebeler[0].isStudendt)
// console.log(telebeler[1].ad, telebeler [1].soyad, telebeler[1].isStudendt)
// console.log(telebeler[2].ad, telebeler [2].soyad, telebeler[2].isStudendt)

// let i = 5
// console.log(i++)
// console.log(i++)

// const tbody = document.querySelector("tbody")

const telebeler = [
    {
        soyad: "Əhmədov",
        ad: "Vaqif",
        ataAdi: "Məhəmmədəli",
        tevellud: 1976,
        telebeStatusu: true,
        yashHesabla: function() {
            return new Date().getFullYear() - this.tevellud
        }
    },

    {
        soyad: "Dadaşov",
        ad: "Məhərrəm",
        ataAdi: "",
        tevellud: 2004,
        telebeStatusu: true,
        yashHesabla: function() {
            return new Date().getFullYear() - this.tevellud
        }
    },

    {
        soyad: "İsmayılov",
        ad: "Murad",
        ataAdi: "",
        tevellud: 2008,
        telebeStatusu: false,
        yashHesabla: function() {
            return new Date().getFullYear() - this.tevellud
        }
    }
]

for(let i=0; i<telebeler.length; i++) {
    console.log(telebeler[i].soyad, telebeler[i].ad, telebeler[i].ataAdi, telebeler[i].tevellud, telebeler[i].telebeStatusu, telebeler[i].yashHesabla)
}