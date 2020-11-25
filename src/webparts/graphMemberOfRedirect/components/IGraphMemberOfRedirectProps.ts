import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IGraphMemberOfRedirectProps {
  description: string;
  context : WebPartContext;
  empRedirectUrl : string;
  supRedirectUrl : string;
}
