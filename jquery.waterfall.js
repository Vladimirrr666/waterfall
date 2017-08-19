$.fn.waterfall = function (gap) {
    gap = gap || 10;
  
  
    var $item = this.find(".item");
    var pageWidth = $(window).width();
    var boxWidth = $item.outerWidth();
  
    //  整个页面的宽度 = boxWidth * columns + gap * columns - gap;
    //小学数学计算问题。
    var coloums = parseInt((pageWidth + 10) / (boxWidth + gap));
    console.log(coloums);
    var arr = [];
    for (var i = 0; i < coloums; i++) {
      arr.push(0);
    }
    //排序所有items， 找到数组的最小值，top:最小值   left:当前列 * (盒子宽度+间隙)
    $item.each(function () {
  
      //判断数组的最小值
      var minIndex = 0;
      var minHeight = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (minHeight > arr[i]) {
          minHeight = arr[i];
          minIndex = i;
        }
      }
  
      //设置每个item的位置
      $(this).css({
        left:minIndex * (boxWidth + gap),
        top:minHeight
      });
  
      //更新数组
      arr[minIndex] = minHeight + $(this).outerHeight();
    });
  }
  