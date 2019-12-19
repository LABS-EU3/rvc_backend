const request = require('supertest');
const server = require('../../../api/server');

function random(option) {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (var i = 0; i < 15; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    if (option === 'email') {
        return string + '@email.com'
    } else {
        return string;
    }
}

const register = {
    email: random('email'),
    username: random(),
    password: 'password'
}


describe("POST /api/auth/register", () => {
    it("Create a new User and return ", () => {
        return request(server)
            .post("/api/auth/register")
            .send(register)
            .expect(201)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(typeof res.body === "object").toBe(true)
                expect(typeof res.body.username).toBe("string")
                expect(typeof res.body.id).toBe("number")
            })
    })

    it("Test wrong entry", () => {
        return request(server)
            .post("/api/auth/register")
            .send("t")
            .expect(400)
    })
})
