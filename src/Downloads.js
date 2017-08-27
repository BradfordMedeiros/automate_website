import React from 'react';
import Layout from './BasicLayout/Layout';
import Header from './common/Header';

const Downloads = () => (
  <Layout padded>
    <Header>Raspberry Pi Image (Coming Soon - Recommended)</Header>
    <Header>Linux Tarball (Coming Soon)</Header>
    <Header>Windows Executable (Coming Soon)</Header>
    <Header> <a href="https://github.com/BradfordMedeiros/">Github (source code)</a></Header>
  </Layout>
);

export default Downloads;