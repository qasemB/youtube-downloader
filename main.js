var startPoint = 11;
var endPoint = 30;
function handleDownload(){
    if (startPoint <= endPoint) {
        setInterval(function(){
            var elements = document.querySelectorAll("#wc-endpoint");
            elements[startPoint].click()
            var find = setInterval(function(){
                if (document.querySelector('.el-button.el-button--text')) {
                    clearInterval(find)
                    document.querySelector('.el-button.el-button--text').click();
                }
            },5000)
            console.log(startPoint);
            startPoint++
            endPoint++
        } , 15000)
    }
}
