/* tslint:disable */
const { app, assert } = require('midway-mock/bootstrap');
/* tslint:enable */

describe('test/app/controller/user.test.ts', () => {

  it('should assert', async () =>{
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('测试/user/getUser/1', async () => {
    return app.httpRequest()
      .get('/user/getUser/1')
      .expect('{"id":"1","username":"mockedName","phone":"12345678901","email":"xxx.xxx@xxx.com"}')
      .expect(200);
  });
  it('测试/user/getAllUsers接口，返回值为[]', async ()=> {
    return app.httpRequest()
      .get('/user/getAllUsers')
      .expect([])
      .expect(200)
  })
});
