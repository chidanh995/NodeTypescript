import bodyParser from "body-parser";
import express from "express";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;   
        
        this.initializeControllers(controllers);
        this.initializeMiddlewares();
    }

    /**
     * listen
     */
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use("/", controller.router);
        });
    }
}
