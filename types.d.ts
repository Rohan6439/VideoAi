import {Connection} from "moongoose";

declare global{
    var moongoose:{
        conn: Connection | null,
        promise:Promise<Connection> | null;

    }
}

export {}