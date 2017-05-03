/**
 * Created by 40681 on 2017/5/3.
 */
function ajax(options) {
    var xhr = new XMLHttpRequest();
    return new Promise(function (resolve,reject) {
        xhr.open(options.type,options.url,options.async);
        xhr.responseType = options.dataType;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                }else{
                    reject(xhr.response);
                }
            }
        };
        xhr.send(options.data);
    });
}
ajax({
   url:'users.json',
    type:'get',
    dataType:'json',
    async:true,
    data:null,
}).then(function (data) {
    let div = document.getElementsByTagName('div');
    console.log(div);
    data.map((item,index)=> {
        div[index].innerText = item.name;

    });
},function (error) {
    console.log(error);
});