const accountId = 28302
let accountEmail = "esworaumgy0830@gmail.com"
var accountPassword = "12345"
accountCity = "kathmandu"
let accountState = "none" 


//accountId = 2 // not allowed 


accountEmail = "hc@hc.com"
accountPassword = "21312312"
accountCity = "gorkha"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

