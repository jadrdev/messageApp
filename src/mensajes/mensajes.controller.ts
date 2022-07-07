import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateMensajesDto } from './dto/create-mensajes-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajesService: MensajesService) {}
  @Post()
  create(@Body() createMensajesDto: CreateMensajesDto, @Res() response) {
    this.mensajesService
      .createMensaje(createMensajesDto)
      .then((mensaje) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la creacion del mensaje' });
      });
  }
  @Get()
  getAll(@Res() response) {
    this.mensajesService
      .getAll()
      .then((mensajeList) => {
        response.status(HttpStatus.OK).json(mensajeList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la obtención del mensaje' });
      });
  }
  @Put(':id')
  update(
    @Body() updateMensajeDto: CreateMensajesDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajesService
      .updateMensaje(idMensaje, updateMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la edición del mensaje' });
      });
  }
  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajesService
      .deleteMensaje(idMensaje)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error al eliminar el mensaje' });
      });
  }
}
