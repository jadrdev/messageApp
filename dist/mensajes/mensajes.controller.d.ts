import { CreateMensajesDto } from './dto/create-mensajes-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajesService;
    constructor(mensajesService: MensajesService);
    create(createMensajesDto: CreateMensajesDto, response: any): void;
    getAll(response: any): void;
    update(updateMensajeDto: CreateMensajesDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
