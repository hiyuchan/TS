interface DBI<T>{
    add(info:T): boolean;
    delete(id: number): boolean;
    getData(id: number): any[];
    update(info:T, id:number):boolean;
}

class MySql<T> implements DBI<T>{
    add(info:T): boolean{
        console.log(info)
        return true;
    }
    delete(id:number): boolean{
        return true
    }
    getData(id: number): any[]{
        var list = [
            {title:'q', desc:'w'},
            {title:'qq', desc:'ww'},
        ]
        return list
    }
    update(info: T, id: number): boolean{
        return true;
    }
}

export default MySql;