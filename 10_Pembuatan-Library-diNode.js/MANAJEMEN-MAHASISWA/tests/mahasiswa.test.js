import request from "supertest"
import app from "./../app.js"

describe("testing api from /mahasiswa" , () => {
    it("should return data mahasiswa", async () => {
        const response = await request(app).get('/mahasiswa')
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Mahasiswa retrive successfully")
    })
})