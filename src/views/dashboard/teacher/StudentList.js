import React from 'react';
import { connect } from 'react-redux';

import { Box } from '@material-ui/core';

import StudentDataTable from '../../../components/home/teacher/studentDataTable';
import Toolbar from '../../../components/home/teacher/Toolbar';

const Home = (props) => {
  const { studnetData } = props;

  return (
    <div>
      <Toolbar />
      <Box mt={2}>
        <StudentDataTable customers={studnetData} />
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studnetData: state.rootReducer.studnetData,
});

export default connect(mapStateToProps)(Home);
