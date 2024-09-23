import { Injectable } from "@angular/core";
import { task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class taskServive {
    tasks: task[] = [
        { id: 1, title: 'Acheter des fruits', taskDate: new Date(2024, 1, 10), location: 'Supermarché', done: true, description: 'Acheter des pommes, des oranges et des bananes.' },
        { id: 2, title: 'Réunion avec l\'équipe', taskDate: new Date(2024, 1, 15), location: 'Bureau', done: true, description: 'Réunion pour discuter des projets en cours.' },
        { id: 3, title: 'Aller chez le médecin', taskDate: new Date(2024, 1, 20), location: 'Cabinet médical', done: false, description: 'Rendez-vous pour un check-up annuel.' },
        { id: 4, title: 'Faire du jogging', taskDate: new Date(2024, 1, 25), location: 'Parc', done: true, description: 'Faire 30 minutes de jogging dans le parc.' },
        { id: 5, title: 'Rendre les livres à la bibliothèque', taskDate: new Date(2024, 1, 5), location: 'Bibliothèque municipale', done: false, description: 'Rendre les livres empruntés la semaine dernière.' },
        { id: 6, title: 'Préparer le rapport trimestriel', taskDate: new Date(2024, 1, 28), location: 'Bureau', done: false, description: 'Compiler et rédiger le rapport trimestriel pour la réunion de fin de mois.' }
    ];

    getAllTasks(): task[] {
        return this.tasks
    }

    getTaskById(taskId: number): task {
        const task = this.tasks.find((task) => task.id === taskId)
        if (task !== undefined) {
            return task;
        } else {
            throw new Error('can\'t find this task');
        }
    }

    getDoneTasks() : task[] {
        return this.tasks.filter((task) => task.done)
    }

    getNoneDoneTasks() : task[] {
        return this.tasks.filter((task) => !task.done)
    }

    makeTaskDone(taskId: number): void {
        const task = this.tasks.find((task) => task.id ==taskId)
        if (task !==undefined) {
            if (task.done) {
                throw new Error('this task is already done')
            } else {
                task.done = true
            }
        } else {
            throw new Error('can\'t find this task')
        }
    }

    makeTaskNotDone(taskId: number): void {
        const task = this.tasks.find((task) => task.id ==taskId)
        if (task !==undefined) {
            if (task.done) {
                task.done = false
            } else {
                throw new Error('this task is already not done')
            }
        } else {
            throw new Error('can\'t find this task')
        }
    }

}