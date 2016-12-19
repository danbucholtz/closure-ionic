import { Subscriber } from '../Subscriber';
/**
 * Converts an Observable of {\@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {\@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {\@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {\@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {\@link materialize}.
 *
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {\@link Notification}
 * @see {\@link materialize}
 *
 * embedded in Notification objects emitted by the source Observable.
 * @owner Observable
 * @this {?}
 * @return {?}
 */
export function dematerialize() {
    return this.lift(new DeMaterializeOperator());
}
class DeMaterializeOperator {
    /**
     * @param {?} subscriber
     * @param {?} source
     * @return {?}
     */
    call(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    }
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 */
class DeMaterializeSubscriber extends Subscriber {
    /**
     * @param {?} destination
     */
    constructor(destination) {
        super(destination);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _next(value) {
        value.observe(this.destination);
    }
}
