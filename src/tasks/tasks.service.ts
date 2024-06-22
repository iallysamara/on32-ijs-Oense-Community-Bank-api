import { Injectable } from '@nestjs/common';
import { Task } from './task.model';


@Injectable()
export class TasksService {
    private tasks: Task[] = []; /** Fazendo isso porque não temos Banco de Dados */

    createTask(titulo: string, descricao: string): Task {
        const newTask = new Task(titulo, descricao);
        this.tasks.push(newTask); /** Com o Banco de Dados, usaremos um metódo para salvar no banco, ao invés desse */
        return newTask;
    }

    getAllTasks(): Task[]{
        return this.tasks; /** Só existe em memória, em tempo de execução */
    }
    getTaskById(id: string): Task{
        return this.tasks.find((task) => task.id === id); /** Pecorre a lista em busaca do ID passado na requisição e retornar a task relacionada a ele (=== extritamente igual)*/
    }
    /** Criar um delete a partir do ID, vai ser do tipo void */
}
