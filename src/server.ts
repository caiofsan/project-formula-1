import fastify from "fastify";
import cors from "@fastify/cors";
import { driverRoutes } from "./resources/drivers/routes";

const server = fastify({logger: true});

// Register a plugin to my server (the CORS plugin, in this case)
server.register(cors, {
    origin: "*", // ANY origin can consume this API
    methods: ["GET", "POST"] // Only these methods can be requested by the origin
})

server.register(driverRoutes);

// Server listener
server.listen({port: 3333}, () => {
    console.log("Server init");
})