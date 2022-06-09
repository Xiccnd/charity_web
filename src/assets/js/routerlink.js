export default function (index, element, activeName) {
  // 获取所有节点,注意querySelectorAll是按顺序获取节点的.
  let allEle = document.querySelectorAll(element);
  // 生成带有高亮类名(如.active)的正则表达式
  let reg = new RegExp(activeName, 'g');  // 生成类似 /active/g 这样的正则表达式
  // 每一项的数组字符串(名字除 active外,可以不相同)
  let arr = [];
  // 获取每一项的标识字段(class等名字)
  allEle.forEach(item => {
    // 如果元素没有class类名等,则没有_prevClass这个属性,则push空串
    if (item.hasOwnProperty('_prevClass')) {
      arr.push(item._prevClass.replace(reg, ''));
    } else {
      arr.push('')
    }
  })
  // 动态赋值,重置每一项的标识字段
  allEle.forEach((item, i) => {
    item.className = arr[i] + '';
  });
  // 动态高亮
  allEle[index].className += ' ' + activeName;
}