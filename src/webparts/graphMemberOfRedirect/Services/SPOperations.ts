import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClient} from "@microsoft/sp-http";
// import {UrlParams} from './UrlParams';

const getGraphMemberOf = (context: WebPartContext) : Promise <string> =>{
    let graphUrl = '/me/transitiveMemberOf/microsoft.graph.group';
    
    //test for supervisors
    //let graphUrl = '/users/mark.marshall@peelsb.com/transitiveMemberOf/microsoft.graph.group';
    //let graphUrl = '/users/rachel.marshall@peelsb.com/transitiveMemberOf/microsoft.graph.group';
    //let graphUrl = '/users/tina.godsoe@peelsb.com/transitiveMemberOf/microsoft.graph.group';
    //test for employee
    //let graphUrl = '/users/humera.khan@peelsb.com/transitiveMemberOf/microsoft.graph.group';
    
    //let graphUrl = "/users/mark.marshall@peelsb.com/transitiveMemberOf/microsoft.graph.group?$count=true&$select=displayName&$filter=displayName eq 'hs incident reporting employer - dl - o365'";

    //let graphUrl = '/me/memberof';
    //https://graph.microsoft.com/v1.0/users/mark.marshall@peelsb.com/transitiveMemberOf/microsoft.graph.group?$count=true&$select=displayName&$filter=displayName eq 'hs incident reporting employer - dl - o365'


    return new Promise <string> (async(resolve, reject)=>{
        context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient)=>{
            client
                .api(graphUrl)
                .header('ConsistencyLevel', 'eventual')
                .count(true)
                .select('displayName')
                .filter("displayName eq 'HS Incident Reporting employer - dl - o365'")
                .get((error, response: any, rawResponse?: any)=>{
                    console.log(response);
                    resolve(response);
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
        getGraphMemberOf(context).then((response: any)=>{
            if (response.value.length !== 0){
                window.location.href = supUrl;
            }
            else{
                window.location.href =  empUrl;
            }
        });
    }else{        
        document.getElementsByTagName("html")[0].style.display = "block";
        getGraphMemberOf(context).then((response: any)=>{
            if(response.value.length !== 0){
                console.log("You are: Supervisor");
            }else{
                console.log("You are : Employee or Undefined");
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

