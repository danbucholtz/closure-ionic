import { Observable } from '../../Observable';
import { bufferToggle } from '../../operator/bufferToggle';
Observable.prototype.bufferToggle = bufferToggle;
