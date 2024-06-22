import { Body, Controller, HttpStatus, Post, Get, Param, HttpException } from '@nestjs/common';
import { TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService){} /** Injestão do que está na tasks.service.ts pelo controlador */

    @Post('criar')
    createTask(@Body() body: {titulo: string; descricao: string}){
        const task = this.taskService.createTask(body.titulo, body.descricao)
        return{
            statusCode: HttpStatus.CREATED,
            message: 'Task criada com sucesso!!!',
            data: task
        }
    }
    @Get()
    getAllTasks(){
        const tasks = this.taskService.getAllTasks();

        return{
            statusCode: HttpStatus.OK,
            message: 'Todas as tasks foram retornadas com sucesso.',
            data: tasks
        }
    }
    @Get(':id') /** Path parâmetro é usado para id */
    getById(@Param('id') id: string){
        const task = this.taskService.getTaskById(id);

        if(!task){
            throw new HttpException('Task não encontrada', HttpStatus.NOT_FOUND) /** SE ELE CAIR AQUI ELE VAI PARAR */
        }
        return{
            statusCode: HttpStatus.OK,
            message: 'Todas as tasks foram retornadas com sucesso.',
            data: task
        }
    }
}
