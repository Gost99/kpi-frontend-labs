export interface ILocalStorageRepository {
    save(key: string, data: any): void;

    get(key: string): any;

    exists(key: string): boolean;
}