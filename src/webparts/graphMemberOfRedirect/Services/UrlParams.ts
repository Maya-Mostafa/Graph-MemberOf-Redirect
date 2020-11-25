export class UrlParams  {

    //Old way
    /*public queryString: string;
    public urlParams :any;
    public keys : [];
    public values : [];
    public entries : [];
    constructor(){
        this.queryString = window.location.search;
        this.urlParams = new URLSearchParams(this.queryString);
        this.keys = this.urlParams.keys();
        this.values = this.urlParams.values();
        this.entries = this.urlParams.entries();
    }*/

    queryString : string = window.location.search;
    urlParams : any = new URLSearchParams(this.queryString);
    keys : [] = this.urlParams.keys();
    values : [] = this.urlParams.values();
    entries : [] = this.urlParams.entries();

    //Get the whole query string
    getQueryStr = () : string =>{
        return this.queryString;
    }

    //Get a specific parameter value
    get = (param:string) : string =>{
        return this.urlParams.get(param);
    };

    //Check for the Presence of a Parameter
    has = (param:string) : boolean =>{
        return this.urlParams.has(param);
    };

    //Get all values as an array for a specific param
    getAll = (param:string) : string =>{
        return this.urlParams.getAll(param);
    };

    //Add another value to a specific param
    add = (param:string, addedVal:string) : void =>{
        this.urlParams.append(param, addedVal);
    };
}