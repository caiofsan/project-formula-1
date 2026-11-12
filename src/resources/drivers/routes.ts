import { FastifyInstance } from "fastify";
import { getAllDrivers, getDriverById } from "./service";
import { getTeamById } from "../teams/service";

export async function driverRoutes(server:FastifyInstance) {
    server.get("/drivers", async (_request, response) => {
        response.code(200).type("application/json");
        return { drivers: getAllDrivers() };
    });

    server.get("/drivers/:id", async (request, response) => {
        const id = Number((request.params as { id: string }).id);
        const driver = getDriverById(id);

        if (!driver) {
            response.code(404).type("application/json");
            return { message: "Driver not found" };
        }
    
        const team = getTeamById(driver.teamId);
        response.code(200).type("application/json");
        return { driver };
    });
}