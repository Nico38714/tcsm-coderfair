import React, { useState } from 'react';
import { Container, Title, Divider, Grid } from '@mantine/core';
import ManageCoderfair from '../../Components/ManageAdmin/ManageCoderfair';
import ManageCoaches from '../../Components/ManageAdmin/ManageCoaches';
import ManageJudges from '../../Components/ManageAdmin/ManageJudges';
import './AdminPage.css';

const AdminPage = () => {
  const [coaches, setCoaches] = useState([
    { id: 1, name: 'Francis Borja', contact: 'JohnDoe123@Gmail.com' },
    { id: 2, name: 'Jared Sina Hernandez', contact: 'JaneSmith567@Yahoo.com' },
  ]);
  const [judges, setJudges] = useState([
    { id: 1, name: 'Captain AMurica' },
    { id: 2, name: 'Thor'},
  ]);
  const [coderfair, setCoderFair] = useState([
    { id: 1, name: 'March CoderFair 2067', date: '10/30/67' },
    { id: 2, name: 'February Coderfair 4 AD', date: '1/11/4'},
  ]);

  return (
    <Container className="coaches-container">
      <Title className="coaches-title">Admin Dashboard</Title>
      <Divider className="section-divider" />

      <Grid>
        <Grid.Col span={12} md={5} lg={5}>
          <ManageCoderfair coderfair={coderfair} setCoderFair={setCoderFair} />
        </Grid.Col>

        <Grid.Col span={12} md={5} lg={5}>
          <ManageCoaches coaches={coaches} setCoaches={setCoaches} />
        </Grid.Col>
      </Grid>

      <Divider className="section-divider" />

      <ManageJudges judges={judges} setJudges={setJudges} />
    </Container>
  );
};

export default AdminPage;
