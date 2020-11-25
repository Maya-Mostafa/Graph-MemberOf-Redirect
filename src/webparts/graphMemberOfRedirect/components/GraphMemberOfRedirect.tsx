import * as React from 'react';
import styles from './GraphMemberOfRedirect.module.scss';
import { IGraphMemberOfRedirectProps } from './IGraphMemberOfRedirectProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {redirect} from '../Services/SPOperations';

export default function GraphMemberOfRedirect (props: IGraphMemberOfRedirectProps) {

    redirect(props.context, props.empRedirectUrl, props.leadRedirectUrl);
   

    return (
      <div className={ styles.graphMemberOfRedirect }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>MS Graph MemberOf Refirect Web Part!</span>
              <p className={ styles.subTitle }>Please edit the webpart to define the redirect pages required.</p>
              <p className={ styles.description }>{escape(props.description)}</p>
              <p className={ styles.description }><label>Employee Redirect URL: </label>{escape(props.empRedirectUrl)}</p>
              <p className={ styles.description }><label>Employer Redirect URL: </label>{escape(props.leadRedirectUrl)}</p>
            </div>


          </div>
        </div>
      </div>
    );
  
}
