import { EstabelecimentoDTO } from './estabelecimento.dto';
export interface ProdutoServicoDTO{
    
    id: string;
    nome: string;
    preco: number;
    
    estabelecimento: EstabelecimentoDTO; 
    imageUrl?: string;

}