import DocumentMeta from 'react-document-meta';
import React from 'react';

class MetaData extends React.Component {
    render() {
      const meta = {
        title: 'Covid-19 Data',
        description: 'Real Time Data of Covid-19 infection',
        canonical: 'https://romeo9.github.io/covid-data',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };
   
      return (
        <DocumentMeta {...meta}/>
      );
    }
  }

export default MetaData