import {SmallService} from "./SmallService";
import {LargeService} from "./LargeService";
/**
 * Created by wenjuntan on 2016-12-31.
 */
export class ViewPortService {
    determineService(): any {
        let w: Number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w < 800) {
            return new SmallService;
        }else {
            return new LargeService;
        }
    }

}