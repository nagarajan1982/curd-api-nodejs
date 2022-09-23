import propertiesReader from "properties-reader";

const ENV = process.env.ENV || 'dev';
const properties = propertiesReader(`./config/application-${ENV}.properties`);

export const getProperty = (key) => {
    return properties.get(key);
}