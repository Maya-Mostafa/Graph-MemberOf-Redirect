import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'GraphMemberOfRedirectWebPartStrings';
import GraphMemberOfRedirect from './components/GraphMemberOfRedirect';
import { IGraphMemberOfRedirectProps } from './components/IGraphMemberOfRedirectProps';

export interface IGraphMemberOfRedirectWebPartProps {
  description: string;
  empRedirectUrl : string;
  supRedirectUrl : string;
}

export default class GraphMemberOfRedirectWebPart extends BaseClientSideWebPart<IGraphMemberOfRedirectWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGraphMemberOfRedirectProps> = React.createElement(
      GraphMemberOfRedirect,
      {
        description: this.properties.description,
        empRedirectUrl : this.properties.empRedirectUrl,
        supRedirectUrl : this.properties.supRedirectUrl,
        context : this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          // header: {
          //   description: strings.PropertyPaneDescription
          // },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('empRedirectUrl', {
                  label: strings.EmpFieldLabel
                }),
                PropertyPaneTextField('supRedirectUrl', {
                  label: strings.SupFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
