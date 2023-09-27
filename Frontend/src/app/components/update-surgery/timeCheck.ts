import { AbstractControl } from '@angular/forms';

export function timeCheck(StartTime: string, EndTime: string) {
    return (group: AbstractControl) => {
        const startTime = group.get(StartTime);
        const endTime = group.get(EndTime);
        if (!startTime || !endTime) {
            return null;
        }
        if(startTime.errors||endTime.errors){
           return null;
        }
        console.log("a= "+startTime.value)
        console.log("b= "+endTime.value)

        if (Number(startTime.value) >= Number(endTime.value)) {
            endTime.setErrors({ timeError: true });
        } else {
            endTime.setErrors(null);
        }
        return null;
    }
}