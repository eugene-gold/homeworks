function cachingDecoratorNew (func) {
  // Ваш код
    const cache = [];
    function wrapper(...arguments) {
        const hash = [arguments].join(',')
        const objInCache = cache.find(item => item.hash === hash )
        if (objInCache) {
            console.log(`Из кэша: ${objInCache['value']}`)
            return `Из кэша: ${objInCache['value']}`
        }
        const result = arguments.reduce((a,b) => a + b)
        if(cache.length < 5) {
            cache.push({['hash']: `${hash}`, ['value']: result})
            console.log(`Вычисляем: ${result}`)
            return `Вычисляем: ${result}`
        } else {
            cache.shift()
            cache.push({['hash']: `${hash}`, ['value']: result})
            console.log(`Вычисляем: ${result}`)
            return `Вычисляем: ${result}`
        }
    }
    return wrapper
}

function debounceDecoratorNew(func) {
  // Ваш код
    const debounceDecorator = (f, ms) => {
        let timerId;
        let firstStart;
        if (firstStart) {

            return function (...args) {
                setTimeout(() => {
                    f.apply(this, args);
                },);
                firstStart = false;
                clearTimeout(timerId);
                timerId = setTimeout(() => {
                    f.apply(this, args);
                }, ms);

            };
        }
    }

}



function debounceDecorator2(func) {
  // Ваш код
}
