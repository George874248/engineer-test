import { IDb } from "./db";
import { City, Division, Position, EmployeeRecord } from "./types";

/**
 * Репозиторий для работы с данными HR системы
 * Оптимизирован для операций чтения через денормализацию данных
 */
export class HRRepository {
  private db: IDb;

  constructor(db: IDb) {
    this.db = db;
  }

  /**
   * Получить все города
   */
  async getCities(): Promise<City[]> {
    const response = await this.db.query({
      type: "city",
      where: {}
    });

    return response.items.map(item => item.data as City);
  }

  /**
   * Получить все подразделения
   */
  async getDivisions(): Promise<Division[]> {
    const response = await this.db.query({
      type: "division",
      where: {}
    });

    return response.items.map(item => item.data as Division);
  }

  /**
   * Получить все должности
   */
  async getPositions(): Promise<Position[]> {
    const response = await this.db.query({
      type: "position",
      where: {}
    });

    return response.items.map(item => item.data as Position);
  }

  /**
   * Получить все сотрудников с денормализованными данными
   * Данные уже содержат имена городов, подразделений и должностей
   */
  async getEmployees(): Promise<EmployeeRecord[]> {
    const response = await this.db.query({
      type: "employee",
      where: {}
    });

    return response.items.map(item => item.data as EmployeeRecord);
  }

  /**
   * Получить город по UUID
   */
  async getCityByUuid(uuid: string): Promise<City | null> {
    const response = await this.db.query({
      type: "city",
      where: { uuid }
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0].data as City;
  }

  /**
   * Получить подразделение по UUID
   */
  async getDivisionByUuid(uuid: string): Promise<Division | null> {
    const response = await this.db.query({
      type: "division",
      where: { uuid }
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0].data as Division;
  }

  /**
   * Получить должность по UUID
   */
  async getPositionByUuid(uuid: string): Promise<Position | null> {
    const response = await this.db.query({
      type: "position",
      where: { uuid }
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0].data as Position;
  }
}

