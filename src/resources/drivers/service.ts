import { drivers } from "./data";
import type { Driver } from "./types";

export function getAllDrivers(): Driver[] {
    return drivers;
}

export function getDriverById(id: number): Driver | undefined {
    return drivers.find((driver) => driver.id === id);
}