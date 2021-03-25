import { Injectable } from "@angular/core";
import { ILocalStorageRepository } from "./i-local-storage-repository";

@Injectable({
    providedIn: 'root',
})
export class LocalStorageRepository implements ILocalStorageRepository {
    save(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    exists(key: string): boolean {
        return localStorage.getItem(key) 
        ? true
        : false;
    }
}