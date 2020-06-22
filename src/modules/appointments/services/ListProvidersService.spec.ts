import FakeUsersProvider from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeUsersProvider: FakeUsersProvider;
let listProviders: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersProvider = new FakeUsersProvider();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersProvider,
      fakeCacheProvider,
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersProvider.create({
      name: 'John Doe I',
      email: 'johndoe1@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersProvider.create({
      name: 'John Doe II',
      email: 'johndoe2@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersProvider.create({
      name: 'John Doe III',
      email: 'johndoe3@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
