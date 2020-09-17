var slide = (function () {

    // (1)基本数据
    var data = [
        { imgName: '1', h2: 'hello', h3: 'Hello World!' },
        { imgName: '2', h2: 'hello', h3: 'Hello World!' },
        { imgName: '3', h2: 'hello', h3: 'Hello World!' },
        { imgName: '4', h2: 'hello', h3: 'Hello World!' },
        { imgName: '5', h2: 'hello', h3: 'Hello World!' },
        { imgName: '6', h2: 'hello', h3: 'Hello World!' },
        { imgName: '7', h2: 'hello', h3: 'Hello World!' }
    ]
    var dom_content = document.getElementById('div_content');
    var dom_ctrl = document.getElementById('div_ctrl');
    var tpl_content = document.getElementById('tpl_content').innerHTML; // 幻灯片内容
    var tpl_ctrl = document.getElementById('tpl_ctrl').innerHTML; // 幻灯片控制

    // (2)初始化
    var init = function () {
        renderDom();
        toggleSlide(0);
    }
    init();

    // (3)渲染幻灯片DOM
    function renderDom() {
        var contentList = [];
        var ctrlList = [];
        data.forEach(function (item, index) {
            var content = tpl_content
                .replace(/{{imgName}}/g, item.imgName)
                .replace(/{{h2}}/g, item.h2)
                .replace(/{{h3}}/g, item.h3);
            contentList.push(content);
            var ctrl = tpl_ctrl
                .replace(/{{imgName}}/g, item.imgName)
                .replace(/{{h2}}/g, item.h2)
                .replace(/{{h3}}/g, item.h3)
                .replace(/{{onclick}}/g, 'slide.toggleSlide(' + index + ')');
            ctrlList.push(ctrl);
        })
        dom_content.innerHTML = contentList.join("");
        dom_ctrl.innerHTML = ctrlList.join("");
    }

    // (4)切换幻灯片
    function toggleSlide(index) {
        var contentList = document.getElementsByClassName('content-i');//幻灯片内容集合
        var ctrlList = document.getElementsByClassName('ctrl-i');//幻灯片控制集合
        for (var i = 0; i < contentList.length; i++) {
            contentList[i].className = i > index ? 'content-i content-i-right' : 'content-i';//控制左右
        }
        for (var i = 0; i < ctrlList.length; i++) {
            ctrlList[i].className = 'ctrl-i';
        }
        contentList[index].className += ' content-i-active';
        ctrlList[index].className += ' ctrl-i-active';
    }

    return {
        toggleSlide: toggleSlide
    }

})()