let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../build/index.js');
let should = chai.should();

chai.use(chaiHttp);


describe('/POST song', () => {
    it('it should POST a song', async() => {
            let song  = {
                nombre: "a",
                artista: "Kiss",
                album: "kiss1",
                genero: "Rock clásico",
                duracion: "5:03"
            }
           const res = await chai.request(server).post('/api/v1/canciones/').send(song)
            res.should.have.status(201);
    });
});
describe('/POST nosong', () => {
    it('it should not POST a song', async () => {
            let song  = {
                hola: "hola"
            }
            const res = await chai.request(server)
            .post('/api/v1/canciones/')
            .send(song)
                res.should.have.status(404);
            
    });
});

describe('/GET songs', () => {
    it('it should GET all the songs',  () => {
         chai.request(server)
          .get('/api/v1/canciones/')
          .end((err, res) => {
                res.should.have.status(200);
          });
          
    });
  });  
  describe('/GET/:id song', () => {
    it('it should GET a song by the given id', () => {
        let id = '5db086172943c633e8abb698';
        
        chai.request(server)
          .get('/api/v1/canciones/' + id)
          .end((err, res) => {
                res.should.have.status(200);
          });
    });
});

describe('/GET/:id nosong', () => {
    it('it should not GET a song by the given id', () => {
        let id = 'hola';
        
        chai.request(server)
          .get('/api/v1/canciones/' + id)
          .send(id)
          .end((err, res) => {
                res.should.have.status(404);
          });
    });
});


describe('/PUT/:id song', () => {
    it('it should UPDATE a song given the id', () => {
        let id = '5db1b9d74e688540309fe0ee';
              chai.request(server)
              .put('/api/v1/canciones/' + id)
              .send({nombre: "UPDATED",
              artista: "AC/DC",
              album: "HellsBells",
              genero: "Rock clásico",
              duracion: "5:08"})
              .end((err, res) => {
                    res.should.have.status(204);
              });
    });
});

describe('/PUT/:id nosong', () => {
    it('it should not UPDATE a song given the unexisting id', () => {
        let id = 'hola';
              chai.request(server)
              .put('/api/v1/canciones/' + id)
              .send({nombre: "a",
              artista: "AC/DC",
              album: "HellsBells",
              genero: "Rock clásico",
              duracion: "5:08"})
              .end((err, res) => {
                    res.should.have.status(404);
              });
    });
});

describe('/DELETE/:id nosong', () => {
    it('it should not DELETE a song given the id', () => {
        let id = 'hola';
              chai.request(server)
              .delete('/api/v1/canciones/' + id)
              .end((err, res) => {
                    res.should.have.status(404);
              });
    });
});
describe('/DELETE/:id song', () => {
    it('it should DELETE a song given the id', () => {
        let id = '5db1bce8d9fc9a536096e10d';
              chai.request(server)
              .delete('/api/v1/canciones/' + id)
              .end((err, res) => {
                    res.should.have.status(204);
              });
    });
});
describe('Index controller', () => {
    it('Use IC method', () => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
        });
  });
});


