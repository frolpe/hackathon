const client = require('./connection'); // Assuming database.js is in the same directory

async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        async function listDatabases(client){
            databasesList = await client.db().admin().listDatabases();
        
            console.log("Databases:");
            databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        };
        
        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
