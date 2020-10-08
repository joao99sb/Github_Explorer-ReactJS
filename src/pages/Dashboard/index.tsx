import React from 'react';
import { Title } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer " />
      <Title>Explore Repositórios no GitHub</Title>
    </>
  );
};

export default Dashboard;
