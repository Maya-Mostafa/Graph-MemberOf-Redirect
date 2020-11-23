import * as React from 'react';
import styles from './GraphMemberOfRedirect.module.scss';
import { IGraphMemberOfRedirectProps } from './IGraphMemberOfRedirectProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class GraphMemberOfRedirect extends React.Component<IGraphMemberOfRedirectProps, {}> {
  public render(): React.ReactElement<IGraphMemberOfRedirectProps> {
    return (
      <div className={ styles.graphMemberOfRedirect }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            Hello .. bye
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
