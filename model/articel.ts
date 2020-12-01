import MySql from '../modules/mysql'

class Articel {
    title: string | undefined;
    desc: string | undefined;
    status?: number | undefined;
    constructor(params:{
        title: string | undefined;
        desc: string | undefined;
        status?: number | undefined;
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var artModel = new MySql<Articel>();

export {Articel,artModel}