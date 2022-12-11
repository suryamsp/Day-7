//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    constructor(movie,studio,rating){
        this.movie=movie;
        this.studio=studio;
        if(rating==undefined){
            this.rating="PG"
        }else{
            this.rating=rating;
        }
    }
    getPG(array){
        var result=[];
        for(var i=0;i<array.length;i++){
            if(array[i].rating=="PG"){
                result.push(array[i]);
            }
        }
        return result;
    }
    }
var movie1=new Movie("IRON FAN","MARVEL");
var movie2=new Movie("AVENGERS","MARVEL STUDIO","PG16")
console.log(movie1,movie2);

//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,DOB,region,qua){
        this.name=name;
        this.age=age;
        this.DOB=DOB;
        this.region=region;
        if(qua==undefined){
            this.rating="No qualification"
        }else{
            this.qua=qua;
        }
    }
    getPG(array){
        var result=[];
        for(var i=0;i<array.length;i++){
            if(array[i].rating=="No qualification"){
                result.push(array[i]);
            }
        }
        return result;
    }
    }
var person1=new Person("surya","25","16/09/1997","Indian");
var person2=new Person("karthick","24","11/09/1997","Indian","B.E");
console.log(person1,person2);

//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    get colorCircle(){
        return this.color;
    }
    set radiusCircle(radius){
       this.radius=radius;
    }
    set colorCircle(color){
        this.color=color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get areaCircle(){
        return Math.PI*this.radius;
    }
    get circumferenceCircler(){
return 2*Math.PI*this.radius;
}
}
var obj1=new Circle(1.0,"Red");
console.log(obj1.radiusCircle);

obj1.radiusCircle=2.2;
console.log(obj1.radiusCircle);

//write a class to calculate the uber price.


class Uber{
    constructor(Kilometer){
        this.uberprince=(5*Kilometer);  
    }
    }
var uber1=new Uber("10");
var uber2=new Uber("98");
var uber3=new Uber("65");
//var uber2=new Uber("karthick","24","11/09/1997","Indian","B.E");
console.log(uber1,uber2,uber3);

//Get all the countries from the Asia continent /region using the Filter function


var website= new XMLHttpRequest();
website.open("GET","https://restcountries.com/v3.1/all",true);
website.send();
website.onload=function(){
    var data=website.response;
    var jdata=JSON.parse(data);
    var res=jdata.filter((ele)=>ele.region=="Asia");
    console.log(res);
}

//Get all the countries with a population of less than 2 lakhs using Filter function

var website= new XMLHttpRequest();
website.open("GET","https://restcountries.com/v3.1/all",true);
website.send();
website.onload=function(){
    var data=website.response;
    var jdata=JSON.parse(data);
    var res=jdata.filter((ele)=>ele.population<200000)
    var result=res.map((ele)=>`${ele.name.common}`);
        console.log(result);
}

//Print the following details name, capital, flag using forEach function

var website= new XMLHttpRequest();
website.open("GET","https://restcountries.com/v3.1/all",true);
website.send();
website.onload=function(){
    var data=website.response;
    var jdata=JSON.parse(data);
   // var res=jdata.((ele)=>ele.population<200000)
      result=jdata.forEach((ele)=>console.log(`${ele.name.common}   :    ${ele.population}     :     ${ele.flag}`));
}
//Print the total population of countries using reduce function


var website= new XMLHttpRequest();
website.open("GET","https://restcountries.com/v2/all",true);
website.send();
website.onload=function(){
    var data=website.response
    var jdata=JSON.parse(data)
    var res=jdata.reduce((acc,cv)=>acc+cv.population,0)
    console.log("Total country population  :  "+res);
}
               
        
//Print the country which uses US Dollars as currency.

var website= new XMLHttpRequest();
website.open("GET","https://restcountries.com/v2/all",true);
website.send();
website.onload=function(){
    var data=website.response
    var jdata=JSON.parse(data)
    var res=jdata.filter((ele)=>{
        for(let key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                console.log(ele.name)
            }
        }
    })
}      
