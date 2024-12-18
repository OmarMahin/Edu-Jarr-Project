import databaseConnect from "@/lib/databaseConnection";


export async function register() {
    await databaseConnect()
}