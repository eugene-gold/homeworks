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

function debounceDecoratorNew(func,ms) {
  // Ваш код
    let firstStart;
    func ();
    firstStart = true;
    if(firstStart) {
            let timerId;
            return function (...args) {
                clearTimeout(timerId)
                timerId = setTimeout(() => {
                    func.apply(this, args);
                }, ms);
            }
    }
}


function debounceDecorator2(func, ms) {
  // Ваш код
    let firstStart;
    func ();
    let count = 0;
    firstStart = true;

    if(firstStart) {
        let timerId;

        return function (...args) {
            count += 1;
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                func.apply(this, args);
            }, ms);

        }
    }
}





