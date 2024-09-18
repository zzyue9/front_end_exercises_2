document.addEventListener('DOMContentLoaded', function(event){
    const SmallPictures = document.querySelectorAll('.Small_picture img'); // 获取所有小图
    const LargePicture = document.getElementById('large_img'); // 获取大图
    const BlackPicture = document.getElementById('black_img'); // 获取黑色图片
    let button1=document.getElementById('top_left_button') // 获取按钮
    let flag=true;
    let primevaltext=true;
    BlackPicture.style.display = 'none' //隐藏黑色图片

    // 为每个小图添加点击事件，点击时更新大图的 src
    SmallPictures.forEach(function(SmallPicture){
       SmallPicture.onclick = function(){
        LargePicture.src = SmallPicture.src; // 更新大图的 src 为点击的小图的 src
      };
    });

    // 为按钮添加点击事件，切换黑暗模式和明亮模式
    button1.onclick=function(){
        if(primevaltext){
            button1.textContent='黑暗模式';
            BlackPicture.style.display = 'block';
        }
        else{
            button1.textContent='明亮模式';
            BlackPicture.style.display = 'none';
        }
        primevaltext=!primevaltext; // 切换模式状态
    }
  });






  /*
  var img = document.getElementById("pic");
    var flag = true;
    img.onclick = function (){
        if (flag){
            img.src = "off.png";
            flag = false;
        }else{
            img.src = "on.png";
            flag = true;
        }
    }
*/