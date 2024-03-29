var storage={

    // set(key,value){

    //     localStorage.setItem(key, JSON.stringify(value));
    // },
    // get(key){

    //     return JSON.parse(localStorage.getItem(key));
    // },remove(key){
    //     localStorage.removeItem(key);
    // }

    set: function (key, data, time) {
        try {
            if (!localStorage) {
                return false;
            }
            if (!time || isNaN(time)) {
                time = 60*60*3;
            }
            var cacheExpireDate = (new Date() - 1) + time * 1000;
            var cacheVal = {val: data, exp: cacheExpireDate};
            localStorage.setItem(key, JSON.stringify(cacheVal));//存入缓存值
        } catch (e) {
        }
    },
    get: function (key) {
        try {
            if (!localStorage) {
                return false;
            }
            var cacheVal = localStorage.getItem(key);
            var result = JSON.parse(cacheVal);
            var now = new Date() - 1;
            //缓存不存在
            if (!result) {
                return null;
            }
            //缓存过期
            if (now > result.exp) {
                this.remove(key);
                return "";
            }
            return result.val;
        } catch (e) {
            this.remove(key);
            return null;
        }
    },
    remove: function (key) {
        if (!localStorage) {
            return false;
        }
        localStorage.removeItem(key);
    }

}

export default storage;