import React from 'react';
import Layout from '../BasicLayout/Layout';
import Title from '../common/Title';
import Header from '../common/Header';

const styles = {
  definition: {
    fontFamily: 'Courier',
    border: '1px solid grey',
    padding: 24,
    color: '#fefefe',
    margin: 84,
    marginTop: 24,
    marginBottom: 24,
    fontSize: 18,
  },
  section: {
    margin: '0px 48px 0px',
    paddingTop: 24,
    paddingBottom: 24,
    background: 'rgb(31, 31, 31)',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #3d3d3d',
  },
  overview: {
    color: 'rgb(253, 253, 253)',
    borderBottom: '1px solid rgb(71, 65, 65)',
    fontSize: 32,
    marginBottom: 12,
    paddingBottom: 12,
  },
  exposition: {
    margin: 48,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottom: '2px solid rgb(40, 40, 40)',
    fontSize: 16,
    color: 'rgb(244, 247, 255)',
    padding: 48,
  },
  concept: {
    color: 'rgb(253, 253, 253)',
    borderBottom: '1px solid rgb(71, 65, 65)',
    fontSize: 16,
    marginBottom: 12,
    paddingBottom: 12,
    background: '#386d98',
    border: '1px solid orange',
    padding: 48,
    display: 'flex',
    justifyContent: 'center',
  },
  space: {
    margin: 124,
  }
}
const Basics = ({ content }) => {

  return (
    <Layout padded>
      <div style={{position: 'absolute', width: '100%', height: '100%' }}>
        <Title>{content.title}</Title>
        <div style={{
          overflow: 'auto',
          top: 130,
          position: 'absolute',
          bottom: 0,
          boxShadow: 'black 0px 0px 8px 1px inset',
          marginRight: 64,
          marginBottom: 0,
          padding: 32,
          width: 'calc(100vw - 128px)',

        }}>
          <div style={{fontSize: 22, margin: 28, marginTop: 32 }}>
            {content.sections.map(section => {
              if (section.type === 'header'){
                return <Header>{section.content}</Header>
              }else if (section.type === 'overview') {
                return <div style={styles.overview}>{section.content}</div>
              }
              else if (section.type === 'concept'){
                return <div style={styles.concept}>{section.content}</div>
              }
              else if (section.type === 'section'){
                return <div style={styles.section}>{section.content}</div>
              }else if (section.type ===  'definition'){
                return <div style={styles.definition}>{section.name} - {section.content}</div>
              }else if (section.type === 'exposition'){
                return <div style={styles.exposition}>{section.content}</div>
              }else if (section.type === 'space'){
                return <div style={styles.space} />
              }else if (section.type === 'iframe'){
                return (
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 120 }}>
                    <iframe width="1120" height="630" src={section.content} frameborder="0" allowfullscreen />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Basics;
