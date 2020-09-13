import { SimpleEnum } from '../baseModel/simple-enum';

export interface NotificationListModel {
    object: NotificationObjectType;
    currentStatus: SimpleEnum;
    statusChangeAt: string;
}

export interface NotificationObjectType {
    id: number;
    number: string;
    ObjectType : SimpleEnum;
}