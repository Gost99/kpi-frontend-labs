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
            let count = 0;
            const departments: Department[] = [
                { id: count++, name: 'Commercial Projects Operation', description: 'description...'},
                { id: count++, name: 'Call-Center Unit', description: 'description...'},
                { id: count++, name: 'Finance', description: 'description...'},
                { id: count++, name: 'General Administration', description: 'description...'},
                { id: count++, name: 'Human Resources', description: 'description...'},
                { id: count++, name: 'Information Technologies', description: 'description...'},
                { id: count++, name: 'Planning, Reporting and Monitoring Unit', description: 'description...'},
                { id: count++, name: 'Commercial Projects', description: 'description...'}
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