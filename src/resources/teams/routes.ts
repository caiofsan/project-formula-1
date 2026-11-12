import { FastifyInstance } from "fastify";
import { getAllTeams, getTeamById } from "./service";

export async function teamRoutes(server: FastifyInstance) {
    server.get("/teams", async(_request, response) => {
        response.code(200).type("application/json");
        return { teams: getAllTeams() };
    });

    server.get("/teams/:id", async(request, response) => {
        const id = Number((request.params as { id: string }).id);
        const team = getTeamById(id);

        if (!team) {
            response.code(404).type("application/json");
            return { message: "Team not found" };
        }

        response.code(200).type("application/json");
        return { team };
    })
}