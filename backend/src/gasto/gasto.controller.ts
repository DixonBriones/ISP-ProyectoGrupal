import { Controller, Get,Post,Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateGastoDTO } from './dto/gasto.dto';
import { GastoService } from './gasto.service';

@Controller('gasto')
export class GastoController {

    constructor(private gastoService:GastoService){}

    @Post('/create')
    async createGasto(@Res() res, @Body() createGastoDTO:CreateGastoDTO){
        const gasto= await this.gastoService.createGasto(createGastoDTO);
        return res.status(HttpStatus.OK).json({
            message: "Gasto Creado Exitosamente",
            gasto: gasto
        });
    }
    @Get('/')
    async getGastos(@Res() res){
        const gastos= await this.gastoService.getGastos();
        return res.status(HttpStatus.OK).json({
            gastos
        });
    }

    @Get('/:gastoID')
    async getGasto(@Res() res, @Param('gastoID') gastoID){
        const gasto= await this.gastoService.getGasto(gastoID);
        if(!gasto) throw new NotFoundException('Gasto no existe');
        return res.status(HttpStatus.OK).json({
            gasto

        });
    }

    @Delete('/delete')
    async deleteGasto(@Res() res, @Query('gastoID') gastoID){
        const gasto= await this.gastoService.deleteGasto(gastoID);
        if(!gasto) throw new NotFoundException('Gasto no existe');
        return res.status(HttpStatus.OK).json({
            message:'Gasto Eliminado',
            gasto
        });
    }

    @Put('/update')
    async updateGasto(@Res() res, @Body() createGastoDTO:CreateGastoDTO, @Query('gastoID') gastoID){
        const gasto= await this.gastoService.updateGasto(gastoID,createGastoDTO);
        if(!gasto) throw new NotFoundException('Gasto no existe');
        return res.status(HttpStatus.OK).json({
            message:'Gasto Modificado',
            gasto
        });
    }

}
