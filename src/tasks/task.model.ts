/** instalamos 
 * npm install uuid  -- Depois de instalar esse, roda o debaixo
   npm install --save-dev @types/uuid
*/
import{ v4 as uuidv4} from 'uuid';

export class Task{
    id: string;
    titulo: string;
    descricao: string;
    status: 'ABERTA' | 'FEITA' | 'REFINANDO'; /* Só recebe um deses valores setados */

    constructor(titulo: string, descricao: string){
        this.id = uuidv4(); /** UUID é um identificador universalmente exclusivo utilizado para identificação de qualquer coisa no mundo da computação */
        this.titulo = titulo; /** Referência ao objeto que vai ser criado, é isso que o this faz */
        this.descricao = descricao;
        this.status = 'ABERTA';
    }
}