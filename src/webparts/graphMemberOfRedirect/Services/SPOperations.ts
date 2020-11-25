import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClient} from "@microsoft/sp-http";
// import {UrlParams} from './UrlParams';

const getGraphMemberOf = (context: WebPartContext) : Promise <string> =>{
    let graphUrl = '/me/memberof';

    return new Promise <string> (async(resolve, reject)=>{
        context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient)=>{
            client
                .api(graphUrl)
                .get((error, response: any, rawResponse?: any)=>{
                    console.log(response);
                    resolve(JSON.stringify(response));
                });
        });
    });
};

const isUrlParam = (param:string) : boolean =>{
    const queryString :string = window.location.search,
        urlParams :any = new URLSearchParams(queryString);
    return urlParams.has(param);
};

export const redirect = (context: WebPartContext, empUrl: string, supUrl: string) =>{    
    let stopRedirect : boolean = isUrlParam('stop');
    
    if(!stopRedirect){
        document.getElementsByTagName("html")[0].hidden = true;
        getGraphMemberOf(context).then((response)=>{
            if(response.indexOf("HS Incident Reporting employer - dl") != -1){
                console.log("supervisor");
                window.location.href = supUrl;
            }else{
                console.log("employee or not");
                window.location.href =  empUrl;
            }
        });
    }
};

export const testFnc = () =>{
    console.log('Testing ... working');
    /*let myUrlParams = new UrlParams();
    console.log(myUrlParams.get('product'));
    console.log(myUrlParams.has('color'));
    console.log(myUrlParams.getAll('size'));
    myUrlParams.add('size', 'xl');
    console.log(myUrlParams.getAll('size'));
    for (const key of myUrlParams.keys) console.log(key);
    for (const value of myUrlParams.values) console.log(value);*/
};

