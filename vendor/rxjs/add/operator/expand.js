import { Observable } from '../../Observable';
import { expand } from '../../operator/expand';
Observable.prototype.expand = expand;
