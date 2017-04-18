define([], function () {
    return {
        local: '',
        setLocal: function (local) {
            localCache.local = local || 'localStorage';
        },
        put: function (key, value, seconds) {
            return ;
            value = value || '';
            key = 'kon_' + key;
            seconds = parseInt(seconds);
            if (!key) throw new Error('key can not be empty');
            var driver = this.local === 'session' ? sessionStorage : localStorage;
            if (isNaN(seconds)) {
                driver.setItem(key, JSON.stringify(value));
            } else {
                var temp = {
                    value: value,
                    time: (new Date()).getTime() + seconds * 1000
                };
                driver.setItem(key, JSON.stringify(temp));
            }
        },
        get: function (key) {
            return null;
            if (!key) throw new Error('key can not be empty');
            key = 'kon_' + key;
            var driver = this.local === 'session' ? sessionStorage : localStorage;
            var theValue = JSON.parse(driver.getItem(key));
            if (!theValue)return null;
            var time = (new Date()).getTime();
            if (theValue.time) {
                if (+theValue.time >= time)
                    return theValue.value;
                else
                    return null;
            } else {
                return theValue;
            }
        },
        forget: function (key) {
            key = 'kon_' + key;
            var driver = this.local === 'session' ? sessionStorage : localStorage;
            driver.removeItem(key);
        }
    };
});