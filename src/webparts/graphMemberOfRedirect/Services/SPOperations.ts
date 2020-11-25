import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClient} from "@microsoft/sp-http";
import {useHistory} from 'react-router-dom';

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
                })
        })
    })

    
}

export const redirect = (context: WebPartContext, empUrl: string, leadUrl: string) =>{
    const history = useHistory();
    getGraphMemberOf(context).then((response)=>{
        if(response.indexOf("HS Incident Reporting employer") != -1){
            window.location.href = empUrl;
        }else if( response.indexOf("HS Incident Reporting employee") != -1){
            window.location.href =  leadUrl;
        }
    })
}