import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongo://localhost:/model_example') => 
mongoose.connect(mongoDatabaseURI);

export default connection;