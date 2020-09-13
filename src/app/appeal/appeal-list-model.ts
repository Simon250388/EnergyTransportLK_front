
import { SimpleEnum } from 'src/app/baseModel/simple-enum';


export interface AppealListModel {
    id: number;
    date: string;
    currentStatus: SimpleEnum;
    statusChangeAt: string;
    typeRequest: SimpleEnum
}


