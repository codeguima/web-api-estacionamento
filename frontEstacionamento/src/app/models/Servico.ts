import { Ticket } from "./Ticket";

export class Servico
{
    _idServico?: number;
    _codTicket: Ticket = new Ticket();
    _tipoServico: string = "";
    _valorServico: number=0.0;
    _Pagamento: boolean = false;
}
