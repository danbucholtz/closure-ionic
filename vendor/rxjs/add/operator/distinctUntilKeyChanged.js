import { Observable } from '../../Observable';
import { distinctUntilKeyChanged } from '../../operator/distinctUntilKeyChanged';
Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged;
