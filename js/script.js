(() => {
    
    const getSum = (num = 0) => {

        const callCounter = {
            increase: 0,
            decrease: 0,
            get: 0,
            getStatistic: 0,
        }

        const methods = {
            increase: closureNum => {
                callCounter.increase++;
                return num += closureNum;
            },

            decrease: closureNum => {
                callCounter.decrease++;
                return num -= closureNum;
            },

            get: () => {
                callCounter.get++;
                return num;
            },

            getStatistic: () => {
                callCounter.getStatistic++;
                return callCounter;
            },

            resetValues: () => {
                num = 0;
                callCounter.increase = 0;
                callCounter.decrease = 0;
                callCounter.get = 0;
                callCounter.getStatistic = 0;
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

    console.log(sum.get());

    console.log(sum.getStatistic());

    sum.resetValues();

    console.log(sum.getStatistic());

})();