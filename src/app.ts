import bodyParser from "body-parser";
import express from "express";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;    
    }

    
}
