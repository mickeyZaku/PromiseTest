/**
 * Created by 40681 on 2017/5/3.
 */
class Promise {
    constructor(fn){
        let resolve = function (data) {
            this.onSuccess(data);
        };
        let reject = function (error) {
            this.onFail(error);
        };
        fn(resolve,reject);
    }
    then(onSuccess,onFail){
        this.onSuccess = onSuccess;
        this.onFail = onFail;
    }
}