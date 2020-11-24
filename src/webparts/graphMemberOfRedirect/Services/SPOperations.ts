import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClient} from "@microsoft/sp-http";

export const getGraphMemberOf = (context: WebPartContext) =>{
    
    let graphUrl = '/me';

    context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient)=>{
            client
                .api(graphUrl)
                .get((error, response: any, rawResponse?: any)=>{
                    console.log(response);
                })

        })
}

export const redirect = (empUrl: string, leadUrl: string) =>{
    
}