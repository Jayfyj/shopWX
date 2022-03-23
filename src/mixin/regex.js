/**
 * 定义一个正则
 * */
const regex = {
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    mostTwenty: /^.{1,20}$/,
    mostTwentyFive: /^.{1,25}$/,
    mostThirty: /^.{1,30}$/,
    mostFifty: /^.{1,50}$/,
    mostTen: /^.{1,10}$/,
    mostFourHundred: /^.{1,400}$/,
    thirtyToTwohundred: /^.{30,200}$/,
    code: /^[a-zA-Z0-9_\\-]+$/,
    phoneNumber: /^((\(\d{3}\))|(\d{3}\\-))?1[23456789][0-9]\d{8}|15[89]\d{8}/,
    number: /^\d*$/,
    numberMostTwo: /^\d{0,2}$/,
    http: /^http/,
    mima: /^.*(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\\(\\)]).*$/,
    anyChar: /^[^\u4e00-\u9fa5]+$/,
    pergramCode:/^[a-zA-Z_]+$/,//只要求英文或者下划线
    pergramChannelCode:/^[a-zA-Z0-9_]+$/,//只要求英文/数字/下划线
    pergramOrderNo:/^\d{1,5}$/,//5位数字以下
    pergramQuantity:/^\d{1,10}$/,//10位数字以下
    pergramInterface: /^[a-zA-Z0-9_//]+$/, //只要求英文/数字/下划线/‘/’
    charSome: /^[\u4e00-\u9fa5a-zA-Z0-9_-]+$/, //不允许输入特殊字符
    viewPath: /^[\u4e00-\u9fa5a-zA-Z0-9_\\/-]+$/, //不允许输入特殊字符(视图路径)
    interfacePath: /^[\u4e00-\u9fa5a-zA-Z0-9_\\/-]+$/, //不允许输入特殊字符（接口路径）
}

export default {
    data: function () {
        return {
            regex: regex
        }
    }
};
