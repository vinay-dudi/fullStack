import {sequelize} from "./sequlize"
export const testConnection=async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
}