import { Injectable } from "@angular/core";
import { task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class taskServive {
    tasks: task[] = [
        { id: 1, title: 'Acheter des fruits', taskDate: new Date(2024, 1, 10), location: 'Supermarché', description: 'Acheter des pommes, des oranges et des bananes.' },
        { id: 2, title: 'Réunion avec l\'équipe', taskDate: new Date(2024, 1, 15), location: 'Bureau', description: 'Réunion pour discuter des projets en cours.' },
        { id: 3, title: 'Aller chez le médecin', taskDate: new Date(2024, 1, 20), location: 'Cabinet médical', description: 'Rendez-vous pour un check-up annuel.' },
        { id: 4, title: 'Faire du jogging', taskDate: new Date(2024, 1, 25), location: 'Parc', description: 'Faire 30 minutes de jogging dans le parc.' },
        { id: 5, title: 'Rendre les livres à la bibliothèque', taskDate: new Date(2024, 1, 5), location: 'Bibliothèque municipale', description: 'Rendre les livres empruntés la semaine dernière.' },
        { id: 6, title: 'Préparer le rapport trimestriel', taskDate: new Date(2024, 1, 28), location: 'Bureau', description: 'Compiler et rédiger le rapport trimestriel pour la réunion de fin de mois.' }
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

}