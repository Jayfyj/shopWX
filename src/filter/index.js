import Vue from 'vue'

Vue.filter('emptyFilter', function (value) {
    if (value) {
        return value
    }else{
        return '--'
    }
});

Vue.filter('genderFilter', function (value,a) {
    // console.log(a)
    if (value === '1') {
        return '男'
    }else if(value === '2'){
        return '女'
    }
});

Vue.filter('enabledFilter', (value) => {
    if (value == '0'){
        return '否'
    }else{
        return '是'
    }
})