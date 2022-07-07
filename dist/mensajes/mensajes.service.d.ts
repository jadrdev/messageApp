import { Repository } from 'typeorm';
import { CreateMensajesDto } from './dto/create-mensajes-dto';
import { Mensaje } from './entities/mensaje.entity';
export declare class MensajesService {
    private mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createMensaje(mensajeNuevo: CreateMensajesDto): Promise<Mensaje>;
    updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajesDto): Promise<Mensaje>;
    deleteMensaje(idMensaje: number): Promise<any>;
}
