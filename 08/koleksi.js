let listMahasiswa = ["Arya", "Dini", "Riski"];
listMahasiswa.push("Caca"); 
console.log(listMahasiswa); 


let setMahasiswa = new Set(["Arya", "Dini", "Riski"]);
setMahasiswa.add("Caca");
setMahasiswa.add("Samin"); 

console.log(setMahasiswa);


let mapNilai = new Map();
mapNilai.set("Arya", 60);
mapNilai.set("Dini", 100);
console.log(mapNilai.get("Arya")); 
