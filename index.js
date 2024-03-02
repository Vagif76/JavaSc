

const telebeler = [

 {
    ad: "Vaqif",
    soyad: "Ehmedov",
    tevellud: 1976,
    isStudendt: true,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},  

{
    ad: "Meherrem",
    soyad: "Dadashov",
    tevellud: 2004,
    isStudendt: true,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    ad: "Murad",
    soyad: "Ismayilov",
    tevellud: 2008,
    isStudendt: false,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
}

]

// console.log(telebeler[0].ad, telebeler [0].soyad, telebeler[0].isStudendt)
// console.log(telebeler[1].ad, telebeler [1].soyad, telebeler[1].isStudendt)
// console.log(telebeler[2].ad, telebeler [2].soyad, telebeler[2].isStudendt)

// let i = 5
// console.log(i++)
// console.log(i++)

const tbody = document.querySelector("tbody")

for(let i=0; i<telebeler.length; i++) {
    console.log(telebeler[i].ad)
}