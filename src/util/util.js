import {message} from 'ant-design-vue';

const objParams2Str = data => {
    if (typeof data !== 'object') {
        return ''
    }
    const objArr = []
    Object.keys(data).map(item => {
        if (data[item]) {
            objArr.push(`${item}=${data[item]}`)
        }
    })
    return objArr.join('&')
}

const copyText = text => {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 9999);
    document.execCommand('Copy');

    if (document.execCommand('Copy')) {
        message.success('复制成功')
    }
}

export default {
    objParams2Str,
    copyText,
}
