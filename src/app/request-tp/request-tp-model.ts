import { SimpleEnum } from 'src/app/baseModel/simple-enum';
import { ObjectTpModel } from 'src/app/object-tp/object-tp-model';

export interface RequestTpModel {
    id: number;
    date: string;
    object: ObjectTpModel;
    objectId: number | null;
    currentStatus: SimpleEnum;
    statusChangeAt: string;
    typeRequest: SimpleEnum;
    provider: String;
    
}




