// 注册一个全局自定义指令 `v-tips`,点击查看提示

export default {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el, binding) {

    // console.log(binding,456)
    //创建一个dom
    let oTip = document.createElement('div');

    // console.log(binding.modifiers,456)
    //获取包含修饰符的对象
    let modifiers = binding.modifiers;

    //设置值
    oTip.innerHTML = `<div>${binding.value}</div>`;

    //
    oTip.className='v-tooltip__content';

    //设置绑定元素的样式
    el.style.position = 'relative';
    
    //追加
    el.appendChild(oTip);

    //判断定位上下左右
    for(let attr in modifiers) {
      if(attr == 'top') {
        oTip.style.cssText = 'left: 50%; top: -10px;  transform: translate(-50%,-100%);';
      }else if(attr == 'right') {
        oTip.style.cssText = 'right: -10px; top: 50%; transform: translate(100%,-50%)';
      }else if( attr == 'left') {
          oTip.style.cssText = 'left: -10px; top: 50%; transform: translate(-100%,-50%)';
      }else {
          oTip.style.cssText = 'left: 50%; bottom: -10px; transform: translate(-50%,100%)';
      }
    }

    //进去显示
    el.onmousemove = function() {
      oTip.style.opacity = 1;
    }

    //离开消失
    el.onmouseout = function() {
      oTip.style.opacity = 0;
    }

  }
   
}