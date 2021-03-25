import { Injectable } from '@angular/core';
import { LocalStorageRepository } from '@shared/communication/local-storage/local-storage-repository';
import { Department } from 'src/app/departments/models/department';


export const DepartmentsDataKey: string = "DepartmentsData";

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {

    constructor(private localStorageRepository: LocalStorageRepository) {
        if(!localStorageRepository.exists(DepartmentsDataKey)) {
            const departments: Department[] = [
                { id: 0, name: 'HR', description: 'HR department'},
                { id: 1, name: 'IT', description: 'IT department'},
                { id: 2, name: 'Support', description: 'Support department'},
            ];
            this.localStorageRepository.save(DepartmentsDataKey, departments);
        }
    }
    
    public getAll() : Promise<Department[]> {
        const self: DepartmentsService = this;
        const promise: Promise<Department[]> = new Promise<Department[]>(function(resolve, reject) {
            setTimeout(() => {
                const departments: Department[] = self.localStorageRepository.get(DepartmentsDataKey);
                resolve(departments);
            }, 1000);
          });
          return promise;
    }
    
    public save(newData: Department[]) : Promise<void> {
        const self: DepartmentsService = this;
        const promise: Promise<void> = new Promise<void>(function(resolve, reject) {
            setTimeout(() => {
                self.localStorageRepository.save(DepartmentsDataKey, newData);
                resolve();
            }, 1000);
        });
        return promise;
        
    }


}