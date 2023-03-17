const app = require("../app");
const request= require("supertest");
const agent= request(app);
describe("Rest de RUTAS", ()=>{
    describe("Get richandmorty/{id}",()=>{
        it("Responde con status 200",async ()=>{
            await agent.get("/rickandmorty/onsearch/1");
            expect(200);
        });
        it("Responde un objeto con las propiedades: id, name, species, gender, image", async ()=>{
            const response = await agent.get("/rickandmorty/onsearch/1");
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("image");
        });
        it("Si hay un error responde con status: 500", async ()=>{
            const response = await agent.get("/rickandmorty/onsearch/1000");
            return expect(response.statusCode).toBe(500);
        });
    });
});