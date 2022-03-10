interface FooCepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor(cepApi: FooCepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;