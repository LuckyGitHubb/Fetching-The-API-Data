var inputProduct = document.getElementById('inputProduct');
var tdTitle = document.getElementById('tdTitle');
var tdPrice = document.getElementById('tdPrice');
var tdBrand = document.getElementById('tdBrand');
var imgProductImage = document.getElementById('imgProductImage');

function searchProduct_Click(){
    var url = `https://dummyjson.com/products/${inputProduct.value}`;
    var Method = 'GET';
    getProductByApiCalling(url,Method);
}

function getProductByApiCalling(url,Method){
    var request = new XMLHttpRequest();
    request.open(Method,url,true);
    request.onload = callBackAfterResponse;

    request.send();
}

function callBackAfterResponse(){
    var responseData = this.responseText;
    var jsObject = JSON.parse(responseData);
    tdTitle.innerHTML = jsObject.title;
    tdPrice.innerHTML = jsObject.price;
    tdBrand.innerHTML = jsObject.brand;
    imgProductImage.src = jsObject.thumbnail;
    // tdTitle.innerHTML = jsObject.title;
}