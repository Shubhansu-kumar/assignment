const city = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];
const cityTravel = ["Kiev"];
let j=0;
let n=0;
const tickets = [ "Paris-Skopje", "Zurich-Amsterdam","Prague-Zurich","Barcelona-Berlin","Kiev-Prague","Skopje-Paris","Amsterdam-Barcelona","Berlin-Kiev","Berlin-Amsterdam"
];
while(j<6){
for (let i=0;i<tickets.length;i++) {
    let next=tickets[i];
    if(next.startsWith(cityTravel[j])){
        let z=next.indexOf('-')
        let dis=next.substring(z+1,next.length)
        cityTravel.push(dis);
        j++;
    }
}
}
console.log(cityTravel);

 