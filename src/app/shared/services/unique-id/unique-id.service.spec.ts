import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  // Forma de deixar o nome do método sempre atualizado exemplo, importando a classe do serviço e passando o nome
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    // Forma de deixar o nome do método sempre atualizado exemplo, importando a classe do serviço e passando o nome do que esta sendo executado
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
