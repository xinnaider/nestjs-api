import { DataSource } from 'typeorm';
import { config } from './ormconfig';

const datasource = new DataSource(config); // 
datasource.initialize();
export default datasource;