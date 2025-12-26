/**
 * Типы данных для сущностей системы HR
 */

export interface City {
  uuid: string;
  name: string;
}

export interface Division {
  uuid: string;
  name: string;
  cityUuid: string;
}

export interface Position {
  uuid: string;
  name: string;
}

export interface Employee {
  uuid: string;
  firstName: string;
  lastName: string;
  divisionUuid: string;
  cityUuid: string;
  positionUuid: string;
}

/**
 * Денормализованная структура сотрудника для хранения в БД
 * Содержит данные связанных сущностей напрямую для оптимизации чтения
 */
export interface EmployeeRecord {
  uuid: string;
  firstName: string;
  lastName: string;
  divisionUuid: string;
  divisionName: string;
  cityUuid: string;
  cityName: string;
  positionUuid: string;
  positionName: string;
}

