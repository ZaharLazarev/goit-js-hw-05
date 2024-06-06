const getTotalBalanceByGender = ((users, gender)=>{
  const arrayM=users.filter(user=>user.gender==="male")
  .reduce((a,b)=>{
    return a+b.balance;
  },0)
  const arrayF=users.filter(user=>user.gender==="female")
  .reduce((c,d)=>{
    return c+d.balance;
  },0)
  if(gender==="male"){
    return arrayM;
  }
  else{
    return arrayF;
  }
})
const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863