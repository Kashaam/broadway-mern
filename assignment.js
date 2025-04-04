
//  create a js array of object to assign name, unitsConsumed in no format .
// consider the following and calculate the amount of bill to be paid by each user.
// if unitsCOnsumed is less than or equal to 30, a lumsum ammount of NPr.80 has to be paid
// if unit is greater than 30 and for next 20 units, the rate is 5 rs/unit
// for next 50 units, the rate is 7.5 rs/unit
// for next 100 units, the rate is 12 rs/units
// for next 200 units, the rate is 25 rs/units
// and above all, the rate is 30 rs/units





let users = [
    {name:"kasham", unitsConsumed: 50},
    {name:"Raman", unitsConsumed: 200},
    {name:"Sita", unitsConsumed:350 },
    {name:"Gita", unitsConsumed: 470},
    {name:"Mina", unitsConsumed:170 },
    {name:"Rima", unitsConsumed: 120},
    {name:"Sina", unitsConsumed: 100},
    {name:"Raya", unitsConsumed: 210},
    {name:"Seema", unitsConsumed: 80},
    {name:"Maya", unitsConsumed: 20},
    
]








for(let i = 0; i<users.length; i++){
    let bill = 0;
    if(users[i].unitsConsumed <= 30){
        users[i].bill = 80;
    }
    else if(users[i].unitsConsumed <= 50){
        users[i].bill = 80 + (users[i].unitsConsumed - 30) * 5;
    }
    else if(users[i].unitsConsumed <= 100){
        users[i].bill = 80 + 20 * 5 + (users[i].unitsConsumed - 50) * 7.5;
    }
    else if(users[i].unitsConsumed <= 200){
        users[i].bill = 80 + 20*5 + 50 *7.5 + (users[i].unitsConsumed - 100) * 12;
    }
    else if(users[i].unitsConsumed <= 300) {
        users[i].bill = 80 + 20*5 + 50*7.5 + 100 * 12 + (users[i].unitsConsumed-200) * 20;
    }
    else if(users[i].unitsConsumed <= 500){
        users[i].bill = 80 + 20*5 + 50*7.5 + 100*12 + 100*20 + (users[i].unitsConsumed-300)* 25;
    }
    else{
        users[i].bill = 80 + 20*5 + 50*7.5 + 100*12 +100*20 + 200*25 + (users[i].unitsConsumed-500)* 10;
    }
}
console.log(users);



