// 新功能
let obj = {name:"zs",age:18};

function func({name = "detail",age = 22}){
    console.log("姓名：" + name);
    console.log("年龄：" + age);
};

func({});