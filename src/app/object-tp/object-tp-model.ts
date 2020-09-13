export interface ObjectTpModel {
    id: number;
    /**
     * Наименование
     */
    description: String;
    /**
     * Присоединенная мощность
     */
    currentPower: String;
    /**
     * Максимальная мощность
     */
    maxPower: String;
    /**
     * Категория надежности
     */
    reliabilityCategory: String;
    /**
     * Местонахождение
     */
    location: String;
    /**
     * Кадастровый номер объекта
     */
    cadastralNumObj: String;
    /**
     * Кадастровый номер участка
     */
    cadastralNumArea: string;
    /**
     * Расположен во многоквартирном доме
     */
    locatedInBuilding: boolean;
    /**
     * Уровень напряжения
     */
    chargeType: string;
    /**
     * Установленные приборы учета
     */
    meters: MeterModel[],
    /**
     * Этап строительства
     */
    commissioningDates: CommissioningDateRow[]
}

export interface MeterModel {
    id: number;
    description: String;
    model: String;
    verificationPeriod: String;
    calculationPeriod: String,
    information: String

}

export interface CommissioningDateRow {
    id: number;
    /**
     * срок проектирования
     */
    designTime: String;
    /**
     * Срок ввода в эксплуатацию
     */
    commissioningDate: String;
    /**
     * Присоединяемая мощность
     */
    connectedPower: String;
    /**
     * Количество точек учета
     */
    accountingPointCount: number;
    /**
     * Уровень напряжения
     */
    voltageLevel: string;
    /**
     * Категория надежности
     */
    reliabilityCategory: String;
}


