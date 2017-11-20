
//foreach�ļ��ݴ���
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}


/**
 * Created by Administrator on 2017-08-18.
 */
//��ʽ�����ڵĴ���

//����id��ȡԪ�صĴ���

//innerText��textContent�ļ���

//��ȡ��һ����Ԫ�صļ���

//��ȡ���һ����Ԫ�صļ���

/**
 * Created by Administrator on 2017/3/24.
 */

/**
 * ��ʽ������
 * @param dt ���ڶ���
 * @returns {string} ����ֵ�Ǹ�ʽ�����ַ�������
 */
function getDates(dt) {
    var str = "";//�洢ʱ����ַ���
    //��ȡ��
    var year = dt.getFullYear();
    //��ȡ��
    var month = dt.getMonth() + 1;
    //��ȡ��
    var day = dt.getDate();
    //��ȡСʱ
    var hour = dt.getHours();
    //��ȡ����
    var min = dt.getMinutes();
    //��ȡ��
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "��" + month + "��" + day + "�� " + hour + ":" + min + ":" + sec;
    return str;
}
/**
 * ��ȡָ����ǩ����
 * @param id ��ǩ��id����ֵ
 * @returns {Element}����id����ֵ����ָ����ǩ����
 */
function my$(id) {
    return document.getElementById(id);
}
/**
 * ����Ԫ�ص��ı�����
 * @param element ����Ԫ��
 * @param text �����ı�����
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
/**
 * ��ȡԪ�ص��ı�����
 * @param element ����Ԫ��
 * @returns {*} ����Ԫ���е��ı�����
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * ��ȡ����Ԫ���еĵ�һ����Ԫ��
 * @param element ����Ԫ��
 * @returns {*} ����Ԫ���е��Ӽ�Ԫ��
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * ��ȡ����Ԫ���е����һ����Ԫ��
 * @param element ����Ԫ��
 * @returns {*} ���һ����Ԫ��
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * ��ȡĳ��Ԫ�ص�ǰһ���ֵ�Ԫ��
 * @param element ĳ��Ԫ��
 * @returns {*} ǰһ���ֵ�Ԫ��
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * ��ȡĳ��Ԫ�صĺ�һ���ֵ�Ԫ��
 * @param element ĳ��Ԫ��
 * @returns {*} ��һ���ֵ�Ԫ��
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * ��ȡĳ��Ԫ�ص������ֵ�Ԫ��
 * @param element ĳ��Ԫ��
 * @returns {Array} �ֵ�Ԫ��
 */
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
/**
 * ���ص�ǰ�������ʲô���͵������
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("��֪��ʲô��!");
    }
}



//Ϊ����һ��Ԫ�ذ��¼�:Ԫ��,�¼�����,�¼�������
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        //֧��
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//Ϊ�����һ��Ԫ�ؽ��ĳ���¼�:Ԫ��,�¼�����,�¼�������
function removeEventListener(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}