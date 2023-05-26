const app =require("../src/app")
const session = require('supertest');
const agent = session(app);

describe("Test de Rutas",()=>{
    describe("GET /rickandmorty/character/:id",()=>{
        it("Responde con status: 200",async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response=(await agent.get("/rickandmorty/character/1")).body
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        })
        it("Si hay un error responde con status: 500", async ()=>{
           await agent.get("/rickandmorty/character/5000").expect(500)
        })
    })
    describe("GET /rickandmorty/login",()=>{
        it("Response false o true si el usuario existe o no en la base de datos",async()=>{
            const response=await agent.get("/rickandmorty/login?email=prueba@gmail.com&password=alfredo1")
            const response2=await agent.get("/rickandmorty/login?email=alfredo@gmail.com&password=alfredo1")
            expect(response.body.access).toBe(false)
            expect(response2.body.access).toBe(true)
        })
    })
})