import { Observable } from '../../Observable';
import { windowToggle } from '../../operator/windowToggle';
Observable.prototype.windowToggle = windowToggle;
