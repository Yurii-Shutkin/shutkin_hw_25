(() => {
    
    const getSum = (num = 0, increaseCount = 0, decreaseCount = 0, getCount = 0) => {

        const methods = {
            increase: closerNum => {
                return {
                    result: num += closerNum,
                    counter: ++increaseCount,
                }
            },

            decrease: closerNum => {
                return {
                    result: num -= closerNum,
                    counter: ++decreaseCount,
                }
            },

            get: () => {
                return {
                    result: num,
                    counter: ++getCount,
                }
            },

            getStatistic: () => {
                return {
                    increase: increaseCount,
                    decrease: decreaseCount,
                    get: getCount,
                }
            },

            resetValues: () => {
                num = 0;
                increaseCount = 0;
                decreaseCount = 0;
                getCount = 0;
            }
        }

        return methods;
    }

    const sum = getSum();
    
    sum.increase(22);
    sum.decrease(14);
    sum.increase(2);
    sum.get();
    sum.increase(19);
    sum.increase(2);
    sum.decrease(8);

    console.log(sum.get().result);

    console.log(sum.getStatistic());

    sum.resetValues();

    console.log(sum.getStatistic());

})();