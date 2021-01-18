import { IsString, Min, Max, IsUrl, IsInt, minDate, MinDate } from 'class-validator';
const anoAtual = new Date().getFullYear(); //Variável para armazenar o ano atual visto que não é possível se adicionar uma meta para o passado :)
export class CreateLugaresDto{
    @IsString()
    nomePais: string;

    @IsString()
    local: string;

    @Min(1)
    @Max(12)
    @IsInt()
    mes: number;

    @Min(anoAtual)
    @IsInt()
    ano: number;

    @IsUrl()
    stringPhoto: string;
}