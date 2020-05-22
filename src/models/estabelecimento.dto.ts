import { EnderecoDTO } from './endereco.dto';
import { ProdutoServicoDTO } from './produtoServico.dto';
import { UsuarioDTO } from './usuario.dto';

export interface EstabelecimentoDTO{
    id: string;
    cnpj?: string;
    nome: string;
    instagram?: string;
    facebook?: string;
    diasFuncionamento: string[];
    horario: string;
    telefones?: string[];
    site?: string;

    usuario: UsuarioDTO;
    produtoServico: ProdutoServicoDTO;
    endereco: EnderecoDTO;

    imageUrl?: string;
}