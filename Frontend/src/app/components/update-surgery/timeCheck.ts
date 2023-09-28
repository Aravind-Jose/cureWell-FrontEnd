import { AbstractControl } from '@angular/forms';

export function timeCheck(StartTime: string, EndTime: string) {
    return (group: AbstractControl) => {
        const startTime = group.get(StartTime);
        const endTime = group.get(EndTime);
        if (!startTime || !endTime) {
            return null;
        }
        if(startTime.errors){
           return null;
        }
        if (Number(startTime.value) >= Number(endTime.value)) {
            if(Number(endTime.value)==0){
                return null;
            }           
            endTime.setErrors({ timeError: true });
        } else {
            endTime.setErrors(null);
        }
        return null;
    }
}