const url = require('url');

const myUrl =new URL('http://mywebsite.com:9000/hello.html/?id=100&status=active')

//Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host or root domain
console.log(myUrl.host)

//Hostname(doesn't get port)
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

//Add params
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

//Loop thorough params
myUrl.searchParams.forEach((value, name)=>console.log(`${name}:${value}`))